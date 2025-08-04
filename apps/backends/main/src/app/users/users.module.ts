import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '@t4g/database';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UsersModule {}
