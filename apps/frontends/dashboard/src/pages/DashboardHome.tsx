import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Activity, 
  Users, 
  Gift, 
  Trophy, 
  MapPin, 
  TrendingUp, 
  Plus,
  Eye,
  BarChart3,
  Calendar,
  Tag as TagIcon
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';
import { trpc } from '../utils/trpc';

interface DashboardStats {
  totalUsers: number;
  totalGifts: number;
  activeChallenges: number;
  totalVenues: number;
  recentActivity: number;
  monthlyGrowth: number;
}

export function DashboardHome() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalGifts: 0,
    activeChallenges: 0,
    totalVenues: 0,
    recentActivity: 0,
    monthlyGrowth: 0,
  });

  // Mock data for now - replace with actual tRPC calls when available
  useEffect(() => {
    // Simulate loading stats
    const loadStats = async () => {
      // This would be actual tRPC calls in a real implementation
      setStats({
        totalUsers: 1247,
        totalGifts: 89,
        activeChallenges: 12,
        totalVenues: 8,
        recentActivity: 345,
        monthlyGrowth: 23.5,
      });
    };
    
    loadStats();
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      description: '+12% from last month',
      icon: Users,
      trend: 'up',
      href: '/users',
    },
    {
      title: 'Active Gifts',
      value: stats.totalGifts.toString(),
      description: 'Ready to be claimed',
      icon: Gift,
      trend: 'up',
      href: '/gifts',
    },
    {
      title: 'Live Challenges',
      value: stats.activeChallenges.toString(),
      description: 'Currently running',
      icon: Trophy,
      trend: 'stable',
      href: '/challenges',
    },
    {
      title: 'Venues',
      value: stats.totalVenues.toString(),
      description: 'Locations managed',
      icon: MapPin,
      trend: 'up',
      href: '/map',
    },
  ];

  const quickActions = [
    {
      title: 'Create New Gift',
      description: 'Add a new gift to reward your users',
      icon: Gift,
      href: '/gifts/new',
      color: 'bg-blue-500',
    },
    {
      title: 'Launch Challenge',
      description: 'Create an engaging challenge for users',
      icon: Trophy,
      href: '/challenges/new',
      color: 'bg-green-500',
    },
    {
      title: 'View Analytics',
      description: 'Analyze user engagement and performance',
      icon: BarChart3,
      href: '/analytics',
      color: 'bg-purple-500',
    },
    {
      title: 'Manage Venues',
      description: 'Update venue information and settings',
      icon: MapPin,
      href: '/map',
      color: 'bg-orange-500',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'gift_claimed',
      message: 'User claimed "Free Coffee" gift',
      time: '2 minutes ago',
      icon: Gift,
    },
    {
      id: 2,
      type: 'challenge_completed',
      message: 'Challenge "Quiz Master" completed by 15 users',
      time: '15 minutes ago',
      icon: Trophy,
    },
    {
      id: 3,
      type: 'user_joined',
      message: '3 new users joined the platform',
      time: '1 hour ago',
      icon: Users,
    },
    {
      id: 4,
      type: 'venue_scanned',
      message: 'Tag scanned at "Downtown Coffee Shop"',
      time: '2 hours ago',
      icon: TagIcon,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link to="/analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Link>
          </Button>
          <Button asChild>
            <Link to="/gifts/new">
              <Plus className="h-4 w-4 mr-2" />
              Create Gift
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow cursor-pointer">
            <Link to={stat.href} className="block">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Quick Actions */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your business
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.href}
                className="flex items-center space-x-4 rounded-lg border p-4 hover:bg-accent transition-colors"
              >
                <div className={`rounded-full p-2 ${action.color}`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {action.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest events in your business
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className="rounded-full bg-accent p-1">
                  <activity.icon className="h-3 w-3" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
              <Link to="/activity">
                <Eye className="h-4 w-4 mr-2" />
                View All Activity
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>User Engagement Overview</CardTitle>
            <CardDescription>
              Daily active users and challenge participation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Chart visualization will be here</p>
                <p className="text-xs text-muted-foreground">Integration with charting library needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>
              Key performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Challenge Completion Rate</span>
              <span className="text-sm font-medium">84%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '84%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">User Retention</span>
              <span className="text-sm font-medium">76%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Gift Claim Rate</span>
              <span className="text-sm font-medium">92%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
