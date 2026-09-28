import React, { useState } from 'react';
import { HardHat, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 left-0 w-full h-[85px] bg-white z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 group text-left cursor-pointer active:scale-98 transition-transform"
        >
          <div className="w-11 h-11 bg-navy-dark rounded-lg flex items-center justify-center text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300">
            <HardHat className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-extrabold text-xl text-navy-dark leading-none tracking-wide">
              NIA CONSTRUCTION
            </span>
            <span className="font-poppins font-bold text-[10px] text-orange-primary tracking-[2px] mt-1">
              CHARLOTTE, NC
            </span>
          </div>
        </button>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* Home */}
          <button
            onClick={() => navigateTo('home')}
            className={`font-poppins font-semibold text-sm transition-colors duration-200 cursor-pointer ${
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
              onClick={() => navigateTo('about')}
              className={`font-poppins font-semibold text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'about' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
              }`}
            >
              About NIA <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-orange-primary' : ''}`} />
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
              className={`font-poppins font-semibold text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'services' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
              }`}
            >
              Construction Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-orange-primary' : ''}`} />
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
              className={`font-poppins font-semibold text-sm flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                currentView === 'projects' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
              }`}
            >
              Past Projects <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-orange-primary' : ''}`} />
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
            className={`font-poppins font-semibold text-sm transition-colors duration-200 cursor-pointer ${
              currentView === 'contact' ? 'text-orange-primary' : 'text-navy-dark hover:text-orange-primary'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* RIGHT: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-2 font-poppins font-semibold text-sm px-6 py-3.5 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 active:scale-98 transition-all duration-300 group cursor-pointer"
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 flex flex-col gap-3 z-40 overflow-hidden"
          >
            <button
              onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'home' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              Home
            </button>
            <button
              onClick={() => { navigateTo('about'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'about' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              About Us
            </button>
            <button
              onClick={() => { navigateTo('services'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'services' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              Construction Services
            </button>
            <button
              onClick={() => { navigateTo('projects'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'projects' ? 'text-orange-primary' : 'text-navy-dark'}`}
            >
              Past Projects
            </button>
            <button
              onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }}
              className={`text-left font-semibold py-2 ${currentView === 'contact' ? 'text-orange-primary' : 'text-navy-dark'}`}
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
