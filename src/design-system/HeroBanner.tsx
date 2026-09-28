import React from 'react';
import { motion } from 'framer-motion';
import { ArchitecturalLines } from './ArchitecturalLines';

interface HeroBannerProps {
  title: string;
  breadcrumbPage: string;
  bgImage?: string;
  onNavigateHome: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  breadcrumbPage,
  bgImage = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85",
  onNavigateHome
}) => {
  return (
    <section className="relative w-full h-[300px] bg-navy-dark overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/70"></div>
      </div>

      <ArchitecturalLines dark={true} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h1 className="font-poppins font-extrabold text-3xl sm:text-5xl text-white mb-3 tracking-tight">
            {title}
          </h1>
          <div className="flex items-center gap-2 font-poppins text-sm font-medium text-gray-300">
            <button onClick={onNavigateHome} className="hover:text-orange-primary transition-colors">
              Home
            </button>
            <span className="text-orange-primary font-bold">→</span>
            <span className="text-orange-primary font-semibold">{breadcrumbPage}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
