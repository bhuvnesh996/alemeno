import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.tcjmf.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("Error connecting to DB");
  }
};

export default connectDB;
