import User from "../models/userModel.js";
import bcrypt from 'bcrypt'

const registerUser = async (req , res) =>{
    const {name , email , password} = req.body;
    try{
        const exsitUser = await User.findOne({email})
        if(exsitUser){
            return res.status(400).json({message:"user already exsit"})
        }
        if(!name || !email || !password){
            return res.status(400).json({message:"all felied are require"})
        }
        if(name.length<4){
            return res.status(400).json({message:"name should be at least 4 letter"})
        }
        if(password.length < 6){
            return res.status(400).json({message:"password should be at least 6 letter"})
        }
         const hashedPassword = await bcrypt.hash(password,12)
       
        const newUser = new User({
            name ,
            email,
            password:hashedPassword
        })
       
        await newUser.save()
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err){
        res.status(500).json({ message: "Server error", error: err });
    }
}
 export default registerUser
