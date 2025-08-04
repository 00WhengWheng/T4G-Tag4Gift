import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-game-primary-500 to-game-secondary-500 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-game-primary-300">Player Profile</h1>
        <p className="text-game-primary-200">Level 12 Gaming Champion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Coin Balances</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-game-primary-200">Scan Coins</span>
              <Badge variant="secondary">1,250</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-game-primary-200">Share Coins</span>
              <Badge variant="secondary">850</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-game-primary-200">Game Coins</span>
              <Badge variant="secondary">2,100</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-game-primary-200">Challenge Wins</span>
              <Badge variant="outline">47</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-game-primary-200">Tournament Victories</span>
              <Badge variant="outline">12</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-game-primary-200">Venues Tagged</span>
              <Badge variant="outline">89</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="text-game-primary-200">Tagged Pizza Palace</div>
            <div className="text-game-primary-200">Won "Speed Challenge"</div>
            <div className="text-game-primary-200">Shared Café Luna post</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-gradient-to-r from-game-primary-600 to-game-secondary-600">
          Edit Profile
        </Button>
        <Button variant="outline" className="flex-1 border-game-primary-600 text-game-primary-300">
          View Leaderboard
        </Button>
      </div>
    </div>
  );
}
