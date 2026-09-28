import React from 'react';
import { ClipboardList, Home, Compass, Leaf, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  bgImage?: string;
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'Preconstruction',
    description: 'Comprehensive preconstruction planning, estimating, feasibility analysis, zoning approvals, and structural blueprinting.',
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'Roofing Services',
    description: 'Commercial and residential roofing solutions, storm damage repairs, membrane installations, and roof maintenance.',
    icon: <Home className="w-6 h-6" />,
    isHighlighted: true,
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '03',
    title: 'BIM / Design Build',
    description: 'Streamlined design-build delivery integrating 3D Building Information Modeling with single-source project execution.',
    icon: <Compass className="w-6 h-6" />
  },
  {
    number: '04',
    title: 'Sustainability',
    description: 'Eco-friendly building practices, energy-efficient design, sustainable materials, and green construction techniques.',
    icon: <Leaf className="w-6 h-6" />
  },
  {
    number: '05',
    title: 'Construction',
    description: 'Turnkey general contracting for commercial buildouts, retail spaces, facility maintenance, and residential builds.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    number: '06',
    title: 'Post Construction',
    description: 'Facility commissioning, final inspections, punch-list fulfillment, long-term building upkeep, and warranty care.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const FeaturedServices: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-bgLight overflow-hidden arch-line-light">
      <ArchitecturalLines />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Center Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-3 block">
            Featured Construction Services
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy-dark leading-tight">
            Comprehensive Engineering & Building Solutions
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            if (service.isHighlighted) {
              /* HIGHLIGHTED ORANGE IMAGE CARD (Card 02 Roofing) */
              return (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-xl min-h-[340px] flex flex-col justify-between p-8 group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-orange-primary/90 transition-opacity"></div>

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="font-poppins font-black text-5xl text-white/30">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-poppins font-bold text-2xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="font-poppins text-white/90 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a
                      href="#footer"
                      className="inline-flex items-center gap-2 font-poppins font-bold text-sm text-white group-hover:translate-x-1 transition-transform"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            }

            /* STANDARD WHITE CARD */
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-card border border-gray-100 flex flex-col justify-between min-h-[340px] hover:border-orange-primary hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-primary text-white flex items-center justify-center shadow-orange">
                      {service.icon}
                    </div>
                    <span className="font-poppins font-black text-5xl text-gray-100 group-hover:text-orange-primary/20 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-navy-dark mb-3 group-hover:text-orange-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-textLight text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-poppins font-semibold text-xs text-navy-dark uppercase tracking-wider">
                    Full Service
                  </span>
                  <div className="w-9 h-9 rounded-full bg-bgLight text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
