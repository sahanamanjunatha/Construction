import React, { useState } from 'react';
import { HardHat, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarProps {
  currentView: 'home' | 'about';
  onNavigate: (view: 'home' | 'about') => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } }
  };

  return (
    <header className="sticky top-0 left-0 w-full h-[85px] bg-white z-50 shadow-sm transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <button 
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-11 h-11 bg-navy-dark rounded-lg flex items-center justify-center text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300">
            <HardHat className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-extrabold text-xl text-navy-dark leading-none tracking-wide">
              YOUR COMPANY
            </span>
            <span className="font-poppins font-bold text-[10px] text-orange-primary tracking-[2.5px] mt-1">
              CONSTRUCTIONS
            </span>
          </div>
        </button>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* Home */}
          <button
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-poppins font-semibold text-sm transition-colors duration-200 ${
              currentView === 'home' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
            }`}
          >
            Home
          </button>

          {/* About Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`font-poppins font-semibold text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                currentView === 'about' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
              }`}
            >
              About Us <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-orange-primary' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50"
                >
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200"
                  >
                    Why Choose NIA
                  </button>
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200"
                  >
                    Meet Our Founder
                  </button>
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200"
                  >
                    Certifications
                  </button>
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200"
                  >
                    Corporate Partners
                  </button>
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200"
                  >
                    Aspire Protégé
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Construction Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => { onNavigate('home'); setTimeout(() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className="font-poppins font-semibold text-sm text-navy-dark hover:text-orange-primary transition-colors duration-200 flex items-center gap-1.5 py-2"
            >
              Construction Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-orange-primary' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50"
                >
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Commercial Construction
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Residential Construction
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Renovation
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Roofing
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    General Contracting
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Past Projects Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('projects')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => { onNavigate('home'); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className="font-poppins font-semibold text-sm text-navy-dark hover:text-orange-primary transition-colors duration-200 flex items-center gap-1.5 py-2"
            >
              Past Projects <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-orange-primary' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'projects' && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50"
                >
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Featured Projects
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Commercial Projects
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Residential Projects
                  </button>
                  <button className="w-full text-left px-5 py-2.5 text-sm font-medium text-navy-dark hover:bg-bgLight hover:text-orange-primary hover:translate-x-1 transition-all duration-200">
                    Renovation Projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => { onNavigate('home'); setTimeout(() => { document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
            className="font-poppins font-semibold text-sm text-navy-dark hover:text-orange-primary transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* RIGHT: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-2 font-poppins font-semibold text-sm px-6 py-3.5 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 active:scale-98 transition-all duration-300 group"
          >
            Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy-dark hover:text-orange-primary transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 flex flex-col gap-3 z-40 overflow-hidden"
          >
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'home' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'about' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left font-semibold text-navy-dark py-2"
            >
              Construction Services
            </button>
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left font-semibold text-navy-dark py-2"
            >
              Past Projects
            </button>
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left font-semibold text-navy-dark py-2"
            >
              Contact
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 bg-orange-primary text-white rounded-md shadow-orange mt-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
