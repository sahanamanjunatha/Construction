import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  bgImage?: string;
  delay?: number;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  isHighlighted = false,
  bgImage,
  delay = 0,
  onSelect
}) => {
  if (isHighlighted && bgImage) {
    /* HIGHLIGHTED ORANGE IMAGE CARD */
    return (
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        onClick={onSelect}
        className="relative rounded-xl overflow-hidden shadow-xl min-h-[340px] flex flex-col justify-between p-8 group hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
      >
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400 ease-out"
        />
        <div className="absolute inset-0 bg-orange-primary/90 transition-opacity"></div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
            {icon}
          </div>
          <span className="font-poppins font-black text-5xl text-white/30">
            {number}
          </span>
        </div>

        <div className="relative z-10">
          <h3 className="font-poppins font-bold text-2xl text-white mb-3">
            {title}
          </h3>
          <p className="font-poppins text-white/90 text-sm leading-relaxed mb-6">
            {description}
          </p>
          <div className="inline-flex items-center gap-2 font-poppins font-bold text-sm text-white group-hover:translate-x-1 transition-transform">
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  }

  /* STANDARD WHITE CARD */
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={onSelect}
      className="relative bg-white rounded-xl p-8 shadow-card border border-gray-100 flex flex-col justify-between min-h-[340px] hover:border-orange-primary hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
    >
      <div>
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-primary text-white flex items-center justify-center shadow-orange">
            {icon}
          </div>
          <span className="font-poppins font-black text-5xl text-gray-100 group-hover:text-orange-primary/20 transition-colors">
            {number}
          </span>
        </div>

        <h3 className="font-poppins font-bold text-xl text-navy-dark mb-3 group-hover:text-orange-primary transition-colors">
          {title}
        </h3>
        <p className="font-poppins text-textLight text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="font-poppins font-semibold text-xs text-navy-dark uppercase tracking-wider">
          Full Service
        </span>
        <div className="w-9 h-9 rounded-full bg-bgLight text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
