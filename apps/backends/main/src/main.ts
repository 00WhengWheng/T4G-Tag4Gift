/**
 * T4G Main Backend - User Platform API (api.t4g.fun)
 * Handles user authentication, game interactions, social features, and challenges
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Request, Response } from 'express';

// Export AppRouter type for frontend consumption
export type { AppRouter } from './app/trpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  
  // Global configuration
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000; // Main backend on 3000
  
  app.setGlobalPrefix(globalPrefix);
  
  // Global validation pipe with transform
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // CORS configuration for user platform
  app.enableCors({
    origin: [
      'http://localhost:4200', // User webapp dev
      'https://app.t4g.fun',   // User webapp prod
      't4gfun://',             // Mobile app
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });
  
  // Health check and root route
  const expressApp = app.getHttpAdapter().getInstance();
  
  expressApp.get('/', (req: Request, res: Response) => {
    res.json({
      service: 'T4G Main API',
      platform: 'users',
      domain: 't4g.fun',
      status: 'healthy',
      version: '1.0.0',
      endpoints: {
        trpc: `${req.protocol}://${req.get('host')}/api/trpc`,
        health: `${req.protocol}://${req.get('host')}/api/health`,
      },
    });
  });

  expressApp.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'main-backend',
    });
  });

  await app.listen(port);
  
  Logger.log(`🚀 T4G Main Backend running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`🎮 tRPC API available at: http://localhost:${port}/${globalPrefix}/trpc`);
  Logger.log(`👤 User Platform Domain: t4g.fun`);
  Logger.log(`📱 Mobile App Support: Enabled`);
}

bootstrap();
