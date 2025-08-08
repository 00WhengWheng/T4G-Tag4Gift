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
  Target,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';
import { trpc } from '../utils/trpc';

// TypeScript interface for Challenge (matching our seeded data structure)
interface Challenge {
  id: string;
  name: string;
  description: string | null;
  type: 'GAME_BASED' | 'INDIVIDUAL' | 'TEAM';
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
  } | null;
  game: {
    id: string;
    type: string;
    name?: string;
  } | null;
  tenant?: {
    id: string;
    name: string;
  } | null;
  createdAt: string;
}

export function ChallengesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Fetch challenges using tRPC
  const { 
    data: challengesData, 
    isLoading: challengesLoading, 
    error: challengesError,
    refetch: refetchChallenges 
  } = trpc.challenges.getAll.useQuery({
    limit: 100, // Get all challenges for now
    offset: 0,
  });

  // Fetch challenge statistics using tRPC
  const { 
    data: statsData, 
    isLoading: statsLoading 
  } = trpc.challenges.getStats.useQuery({});

  // Handle loading state
  if (challengesLoading || statsLoading) {
    return (
      <div className="space-y-8">
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
        
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading challenges...</span>
        </div>
      </div>
    );
  }

  // Handle error state
  if (challengesError) {
    return (
      <div className="space-y-8">
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
        
        <div className="flex items-center justify-center h-64 text-red-500">
          <AlertCircle className="h-8 w-8" />
          <span className="ml-2">Failed to load challenges: {challengesError.message}</span>
          <Button variant="outline" className="ml-4" onClick={() => refetchChallenges()}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const challenges = challengesData?.challenges || [];
  const stats = statsData || {
    totalChallenges: 0,
    activeChallenges: 0,
    scheduledChallenges: 0,
    totalParticipants: 0,
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (challenge.description && challenge.description.toLowerCase().includes(searchTerm.toLowerCase()));
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
      case 'GAME_BASED': return 'bg-purple-100 text-purple-800';
      case 'INDIVIDUAL': return 'bg-orange-100 text-orange-800';
      case 'TEAM': return 'bg-green-100 text-green-800';
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
            <div className="text-2xl font-bold">{stats.totalChallenges}</div>
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
            <div className="text-2xl font-bold">{stats.activeChallenges}</div>
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
            <div className="text-2xl font-bold">{stats.totalParticipants}</div>
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
            <div className="text-2xl font-bold">{stats.scheduledChallenges}</div>
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
                <CardDescription>
                  {challenge.description || 'No description available'}
                </CardDescription>
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
                      <span className="text-sm font-medium">
                        {challenge.gift?.name || 'No gift assigned'}
                      </span>
                    </div>
                    {challenge.gift && (
                      <span className="text-sm font-semibold">
                        €{challenge.gift.value}
                      </span>
                    )}
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
