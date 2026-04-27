import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config";
import { setAuth } from "./src/config";
import { toNodeHandler } from "better-auth/node";

dotenv.config();

const app = express();
const port = process.env.PORT;

await connectDB();
const auth = setAuth();
app.get("/", (req, res) => {
  res.send("This is the user service")
})
app.all("/api/auth/*path", toNodeHandler(auth));

app.listen(port, () => {
  console.log(`user service running at http://localhost:${port}`);
});
