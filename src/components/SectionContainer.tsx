import React, { ReactNode } from 'react';

interface SectionContainerProps {
  title?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
  className = '',
  background = 'white',
}) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-secondary', // Matches #F7F8FA from tailwind config
    blue: 'bg-primary-light', // Matches #E6F0FF from tailwind config
  };

  return (
    <section className={`${bgStyles[background]} py-10 md:py-16 ${className}`}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
