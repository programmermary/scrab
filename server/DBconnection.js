import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()//load envirment variable for .env file

const Dbconnect = async () => {
 try{
    await mongoose.connect("mongodb+srv://maryamihsan601:iNOAaEDBUUxWlLDk@cluster0.8td0dum.mongodb.net/ScrabDataBase", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
 }
 catch(error)
 {
  console.error("the dbconnection faild" , error.message);
  process.exit(1)//exsit with fail when db is not connect
 }
}

export default Dbconnect;