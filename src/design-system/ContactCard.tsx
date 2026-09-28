import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactCard: React.FC = () => {
  return (
    <div className="bg-bgLight rounded-2xl p-8 border border-gray-200/80 shadow-card">
      <h3 className="font-poppins font-extrabold text-2xl text-navy-dark mb-2">
        Contact Us Today!
      </h3>
      <p className="font-poppins text-textLight text-sm mb-8">
        For immediate assistance please call or email our office today!
      </p>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-primary text-white flex items-center justify-center flex-shrink-0 shadow-orange">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-textLight">Phone Number</h4>
            <a href="tel:7049104521" className="font-poppins font-bold text-navy-dark hover:text-orange-primary transition-colors text-sm sm:text-base">
              (704) 910-4521
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-primary text-white flex items-center justify-center flex-shrink-0 shadow-orange">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-textLight">Email Address</h4>
            <a href="mailto:info@niaconstruction.com" className="font-poppins font-bold text-navy-dark hover:text-orange-primary transition-colors text-sm sm:text-base">
              info@niaconstruction.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-primary text-white flex items-center justify-center flex-shrink-0 shadow-orange">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-textLight">Main & Regional Offices</h4>
            <p className="font-poppins font-bold text-navy-dark text-sm sm:text-base">
              Charlotte, NC & Durham, NC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
