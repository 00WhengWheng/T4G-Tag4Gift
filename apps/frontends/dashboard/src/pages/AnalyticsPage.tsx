import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Gift, 
  Trophy, 
  MapPin,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';

interface AnalyticsData {
  userEngagement: {
    dailyActiveUsers: number;
    weeklyActiveUsers: number;
    monthlyActiveUsers: number;
    userRetentionRate: number;
  };
  challengeStats: {
    completionRate: number;
    averageParticipants: number;
    mostPopularType: string;
    totalChallengesCompleted: number;
  };
  giftStats: {
    totalGiftsCreated: number;
    totalGiftsClaimed: number;
    claimRate: number;
    mostPopularGift: string;
  };
  locationStats: {
    totalTagScans: number;
    uniqueLocations: number;
    mostActiveVenue: string;
    scansByHour: number[];
  };
}

export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with actual tRPC query
  const analytics: AnalyticsData = {
    userEngagement: {
      dailyActiveUsers: 1247,
      weeklyActiveUsers: 5623,
      monthlyActiveUsers: 12890,
      userRetentionRate: 76.5,
    },
    challengeStats: {
      completionRate: 84.3,
      averageParticipants: 156,
      mostPopularType: 'QUIZ',
      totalChallengesCompleted: 45,
    },
    giftStats: {
      totalGiftsCreated: 89,
      totalGiftsClaimed: 1456,
      claimRate: 92.1,
      mostPopularGift: 'Free Coffee',
    },
    locationStats: {
      totalTagScans: 8945,
      uniqueLocations: 23,
      mostActiveVenue: 'Downtown Coffee Shop',
      scansByHour: [12, 8, 15, 25, 45, 67, 89, 123, 145, 134, 98, 87, 76, 65, 54, 43, 56, 78, 89, 67, 45, 34, 23, 16],
    },
  };

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const exportData = () => {
    // Implement data export functionality
    console.log('Exporting analytics data...');
  };

  const timeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your business performance and user engagement.
          </p>
        </div>
        <div className="flex space-x-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <Button variant="outline" onClick={refreshData} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" onClick={exportData}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.userEngagement.dailyActiveUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↗ +12%</span> from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Challenge Completion</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.challengeStats.completionRate}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↗ +2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gift Claim Rate</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.giftStats.claimRate}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↗ +5.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tag Scans</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.locationStats.totalTagScans.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↗ +8.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* User Engagement Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>User Engagement Trends</CardTitle>
            <CardDescription>
              Daily active users over the selected time period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">User engagement chart</p>
                <p className="text-xs text-muted-foreground">Chart library integration needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>
              Best performing challenges and gifts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Most Popular Challenge Type</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">{analytics.challengeStats.mostPopularType}</span>
                <span className="text-sm font-medium">
                  {analytics.challengeStats.averageParticipants} avg participants
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Most Popular Gift</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">{analytics.giftStats.mostPopularGift}</span>
                <span className="text-sm font-medium">{analytics.giftStats.claimRate}% claim rate</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Most Active Venue</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">{analytics.locationStats.mostActiveVenue}</span>
                <span className="text-sm font-medium">
                  {Math.round(analytics.locationStats.totalTagScans / analytics.locationStats.uniqueLocations)} scans
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">User Retention Rate</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">30-day retention</span>
                <span className="text-sm font-medium">{analytics.userEngagement.userRetentionRate}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mt-1">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${analytics.userEngagement.userRetentionRate}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Challenge Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Challenge Analytics
            </CardTitle>
            <CardDescription>
              Performance metrics for challenges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Completed</span>
              <span className="text-sm font-medium">
                {analytics.challengeStats.totalChallengesCompleted}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Completion Rate</span>
              <span className="text-sm font-medium">
                {analytics.challengeStats.completionRate}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Avg Participants</span>
              <span className="text-sm font-medium">
                {analytics.challengeStats.averageParticipants}
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${analytics.challengeStats.completionRate}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Gift Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="h-5 w-5 mr-2" />
              Gift Analytics
            </CardTitle>
            <CardDescription>
              Gift creation and claim statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Created</span>
              <span className="text-sm font-medium">
                {analytics.giftStats.totalGiftsCreated}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Claimed</span>
              <span className="text-sm font-medium">
                {analytics.giftStats.totalGiftsClaimed}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Claim Rate</span>
              <span className="text-sm font-medium">
                {analytics.giftStats.claimRate}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${analytics.giftStats.claimRate}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Location Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Location Analytics
            </CardTitle>
            <CardDescription>
              Tag scan and venue statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Scans</span>
              <span className="text-sm font-medium">
                {analytics.locationStats.totalTagScans.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Unique Locations</span>
              <span className="text-sm font-medium">
                {analytics.locationStats.uniqueLocations}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Avg Scans/Location</span>
              <span className="text-sm font-medium">
                {Math.round(analytics.locationStats.totalTagScans / analytics.locationStats.uniqueLocations)}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Peak activity: 2:00 PM - 4:00 PM
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Heatmap</CardTitle>
          <CardDescription>
            Tag scan activity by hour of day (last 30 days)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-24 gap-1">
            {analytics.locationStats.scansByHour.map((scans, hour) => {
              const intensity = Math.min(scans / Math.max(...analytics.locationStats.scansByHour), 1);
              return (
                <div
                  key={hour}
                  className="h-8 rounded flex items-center justify-center text-xs font-medium"
                  style={{
                    backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                    color: intensity > 0.5 ? 'white' : 'black',
                  }}
                  title={`${hour}:00 - ${scans} scans`}
                >
                  {hour}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>11 PM</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
