import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';

/**
 * Challenges Module - Handles competitive challenges and tournaments
 * Users can participate in challenges to win real prizes
 */
@Module({
  controllers: [ChallengeController],
  providers: [ChallengeService],
  exports: [ChallengeService],
})
export class ChallengesModule {}
