import React, { useState } from 'react';
import { Search, Play, ExternalLink, Gamepad2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { trpc } from '../utils/trpc';

// Simple UI Components
const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }: any) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  const variantClasses: Record<string, string> = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 hover:bg-gray-50 hover:text-gray-900',
    game: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg transform hover:scale-105 transition-all duration-200',
  };
  const sizeClasses: Record<string, string> = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-12 px-6 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }: any) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }: any) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }: any) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }: any) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className = '', variant = 'default', ...props }: any) => {
  const variants: Record<string, string> = {
    default: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-300',
    easy: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };
  
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

interface Game {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
  isActive: boolean;
  gdevelopProjectUrl: string;
  slug: string;
  coverImage?: string;
}

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [games, setGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch games from backend
  React.useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsPending(true);
        
        // Fetch games from tRPC-like endpoint
        const gamesResponse = await fetch('/api/trpc/games.getAll');
        const gamesData = await gamesResponse.json();
        
        // Fetch categories
        const categoriesResponse = await fetch('/api/trpc/games.getCategories');
        const categoriesData = await categoriesResponse.json();
        
        if (gamesData.result) {
          setGames(gamesData.result.data || []);
        } else {
          // Fallback to mock data with actual games from public folder
          setGames([
            {
              id: '1',
              name: 'Anxious Side',
              description: 'Navigate through challenging puzzles in this atmospheric adventure game',
              category: 'Puzzle',
              difficulty: 'Medium' as const,
              type: 'PUZZLE',
              isActive: true,
              gdevelopProjectUrl: 'puzzle/anxious-side',
              slug: 'anxious-side',
              coverImage: '/games/puzzle/anxious-side/thumbnail.png'
            },
            {
              id: '2',
              name: 'Match Ball',
              description: 'Match colorful balls in this addictive puzzle game with increasing complexity',
              category: 'Puzzle',
              difficulty: 'Easy' as const,
              type: 'PUZZLE',
              isActive: true,
              gdevelopProjectUrl: 'puzzle/match-ball',
              slug: 'match-ball',
              coverImage: '/games/puzzle/match-ball/thumbnail.png'
            },
            {
              id: '3',
              name: 'Music Rhythm',
              description: 'Test your rhythm and musical skills in this beat-matching challenge',
              category: 'Music',
              difficulty: 'Medium' as const,
              type: 'MUSIC',
              isActive: true,
              gdevelopProjectUrl: 'music/rhythm-game',
              slug: 'music-rhythm',
              coverImage: '/games/music/rhythm-game/thumbnail.png'
            },
            {
              id: '4',
              name: 'Quick Reaction',
              description: 'Test your reflexes in this fast-paced reaction game with multiple challenges',
              category: 'Reaction',
              difficulty: 'Hard' as const,
              type: 'REACTION',
              isActive: true,
              gdevelopProjectUrl: 'reaction/quick-test',
              slug: 'quick-reaction',
              coverImage: '/games/reaction/quick-test/thumbnail.png'
            },
            {
              id: '5',
              name: 'Road Cross Adventure',
              description: 'Navigate through busy roads and obstacles in this thrilling arcade game',
              category: 'Arcade',
              difficulty: 'Medium' as const,
              type: 'ARCADE',
              isActive: true,
              gdevelopProjectUrl: 'arcade/road-cross',
              slug: 'road-cross',
              coverImage: '/games/arcade/road-cross/thumbnail.png'
            }
          ]);
        }
        
        if (categoriesData.result) {
          setCategories(categoriesData.result.data || []);
        } else {
          setCategories(['Puzzle', 'Music', 'Reaction', 'Arcade', 'Quiz']);
        }
        
      } catch (err) {
        console.error('Failed to fetch games:', err);
        setError(err as Error);
        
        // Fallback to mock data
        setGames([
          {
            id: '1',
            name: 'Anxious Side',
            description: 'Navigate through challenging puzzles in this atmospheric adventure game',
            category: 'Puzzle',
            difficulty: 'Medium' as const,
            type: 'PUZZLE',
            isActive: true,
            gdevelopProjectUrl: 'puzzle/anxious-side',
            slug: 'anxious-side',
            coverImage: '/games/puzzle/anxious-side/thumbnail.png'
          },
          {
            id: '2',
            name: 'Match Ball',
            description: 'Match colorful balls in this addictive puzzle game with increasing complexity',
            category: 'Puzzle',
            difficulty: 'Easy' as const,
            type: 'PUZZLE',
            isActive: true,
            gdevelopProjectUrl: 'puzzle/match-ball',
            slug: 'match-ball',
            coverImage: '/games/puzzle/match-ball/thumbnail.png'
          },
          {
            id: '3',
            name: 'Road Cross Adventure',
            description: 'Navigate through busy roads and obstacles in this thrilling arcade game',
            category: 'Arcade',
            difficulty: 'Medium' as const,
            type: 'ARCADE',
            isActive: true,
            gdevelopProjectUrl: 'arcade/road-cross',
            slug: 'road-cross',
            coverImage: '/games/arcade/road-cross/thumbnail.png'
          }
        ]);
        setCategories(['Puzzle', 'Music', 'Reaction', 'Arcade', 'Quiz']);
      } finally {
        setIsPending(false);
      }
    };

    fetchGames();
  }, []);

  // Game launch handler
  const handlePlayGame = (game: Game) => {
    const gameUrl = `/games/${game.gdevelopProjectUrl}/index.html`;
    // Open game in new window with proper dimensions for GDeveloper games
    const gameWindow = window.open(
      gameUrl,
      `game_${game.slug}`,
      'width=1024,height=768,scrollbars=no,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
    );
    
    if (gameWindow) {
      gameWindow.focus();
    } else {
      // Fallback if popup blocked
      window.location.href = gameUrl;
    }
  };

  // Add "All" to categories
  const allCategories = ['All', ...categories];

  const filteredGames = games.filter((game: Game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory && game.isActive;
  });

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'easy';
      case 'Medium': return 'medium';
      case 'Hard': return 'hard';
      default: return 'default';
    }
  };

  const getGameIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'puzzle': return '🧩';
      case 'arcade': return '🕹️';
      case 'music': return '🎵';
      case 'reaction': return '⚡';
      case 'quiz': return '🧠';
      default: return '🎮';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Puzzle': 'from-purple-500 to-indigo-600',
      'Music': 'from-pink-500 to-rose-600',
      'Reaction': 'from-orange-500 to-red-600',
      'Arcade': 'from-blue-500 to-cyan-600',
      'Quiz': 'from-green-500 to-emerald-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[category] || colors.default;
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-blue-600 animate-pulse" />
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-pulse">Loading amazing games...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <div className="text-red-500 text-xl mb-4">⚠️ Error loading games</div>
          <p className="text-gray-600 dark:text-gray-300">{error.message}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-4"
            variant="outline"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 tracking-tight"
        >
          🎮 Game Library
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Play exciting games built with GDeveloper and win coins in challenges!
        </motion.p>
      </div>

      {/* Search and Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-between"
      >
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-200"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {allCategories.map((category: string) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="rounded-full px-5 font-bold transition-all duration-200"
            >
              {category === 'All' ? '🎯 All' : `${getGameIcon(category)} ${category}`}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Games Count */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Found <span className="font-bold text-blue-600 dark:text-blue-400">{filteredGames.length}</span> games
          {selectedCategory !== 'All' && (
            <span> in <span className="font-bold">{selectedCategory}</span></span>
          )}
        </p>
      </motion.div>

      {/* Games Grid */}
      {filteredGames.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <Gamepad2 className="w-24 h-24 mx-auto mb-6 text-gray-400" />
          <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">
            No games found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            variant="outline"
          >
            Reset Filters
          </Button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game: Game, i: number) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.4 + i * 0.05, 
                type: 'spring', 
                bounce: 0.1 
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 backdrop-blur-lg flex flex-col h-full overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(game.category)} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                    {game.coverImage && (
                      <img 
                        src={game.coverImage} 
                        alt={game.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="text-6xl mb-2 drop-shadow-lg">{getGameIcon(game.type)}</div>
                      <ExternalLink className="w-6 h-6 mx-auto opacity-70 group-hover:opacity-100 transition-opacity drop-shadow" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={getDifficultyVariant(game.difficulty)}>
                        {game.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {game.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                    {game.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{game.category}</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      GDeveloper
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                    variant="game"
                    onClick={() => handlePlayGame(game)}
                  >
                    <Play className="w-5 h-5" />
                    Play Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          🎮 All games are powered by <strong>GDeveloper</strong>
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Play games, participate in challenges, and earn coins in the T4G ecosystem!
        </p>
      </motion.div>
    </div>
  );
};

export default GamesPage;
