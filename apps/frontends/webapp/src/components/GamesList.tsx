import React, { useState } from 'react';
import { useQuery } from 'urql';
import { motion } from 'framer-motion';
import GameDisplay from './GameDisplay';

// Query to get all game templates
const GET_GAME_TEMPLATES = `
  query GetGameTemplates {
    gameTemplates {
      id
      name
      type
      category
      description
      gdevelopProjectUrl
      structure
    }
  }
`;

// Query to get GDevelop games specifically
const GET_GDEVELOP_GAMES = `
  query GetGDevelopGames($category: String) {
    gdevelopGames(category: $category) {
      id
      name
      type
      category
      description
      gdevelopProjectUrl
      structure
    }
  }
`;

type GameTemplate = {
  id: string;
  name: string;
  type: string;
  category?: string;
  description?: string;
  gdevelopProjectUrl?: string;
  structure: string;
};

interface GameListProps {
  userId?: string;
  onGameComplete?: (gameId: string, score: number) => void;
}

export default function GamesList({ userId, onGameComplete }: GameListProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Fetch all game templates
  const [{ data: allGamesData, fetching: fetchingAll, error: allError }] = useQuery({ 
    query: GET_GAME_TEMPLATES 
  });
  
  // Fetch GDevelop games with optional category filter
  const [{ data: gdevelopData, fetching: fetchingGDevelop, error: gdevelopError }] = useQuery({
    query: GET_GDEVELOP_GAMES,
    variables: { category: selectedCategory }
  });
  
  // Combine and filter games based on selection
  const getFilteredGames = () => {
    let games: GameTemplate[] = [];
    
    // Add all games if we have data and no type filter
    if (allGamesData && !selectedType) {
      games = [...allGamesData.gameTemplates];
    }
    
    // Add or filter by type if selected
    if (selectedType) {
      if (selectedType === 'QUIZ') {
        // For quiz games, filter from all games
        games = allGamesData?.gameTemplates.filter((g: GameTemplate) => g.type === 'QUIZ') || [];
      } else {
        // For GDevelop games, use the specific query result
        games = gdevelopData?.gdevelopGames || [];
      }
    }
    
    return games;
  };
  
  const games = getFilteredGames();
  const isLoading = fetchingAll || fetchingGDevelop;
  const hasError = allError || gdevelopError;
  
  // Get unique categories from all games
  const getCategories = () => {
    const categories = new Set<string>();
    if (allGamesData) {
      allGamesData.gameTemplates.forEach((game: GameTemplate) => {
        if (game.category) categories.add(game.category);
      });
    }
    return Array.from(categories);
  };
  
  // Handle game completion
  const handleGameComplete = (gameId: string) => (score: number) => {
    if (onGameComplete) {
      onGameComplete(gameId, score);
    }
  };

  if (isLoading) return <div className="loading">Loading games...</div>;
  if (hasError) return <div className="error">Error loading games: {allError?.message || gdevelopError?.message}</div>;

  return (
    <div className="games-list-container">
      <div className="games-filter">
        <h3>Game Types</h3>
        <div className="filter-buttons">
          <button 
            className={selectedType === null ? 'active' : ''} 
            onClick={() => {
              setSelectedType(null);
              setSelectedCategory(null);
            }}
          >
            All Games
          </button>
          <button 
            className={selectedType === 'QUIZ' ? 'active' : ''} 
            onClick={() => {
              setSelectedType('QUIZ');
              setSelectedCategory(null);
            }}
          >
            Quiz Games
          </button>
          <button 
            className={selectedType === 'PUZZLE' ? 'active' : ''} 
            onClick={() => {
              setSelectedType('PUZZLE');
              setSelectedCategory(null);
            }}
          >
            Puzzle Games
          </button>
          <button 
            className={selectedType === 'REACTION' ? 'active' : ''} 
            onClick={() => {
              setSelectedType('REACTION');
              setSelectedCategory(null);
            }}
          >
            Reaction Games
          </button>
          <button 
            className={selectedType === 'MUSIC' ? 'active' : ''} 
            onClick={() => {
              setSelectedType('MUSIC');
              setSelectedCategory(null);
            }}
          >
            Music Games
          </button>
        </div>
        
        {selectedType && (
          <div className="category-filter">
            <h4>Categories</h4>
            <div className="filter-buttons">
              <button 
                className={selectedCategory === null ? 'active' : ''} 
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </button>
              {getCategories().map(category => (
                <button 
                  key={category}
                  className={selectedCategory === category ? 'active' : ''} 
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <motion.div 
        className="games-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {games.length === 0 ? (
          <p>No games found matching your criteria.</p>
        ) : (
          games.map((game: GameTemplate) => (
            <motion.div 
              key={game.id}
              className="game-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GameDisplay 
                game={game} 
                userId={userId}
                onGameComplete={handleGameComplete(game.id)}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
