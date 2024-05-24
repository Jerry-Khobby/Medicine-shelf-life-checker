import mongoose from "mongoose";


export async function initMongoose(){
  if(mongoose.connections[0].readyState){
    return true;
  }
  try{
    const uri=process.env.MONGODB_URL;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");
  }catch(error){
    console.error("MongoDB connection error " + error)
  }
}