---
description: Repository Information Overview
alwaysApply: true
---

# T4G-Tag4Gift Information

## Summary
T4G-Tag4Gift is a social game gift reward platform that allows users to participate in various games and challenges to win gifts. The application consists of multiple NestJS backends and React frontends, all managed within an Nx monorepo structure.

## Structure
- **apps/**: Contains the main applications
  - **backends/main**: Primary NestJS backend with GraphQL API
  - **backends/business**: Secondary NestJS backend service
  - **frontends/webapp**: User-facing React application
  - **frontends/dashboard**: Admin dashboard React application
- **libs/**: Shared libraries
  - **prisma/**: Prisma ORM configuration and services
- **prisma/**: Database schema and migrations
- **scripts/**: Utility scripts for seeding data and game registration
- **infrastructure/**: Terraform configuration files

## Language & Runtime
**Language**: TypeScript ~5.8.2
**Version**: Node.js (using pnpm 10.12.4)
**Build System**: Nx 21.3.3
**Package Manager**: pnpm

## Dependencies
**Main Dependencies**:
- NestJS 11.0.0 (backend framework)
- React 19.0.0 (frontend framework)
- Prisma 6.12.0 (ORM)
- GraphQL 16.11.0 (API)
- Apollo Client 3.13.8 (GraphQL client)
- @radix-ui component library (UI components)
- Tailwind CSS 4.1.11 (styling)

**Development Dependencies**:
- Nx 21.3.3 (monorepo management)
- Vite 6.0.0 (frontend bundler)
- Webpack (backend bundler)
- ESLint 9.9.0 (linting)
- Playwright 1.44.0 (e2e testing)

## Build & Installation
```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm prisma:generate

# Start backend development server
pnpm dev:main

# Start frontend development server
pnpm dev:webapp

# Start dashboard development server
pnpm dev:dashboard

# Build backend for production
pnpm build:main

# Build frontend for production
pnpm build:webapp
```

## Docker
**Configuration**: docker-compose.yml defines services for:
- PostgreSQL database (Supabase)
- Main backend service
- Business backend service
- Webapp frontend
- Dashboard frontend

**Run Command**:
```bash
docker-compose up -d
```

## Database
**Type**: PostgreSQL (via Supabase)
**ORM**: Prisma 6.12.0
**Schema**: Comprehensive data model for users, games, challenges, gifts, tags, and social interactions
**Migrations**: Located in prisma/migrations
**Management**:
```bash
pnpm prisma:studio  # Open Prisma Studio UI
```

## Projects

### Main Backend (NestJS)
**Configuration File**: apps/backends/main/project.json
**Main Entry Point**: apps/backends/main/src/main.ts

#### Build & Deployment
```bash
nx run main:serve
nx run main:build
```

#### API
**Type**: GraphQL
**Modules**: Users, Games, Tenants, Challenges, Gifts, Tags

### Business Backend (NestJS)
**Configuration File**: apps/backends/business/project.json
**Purpose**: Separate service for business logic and operations

### Webapp Frontend (React)
**Configuration File**: apps/frontends/webapp/project.json
**Main Entry Point**: apps/frontends/webapp/src/main.tsx
**Build System**: Vite

#### Build & Deployment
```bash
nx run webapp:dev
nx run webapp:build
```

### Dashboard Frontend (React)
**Configuration File**: apps/frontends/dashboard/project.json
**Purpose**: Admin interface for managing tenants, games, and challenges
**Build System**: Vite

#### Build & Deployment
```bash
nx run dashboard:dev
nx run dashboard:build
```

## Testing
**Framework**: Playwright for E2E testing, Jest for unit tests
**Test Location**: 
- apps/backends/main-e2e
- apps/backends/business-e2e
- apps/frontends/webapp-e2e
- apps/frontends/dashboard-e2e

**Run Command**:
```bash
nx e2e main-e2e
nx test main
```