import React from 'react';
import { trpc } from '../utils/trpc';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Coins, Trophy, Calendar, Mail, User, Edit, Settings } from 'lucide-react';

const Profile: React.FC = () => {
  const { data: profile, isLoading, error } = trpc.users.getProfile.useQuery();
  const { data: achievements } = trpc.users.getAchievements.useQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <User className="h-5 w-5" />
              Error Loading Profile
            </CardTitle>
            <CardDescription>We couldn't load your profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
            <Button onClick={() => window.location.reload()} className="w-full">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Profile Not Found</CardTitle>
            <CardDescription>Please log in to view your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getInitials = (firstName?: string, lastName?: string, displayName?: string, email?: string) => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    if (displayName) {
      const names = displayName.split(' ');
      return names.length > 1 
        ? `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase()
        : names[0].substring(0, 2).toUpperCase();
    }
    if (email) {
      return email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };

  const totalCoins = profile.scan_coins + profile.share_coins + profile.game_coins;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
          <AvatarImage 
            src={profile.profile_picture_url || undefined} 
            alt={profile.display_name || profile.username || 'Profile'} 
          />
          <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            {getInitials(profile.first_name, profile.last_name, profile.display_name, profile.email)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            {profile.display_name || profile.username || 'Welcome'}
          </h1>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Member since {new Date(profile.created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Coins className="h-5 w-5 text-amber-500" />
            <span className="text-xl font-semibold">{totalCoins.toLocaleString()}</span>
            <span className="text-muted-foreground">Total Coins</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="coins">Coins</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Coin Summary */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-amber-500" />
                  Coin Portfolio
                </CardTitle>
                <CardDescription>Your coin balance across all activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{profile.scan_coins}</div>
                    <div className="text-xs text-muted-foreground">Scan Coins</div>
                    <div className="w-full bg-blue-100 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${totalCoins > 0 ? (profile.scan_coins / totalCoins) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{profile.share_coins}</div>
                    <div className="text-xs text-muted-foreground">Share Coins</div>
                    <div className="w-full bg-green-100 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${totalCoins > 0 ? (profile.share_coins / totalCoins) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{profile.game_coins}</div>
                    <div className="text-xs text-muted-foreground">Game Coins</div>
                    <div className="w-full bg-purple-100 rounded-full h-2 mt-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${totalCoins > 0 ? (profile.game_coins / totalCoins) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Balance</span>
                  <Badge variant="default" className="text-lg px-4 py-2">
                    {totalCoins.toLocaleString()} coins
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  Achievements
                </CardTitle>
                <CardDescription>Your accomplishments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Challenge Wins</span>
                  <Badge variant="outline">{achievements?.challengeWins || 0}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tournament Victories</span>
                  <Badge variant="outline">{achievements?.tournamentWins || 0}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Venues Tagged</span>
                  <Badge variant="outline">{achievements?.venuesTagged || 0}</Badge>
                </div>
                <Separator />
                <Button variant="outline" className="w-full" size="sm">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on Tag4Gift</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    📱
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Tagged Pizza Palace</p>
                    <p className="text-sm text-muted-foreground">Earned 10 scan coins • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    📢
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Shared Café Luna on Instagram</p>
                    <p className="text-sm text-muted-foreground">Earned 5 share coins • 1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    🎮
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Completed "Speed Challenge"</p>
                    <p className="text-sm text-muted-foreground">Earned 15 game coins • 2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Coins Tab */}
        <TabsContent value="coins" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    📱
                  </div>
                  Scan Coins
                </CardTitle>
                <CardDescription>Earned by scanning QR/NFC codes at venues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-700 mb-4">
                  {profile.scan_coins.toLocaleString()}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This week:</span>
                    <span className="font-medium">+25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This month:</span>
                    <span className="font-medium">+{Math.floor(profile.scan_coins * 0.3)}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Find Venues to Scan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    📢
                  </div>
                  Share Coins
                </CardTitle>
                <CardDescription>Earned by sharing venues on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-700 mb-4">
                  {profile.share_coins.toLocaleString()}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This week:</span>
                    <span className="font-medium">+15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This month:</span>
                    <span className="font-medium">+{Math.floor(profile.share_coins * 0.4)}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Share a Venue
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-purple-700 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    🎮
                  </div>
                  Game Coins
                </CardTitle>
                <CardDescription>Earned by playing games and challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-purple-700 mb-4">
                  {profile.game_coins.toLocaleString()}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This week:</span>
                    <span className="font-medium">+45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This month:</span>
                    <span className="font-medium">+{Math.floor(profile.game_coins * 0.2)}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  Play Games
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Coin Usage Tips</CardTitle>
              <CardDescription>Maximize your coin earning potential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">💡 Pro Tip: Daily Scanning</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit different venues daily to maximize your scan coin earnings. Each venue can be scanned once per day.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">📱 Social Sharing Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Share your venue visits with creative posts and hashtags to earn bonus share coins and engage your followers.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Challenge Participation</h4>
                  <p className="text-sm text-muted-foreground">
                    Join daily challenges and tournaments to earn game coins faster. Higher difficulty = better rewards!
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">🏆 Winning Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Combine all three activities for maximum coin generation. Use coins wisely in premium challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  Competition Achievements
                </CardTitle>
                <CardDescription>Your competitive accomplishments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      🥇
                    </div>
                    <div>
                      <p className="font-medium">Challenge Champion</p>
                      <p className="text-sm text-muted-foreground">{achievements?.challengeWins || 0} challenge wins</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{achievements?.challengeWins || 0}</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      🏆
                    </div>
                    <div>
                      <p className="font-medium">Tournament Victor</p>
                      <p className="text-sm text-muted-foreground">{achievements?.tournamentWins || 0} tournament victories</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{achievements?.tournamentWins || 0}</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="font-medium">Venue Explorer</p>
                      <p className="text-sm text-muted-foreground">{achievements?.venuesTagged || 0} venues tagged</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{achievements?.venuesTagged || 0}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Progress</CardTitle>
                <CardDescription>Work towards your next milestone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Venue Master</span>
                    <span className="text-sm text-muted-foreground">{achievements?.venuesTagged || 0}/50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(((achievements?.venuesTagged || 0) / 50) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Tag 50 different venues</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Challenge Dominator</span>
                    <span className="text-sm text-muted-foreground">{achievements?.challengeWins || 0}/25</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(((achievements?.challengeWins || 0) / 25) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Win 25 challenges</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Coin Collector</span>
                    <span className="text-sm text-muted-foreground">{totalCoins}/1000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((totalCoins / 1000) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Collect 1,000 total coins</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Personal Info Tab */}
        <TabsContent value="personal" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>Your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <p className="text-base">{profile.first_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <p className="text-base">{profile.last_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Display Name</label>
                    <p className="text-base">{profile.display_name || 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Username</label>
                    <p className="text-base">{profile.username || 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                    <p className="text-base">{profile.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Date of Birth
                    </label>
                    <p className="text-base">
                      {profile.date_of_birth 
                        ? new Date(profile.date_of_birth).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : 'Not provided'
                      }
                    </p>
                  </div>
                </div>
                <Separator />
                <Button className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Personal Information
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>System and security details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Account ID</label>
                  <code className="text-xs bg-muted px-2 py-1 rounded block mt-1 font-mono">
                    {profile.auth0_id}
                  </code>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Account Created</label>
                  <p className="text-base">
                    {new Date(profile.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                  <p className="text-base">
                    {new Date(profile.updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button variant="outline" className="w-full">
                    Privacy Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
