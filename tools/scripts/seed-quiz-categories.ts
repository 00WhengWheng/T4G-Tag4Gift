import { prisma } from '../libs/prisma/src/prisma.service';

const quizData = [
  {
    name: 'Knowledge Quiz',
    category: 'knowledge',
    questions: [
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Go', 'Gd'],
        correctAnswer: 0,
      },
      {
        question: 'Which planet is known as the “Red Planet”?',
        options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
        correctAnswer: 0,
      },
      {
        question: 'How many bones are there in an adult human body?',
        options: ['206', '196', '216', '186'],
        correctAnswer: 0,
      },
      {
        question: 'What is the largest organ of the human body?',
        options: ['Skin', 'Liver', 'Heart', 'Lung'],
        correctAnswer: 0,
      },
      {
        question: 'Who wrote the novel Pride and Prejudice?',
        options: ['Jane Austen', 'Charlotte Brontë', 'Emily Dickinson', 'Mary Shelley'],
        correctAnswer: 0,
      },
    ],
  },
  {
    name: 'Gossip Quiz',
    category: 'gossip',
    questions: [
      {
        question: 'What year did Prince Harry and Meghan Markle get married?',
        options: ['2018', '2016', '2019', '2020'],
        correctAnswer: 0,
      },
      {
        question: 'Which Kardashian sister launched the shape-wear brand Skims?',
        options: ['Kim Kardashian', 'Kourtney Kardashian', 'Khloé Kardashian', 'Kendall Jenner'],
        correctAnswer: 0,
      },
      {
        question: 'Who did Brad Pitt marry in a widely-publicised 2014 French château ceremony?',
        options: ['Angelina Jolie', 'Jennifer Aniston', 'Gwyneth Paltrow', 'Charlize Theron'],
        correctAnswer: 0,
      },
      {
        question: 'What is the real first name of Rihanna?',
        options: ['Robyn', 'Rachel', 'Regina', 'Rosa'],
        correctAnswer: 0,
      },
      {
        question: 'What was the original spelling of the Hollywood sign when it was first erected in 1923?',
        options: ['Hollywoodland', 'Hollywood Hills', 'Hollywood Sign', 'Hollywood City'],
        correctAnswer: 0,
      },
    ],
  },
  {
    name: 'Music Quiz',
    category: 'music',
    questions: [
      {
        question: 'Which girl group had members named Mel B, Mel C, Geri, Emma and Victoria?',
        options: ['Spice Girls', 'Destiny’s Child', 'TLC', 'Pussycat Dolls'],
        correctAnswer: 0,
      },
      {
        question: 'What genre did Taylor Swift start her career in?',
        options: ['Country', 'Pop', 'R&B', 'Rock'],
        correctAnswer: 0,
      },
      {
        question: 'Who is referred to as the “King of Pop”?',
        options: ['Michael Jackson', 'Elvis Presley', 'Justin Bieber', 'Prince'],
        correctAnswer: 0,
      },
      {
        question: 'What was the best-selling Christmas single of all time (artist and title)?',
        options: ['“White Christmas” – Bing Crosby', '“All I Want for Christmas Is You” – Mariah Carey', '“Last Christmas” – Wham!', '“Jingle Bells” – Frank Sinatra'],
        correctAnswer: 0,
      },
      {
        question: 'Which British band released the 1973 album The Dark Side of the Moon?',
        options: ['Pink Floyd', 'The Beatles', 'Led Zeppelin', 'Queen'],
        correctAnswer: 0,
      },
    ],
  },
  {
    name: 'Sport Quiz',
    category: 'sport',
    questions: [
      {
        question: 'Which national team has won the most FIFA World Cup titles (men)?',
        options: ['Brazil', 'Germany', 'Argentina', 'Italy'],
        correctAnswer: 0,
      },
      {
        question: 'In tennis, what is a score of zero called?',
        options: ['Love', 'Nil', 'Zero', 'Zip'],
        correctAnswer: 0,
      },
      {
        question: 'Which F1 driver holds the record for the most championships (7)?',
        options: ['Michael Schumacher', 'Lewis Hamilton', 'Ayrton Senna', 'Fernando Alonso'],
        correctAnswer: 0,
      },
      {
        question: 'Which city hosted the first modern Olympic Games in 1896?',
        options: ['Athens', 'Rome', 'London', 'Paris'],
        correctAnswer: 0,
      },
      {
        question: 'What nickname is given to Manchester United?',
        options: ['The Red Devils', 'The Blues', 'The Gunners', 'The Reds'],
        correctAnswer: 0,
      },
    ],
  },
  {
    name: 'History Quiz',
    category: 'history',
    questions: [
      {
        question: 'Who designed the Statue of Liberty?',
        options: ['Frédéric-Auguste Bartholdi', 'Gustave Eiffel', 'Leonardo da Vinci', 'Thomas Jefferson'],
        correctAnswer: 0,
      },
      {
        question: 'Which plague in the 1300s was known as the “Black Death”?',
        options: ['Bubonic plague', 'Smallpox', 'Cholera', 'Typhus'],
        correctAnswer: 0,
      },
      {
        question: 'The Treaty of Paris ended which war in 1783?',
        options: ['American Revolutionary War', 'War of 1812', 'Seven Years’ War', 'French and Indian War'],
        correctAnswer: 0,
      },
      {
        question: 'Who delivered the Gettysburg Address in 1863?',
        options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Ulysses S. Grant'],
        correctAnswer: 0,
      },
      {
        question: 'In what year did World War I begin?',
        options: ['1914', '1916', '1912', '1918'],
        correctAnswer: 0,
      },
    ],
  },
];

async function main() {
  for (const quiz of quizData) {
    await prisma.gameTemplate.create({
      data: {
        name: quiz.name,
        type: 'QUIZ',
        category: quiz.category,
        structure: { questions: quiz.questions },
        isActive: true,
      },
    });
    console.log(`Seeded quiz: ${quiz.name}`);
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
