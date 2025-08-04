import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.userService.createUser(createUserDto);
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.userService.findUserById(id);
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    try {
      const user = await this.userService.findUserByEmail(email);
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>
  ): Promise<User> {
    try {
      const user = await this.userService.updateUser(id, updateUserDto);
      // Don't return password in response
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.userService.deleteUser(id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
