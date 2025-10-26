import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.get("/home",(req,res)=>{
    return res.json({message:"API is working"});
})

app.use(cors({
    origin:"*",
    credentials:true
}));

app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));   

export { app };