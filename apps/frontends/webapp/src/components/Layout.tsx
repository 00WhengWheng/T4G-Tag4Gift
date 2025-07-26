import { motion } from 'framer-motion';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-yellow-50"
    >
      <Header />
      <main className="flex-1 flex justify-center items-start py-8">
        <div className="w-full max-w-3xl bg-white/80 rounded-xl shadow-xl p-8 card-glow">
          {children}
        </div>
      </main>
      {/* Footer can be added here */}
    </motion.div>
  );
}
