import {betterAuth} from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import type mongoose from "mongoose"

export const auth = (db: mongoose.mongo.Db) => {
  betterAuth({
  database: mongodbAdapter(db)
})
}