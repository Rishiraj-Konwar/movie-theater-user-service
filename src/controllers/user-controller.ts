import { UserService } from '../services/user-service';
import type { Request, Response } from 'express';
export class UserController {
  private userService: UserService
  constructor(userService: UserService){
    this.userService = userService
  }
  async getUser(req: Request, res: Response){
    const id = req.headers["x-user-id"] as string
    const response = await this.userService.getUser(id)
  }
}