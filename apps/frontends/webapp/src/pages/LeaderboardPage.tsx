import React, { useState } from 'react';
import { Trophy, Medal, Crown, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar } from '../components/ui/avatar';

interface Player {
  id: string;
  name: string;
  score: number;
  rank: number;
  avatar?: string;
  gamesPlayed: number;
  winRate: number;
  trend: 'up' | 'down' | 'same';
}

const LeaderboardPage: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('weekly');

  const players: Player[] = [
    {
      id: '1',
      name: 'GameMaster2024',
      score: 15420,
      rank: 1,
      gamesPlayed: 156,
      winRate: 87,
      trend: 'up'
    },
    {
      id: '2',
      name: 'PuzzleQueen',
      score: 14890,
      rank: 2,
      gamesPlayed: 142,
      winRate: 82,
      trend: 'up'
    },
    {
      id: '3',
      name: 'SpeedRunner',
      score: 14320,
      rank: 3,
      gamesPlayed: 198,
      winRate: 75,
      trend: 'same'
    },
    {
      id: '4',
      name: 'ArcadeKing',
      score: 13950,
      rank: 4,
      gamesPlayed: 134,
      winRate: 79,
      trend: 'down'
    },
    {
      id: '5',
      name: 'MusicMaestro',
      score: 13680,
      rank: 5,
      gamesPlayed: 167,
      winRate: 71,
      trend: 'up'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Leaderboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          See how you rank against other players
        </p>
      </div>

      {/* Timeframe Selector */}
      <div className="flex justify-center">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {['daily', 'weekly', 'monthly', 'alltime'].map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setTimeframe(period as 'daily' | 'weekly' | 'monthly' | 'alltime')}
              className="capitalize"
            >
              {period === 'alltime' ? 'All Time' : period}
            </Button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {players.slice(0, 3).map((player, index) => (
          <Card key={player.id} className={`text-center ${index === 0 ? 'md:order-2 transform md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
            <CardContent className="pt-6">
              <div className="mb-4">
                {getRankIcon(player.rank)}
              </div>
              <Avatar size="lg" className="mx-auto mb-4">
                {player.name.charAt(0)}
              </Avatar>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {player.name}
              </h3>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {player.score.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {player.gamesPlayed} games • {player.winRate}% win rate
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Full Rankings
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {players.map((player) => (
              <div key={player.id} className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(player.rank)}
                  </div>
                  <Avatar>
                    {player.name.charAt(0)}
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {player.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {player.gamesPlayed} games played
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {player.score.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {player.winRate}% win rate
                    </div>
                  </div>
                  <div className="flex items-center">
                    {getTrendIcon(player.trend)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;