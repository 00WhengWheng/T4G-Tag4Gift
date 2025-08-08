
import React from 'react';
import { trpc } from '../utils/trpc';


interface AnalyticsData {
  giftStats: {
    totalGiftsCreated: number;
    totalGiftsClaimed: number;
    claimRate: number;
    mostPopularGift: string;
  };
  shareStats: {
    totalShares: number;
    mostPopularPlatform: string;
    topUser: string;
  };
}

interface Gift {
  id: string;
  name: string;
  status: string;
  value?: string;
}

interface Share {
  id: string;
  platform: string;
  user: string;
  createdAt: string;
}


const BUSINESS_ID = 'demo-business-id'; // TODO: Replace with actual businessId from context/auth

export const AnalyticsPage: React.FC = () => {
  const { data, isLoading, error, refetch } = trpc.analytics.getDashboardStats.useQuery({
    businessId: BUSINESS_ID,
    timeRange: 'month',
  });

  if (isLoading) return <div className="text-center py-8">Loading analytics...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error.message}</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <button className="px-4 py-2 border rounded-md mr-2 bg-white dark:bg-gray-900" onClick={() => refetch()}>
          Refresh
        </button>
        <button className="px-4 py-2 border rounded-md bg-white dark:bg-gray-900" onClick={() => {}}>
          Export
        </button>
      </div>

      {/* Key Metrics */}
      {data && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-xl p-4 bg-white dark:bg-gray-900 shadow">
            <div className="font-bold text-lg mb-1">Total Users</div>
            <div className="text-xs mb-2">Users registered</div>
            <div className="text-2xl font-bold">{data.totalUsers}</div>
          </div>
          <div className="border rounded-xl p-4 bg-white dark:bg-gray-900 shadow">
            <div className="font-bold text-lg mb-1">Total Gifts</div>
            <div className="text-xs mb-2">Gifts created</div>
            <div className="text-2xl font-bold">{data.totalGifts}</div>
            <div className="text-xs text-muted-foreground">Gift claim rate: {data.userEngagement?.giftClaimRate ?? '-'}%</div>
          </div>
          <div className="border rounded-xl p-4 bg-white dark:bg-gray-900 shadow">
            <div className="font-bold text-lg mb-1">Active Challenges</div>
            <div className="text-xs mb-2">Challenges running</div>
            <div className="text-2xl font-bold">{data.activeChallenges}</div>
            <div className="text-xs text-muted-foreground">Challenge completion rate: {data.userEngagement?.challengeCompletionRate ?? '-'}%</div>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {data?.recentActivities && (
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.recentActivities.slice(0, 6).map((activity: any) => (
              <div key={activity.id} className="rounded-xl shadow border bg-white dark:bg-gray-900 p-4">
                <div className="font-bold text-lg">{activity.message}</div>
                <div className="text-xs mb-2">Type: {activity.type}</div>
                <div className="text-sm">{new Date(activity.timestamp).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
