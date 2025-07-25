import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Map, Users, Star, Gift } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: Gamepad2,
    title: 'Play Games',
    description: 'Enjoy a variety of fun and challenging games',
    href: '/games',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Trophy,
    title: 'Compete',
    description: 'Climb the leaderboards and show your skills',
    href: '/leaderboard',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Map,
    title: 'Explore',
    description: 'Discover new locations and challenges',
    href: '/map',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Gift,
    title: 'Win Prizes',
    description: 'Earn amazing gifts and rewards',
    href: '/info',
    color: 'from-pink-500 to-red-500'
  }
];

const games = [
  {
    id: '1',
    name: 'Flappy Bird',
    description: 'Navigate through pipes in this classic arcade game'
  },
  {
    id: '2',
    name: 'Music Rhythm',
    description: 'Hit the beats and create amazing music'
  },
  {
    id: '3',
    name: 'Road Cross',
    description: 'Cross the busy road without getting hit'
  },
  {
    id: '4',
    name: 'Shark Frenzy',
    description: 'Survive the shark-infested waters'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-yellow-100 flex flex-col space-y-12">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Welcome to Tag4Gift
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Play amazing games, compete with friends, and win incredible prizes in our social gaming platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link to="/games">Start Playing</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/info">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What You Can Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.href}>
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-purple-100">Active Players</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-purple-100">Games Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1M+</div>
            <div className="text-purple-100">Prizes Won</div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="w-full py-12 md:py-20">
        <div className="mx-auto px-2 max-w-screen-2xl">
          <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
            <h2 className="font-bebas text-4xl md:text-5xl text-purple-700 tracking-wide">Featured Games</h2>
            <Link
              to="/games"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 text-white font-bebas text-xl shadow hover:from-blue-700 hover:to-yellow-500 hover:via-purple-600 transition-all duration-200 border-2 border-yellow-200"
            >
              View All
            </Link>
          </div>
          <div className="grid min-w-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-[1.04] hover:shadow-yellow-200 transition-transform duration-200 border-2 border-purple-100 relative overflow-hidden"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-30 blur-xl z-0" />
                <h3 className="relative z-10 text-2xl font-bold mb-3 text-blue-700 drop-shadow font-bebas tracking-wide">
                  {game.name}
                </h3>
                <p className="relative z-10 text-base text-gray-600 mb-6 text-center leading-relaxed">
                  {game.description}
                </p>
                <Link
                  to={`/games/${game.id}`}
                  className="relative z-10 mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 text-white font-bebas text-lg hover:from-blue-700 hover:to-yellow-500 hover:via-purple-600 transition-colors shadow border-2 border-yellow-200"
                >
                  Play
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-r from-blue-700 via-purple-600 to-yellow-400 text-white text-center font-bebas text-lg tracking-wide mt-auto">
        &copy; {new Date().getFullYear()} T4G. All rights reserved.
      </footer>
    </div>
  );
}
