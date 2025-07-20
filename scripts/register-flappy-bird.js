const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function registerFlappyBird() {
  try {
    // Check if the game already exists
    const existingGame = await prisma.gameTemplate.findFirst({
      where: {
        name: 'Flappy Bird',
        type: 'REACTION',
      },
    });

    if (existingGame) {
      console.log('Flappy Bird game already exists with ID:', existingGame.id);
      return existingGame;
    }

    // Register the game
    const game = await prisma.gameTemplate.create({
      data: {
        name: 'Flappy Bird',
        description: 'A simple Flappy Bird clone. Press space or click to jump!',
        type: 'REACTION',
        category: 'arcade',
        difficulty: 'medium',
        gdevelopProjectUrl: '/games/reaction/flappy-bird/index.html',
        structure: {
          gameSpeed: 2,
          pipeGap: 150,
          gravity: 0.5,
        },
        isActive: true,
      },
    });

    console.log('Successfully registered Flappy Bird game with ID:', game.id);
    return game;
  } catch (error) {
    console.error('Error registering Flappy Bird game:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
registerFlappyBird()
  .then(() => console.log('Done!'))
  .catch((e) => console.error(e));