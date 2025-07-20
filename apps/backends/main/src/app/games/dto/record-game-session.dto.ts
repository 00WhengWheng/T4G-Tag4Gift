import { Field, InputType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

@InputType()
export class RecordGameSessionDto {
  @Field(() => ID)
  @IsNotEmpty()
  userId: string;

  @Field(() => ID)
  @IsNotEmpty()
  gameId: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  score?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  timeSpent?: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  completedAt?: Date;
}