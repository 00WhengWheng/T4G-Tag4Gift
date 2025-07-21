type Props = { value: number; max: number };
export default function GiftProgress({ value, max }: Props) {
  const percent = (value / max) * 100;
  return (
    <div className="radial-progress text-primary" style={{ ['--value' as any]: percent }}>
      {Math.round(percent)}%
    </div>
  );
}