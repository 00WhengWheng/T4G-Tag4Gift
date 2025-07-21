import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg'; // Updated to use SVG

// Dummy games data for now
const games = [
  { id: 1, name: 'Game 1', description: 'Description for Game 1' },
  { id: 2, name: 'Game 2', description: 'Description for Game 2' },
  { id: 3, name: 'Game 3', description: 'Description for Game 3' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex space-x-8">
          <Link to="/scan" className="text-lg font-semibold text-gray-700 hover:text-blue-600">Scan</Link>
          <Link to="/share" className="text-lg font-semibold text-gray-700 hover:text-blue-600">Share</Link>
          <Link to="/games" className="text-lg font-semibold text-gray-700 hover:text-blue-600">Game</Link>
        </div>
        <div>
          <Link to="/profile">
            <FaUserCircle className="h-8 w-8 text-gray-700 hover:text-blue-600" />
          </Link>
        </div>
      </nav>

      {/* Games Cards */}
      <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-2">{game.name}</h2>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <Link to={`/games/${game.id}`} className="mt-auto text-blue-600 hover:underline">Play</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
