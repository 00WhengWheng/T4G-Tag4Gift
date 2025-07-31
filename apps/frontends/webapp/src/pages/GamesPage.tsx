import React, { useState } from 'react';
import { Search, Play } from 'lucide-react';
import { Button, Card, CardContent, CardFooter, CardHeader } from '@t4g/ui';
import { motion } from 'framer-motion';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: number;
  image: string;
}

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const games: Game[] = [
    {
      id: '1',
      title: 'Flappy Bird',
      description: 'Navigate through pipes in this classic arcade game',
      category: 'Arcade',
      difficulty: 'Medium',
      players: 1250,
      image: '/games/flappy-bird/thumbnail.jpg'
    },
    {
      id: '2',
      title: 'Music Rhythm',
      description: 'Hit the beats and create amazing music',
      category: 'Music',
      difficulty: 'Easy',
      players: 890,
      image: '/games/music-rhythm/thumbnail.jpg'
    },
    {
      id: '3',
      title: 'Road Cross',
      description: 'Cross the busy road without getting hit',
      category: 'Reaction',
      difficulty: 'Hard',
      players: 2100,
      image: '/games/road-cross/thumbnail.jpg'
    },
    {
      id: '4',
      title: 'Shark Frenzy',
      description: 'Survive the shark-infested waters',
      category: 'Reaction',
      difficulty: 'Hard',
      players: 1680,
      image: '/games/shark-frenzy/thumbnail.jpg'
    },
    {
      id: '5',
      title: 'Match Ball',
      description: 'Match colored balls in this puzzle game',
      category: 'Puzzle',
      difficulty: 'Medium',
      players: 950,
      image: '/games/match-ball/thumbnail.jpg'
    },
    {
      id: '6',
      title: 'Jukebox',
      description: 'Create your own music playlist',
      category: 'Music',
      difficulty: 'Easy',
      players: 720,
      image: '/games/jukebox/thumbnail.jpg'
    }
  ];

  const categories = ['All', 'Arcade', 'Music', 'Reaction', 'Puzzle'];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
      case 'Hard': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-display font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 tracking-tight">
          Game Library
        </h1>
        <p className="text-xl text-foreground/80 mb-8 font-sans">
          Choose from our collection of exciting games
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-muted rounded-xl bg-white dark:bg-gray-800 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent shadow"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="rounded-full px-5 font-bold"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredGames.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 + i * 0.07, type: 'spring', bounce: 0.16 }}
          >
            <Card hover className="rounded-2xl shadow-xl border-2 border-primary/20 bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-t-2xl flex items-center justify-center">
                  <Play className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground font-display">
                    {game.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4 font-sans">
                  {game.description}
                </p>
                <div className="flex justify-between items-center text-sm text-muted font-sans mt-auto">
                  <span>{game.category}</span>
                  <span>{game.players} players</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Play Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;