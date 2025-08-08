import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from './ui/card';
import { Button } from './ui/button';
import { useParams } from '@tanstack/react-router';

interface QuizQuestion {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface GameTemplateProps {
  // Optionally pass props if needed
}

const GameTemplate: React.FC<GameTemplateProps> = () => {
  const { gameId } = useParams({ from: '/game/$gameId' });
  const [gameType, setGameType] = useState<'QUIZ' | 'GDEVELOP' | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch game type and data from backend
    const fetchGameData = async () => {
      setIsLoading(true);
      try {
        // Example: fetch game metadata
        const res = await fetch(`/api/games/${gameId}`);
        const data = await res.json();
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
  }, [gameId]);

  // Quiz template rendering
  const renderQuiz = () => {
    if (isLoading) return <div>Loading quiz...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!quizQuestions.length) return <div>No questions found.</div>;
    const question = quizQuestions[currentQuestion];
    return (
      <Card className="max-w-xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Quiz Challenge</CardTitle>
          <CardDescription className="mb-4">{question.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {question.answers.map((ans, idx) => (
              <Button
                key={idx}
                variant={selectedAnswer === ans ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setSelectedAnswer(ans)}
                disabled={showResult}
              >
                {ans}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {!showResult ? (
            <Button
              className="w-full mt-4"
              variant="default"
              onClick={() => setShowResult(true)}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </Button>
          ) : (
            <div className="w-full text-center mt-4">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-600 font-bold">Correct!</span>
              ) : (
                <span className="text-red-600 font-bold">Incorrect. Correct answer: {question.correctAnswer}</span>
              )}
              <Button
                className="w-full mt-4"
                variant="outline"
                onClick={() => {
                  setShowResult(false);
                  setSelectedAnswer(null);
                  setCurrentQuestion((prev) => Math.min(prev + 1, quizQuestions.length - 1));
                }}
                disabled={currentQuestion === quizQuestions.length - 1}
              >
                Next Question
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    );
  };

  // GDevelop template rendering
  const [gameMeta, setGameMeta] = useState<any>(null);
  useEffect(() => {
    if (gameType === 'GDEVELOP') {
      // Fetch game metadata for UI
      fetch(`/api/games/${gameId}`)
        .then(res => res.json())
        .then(data => setGameMeta(data))
        .catch(() => setGameMeta(null));
    }
  }, [gameType, gameId]);

  const renderGDevelop = () => {
    if (isLoading) return <div>Loading game...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!gameMeta) return <div>Game not found.</div>;
    const gdevelopUrl = gameMeta.gdevelopProjectUrl ? `/games/${gameMeta.gdevelopProjectUrl}/index.html` : `/games/${gameId}/index.html`;
    return (
      <div className="max-w-3xl mx-auto mt-8">
        <Card className="rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 backdrop-blur-lg flex flex-col h-full overflow-hidden group-hover:shadow-2xl transition-all duration-300">
          <CardHeader className="p-0">
            <div className={`aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
              {gameMeta.coverImage && (
                <img 
                  src={gameMeta.coverImage} 
                  alt={gameMeta.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 text-center text-white">
                <div className="text-6xl mb-2 drop-shadow-lg">🎮</div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs rounded bg-blue-600 text-white">{gameMeta.difficulty || 'Medium'}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {gameMeta.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
              {gameMeta.description}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">{gameMeta.category}</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                GDeveloper
              </span>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button 
              className="w-full rounded-xl font-bold text-lg flex items-center justify-center gap-3"
              variant="default"
              onClick={() => {
                window.open(gdevelopUrl, `game_${gameMeta.slug || gameId}`, 'width=1024,height=768,scrollbars=no,resizable=yes,menubar=no,toolbar=no,location=no,status=no');
              }}
            >
              Play Now
            </Button>
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
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      {gameType === 'QUIZ' ? renderQuiz() : gameType === 'GDEVELOP' ? renderGDevelop() : <div>Loading...</div>}
    </div>
  );
};

export default GameTemplate;
