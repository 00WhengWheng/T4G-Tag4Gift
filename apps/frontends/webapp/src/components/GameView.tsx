import React, { useEffect, useState } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';

type QuizQuestion = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};

interface GameViewProps {
  isOpen: boolean;
  onClose: () => void;
  gameId: string;
}

const GameView: React.FC<GameViewProps> = ({ isOpen, onClose, gameId }) => {
  const [gameType, setGameType] = useState<'QUIZ' | 'GDEVELOP' | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameMeta, setGameMeta] = useState<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setIsLoading(true);
    setError(null);
    setGameMeta(null);
    setQuizQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    // Fetch game type and data from backend
    const fetchGameData = async () => {
      try {
        const res = await fetch(`/api/games/${gameId}`);
        const data = await res.json();
        setGameMeta(data);
        setGameType(data.type === 'QUIZ' ? 'QUIZ' : 'GDEVELOP');
        if (data.type === 'QUIZ') {
          // Fetch quiz questions
          const qRes = await fetch(`/api/games/${gameId}/questions`);
          const qData = await qRes.json();
          setQuizQuestions(qData.questions || []);
        }
      } catch (err) {
        setError('Failed to load game data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchGameData();
  }, [isOpen, gameId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Quiz modal rendering
  const renderQuizModal = () => {
    if (isLoading) return <div className="text-center py-8 text-white">Loading quiz...</div>;
    if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
    if (!quizQuestions.length) return <div className="text-center py-8 text-white">No questions found.</div>;
    const question = quizQuestions[currentQuestion];
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Quiz Challenge</h2>
          <p className="text-lg text-gray-200 mb-6">{question.question}</p>
          <div className="space-y-2 mb-6">
            {question.answers.map((ans, idx) => (
              <button
                key={idx}
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors ${selectedAnswer === ans ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-purple-700 hover:text-white'}`}
                onClick={() => setSelectedAnswer(ans)}
                disabled={showResult}
              >
                {ans}
              </button>
            ))}
          </div>
          {!showResult ? (
            <button
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg mt-4 disabled:bg-gray-600"
              onClick={() => setShowResult(true)}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </button>
          ) : (
            <div className="w-full text-center mt-4">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-400 font-bold">Correct!</span>
              ) : (
                <span className="text-red-400 font-bold">Incorrect. Correct answer: {question.correctAnswer}</span>
              )}
              <button
                className="w-full py-3 rounded-lg bg-gray-700 text-white font-bold text-lg mt-4 disabled:bg-gray-600"
                onClick={() => {
                  setShowResult(false);
                  setSelectedAnswer(null);
                  setCurrentQuestion((prev) => Math.min(prev + 1, quizQuestions.length - 1));
                }}
                disabled={currentQuestion === quizQuestions.length - 1}
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // GDevelop modal rendering
  const renderGDevelopModal = () => {
    if (isLoading) return <div className="text-center py-8 text-white">Loading game...</div>;
    if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
    if (!gameMeta) return <div className="text-center py-8 text-white">Game not found.</div>;
    const gdevelopUrl = gameMeta.gdevelopProjectUrl ? `/games/${gameMeta.gdevelopProjectUrl}/index.html` : `/games/${gameId}/index.html`;
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-3xl">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center relative overflow-hidden mb-6">
            {gameMeta.coverImage && (
              <img
                src={gameMeta.coverImage}
                alt={gameMeta.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            )}
            <div className="absolute inset-0 bg-black/20 transition-colors"></div>
            <div className="relative z-10 text-center text-white">
              <div className="text-6xl mb-2 drop-shadow-lg">🎮</div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs rounded bg-blue-600 text-white">{gameMeta.difficulty || 'Medium'}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{gameMeta.name}</h3>
          <p className="text-gray-300 mb-4 flex-1 line-clamp-3">{gameMeta.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span className="font-medium">{gameMeta.category}</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded">GDeveloper</span>
          </div>
          <div className="mt-6">
            <iframe
              src={gdevelopUrl}
              title="GDevelop Game"
              width="100%"
              height="600px"
              className="rounded-lg border"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 transition-all duration-300 w-full max-w-5xl h-[90vh]`}>
        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-white" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        {/* Modal Content */}
        {gameType === 'QUIZ' ? renderQuizModal() : renderGDevelopModal()}
      </div>
    </div>
  );
};

export default GameView;
