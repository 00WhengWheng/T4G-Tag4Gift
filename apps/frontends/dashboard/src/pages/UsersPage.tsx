import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  UserCheck, 
  UserX, 
  Trophy, 
  Gift, 
  Activity,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Star,
  Eye,
  MoreHorizontal,
  Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';
import { Avatar, AvatarFallback, AvatarImage } from '@t4g/ui-web';

interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'USER' | 'ADMIN' | 'MODERATOR';
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  totalPoints: number;
  level: number;
  joinedAt: string;
  lastActiveAt: string;
  challengesCompleted: number;
  giftsReceived: number;
  tagScans: number;
  location?: {
    city: string;
    country: string;
  };
}

export function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('lastActive');

  // Mock data - replace with actual tRPC query
  const users: User[] = [
    {
      id: '1',
      email: 'john.doe@example.com',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      role: 'USER',
      status: 'ACTIVE',
      totalPoints: 2450,
      level: 5,
      joinedAt: '2024-01-15T10:00:00Z',
      lastActiveAt: '2024-01-30T16:45:00Z',
      challengesCompleted: 12,
      giftsReceived: 8,
      tagScans: 156,
      location: { city: 'London', country: 'UK' },
    },
    {
      id: '2',
      email: 'sarah.miller@example.com',
      username: 'sarahm',
      firstName: 'Sarah',
      lastName: 'Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=32&h=32&fit=crop&crop=face',
      role: 'USER',
      status: 'ACTIVE',
      totalPoints: 3890,
      level: 7,
      joinedAt: '2023-12-20T14:30:00Z',
      lastActiveAt: '2024-01-30T15:30:00Z',
      challengesCompleted: 18,
      giftsReceived: 15,
      tagScans: 234,
      location: { city: 'Manchester', country: 'UK' },
    },
    {
      id: '3',
      email: 'mike.rodriguez@example.com',
      username: 'mikerod',
      firstName: 'Mike',
      lastName: 'Rodriguez',
      role: 'USER',
      status: 'INACTIVE',
      totalPoints: 1205,
      level: 3,
      joinedAt: '2024-01-25T09:15:00Z',
      lastActiveAt: '2024-01-28T12:20:00Z',
      challengesCompleted: 6,
      giftsReceived: 4,
      tagScans: 67,
      location: { city: 'Birmingham', country: 'UK' },
    },
    {
      id: '4',
      email: 'emma.wilson@example.com',
      username: 'emmaw',
      firstName: 'Emma',
      lastName: 'Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      role: 'USER',
      status: 'ACTIVE',
      totalPoints: 5670,
      level: 9,
      joinedAt: '2023-11-10T11:45:00Z',
      lastActiveAt: '2024-01-30T17:10:00Z',
      challengesCompleted: 25,
      giftsReceived: 22,
      tagScans: 445,
      location: { city: 'Edinburgh', country: 'UK' },
    },
    {
      id: '5',
      email: 'alex.thompson@example.com',
      username: 'alexthompson',
      firstName: 'Alex',
      lastName: 'Thompson',
      role: 'MODERATOR',
      status: 'ACTIVE',
      totalPoints: 8920,
      level: 12,
      joinedAt: '2023-10-05T08:00:00Z',
      lastActiveAt: '2024-01-30T16:55:00Z',
      challengesCompleted: 35,
      giftsReceived: 28,
      tagScans: 678,
      location: { city: 'Glasgow', country: 'UK' },
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      case 'points':
        return b.totalPoints - a.totalPoints;
      case 'level':
        return b.level - a.level;
      case 'joinDate':
        return new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime();
      case 'lastActive':
      default:
        return new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime();
    }
  });

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-100 text-green-800';
      case 'INACTIVE': return 'bg-yellow-100 text-yellow-800';
      case 'SUSPENDED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'ADMIN': return 'bg-purple-100 text-purple-800';
      case 'MODERATOR': return 'bg-blue-100 text-blue-800';
      case 'USER': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return formatDate(dateString);
  };

  const totalStats = users.reduce((acc, user) => ({
    totalUsers: acc.totalUsers + 1,
    activeUsers: acc.activeUsers + (user.status === 'ACTIVE' ? 1 : 0),
    totalPoints: acc.totalPoints + user.totalPoints,
    totalChallengesCompleted: acc.totalChallengesCompleted + user.challengesCompleted,
  }), { totalUsers: 0, activeUsers: 0, totalPoints: 0, totalChallengesCompleted: 0 });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Monitor user activity, engagement levels, and manage user accounts.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Users
          </Button>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Send Notification
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              All registered users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((totalStats.activeUsers / totalStats.totalUsers) * 100)}% of total users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalPoints.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Across all users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Challenges Completed</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalChallengesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              Total completions
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
            placeholder="Search users by name, username, or email..."
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
          <option value="INACTIVE">Inactive</option>
          <option value="SUSPENDED">Suspended</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background"
        >
          <option value="lastActive">Last Active</option>
          <option value="name">Name</option>
          <option value="points">Points</option>
          <option value="level">Level</option>
          <option value="joinDate">Join Date</option>
        </select>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({sortedUsers.length})</CardTitle>
          <CardDescription>
            Manage and monitor your user base
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedUsers.map((user) => (
              <div key={user.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                  <AvatarFallback>
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-sm">{user.firstName} {user.lastName}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Joined {formatDate(user.joinedAt)}</span>
                    </div>
                    {user.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {user.location.city}, {user.location.country}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{user.totalPoints.toLocaleString()}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Level {user.level}</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Trophy className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{user.challengesCompleted}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Challenges</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Gift className="h-4 w-4 text-green-500" />
                      <span className="font-medium">{user.giftsReceived}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Gifts</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Activity className="h-4 w-4 text-purple-500" />
                      <span className="font-medium">{user.tagScans}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Scans</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    {getTimeAgo(user.lastActiveAt)}
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No users found</h3>
              <p className="text-muted-foreground">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'No users have registered yet.'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
