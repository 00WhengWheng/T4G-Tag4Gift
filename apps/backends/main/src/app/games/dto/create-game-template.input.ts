import { InputType, Field } from '@nestjs/graphql';
import { GameType } from '../enums/game.enums';

@InputType()
export class CreateGameTemplateInput {
  @Field()
  name: string;

  @Field(() => GameType)
  type: GameType;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  difficulty?: string;

  @Field()
  structure: string;

  @Field({ nullable: true })
  gdevelopProjectUrl?: string;
}
