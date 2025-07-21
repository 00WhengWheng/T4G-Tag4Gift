import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const challenges = [
  { id: 1, title: 'Beat the High Score', reward: 'Free Latte', progress: 70 },
  { id: 2, title: 'Share 3 stories', reward: '10% off', progress: 33 },
];

export default function Challenges() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Challenges</h1>
      {challenges.map((c) => (
        <div key={c.id} className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">{c.title}</h2>
            <p>Reward: {c.reward}</p>
            <progress
              className="progress progress-primary w-full"
              value={c.progress}
              max="100"
            />
          </div>
        </div>
      ))}
    </div>
  );
}