import React from 'react';
import { QuizGame } from './QuizGame';
import GDevelopGame from './GDevelopGame';

type GameTemplate = {
  id: string;
  name: string;
  type: string;
  category?: string;
  description?: string;
  gdevelopProjectUrl?: string;
  structure: string;
};

interface Props {
  game: GameTemplate;
  userId?: string; // Add userId prop for tracking game sessions
  onGameComplete?: (score: number) => void;
}

const GameDisplay: React.FC<Props> = ({ game, userId = 'guest', onGameComplete }) => {
  // Determine which game component to render based on type
  switch (game.type) {
    case 'QUIZ':
      return <QuizGame />;
      
    case 'PUZZLE':
    case 'REACTION':
    case 'MUSIC':
      return (
        <GDevelopGame 
          game={game} 
          userId={userId}
          onComplete={onGameComplete}
        />
      );
      
    default:
      // Fallback for unknown game types
      return (
        <div className="unknown-game-type">
          <h3>{game.name}</h3>
          <p>Game type "{game.type}" is not supported.</p>
          {game.description && <p>{game.description}</p>}
        </div>
      );
  }
};

export default GameDisplay;

