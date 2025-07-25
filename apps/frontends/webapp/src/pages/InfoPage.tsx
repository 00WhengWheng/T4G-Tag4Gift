import React from 'react';
import { Gift, Trophy, Users, Gamepad2, Star, Heart, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const InfoPage: React.FC = () => {
  const features = [
    {
      icon: Gamepad2,
      title: 'Diverse Games',
      description: 'Play arcade, puzzle, music, and reaction games with friends and family.'
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in daily, weekly, and monthly tournaments to win amazing prizes.'
    },
    {
      icon: Gift,
      title: 'Real Rewards',
      description: 'Earn points and redeem them for real-world gifts and exclusive items.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join communities of like-minded players and make new friends.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your data and privacy are protected with enterprise-grade security.'
    },
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Enjoy smooth gameplay with our optimized gaming platform.'
    }
  ];

  const stats = [
    { label: 'Active Players', value: '50K+', icon: Users },
    { label: 'Games Available', value: '100+', icon: Gamepad2 },
    { label: 'Prizes Awarded', value: '$10K+', icon: Gift },
    { label: 'User Rating', value: '4.9★', icon: Star }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to <span className="text-purple-600 dark:text-purple-400">Tag4Gift</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience the ultimate social gaming platform where fun meets rewards. 
          Play games, compete with friends, and win real prizes!
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="px-8">
            <Gamepad2 className="w-5 h-5 mr-2" />
            Start Playing
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Learn More
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Tag4Gift?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover what makes our platform special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get started in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Sign Up
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create your account and join our gaming community
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Play Games
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose from our collection of fun and engaging games
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Win Rewards
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Earn points and redeem them for amazing prizes
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardContent className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Gaming Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of players and start winning prizes today!
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            <Gift className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoPage;