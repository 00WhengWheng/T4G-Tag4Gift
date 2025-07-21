

import { StrictMode } from 'react';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import * as ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import './styles.css';

const client = createClient({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

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
];

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col">
      <header className="w-full px-8 py-4 flex items-center justify-between bg-black/80 shadow-2xl z-10">
        {/* Logo left */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">🎁 Tag4Gift</span>
        </div>
        {/* Center nav */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-8">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 hover:from-pink-400 hover:to-purple-400 transition-all">Scan</button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 hover:from-pink-400 hover:to-purple-400 transition-all">Share</button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 hover:from-pink-400 hover:to-purple-400 transition-all">Games</button>
          </div>
        </nav>
        {/* Profile icon right */}
        <div className="flex items-center">
          <FaUserCircle className="text-white text-3xl hover:text-pink-400 transition cursor-pointer" />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-12 w-full max-w-7xl mx-auto gap-16">
        {children}
      </main>
      <footer className="w-full py-4 text-center text-gray-300 bg-black/70 mt-auto text-sm tracking-wide">
        © {new Date().getFullYear()} Tag4Gift. All rights reserved.
      </footer>
    </div>
  );
}




function GamesGrid() {
  return (
    <section className="w-full flex flex-col items-center relative">
      <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg z-10">Featured Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-20">
        {games.map((game, idx) => (
          <motion.div
            key={game.title}
            className="bg-gradient-to-br from-pink-500/80 via-purple-600/80 to-blue-700/80 rounded-2xl shadow-xl p-3 flex flex-col items-center border border-pink-400/30 hover:scale-105 hover:z-30 hover:shadow-pink-500/40 transition-all cursor-pointer relative min-w-[160px] max-w-[210px] mx-auto"
            style={{ top: idx % 2 === 0 ? 0 : 16 * (idx % 3), left: idx % 2 === 1 ? 8 : 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.3)', zIndex: 40 }}
          >
            <div className="relative w-full flex justify-center">
              <img src={game.image} alt={game.title} className="rounded-xl w-full h-24 object-cover mb-2 border-2 border-white/30 shadow" />
              <span className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow font-bold z-20">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1 drop-shadow text-center">{game.title}</h3>
            <p className="text-white text-xs text-center mb-1 opacity-90">{game.description}</p>
            <button className="mt-1 px-4 py-1 rounded-full bg-white/90 text-pink-600 font-bold shadow hover:bg-pink-500 hover:text-white transition-all text-xs">Play</button>
          </motion.div>
        ))}
      </div>
      {/* Layered background effect */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[90vw] h-60 bg-pink-400/10 blur-2xl rounded-3xl z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}

function MapSection() {
  // Placeholder for interactive map
  return (
    <div className="w-full max-w-4xl mx-auto bg-white bg-opacity-10 rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Venues Map</h2>
      <motion.div
        className="w-full h-64 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-2xl text-white font-bold"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        [Interactive Map Coming Soon]
      </motion.div>
    </div>
  );
}

function LeaderboardSection() {
  // Placeholder leaderboard data
  const leaderboard = [
    { name: 'Alice', score: 1200 },
    { name: 'Bob', score: 950 },
    { name: 'Charlie', score: 800 },
  ];
  return (
    <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-10 rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Leaderboard</h2>
      <table className="w-full text-white text-lg">
        <thead>
          <tr>
            <th className="text-left pb-2">Rank</th>
            <th className="text-left pb-2">Name</th>
            <th className="text-left pb-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, idx) => (
            <motion.tr
              key={entry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-pink-400/30"
            >
              <td className="py-1">{idx + 1}</td>
              <td className="py-1 font-semibold">{entry.name}</td>
              <td className="py-1">{entry.score}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-gray-200 text-center">
        Compete with friends and climb the leaderboard!
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-10 rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-4">About Tag4Gift</h2>
      <p className="text-white text-lg text-center">
        Tag4Gift is your gateway to fun, discovery, and rewards. Scan QR codes, share gifts, play games, and explore venues. Join the community and start your adventure!
      </p>
    </div>
  );
}


function App() {
  return (
    <MainLayout>
      <GamesGrid />
      <MapSection />
      <LeaderboardSection />
      <InfoSection />
    </MainLayout>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
