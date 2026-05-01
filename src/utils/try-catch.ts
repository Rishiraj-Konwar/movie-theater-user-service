import type { UserDoc } from "../types"
import { AppError } from "./app-error"
import { StatusCodes } from "http-status-codes"


export async function usTryCatch(task: () => Promise<UserDoc | null>): Promise<UserDoc | AppError>{
    try{
      const response = await task()
      if (!response){
        throw new AppError("User not found", StatusCodes.NOT_FOUND)
      }
      return response
    }catch(err){
      if (err instanceof AppError) throw err
      throw new AppError("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }