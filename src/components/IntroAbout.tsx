import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

export const IntroAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <ArchitecturalLines />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Heading & Company Introduction */}
          <div className="lg:col-span-6">
            <span className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-3 block">
              About NIA Construction
            </span>

            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-dark leading-[1.2] mb-6">
              BUILDING WITH INTENTION
            </h2>

            <p className="font-poppins text-textLight text-base leading-relaxed mb-6">
              With over 20 years of combined experience in both the real estate and construction industries, the NIA team consists of highly-trained experts with backgrounds ranging from real estate development and mortgage lending to engineering and general contracting.
            </p>

            <p className="font-poppins text-textLight text-base leading-relaxed mb-8">
              NIA Construction tackles all projects with a personal commitment to providing an efficient and professional experience from start to finish. We understand the stress our clients experience when selecting the right company for their real estate related projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 font-poppins font-medium text-sm text-navy-dark">
                <CheckCircle2 className="w-5 h-5 text-orange-primary" /> Knowledgeable Staff
              </div>
              <div className="flex items-center gap-2 font-poppins font-medium text-sm text-navy-dark">
                <CheckCircle2 className="w-5 h-5 text-orange-primary" /> Time Sensitive Delivery
              </div>
              <div className="flex items-center gap-2 font-poppins font-medium text-sm text-navy-dark">
                <CheckCircle2 className="w-5 h-5 text-orange-primary" /> 20+ Years Experience
              </div>
              <div className="flex items-center gap-2 font-poppins font-medium text-sm text-navy-dark">
                <CheckCircle2 className="w-5 h-5 text-orange-primary" /> 200+ Combined Years
              </div>
            </div>

            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-7 py-4 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: Overlapping Construction Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[460px] sm:h-[520px]">
              
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
                  alt="Engineers reviewing site blueprints"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=85"
                  alt="Modern architectural construction framework"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Architectural Line Art Frame Accent */}
              <div className="absolute -top-4 -right-4 w-40 h-40 border-2 border-dashed border-orange-primary/30 rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-primary/10 rounded-2xl -z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
