
import React, { useState } from 'react';

const defaultCover = '/default-cover.png'; // Place this image in public/

// Production games data (replace with backend/API fetch as needed)
const games = [
  {
    id: 'quiz-game',
    name: 'Quiz Master',
    description: 'Test your knowledge with fun quizzes! (React-based)',
    category: 'Quiz',
    url: '/games/quiz', // This should route to your React quiz game
    image: '/games/quiz/cover.png',
  },
  {
    id: 'puzzle-parking-jam',
    name: 'Parking Jam',
    description: 'Get the cars out of the jam! (GDevelop)',
    category: 'Puzzle',
    url: '/games/puzzle/parking-jam/index.html',
    image: '/games/puzzle/parking-jam/cover.png',
  },
  {
    id: 'reaction-flappy-plane',
    name: 'Flappy Plane',
    description: 'Fly the plane through obstacles. Press space or click to jump! (GDevelop)',
    category: 'Reaction',
    url: '/games/reaction/flappy-plane/index.html',
    image: '/games/reaction/flappy-plane/cover.png',
  },
  {
    id: 'music-jukebox',
    name: 'Music Jukebox',
    description: 'Play along with the beat and test your musical skills! (GDevelop)',
    category: 'Music',
    url: '/games/music/jukebox/index.html',
    image: '/games/music/jukebox/cover.png',
  },
  // Add more real games here for each category
];

const categories = ['Quiz', 'Puzzle', 'Reaction', 'Music'];

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalGame, setModalGame] = useState<null | typeof games[0]>(null);
  const filteredGames = games.filter(g => g.category === selectedCategory);

  return (
    <div className="games-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.02em' }}>Games</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: '20px',
              border: selectedCategory === cat ? '2px solid #0070f3' : '1px solid #ccc',
              background: selectedCategory === cat ? '#0070f3' : '#fff',
              color: selectedCategory === cat ? '#fff' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: selectedCategory === cat ? '0 2px 8px #0070f322' : 'none',
              transition: 'all 0.2s',
              minWidth: '120px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="games-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        paddingBottom: '2rem',
        alignItems: 'stretch',
      }}>
        {filteredGames.length === 0 ? (
          <div style={{ color: '#888', fontSize: '1.2em', margin: '2rem auto', gridColumn: '1/-1', textAlign: 'center' }}>No games available in this category yet.</div>
        ) : (
          filteredGames.map(game => (
            <div key={game.id} className="game-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #eee',
              borderRadius: '16px',
              padding: '1.5rem',
              background: '#fff',
              boxShadow: '0 2px 12px #0001',
              minHeight: '420px',
              transition: 'box-shadow 0.2s',
            }}>
              <img
                src={game.image}
                alt={game.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem', background: '#f5f5f5' }}
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = defaultCover; }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 600 }}>{game.name}</h2>
                <p style={{ color: '#555', marginBottom: '0.5rem', fontSize: '1.05em' }}>{game.description}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.95em', color: '#888', fontWeight: 500 }}>{game.category}</span>
                <button
                  className="play-btn"
                  style={{ padding: '0.7rem 2rem', background: '#0070f3', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1em', boxShadow: '0 2px 8px #0070f322', transition: 'background 0.2s', cursor: 'pointer' }}
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
            <iframe
              src={modalGame.url}
              title={modalGame.name}
              style={{ flex: 1, width: '100%', border: 'none', borderRadius: '12px', background: '#f5f5f5' }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesPage;
