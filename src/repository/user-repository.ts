import {UserModel} from "../models/user-model"
import type { UserDoc } from "../types"
import type { IUserRepository } from "../types"

export const UserRepository: IUserRepository = {
  async getUser(id: string): Promise<UserDoc | null>{
      const user = await UserModel.findById(id)
      return user
  },
  async getUserByEmail(email: string): Promise<UserDoc | null>{
    const user = await UserModel.findOne({email: email})
    return user
  },
  async updateUser(id: string, data: Partial<UserDoc>): Promise<UserDoc | null>{
    const updatedUser = await UserModel.findByIdAndUpdate(id, data, {returnDocument: 'after'})
    return updatedUser
  },
  async deleteUser(id: string): Promise<UserDoc | null>{
    const result = await UserModel.findByIdAndDelete(id)
    return result 
  }
}