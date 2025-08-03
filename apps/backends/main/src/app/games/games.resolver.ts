
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { GameTemplate } from './entities/game-template.entity';
import { GamesService } from './games.service';
import { Inject } from '@nestjs/common';
import { GameType } from './enums/game-type.enum';
// import other entities/dtos as needed

@Resolver()
export class GamesResolver {
  constructor(
    @Inject(GamesService)
    private readonly gamesService: GamesService,
  ) {}

  @Query(() => [GameTemplate])
  async gameTemplates(
    @Args('category', { nullable: true }) category?: string,
    @Args('type', { nullable: true, type: () => GameType }) type?: GameType,
  ): Promise<GameTemplate[]> {
    const templates = await this.gamesService.getGameTemplates(category, type);
    return templates.map(t => Object.assign(new GameTemplate(), t));
  }

  // Implement other queries as needed, e.g. gameCategories, gameTypes
}
