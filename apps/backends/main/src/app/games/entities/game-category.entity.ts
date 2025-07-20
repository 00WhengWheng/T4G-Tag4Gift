import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameCategory {
  @Field()
  name: string;
}