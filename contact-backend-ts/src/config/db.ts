import mongoose from "mongoose";
import { config } from "dotenv";

config();
const connectDB = async (): Promise<void> => {
  try {
    const dbURI = process.env.MONGODB_URI as string;
    await mongoose.connect(dbURI);
    console.log("MongoDb connected succesffuly")
  } catch (err: unknown) {
    if(err instanceof Error){
      console.error("MongoDb connection error: ", err.message)
    } else {
    console.error(`Database connection error: ${err}`);
    
  }
};
}
export default connectDB