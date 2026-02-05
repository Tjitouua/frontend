import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, title, className = '' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-lg overflow-hidden ${className}`}
  >
    {title && (
      <div className="px-6 py-4 border-b border-gray-100 bg-white/50">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </motion.div>
);

export default Card;
