import type { IUserRepository, UserDoc } from "../types";
import { AppError } from "../utils";
import { usTryCatch } from "../utils";
//using dependency injection here. Practising the Strategy pattern
export function UserService(userRepo: IUserRepository) {
  return {
    async getUser(id: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.getUser(id));
    },

    async getUserByEmail(email: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.getUserByEmail(email));
    },

    async updateUser(
      id: string,
      data: Partial<UserDoc>,
    ): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.updateUser(id, data));
    },

    async deleteUser(id: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.deleteUser(id));
    },
  };
}
