import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
},{timestamps:true});
 
const user = mongoose.model('User',userSchema);
export default user;