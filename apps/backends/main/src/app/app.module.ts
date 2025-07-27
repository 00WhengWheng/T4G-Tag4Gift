import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';
import { join } from 'path';
import { Prisma } from '@prisma/client';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/backends/main/.generated/schema.gql'),
      driver: ApolloDriver,
      playground: true,
      path: '/api/graphql',
    }),
    GamesModule,
    UsersModule,
    TenantsModule,
  ],
})
export class AppModule {}
