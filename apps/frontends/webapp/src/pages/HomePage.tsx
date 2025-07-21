


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const games = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Game ${i + 1}`,
  description: `Description for Game ${i + 1}`,
}));

export default function HomePage() {
  return (
	<div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex flex-col">
	  <Navbar />

	  {/* Hero Section */}
	  <section className="w-full flex flex-col items-center justify-center py-16 md:py-24">
		<div className="max-w-2xl w-full px-6 py-12 bg-white/80 rounded-3xl shadow-2xl border border-blue-200 text-center">
		  <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-6 drop-shadow-lg font-bebas tracking-wide">
			Welcome to <span className="text-blue-500">T4G</span>
		  </h1>
		  <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
			Play games, scan tags, share your wins, and connect with venues.<br />
			Your digital playground starts here!
		  </p>
		  <Link
			to="/games"
			className="inline-block mt-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bebas text-2xl shadow hover:bg-blue-700 transition-all duration-200"
		  >
			Explore Games
		  </Link>
		</div>
	  </section>

	  {/* Games Showcase */}
	  <section className="w-full flex flex-col items-center py-12 md:py-20">
		<div className="max-w-7xl w-full px-4">
		  <div className="flex items-center justify-between mb-10">
			<h2 className="font-bebas text-4xl md:text-5xl text-blue-700 tracking-wide">Featured Games</h2>
			<Link
			  to="/games"
			  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bebas text-xl shadow hover:bg-blue-700 transition-all duration-200"
			>
			  View All
			</Link>
		  </div>
		  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			{games.map((game) => (
			  <div
				key={game.id}
				className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.03] hover:shadow-blue-300 transition-transform duration-200 border border-blue-100"
			  >
				<h3 className="text-2xl font-bold mb-3 text-blue-700 drop-shadow font-bebas tracking-wide">
				  {game.name}
				</h3>
				<p className="text-base text-gray-600 mb-6 text-center leading-relaxed">
				  {game.description}
				</p>
				<Link
				  to={`/games/${game.id}`}
				  className="mt-auto px-6 py-2 rounded-lg bg-blue-600 text-white font-bebas text-lg hover:bg-blue-700 transition-colors shadow"
				>
				  Play
				</Link>
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* Footer */}
	  <footer className="w-full py-8 bg-blue-700 text-white text-center font-bebas text-lg tracking-wide mt-auto">
		&copy; {new Date().getFullYear()} T4G. All rights reserved.
	  </footer>
	</div>
  );
}
