import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GameType } from '../enums/game-type.enum';

@ObjectType()
export class GameTemplate {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => GameType)
  type: GameType;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
