import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';

/**
 * Challenges Module - Handles competitive challenges and tournaments
 * Users can participate in challenges to win real prizes
 * Now uses tRPC instead of REST controllers
 */
@Module({
  providers: [ChallengeService],
  exports: [ChallengeService],
})
export class ChallengesModule {}
