import express from "express";
import cors from 'cors';
const app = express();

import connectDB from './config/db.js'; // modern way
import router from "./routes/UserRouters.js";
import { authRoute } from "./controllers/UserControllers2.js";
import { authmiddleware } from "./routes/authMiddleware.js";

//Middleware
app.use(cors())//Cross Origin Resource Sharing
app.use(express.json()) //Send Data to DB
app.use("/app",router)// User Router
app.use("/auth",authRoute)// Auth Router

// Auth Middleware Route
app.get("/authmiddleware",authmiddleware,(req,res)=>{
    console.log("User ID: ",req.user.userId);
    console.log("User Email: ",req.user.email);
    console.log("User Username: ",req.user.userName);
    console.log("access authorized");
})

//Base Route
app.get('/',(req,res)=>{
    res.send("Server is running...");
});

// Creating server on port 3000
app.listen(3002,()=>{
    connectDB();
    console.log("Server start at port: http://localhost:3002")
})