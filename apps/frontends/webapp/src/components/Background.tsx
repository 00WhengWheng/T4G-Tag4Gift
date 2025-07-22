import React from 'react';

interface BackgroundProps {
  variant?: 'gradient' | 'dots' | 'waves' | 'grid' | 'none';
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ 
  variant = 'gradient',
  className = '' 
}) => {
  // Base styles for all background variants
  const baseClasses = 'fixed inset-0 -z-10 transition-opacity duration-1000 ease-in-out';
  
  // Specific styles for each variant
  const variantClasses = {
    gradient: 'bg-gradient-to-br from-base-200 via-base-100 to-base-300',
    dots: 'bg-base-100',
    waves: 'bg-base-100',
    grid: 'bg-base-100',
    none: 'bg-base-100'
  };
  
  // Pattern overlays for specific variants
  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return (
          <div 
            className="absolute inset-0 opacity-30 dark:opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        );
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-full">
              <path 
                fill="currentColor" 
                fillOpacity="1" 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        );
      case 'grid':
        return (
          <div 
            className="absolute inset-0 opacity-10 dark:opacity-5"
            style={{
              backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        );
      default:
        return null;
    }
  };
  
  // Gradient orbs for the gradient variant
  const renderGradientOrbs = () => {
    if (variant !== 'gradient') return null;
    
    return (
      <>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-500/10 rounded-full filter blur-3xl animate-float"></div>
      </>
    );
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {renderPattern()}
      {renderGradientOrbs()}
    </div>
  );
};

export default Background;

