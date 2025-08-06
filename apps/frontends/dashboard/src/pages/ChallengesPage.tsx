import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Plus, 
  Search, 
  Trophy, 
  Users, 
  Calendar,
  Gift,
  Play,
  Pause,
  Eye,
  Edit,
  Trash2,
  Clock,
  Target
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';

interface Challenge {
  id: string;
  name: string;
  description: string;
  type: 'QUIZ' | 'PUZZLE' | 'SCAVENGER_HUNT' | 'SOCIAL' | 'LOCATION_BASED';
  status: 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'CANCELLED';
  startDate: string;
  endDate: string;
  winnerCount: number;
  totalParticipants: number;
  gift: {
    id: string;
    name: string;
    value: number;
    currency: string;
  };
  game: {
    id: string;
    type: string;
    name?: string;
  };
  createdAt: string;
}

export function ChallengesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock data - replace with actual tRPC query
  const challenges: Challenge[] = [
    {
      id: '1',
      name: 'Morning Quiz Challenge',
      description: 'Test your knowledge with our daily morning quiz',
      type: 'QUIZ',
      status: 'ACTIVE',
      startDate: '2024-01-20T08:00:00Z',
      endDate: '2024-01-27T18:00:00Z',
      winnerCount: 5,
      totalParticipants: 127,
      gift: {
        id: 'g1',
        name: 'Free Coffee',
        value: 5.99,
        currency: 'EUR',
      },
      game: {
        id: 'game1',
        type: 'QUIZ',
        name: 'General Knowledge Quiz',
      },
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      name: 'Weekend Photo Contest',
      description: 'Share your best weekend moments',
      type: 'SOCIAL',
      status: 'SCHEDULED',
      startDate: '2024-02-03T00:00:00Z',
      endDate: '2024-02-04T23:59:59Z',
      winnerCount: 3,
      totalParticipants: 0,
      gift: {
        id: 'g2',
        name: 'Digital Wallpaper Pack',
        value: 9.99,
        currency: 'EUR',
      },
      game: {
        id: 'game2',
        type: 'SOCIAL',
      },
      createdAt: '2024-01-25T14:30:00Z',
    },
    {
      id: '3',
      name: 'City Explorer',
      description: 'Find and scan hidden QR codes around the city',
      type: 'SCAVENGER_HUNT',
      status: 'COMPLETED',
      startDate: '2024-01-01T00:00:00Z',
      endDate: '2024-01-14T23:59:59Z',
      winnerCount: 10,
      totalParticipants: 89,
      gift: {
        id: 'g3',
        name: '20% Discount',
        value: 20,
        currency: 'EUR',
      },
      game: {
        id: 'game3',
        type: 'LOCATION_BASED',
      },
      createdAt: '2023-12-25T09:15:00Z',
    },
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || challenge.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: Challenge['status']) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-100 text-green-800';
      case 'SCHEDULED': return 'bg-blue-100 text-blue-800';
      case 'PAUSED': return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED': return 'bg-gray-100 text-gray-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: Challenge['type']) => {
    switch (type) {
      case 'QUIZ': return 'bg-purple-100 text-purple-800';
      case 'PUZZLE': return 'bg-orange-100 text-orange-800';
      case 'SCAVENGER_HUNT': return 'bg-green-100 text-green-800';
      case 'SOCIAL': return 'bg-pink-100 text-pink-800';
      case 'LOCATION_BASED': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isActive = (challenge: Challenge) => {
    const now = new Date();
    const start = new Date(challenge.startDate);
    const end = new Date(challenge.endDate);
    return now >= start && now <= end && challenge.status === 'ACTIVE';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Challenge Management</h1>
          <p className="text-muted-foreground">
            Create and manage engaging challenges with gifts for your users.
          </p>
        </div>
        <Button asChild>
          <Link to="/create-challenge">
            <Plus className="h-4 w-4 mr-2" />
            Create Challenge
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Challenges</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{challenges.length}</div>
            <p className="text-xs text-muted-foreground">
              All time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {challenges.filter(c => c.status === 'ACTIVE').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently running
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {challenges.reduce((sum, c) => sum + c.totalParticipants, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all challenges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {challenges.filter(c => c.status === 'SCHEDULED').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Upcoming challenges
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search challenges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background"
        >
          <option value="all">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="SCHEDULED">Scheduled</option>
          <option value="PAUSED">Paused</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      {/* Challenges Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredChallenges.map((challenge) => {
          const daysRemaining = getDaysRemaining(challenge.endDate);
          return (
            <Card key={challenge.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(challenge.type)}`}>
                      {challenge.type.replace('_', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(challenge.status)}`}>
                      {challenge.status}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/challenges/${challenge.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/challenges/${challenge.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{challenge.name}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(challenge.startDate)} - {formatDate(challenge.endDate)}</span>
                  </div>
                </div>

                {challenge.status === 'ACTIVE' && daysRemaining > 0 && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-orange-600 font-medium">
                      {daysRemaining === 1 ? '1 day' : `${daysRemaining} days`} remaining
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{challenge.totalParticipants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>{challenge.winnerCount} winners</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gift className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{challenge.gift.name}</span>
                    </div>
                    <span className="text-sm font-semibold">
                      €{challenge.gift.value}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  {challenge.status === 'ACTIVE' && (
                    <Button variant="outline" size="sm">
                      <Pause className="h-4 w-4 mr-1" />
                      Pause
                    </Button>
                  )}
                  {challenge.status === 'PAUSED' && (
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Resume
                    </Button>
                  )}
                  {challenge.status === 'SCHEDULED' && (
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Start Early
                    </Button>
                  )}
                  {challenge.status === 'COMPLETED' && (
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/analytics/challenges/${challenge.id}`}>
                        View Results
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <Link to={`/challenges/${challenge.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No challenges found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria.' 
              : 'Get started by creating your first challenge.'}
          </p>
          <Button asChild>
            <Link to="/challenges/new">Create Your First Challenge</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
