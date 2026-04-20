import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config"

dotenv.config()

const app = express()
const port = process.env.PORT

await connectDB()


app.get("/", (req, res) => {
  res.send("Hello from the user service")
})

app.listen(port, () => {
  console.log(`user service running at http://localhost:${port}`)
})