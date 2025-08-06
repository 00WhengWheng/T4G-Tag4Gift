import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import { GameModal } from '../components/GameModal';
import { CoinBalance } from '../components/CoinBalance';

export default function HomePage() {
  // Fetch real games from database using tRPC hooks
  const { data: gdevelopGames, isLoading: gamesLoading, error: gamesError } = trpc.games.gdevelop.getGames.useQuery({});
  const { data: gameTemplates, isLoading: templatesLoading } = trpc.games.getTemplates.useQuery({});

  // Combine both data sources
  const games = gdevelopGames || [];
  const categories = [...new Set(games.map((game: any) => game.category).filter(Boolean))];

  const isLoading = gamesLoading || templatesLoading;

  // Game modal state
  const [selectedGame, setSelectedGame] = useState<any | null>(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  const handlePlayGame = (game: any) => {
    if (game.gdevelopProjectUrl && game.isActive) {
      setSelectedGame(game);
      setIsGameModalOpen(true);
    } else {
      alert('Game not available yet!');
    }
  };

  const handleCloseGameModal = () => {
    setIsGameModalOpen(false);
    setSelectedGame(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading games...</p>
        </div>
      </div>
    );
  }

  if (gamesError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl mb-4">Error loading games:</p>
          <p className="text-gray-300">{gamesError.message}</p>
        </div>
      </div>
    );
  }

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

        {/* Coin Balance */}
        <div className="max-w-2xl mx-auto mb-16">
          <CoinBalance />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{games.length}</div>
            <div className="text-gray-300">Games Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{categories.length}</div>
            <div className="text-gray-300">Game Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">{(games as any[]).length}</div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-semibold">Active Games</span>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{(games as any[]).filter((g: any) => g.isActive).length}</div>
            <div className="text-gray-300">Active Games</div>
          </div>
        </div>

        {/* Featured Games */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Games</h2>
          {(games as any[]).length === 0 ? (
            <div className="text-center text-white py-12">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">No Games Available Yet</h3>
              <p className="text-gray-300">Games will appear here once they're added to the platform.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(games as any[]).slice(0, 6).map((game: any) => (
                <div key={game.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {game.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{game.description || 'No description available'}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">
                      Category: {game.category || 'General'}
                    </span>
                    <span className="text-sm text-gray-400">
                      Difficulty: {game.difficulty || 'Unknown'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {game.isActive ? '🟢 Active' : '🔴 Inactive'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {game.gdevelopProjectUrl ? '🎮 Playable' : '⚙️ In Development'}
                    </span>
                  </div>
                  <button 
                    onClick={() => handlePlayGame(game)}
                    disabled={!game.gdevelopProjectUrl || !game.isActive}
                    className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {!game.gdevelopProjectUrl ? 'Coming Soon' : !game.isActive ? 'Inactive' : 'Play Now'}
                  </button>
                </div>
              ))}
            </div>
          )}
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
                  key={category as string}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category as string}
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
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
              Start Playing
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          isOpen={isGameModalOpen}
          onClose={handleCloseGameModal}
          game={selectedGame}
        />
      )}

    </div>
  );
}
