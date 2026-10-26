import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage?: string;
  delay?: number;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  bgImage,
  delay = 0,
  onSelect
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    bgImage || 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=85'
  );

  // Fallback if image fails to load
  const handleImageError = () => {
    setImgSrc('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=85');
  };

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsTouched(false);
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={onSelect}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative rounded-2xl p-8 min-h-[360px] flex flex-col justify-between overflow-hidden bg-white shadow-card border border-gray-100 hover:border-orange-primary/50 hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-500 group cursor-pointer"
    >
      {/* BACKGROUND IMAGE & LIGHT ORANGE SHADE OVERLAY (Hidden initially in white state, appears on touch / hover) */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-500 ${
          isTouched ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <img
          src={imgSrc}
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Light Orange Shade Overlay so photo is visible beneath a warm light-orange wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5e15]/82 via-orange-500/78 to-[#d84300]/84 backdrop-blur-[1px]" />
      </div>

      {/* TOP HEADER: ICON & NUMBER */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isTouched
              ? 'bg-white/25 text-white shadow-lg backdrop-blur-md border border-white/30'
              : 'bg-orange-primary text-white shadow-orange group-hover:bg-white/25 group-hover:text-white group-hover:backdrop-blur-md group-hover:shadow-none group-hover:border group-hover:border-white/30'
          }`}
        >
          {icon}
        </div>
        <span
          className={`font-poppins font-black text-5xl transition-colors duration-300 ${
            isTouched
              ? 'text-white/30'
              : 'text-gray-100 group-hover:text-white/30'
          }`}
        >
          {number}
        </span>
      </div>

      {/* MIDDLE CONTENT: TITLE & DESCRIPTION */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`font-poppins font-bold text-xl sm:text-2xl mb-3 transition-colors duration-300 ${
              isTouched ? 'text-white' : 'text-navy-dark group-hover:text-white'
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-poppins text-sm leading-relaxed mb-6 transition-colors duration-300 ${
              isTouched
                ? 'text-white/95'
                : 'text-textLight group-hover:text-white/95'
            }`}
          >
            {description}
          </p>
        </div>

        {/* BOTTOM ACTION LINK */}
        <div
          className={`pt-4 border-t transition-colors duration-300 ${
            isTouched
              ? 'border-white/25'
              : 'border-gray-100 group-hover:border-white/25'
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`font-poppins font-bold text-xs uppercase tracking-wider transition-colors duration-300 ${
                isTouched ? 'text-white' : 'text-navy-dark group-hover:text-white'
              }`}
            >
              Full Service
            </span>
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                isTouched
                  ? 'bg-white text-orange-primary shadow-md scale-110'
                  : 'bg-bgLight text-orange-primary group-hover:bg-white group-hover:text-orange-primary group-hover:shadow-md group-hover:scale-110'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



