import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
},{timestamps:true});

// userSchema.pre("save",async function(next){
//     if(!this.isModified('password')){
//         return next();
//     }
//     this.password = await bcrypt.hashSync(this.password,10);
// })

// userSchema.pre("save",async function(next) {
//     if(!this.isModified('password')){
//         return next();
//     }

//     this.password = await bcrypt.hash(this.password,10)
// })
 
const user = mongoose.model('User',userSchema);
export default user;