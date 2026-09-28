import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  roundedClass?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  roundedClass = 'rounded-2xl'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] as const }}
      className={`relative overflow-hidden shadow-2xl border-4 border-white ${roundedClass} group cursor-pointer active:scale-[0.98] transition-transform duration-100 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400 ease-out"
      />
      {/* Subtle Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/15 transition-colors duration-400"></div>
    </motion.div>
  );
};
