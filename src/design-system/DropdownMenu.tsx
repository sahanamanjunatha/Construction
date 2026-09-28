import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  widthClass?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, widthClass = 'w-60' }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`absolute top-full left-0 ${widthClass} bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="w-full text-left px-5 py-2.5 text-sm font-poppins font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-primary focus:bg-bgLight"
        >
          {item.label}
        </button>
      ))}
    </motion.div>
  );
};
