
import mongoose from "mongoose";

const Usershcema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:4,
    },
    email:{
        type:String,
        require:true,
        unique:true,
         match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    },
    password:{
    type:String ,
    require:true,
    minlength:6,
    },
},
{ timestamps:true},
)

const User = mongoose.model('User', Usershcema)

export default User