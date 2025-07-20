import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from 'urql';

const GET_QUIZ_TEMPLATE = `
  query GetQuizTemplate($type: String!) {
    gameTemplates(type: $type) {
      id
      name
      structure
    }
  }
`;

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const QuizGame: React.FC = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_QUIZ_TEMPLATE, variables: { type: 'QUIZ' } });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (data && data.gameTemplates.length > 0) {
      const structure = JSON.parse(data.gameTemplates[0].structure);
      setQuestions(structure.questions || []);
    }
  }, [data]);

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!questions.length) return <div>No quiz found.</div>;

  const handleOptionClick = (idx: number) => {
    setSelected(idx);
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setSelected(null);
      setCurrent((prev) => prev + 1);
    }, 1200);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <AnimatePresence mode="wait">
        {questions[current] && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002' }}
          >
            <h2>{questions[current].question}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {questions[current].options.map((opt, idx) => (
                <li key={idx} style={{ margin: '8px 0' }}>
                  <button
                    onClick={() => handleOptionClick(idx)}
                    disabled={showAnswer}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 8,
                      background: selected === idx
                        ? idx === questions[current].correctAnswer
                          ? '#4caf50'
                          : '#f44336'
                        : '#eee',
                      color: selected === idx ? '#fff' : '#333',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
            {showAnswer && (
              <div style={{ marginTop: 16 }}>
                {selected === questions[current].correctAnswer
                  ? 'Correct!'
                  : `Wrong! Correct answer: ${questions[current].options[questions[current].correctAnswer]}`}
              </div>
            )}
          </motion.div>
        )}
        {!questions[current] && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002', textAlign: 'center' }}
          >
            <h2>Quiz Complete!</h2>
            <p>Your score: {questions.filter((q, i) => q.correctAnswer === selected).length} / {questions.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
