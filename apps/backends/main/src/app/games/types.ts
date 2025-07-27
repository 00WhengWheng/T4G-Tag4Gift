import { ObjectType, Field } from '@nestjs/graphql';
import { GameType } from './enums/game.enum';

@ObjectType()
export class GameCategory {
  @Field()
  name: string;
}

@ObjectType()
export class GameTypeInfo {
  @Field()
  name: string;

  @Field(() => [String])
  games: string[];
}


// ...existing code...


@ObjectType()
export class Game {
  @Field()
  id: string;

  @Field(() => GameType)
  type: GameType;

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

@ObjectType()
export class Gift {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class ChallengeResult {
  @Field()
  userId: string;

  @Field()
  timeMs: number;
}

@ObjectType()
export class Challenge {
  @Field()
  id: string;

  @Field(() => Game, { nullable: true })
  game: Game | null;

  @Field(() => [String])
  participants: string[]; // user IDs

  @Field(() => [ChallengeResult])
  results: ChallengeResult[];

  @Field({ nullable: true })
  winnerId?: string;

  @Field(() => Gift)
  gift: Gift;
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
