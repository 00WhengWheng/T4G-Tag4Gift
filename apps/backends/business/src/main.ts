/**
 * T4G Business Backend - Business Platform API (api.t4g.space)
 * Handles business authentication, venue management, analytics, and gift management
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  
  // Global configuration
  const globalPrefix = 'api';
  const port = process.env.PORT || 3002; // Business backend on 3002
  
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

  // CORS configuration for business platform
  app.enableCors({
    origin: [
      'http://localhost:4201', // Business dashboard dev
      'https://app.t4g.space', // Business dashboard prod
      't4gspace://',           // Business mobile app
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });
  
  // Health check and root route
  const expressApp = app.getHttpAdapter().getInstance();
  
  expressApp.get('/', (req: Request, res: Response) => {
    res.json({
      service: 'T4G Business API',
      platform: 'business',
      domain: 't4g.space',
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
      service: 'business-backend',
    });
  });

  await app.listen(port);
  
  Logger.log(`🚀 T4G Business Backend running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`🏢 Business API available at: http://localhost:${port}/${globalPrefix}/trpc`);
  Logger.log(`🏪 Business Platform Domain: t4g.space`);
  Logger.log(`📱 Business Mobile App Support: Enabled`);
}

bootstrap();
