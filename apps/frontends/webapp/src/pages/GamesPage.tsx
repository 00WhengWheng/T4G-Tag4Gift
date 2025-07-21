import React, { useState } from 'react';
import { useQuery } from 'urql';

const defaultCover = '/default-cover.png'; // Place this image in public/

const GET_GAMES = `
  query GetGameTemplates {
    gameTemplates {
      id
      name
      description
      category
      url: gdevelopProjectUrl
      type
    }
  }
`;

const categories = ['Quiz', 'Puzzle', 'Reaction', 'Music'];

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalGame, setModalGame] = useState<any>(null);
  const [{ data, fetching, error }] = useQuery({ query: GET_GAMES });

  const games = data?.gameTemplates || [];
  // Only show games for the selected category
  const displayGames = games.filter(
    (g: any) => g.category?.toLowerCase() === selectedCategory.toLowerCase()
  );


  return (
    <div className="games-page max-w-7xl mx-auto px-2 sm:px-6 py-10 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-50 flex flex-col">
      {fetching && <div className="text-center text-gray-500 text-lg my-8">Loading games...</div>}
      {error && <div className="text-center text-red-600 text-lg my-8">Error loading games: {error.message}</div>}
      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-yellow-500 font-bebas drop-shadow-lg">Featured Games</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-7 py-2 rounded-full font-bold min-w-[120px] transition-all duration-200 border-2 text-lg neon-btn shadow-md btn-glow font-bebas tracking-wide
              ${selectedCategory === cat
                ? 'scale-110 ring-2 ring-yellow-300'
                : 'opacity-80 hover:scale-105'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="games-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pb-8 items-stretch">
        {displayGames.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg">No games available in this category yet.</div>
        ) : (
          displayGames.map((game: any, idx: number) => (
            <div
              key={game.id}
              className={
                `game-card card-animated-border card-lift card-glow flex flex-col justify-between p-0 bg-white/90 shadow-xl min-h-[420px] relative overflow-hidden` +
                (idx % 2 === 0 ? ' glass' : '')
              }
              style={{ border: 'none' }}
            >
              {/* Badge */}
              <span style={{
                position: 'absolute',
                top: '0.75rem',
                left: '1rem',
                display: 'inline-block',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '600',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                letterSpacing: '0.05em',
                background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)',
                zIndex: 10
              }}>NEW</span>
              {/* Game Image with shimmer */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '11rem',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                background: '#f3f4f6'
              }}>
                <img
                  src={game.image ? game.image : defaultCover}
                  alt={game.name}
                  style={{ 
                    width: '100%', 
                    height: '11rem', 
                    objectFit: 'cover', 
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                    mixBlendMode: 'multiply' 
                  }}
                />
              </div>
              <div className="flex-1 flex flex-col px-6 py-4">
                <h2 className="text-2xl font-extrabold mb-2 text-blue-700 font-bebas tracking-wide drop-shadow">{game.name}</h2>
                <p className="text-gray-600 mb-2 text-base leading-relaxed">{game.description}</p>
              </div>
              <div className="flex justify-between items-center px-6 pb-5 mt-auto">
                <span className="text-sm text-purple-600 font-semibold uppercase tracking-wider">{game.category}</span>
                <button
                  className="px-6 py-2 rounded-xl neon-btn btn-glow font-bebas text-lg shadow-md hover:scale-105 transition-all duration-150"
                  onClick={() => setModalGame(game)}
                >
                  Play
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for game iframe */}
      {modalGame && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.6)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 2px 24px #0003',
            maxWidth: '900px',
            width: '90vw',
            height: '80vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <button
              onClick={() => setModalGame(null)}
              style={{ position: 'absolute', top: 16, right: 16, background: '#0070f3', color: '#fff', border: 'none', borderRadius: '50%', width: 40, height: 40, fontSize: '1.5rem', cursor: 'pointer', zIndex: 10 }}
              title="Close"
            >
              &times;
            </button>
            <h2 style={{ textAlign: 'center', margin: '2rem 0 1rem 0', fontSize: '2rem', fontWeight: 700 }}>{modalGame.name}</h2>
            {modalGame?.url ? (
              <iframe
                src={modalGame.url}
                title={modalGame.name || 'Game'}
                style={{ flex: 1, width: '100%', border: 'none', borderRadius: '12px', background: '#f5f5f5' }}
                allowFullScreen
              />
            ) : (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e00', fontSize: '1.2em' }}>
                Game URL not available.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesPage;
