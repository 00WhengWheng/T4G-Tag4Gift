import { Module } from '@nestjs/common';
import { PrismaModule } from '@t4g/database';
import { CoinsService } from './coins.service';
import { ChallengePassService } from './challenge-pass.service';

@Module({
  imports: [PrismaModule],
  providers: [CoinsService, ChallengePassService],
  exports: [CoinsService, ChallengePassService],
})
export class CoinsModule {}
