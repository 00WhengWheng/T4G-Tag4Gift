import { 
  Activity, 
  Users, 
  Gift, 
  Trophy, 
  TrendingUp,
  BarChart3,
  Plus,
  MapPin,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Badge, Button } from '@t4g/ui-web';
import { Link } from '@tanstack/react-router';

export function DashboardHome() {
  const stats = [
    {
      name: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'increase' as const,
      icon: Users,
      href: '/users'
    },
    {
      name: 'Active Gifts',
      value: '156',
      change: '+23%',
      changeType: 'increase' as const,
      icon: Gift,
      href: '/gifts'
    },
    {
      name: 'Challenges',
      value: '34',
      change: '+5%',
      changeType: 'increase' as const,
      icon: Trophy,
      href: '/challenges'
    },
    {
      name: 'Revenue',
      value: '$12,847',
      change: '+18%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      href: '/analytics'
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'gift_claimed',
      user: 'John Doe',
      gift: 'Coffee Voucher',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'challenge_completed',
      user: 'Sarah Smith',
      challenge: 'Weekly Scanner',
      time: '5 minutes ago',
    },
    {
      id: 3,
      type: 'new_user',
      user: 'Mike Johnson',
      time: '10 minutes ago',
    },
    {
      id: 4,
      type: 'venue_added',
      user: 'Business Admin',
      venue: 'Downtown Cafe',
      time: '1 hour ago',
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
      href: '/venues',
      color: 'bg-orange-500',
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
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="hover:shadow-md transition-shadow cursor-pointer">
              <Link to={stat.href} className="block">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.name}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest user interactions and system events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{activity.user}</span>
                    {activity.type === 'gift_claimed' && (
                      <Badge variant="secondary">Gift Claimed</Badge>
                    )}
                    {activity.type === 'challenge_completed' && (
                      <Badge variant="secondary">Challenge</Badge>
                    )}
                    {activity.type === 'new_user' && (
                      <Badge variant="secondary">New User</Badge>
                    )}
                    {activity.type === 'venue_added' && (
                      <Badge variant="secondary">Venue Added</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.type === 'gift_claimed' && `Claimed ${activity.gift}`}
                    {activity.type === 'challenge_completed' && `Completed ${activity.challenge}`}
                    {activity.type === 'new_user' && 'Joined the platform'}
                    {activity.type === 'venue_added' && `Added ${activity.venue}`}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
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
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
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

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>
              Key performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Gift Redemption Rate</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Challenge Completion</span>
                <span className="font-medium">64%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>User Engagement</span>
                <span className="font-medium">82%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Venues</CardTitle>
            <CardDescription>
              Your connected locations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 border-b pb-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Downtown Coffee Shop</p>
                <p className="text-xs text-muted-foreground">123 Main Street</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">47 scans</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b pb-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">City Mall Food Court</p>
                <p className="text-xs text-muted-foreground">456 Shopping Blvd</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">23 scans</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Park Side Restaurant</p>
                <p className="text-xs text-muted-foreground">789 Park Avenue</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">15 scans</p>
              </div>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/venues">
                <MapPin className="h-4 w-4 mr-2" />
                View All Venues
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>
              Important numbers at a glance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm">New Users Today</span>
              </div>
              <span className="text-lg font-bold">12</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gift className="h-4 w-4 text-green-500" />
                <span className="text-sm">Gifts Claimed Today</span>
              </div>
              <span className="text-lg font-bold">8</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Active Challenges</span>
              </div>
              <span className="text-lg font-bold">5</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Venue Scans Today</span>
              </div>
              <span className="text-lg font-bold">34</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
