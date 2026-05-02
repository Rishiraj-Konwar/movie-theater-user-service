import { UserService } from "../services/user-service";
import type { Request, Response } from "express";
import { ucTryCatch } from "../utils/try-catch";
import type { IUserRepository, UserDoc } from "../types";
import { SuccessResponse } from "../utils";
import { StatusCodes } from "http-status-codes";

export function userController(userRepo: IUserRepository) {
  const userService = UserService(userRepo); // dependency injection
  return {
    getUser: ucTryCatch(async (req: Request, res: Response) => {
      const id = req.headers["x-user-id"] as string;
      const user = await userService.getUser(id);
      SuccessResponse.data = { user: user };
      res.status(StatusCodes.OK).json(SuccessResponse);
      return;
    }),
    getUserByEmail: ucTryCatch(async (req: Request, res: Response) => {
      const email = req.headers["x-user-email"] as string;
      const user = await userService.getUserByEmail(email);
      SuccessResponse.data = { user: user };
      res.status(StatusCodes.OK).json(SuccessResponse);
      return;
    }),
    updateUser: ucTryCatch(async (req: Request, res: Response) => {
      const id = req.headers["x-user-id"] as string;
      const data: Partial<UserDoc> = req.body;
      const updatedUser = await userService.updateUser(id, data);
      SuccessResponse.data = { user: updatedUser };
      res.status(StatusCodes.OK).json(SuccessResponse);
      return;
    }),
    deleteUser: ucTryCatch(async (req: Request, res: Response) => {
      const id = req.headers["x-user-id"] as string;
      const deletedUser = (await userService.deleteUser(id)) as UserDoc;
      SuccessResponse.data = {
        message: `User ${deletedUser.name} is deleted`,
        user: deletedUser,
      };
      res.status(StatusCodes.OK).json(SuccessResponse);
      return;
    }),
  };
}
