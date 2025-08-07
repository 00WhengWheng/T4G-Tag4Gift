import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';

/**
 * Challenge Module for Business Backend
 * Handles challenge management operations for business users
 */
@Module({
  imports: [],
  controllers: [ChallengeController],
  providers: [ChallengeService],
  exports: [ChallengeService],
})
export class ChallengeModule {}
