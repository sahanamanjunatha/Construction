import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownMenu } from './DropdownMenu';

export type ViewType = 'home' | 'about' | 'services' | 'projects' | 'contact';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigateTo = (view: ViewType) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveDropdown(null);
  };

  const aboutDropdownItems = [
    { label: 'Why Choose NIA', onClick: () => navigateTo('about') },
    { label: 'Meet Our Founder', onClick: () => navigateTo('about') },
    { label: 'Certifications', onClick: () => navigateTo('about') },
    { label: 'Corporate Partners', onClick: () => navigateTo('about') },
    { label: 'Aspire Protégé', onClick: () => navigateTo('about') }
  ];

  const servicesDropdownItems = [
    { label: 'General Contracting', onClick: () => navigateTo('services') },
    { label: 'Residential Services', onClick: () => navigateTo('services') },
    { label: 'Roofing Services', onClick: () => navigateTo('services') }
  ];

  const projectsDropdownItems = [
    { label: 'Commercial Work', onClick: () => navigateTo('projects') },
    { label: 'Residential Work', onClick: () => navigateTo('projects') }
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-[90px] bg-[#FAF8F5] z-50 transition-all duration-300 border-b border-black/5">
      <div className="max-w-[1800px] mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 group text-left cursor-pointer active:scale-98 transition-transform"
        >
          {/* Silhouette City & Roofline Logo Icon matching niaconstruction.com */}
          <div className="flex items-center gap-2">
            <svg className="w-14 h-10 text-black group-hover:text-[#FA5A1E] transition-colors duration-300" viewBox="0 0 110 45" fill="currentColor">
              <path d="M5 40 V24 L14 16 L23 24 V40 H5 Z" />
              <rect x="25" y="18" width="12" height="22" rx="1" />
              <path d="M39 40 V14 L51 4 L63 14 V40 H39 Z" />
              <rect x="65" y="12" width="14" height="28" rx="1" />
              <path d="M81 40 V26 L90 18 L99 26 V40 H81 Z" />
              <rect x="2" y="41" width="102" height="3" rx="1" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-extrabold text-xl text-slate-800 leading-none tracking-wide group-hover:text-[#FA5A1E] transition-colors">
              I20 Treat
            </span>
            <span className="font-poppins font-bold text-[10px] text-[#FA5A1E] tracking-[2px] mt-1">
              epooo Sarvana
            </span>
          </div>
        </button>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* Home */}
          <button
            onClick={() => navigateTo('home')}
            className={`font-poppins font-semibold text-base transition-colors duration-200 cursor-pointer ${
              currentView === 'home' ? 'text-[#FA5A1E]' : 'text-slate-800 hover:text-[#FA5A1E]'
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
              onClick={() => navigateTo('about')}
              className={`font-poppins font-semibold text-base flex items-center gap-1 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'about' ? 'text-[#FA5A1E]' : 'text-slate-800 hover:text-[#FA5A1E]'
              }`}
            >
              About NIA <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#FA5A1E]' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'about' && (
                <DropdownMenu items={aboutDropdownItems} widthClass="w-60" />
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
              onClick={() => navigateTo('services')}
              className={`font-poppins font-semibold text-base flex items-center gap-1 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'services' ? 'text-[#FA5A1E]' : 'text-slate-800 hover:text-[#FA5A1E]'
              }`}
            >
              Construction Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#FA5A1E]' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <DropdownMenu items={servicesDropdownItems} widthClass="w-64" />
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
              onClick={() => navigateTo('projects')}
              className={`font-poppins font-semibold text-base flex items-center gap-1 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'projects' ? 'text-[#FA5A1E]' : 'text-slate-800 hover:text-[#FA5A1E]'
              }`}
            >
              Past Projects <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-[#FA5A1E]' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'projects' && (
                <DropdownMenu items={projectsDropdownItems} widthClass="w-60" />
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <button
            onClick={() => navigateTo('contact')}
            className={`font-poppins font-semibold text-base transition-colors duration-200 cursor-pointer ${
              currentView === 'contact' ? 'text-[#FA5A1E]' : 'text-slate-800 hover:text-[#FA5A1E]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* RIGHT: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-2 font-poppins font-semibold text-base px-6 py-3 bg-[#FA5A1E] text-white rounded-md shadow-md hover:bg-[#E04808] hover:-translate-y-0.5 active:scale-98 transition-all duration-300 group cursor-pointer"
          >
            Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-[#FA5A1E] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-gray-200 shadow-xl px-6 py-6 flex flex-col gap-3 z-40 overflow-hidden"
          >
            <button
              onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'home' ? 'text-[#FA5A1E]' : 'text-slate-800'}`}
            >
              Home
            </button>
            <button
              onClick={() => { navigateTo('about'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'about' ? 'text-[#FA5A1E]' : 'text-slate-800'}`}
            >
              About NIA
            </button>
            <button
              onClick={() => { navigateTo('services'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'services' ? 'text-[#FA5A1E]' : 'text-slate-800'}`}
            >
              Construction Services
            </button>
            <button
              onClick={() => { navigateTo('projects'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'projects' ? 'text-orange-primary' : 'text-slate-800'}`}
            >
              Past Projects
            </button>
            <button
              onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'contact' ? 'text-[#FA5A1E]' : 'text-slate-800'}`}
            >
              Contact
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full flex items-center justify-center gap-2 font-semibold text-base px-6 py-3.5 bg-[#FA5A1E] text-white rounded-md shadow-md mt-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
