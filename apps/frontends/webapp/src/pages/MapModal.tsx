import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function MapModal() {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="bg-black/90 border-game-primary-600 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-game-primary-300">Venue Map</CardTitle>
            <CardDescription className="text-game-primary-200">
              Find venues around you
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="border-game-primary-600 text-game-primary-300">
            ✕
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96 bg-gray-800 relative">
            {/* Mock map interface */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-game-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-game-primary-300">Interactive map will load here</p>
                <p className="text-sm text-game-primary-200 mt-2">
                  OpenLayers integration for venue locations
                </p>
              </div>
            </div>

            {/* Mock venue pins */}
            <div className="absolute top-16 left-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
            <div className="absolute top-32 right-24 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-24 left-32 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-game-primary-300">Nearby Venues</h3>
              <Button size="sm" className="bg-game-primary-600 hover:bg-game-primary-500">
                Refresh
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-game-primary-600 rounded">
                <h4 className="font-semibold text-game-primary-300">Pizza Palace</h4>
                <p className="text-sm text-game-primary-200">0.2 km away</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 text-xs bg-green-600 rounded">Active</span>
                  <span className="px-2 py-1 text-xs bg-blue-600 rounded">3 Challenges</span>
                </div>
              </div>
              
              <div className="p-3 border border-game-primary-600 rounded">
                <h4 className="font-semibold text-game-primary-300">Café Luna</h4>
                <p className="text-sm text-game-primary-200">0.5 km away</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 text-xs bg-green-600 rounded">Active</span>
                  <span className="px-2 py-1 text-xs bg-blue-600 rounded">1 Challenge</span>
                </div>
              </div>
              
              <div className="p-3 border border-game-primary-600 rounded">
                <h4 className="font-semibold text-game-primary-300">Game Zone</h4>
                <p className="text-sm text-game-primary-200">0.8 km away</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 text-xs bg-yellow-600 rounded">Opening Soon</span>
                  <span className="px-2 py-1 text-xs bg-blue-600 rounded">2 Challenges</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
