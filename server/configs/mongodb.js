import mongoose from "mongoose";

// connecting to mongoDB db

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/bananacodequest`);
};

export default connectDB;
