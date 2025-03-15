import User from "../models/userModel.js";
import bcrypt from 'bcrypt'

const registerUser = async (req , res) =>{
    const {name , email , password} = req.body;
    try{
        const exsitUser = await User.findOne({email})
        if(exsitUser){
            return res.status(400).json({message:"user already exsit"})
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
