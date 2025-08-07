import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, HttpException, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const user = await this.userService.createUser(createUserDto);
      return new UserResponseDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserResponseDto> {
    try {
      const user = await this.userService.findUserById(id);
      return new UserResponseDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<UserResponseDto> {
    try {
      const user = await this.userService.findUserByEmail(email);
      return new UserResponseDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserResponseDto> {
    try {
      const user = await this.userService.updateUser(id, updateUserDto);
      return new UserResponseDto(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async patchUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<UpdateUserDto>
  ): Promise<UserResponseDto> {
    try {
      const user = await this.userService.updateUser(id, updateUserDto);
      return new UserResponseDto(user);
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
  @Get()
  async listUsers(@Query('limit') limit = 20, @Query('offset') offset = 0): Promise<{ users: UserResponseDto[]; total: number; hasMore: boolean }> {
    const { users, total, hasMore } = await this.userService.listUsers(limit, offset);
    return {
      users: users.map(u => new UserResponseDto(u)),
      total,
      hasMore
    };
  }
}
