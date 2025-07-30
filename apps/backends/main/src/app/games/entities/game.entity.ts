import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GameType } from '../enums/game-type.enum';

@ObjectType()
export class Game {
  @Field(() => ID)
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
