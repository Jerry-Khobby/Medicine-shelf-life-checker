import mongoose from "mongoose";


export async function initMongoose(){
  try{
    const uri=process.env.MONGO

  }catch(error){
    console.error("MongoDB connection error " + error)
  }
}