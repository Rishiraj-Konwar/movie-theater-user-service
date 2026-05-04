import express from "express";
import { connectDB } from "./db.config";
import { setAuth } from "./auth.config";
import { toNodeHandler } from "better-auth/node";
import { userRouter } from "../routes/user-routes";


export const app = express();

await connectDB();

const auth = setAuth();

app.use(express.json())


app.get("/", (req, res) => {
  res.send("This is the user service")
})
app.all("/api/auth/*path", toNodeHandler(auth));

app.use("/users", userRouter)