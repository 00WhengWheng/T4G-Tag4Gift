import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Game } from './entities/game.entity';
import { GameTemplate } from './entities/game-template.entity';
import { CreateGameInput } from './dto/create-game.input';
import { CreateGameTemplateInput } from './dto/create-game-template.input';

@Resolver(() => Game)
export class GamesResolver {
  // In a real app, inject a service here
  private games: Game[] = [];
  private templates: GameTemplate[] = [];

  @Query(() => [Game])
  getGames(): Game[] {
    return this.games;
  }

  @Mutation(() => Game)
  createGame(@Args('input') input: CreateGameInput): Game {
    const game = Object.assign(new Game(), {
      ...input,
      id: (this.games.length + 1).toString(),
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.games.push(game);
    return game;
  }

  @Query(() => [GameTemplate])
  getGameTemplates(): GameTemplate[] {
    return this.templates;
  }

  @Mutation(() => GameTemplate)
  createGameTemplate(@Args('input') input: CreateGameTemplateInput): GameTemplate {
    const template = Object.assign(new GameTemplate(), {
      ...input,
      id: (this.templates.length + 1).toString(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.templates.push(template);
    return template;
  }
}
