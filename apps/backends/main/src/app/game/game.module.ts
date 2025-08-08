import { Module } from '@nestjs/common';
import { GamesService } from './game.service';
import { GDevelopGamesService } from './gdevelop/gdevelop-games.service';
import { GamesController } from './game.controller';
import { GDevelopGamesController } from './gdevelop/gdevelop-games.controller';

@Module({
  controllers: [
    GamesController,
    GDevelopGamesController
  ],
  providers: [
    // Original game services
    GamesService, 
    
    // GDevelop game services
    GDevelopGamesService
  ],
  exports: [
    GamesService,
    GDevelopGamesService
  ]
})
export class GamesModule {}
