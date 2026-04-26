import {betterAuth} from "better-auth"
import { jwt } from "better-auth/plugins"
import { mongoClientDb } from "./index"
import { mongodbAdapter } from "@better-auth/mongo-adapter"

export const auth = betterAuth({
  database: mongodbAdapter(mongoClientDb()),
  emailAndPassword: {
    enabled: true
  },
  //social providers : {google, facebook}
  user: {
    additionalFields: {
      role: {
        type: ["user", "manager", "admin"],
        required: false,
        defaultValue: "user",
        input: false
      }
    }
  },
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [
    jwt({
      jwt: {
        definePayload: ({user}) => {
          return {
            id: user.id,
            email: user.email,
            role: user.role
          }
        },
        expirationTime:"30m" 
      },
      jwks: {
        keyPairConfig: {
          alg: "EdDSA",
          crv: "Ed25519"
        },
        rotationInterval: 60 * 60 * 24 * 7
      }
    })
  ],
  trustedOrigins: [process.env.API_GATEWAY_URL as string]
})