import { Module } from '@nestjs/common';
import { TrpcController } from './trpc.controller';
// import { GamesModule } from '../games/games.module';
// import { GamesRouter } from './routers/games.router';
import { AppRouter } from './app.router';

@Module({
  imports: [/* GamesModule */],
  controllers: [TrpcController],
  providers: [/* GamesRouter, */ AppRouter],
  exports: [AppRouter],
})
export class TrpcModule {}
