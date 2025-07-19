import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GameDisplay from './GameDisplay';

const GET_GAME_TEMPLATES = gql`
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

type GameTemplate = {
  id: string;
  name: string;
  type: string;
  category?: string;
  description?: string;
  gdevelopProjectUrl?: string;
  structure: string;
};

export default function GamesList() {
  const { data, loading, error } = useQuery(GET_GAME_TEMPLATES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading games</div>;

  return (
    <div>
      {data.gameTemplates.map((game: GameTemplate) => (
        <GameDisplay key={game.id} game={game} />
      ))}
    </div>
  );
}
