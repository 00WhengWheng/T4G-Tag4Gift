import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { trpc } from '../utils/trpc';
import { 
  User, 
  Coins, 
  Trophy, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  TrendingUp,
  Gift,
  Zap
} from 'lucide-react';
import { LoadingSpinner } from '../components/ui/loading';
import { CoinBalance } from '../components/CoinBalance';

export default function Profile() {
  const { user, isAuthenticated, isLoading: authLoading, logout } = useAuth0();

  // Get user profile with coin data
  const { data: userProfile, isLoading: profileLoading, error } = trpc.users.getProfile.useQuery(
    { auth0Id: user?.sub || '' },
    { 
      enabled: !!user?.sub,
      refetchOnWindowFocus: false,
    }
  );

  // Get user dashboard data (includes coin stats)
  const { data: dashboardData, isLoading: dashboardLoading } = trpc.users.getDashboard.useQuery(
    { auth0Id: user?.sub || '' },
    { 
      enabled: !!user?.sub,
      refetchOnWindowFocus: false,
    }
  );

  if (authLoading || profileLoading || dashboardLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>Please log in to view your profile</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Profile Error</CardTitle>
            <CardDescription>Failed to load profile data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{error.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName && !lastName) return 'U';
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-purple-200">Manage your account and track your progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.picture || userProfile?.avatar} alt="Profile" />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {getInitials(userProfile?.firstName, userProfile?.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    {userProfile?.firstName} {userProfile?.lastName}
                  </CardTitle>
                  <CardDescription>@{userProfile?.username}</CardDescription>
                  <Badge variant={userProfile?.status === 'ACTIVE' ? 'default' : 'secondary'} className="mt-1">
                    {userProfile?.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{userProfile?.email}</span>
                  {userProfile?.isEmailVerified && (
                    <Badge variant="outline" className="text-xs">Verified</Badge>
                  )}
                </div>
                
                {userProfile?.phone && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{userProfile.phone}</span>
                    {userProfile.isPhoneVerified && (
                      <Badge variant="outline" className="text-xs">Verified</Badge>
                    )}
                  </div>
                )}

                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Joined {formatDate(userProfile?.createdAt || new Date())}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{userProfile?.timezone} • {userProfile?.language.toUpperCase()}</span>
                </div>

                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Level {userProfile?.level}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{userProfile?.totalPoints} pts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coins & Stats */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="w-5 h-5" />
                <span>Coin Balance & Stats</span>
              </CardTitle>
              <CardDescription>
                Track your earnings and spending across the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              {userProfile?.coinBalance ? (
                <div className="space-y-6">
                  {/* Coin Balance Display */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">
                        {userProfile.coinBalance.tagCoins}
                      </div>
                      <div className="text-sm text-muted-foreground">Tag Coins</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {userProfile.coinBalance.shareCoins}
                      </div>
                      <div className="text-sm text-muted-foreground">Share Coins</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {userProfile.coinBalance.gameCoins}
                      </div>
                      <div className="text-sm text-muted-foreground">Game Coins</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {userProfile.coinBalance.totalCoins}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Coins</div>
                    </div>
                  </div>

                  {/* Challenge Passes */}
                  {userProfile.challengePasses && userProfile.challengePasses.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                        <Gift className="w-5 h-5" />
                        <span>Available Challenge Passes</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {userProfile.challengePasses.map((pass: any, index: number) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                            <Trophy className="w-5 h-5 text-gold" />
                            <div>
                              <p className="font-medium">Challenge Pass #{pass.id}</p>
                              <p className="text-sm text-muted-foreground">
                                Generated {formatDate(pass.generatedAt)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recent Transactions */}
                  {userProfile.coinTransactions && userProfile.coinTransactions.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5" />
                        <span>Recent Activity</span>
                      </h3>
                      <div className="space-y-2">
                        {userProfile.coinTransactions.slice(0, 5).map((transaction: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${
                                transaction.type === 'EARN' ? 'bg-green-500' : 'bg-red-500'
                              }`} />
                              <div>
                                <p className="font-medium">{transaction.coinType} Coins</p>
                                <p className="text-sm text-muted-foreground">
                                  {transaction.description}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-bold ${
                                transaction.type === 'EARN' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {transaction.type === 'EARN' ? '+' : '-'}{transaction.amount}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(transaction.createdAt)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats Summary */}
                  {dashboardData?.coinStats && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Statistics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold">{userProfile._count?.coinTransactions || 0}</div>
                          <div className="text-sm text-muted-foreground">Total Transactions</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">{userProfile._count?.challengePasses || 0}</div>
                          <div className="text-sm text-muted-foreground">Challenge Passes</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">{userProfile.coinBalance.totalCoins}</div>
                          <div className="text-sm text-muted-foreground">Total Earned</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">{userProfile.level}</div>
                          <div className="text-sm text-muted-foreground">Current Level</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Zap className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No coin data available</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" onClick={() => window.location.reload()}>
                Refresh Profile
              </Button>
              <Button 
                variant="destructive" 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
