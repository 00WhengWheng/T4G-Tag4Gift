import { InputType, Field } from '@nestjs/graphql';
import { GameType } from '../enums/game.enums';

@InputType()
export class CreateGameInput {
  @Field()
  name: string;

  @Field(() => GameType)
  type: GameType;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  gdevelopProjectUrl?: string;

  @Field({ nullable: true })
  timeLimit?: number;
}
