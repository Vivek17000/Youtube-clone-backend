import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./Routes/users.js"
import commentRoutes from "./Routes/comments.js"
import videoRoutes from "./Routes/videos.js"
import authRoutes from "./Routes/auth.js"
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to db")
    })
    .catch((err)=>{
        throw err;
    })
};

app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        message,
        status,
    })
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to server");
})