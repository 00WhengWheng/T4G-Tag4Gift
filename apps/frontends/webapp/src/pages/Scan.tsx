import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import useNFC from '../hooks/useNFC';

export default function Scan() {
  const navigate = useNavigate();
  useNFC((tag) => navigate(`/venue/${tag}`));

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Scan QR / Tap NFC</h2>
      <div className="w-full max-w-sm">
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result) => result && navigate(`/venue/${result?.getText()}`)}
        />
      </div>
    </div>
  );
}