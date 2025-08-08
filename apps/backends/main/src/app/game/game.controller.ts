import { Controller, Get, Post, Body, Query, BadRequestException } from '@nestjs/common';
import { ValidateNested } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { GamesService } from './game.service';
import { GameTemplate } from './entities/game-template.entity';
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
    // DTO validation
    const dto = plainToInstance(CreateGameTemplateDto, body);
    const errors = await import('class-validator').then(({ validate }) => validate(dto));
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    try {
      const template = await this.gamesService.createGameTemplate({
        name: body.name,
        type: body.type as GameType,
        category: body.category ?? undefined,
        difficulty: body.difficulty ?? undefined,
        structure: body.structure ? JSON.parse(body.structure) : undefined,
        description: body.description ?? undefined,
        gdevelopProjectUrl: body.gdevelopProjectUrl ?? undefined,
      });
      // Map Prisma enum to controller enum
      const { $Enums } = require('@prisma/client');
      const prismaType = template.type;
      const controllerType = (prismaType as string) as import('./enums/game-type.enum').GameType;
      return {
        ...template,
        type: controllerType,
        description: template.description ?? undefined,
        category: template.category ?? undefined,
        difficulty: template.difficulty ?? undefined,
        gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
        structure: JSON.stringify(template.structure)
      };
    } catch (err) {
      throw new BadRequestException(err.message || 'Failed to create game template');
    }
  }
}
