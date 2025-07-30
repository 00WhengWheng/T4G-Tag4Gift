import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameTypeInfo {
  @Field()
  name: string;

  @Field(() => [String])
  games: string[];
}
