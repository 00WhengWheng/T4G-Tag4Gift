import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Button } from '@/components/ui/button';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

type FeaturedCard = {
  title: string;
  subtitle: string;
  image: string;
  color?: string;
  category: string;
  size: 'large' | 'medium' | 'small';
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

const cardVariants = {
  hover: {
    scale: 1.04,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  },
  tap: {
    scale: 0.98,
  },
};

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState<number>(-1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const cardWidth = useRef(0);
  const x = useMotionValue(0);
  
  // Calculate visible cards based on current index
  const visibleCards = [
    featuredCards[currentIndex % featuredCards.length],
    featuredCards[(currentIndex + 1) % featuredCards.length],
    featuredCards[(currentIndex + 2) % featuredCards.length],
  ];

  // Initialize OpenLayers map
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Create map instance
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([2.3522, 48.8566]), // Paris coordinates
          zoom: 13,
          maxZoom: 18
        }),
        controls: [] // Remove default controls for cleaner look
      });
      
      mapInstanceRef.current = map;
      
      // Trigger resize when map container becomes visible
      setTimeout(() => {
        map.updateSize();
      }, 200);
    }
    
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined);
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      cardWidth.current = containerWidth / 3;
    }
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = cardWidth.current / 2;
    
    if (info.offset.x < -threshold && currentIndex < featuredCards.length - 1) {
      // Swipe left - go to next card
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      // Swipe right - go to previous card
      setCurrentIndex(prev => prev - 1);
    }
    
    // Reset position
    x.set(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section with Map */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "280px" }}
          >
            {/* Map Container */}
            <div 
              ref={mapRef} 
              className="w-full h-full"
            />
            
            {/* Map Overlay with Today Text */}
            <div className="absolute top-0 left-0 p-6 z-10">
              <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-lg">Tag4Gift</h1>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Horizontal Carousel */}
        <div className="mb-16">
          <motion.div 
            ref={carouselRef}
            className="relative overflow-hidden h-[420px]"
          >
            <motion.div 
              className="flex w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ x }}
            >
              {visibleCards.map((card, i) => (
                <motion.div
                  key={`${card.title}-${i}`}
                  className="flex-1 min-w-[33.333%] px-3"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardVariants}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 30, delay: i * 0.12 }
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                >
                  <div 
                    className={`h-full rounded-3xl shadow-xl border-2 ${card.color} bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg overflow-hidden flex flex-col`}
                    style={{
                      boxShadow: hovered === i ? '0 12px 40px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.10)',
                      transition: 'box-shadow 0.2s',
                    }}
                  >
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
              ))}
            </motion.div>
            
            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {featuredCards.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </motion.div>
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
