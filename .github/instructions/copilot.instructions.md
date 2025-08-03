# Copilot Instructions - Tag4Gift Platform

## Project Overview
Tag4Gift is a gamified platform that allows users to:
- "Tag" via QR/NFC codes at venues
- Post on social media mentioning venues
- Play video games to participate in challenges and win real gifts (drinks, pizza, discounts)

## Architecture

### Monorepo Structure
```
tag4gift/
├── apps/
│   ├── main-backend/           # Main user backend
│   ├── business-backend/       # Business owner backend
│   ├── admin-backend/          # Logging/monitoring backend
│   ├── web-frontend/           # User app (React)
│   └── dashboard-frontend/     # Business dashboard (React)
├── packages/
│   ├── shared/                 # Shared code
│   ├── database/               # Prisma schema
│   ├── types/                  # TypeScript types
│   └── ui/                     # Shared UI components
├── infrastructure/
│   └── terraform/              # Infrastructure as Code
└── tools/
    └── scripts/                # Build and deploy scripts
```

### Tech Stack
- **Backend**: NestJS + TypeScript + tRPC
- **Frontend**: React + shadcn/ui + TanStack + Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis
- **Auth**: Auth0
- **Maps**: OpenLayers + Leaflet
- **Games**: GDeveloper
- **Monitoring**: Sentry
- **Infrastructure**: Terraform
- **Hosting**: Supabase + Vercel (MVP) → AWS (production)

## Development Guidelines

### Code Style
- Use TypeScript strict mode everywhere
- Follow ESLint + Prettier conventions
- Implement consistent error handling
- Use Zod for input validation
- Document APIs with JSDoc

### Architecture Patterns
- **Backend**: Domain-driven design with NestJS modules
- **Frontend**: Feature-based folder structure
- **Database**: Database-first approach with Prisma migrations
- **APIs**: End-to-end type safety with tRPC
- **State Management**: TanStack Query for server state, Zustand for client state

### Security
- Implement rate limiting on all endpoints
- Validate all inputs with Zod schemas
- Use appropriate CORS policies
- Implement proper JWT handling with Auth0
- Sanitize data for XSS prevention

### Performance
- Implement Redis caching for frequent queries
- Use React.memo and useMemo appropriately
- Optimize bundle size with code splitting
- Implement infinite scroll for long lists
- Use CDN for static assets

## Key Features Implementation

### QR/NFC Tagging System
- Generate unique QR codes for each venue
- Implement NFC reading with Web NFC API
- Track geolocation for validation
- Prevent spam with rate limiting per user/venue

### Social Media Integration
- Integrate with Instagram/Facebook APIs
- Implement hashtag tracking
- Validate venue mentions
- Award coins for social engagement

### Gaming System
- Integrate GDeveloper for mini-games
- Implement asynchronous tournaments and challenges
- Manage tournament brackets and matchmaking
- Handle challenge participation and completion
- **Note**: Games are used for tournaments/challenges only, not for direct prize distribution based on performance

### Coin & Challenge System
Users accumulate different types of "coins" through activities:
- **Scan Coins**: Earned by scanning QR/NFC codes at venues
- **Share Coins**: Earned by posting on social media mentioning venues
- **Game Coins**: Earned by playing games

Users spend these coins to participate in:
- **Challenges**: Competitive events where winners receive real gifts
- **Tournaments**: Structured competitions with brackets and elimination rounds

### Leaderboard System
- Track challenge victories and tournament wins
- Rank users based on total wins and tournament participations
- Display seasonal/monthly/all-time leaderboards
- **Note**: No point-based or level-based ranking system

## Database Schema Considerations

### Core Entities
- Users (auth0_id, profile, coin_balances)
- Businesses (owner, location, settings)
- Venues (coordinates, qr_code, nfc_id, business_id)
- Tags (user_id, venue_id, timestamp, coins_awarded)
- SocialPosts (user_id, venue_id, platform, post_url, coins_awarded)
- Games (type, config, duration)
- GameSessions (user_id, game_id, completed, coins_awarded)
- Challenges (title, description, entry_cost, prize, status)
- Tournaments (title, format, entry_cost, prize_pool, bracket)
- Participations (user_id, challenge_id/tournament_id, result, coins_spent)
- Gifts (business_id, type, value, challenge_id)

### Coin System Tables
- CoinTransactions (user_id, type, amount, source, timestamp)
- CoinBalances (user_id, scan_coins, share_coins, game_coins)

### Relationships
- One-to-many: Business → Venues → Tags
- One-to-many: Users → CoinTransactions
- Many-to-many: Users ↔ Challenges (through Participations)
- Many-to-many: Users ↔ Tournaments (through Participations)

## Deployment Strategy

### Development
```bash
# Local setup
npm run dev:setup
npm run dev:database
npm run dev:start
```

### Staging (Vercel + Supabase)
- Auto-deploy from `staging` branch
- Automated database migrations
- Environment variables via Vercel
- Monitoring with Sentry

