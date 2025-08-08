import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GDevelopGamesService } from './gdevelop/gdevelop-games.service';
import { GameController } from './game.controller';
import { GDevelopGamesController } from './gdevelop/gdevelop-games.controller';

@Module({
  controllers: [
    GameController,
    GDevelopGamesController
  ],
  providers: [
    // Original game services
    GameService, 
    
    // GDevelop game services
    GDevelopGamesService
  ],
  exports: [
    GameService,
    GDevelopGamesService
  ]
})
export class GameModule {}
