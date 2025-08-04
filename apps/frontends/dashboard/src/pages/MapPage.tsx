import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Users,
  Activity,
  Search,
  Filter,
  Navigation,
  Building,
  Tag as TagIcon
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';

interface Venue {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  tagCount: number;
  activeUsers: number;
  totalScans: number;
  tags: Array<{
    id: string;
    name: string;
    identifier: string;
    scanCount: number;
    lastScannedAt: string | null;
  }>;
}

interface UserActivity {
  userId: string;
  userName: string;
  latitude: number;
  longitude: number;
  activity: string;
  timestamp: string;
}

export function MapPage() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserActivity, setShowUserActivity] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng: -0.09 });

  // Mock data - replace with actual tRPC queries
  const venues: Venue[] = [
    {
      id: '1',
      name: 'Downtown Coffee Shop',
      address: '123 Main Street, City Center',
      latitude: 51.505,
      longitude: -0.09,
      tagCount: 3,
      activeUsers: 45,
      totalScans: 1234,
      tags: [
        { id: 't1', name: 'Entrance Tag', identifier: 'DCF_001', scanCount: 567, lastScannedAt: '2024-01-30T10:30:00Z' },
        { id: 't2', name: 'Counter Tag', identifier: 'DCF_002', scanCount: 445, lastScannedAt: '2024-01-30T09:45:00Z' },
        { id: 't3', name: 'Outdoor Seating', identifier: 'DCF_003', scanCount: 222, lastScannedAt: '2024-01-30T11:15:00Z' },
      ],
    },
    {
      id: '2',
      name: 'Fashion Store',
      address: '456 Shopping Avenue, Mall District',
      latitude: 51.51,
      longitude: -0.1,
      tagCount: 5,
      activeUsers: 23,
      totalScans: 789,
      tags: [
        { id: 't4', name: 'Store Entrance', identifier: 'FS_001', scanCount: 234, lastScannedAt: '2024-01-30T14:20:00Z' },
        { id: 't5', name: 'Changing Room', identifier: 'FS_002', scanCount: 189, lastScannedAt: '2024-01-30T13:45:00Z' },
      ],
    },
    {
      id: '3',
      name: 'City Park Pavilion',
      address: 'Central Park, Recreation Area',
      latitude: 51.515,
      longitude: -0.095,
      tagCount: 2,
      activeUsers: 67,
      totalScans: 2156,
      tags: [
        { id: 't6', name: 'Pavilion Entry', identifier: 'CPP_001', scanCount: 1200, lastScannedAt: '2024-01-30T16:30:00Z' },
        { id: 't7', name: 'Playground Area', identifier: 'CPP_002', scanCount: 956, lastScannedAt: '2024-01-30T15:45:00Z' },
      ],
    },
  ];

  const userActivities: UserActivity[] = [
    { userId: '1', userName: 'John D.', latitude: 51.507, longitude: -0.088, activity: 'Scanned tag', timestamp: '2024-01-30T16:45:00Z' },
    { userId: '2', userName: 'Sarah M.', latitude: 51.513, longitude: -0.092, activity: 'Completed challenge', timestamp: '2024-01-30T16:30:00Z' },
    { userId: '3', userName: 'Mike R.', latitude: 51.509, longitude: -0.098, activity: 'Claimed gift', timestamp: '2024-01-30T16:15:00Z' },
  ];

  const filteredVenues = venues.filter(venue => 
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalStats = venues.reduce((acc, venue) => ({
    totalVenues: acc.totalVenues + 1,
    totalTags: acc.totalTags + venue.tagCount,
    totalScans: acc.totalScans + venue.totalScans,
    totalActiveUsers: acc.totalActiveUsers + venue.activeUsers,
  }), { totalVenues: 0, totalTags: 0, totalScans: 0, totalActiveUsers: 0 });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interactive Map</h1>
          <p className="text-muted-foreground">
            Manage venues, monitor user activity, and track tag performance across all locations.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant={showUserActivity ? "default" : "outline"}
            onClick={() => setShowUserActivity(!showUserActivity)}
          >
            <Activity className="h-4 w-4 mr-2" />
            {showUserActivity ? 'Hide' : 'Show'} User Activity
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Venue
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Venues</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalVenues}</div>
            <p className="text-xs text-muted-foreground">
              Active locations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tags</CardTitle>
            <TagIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalTags}</div>
            <p className="text-xs text-muted-foreground">
              Deployed across venues
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalScans.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              All-time tag scans
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalActiveUsers}</div>
            <p className="text-xs text-muted-foreground">
              Currently at venues
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Venue List */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Venues
            </CardTitle>
            <CardDescription>
              Manage your business locations
            </CardDescription>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search venues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-2 max-h-96 overflow-y-auto">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedVenue?.id === venue.id 
                    ? 'bg-primary/10 border-primary' 
                    : 'hover:bg-accent'
                }`}
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{venue.name}</h4>
                    <p className="text-xs text-muted-foreground">{venue.address}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <TagIcon className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{venue.tagCount} tags</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{venue.activeUsers} active</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Activity className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{venue.totalScans} scans</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" size="sm">
                      <Navigation className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Interactive Map
              {selectedVenue && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  - {selectedVenue.name}
                </span>
              )}
            </CardTitle>
            <CardDescription>
              {showUserActivity 
                ? 'Real-time user activity and venue locations' 
                : 'Venue locations and tag placement'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center relative overflow-hidden">
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-6 h-full">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Map Content */}
              <div className="relative z-10 text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Interactive Map View</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Map integration (Leaflet/MapBox) would be implemented here
                </p>
                
                {/* Mock Venue Markers */}
                <div className="absolute inset-0">
                  {filteredVenues.map((venue, index) => (
                    <div
                      key={venue.id}
                      className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer ${
                        selectedVenue?.id === venue.id 
                          ? 'bg-red-500 ring-2 ring-red-300' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                      style={{
                        left: `${20 + index * 30}%`,
                        top: `${30 + index * 15}%`,
                      }}
                      onClick={() => setSelectedVenue(venue)}
                      title={venue.name}
                    >
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-1 rounded shadow-lg ${
                        selectedVenue?.id === venue.id 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-800'
                      }`}>
                        {venue.name}
                      </div>
                    </div>
                  ))}
                  
                  {/* Mock User Activity Markers */}
                  {showUserActivity && userActivities.map((activity, index) => (
                    <div
                      key={`${activity.userId}-${index}`}
                      className="absolute w-3 h-3 rounded-full bg-green-400 border border-white shadow-sm animate-pulse"
                      style={{
                        left: `${40 + index * 20}%`,
                        top: `${40 + index * 10}%`,
                      }}
                      title={`${activity.userName} - ${activity.activity}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Venue Details */}
      {selectedVenue && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                {selectedVenue.name}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Venue
                </Button>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Tag
                </Button>
              </div>
            </CardTitle>
            <CardDescription>{selectedVenue.address}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-3">Venue Statistics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Tags</span>
                    <span className="font-medium">{selectedVenue.tagCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <span className="font-medium">{selectedVenue.activeUsers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Scans</span>
                    <span className="font-medium">{selectedVenue.totalScans.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium text-xs">
                      {selectedVenue.latitude.toFixed(4)}, {selectedVenue.longitude.toFixed(4)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Tags at this Venue</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedVenue.tags.map((tag) => (
                    <div key={tag.id} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="text-sm font-medium">{tag.name}</p>
                        <p className="text-xs text-muted-foreground">{tag.identifier}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{tag.scanCount} scans</p>
                        <p className="text-xs text-muted-foreground">
                          {tag.lastScannedAt 
                            ? `Last: ${new Date(tag.lastScannedAt).toLocaleDateString()}`
                            : 'Never scanned'
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* User Activity Panel */}
      {showUserActivity && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Real-time User Activity
            </CardTitle>
            <CardDescription>
              Recent user interactions across all venues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userActivities.map((activity, index) => (
                <div key={`${activity.userId}-${index}`} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{activity.userName}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">
                      Location: {activity.latitude.toFixed(4)}, {activity.longitude.toFixed(4)}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
