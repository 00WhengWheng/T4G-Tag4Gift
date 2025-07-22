import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: boolean;
  centered?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'lg',
  padding = true,
  centered = true,
}) => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
    none: '',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 py-4' : '';
  const centerClasses = centered ? 'mx-auto' : '';

  return (
    <div className={`${maxWidthClasses[maxWidth]} ${paddingClasses} ${centerClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

