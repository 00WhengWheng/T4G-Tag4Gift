import { Injectable } from '@nestjs/common';
import { InputType, Field } from '@nestjs/graphql';

@Injectable()
export class ChallengeService {
  // Create a new challenge
  async createChallenge(dto: CreateChallengeInput) {
    // TODO: Replace with real DB logic
    return {
      id: 'mock-challenge-id',
      game: { id: dto.gameId, type: 'quiz' },
      participants: dto.participantIds,
      results: [],
      winnerId: undefined,
      gift: { id: dto.giftId, name: 'Gift', description: '' },
    };
  }

  async joinChallenge(challengeId: string, userId: string) {
    // TODO: Replace with real DB logic
    return {
      id: challengeId,
      game: { id: 'game-id', type: 'quiz' },
      participants: [userId],
      results: [],
      winnerId: undefined,
      gift: { id: 'gift-id', name: 'Gift', description: '' },
    };
  }

  async submitResult(challengeId: string, userId: string, timeMs: number) {
    // TODO: Replace with real DB logic
    return {
      id: challengeId,
      game: { id: 'game-id', type: 'quiz' },
      participants: [userId],
      results: [{ userId, timeMs }],
      winnerId: userId,
      gift: { id: 'gift-id', name: 'Gift', description: '' },
    };
  }

  async getChallenge(challengeId: string) {
    // TODO: Replace with real DB logic
    return {
      id: challengeId,
      game: { id: 'game-id', type: 'quiz' },
      participants: ['user1', 'user2'],
      results: [{ userId: 'user1', timeMs: 1234 }, { userId: 'user2', timeMs: 2345 }],
      winnerId: 'user1',
      gift: { id: 'gift-id', name: 'Gift', description: '' },
    };
  }

  async calculateWinner(challengeId: string) {
    // TODO: Implement winner calculation
    return 'user1';
  }
}

@InputType()
export class CreateChallengeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  gameId: string;

  @Field()
  giftId: string;

  @Field(() => [String])
  participantIds: string[];
}

@InputType()
export class JoinChallengeInput {
  @Field()
  challengeId: string;

  @Field()
  userId: string;
}

@InputType()
export class SubmitResultInput {
  @Field()
  challengeId: string;

  @Field()
  userId: string;

  @Field()
  timeMs: number;
}
