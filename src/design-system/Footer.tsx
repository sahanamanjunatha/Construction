import React from 'react';
import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: () => void;
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateHome, 
  onNavigateAbout, 
  onNavigateServices, 
  onNavigateProjects, 
  onNavigateContact 
}) => {
  return (
    <footer id="footer" className="bg-navy-dark text-white pt-20 pb-10 border-t-4 border-orange-primary relative overflow-hidden">
      <ArchitecturalLines dark={true} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Prominent Orange Contact Call Button Header Banner */}
        <div className="bg-navy-light/90 border border-white/10 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="font-poppins font-bold text-xs text-orange-primary uppercase tracking-widest block mb-1">
              Have a Project in Mind?
            </span>
            <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white">
              Speak With Our Estimating Desk Today
            </h3>
          </div>

          <a
            href="tel:7049104521"
            className="inline-flex items-center gap-3 font-poppins font-bold text-base px-8 py-4 bg-orange-primary text-white rounded-xl shadow-orange hover:bg-orange-hover hover:-translate-y-1 active:scale-98 transition-all duration-300 group flex-shrink-0"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Call Today! (704) 910-4521</span>
          </a>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: About Us */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-primary text-white rounded-lg flex items-center justify-center font-bold shadow-orange">
                <HardHat className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-lg text-white leading-none">
                  NIA CONSTRUCTION
                </span>
                <span className="font-poppins font-bold text-[9px] text-orange-primary tracking-[2px] mt-1">
                  CHARLOTTE, NORTH CAROLINA
                </span>
              </div>
            </div>
            <p className="font-poppins text-gray-400 text-sm leading-relaxed mb-6">
              NIA Construction, Inc. is a licensed, full-service general contracting firm located in Charlotte, North Carolina, offering a wide-array of real estate development, building, renovation, and demolition services for both residential and commercial markets.
            </p>
            <div className="flex flex-col gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-primary" /> (704) 910-4521
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-primary" /> info@niaconstruction.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-primary" /> Charlotte, NC & Regional Office in Durham, NC
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-bold text-base text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-primary">
              Our Services
            </h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li><button onClick={onNavigateServices} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Commercial Construction</button></li>
              <li><button onClick={onNavigateServices} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Residential Construction</button></li>
              <li><button onClick={onNavigateServices} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Commercial Roofing</button></li>
              <li><button onClick={onNavigateServices} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Residential Roofing</button></li>
              <li><button onClick={onNavigateServices} className="hover:text-orange-primary transition-colors text-left cursor-pointer">General Construction</button></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-bold text-base text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-primary">
              Quick Links
            </h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400">
              <li>
                <button onClick={onNavigateHome} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={onNavigateAbout} className="hover:text-orange-primary transition-colors text-left cursor-pointer">About Us</button>
              </li>
              <li><button onClick={onNavigateAbout} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Certifications</button></li>
              <li><button onClick={onNavigateProjects} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Past Work</button></li>
              <li><button onClick={onNavigateAbout} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Apprenticeships</button></li>
              <li><button onClick={onNavigateContact} className="hover:text-orange-primary transition-colors text-left cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 4: Featured Past Projects */}
          <div className="lg:col-span-4">
            <h4 className="font-poppins font-bold text-base text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-primary">
              Featured Past Projects
            </h4>
            <ul className="space-y-3 font-poppins text-sm text-gray-400 mb-6">
              <li onClick={onNavigateProjects} className="flex items-center gap-2 hover:text-orange-primary transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-primary"></span> No Grease at Concord Mills
              </li>
              <li onClick={onNavigateProjects} className="flex items-center gap-2 hover:text-orange-primary transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-primary"></span> 6000 Fairview 7th Floor
              </li>
              <li onClick={onNavigateProjects} className="flex items-center gap-2 hover:text-orange-primary transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-primary"></span> Willow Farms Denver
              </li>
              <li onClick={onNavigateProjects} className="flex items-center gap-2 hover:text-orange-primary transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-primary"></span> JM Alexander
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-3">Follow Us</span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:-translate-y-1 active:scale-98"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:-translate-y-1 active:scale-98"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:-translate-y-1 active:scale-98"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center font-poppins text-xs text-gray-400">
          <p>© 2024 NIA Construction. All Rights Reserved | Servicing Charlotte, NC & Durham, NC</p>
        </div>

      </div>
    </footer>
  );
};
