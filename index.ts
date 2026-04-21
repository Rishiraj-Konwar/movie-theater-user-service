import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config"
import { auth } from "./src/config"
import { toNodeHandler } from "better-auth/node"

dotenv.config()

const app = express()
const port = process.env.PORT

await connectDB()

app.use(express.json())
app.all("/*", toNodeHandler(auth))

app.listen(port, () => {
  console.log(`user service running at http://localhost:${port}`)
})