import { registerEnumType } from '@nestjs/graphql';

export enum GameType {
  QUIZ = 'QUIZ',
  PUZZLE = 'PUZZLE',
  MUSIC = 'MUSIC',
  REACTION = 'REACTION'
}

export enum GameStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED'
}

registerEnumType(GameType, {
  name: 'GameType',
  description: 'The type of game',
});

registerEnumType(GameStatus, {
  name: 'GameStatus',
  description: 'The status of a game',
});