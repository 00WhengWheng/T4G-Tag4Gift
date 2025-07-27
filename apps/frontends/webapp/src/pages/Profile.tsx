import { GiftIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { useQuery } from 'urql';
import { USER_PROFILE_QUERY } from '../graphql/userProfile';

const USER_ID = 'me'; // Replace with actual user id from auth context

export default function Profile() {
  const [{ data, fetching, error }] = useQuery({
    query: USER_PROFILE_QUERY,
    variables: { id: USER_ID },
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;
  const user = data?.user;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>
      {user && (
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            {user.avatar && <img src={user.avatar} alt="avatar" className="w-16 h-16 rounded-full" />}
            <div>
              <div className="font-semibold text-lg">{user.firstName} {user.lastName}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="text-xs text-gray-400">Role: {user.role}</div>
            </div>
          </div>
        </div>
      )}
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <GiftIcon className="w-8 h-8" />
          </div>
          <div className="stat-title">Gifts Won</div>
          <div className="stat-value">{user?.awardedGifts?.length ?? 0}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <TrophyIcon className="w-8 h-8" />
          </div>
          <div className="stat-title">Challenges Completed</div>
          <div className="stat-value">{Array.isArray(user?.challengeParticipants)
            ? user.challengeParticipants.filter((p: { status: string }) => p.status === 'COMPLETED').length
            : 0}
          </div>
        </div>
      </div>
    </div>
  );
}