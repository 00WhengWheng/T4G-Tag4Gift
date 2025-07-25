import React, { useState } from 'react';
import { Trophy, Medal, Crown, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';

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
  const [timeframe, setTimeframe] = useState&lt;'daily' | 'weekly' | 'monthly' | 'alltime'&gt;('weekly');

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
        return &lt;Crown className=&quot;w-6 h-6 text-yellow-500&quot; /&gt;;
      case 2:
        return &lt;Medal className=&quot;w-6 h-6 text-gray-400&quot; /&gt;;
      case 3:
        return &lt;Medal className=&quot;w-6 h-6 text-amber-600&quot; /&gt;;
      default:
        return &lt;span className=&quot;w-6 h-6 flex items-center justify-center text-gray-500 font-bold&quot;&gt;#{rank}&lt;/span&gt;;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return &lt;TrendingUp className=&quot;w-4 h-4 text-green-500&quot; /&gt;;
      case 'down':
        return &lt;TrendingUp className=&quot;w-4 h-4 text-red-500 rotate-180&quot; /&gt;;
      default:
        return &lt;div className=&quot;w-4 h-4 bg-gray-400 rounded-full&quot; /&gt;;
    }
  };

  return (
    &lt;div className=&quot;space-y-8&quot;&gt;
      {/* Header */}
      &lt;div className=&quot;text-center&quot;&gt;
        &lt;h1 className=&quot;text-4xl font-bold text-gray-900 dark:text-white mb-4&quot;&gt;
          Leaderboard
        &lt;/h1&gt;
        &lt;p className=&quot;text-xl text-gray-600 dark:text-gray-300&quot;&gt;
          See how you rank against other players
        &lt;/p&gt;
      &lt;/div&gt;

      {/* Timeframe Selector */}
      &lt;div className=&quot;flex justify-center&quot;&gt;
        &lt;div className=&quot;flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1&quot;&gt;
          {[&apos;daily&apos;, &apos;weekly&apos;, &apos;monthly&apos;, &apos;alltime&apos;] as const}.map((period) =&gt; (
            &lt;Button
              key={period}
              variant={timeframe === period ? &apos;primary&apos; : &apos;ghost&apos;}
              size=&quot;sm&quot;
              onClick={() =&gt; setTimeframe(period)}
              className=&quot;capitalize&quot;
            &gt;
              {period === &apos;alltime&apos; ? &apos;All Time&apos; : period}
            &lt;/Button&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Top 3 Podium */}
      &lt;div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto&quot;&gt;
        {players.slice(0, 3).map((player, index) =&gt; (
          &lt;Card key={player.id} className={`text-center ${index === 0 ? &apos;md:order-2 transform md:scale-110&apos; : index === 1 ? &apos;md:order-1&apos; : &apos;md:order-3&apos;}`}&gt;
            &lt;CardContent className=&quot;pt-6&quot;&gt;
              &lt;div className=&quot;mb-4&quot;&gt;
                {getRankIcon(player.rank)}
              &lt;/div&gt;
              &lt;Avatar size=&quot;lg&quot; className=&quot;mx-auto mb-4&quot;&gt;
                {player.name.charAt(0)}
              &lt;/Avatar&gt;
              &lt;h3 className=&quot;font-semibold text-lg text-gray-900 dark:text-white mb-2&quot;&gt;
                {player.name}
              &lt;/h3&gt;
              &lt;div className=&quot;text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2&quot;&gt;
                {player.score.toLocaleString()}
              &lt;/div&gt;
              &lt;div className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;
                {player.gamesPlayed} games • {player.winRate}% win rate
              &lt;/div&gt;
            &lt;/CardContent&gt;
          &lt;/Card&gt;
        ))}
      &lt;/div&gt;

      {/* Full Leaderboard */}
      &lt;Card&gt;
        &lt;CardHeader&gt;
          &lt;h2 className=&quot;text-2xl font-bold text-gray-900 dark:text-white&quot;&gt;
            Full Rankings
          &lt;/h2&gt;
        &lt;/CardHeader&gt;
        &lt;CardContent className=&quot;p-0&quot;&gt;
          &lt;div className=&quot;divide-y divide-gray-200 dark:divide-gray-700&quot;&gt;
            {players.map((player) =&gt; (
              &lt;div key={player.id} className=&quot;flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors&quot;&gt;
                &lt;div className=&quot;flex items-center space-x-4&quot;&gt;
                  &lt;div className=&quot;flex items-center justify-center w-8&quot;&gt;
                    {getRankIcon(player.rank)}
                  &lt;/div&gt;
                  &lt;Avatar&gt;
                    {player.name.charAt(0)}
                  &lt;/Avatar&gt;
                  &lt;div&gt;
                    &lt;h3 className=&quot;font-semibold text-gray-900 dark:text-white&quot;&gt;
                      {player.name}
                    &lt;/h3&gt;
                    &lt;p className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;
                      {player.gamesPlayed} games played
                    &lt;/p&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                &lt;div className=&quot;flex items-center space-x-6&quot;&gt;
                  &lt;div className=&quot;text-right&quot;&gt;
                    &lt;div className=&quot;font-bold text-lg text-gray-900 dark:text-white&quot;&gt;
                      {player.score.toLocaleString()}
                    &lt;/div&gt;
                    &lt;div className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;
                      {player.winRate}% win rate
                    &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div className=&quot;flex items-center&quot;&gt;
                    {getTrendIcon(player.trend)}
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/CardContent&gt;
      &lt;/Card&gt;
    &lt;/div&gt;
  );
};

export default LeaderboardPage;