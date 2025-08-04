import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GDevelopGamesService } from './services/gdevelop-games.service';
import { GamesController } from './games.controller';
import { GDevelopGamesController } from './controllers/gdevelop-games.controller';

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
