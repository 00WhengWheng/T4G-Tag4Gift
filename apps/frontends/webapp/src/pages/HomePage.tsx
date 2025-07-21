


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
	<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-yellow-100 flex flex-col">
	  <Navbar />

	  {/* Hero Section */}
	  <section className="w-full flex flex-col items-center justify-center py-16 md:py-24">
		<div className="max-w-2xl w-full px-6 py-12 bg-white/90 rounded-3xl shadow-2xl border-4 border-purple-200 text-center relative overflow-hidden">
		  <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-300 rounded-full opacity-30 blur-2xl animate-pulse z-0" />
		  <h1 className="relative z-10 text-6xl md:text-7xl font-extrabold text-blue-700 mb-6 drop-shadow-lg font-bebas tracking-wide">
			Welcome to <span className="text-purple-500">T4G</span>
		  </h1>
		  <p className="relative z-10 text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
			Play games, <span className="text-yellow-500 font-bold">scan tags</span>, share your wins, and connect with venues.<br />
			Your digital playground starts here!
		  </p>
		  <Link
			to="/games"
			className="relative z-10 inline-block mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 text-white font-bebas text-2xl shadow-lg hover:from-blue-700 hover:to-yellow-500 hover:via-purple-600 transition-all duration-200 border-2 border-yellow-200"
		  >
			Explore Games
		  </Link>
		</div>
	  </section>

	  {/* Games Showcase */}
	  <section className="w-full py-12 md:py-20">
		<div className="mx-auto px-2 max-w-screen-2xl">
		  <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
			<h2 className="font-bebas text-4xl md:text-5xl text-purple-700 tracking-wide">Featured Games</h2>
			<Link
			  to="/games"
			  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 text-white font-bebas text-xl shadow hover:from-blue-700 hover:to-yellow-500 hover:via-purple-600 transition-all duration-200 border-2 border-yellow-200"
			>
			  View All
			</Link>
		  </div>
		  <div className="grid min-w-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
			{games.map((game) => (
			  <div
				key={game.id}
				className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.04] hover:shadow-yellow-200 transition-transform duration-200 border-2 border-purple-100 relative overflow-hidden"
			  >
				<div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-30 blur-xl z-0" />
				<h3 className="relative z-10 text-2xl font-bold mb-3 text-blue-700 drop-shadow font-bebas tracking-wide">
				  {game.name}
				</h3>
				<p className="relative z-10 text-base text-gray-600 mb-6 text-center leading-relaxed">
				  {game.description}
				</p>
				<Link
				  to={`/games/${game.id}`}
				  className="relative z-10 mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 text-white font-bebas text-lg hover:from-blue-700 hover:to-yellow-500 hover:via-purple-600 transition-colors shadow border-2 border-yellow-200"
				>
				  Play
				</Link>
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* Footer */}
	  <footer className="w-full py-8 bg-gradient-to-r from-blue-700 via-purple-600 to-yellow-400 text-white text-center font-bebas text-lg tracking-wide mt-auto">
		&copy; {new Date().getFullYear()} T4G. All rights reserved.
	  </footer>
	</div>
  );
}
