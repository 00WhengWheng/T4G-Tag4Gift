import React, { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    id: string;
    name: string;
    description?: string;
    type: string;
    category?: string;
    difficulty?: string;
    gdevelopProjectUrl?: string;
  };
}

interface GameMessage {
  type: 'GAME_LOADED' | 'GAME_ERROR' | 'GAME_SCORE_UPDATE' | 'GAME_TIME_UPDATE' | 'GAME_COMPLETE';
  message?: string;
  score?: number;
  timeSpent?: number;
}

export function GameModal({ isOpen, onClose, game }: GameModalProps) {
  const { user } = useAuth0();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [gameStatus, setGameStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [score, setScore] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [gameSession, setGameSession] = useState({
    startTime: Date.now(),
    isPlaying: false,
  });

  // Handle messages from the game
  useEffect(() => {
    if (!isOpen) return;

    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security (in production, check against allowed origins)
      // For now, we'll accept messages from any origin since games can be hosted anywhere
      
      try {
        const data: GameMessage = typeof event.data === 'string' 
          ? JSON.parse(event.data) 
          : event.data;

        console.log('🎮 Game message received:', data);

        switch (data.type) {
          case 'GAME_LOADED':
            setGameStatus('loaded');
            setGameSession(prev => ({ ...prev, isPlaying: true }));
            console.log('✅ Game loaded successfully');
            break;

          case 'GAME_ERROR':
            setGameStatus('error');
            console.error('❌ Game error:', data.message);
            break;

          case 'GAME_SCORE_UPDATE':
            if (typeof data.score === 'number') {
              setScore(data.score);
            }
            break;

          case 'GAME_TIME_UPDATE':
            if (typeof data.timeSpent === 'number') {
              setTimeSpent(data.timeSpent);
            }
            break;

          case 'GAME_COMPLETE':
            console.log('🏆 Game completed:', { score: data.score, timeSpent: data.timeSpent });
            // Here you would typically record the game session to the database
            setGameSession(prev => ({ ...prev, isPlaying: false }));
            // TODO: Call tRPC mutation to record game session
            break;
        }
      } catch (error) {
        console.error('Error parsing game message:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen, user]);

  // Send start message to game when it loads
  useEffect(() => {
    if (gameStatus === 'loaded' && iframeRef.current) {
      const startMessage = {
        type: 'START_GAME',
        difficulty: game.difficulty || 'medium',
        userId: user?.sub || 'anonymous'
      };
      
      console.log('🚀 Sending start message to game:', startMessage);
      iframeRef.current.contentWindow?.postMessage(JSON.stringify(startMessage), '*');
    }
  }, [gameStatus, game.difficulty, user]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setGameStatus('loading');
      setScore(0);
      setTimeSpent(0);
      setGameSession({
        startTime: Date.now(),
        isPlaying: false,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    // If game is playing, confirm close
    if (gameSession.isPlaying) {
      if (window.confirm('Are you sure you want to close the game? Your progress will be lost.')) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{game.name}</h2>
            <p className="text-purple-100 text-sm">
              {game.category} • {game.difficulty} • {game.type}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {gameSession.isPlaying && (
              <div className="text-sm">
                <span className="mr-4">Score: {score}</span>
                <span>Time: {Math.floor(timeSpent / 1000)}s</span>
              </div>
            )}
            <button
              onClick={handleClose}
              className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Game Content */}
        <div className="relative h-[70vh]">
          {gameStatus === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading game...</p>
              </div>
            </div>
          )}

          {gameStatus === 'error' && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50">
              <div className="text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-red-800 mb-2">Game Failed to Load</h3>
                <p className="text-red-600 mb-4">There was an error loading this game.</p>
                <button
                  onClick={handleClose}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {game.gdevelopProjectUrl && (
            <iframe
              ref={iframeRef}
              src={game.gdevelopProjectUrl}
              className="w-full h-full border-0"
              title={game.name}
              sandbox="allow-scripts allow-same-origin allow-forms"
              onLoad={() => {
                // Give the game a moment to initialize before checking if it loaded
                setTimeout(() => {
                  if (gameStatus === 'loading') {
                    console.log('🎮 Game iframe loaded, waiting for GAME_LOADED message...');
                    // If we don't receive GAME_LOADED message within 10 seconds, assume it loaded
                    setTimeout(() => {
                      if (gameStatus === 'loading') {
                        console.log('⚠️ No GAME_LOADED message received, assuming game loaded');
                        setGameStatus('loaded');
                      }
                    }, 10000);
                  }
                }, 1000);
              }}
              onError={() => {
                console.error('❌ Game iframe failed to load');
                setGameStatus('error');
              }}
            />
          )}
        </div>

        {/* Footer */}
        {game.description && (
          <div className="p-4 bg-gray-50 border-t">
            <p className="text-sm text-gray-600">{game.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
