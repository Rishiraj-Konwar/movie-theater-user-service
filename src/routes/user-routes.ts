import express from "express";
import { mongoUserRepository } from "../repository/user-repository";
import { userController } from "../controllers/user-controller";

export const userRouter = express.Router();

const mongoUserController = userController(mongoUserRepository); //injecting dependency here

userRouter.get("/id", mongoUserController.getUser);
userRouter.get("/email", mongoUserController.getUserByEmail);
userRouter.patch("/", mongoUserController.updateUser);
userRouter.delete("/", mongoUserController.deleteUser);
