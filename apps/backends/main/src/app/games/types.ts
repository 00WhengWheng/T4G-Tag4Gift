import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameCategory {
  @Field()
  name: string;
}

@ObjectType()
export class GameType {
  @Field()
  name: string;

  @Field(() => [String])
  games: string[];
}


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

@ObjectType()
export class Game {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
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
