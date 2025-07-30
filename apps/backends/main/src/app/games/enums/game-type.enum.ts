import { registerEnumType } from '@nestjs/graphql';

export enum GameType {
  QUIZ = 'QUIZ',
  PUZZLE = 'PUZZLE',
  MUSIC = 'MUSIC',
  REACTION = 'REACTION',
}

registerEnumType(GameType, {
  name: 'GameType',
  description: 'The type of game',
});
