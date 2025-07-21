import { useParams } from 'react-router-dom';
import GiftProgress from '../components/GiftProgress';

export default function VenueHome() {
  const { id } = useParams();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Venue #{id}</h1>
      <p>Complete challenges to unlock your gift!</p>
      <GiftProgress value={3} max={5} />
      <button className="btn btn-secondary">Play Mini-Game</button>
    </div>
  );
}