import type { IUserRepository } from "../types";

export class UserService {
  private userRepo: IUserRepository
  constructor(userRepo: IUserRepository){
    this.userRepo = userRepo
  }

  
}