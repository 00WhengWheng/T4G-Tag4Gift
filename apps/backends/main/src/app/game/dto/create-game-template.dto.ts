import { GameType } from '../enums/game-type.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGameTemplateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(GameType)
  type: GameType;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  difficulty?: string;

  @IsString()
  @IsNotEmpty()
  structure: string;

  @IsString()
  @IsOptional()
  gdevelopProjectUrl?: string;
}