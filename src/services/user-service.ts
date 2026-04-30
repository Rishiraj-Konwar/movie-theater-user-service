import { StatusCodes } from "http-status-codes";
import type { IUserRepository, UserDoc } from "../types";
import { AppError } from "../utils";
export class UserService {
  private userRepo: IUserRepository;
  constructor(userRepo: IUserRepository) {
    //using dependency injection here. Practising the Strategy pattern
    this.userRepo = userRepo;
  }

  private async execute(task: () => Promise<UserDoc | null>): Promise<UserDoc | AppError>{
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

  async getUser(id: string): Promise<UserDoc | AppError> {
    return this.execute(() => this.userRepo.getUser(id))
  }

  async getUserByEmail(email: string): Promise<UserDoc | AppError> {
    return this.execute(() => this.userRepo.getUserByEmail(email))
  }

  async updateUser(
    id: string,
    data: Partial<UserDoc>,
  ): Promise<UserDoc | AppError> {
    return this.execute(() => this.userRepo.updateUser(id, data))
  }

  async deleteUser(id: string): Promise<UserDoc | AppError> {
    return this.execute(() => this.userRepo.deleteUser(id))
  }
}