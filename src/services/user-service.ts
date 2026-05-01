import type { IUserRepository, UserDoc } from "../types";
import { AppError } from "../utils";
import { usTryCatch } from "../utils";
//using dependency injection here. Practising the Strategy pattern
export async function UserService(userRepo: IUserRepository) {
  return {
    getUser(id: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.getUser(id));
    },

    getUserByEmail(email: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.getUserByEmail(email));
    },

    updateUser(
      id: string,
      data: Partial<UserDoc>,
    ): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.updateUser(id, data));
    },

    deleteUser(id: string): Promise<UserDoc | AppError> {
      return usTryCatch(() => userRepo.deleteUser(id));
    },
  };
}
