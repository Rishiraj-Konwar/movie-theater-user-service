import mongoose from "mongoose";
import type { UserDoc } from "../types";

const userSchema = new mongoose.Schema<UserDoc>({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "user"
  }
},{
  id: false,
  collection: "user",
  strict: false
})

export const UserModel = mongoose.model("user", userSchema)