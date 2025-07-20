import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { GDevelopGamesService } from './services/gdevelop-games.service';
import { GDevelopGamesResolver } from './resolvers/gdevelop-games.resolver';

@Module({
  providers: [
    // Original game services
    GamesService, 
    GamesResolver,
    
    // GDevelop game services
    GDevelopGamesService,
    GDevelopGamesResolver
  ],
  exports: [
    GamesService,
    GDevelopGamesService
  ]
})
export class GamesModule {}
