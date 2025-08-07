import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { PrismaService } from '@t4g/database';

@Module({
  providers: [GiftService, PrismaService],
  controllers: [GiftController],
  exports: [GiftService],
})
export class GiftModule {}
