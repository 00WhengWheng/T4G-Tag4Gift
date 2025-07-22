import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    title: 'Flappy Bird',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Fly through pipes and beat your friends!'
  },
  {
    title: 'Memory Match',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Test your memory and win prizes.'
  },
  {
    title: 'Quiz Master',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Answer questions, climb the leaderboard.'
  },
  {
    title: 'Space Shooter',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    description: 'Defend Earth from alien invaders!'
  },
  {
    title: 'Puzzle Quest',
    image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=400&q=80',
    description: 'Solve puzzles and unlock treasures.'
  },
  {
    title: 'Racing Rivals',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    description: 'Race against friends on exotic tracks.'
  },
  {
    title: 'Word Master',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80',
    description: 'Find words and expand your vocabulary.'
  },
  {
    title: 'Treasure Hunt',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80',
    description: 'Find hidden treasures across the map.'
  }
];

const GamesGrid: React.FC = () => (
  <section className="w-full py-8">
    <div className="mb-8 max-w-2xl mx-auto px-4">
      <h2 className="font-sans text-2xl md:text-3xl text-blue-900 font-bold tracking-tight text-center">Featured Games</h2>
    </div>
    <div className="w-full flex flex-wrap justify-center gap-6 px-2">
      {games.map((game, idx) => (
        <motion.div
          key={game.title}
          className="flex flex-col items-center bg-white shadow-md min-h-[280px] w-[220px] flex-shrink-0 relative overflow-hidden rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-200 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.3 }}
        >
          <div className="w-full h-32 rounded-t-xl overflow-hidden">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-32 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex-1 flex flex-col px-3 py-2 w-full">
            <h3 className="text-base font-bold mb-1 text-blue-900 text-center">{game.title}</h3>
            <p className="text-gray-600 mb-2 text-xs leading-relaxed text-center">{game.description}</p>
          </div>
          <div className="flex justify-center items-center px-3 pb-3 mt-auto w-full">
            <button
              className="px-4 py-1 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-150 w-full text-sm"
            >
              Play Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default GamesGrid;
