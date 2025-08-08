import { IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

export class RecordGameSessionDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  gameId: string;

  @IsNumber()
  @IsOptional()
  score?: number;

  @IsNumber()
  @IsOptional()
  timeSpent?: number;

  @IsDate()
  @IsOptional()
  completedAt?: Date;
}