import { StatusCodes } from "http-status-codes";
import type { IUserRepository, UserDoc } from "../types";
import { AppError } from "../utils";
import { usTryCatch } from "../utils";


//using dependency injection here. Practising the Strategy pattern
export function UserService(userRepo: IUserRepository) {
  return {
    async getUser(id: string): Promise<UserDoc> {
      return usTryCatch(async () => await userRepo.getUser(id));
    },

    async getUserByEmail(email: string): Promise<UserDoc> {
      return usTryCatch(async () => await userRepo.getUserByEmail(email));
    },

    async updateUser(
      id: string,
      data: Partial<UserDoc>,
    ): Promise<UserDoc> {
      return usTryCatch(async () => {
        if (data.id){
          throw new AppError("Cannot change the id", StatusCodes.BAD_REQUEST)
        }
        return await userRepo.updateUser(id, data)
      });
    },

    async deleteUser(id: string): Promise<UserDoc> {
      return usTryCatch(async () => await userRepo.deleteUser(id));
    },
  };
}
