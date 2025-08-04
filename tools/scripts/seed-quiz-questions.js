const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedQuizQuestions() {
  const quizQuestions = [
    // General Knowledge
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
      difficulty: 'easy',
      category: 'geography',
      explanation: 'Paris is the capital and largest city of France.',
      tags: ['geography', 'europe', 'capitals']
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      difficulty: 'easy',
      category: 'science',
      explanation: 'Mars appears red due to iron oxide (rust) on its surface.',
      tags: ['space', 'planets', 'astronomy']
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      correctAnswer: 1,
      difficulty: 'easy',
      category: 'nature',
      explanation: 'Blue whales can reach lengths of up to 100 feet.',
      tags: ['animals', 'marine', 'mammals']
    },
    
    // Technology & Gaming
    {
      question: 'Which company developed the React JavaScript library?',
      options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
      correctAnswer: 1,
      difficulty: 'medium',
      category: 'technology',
      explanation: 'React was developed by Facebook (now Meta) in 2013.',
      tags: ['programming', 'javascript', 'web-development']
    },
    {
      question: 'What does HTML stand for?',
      options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 0,
      difficulty: 'easy',
      category: 'technology',
      explanation: 'HTML is the standard markup language for web pages.',
      tags: ['web', 'programming', 'markup']
    },

    // Entertainment & Pop Culture
    {
      question: 'Which video game character is known for collecting rings?',
      options: ['Mario', 'Sonic', 'Pac-Man', 'Link'],
      correctAnswer: 1,
      difficulty: 'easy',
      category: 'gaming',
      explanation: 'Sonic the Hedgehog collects golden rings as his main collectible.',
      tags: ['gaming', 'sega', 'sonic']
    },
    {
      question: 'In which year was the first iPhone released?',
      options: ['2006', '2007', '2008', '2009'],
      correctAnswer: 1,
      difficulty: 'medium',
      category: 'technology',
      explanation: 'The first iPhone was unveiled by Steve Jobs on January 9, 2007.',
      tags: ['apple', 'smartphone', 'innovation']
    },

    // Sports & Games
    {
      question: 'How many squares are on a standard chessboard?',
      options: ['32', '64', '48', '56'],
      correctAnswer: 1,
      difficulty: 'easy',
      category: 'games',
      explanation: 'A chessboard has 8x8 = 64 squares.',
      tags: ['chess', 'board-games', 'strategy']
    },
    {
      question: 'In which sport would you perform a slam dunk?',
      options: ['Volleyball', 'Tennis', 'Basketball', 'Football'],
      correctAnswer: 2,
      difficulty: 'easy',
      category: 'sports',
      explanation: 'A slam dunk is a basketball move where a player jumps and scores by putting the ball directly through the hoop.',
      tags: ['basketball', 'sports', 'athletics']
    },

    // Hard Questions
    {
      question: 'What is the time complexity of binary search?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correctAnswer: 1,
      difficulty: 'hard',
      category: 'computer-science',
      explanation: 'Binary search divides the search space in half each time, resulting in O(log n) complexity.',
      tags: ['algorithms', 'computer-science', 'programming']
    }
  ];

  for (const question of quizQuestions) {
    const existing = await prisma.quizQuestion.findFirst({
      where: { question: question.question }
    });

    if (!existing) {
      const created = await prisma.quizQuestion.create({
        data: {
          ...question,
          options: JSON.stringify(question.options),
          isActive: true
        }
      });
      console.log(`✅ Created question: ${created.question.substring(0, 50)}...`);
    } else {
      console.log(`⏭️  Question already exists: ${question.question.substring(0, 50)}...`);
    }
  }
}

seedQuizQuestions()
  .then(() => {
    console.log('🧠 Quiz questions seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error seeding quiz questions:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
