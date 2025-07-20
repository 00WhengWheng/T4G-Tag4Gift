const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkGame() {
  try {
    const game = await prisma.gameTemplate.findFirst({
      where: { name: 'Flappy Bird' }
    });
    console.log(JSON.stringify(game, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkGame();