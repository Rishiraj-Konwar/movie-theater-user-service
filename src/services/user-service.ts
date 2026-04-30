import type { IUserRepository } from "../types";

export class UserService {
  private userRepo: IUserRepository
  constructor(userRepo: IUserRepository){ //using dependency injection here. Practising the Strategy pattern
    this.userRepo = userRepo
  }

  
  
}