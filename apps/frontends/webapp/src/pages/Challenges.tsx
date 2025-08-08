
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from '../components/ui/card';
import { Button } from '../components/ui/button';

interface Challenge {
  id: string;
  name: string;
  description?: string;
  type: string;
  status: string;
  startDate?: string;
  endDate?: string;
  winnerCount?: number;
  totalParticipants?: number;
}

const ChallengesPage: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/business/challenges');
        const data = await res.json();
        setChallenges(data.challenges || []);
      } catch (err) {
        setError('Failed to load challenges');
      } finally {
        setIsLoading(false);
      }
    };
    fetchChallenges();
  }, []);

  if (isLoading) return <div className="text-center py-8">Loading challenges...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Active Challenges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {challenges.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No challenges found.</div>
        ) : (
          challenges.map(challenge => (
            <Card key={challenge.id} className="rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 flex flex-col h-full overflow-hidden transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 transition-colors"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-4xl mb-2 drop-shadow-lg">🏆</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs rounded bg-purple-600 text-white">{challenge.type}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-6">
                <CardTitle>{challenge.name}</CardTitle>
                <CardDescription className="mb-2">{challenge.description}</CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>Status: {challenge.status}</span>
                  {challenge.totalParticipants && <span>Participants: {challenge.totalParticipants}</span>}
                </div>
                {challenge.startDate && challenge.endDate && (
                  <div className="text-xs text-blue-500 mt-2">{new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}</div>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full rounded-xl font-bold text-lg" variant="default" disabled={challenge.status !== 'ACTIVE'}>
                  {challenge.status === 'ACTIVE' ? 'Join Challenge' : 'Unavailable'}
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;