### Production (AWS via Terraform)
- ECS for backends
- RDS for PostgreSQL
- ElastiCache for Redis
- CloudFront for CDN
- Route53 for DNS

## Monitoring & Analytics

### Metrics to Track
- User engagement (tags per day, game sessions, social posts)
- Coin economy (coin distribution, challenge participation rates)
- Business metrics (gift redemptions, ROI)
- Tournament metrics (completion rates, user retention)
- Technical metrics (API response times, error rates)

### Alerting
- Setup alerts for error rates > 5%
- Monitor database performance
- Track API rate limits
- Alert for failed transactions

## Testing Strategy

### Unit Tests
- Jest for backend logic
- React Testing Library for components
- Prisma mocking for database tests

### Integration Tests
- Supertest for API testing
- Cypress for E2E frontend tests
- Database seeding for consistent test data

### Performance Tests
- Artillery for load testing
- Lighthouse for frontend performance
- Database query optimization

## Development Workflow

### Git Strategy
- `main`: production
- `staging`: pre-prod testing
- `develop`: active development
- Feature branches: `feature/feature-name`

### Code Review
- Require reviews for all PRs
- Use conventional commits
- Run automated tests on PRs
- Verify type safety with TypeScript

## Environment Setup

### Required Tools
- Node.js 18+
- Docker for development database
- Terraform CLI
- Prisma CLI
- Vercel CLI

### VSCode Extensions
- Prisma
- TypeScript Hero
- ESLint
- Prettier
- Thunder Client (API testing)

## Common Patterns

### Error Handling
```typescript
// Use Result pattern for error handling
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E }
```

### API Responses
```typescript
// Standard response format
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    pagination?: PaginationInfo;
    timestamp: string;
  };
}
```

### Coin Transactions
```typescript
// Coin transaction pattern
interface CoinTransaction {
  userId: string;
  type: 'SCAN' | 'SHARE' | 'GAME';
  amount: number;
  source: string; // venue_id, social_post_id, game_session_id
  timestamp: Date;
}
```

### Database Queries
```typescript
// Use Prisma include to avoid N+1 queries
const userWithActivities = await prisma.user.findUnique({
  where: { id },
  include: {
    coinBalances: true,
    participations: {
      include: { challenge: true }
    }
  }
});
```

## Performance Optimizations

### Frontend
- Implement virtual scrolling for long lists
- Use React Query for intelligent caching
- Optimize images with next/image
- Implement Progressive Web App features

### Backend
- Use connection pooling for database
- Implement request deduplication
- Cache query results with Redis
- Use appropriate database indexes

### Infrastructure
- Setup CDN for static assets
- Use load balancing for high availability
- Implement database read replicas
- Monitor and optimize cold starts

## Security Checklist

- [ ] Input validation with Zod
- [ ] SQL injection prevention (Prisma)
- [ ] XSS protection (sanitization)
- [ ] CSRF tokens implementation
- [ ] Rate limiting per endpoint
- [ ] Secure headers (helmet.js)
- [ ] Environment variables encryption
- [ ] API key rotation strategy
- [ ] Coin transaction integrity validation

## Coin Economy Considerations

### Coin Distribution Balance
- Monitor coin inflation/deflation
- Adjust coin rewards based on participation
- Implement coin expiration policies if needed
- Track coin velocity and usage patterns

### Challenge Economics
- Balance entry costs with prize values
- Ensure sustainable gift economy for businesses
- Monitor challenge participation rates
- Implement dynamic pricing for popular challenges

### Anti-Fraud Measures
- Prevent fake social media posts
- Validate QR/NFC scans with geolocation
- Detect gaming system abuse
- Implement cooling-off periods for activities

## Scalability Considerations

### Database
- Implement sharding strategy for users
- Use read replicas for heavy queries
- Consider PostgreSQL partitioning for coin transactions
- Monitor query performance

### Cache Strategy
- Cache user coin balances
- Cache active challenges and tournaments
- Cache leaderboard data
- Cache business information
- Invalidate cache strategically

### Tournament System Scaling
- Use event-driven architecture for tournament progression
- Implement asynchronous challenge processing
- Consider microservices for game engine
- Plan for real-time notifications

### Microservices Migration
- Identify bounded contexts (coins, challenges, games, social)
- Implement event-driven architecture
- Use message queues (Redis/RabbitMQ)
- Plan data consistency strategy

## Challenge & Tournament Implementation

### Challenge Types
- **Time-based**: Fixed duration competitions
- **Participation-based**: First N participants
- **Skill-based**: Game performance challenges
- **Social-based**: Social media engagement challenges

### Tournament Formats
- **Single Elimination**: Traditional bracket
- **Double Elimination**: Losers bracket included
- **Round Robin**: Everyone plays everyone
- **Swiss System**: Paired based on performance

### Asynchronous Game Handling
- Store game states between sessions
- Implement turn-based mechanics
- Handle disconnections gracefully
- Provide offline play capabilities where possible