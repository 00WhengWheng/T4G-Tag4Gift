import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GDevelopGamesService } from './services/gdevelop-games.service';

@Module({
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
