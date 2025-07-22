import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'outline';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  onClick,
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-base-100 border border-base-300 shadow-md',
    glass: 'glass-card',
    gradient: 'bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 border border-base-300/50 shadow-md',
    outline: 'border-2 border-base-300 bg-base-100/50 backdrop-blur-sm',
  };
  
  const hoverClasses = hover
    ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer'
    : '';
  
  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-4 border-b border-base-300/50 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-4 border-t border-base-300/50 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

