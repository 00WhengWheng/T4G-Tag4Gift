import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from 'urql';

// GraphQL mutation for recording game sessions
const RECORD_GAME_SESSION = `
  mutation RecordGameSession($userId: ID!, $gameId: ID!, $score: Float, $timeSpent: Float) {
    recordGDevelopGameSession(
      userId: $userId,
      gameId: $gameId,
      score: $score,
      timeSpent: $timeSpent
    )
  }
`;

interface GDevelopGameProps {
  game: {
    id: string;
    name: string;
    type: string;
    category?: string;
    description?: string;
    gdevelopProjectUrl?: string;
  };
  userId: string;
  onComplete?: (score: number) => void;
}

/**
 * Component for rendering GDevelop games in an iframe with message communication
 */
const GDevelopGame: React.FC<GDevelopGameProps> = ({ game, userId, onComplete }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<{
    score?: number;
    timeSpent?: number;
    isCompleted?: boolean;
  }>({});

  const [recordResult, recordSession] = useMutation(RECORD_GAME_SESSION);

  // Handle messages from the GDevelop game iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is from our game iframe
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) {
        return;
      }

      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        if (data.type === 'GAME_LOADED') {
          setIsLoading(false);
        } else if (data.type === 'GAME_ERROR') {
          setError(data.message || 'An error occurred in the game');
        } else if (data.type === 'GAME_SCORE_UPDATE') {
          setGameState(prev => ({ ...prev, score: data.score }));
        } else if (data.type === 'GAME_TIME_UPDATE') {
          setGameState(prev => ({ ...prev, timeSpent: data.timeSpent }));
        } else if (data.type === 'GAME_COMPLETE') {
          setGameState(prev => ({ 
            ...prev, 
            isCompleted: true,
            score: data.score || prev.score,
            timeSpent: data.timeSpent || prev.timeSpent
          }));
          
          // Record the game session
          recordSession({
            userId,
            gameId: game.id,
            score: data.score || gameState.score,
            timeSpent: data.timeSpent || gameState.timeSpent
          });
          
          // Call the onComplete callback if provided
          if (onComplete) {
            onComplete(data.score || gameState.score || 0);
          }
        }
      } catch (err) {
        console.error('Error processing game message:', err);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [game.id, userId, gameState.score, gameState.timeSpent, onComplete, recordSession]);

  // Handle iframe load event
  const handleIframeLoad = () => {
    // Some games might not send a GAME_LOADED message
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 2000);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setError('Failed to load the game. Please try again later.');
    setIsLoading(false);
  };

  // Get the correct URL for the game
  const getGameUrl = () => {
    if (game.gdevelopProjectUrl) {
      return game.gdevelopProjectUrl;
    }
    
    // Fallback URL based on game type and category
    const category = game.category?.toLowerCase().replace(/\s+/g, '-') || '';
    return `/games/${game.type.toLowerCase()}/${category}/index.html`;
  };

  return (
    <div className="gdevelop-game-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="game-wrapper"
      >
        <h2>{game.name}</h2>
        {game.description && <p className="game-description">{game.description}</p>}
        
        {isLoading && (
          <div className="game-loading">
            <p>Loading game...</p>
            {/* Add a loading spinner here if desired */}
          </div>
        )}
        
        {error && (
          <div className="game-error">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        )}
        
        <div className="game-iframe-container" style={{ opacity: isLoading ? 0.3 : 1 }}>
          <iframe
            ref={iframeRef}
            src={getGameUrl()}
            title={game.name}
            width="100%"
            height="600"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
        
        {gameState.isCompleted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="game-complete"
          >
            <h3>Game Complete!</h3>
            {gameState.score !== undefined && <p>Score: {gameState.score}</p>}
            {gameState.timeSpent !== undefined && <p>Time: {Math.round(gameState.timeSpent / 1000)}s</p>}
            <button onClick={() => window.location.reload()}>Play Again</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default GDevelopGame;