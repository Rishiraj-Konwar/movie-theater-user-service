import type { UserDoc } from "../types"
import { AppError } from "./app-error"
import { StatusCodes } from "http-status-codes"
import type {Request, Response, NextFunction, RequestHandler} from "express"
import { ErrorResponse } from "./error-response"

export async function usTryCatch(task: () => Promise<UserDoc | null>): Promise<UserDoc>{
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

export function ucTryCatch(task: RequestHandler): RequestHandler{
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
      await task(req, res, next)
    }catch(err){
      if(err instanceof AppError){
        ErrorResponse.error = {explanation: err.message}
        res.status(err.statusCode).json(ErrorResponse)
        return
      }
      ErrorResponse.error = {explanation: "Internal server error"}
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
  }
}