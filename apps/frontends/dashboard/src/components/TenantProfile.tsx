import { useQuery } from 'urql';
import { gql } from 'urql';
import { TENANT_STATS_QUERY } from '../graphql/tenantStats';

const TENANT_PROFILE_QUERY = gql`
  query TenantProfile($id: String!) {
    tenant(id: $id) {
      id
      name
      slug
      email
      description
      type
      status
      totalChallenges
      totalUsers
      totalGifts
      maxActiveChallenges
      maxUsersPerChallenge
      maxTags
      createdAt
      updatedAt
    }
  }
`;

export function TenantProfile({ tenantId }: { tenantId: string }) {
  const [{ data, fetching, error }] = useQuery({
    query: TENANT_STATS_QUERY,
    variables: { tenantId },
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error loading tenant profile</div>;
  const tenant = data?.tenant;

  if (!tenant) return <div>No tenant found</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tenant Profile</h1>
      <div className="mb-4">
        <div className="font-semibold text-lg">{tenant.name}</div>
        <div className="text-xs text-gray-400">ID: {tenant.id}</div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{tenant.totalUsers}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Gifts</div>
          <div className="stat-value">{tenant.totalGifts}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Challenges</div>
          <div className="stat-value">{tenant.totalChallenges}</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-400">
        Max Active Challenges: {tenant.maxActiveChallenges} | Max Users/Challenge: {tenant.maxUsersPerChallenge} | Max Tags: {tenant.maxTags}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">User Interactions</h2>
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
            {tenant.users?.map((user: any) => (
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
