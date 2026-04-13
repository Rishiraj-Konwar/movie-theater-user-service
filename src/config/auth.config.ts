import {betterAuth} from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import type mongoose from "mongoose"

export const setAuth = (db: mongoose.mongo.Db) => {
  return betterAuth({
  database: mongodbAdapter(db)
})
}