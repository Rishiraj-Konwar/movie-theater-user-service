import {betterAuth} from "better-auth"
import { mongoClientDb } from "./index"
import { mongodbAdapter } from "@better-auth/mongo-adapter"

export const auth = betterAuth({
  database: mongodbAdapter(mongoClientDb())

})