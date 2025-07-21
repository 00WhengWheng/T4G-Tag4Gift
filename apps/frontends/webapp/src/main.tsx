

import { StrictMode } from 'react';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import * as ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
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

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'bumblebee'>('light');
  
  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('tag4gift-theme') as 'light' | 'dark' | 'bumblebee' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme if not saved
      localStorage.setItem('tag4gift-theme', 'light');
    }
    document.documentElement.setAttribute('data-theme', savedTheme || 'light');
  }, []);
  
  // Toggle between themes
  const toggleTheme = () => {
    let newTheme: 'light' | 'dark' | 'bumblebee';
    if (theme === 'dark') {
      newTheme = 'light';
    } else if (theme === 'light') {
      newTheme = 'bumblebee';
    } else {
      newTheme = 'dark';
    }
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tag4gift-theme', newTheme);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col">
      <header className="sticky top-0 w-full px-4 md:px-8 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md shadow-2xl z-50">
        {/* Logo left */}
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">🎁 Tag4Gift</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-4 lg:gap-8">
            <button className="btn btn-primary neon-btn px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 transition-all">Scan</button>
            <button className="btn btn-primary neon-btn px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 transition-all">Share</button>
            <button className="btn btn-primary neon-btn px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md hover:scale-105 transition-all">Games</button>
          </div>
        </nav>
        
        {/* Right side controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-300 text-xl" />
            ) : (
              <FaMoon className="text-blue-300 text-xl" />
            )}
          </button>
          
          {/* Profile icon */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <FaUserCircle className="text-white text-3xl hover:text-pink-400 transition cursor-pointer" />
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black/90 backdrop-blur-md rounded-box w-52 text-white border border-purple-500/30">
              <li><a className="hover:bg-purple-500/30">Profile</a></li>
              <li><a className="hover:bg-purple-500/30">Settings</a></li>
              <li><a className="hover:bg-purple-500/30">Logout</a></li>
            </ul>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-black/90 z-40 pt-20 px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              <button className="w-full btn btn-primary neon-btn py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md">Scan</button>
              <button className="w-full btn btn-primary neon-btn py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md">Share</button>
              <button className="w-full btn btn-primary neon-btn py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-md">Games</button>
              
              <div className="mt-6 flex items-center gap-3">
                <FaUserCircle className="text-white text-3xl" />
                <span className="text-white font-medium">My Profile</span>
              </div>
              
              {/* Theme toggle in mobile menu */}
              <div className="mt-4 flex items-center gap-3">
                <button 
                  onClick={toggleTheme} 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-white"
                >
                  {theme === 'dark' ? (
                    <>
                      <FaSun className="text-yellow-300" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-blue-300" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 md:py-12 w-full max-w-7xl mx-auto gap-8 md:gap-16">
        {children}
      </main>
      
      <footer className="w-full py-6 text-center text-gray-300 bg-black/70 mt-auto text-sm tracking-wide">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Tag4Gift. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}




function GamesGrid() {
  return (
    <section style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: '4rem 2rem',
        background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)'
      }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '800',
        color: '#1f2937',
        marginBottom: '2rem',
        letterSpacing: '-0.025em',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        zIndex: 10,
        textAlign: 'center'
      }}>
        <span style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundImage: 'linear-gradient(to right, #f472b6, #c084fc)'
        }}>Featured Games</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, auto)',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        position: 'relative',
        zIndex: 20,
        padding: '1rem'
      }}>
        {games.map((game, idx) => (
          <motion.div
            key={game.title}
            style={{
              position: 'relative',
              zIndex: 0,
              background: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.8), rgba(147, 51, 234, 0.8), rgba(29, 78, 216, 0.8))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              padding: '0.5rem',
              margin: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              cursor: 'pointer',
              width: 'calc(100% - 1rem)',
              height: 'calc(100% - 1rem)',
              transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 8px 16px 0 rgba(124, 58, 237, 0.15), 0 2px 8px 0 rgba(251, 191, 36, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <div className="relative w-full flex justify-center">
              <img 
                src={game.image} 
                alt={game.title} 
                style={{
                  borderRadius: '0.25rem',
                  width: '100%',
                  height: '4rem',
                  objectFit: 'cover',
                  marginBottom: '0.5rem',
                  borderWidth: '1px',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
              />
              <span style={{
                position: 'absolute',
                top: '-0.25rem',
                right: '-0.25rem',
                display: 'inline-block',
                color: 'white',
                fontSize: '0.5rem',
                fontWeight: '700',
                padding: '0.125rem 0.25rem',
                borderRadius: '9999px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                background: 'linear-gradient(to right, #ec4899, #a855f7)',
                zIndex: 20
              }}>
                NEW
              </span>
            </div>
            <h3 style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '0.25rem',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>{game.title}</h3>
            <p style={{
              color: 'white',
              fontSize: '0.625rem',
              textAlign: 'center',
              marginBottom: '0.25rem',
              opacity: '0.9'
            }}>{game.description}</p>
            <button style={{
              marginTop: '0.125rem',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#db2777',
              fontWeight: '700',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              fontSize: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ec4899';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = '0 0 4px 1px #fbbf24, 0 0 8px 2px #a21caf';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.color = '#db2777';
              e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = '';
            }}>
              Play Now
            </button>
          </motion.div>
        ))}
      </div>
      
      {/* Layered background effects */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl h-[80%] bg-pink-400/10 blur-3xl rounded-3xl z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </section>
  );
}

function MapSection() {
  // Placeholder for interactive map
  return (
    <div className="w-full max-w-4xl mx-auto glass bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center border border-white/10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Venues Map</span>
      </h2>
      <motion.div
        className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center text-xl md:text-2xl text-white font-bold shadow-lg overflow-hidden relative"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 opacity-20 confetti-bg"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          [Interactive Map Coming Soon]
        </div>
      </motion.div>
      <p className="text-white/80 text-sm md:text-base mt-4 text-center max-w-lg">
        Discover Tag4Gift venues near you. Scan QR codes at these locations to unlock special rewards and experiences.
      </p>
    </div>
  );
}

function LeaderboardSection() {
  // Placeholder leaderboard data
  const leaderboard = [
    { name: 'Alice', score: 1200, avatar: '👑' },
    { name: 'Bob', score: 950, avatar: '🥈' },
    { name: 'Charlie', score: 800, avatar: '🥉' },
    { name: 'David', score: 720, avatar: '🎮' },
    { name: 'Emma', score: 650, avatar: '🎯' },
  ];
  
  return (
    <div className="w-full max-w-2xl mx-auto glass bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center border border-white/10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-md">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">Leaderboard</span>
      </h2>
      
      <div className="w-full overflow-hidden rounded-xl border border-purple-500/30 bg-black/30 backdrop-blur-sm">
        <div className="grid grid-cols-12 bg-gradient-to-r from-purple-500/50 to-pink-500/50 text-white text-sm md:text-base font-bold p-3">
          <div className="col-span-2 text-center">#</div>
          <div className="col-span-7 md:col-span-8">Player</div>
          <div className="col-span-3 md:col-span-2 text-right">Score</div>
        </div>
        
        <div className="divide-y divide-purple-500/20">
          {leaderboard.map((entry, idx) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-12 items-center p-3 text-white hover:bg-white/5 transition-colors"
            >
              <div className="col-span-2 text-center font-bold text-lg md:text-xl">
                {idx === 0 ? (
                  <span className="text-yellow-400">1</span>
                ) : idx === 1 ? (
                  <span className="text-gray-300">2</span>
                ) : idx === 2 ? (
                  <span className="text-amber-600">3</span>
                ) : (
                  <span className="text-gray-400">{idx + 1}</span>
                )}
              </div>
              <div className="col-span-7 md:col-span-8 font-medium flex items-center gap-2">
                <span className="text-lg">{entry.avatar}</span>
                {entry.name}
                {idx === 0 && <span className="badge-pulse card-badge text-xs py-0.5 px-2">MVP</span>}
              </div>
              <div className="col-span-3 md:col-span-2 text-right font-mono font-bold text-sm md:text-base">
                {entry.score.toLocaleString()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-white/80 text-sm md:text-base text-center">
        Compete with friends and climb the leaderboard to earn exclusive rewards!
        <div className="mt-3">
          <button className="neon-btn px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold shadow-md hover:scale-105 transition-all text-sm">
            View Full Rankings
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="w-full max-w-2xl mx-auto glass bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center border border-white/10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">About Tag4Gift</span>
      </h2>
      
      <motion.div 
        className="w-full p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white text-base md:text-lg text-center leading-relaxed">
          Tag4Gift is your gateway to fun, discovery, and rewards. Scan QR codes, share gifts, play games, and explore venues. Join the community and start your adventure!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-pink-400 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
            </svg>
            <span className="text-white text-sm font-medium">Scan QR</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-purple-400 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <span className="text-white text-sm font-medium">Share Gifts</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-400 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
            <span className="text-white text-sm font-medium">Play Games</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-400 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
            <span className="text-white text-sm font-medium">Win Rewards</span>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-6">
        <button className="neon-btn px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-md hover:scale-105 transition-all">
          Join Now
        </button>
      </div>
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
