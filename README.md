# Tag4Gift Platform 🎮🎁

A gamified social platform that connects users, venues, and real-world rewards through QR/NFC tagging, social media engagement, and competitive gaming.

## 🌟 Overview

Tag4Gift enables users to:
- **Tag venues** via QR/NFC codes at physical locations
- **Share experiences** on social media mentioning venues
- **Play games** and participate in challenges to win real gifts (drinks, pizza, discounts)
- **Compete** in tournaments and leaderboards

Businesses can create challenges, offer rewards, and engage with customers through our dual-platform ecosystem.

## 🏗️ Architecture

### Domain Structure
- **t4g.fun** - User Platform (Web + Mobile)
  - `app.t4g.fun` - User web application
  - `api.t4g.fun` - User API backend
  
- **t4g.space** - Business Platform (Dashboard + Mobile)
  - `app.t4g.space` - Business dashboard
  - `api.t4g.space` - Business API backend

### Tech Stack

**Backend:**
- NestJS + TypeScript + tRPC
- PostgreSQL + Prisma ORM
- Redis for caching
- Auth0 for authentication

**Frontend:**
- **Web**: React + shadcn/ui + TanStack + Tailwind CSS
- **Mobile**: React Native + NativeWind + React Native Elements

**Games & Maps:**
- **Web**: GDeveloper 5 + OpenLayers/Leaflet
- **Mobile**: React Native Game Engine + React Native Maps

**GDevelop Integration:**
- HTML5 game export for web embedding
- Custom event system for coin rewards
- Player progress tracking and leaderboards
- Cross-platform game state synchronization
- Asset management and CDN integration

**Infrastructure:**
- Development: Supabase + Vercel
- Production: AWS (ECS, RDS, ElastiCache)
- IaC: Terraform

## 📱 Mobile Features

- **NFC/QR Scanning**: React Native Camera + NFC Manager
- **Geolocation**: Venue validation and mapping
- **Push Notifications**: Real-time challenge updates
- **Biometric Auth**: Secure authentication
- **Offline Support**: Local storage with sync

## 🎯 Core Features

### Coin System
Users earn three types of coins:
- **🏷️ Scan Coins**: From QR/NFC venue check-ins
- **📱 Share Coins**: From social media posts mentioning venues
- **🎮 Game Coins**: From playing mini-games

### Challenge System
- **Individual Challenges**: Solo competitions
- **Tournaments**: Bracket-style competitions
- **Time-based Events**: Limited duration challenges
- **Social Challenges**: Engagement-based rewards

### Gaming Integration
- **Web Games**: GDeveloper 5 HTML5 exports embedded in React components
- **Mobile Games**: React Native Game Engine or WebView for HTML5 games
- **Game Development Workflow**:
  - Create games in GDeveloper 5 IDE
  - Export as HTML5 with custom events for Tag4Gift integration
  - Deploy to CDN for fast loading
  - Integrate with backend APIs for progress tracking
- **Features**:
  - Asynchronous gameplay with state persistence
  - Cross-platform progress synchronization
  - Real-time leaderboards and tournaments
  - Custom coin reward events
  - Player analytics and engagement metrics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker
- npm
- PostgreSQL database
- GDeveloper 5 (for game development)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/00WhengWheng/T4G-Tag4Gift.git
cd T4G-Tag4Gift

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Configure your database, Auth0, and GDevelop settings

# Setup database
npx prisma generate
npx prisma migrate dev

# Start development servers
npm run dev:setup
```

### Running Services

```bash
# Backend services
npm run nx:main:serve        # User API (localhost:3001)
npm run nx:business:serve    # Business API (localhost:3002)

# Frontend applications
npm run nx:webapp:serve      # User Web App (localhost:3000)
npm run nx:dashboard:serve   # Business Dashboard (localhost:3010)

