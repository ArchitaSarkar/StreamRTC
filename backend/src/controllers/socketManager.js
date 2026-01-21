import { Server } from "socket.io";

let connections = {};
let messages = [];
let timeOnline = {};

const connectToSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["*"],
            credentials: true
        },
    });
    io.on("connection", (socket) => {
        socket.on("join-call", (path) => {
            if (connections[path] === undefined) {
                connections[path] = [];
            }
            connections[path].push(socket.id);
            timeOnline[socket.id] = Date.now();

            // Notify EXISTING users that a NEW user has joined
            for (let a = 0; a < connections[path].length; a++) {
                if (connections[path][a] !== socket.id) {
                    // CHANGE: Send [socket.id] as the second argument so the frontend loop runs once
                    socket.to(connections[path][a]).emit("user-joined", socket.id, [socket.id]);
                }
            }

            // CHANGE: Notify the NEW user about EXISTING users
            // Filter out self, so we don't connect to ourselves
            const existingUsers = connections[path].filter(id => id !== socket.id);
            if (existingUsers.length > 0) {
                socket.emit("user-joined", socket.id, existingUsers);
            }
        })
        socket.on("signal", (toId, message) => {
            io.to(toId).emit("signal", socket.id, message);

        })
        socket.on("chat-message", (data, sender) => {
            const [matchingRoom, found] = Object.entries(connections)
                .reduce(([room, isFound], [roomKey, roomValue]) => {
                    if (!isFound && roomValue.includes(socket.id)) {
                        return [roomKey, true];
                    }
                    return [room, isFound];
                }, ['', false]);
            if (found == true) {
                if (messages[matchingRoom] == undefined) {
                    messages[matchingRoom] = [];
                }
                messages[matchingRoom].push({ sender: sender, message: data, time: Date.now() });
                for (let a = 0; a < connections[matchingRoom].length; a++) {
                    io.to(connections[matchingRoom][a]).emit("chat-message", data, sender, socket.id);
                }
            }
        })
        socket.on("disconnect", () => {
            const diffTime = Date.now() - timeOnline[socket.id];
            var key
            for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
                for (let a = 0; a < v.length; ++a) {
                    if (v[a] === socket.id) {
                        key = k;

                        for (let a = 0; a < connections[key].length; ++a) {

                            io.to(connections[key][a]).emit("user-disconnected", socket.id, diffTime);
                        }
                        var index = connections[key].indexOf(socket.id);
                        connections[key].splice(index, 1);

                        if (connections[key].length == 0) {
                            delete connections[key];


                        }
                    }
                }
            }
        })
    });
    return io;
}

export { connectToSocket };