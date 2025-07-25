import React, { useState } from 'react';
import { MapPin, Navigation, Star, Gift, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  type: 'game' | 'event' | 'prize' | 'community';
  status: 'available' | 'locked' | 'completed';
  players: number;
  rewards?: string[];
}

const MapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: '1',
      name: 'Arcade Central',
      description: 'The heart of classic gaming',
      coordinates: { x: 30, y: 40 },
      type: 'game',
      status: 'available',
      players: 156,
      rewards: ['Arcade Master Badge', '500 Points']
    },
    {
      id: '2',
      name: 'Music Valley',
      description: 'Where melodies come alive',
      coordinates: { x: 60, y: 25 },
      type: 'game',
      status: 'available',
      players: 89,
      rewards: ['Music Note Badge', '300 Points']
    },
    {
      id: '3',
      name: 'Puzzle Peak',
      description: 'Challenge your mind',
      coordinates: { x: 75, y: 60 },
      type: 'game',
      status: 'locked',
      players: 0,
      rewards: ['Puzzle Solver Badge', '750 Points']
    },
    {
      id: '4',
      name: 'Community Hub',
      description: 'Meet other players',
      coordinates: { x: 45, y: 70 },
      type: 'community',
      status: 'available',
      players: 234
    },
    {
      id: '5',
      name: 'Prize Plaza',
      description: 'Claim your rewards',
      coordinates: { x: 20, y: 80 },
      type: 'prize',
      status: 'available',
      players: 67,
      rewards: ['Daily Gift', 'Bonus Points']
    }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'game':
        return <MapPin className="w-6 h-6" />;
      case 'event':
        return <Star className="w-6 h-6" />;
      case 'prize':
        return <Gift className="w-6 h-6" />;
      case 'community':
        return <Users className="w-6 h-6" />;
      default:
        return <MapPin className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
      case 'locked':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
      case 'completed':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Game World Map
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore different areas and discover new challenges
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Interactive Map
              </h2>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg h-96 overflow-hidden">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                      location.status === 'available'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : location.status === 'locked'
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                    }}
                    disabled={location.status === 'locked'}
                  >
                    {getLocationIcon(location.type)}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Location Details
              </h2>
            </CardHeader>
            <CardContent>
              {selectedLocation ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${getStatusColor(selectedLocation.status)}`}>
                      {getLocationIcon(selectedLocation.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {selectedLocation.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(selectedLocation.status)}`}>
                        {selectedLocation.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedLocation.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{selectedLocation.players} players online</span>
                  </div>
                  
                  {selectedLocation.rewards && (
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Rewards:</h4>
                      <ul className="space-y-1">
                        {selectedLocation.rewards.map((reward, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <Gift className="w-3 h-3 mr-2" />
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    disabled={selectedLocation.status === 'locked'}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {selectedLocation.status === 'locked' ? 'Locked' : 'Visit Location'}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Click on a location on the map to see details
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Location List */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Locations
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {locations.map((location) => (
              <div
                key={location.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${getStatusColor(location.status)}`}>
                      {getLocationIcon(location.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {location.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(location.status)}`}>
                      {location.status}
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {location.players} players
                    </div>
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

export default MapPage;