import React from 'react';
import QuizGame from './QuizGame';

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
}

  if (game.type === 'QUIZ') {
    // Render quiz game with framer-motion
    return <QuizGame {...game} />;
  }
  // Render GDevelop game in iframe
  return (
    <div>
      <h3>{game.name}</h3>
      <iframe
        src={game.gdevelopProjectUrl}
        title={game.name}
        width="100%"
        height="600"
        style={{ border: 'none' }}
        allow="fullscreen"
      />
      <p>{game.description}</p>
    </div>
  );
}
