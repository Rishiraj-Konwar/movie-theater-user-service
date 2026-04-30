import { UserService } from '../services/user-service';
import type { Request, Response } from 'express';
export class UserController {
  private userService: UserService
  constructor(userService: UserService){
    this.userService = userService
  }

}