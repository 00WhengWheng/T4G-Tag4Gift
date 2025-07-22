import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('tag4gift-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem('tag4gift-theme', 'light');
    }
    document.documentElement.setAttribute('data-theme', savedTheme || 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tag4gift-theme', newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 w-full px-4 md:px-10 py-3 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm z-50">
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight select-none flex items-center gap-2">
          <span className="text-3xl">🎁</span> Tag4Gift
        </span>
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-2 md:gap-6">
            <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg font-semibold text-base transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}>Home</NavLink>
            <NavLink to="/games" className={({ isActive }) => `px-4 py-2 rounded-lg font-semibold text-base transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}>Games</NavLink>
            <NavLink to="/map" className={({ isActive }) => `px-4 py-2 rounded-lg font-semibold text-base transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}>Map</NavLink>
            <NavLink to="/leaderboard" className={({ isActive }) => `px-4 py-2 rounded-lg font-semibold text-base transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}>Leaderboard</NavLink>
            <NavLink to="/about" className={({ isActive }) => `px-4 py-2 rounded-lg font-semibold text-base transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}>About</NavLink>
          </div>
        </nav>
        <div className="flex items-center gap-2 md:gap-4 relative">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-blue-400 text-lg" />
            )}
          </button>
          <div className="relative group">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors focus:outline-none">
              <FaUserCircle className="text-gray-700 text-2xl hover:text-blue-500 transition cursor-pointer" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all z-50">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Logout</a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 md:py-12 w-full max-w-3xl mx-auto gap-12 z-10">
        {children}
      </main>
      <footer className="w-full py-6 text-center text-gray-400 bg-white border-t border-gray-200 mt-auto text-sm tracking-wide z-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Tag4Gift. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
