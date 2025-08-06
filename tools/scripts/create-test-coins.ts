import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createTestCoinData() {
  try {
    console.log('Creating test coin data...');

    // Get the first user from the database
    const users = await prisma.user.findMany({
      take: 1
    });

    if (users.length === 0) {
      console.log('No users found. Creating a test user...');
      
      const testUser = await prisma.user.create({
        data: {
          email: 'test@t4g.fun',
          username: 'testuser',
          firstName: 'Test',
          lastName: 'User',
          password: 'hashedpassword', // In real app, this would be properly hashed
          role: 'PLAYER',
          status: 'ACTIVE',
          authProvider: 'AUTH0',
          language: 'en',
          timezone: 'UTC',
        }
      });
      
      console.log('Created test user:', testUser.id);
      users.push(testUser);
    }

    const userId = users[0].id;
    console.log('Using user ID:', userId);

    // Create coin balance for the user
    const coinBalance = await prisma.coinBalance.upsert({
      where: { userId },
      update: {
        tagCoins: 5,
        shareCoins: 3,
        gameCoins: 7,
        totalCoins: 15,
      },
      create: {
        userId,
        tagCoins: 5,
        shareCoins: 3,
        gameCoins: 7,
        totalCoins: 15,
      },
    });

    console.log('Created/updated coin balance:', coinBalance);

    // Create some coin transactions
    const transactions = await Promise.all([
      prisma.coinTransaction.create({
        data: {
          userId,
          type: 'TAG',
          amount: 1,
          source: 'TAG_SCAN',
          description: 'Scanned QR code at local cafe',
        },
      }),
      prisma.coinTransaction.create({
        data: {
          userId,
          type: 'TAG',
          amount: 1,
          source: 'TAG_SCAN',
          description: 'Scanned QR code at pizza place',
        },
      }),
      prisma.coinTransaction.create({
        data: {
          userId,
          type: 'SHARE',
          amount: 1,
          source: 'SOCIAL_SHARE',
          description: 'Shared on Instagram',
        },
      }),
      prisma.coinTransaction.create({
        data: {
          userId,
          type: 'GAME',
          amount: 1,
          source: 'GAME_PLAY',
          description: 'Played Flappy Bird game',
        },
      }),
    ]);

    console.log('Created transactions:', transactions.length);

    console.log('Test coin data created successfully!');
    console.log('User has:', coinBalance.tagCoins, 'tag coins,', coinBalance.shareCoins, 'share coins,', coinBalance.gameCoins, 'game coins');

  } catch (error) {
    console.error('Error creating test coin data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestCoinData();
