

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
      <header className="w-full px-8 py-4 flex items-center justify-between bg-opacity-80 bg-black shadow-lg z-10">
        {/* Logo left */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">🎁 Tag4Gift</span>
        </div>
        {/* Center nav */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-8">
            <button className="text-white hover:text-pink-400 font-semibold text-lg transition">Scan</button>
            <button className="text-white hover:text-pink-400 font-semibold text-lg transition">Share</button>
            <button className="text-white hover:text-pink-400 font-semibold text-lg transition">Games</button>
          </div>
        </nav>
        {/* Profile icon right */}
        <div className="flex items-center">
          <FaUserCircle className="text-white text-3xl hover:text-pink-400 transition cursor-pointer" />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 w-full max-w-7xl mx-auto gap-12">
        {children}
      </main>
      <footer className="w-full py-4 text-center text-gray-300 bg-black bg-opacity-70 mt-auto">
        © {new Date().getFullYear()} Tag4Gift. All rights reserved.
      </footer>
    </div>
  );
}


function GamesCarousel() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Featured Games</h2>
      <div className="relative w-full max-w-3xl flex items-center justify-center">
        <button
          className="absolute left-0 z-10 bg-black bg-opacity-40 rounded-full p-2 text-white hover:bg-pink-500 transition"
          onClick={() => setActive((prev) => (prev === 0 ? games.length - 1 : prev - 1))}
          aria-label="Previous game"
        >&#8592;</button>
        <div className="w-full flex justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 rounded-2xl shadow-xl p-6 flex flex-col items-center w-80"
            >
              <img src={games[active].image} alt={games[active].title} className="rounded-xl w-full h-48 object-cover mb-4 border-4 border-pink-400" />
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{games[active].title}</h3>
              <p className="text-white mb-2">{games[active].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className="absolute right-0 z-10 bg-black bg-opacity-40 rounded-full p-2 text-white hover:bg-pink-500 transition"
          onClick={() => setActive((prev) => (prev === games.length - 1 ? 0 : prev + 1))}
          aria-label="Next game"
        >&#8594;</button>
      </div>
      <div className="flex gap-2 mt-4">
        {games.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${active === idx ? 'bg-pink-500' : 'bg-gray-400'} transition`}
            onClick={() => setActive(idx)}
            aria-label={`Go to game ${idx + 1}`}
          />
        ))}
      </div>
    </div>
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
      <GamesCarousel />
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
