import httpsStatus from "http-status";
import{ User }  from "../models/user.models.js";
import bcrypt,{ hash } from "bcrypt";


const register= async (req, res) => {
    try {
        const { name, username, password } = req.body;          
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(httpsStatus.FOUND).json({ message: "Username already exists" });
        }  
        const hashedPassword = await bcrypt.hash(password,10); // Implement password hashing here 

        const newUser = new User({ name:name, username:username, password:hashedPassword });
        await newUser.save();     
        return res.status(httpsStatus.CREATED).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(httpsStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(httpsStatus.NOT_FOUND).json({ message: "User not found" });
        }       
        const isPasswordValid = await bcrypt.compare(password, user.password); // Implement password verification here
        if (!isPasswordValid) {
            return res.status(httpsStatus.UNAUTHORIZED).json({ message: "Invalid password" });
        }
        return res.status(httpsStatus.OK).json({ message: "Login successful", userId: user._id });
    } catch (error) {
        return res.status(httpsStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }   
};


export { register, login };
