import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class GameCategory {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class GameType {
  @Field(() => String)
  name: string;
  @Field(() => [String])
  games: string[];
}

@ObjectType()
export class GameTemplate {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String)
  type: string;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String)
  structure: string;
  @Field(() => Boolean)
  isActive: boolean;
  @Field(() => String, { nullable: true })
  gdevelopProjectUrl?: string;
}

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  type: string;
  @Field(() => String, { nullable: true })
  status?: string;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
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
