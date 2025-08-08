import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { UserService } from '../../../../main/src/app/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UsersService, UserService],
  exports: [UsersService],
})
export class UserModule {}
