import mongoose from "mongoose";
import { UserModel } from "../models/user-model";
import type { IUserRepository, UserDoc } from "../types";

export const UserRepository: IUserRepository = {

  async getUser(id: string): Promise<UserDoc | null>{
    const user = await UserModel.findById(id)
    return user
  },
  async getUserByEmail(email: string): Promise<UserDoc | null> {
    const user = await UserModel.findOne({email: email})
    return user
  },
  async updateUser(id: string, data: Partial<UserDoc>): Promise<UserDoc | null> {
    const updatedUser = await UserModel.findByIdAndUpdate(id, data, {
      returnDocument: "after"
    })
    return updatedUser
  },
  async deleteUser(id): Promise<UserDoc | null>{
    await mongoose.connection.collection("session").deleteMany({userId: id})
    const result = await UserModel.findByIdAndDelete(id)
    return result
  }
}