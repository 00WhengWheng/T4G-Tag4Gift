import { GiftIcon, TrophyIcon } from '@heroicons/react/24/solid';

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <GiftIcon className="w-8 h-8" />
          </div>
          <div className="stat-title">Gifts Won</div>
          <div className="stat-value">7</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <TrophyIcon className="w-8 h-8" />
          </div>
          <div className="stat-title">Challenges Completed</div>
          <div className="stat-value">12</div>
        </div>
      </div>
    </div>
  );
}