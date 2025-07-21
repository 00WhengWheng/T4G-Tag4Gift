import { useEffect } from 'react';

export default function useNFC(onScan: (id: string) => void) {
  useEffect(() => {
    if (!('NDEFReader' in window)) return;
    const reader = new (window as any).NDEFReader();
    reader.scan().then(() => {
      reader.onreading = ({ message }: any) => {
        const id = new TextDecoder().decode(message.records[0].data);
        onScan(id);
      };
    });
  }, [onScan]);
}