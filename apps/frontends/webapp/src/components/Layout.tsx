import { motion } from 'framer-motion';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {/* Footer can be added here */}
    </motion.div>
  );
}
