import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Claim() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} recycle={false} />
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-success">🎉 Gift Unlocked!</h2>
        <p>Show this screen at the counter to redeem.</p>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard phone-1 bg-neutral text-neutral-content p-4">
              Free Coffee ☕
            </div>
          </div>
        </div>
      </div>
    </>
  );
}