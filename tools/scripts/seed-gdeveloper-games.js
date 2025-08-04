const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedGDeveloperGames() {
  const games = [
    {
      name: 'Anxious Side',
      description: 'Navigate through challenging puzzles in this atmospheric adventure game',
      type: 'PUZZLE',
      category: 'puzzle',
      difficulty: 'medium',
      gdevelopProjectUrl: '/games/puzzle/anxious-side/index.html',
      structure: { levelCount: 10, hasTimer: true }
    },
    {
      name: 'Match Ball',
      description: 'Match colorful balls in this addictive puzzle game',
      type: 'PUZZLE', 
      category: 'puzzle',
      difficulty: 'easy',
      gdevelopProjectUrl: '/games/puzzle/match-ball/index.html',
      structure: { matchCount: 3, gridSize: '6x6' }
    },
    {
      name: 'Music Rhythm',
      description: 'Test your rhythm and musical skills',
      type: 'MUSIC',
      category: 'music', 
      difficulty: 'medium',
      gdevelopProjectUrl: '/games/music/rhythm-game/index.html',
      structure: { trackCount: 5, difficulty: 'normal' }
    },
    {
      name: 'Quick Reaction',
      description: 'Test your reflexes in this fast-paced game',
      type: 'REACTION',
      category: 'reaction',
      difficulty: 'hard', 
      gdevelopProjectUrl: '/games/reaction/quick-test/index.html',
      structure: { rounds: 10, maxTime: 30 }
    },
    {
      name: 'Road Cross Adventure',
      description: 'Navigate through busy roads and obstacles',
      type: 'REACTION',
      category: 'arcade',
      difficulty: 'medium',
      gdevelopProjectUrl: '/games/arcade/road-cross/index.html', 
      structure: { lives: 3, speed: 'normal' }
    }
  ];

  for (const game of games) {
    const existing = await prisma.gameTemplate.findFirst({
      where: { name: game.name }
    });

    if (!existing) {
      const created = await prisma.gameTemplate.create({
        data: {
          ...game,
          isActive: true
        }
      });
      console.log(`✅ Created game: ${created.name}`);
    } else {
      console.log(`⏭️  Game already exists: ${game.name}`);
    }
  }
}

seedGDeveloperGames()
  .then(() => {
    console.log('🎮 GDeveloper games seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error seeding games:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
