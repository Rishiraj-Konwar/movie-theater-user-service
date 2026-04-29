import {UserModel, type UserDoc} from "../models/user-model"

const UserRepository = {
  async getUser(id: string){
      const user = await UserModel.findById(id)
      return user
  }
}