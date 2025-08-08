import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Get()
  async listUsers(@Query('limit') limit = 20, @Query('offset') offset = 0) {
    return this.userService.listUsers(limit, offset);
  }
}
