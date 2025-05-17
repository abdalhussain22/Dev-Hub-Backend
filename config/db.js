import { connect } from 'mongoose';

const DB_URL = 'mongodb+srv://admin22:admin22@cluster0.ubclkpw.mongodb.net/DevHub';

const connectDB = async()=>{
    try{
        if(true){
            await connect(DB_URL);
            console.log("Status Code: 200");
        }
    } catch (error){

        console.log('error',error)
    }
}

export default connectDB;