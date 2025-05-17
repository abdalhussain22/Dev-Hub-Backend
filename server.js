import express from "express";
const app = express();

// const connectDB = require('./config/db'); // Using commonJS : old way
import connectDB from './config/db.js'; // modern way
import router from "./routes/UserRouters.js";
import { authRoute } from "./controllers/UserControllers2.js";
// import authroute from "./routes/authRoute.js";

//Middleware
app.use(express.json()) //Send Data to DB
app.use("/app",router)
app.use("/auth",authRoute)

//Defining route
// app.get('/',(req,res)=>{
//     res.send("Welcome to Backend Development");
// });

// Creating server on port 3000
app.listen(3002,()=>{
    connectDB();
    console.log("Server start at port: http://localhost:3002")
})

//  Base URL              Middle URL   EndPoint
// http://localhost:3002 /app/users   /getAllUser