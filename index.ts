import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config"
import { auth } from "./src/config"
import type mongoose from "mongoose"

dotenv.config()

const app = express()
const port = process.env.PORT

const dbDriver = await connectDB()

auth(dbDriver as mongoose.mongo.Db)

app.get("/", (req, res) => {
  res.send("Hello from the user service")
})

app.listen(port, () => {
  console.log(`user service running at http://localhost:${port}`)
})