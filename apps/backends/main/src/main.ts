/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  app.enableCors({
    origin: ['http://localhost:4200', 'http://localhost:5173'], // allow Nx and Vite
    credentials: true,
  });
  
  // Add a root route handler for '/'
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get('/', (req: Request, res: Response) => {
    // Option 1: redirect to games API
    res.redirect('/api/trpc/games.getAll');
    // Option 2: send a message
    // res.send('Welcome to T4G API! See /api/trpc/games.getAll for games.');
  });

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `🎮 tRPC Games API available at: http://localhost:${port}/${globalPrefix}/trpc/games.getAll`
  );
}

bootstrap();
