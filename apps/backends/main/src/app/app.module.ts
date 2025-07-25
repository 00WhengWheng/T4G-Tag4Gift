import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { GamesModule } from './games/games.module';
import { join } from 'path';

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
  ],
})
export class AppModule {}
