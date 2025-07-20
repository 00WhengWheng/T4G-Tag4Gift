import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from 'urql';

const GET_PUZZLE_TEMPLATE = `
  query GetPuzzleTemplate($type: String!) {
    gameTemplates(type: $type) {
      id
      name
      structure
    }
  }
`;

interface Puzzle {
  title: string;
  description?: string;
  data: any;
}

export const PuzzleGame: React.FC = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_PUZZLE_TEMPLATE, variables: { type: 'PUZZLE' } });
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (data && data.gameTemplates.length > 0) {
      const structure = JSON.parse(data.gameTemplates[0].structure);
      setPuzzles(structure.puzzles || []);
    }
  }, [data]);

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!puzzles.length) return <div>No puzzles found.</div>;

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <AnimatePresence mode="wait">
        {puzzles[current] && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002' }}
          >
            <h2>{puzzles[current].title}</h2>
            {puzzles[current].description && <p>{puzzles[current].description}</p>}
            {/* Render puzzle data here, e.g. Sudoku grid, Tetris board, etc. */}
            <pre style={{ background: '#f5f5f5', padding: 12, borderRadius: 8 }}>{JSON.stringify(puzzles[current].data, null, 2)}</pre>
            <button
              onClick={handleNext}
              style={{ marginTop: 16, padding: '8px 16px', borderRadius: 8, background: '#2196f3', color: '#fff', border: 'none', cursor: 'pointer' }}
              disabled={current >= puzzles.length - 1}
            >
              Next Puzzle
            </button>
          </motion.div>
        )}
        {!puzzles[current] && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002', textAlign: 'center' }}
          >
            <h2>All Puzzles Complete!</h2>
            <p>Great job!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
