import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const login = async (req , res) =>{
try{
    const {email , password} = req.body;
    const user = await User.findOne({email})
    const errorMesg = "authintcation faild email or password is wrong"
 if(!user){
    return res.status(403).json({message :errorMesg})
 }

 const isPasswordEqual =await bcrypt.compare(password, user.password)
 if(!isPasswordEqual){
    return res.status(403).json({message :errorMesg})
 }

 const jwtToken = jwt.sign(
    {email:user.email ,_id:user._id},
    process.env.JWT_SECRET,
    {expiresIn : '24h'}
)

res.status(200).json({message:"logined in ",email , password , jwtToken}

)
}catch(err){
 res.status(500).json({message:"internal server error"})
}
}

export default login