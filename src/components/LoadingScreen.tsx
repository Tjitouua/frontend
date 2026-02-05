import React, { useState, useEffect } from 'react';
import coatOfArms from '../assets/Coat_of_Arms.png';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
  minimumLoadTime?: number; // milliseconds, default 2000
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading, 
  onLoadingComplete, 
  minimumLoadTime = 2000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [canExit, setCanExit] = useState(false);

  useEffect(() => {
    // Ensure the loading screen stays visible for at least minimumLoadTime
    const timer = setTimeout(() => {
      setCanExit(true);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, [minimumLoadTime]);

  useEffect(() => {
    // Trigger exit animation when both loading is done AND minimum time has passed
    if (!isLoading && canExit) {
      setIsExiting(true);
      
      // Wait for exit animation to finish before unmounting/hiding
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // 500ms matches the fade-out duration

      return () => clearTimeout(exitTimer);
    }
  }, [isLoading, canExit, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading NamGov Portal, please wait"
    >
      <div className="flex flex-col items-center justify-center p-4">
        {/* Logo Section */}
        <div className="mb-8 animate-scale-in">
          <img 
            src={coatOfArms} 
            alt="Namibia Coat of Arms" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-wide uppercase">
            National portal
          </h1>
        </div>

        {/* Loading Indicator - Option B: Bouncing Dots */}
        <div className="mt-8 flex gap-2 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          <div 
            className="w-3 h-3 rounded-full bg-primary animate-bounce-dot" 
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className="w-3 h-3 rounded-full bg-primary animate-bounce-dot" 
            style={{ animationDelay: '150ms' }}
          ></div>
          <div 
            className="w-3 h-3 rounded-full bg-primary animate-bounce-dot" 
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>

        {/* Optional Loading Text */}
        <p className="mt-6 text-sm text-gray-400 font-medium animate-pulse">
          Loading services...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
