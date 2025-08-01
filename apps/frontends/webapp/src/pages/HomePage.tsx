import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@t4g/ui';

type FeaturedCard = {
  title: string;
  subtitle: string;
  image: string;
  color?: string;
};

const featuredCards: FeaturedCard[] = [
  {
    title: '5 Inspiring Apps',
    subtitle: 'for Your Next Adventure',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    category: 'Travel',
    size: 'large',
  },
  {
    title: 'Master the Art',
    subtitle: 'of Strategic Thinking',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=400&q=80',
    category: 'Strategy',
    size: 'medium',
  },
  {
    title: 'Quick Challenge',
    subtitle: 'Urban Exploration',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=80',
    category: 'Adventure',
    size: 'small',
  },
  {
    title: 'Take Control',
    subtitle: 'Gaming Experience',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=400&q=80',
    category: 'Gaming',
    size: 'small',
  },
  {
    title: 'Explore Worlds',
    subtitle: 'New Adventures',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
    category: 'Adventure',
    size: 'small',
  },
  {
    title: 'Ultimate Hub',
    subtitle: 'Gaming Experience',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80',
    category: 'Gaming',
    size: 'small',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  initial: (i: number) => ({
    opacity: 0,
    y: 60 + i * 10,
    scale: 0.95,
    zIndex: featuredCards.length - i,
  }),
  animate: (i: number) => ({
    opacity: 1,
    y: i * -10,
    scale: 1,
    zIndex: featuredCards.length - i,
    transition: { type: 'spring', stiffness: 300, damping: 30, delay: i * 0.12 },
  }),
  hover: {
    scale: 1.04,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    zIndex: featuredCards.length + 1,
  },
  tap: {
    scale: 0.98,
  },
};

const HomePage: React.FC = () => {
  const [hovered, setHovered] = useState<number>(-1);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-2">Today</h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80')] bg-cover bg-center"></div>
          </motion.div>
        </motion.div>

        {/* Stacked Animated Cards */}
        <div className="relative flex flex-col items-center justify-center h-[420px] mb-16">
          {featuredCards.map((card, i) => {
            // Parallax effect for stacking
            const y = useMotionValue(0);
            const rotate = useTransform(y, [ -100, 100 ], [ -8 + i * 2, 8 - i * 2 ]);
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                style={{
                  position: 'absolute',
                  top: `${i * 24}px`,
                  left: 0,
                  right: 0,
                  margin: 'auto',
                  zIndex: featuredCards.length - i + (hovered === i ? 10 : 0),
                  rotate,
                  y,
                  boxShadow: hovered === i ? '0 12px 40px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.10)',
                  transition: 'box-shadow 0.2s',
                  width: '100%',
                  maxWidth: '420px',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                <div className={`rounded-3xl shadow-xl border-2 ${card.color} bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg overflow-hidden flex flex-col`}>
                  <div className="h-48 w-full overflow-hidden">
                    <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-1 text-foreground">{card.title}</h2>
                      <p className="text-sm text-muted mb-2">{card.subtitle}</p>
                    </div>
                    <Button size="sm" className="mt-2 neon-btn">Open</Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Navbar */}
        <nav className="w-full flex justify-center py-4">
          <div className="flex gap-6">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Games</Button>
            <Button variant="ghost">Challenges</Button>
            <Button variant="ghost">Social</Button>
            <Button variant="ghost">Venues</Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
