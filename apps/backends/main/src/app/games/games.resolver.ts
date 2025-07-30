import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Game } from './entities/game.entity';
import { GameTemplate } from './entities/game-template.entity';
import { GameCategory } from './entities/game-category.entity';
import { GameTypeInfo } from './entities/game-type-info.entity';
import { CreateGameInput } from './dto/create-game.input';
import { CreateGameTemplateInput } from './dto/create-game-template.input';

@Resolver()
export class GamesResolver {
  @Query(() => [GameTemplate])
  gameTemplates(
    @Args('category', { nullable: true }) category?: string,
    @Args('type', { nullable: true }) type?: string,
  ): Promise<GameTemplate[]> {
    // TODO: Implement fetching logic
    return Promise.resolve([]);
  }

  @Query(() => [GameCategory])
  gameCategories(): Promise<GameCategory[]> {
    // TODO: Implement fetching logic
    return Promise.resolve([]);
  }

  @Query(() => [GameTypeInfo])
  gameTypes(): Promise<GameTypeInfo[]> {
    // TODO: Implement fetching logic
    return Promise.resolve([]);
  }

  @Mutation(() => GameTemplate)
  createGameTemplate(
    @Args('input') input: CreateGameTemplateInput,
  ): Promise<GameTemplate> {
    // TODO: Implement creation logic
    return Promise.resolve(undefined);
  }
}
