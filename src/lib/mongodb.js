// Initialize Mongoose connection
import mongoose from "mongoose";
export async function initiMongoose() {
  try {
      if (mongoose.connection.readyState === 1) {
          console.log("MongoDB connection already established");
          return mongoose.connection;
      }
      return await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      });
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error; // Re-throw the error for the caller to handle
  }
}