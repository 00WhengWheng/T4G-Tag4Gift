---
description: Repository Information Overview
alwaysApply: true
---

# T4G-Tag4Gift Information

## Summary
T4G-Tag4Gift is a social game gift reward platform that allows users to participate in various games and challenges to win gifts. The application consists of a NestJS backend and a React frontend, both managed within an Nx monorepo structure.

## Structure
- **apps/**: Contains the main applications
  - **backends/main**: NestJS backend application with GraphQL API
  - **frontends/webapp**: React frontend application
- **libs/**: Shared libraries
  - **prisma/**: Prisma ORM configuration and services
- **prisma/**: Database schema and migrations
- **public/**: Static assets for games (music, puzzle, reaction)
- **scripts/**: Utility scripts for seeding data

## Language & Runtime
**Language**: TypeScript
**Version**: Node.js (using pnpm 10.12.4)
**Build System**: Nx 21.3.0
**Package Manager**: pnpm

## Dependencies
**Main Dependencies**:
- NestJS 11.0.0 (backend framework)
- React 19.0.0 (frontend framework)
- Prisma 6.12.0 (ORM)
- GraphQL 16.11.0 (API)
- Apollo Server Express 3.13.0
- urql 4.2.2 (GraphQL client)
- framer-motion 12.23.6 (animations)

**Development Dependencies**:
- Nx 21.3.0 (monorepo management)
- Vite 4.7.0 (frontend bundler)
- Webpack 6.0.1 (backend bundler)
- ESLint 9.31.0 (linting)
- Playwright 1.36.0 (e2e testing)

## Build & Installation
```bash
# Install dependencies
pnpm install

# Start backend development server
pnpm dev:backend

# Start frontend development server
pnpm dev:frontend

# Build backend for production
pnpm build:backend

# Build frontend for production
pnpm build:frontend
```

## Database
**Type**: PostgreSQL
**ORM**: Prisma 6.12.0
**Schema**: Comprehensive data model for users, games, challenges, gifts, and social interactions
**Migrations**: Located in prisma/migrations

## Projects

### Backend (NestJS)
**Configuration File**: apps/backends/main/project.json
**Main Entry Point**: apps/backends/main/src/main.ts

#### Build & Deployment
```bash
nx build main
nx serve main
```

#### API
**Type**: GraphQL
**Schema**: apps/backends/main/src/schema.gql
**Modules**: User management, Games, Challenges, Gifts, Social interactions

### Frontend (React)
**Configuration File**: apps/frontends/webapp/project.json
**Main Entry Point**: apps/frontends/webapp/src/main.tsx

#### Build & Deployment
```bash
nx build webapp
nx serve webapp
```

#### Components
- GameDisplay
- GamesList
- PuzzleGame
- QuizGame

## Testing
**Framework**: Playwright for E2E testing
**Test Location**: apps/backends/main-e2e, apps/frontends/webapp-e2e
**Run Command**:
```bash
nx e2e main-e2e
nx e2e webapp-e2e
```