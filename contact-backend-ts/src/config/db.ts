import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async (): Promise<void> => {
  try {
    
    await mongoose.connect(env.MONGODB_URI );
    console.log(env.MONGODB_URI)
  } catch (err: unknown) {
    if(err instanceof Error){
      console.error("MongoDb connection error: ", err.message)
    } else {
    console.error(`Database connection error: ${err}`);
    
  }
};
}
export default connectDB