import express from "express";
const router = express.Router();
import {createNewUser,getAllUser,deleteUser,updateUser,getSpecificData,authRoute} from "../controllers/UserControllers.js";

router.post('/postUser',createNewUser); //For Data Creation
router.get('/getAllUser',getAllUser); // For Getting Data
router.get('/getUser/:id',getSpecificData); // For Getting Specific Data
router.put('/updateUser/:id',updateUser); // For updating Data
router.delete('/deleteUser/:id',deleteUser); // For Deleting Data

router.post('/login',authRoute);  // For Login Authentication

export default router
