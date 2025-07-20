import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameTypeEntity {
  @Field()
  name: string;

  @Field(() => [String])
  games: string[];
}