import { registerEnumType } from '@nestjs/graphql';

export enum ChallengeType {
  SOLO = 'SOLO',
  MULTIPLAYER = 'MULTIPLAYER',
  TOURNAMENT = 'TOURNAMENT',
}

registerEnumType(ChallengeType, {
  name: 'ChallengeType',
  description: 'The type of challenge',
});