# Mobile development (with ngrok for device testing)
npm run nx:web-mobile:start     # User mobile app
npm run nx:dashboard-mobile:start # Business mobile app
```

## 📊 Database Schema

### Core Entities
- **Users**: User profiles, coin balances, authentication
- **BusinessUsers**: Business owners and managers
- **Venues**: Physical locations with QR/NFC codes
- **Challenges**: Competitions and tournaments
- **Games**: Mini-games and game sessions
- **Gifts**: Rewards and prizes
- **Transactions**: Coin transfers and rewards

### Key Relationships
- Users ↔ Venues (via Tags/Check-ins)
- Users ↔ Challenges (via Participations)
- Businesses → Venues → Challenges → Gifts
- Cross-platform analytics and reporting

## 🔐 Authentication

Dual Auth0 setup:
- **User App**: Separate application for t4g.fun domain
- **Business App**: Separate application for t4g.space domain
- JWT-based with different audiences
- Cross-domain security isolation

## 🧪 Testing

```bash
# Unit tests
npm run nx:test-all

# E2E tests
npm run nx:webapp-e2e:e2e        # Web E2E
npm run nx:web-mobile-e2e:e2e    # Mobile E2E

# Load testing
npm run test:load

# GDevelop game testing
npm run test:games
```

## 📦 Deployment

### Staging (Vercel + Supabase)
```bash
npm run deploy:staging
```

### Production (AWS)
```bash
# Infrastructure setup
cd infrastructure
terraform init
terraform plan
terraform apply

# Application deployment
npm run deploy:production
```

## 🎮 GDevelop Game Development

### Setting up GDeveloper 5
1. **Download & Install**: Get GDeveloper 5 from [gdevelop.io](https://gdevelop.io)
2. **Project Structure**: 
   ```
   games/
   ├── templates/          # Reusable game templates
   ├── assets/            # Shared sprites, sounds, fonts
   ├── exported/          # HTML5 builds for web
   └── projects/          # Individual .json game projects
   ```

### Game Integration Workflow
1. **Development**: Create games in GDeveloper 5 IDE
2. **Tag4Gift Events**: Add custom events for:
   - Coin collection triggers
   - Progress tracking points
   - Challenge completion signals
   - Leaderboard score submission
3. **Export**: Build as HTML5 with Tag4Gift API integration
4. **Deployment**: Upload to CDN and register in database
5. **Testing**: Verify game-to-backend communication

### Game Categories & Templates
- **Quiz Games**: Knowledge, trivia, venue-specific questions
- **Reaction Games**: Flappy Bird style, catch-the-logo, timing challenges
- **Puzzle Games**: Tetris-like, bubble shooter, logic puzzles
- **Music Games**: Rhythm games, name-that-tune challenges

### Game API Integration
```javascript
// Example GDeveloper custom event for Tag4Gift
// Add this to your game's event sheet
gdjs.callbacksRuntimeSceneLoaded.push(function(runtimeScene) {
  // Initialize Tag4Gift API connection
  if (window.Tag4GiftAPI) {
    window.Tag4GiftAPI.init({
      gameId: 'your-game-id',
      userId: 'current-user-id',
      challengeId: 'current-challenge-id'
    });
  }
});

// Award coins when player achieves something
function awardCoins(amount, reason) {
  if (window.Tag4GiftAPI) {
    window.Tag4GiftAPI.awardCoins(amount, reason);
  }
}

// Submit score to leaderboard
function submitScore(score) {
  if (window.Tag4GiftAPI) {
    window.Tag4GiftAPI.submitScore(score);
  }
}
```

## 🛡️ Security

- Input validation with Zod schemas
- Rate limiting on all endpoints
- SQL injection prevention via Prisma
- XSS protection and content sanitization
- Secure headers and CORS policies
- Certificate pinning for mobile apps

## 🔄 Monitoring

- **Metrics**: User engagement, coin economy, tournament participation
- **Alerting**: Error rates, performance thresholds
- **Analytics**: Cross-platform behavior tracking
- **Logging**: Centralized logging with Sentry

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Development Guidelines
- Use TypeScript strict mode
- Follow ESLint + Prettier conventions
- Write tests for new features
- Document APIs with JSDoc
- Use conventional commits

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] AI-powered challenge recommendations
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Third-party game integration APIs

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the [documentation](docs/)

---

**Tag4Gift** - Where social gaming meets real rewards! 🎮✨
