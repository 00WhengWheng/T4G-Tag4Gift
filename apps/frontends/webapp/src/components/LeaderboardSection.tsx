import React from 'react';
import { motion } from 'framer-motion';

const leaderboard = [
  { name: 'Alice', score: 1200, avatar: '👑' },
  { name: 'Bob', score: 950, avatar: '🥈' },
  { name: 'Charlie', score: 800, avatar: '🥉' },
  { name: 'David', score: 720, avatar: '🎮' },
  { name: 'Emma', score: 650, avatar: '🎯' },
];

const LeaderboardSection: React.FC = () => (
  <section className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-100 my-8">
    <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center">
      Leaderboard
    </h2>
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-12 bg-gray-100 text-blue-900 text-xs md:text-sm font-bold p-2">
        <div className="col-span-2 text-center">#</div>
        <div className="col-span-7 md:col-span-8">Player</div>
        <div className="col-span-3 md:col-span-2 text-right">Score</div>
      </div>
      <div className="divide-y divide-gray-200">
        {leaderboard.map((entry, idx) => (
          <motion.div
            key={entry.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            className="grid grid-cols-12 items-center p-2 text-blue-900 hover:bg-blue-50 transition-colors"
          >
            <div className="col-span-2 text-center font-bold text-base md:text-lg">
              {idx === 0 ? (
                <span className="text-yellow-500">1</span>
              ) : idx === 1 ? (
                <span className="text-gray-500">2</span>
              ) : idx === 2 ? (
                <span className="text-amber-600">3</span>
              ) : (
                <span className="text-gray-400">{idx + 1}</span>
              )}
            </div>
            <div className="col-span-7 md:col-span-8 font-medium flex items-center gap-2">
              <span className="text-lg">{entry.avatar}</span>
              {entry.name}
              {idx === 0 && <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 text-yellow-700 text-xs font-bold">MVP</span>}
            </div>
            <div className="col-span-3 md:col-span-2 text-right font-mono font-bold text-xs md:text-base">
              {entry.score.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="mt-6 text-gray-600 text-xs md:text-base text-center">
      Compete with friends and climb the leaderboard to earn exclusive rewards!
      <div className="mt-3">
        <button className="px-4 py-1.5 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all text-xs md:text-sm">
          View Full Rankings
        </button>
      </div>
    </div>
  </section>
);

export default LeaderboardSection;
