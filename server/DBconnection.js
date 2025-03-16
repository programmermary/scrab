import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()//load envirment variable for .env file

const mongo_Url = process.env.MONGO_URL
const Dbconnect = async () => {
 try{
    await mongoose.connect(mongo_Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected ");
 }
 catch(error)
 {
  console.error("the dbconnection faild" , error.message);
  process.exit(1)//exsit with fail when db is not connect
 }
}

export default Dbconnect;