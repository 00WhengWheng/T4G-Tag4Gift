import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useQuery, gql } from '@apollo/client';

const GAME_TEMPLATES_QUERY = gql`
  query GameTemplates {
    gameTemplates {
      id
      name
      description
      gdevelopProjectUrl
      category
      type
    }
  }
`;

const cardVariants = {
  hover: { scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' },
  tap: { scale: 0.98 },
};

const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(GAME_TEMPLATES_QUERY);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState<number>(-1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = useRef(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      cardWidth.current = containerWidth / 3;
    }
  }, []);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = cardWidth.current / 2;
    if (info.offset.x < -threshold && currentIndex < (data?.gameTemplates.length ?? 0) - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    x.set(0);
  };

  if (loading) return <div>Loading games...</div>;
  if (error) return <div>Error loading games.</div>;

  const templates = data?.gameTemplates ?? [];
  const visibleCards = [
    templates[currentIndex % templates.length],
    templates[(currentIndex + 1) % templates.length],
    templates[(currentIndex + 2) % templates.length],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Carousel */}
        <div className="mb-16">
          <motion.div ref={carouselRef} className="relative overflow-hidden h-[420px]">
            <motion.div
              className="flex w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ x }}
            >
              {visibleCards.map((card, i) =>
                card ? (
                  <motion.div
                    key={card.id}
                    className="flex-1 min-w-[33.333%] px-3"
                    whileHover="hover"
                    whileTap="tap"
                    variants={cardVariants}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 300, damping: 30, delay: i * 0.12 },
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(-1)}
                  >
                    <div
                      className="h-full rounded-3xl shadow-xl border-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg overflow-hidden flex flex-col"
                      style={{
                        boxShadow:
                          hovered === i
                            ? '0 12px 40px rgba(0,0,0,0.18)'
                            : '0 4px 16px rgba(0,0,0,0.10)',
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      <div className="h-48 w-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {/* Optionally add a game image here if available */}
                        <span className="text-2xl font-bold text-gray-500">{card.category}</span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-xl font-bold mb-1 text-foreground">{card.name}</h2>
                          <p className="text-sm text-muted mb-2">{card.description}</p>
                        </div>
                        <Button
                          size="sm"
                          className="mt-2 neon-btn"
                          asChild
                        >
                          <a
                            href={card.gdevelopProjectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Play
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </motion.div>
            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {templates.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
