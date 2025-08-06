import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from '@tanstack/react-router';

// Types for venue data
interface Venue {
  id: string;
  name: string;
  address?: string;
  tenant?: {
    id: string;
    name: string;
    description?: string;
  };
  tags: Array<{
    id: string;
    type: string;
    latitude: number;
    longitude: number;
  }>;
  gifts: Array<{
    id: string;
    name: string;
    isActive: boolean;
  }>;
  _count: {
    tags: number;
    gifts: number;
    tagScans: number;
  };
  totalScans?: number;
  popularityScore?: number;
}

export default function MapModal() {
  const navigate = useNavigate();
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.warn('Geolocation error:', error);
          // Continue without location
        }
      );
    }
  }, []);

  // Fetch venues from our API
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setIsLoading(true);
        
        // Build query parameters for map bounds (example: centered around user or default location)
        const params = new URLSearchParams();
        
        if (userLocation) {
          // Create bounds around user location (approximately 5km radius)
          const offset = 0.045; // Roughly 5km in lat/lng degrees
          params.append('north', (userLocation.lat + offset).toString());
          params.append('south', (userLocation.lat - offset).toString());
          params.append('east', (userLocation.lng + offset).toString());
          params.append('west', (userLocation.lng - offset).toString());
        }

        const response = await fetch(`http://localhost:3001/api/venues/map?${params.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // TODO: Add auth header when auth is implemented
            // 'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch venues: ${response.statusText}`);
        }

        const venuesData: Venue[] = await response.json();
        setVenues(venuesData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load venues');
        console.error('Error fetching venues:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenues();
  }, [userLocation]);

  const handleClose = () => {
    navigate({ to: '/' });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const calculateDistance = (venue: Venue): string => {
    if (!userLocation || !venue.tags.length) return 'Unknown';
    
    const venueLocation = venue.tags[0]; // Use first tag location
    const R = 6371; // Earth's radius in kilometers
    const dLat = (venueLocation.latitude - userLocation.lat) * Math.PI / 180;
    const dLng = (venueLocation.longitude - userLocation.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(userLocation.lat * Math.PI / 180) * Math.cos(venueLocation.latitude * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="bg-black/90 border-game-primary-600 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-game-primary-300">Venue Map</CardTitle>
            <CardDescription className="text-game-primary-200">
              {userLocation ? 'Find venues around your location' : 'Find venues in your area'}
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-game-primary-600 text-game-primary-300 hover:bg-game-primary-600/20"
            onClick={handleClose}
          >
            ✕
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96 bg-gray-800 relative">
            {/* Map placeholder - will be replaced with OpenLayers */}
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
                {userLocation && (
                  <p className="text-xs text-game-primary-400 mt-1">
                    Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                  </p>
                )}
              </div>
            </div>

            {/* Dynamic venue pins based on real data */}
            {venues.slice(0, 5).map((venue, index) => (
              <div 
                key={venue.id}
                className={`absolute w-4 h-4 rounded-full border-2 border-white cursor-pointer hover:scale-125 transition-transform ${
                  venue._count.tagScans > 20 ? 'bg-green-500' : 
                  venue._count.tagScans > 10 ? 'bg-blue-500' : 
                  'bg-red-500'
                }`}
                style={{
                  top: `${20 + (index * 60)}px`,
                  left: `${20 + (index * 40)}px`,
                }}
                title={`${venue.name} - ${venue._count.tagScans} scans`}
              />
            ))}
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-game-primary-300">
                {isLoading ? 'Loading venues...' : `Found ${venues.length} venues`}
              </h3>
              <Button 
                size="sm" 
                className="bg-game-primary-600 hover:bg-game-primary-500"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Refresh'}
              </Button>
            </div>

            {error && (
              <div className="p-3 bg-red-900/50 border border-red-600 rounded text-red-200">
                <p className="text-sm font-semibold">Error loading venues</p>
                <p className="text-xs mt-1">{error}</p>
                <p className="text-xs mt-2 text-red-300">
                  Make sure the main backend is running on port 3001
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-60 overflow-y-auto">
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="p-3 border border-game-primary-600 rounded animate-pulse">
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3 mb-2"></div>
                    <div className="flex gap-2">
                      <div className="h-5 bg-gray-600 rounded w-16"></div>
                      <div className="h-5 bg-gray-600 rounded w-20"></div>
                    </div>
                  </div>
                ))
              ) : venues.length === 0 ? (
                <div className="col-span-full text-center p-6 text-game-primary-400">
                  <p>No venues found in this area</p>
                  <p className="text-sm mt-1">Try refreshing or check if the backend is running</p>
                </div>
              ) : (
                venues.map((venue) => (
                  <div key={venue.id} className="p-3 border border-game-primary-600 rounded hover:border-game-primary-500 transition-colors">
                    <h4 className="font-semibold text-game-primary-300">{venue.name}</h4>
                    <p className="text-sm text-game-primary-200">{calculateDistance(venue)} away</p>
                    {venue.address && (
                      <p className="text-xs text-game-primary-400 mb-2">{venue.address}</p>
                    )}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className={`px-2 py-1 text-xs rounded ${
                        venue._count.tags > 0 ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        {venue._count.tags > 0 ? 'Active' : 'Inactive'}
                      </span>
                      <span className="px-2 py-1 text-xs bg-blue-600 rounded">
                        {venue._count.gifts} {venue._count.gifts === 1 ? 'Gift' : 'Gifts'}
                      </span>
                      <span className="px-2 py-1 text-xs bg-purple-600 rounded">
                        {venue._count.tagScans} scans
                      </span>
                    </div>
                    {venue.tenant && (
                      <p className="text-xs text-game-primary-400 mt-1">
                        by {venue.tenant.name}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>

            {venues.length > 0 && (
              <div className="pt-2 border-t border-game-primary-600">
                <p className="text-xs text-game-primary-400 text-center">
                  Showing {venues.length} venues • Click on venue pins to see details
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
