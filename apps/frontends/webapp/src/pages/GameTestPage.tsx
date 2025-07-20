import React from 'react';
import GDevelopGame from '../components/GDevelopGame';

const GameTestPage: React.FC = () => {
  // Mock game data for testing
  const testGame = {
    id: 'test-flappy-bird',
    name: 'Flappy Bird',
    type: 'REACTION',
    category: 'arcade',
    description: 'A simple Flappy Bird clone. Press space or click to jump!',
    gdevelopProjectUrl: '/games/reaction/flappy-bird/index.html'
  };

  const handleGameComplete = (score: number) => {
    console.log(`Game completed with score: ${score}`);
  };

  return (
    <div className="game-test-page">
      <h1>GDevelop Game Test</h1>
      <p>This page tests the integration of GDevelop games with the T4G platform.</p>
      
      <div className="game-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <GDevelopGame 
          game={testGame}
          userId="test-user-123"
          onComplete={handleGameComplete}
        />
      </div>
    </div>
  );
};

export default GameTestPage;