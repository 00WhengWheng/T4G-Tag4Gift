import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { PrismaService } from '@t4g/database';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TagController],
  providers: [TagService, PrismaService],
})
export class TagModule {}
