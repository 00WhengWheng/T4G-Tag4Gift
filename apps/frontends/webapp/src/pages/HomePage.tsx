import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@t4g/ui';
import { useMotionValue, useTransform } from 'framer-motion';

const featuredCards = [
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
  hidden: { 
  initial: (i) => ({
    opacity: 0,
    y: 60 + i * 10,
    scale: 0.95,
    zIndex: featuredCards.length - i,
  }),
  animate: (i) => ({
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

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hovered, setHovered] = useState(-1);
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

        {/* Featured Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featuredCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedCard(card)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer group h-[420px] ${
                  index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                  'bg-gradient-to-br from-yellow-400 to-orange-500'
                }`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                      {card.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {card.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCards.slice(3, 6).map((card, index) => (
              <motion.div
                key={index + 3}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedCard(card)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer group h-[280px] ${
                  index === 0 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index === 1 ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                  'bg-gradient-to-br from-pink-400 to-rose-500'
                }`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
                      {card.category}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {card.title}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-end items-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Previous</span>
          </motion.button>
          <span className="text-sm text-gray-500 font-medium">Prev</span>
          
          <span className="text-sm text-gray-500 font-medium mx-6">Next</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </motion.button>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="flex gap-8">
            {['Today', 'Games', 'Challenges', 'Social', 'Search'].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 text-lg font-medium transition-colors ${
                  index === 0 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Modal */}
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {selectedCard.category.charAt(0)}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCard.title}</h2>
                <p className="text-gray-600 text-lg mb-4">{selectedCard.subtitle}</p>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  {selectedCard.category}
                </span>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setSelectedCard(null)}
                  >
                    Get
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedCard(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
