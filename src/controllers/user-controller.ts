import { UserService } from "../services/user-service";
import type { Request, Response } from "express";
import { ucTryCatch } from "../utils/try-catch";
import type { IUserRepository } from "../types";
import { SuccessResponse } from "../utils";
import { StatusCodes } from "http-status-codes";

function userController(userRepo: IUserRepository) {
  const userService = UserService(userRepo);
  return {
    getUser: ucTryCatch(async (req: Request, res: Response) => {
      const id = req.headers["x-user-id"] as string;
      const user = await userService.getUser(id);
      SuccessResponse.data = { user: user };
      res.status(StatusCodes.OK).json(SuccessResponse);
    }),
    
  };
}
