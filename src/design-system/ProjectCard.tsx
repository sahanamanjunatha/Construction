import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  location: string;
  category: string;
  image: string;
  isTiltedShowcase?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  location,
  category,
  image,
  isTiltedShowcase = false,
  delay = 0,
  onClick
}) => {
  if (isTiltedShowcase) {
    return (
      <div className="relative w-full max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer active:scale-[0.98]">
        <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-navy-dark">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover hover:scale-[1.04] transition-transform duration-400 ease-out"
          />
          <div className="p-6 bg-navy-dark border-t border-white/10">
            <span className="text-xs font-bold text-orange-primary uppercase tracking-wider">
              Showcase Landmark
            </span>
            <h4 className="font-poppins font-bold text-lg text-white mt-1">
              {name}
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              {location}
            </p>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 bg-orange-primary text-white text-xs font-bold px-4 py-2 rounded-md shadow-orange">
          Featured Build
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={onClick}
      className="bg-navy-light/80 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-orange-primary hover:bg-navy-light active:scale-[0.98] transition-all duration-300 flex items-center justify-between group cursor-pointer"
    >
      <div>
        <span className="font-poppins font-bold text-xs text-orange-primary uppercase tracking-wider mb-1 block">
          {category}
        </span>
        <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white group-hover:text-orange-primary transition-colors mb-2">
          {name}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <MapPin className="w-3.5 h-3.5 text-orange-primary" /> {location}
        </div>
      </div>

      <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-orange-primary text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
      </div>
    </motion.div>
  );
};
