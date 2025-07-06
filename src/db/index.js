import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log( `\n Mongo connected!! DB HOST:${connection.connection.host}`
    );
  } catch (error) {
    console.error("Mongodb connection error!", error);
    process.exit(1);
  }
};

export default connectDB;