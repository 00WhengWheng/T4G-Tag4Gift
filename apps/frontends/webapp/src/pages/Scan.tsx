import { motion } from 'framer-motion';

export default function Scan() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100"
    >
      <h2 className="text-3xl font-bold mb-4">Scan QR / Tap NFC</h2>
      {/* Scanner component goes here */}
    </motion.div>
  );
}