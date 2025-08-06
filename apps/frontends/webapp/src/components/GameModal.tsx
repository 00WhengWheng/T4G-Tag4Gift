import React, { useState, useEffect } from 'react';
import { X, Play, Trophy, Clock, Users, Maximize2, Minimize2 } from 'lucide-react';

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

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  const [isGameStarted, setIsGameStarted] = useState(true); // Start directly in game mode
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start loading immediately

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset game state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsGameStarted(true); // Always start in game mode when reopened
      setIsFullscreen(false);
      setIsLoading(true); // Always start with loading when reopened
    }
  }, [isOpen]);

  // Start loading the game when modal opens
  useEffect(() => {
    if (isOpen && game) {
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, game]);

  if (!isOpen || !game) return null;

  const handleStartGame = () => {
    setIsLoading(true);
    setIsGameStarted(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleShowInfo = () => {
    setIsGameStarted(false);
    setIsLoading(false);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getGameUrl = (game: Game) => {
    if (game.gdevelopProjectUrl) {
      // For GDevelop games, use the URL directly from database (already includes /index.html)
      return game.gdevelopProjectUrl;
    }
    
    // For other games, use type/slug structure
    const gameSlug = game.slug || game.name.toLowerCase().replace(/\s+/g, '-');
    return `/games/${game.type.toLowerCase()}/${gameSlug}/index.html`;
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'text-green-400 bg-green-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'hard':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'puzzle':
        return '🧩';
      case 'reaction':
        return '⚡';
      case 'music':
        return '🎵';
      case 'quiz':
        return '🧠';
      case 'arcade':
        return '🕹️';
      default:
        return '🎮';
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={!isGameStarted ? onClose : undefined}
      />
      
      {/* Modal */}
      <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 transition-all duration-300 ${
        isFullscreen 
          ? 'w-full h-full rounded-none' 
          : isGameStarted 
            ? 'w-full max-w-4xl h-[80vh]' 
            : 'w-full max-w-2xl'
      }`}>
        
        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {isGameStarted && (
            <button
              onClick={handleFullscreen}
              className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5 text-white" />
              ) : (
                <Maximize2 className="w-5 h-5 text-white" />
              )}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {!isGameStarted ? (
          <>
            {/* Game Preview */}
            <div className="relative h-48 bg-gradient-to-r from-purple-600 to-blue-600">
              {game.coverImage ? (
                <img 
                  src={game.coverImage} 
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-6xl">{getTypeIcon(game.type)}</div>
                </div>
              )}
              
              {/* Game Type Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                  {game.type}
                </span>
              </div>
            </div>

            {/* Game Info */}
            <div className="p-6">
              {/* Title and Category */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">{game.name}</h2>
                <div className="flex items-center gap-3">
                  {game.category && (
                    <span className="text-purple-400 text-sm font-medium">
                      {game.category}
                    </span>
                  )}
                  {game.difficulty && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {game.description && (
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {game.description}
                </p>
              )}

              {/* Game Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Difficulty</div>
                  <div className="text-sm font-medium text-white">{game.difficulty || 'Normal'}</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Play Time</div>
                  <div className="text-sm font-medium text-white">5-15 min</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Players</div>
                  <div className="text-sm font-medium text-white">Single</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleStartGame}
                  disabled={!game.isActive}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <Play className="w-4 h-4" />
                  Start Game
                </button>
                
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Game Status */}
              {!game.isActive && (
                <div className="mt-4 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                  <p className="text-red-400 text-sm text-center">
                    This game is currently unavailable. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Game Container */}
            <div className="relative w-full h-full bg-black">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading {game.name}...</p>
                    <p className="text-gray-400 text-sm mt-2">Get ready to play!</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={getGameUrl(game)}
                  className="w-full h-full border-0"
                  title={game.name}
                  allow="gamepad; keyboard-map *; cross-origin-isolated"
                  allowFullScreen
                  onLoad={() => console.log(`Game loaded: ${getGameUrl(game)}`)}
                  onError={() => console.error(`Failed to load game: ${getGameUrl(game)}`)}
                />
              )}
            </div>

            {/* Game Controls Bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-4">
              <span className="text-white text-sm font-medium">{game.name}</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <button
                onClick={handleShowInfo}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Game Info
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}