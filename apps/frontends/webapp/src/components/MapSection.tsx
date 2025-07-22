import React from 'react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => (
  <section className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-100 my-8">
    <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
      Venues Map
    </h2>
    <motion.div
      className="w-full h-56 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center text-lg md:text-xl text-blue-700 font-bold shadow-inner overflow-hidden relative"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative z-10 flex flex-col items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 animate-pulse text-blue-400 mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <span>[Interactive Map Coming Soon]</span>
      </div>
    </motion.div>
    <p className="text-gray-600 text-sm md:text-base mt-4 text-center max-w-lg">
      Discover Tag4Gift venues near you. Scan QR codes at these locations to unlock special rewards and experiences.
    </p>
  </section>
);

export default MapSection;
