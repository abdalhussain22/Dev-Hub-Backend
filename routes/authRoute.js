// import express from "express";
// import User from "../models/user.modal.js";
// const authroute = express.Router();
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// authroute.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email) return res.status(400).json({ wrn: "Email Is Required" });
//     if (!password) return res.status(400).json({ wrn: "password Is Required" });

//     const find_User = await User.findOne({ email });
//     if (!find_User)
//       return res.status(401).json({ wrn: "User Not Found or Invalid Email" });

//     const find_password = await bcrypt.compare(password, find_User.password);
//     if (!find_password)
//       return res.status(402).json({ wrn: "password is Incorrect" });

//     const Login_User_token = await jwt.sign(
//       {
//         userId: find_User._id,
//         userName: find_User.username,
//         email: find_User.email,
//       },
//       "abcdefg692354%#$^8*",
//       { expiresIn: "1d" }
//     );
    
//     return res
//       .status(200)
//       .json({ msg: "User Login SuccessFully", LoginUser: find_User,User_Token:Login_User_token });
//   } catch (error) {
//     console.log(error);
//   }
// });
// export default authroute;
