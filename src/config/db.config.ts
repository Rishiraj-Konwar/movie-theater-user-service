import mongoose from "mongoose"

const mongoUri: string = process.env.MONGO_URI as string

export const connectDB = async () => {
  try{
    await mongoose.connect(mongoUri)
    const dbDriver = mongoose.connection.db
    console.log("Connection t user database was successful")
    return dbDriver
  }catch(err){
    console.log("Connection to user database was not successful", err)
    process.exit(1)
  }
}