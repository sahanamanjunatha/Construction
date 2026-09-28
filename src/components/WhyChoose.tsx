import React from 'react';
import { Award, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="relative py-24 bg-bgLight overflow-hidden arch-line-light">
      <ArchitecturalLines />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Three Horizontal Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Card 1: Experienced */}
          <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 hover:border-orange-primary hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg border-2 border-orange-primary flex items-center justify-center text-orange-primary mb-6 group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-xl text-navy-dark mb-3">
              Experienced
            </h3>
            <p className="font-poppins text-textLight text-sm leading-relaxed">
              With over 25 years of combined experience in both the real estate and construction industries, the NIA team consists of highly-trained experts with backgrounds ranging from real estate development and mortgage lending to engineering and general contracting.
            </p>
          </div>

          {/* Card 2: Knowledgeable */}
          <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 hover:border-orange-primary hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg border-2 border-orange-primary flex items-center justify-center text-orange-primary mb-6 group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-xl text-navy-dark mb-3">
              Knowledgeable
            </h3>
            <p className="font-poppins text-textLight text-sm leading-relaxed">
              NIA utilizes it's wealth of knowledge to not only enhance every project it takes on, but to provide their clients with the best customer service possible — a point they regard as key to their continued success.
            </p>
          </div>

          {/* Card 3: Time Sensitive */}
          <div className="bg-white p-8 rounded-xl shadow-card border border-gray-100 hover:border-orange-primary hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg border-2 border-orange-primary flex items-center justify-center text-orange-primary mb-6 group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-xl text-navy-dark mb-3">
              Time Sensitive
            </h3>
            <p className="font-poppins text-textLight text-sm leading-relaxed">
              Since 2008, the NIA team has understood that projects require sincere passion, the ability to adapt to unpredictable challenges and the desire to continually improve and all on-time.
            </p>
          </div>

        </div>

        {/* Centered Orange Button */}
        <div className="flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-8 py-4 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Past Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
