import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface VenueHomeProps {
  venueId: string;
}

export default function VenueHome({ venueId }: VenueHomeProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-game-primary-300">Pizza Palace</h1>
        <p className="text-game-primary-200">Venue ID: {venueId}</p>
        <Badge className="mt-2 bg-green-600">Active</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Venue Info</CardTitle>
            <CardDescription className="text-game-primary-200">
              Your favorite local spot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-game-primary-200">Location</p>
              <p className="text-game-primary-300">123 Main Street, Downtown</p>
            </div>
            <div>
              <p className="text-sm text-game-primary-200">Hours</p>
              <p className="text-game-primary-300">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-game-primary-200">Tags Today</p>
              <Badge variant="secondary">47</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Active Challenges</CardTitle>
            <CardDescription className="text-game-primary-200">
              Win real prizes from this venue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 border border-game-primary-600 rounded">
              <h4 className="font-semibold text-game-primary-300">Free Pizza Friday</h4>
              <p className="text-sm text-game-primary-200">Win a large pizza!</p>
              <Badge className="mt-1 bg-game-accent-600">Entry: 500 coins</Badge>
            </div>
            <div className="p-3 border border-game-primary-600 rounded">
              <h4 className="font-semibold text-game-primary-300">Social Share Bonus</h4>
              <p className="text-sm text-game-primary-200">10% discount coupon</p>
              <Badge className="mt-1 bg-game-accent-600">Entry: 200 coins</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-gradient-to-r from-game-primary-600 to-game-secondary-600">
          Tag This Venue (+50 coins)
        </Button>
        <Button variant="outline" className="flex-1 border-game-primary-600 text-game-primary-300">
          Share on Social
        </Button>
        <Button variant="outline" className="border-game-accent-600 text-game-accent-300">
          View on Map
        </Button>
      </div>
    </div>
  );
}
