import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
// @ts-ignore
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-white shadow-lg backdrop-blur-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="flex space-x-6">
        <Link to="/scan" className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bebas text-xl shadow hover:bg-blue-700 transition-all duration-200 hover:scale-105">Scan</Link>
        <Link to="/share" className="px-5 py-2 rounded-xl bg-blue-400 text-white font-bebas text-xl shadow hover:bg-blue-500 transition-all duration-200 hover:scale-105">Share</Link>
        <Link to="/games" className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bebas text-xl shadow hover:from-blue-700 hover:to-blue-500 transition-all duration-200 hover:scale-105">Game</Link>
      </div>
      <div>
        <Link to="/profile">
          <FaUserCircle className="h-10 w-10 text-gray-700 hover:text-blue-600 transition-colors" />
        </Link>
      </div>
    </nav>
  );
}
