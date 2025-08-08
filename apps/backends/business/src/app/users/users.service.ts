import { Injectable } from '@nestjs/common';
import { UserService } from '../../../../main/src/app/user/user.service';

@Injectable()
export class UsersService {
  constructor(private readonly userService: UserService) {}

  async getUserById(id: string) {
    return this.userService.findUserById(id);
  }

  async getUserByEmail(email: string) {
    return this.userService.findUserByEmail(email);
  }

  async listUsers(limit = 20, offset = 0) {
    return this.userService.listUsers(limit, offset);
  }
}
