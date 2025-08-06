import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import { useNavigate } from '@tanstack/react-router';
import GameModal from '../components/GameModal';

interface Game {
  id: string;
  name: string;
  description?: string;
  type: string;
  category?: string;
  difficulty?: string;
  isActive: boolean;
  gdevelopProjectUrl?: string;
  slug?: string;
  coverImage?: string;
}

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fetch real games data using tRPC
  const { data: gamesData, isPending: gamesLoading, error: gamesError } = trpc.games.gdevelop.getGames.useQuery({});
  const { data: categoriesData, isPending: categoriesLoading } = trpc.games.getCategories.useQuery();

  // Open game modal
  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  // Transform games data or use fallback
  const games: Game[] = gamesData || [
    {
      id: '1',
      name: 'Road Cross Adventure',
      description: 'Navigate through busy roads and obstacles in this thrilling arcade game',
      type: 'REACTION',
      category: 'Reaction',
      difficulty: 'Medium',
      isActive: true,
      gdevelopProjectUrl: 'reaction/road-cross',
      slug: 'road-cross',
      coverImage: '/games/reaction/road-cross/thumbnail.png'
    },
    {
      id: '2',
      name: 'Flappy Plane',
      description: 'Pilot your plane through challenging obstacles in this addictive reaction game',
      type: 'REACTION',
      category: 'Reaction',
      difficulty: 'Hard',
      isActive: true,
      gdevelopProjectUrl: 'reaction/flappy-plane',
      slug: 'flappy-plane',
      coverImage: '/games/reaction/flappy-plane/thumbnail.png'
    },
    {
      id: '3',
      name: 'Match Ball',
      description: 'Match colorful balls in this addictive puzzle game with increasing complexity',
      type: 'PUZZLE',
      category: 'Puzzle',
      difficulty: 'Easy',
      isActive: true,
      gdevelopProjectUrl: 'puzzle/match-ball',
      slug: 'match-ball',
      coverImage: '/games/puzzle/match-ball/thumbnail.png'
    }
  ];

  const categories: string[] = categoriesData || ['Puzzle', 'Music', 'Reaction', 'Arcade', 'Quiz'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Tag4Gift</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tag venues, share experiences, play games, and win real rewards! 
            Connect with local businesses through QR codes, social media, and competitive gaming.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{games?.length || 0}</div>
            <div className="text-gray-300">Games Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{categories?.length || 0}</div>
            <div className="text-gray-300">Game Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Rewards to Win</div>
          </div>
        </div>

        {/* Featured Games */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games?.slice(0, 6).map((game) => (
              <div key={game.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {game.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Category: {game.category}</span>
                  <span className="text-sm text-gray-400">Difficulty: {game.difficulty}</span>
                </div>
                <button 
                  onClick={() => handleGameClick(game)}
                  className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Play Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tag Venues</h3>
              <p className="text-gray-300">Scan QR codes at partner venues to earn scan coins and unlock exclusive challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Play Games</h3>
              <p className="text-gray-300">Compete in mini-games and tournaments to earn game coins and climb the leaderboards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Win Rewards</h3>
              <p className="text-gray-300">Use your coins to enter challenges and win real gifts like drinks, pizza, and discounts.</p>
            </div>
          </div>
        </div>

        {/* Game Categories */}
        {categories && categories.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Game Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => navigate({ to: '/games', search: { category: category.toLowerCase() } })}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Playing?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of players earning real rewards every day!</p>
          <div className="space-x-4">
            <button 
              onClick={() => navigate({ to: '/games' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Playing
            </button>
            <button 
              onClick={() => navigate({ to: '/games' })}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
