import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GameType, GameStatus } from '../enums/game.enums';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;

  @Field(() => GameType)
  type: GameType;

  @Field(() => GameStatus)
  status: GameStatus;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  gdevelopProjectUrl?: string;

  @Field({ nullable: true })
  timeLimit?: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
