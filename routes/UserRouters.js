import express from "express";
const router = express.Router();
import {createNewUser,getAllUser,deleteUser,updateUser,getSpecificData,authRoute} from "../controllers/UserControllers2.js";

router.post('/postUser',createNewUser); //For Data Creation
router.get('/getUser',getAllUser); // For Getting Data
router.delete('/deleteUser/:UserId',deleteUser); // For Deleting Data
router.put('/updateUser/:UserId',updateUser); // For updating Data
router.get('/getSpecificData/:UserId',getSpecificData); // For Getting Specific Data
router.post('/login',authRoute);  // For Login Authentication

export default router
