import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { GDevelopGamesService } from '../services/gdevelop-games.service';
import { GameTemplate } from '../entities/game-template.entity';
import { GameType } from '../enums/game-type.enum';
import { CreateGameTemplateDto } from '../dto/create-game-template.dto';

@Controller('games/gdevelop')
export class GDevelopGamesController {
  constructor(private readonly gdevelopGamesService: GDevelopGamesService) {}

  @Get()
  async getGDevelopGames(
    @Query('category') category?: string,
    @Query('type') type?: GameType,
  ): Promise<GameTemplate[]> {
    const templates = await this.gdevelopGamesService.getGDevelopGameTemplates(category);
    
    return templates.map((t: any) => ({
      id: t.id,
      name: t.name,
      description: t.description ?? undefined,
      type: t.type as GameType,
      category: t.category ?? undefined,
      difficulty: t.difficulty ?? undefined,
      structure: JSON.stringify(t.structure),
      isActive: t.isActive,
      gdevelopProjectUrl: (t.gdevelopProjectUrl ?? this.getDefaultGDevelopUrl(t.type, t.category ?? undefined)) ?? undefined,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));
  }

  @Get(':id')
  async getGDevelopGame(@Param('id') id: string): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.getGDevelopGameById(id);
    
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type as GameType,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: (template.gdevelopProjectUrl ?? this.getDefaultGDevelopUrl(template.type, template.category ?? undefined)) ?? undefined,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
  }

  @Post()
  async createGDevelopGame(@Body() createGameDto: CreateGameTemplateDto): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.registerGDevelopGame({
      name: createGameDto.name,
      type: createGameDto.type,
      category: createGameDto.category,
      difficulty: createGameDto.difficulty,
      structure: createGameDto.structure ? JSON.parse(createGameDto.structure) : {},
      gdevelopProjectUrl: createGameDto.gdevelopProjectUrl,
    });
    
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type as GameType,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
  }

  @Put(':id')
  async updateGDevelopGame(
    @Param('id') id: string,
    @Body() updateGameDto: Partial<CreateGameTemplateDto>
  ): Promise<GameTemplate> {
    const template = await this.gdevelopGamesService.updateGDevelopGame(id, updateGameDto);
    
    return {
      id: template.id,
      name: template.name,
      description: template.description ?? undefined,
      type: template.type as GameType,
      category: template.category ?? undefined,
      difficulty: template.difficulty ?? undefined,
      structure: JSON.stringify(template.structure),
      isActive: template.isActive,
      gdevelopProjectUrl: template.gdevelopProjectUrl ?? undefined,
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
    };
  }

  private getDefaultGDevelopUrl(type: GameType | string, category?: string): string {
    const typeStr = typeof type === 'string' ? type : String(type);
    const baseUrl = 'https://gdevelop-games.s3-website.eu-west-3.amazonaws.com/';
    
    switch (typeStr.toLowerCase()) {
      case 'quiz':
        return `${baseUrl}quiz/${category || 'general'}`;
      case 'puzzle':
        return `${baseUrl}puzzle/${category || 'basic'}`;
      case 'music':
        return `${baseUrl}music/${category || 'rhythm'}`;
      case 'reaction':
        return `${baseUrl}reaction/${category || 'flappy'}`;
      default:
        return `${baseUrl}games/${typeStr.toLowerCase()}`;
    }
  }
}
