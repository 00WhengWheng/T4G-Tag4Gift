import { Field, InputType } from '@nestjs/graphql';
import { GameType } from '../enums/game.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateGameTemplateDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => GameType)
  @IsEnum(GameType)
  type: GameType;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  difficulty?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  structure: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  gdevelopProjectUrl?: string;
}