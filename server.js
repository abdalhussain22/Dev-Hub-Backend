import express from "express";
import cors from 'cors';
const app = express();
import('dotenv').then(dotenv => dotenv.config({ quiet: true }));

import connectDB from './config/db.js'; // modern way
import router from "./routes/UserRouters.js";
import { authRoute } from "./controllers/UserControllers.js";

//Middlewares
app.use(cors())//Cross Origin Resource Sharing
app.use(express.json()) //Send Data to DB
app.use("/api/v0/user",router)// User Router
app.use("/auth",authRoute)// Auth Router

//Base Route
app.get('/',(req,res)=>{
    res.send("<h1>Server is running...</h1>");
});

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`Server start at port: http://localhost:${process.env.PORT}`)
})