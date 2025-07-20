export class GameCategory {
  name: string;
}

export class GameType {
  name: string;
  games: string[];
}

import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameTemplate {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  difficulty?: string;

  @Field()
  structure: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  gdevelopProjectUrl?: string;
}

export class Game {
  id: string;
  type: string;
  status?: string;
  category?: string;
  name?: string;
  description?: string;
  gdevelopProjectUrl?: string;
}

export const GAME_CATEGORIES = [
  'knowledge', 'gossip', 'music', 'sport', 'history', // quiz
  'frozen bubble', 'sudoko', 'xpuzzle', 'tetris',      // puzzle
  'rhythm', 'name that tune',                         // music
  'flappy bird', 'catch the logo', 'bomber bunny', 'platform' // reaction
];

export const GAME_TYPES = [
  { name: 'quiz', games: ['knowledge', 'gossip', 'music', 'sport', 'history'] },
  { name: 'puzzle', games: ['frozen bubble', 'sudoko', 'xpuzzle', 'tetris'] },
  { name: 'music', games: ['rhythm', 'name that tune'] },
  { name: 'reaction', games: ['flappy bird', 'catch the logo', 'bomber bunny', 'platform'] }
];
