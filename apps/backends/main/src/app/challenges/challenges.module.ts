import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeResolver } from './challenge.resolver';

/**
 * Challenges Module - Handles competitive challenges and tournaments
 * Users can participate in challenges to win real prizes
 */
@Module({
  providers: [ChallengeService, ChallengeResolver],
  exports: [ChallengeService],
})
export class ChallengesModule {}
