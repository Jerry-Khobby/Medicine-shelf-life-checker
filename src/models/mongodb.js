import mongoose from "mongoose";


export async function initMongoose(){
  try{
    const uri=process.env.MONGODB_URL;
    await mongoose.connect(uri,{
      useNewurlParser:true,
      useUnifiedTopology:true,
    });
    console.log("Connected to MongoDB successfully");
  }catch(error){
    console.error("MongoDB connection error " + error)
  }
}