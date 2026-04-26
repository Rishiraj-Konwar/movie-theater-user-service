import mongoose from "mongoose";

const mongoUri: string = process.env.MONGO_URI as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connection to user database was successful");
  } catch (err) {
    console.log("Connection to user database was not successful", err);
    process.exit(1);
  }
};

export const mongoClientDb = () => {
  return mongoose.connection.getClient().db();
};
