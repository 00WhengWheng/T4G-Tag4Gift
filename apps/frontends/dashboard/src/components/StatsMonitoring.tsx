import { useQuery } from 'urql';
import { TENANT_STATS_QUERY } from '../graphql/tenantStats';

export function StatsMonitoring() {
  const tenantId = '1'; // Replace with dynamic value if needed
  const [{ data, fetching, error }] = useQuery({
    query: TENANT_STATS_QUERY,
    variables: { tenantId },
  });

  if (fetching) return <div className="p-8">Loading stats...</div>;
  if (error) return <div className="p-8 text-red-500">Error loading stats</div>;
  const tenant = data?.tenant;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Stats Monitoring</h2>
      {tenant && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-100 rounded-lg p-6 shadow">
            <div className="text-lg font-semibold">Total Users</div>
            <div className="text-3xl font-bold">{tenant.totalUsers}</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 shadow">
            <div className="text-lg font-semibold">Total Gifts</div>
            <div className="text-3xl font-bold">{tenant.totalGifts}</div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 shadow">
            <div className="text-lg font-semibold">Total Challenges</div>
            <div className="text-3xl font-bold">{tenant.totalChallenges}</div>
          </div>
        </div>
      )}
      <div className="mb-6 text-gray-600">User analytics for tenant <span className="font-bold">{tenant?.name}</span>:</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-2 py-1 border">Name</th>
              <th className="px-2 py-1 border">Email</th>
              <th className="px-2 py-1 border">Points</th>
              <th className="px-2 py-1 border">Level</th>
              <th className="px-2 py-1 border">Gifts</th>
              <th className="px-2 py-1 border">Challenges</th>
            </tr>
          </thead>
          <tbody>
            {tenant?.users?.map((user: any) => (
              <tr key={user.id}>
                <td className="px-2 py-1 border">{user.firstName} {user.lastName}</td>
                <td className="px-2 py-1 border">{user.email}</td>
                <td className="px-2 py-1 border">{user.totalPoints}</td>
                <td className="px-2 py-1 border">{user.level}</td>
                <td className="px-2 py-1 border">{user.awardedGifts?.length ?? 0}</td>
                <td className="px-2 py-1 border">{user.challengeParticipants?.filter((p: { status: string }) => p.status === 'COMPLETED').length ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
