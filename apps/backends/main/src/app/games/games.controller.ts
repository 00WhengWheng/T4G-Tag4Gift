import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { GameTemplate } from './entities/game-template.entity';
// Removed reference to deleted game.enum
import { CreateGameTemplateDto } from './dto/create-game-template.dto';
import { GameType } from './enums/game-type.enum';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('templates')
  async getGameTemplates(
    @Query('category') category?: string,
    @Query('type') type?: GameType
  ): Promise<GameTemplate[]> {
    return this.gamesService.getGameTemplates(category, type);
  }

  @Post('template')
  async createGameTemplate(@Body() body: CreateGameTemplateDto): Promise<GameTemplate> {
    const template = await this.gamesService.createGameTemplate({
      name: body.name,
      type: body.type as GameType,
      category: body.category ?? undefined,
      difficulty: body.difficulty ?? undefined,
      structure: body.structure ? JSON.parse(body.structure) : undefined,
      description: body.description ?? undefined,
      gdevelopProjectUrl: body.gdevelopProjectUrl ?? undefined,
    });

    // Map Prisma enum to GraphQL enum
    const { $Enums } = require('@prisma/client');
    const prismaType = template.type;
    // If type is a string, cast to your GameType enum
    const graphQLType = (prismaType as string) as import('./enums/game-type.enum').GameType;

    return {
      ...template,
      type: graphQLType,
      description: template.description ?? undefined,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      structure: JSON.stringify(template.structure)
    };
  }
}
