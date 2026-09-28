import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  description,
  align = 'left',
  dark = false
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-3 block"
      >
        {label}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-4 ${
          dark ? 'text-white' : 'text-navy-dark'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-poppins text-base leading-relaxed ${
            dark ? 'text-gray-300' : 'text-textLight'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
