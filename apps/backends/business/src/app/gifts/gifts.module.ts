import { Module } from '@nestjs/common';
import { GiftService } from './gifts.service';
import { GiftController } from './gifts.controller';

@Module({
  providers: [GiftService],
  controllers: [GiftController],
})
export class GiftModule {}
