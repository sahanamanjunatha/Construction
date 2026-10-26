import React from 'react';
import { ClipboardList, Home, Compass, Leaf, Building2, ShieldCheck } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';
import { ServiceCard } from '../design-system/ServiceCard';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'Preconstruction',
    description: 'Comprehensive preconstruction planning, estimating, feasibility analysis, zoning approvals, and structural blueprinting.',
    icon: <ClipboardList className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '02',
    title: 'Roofing Services',
    description: 'Commercial and residential roofing solutions, storm damage repairs, membrane installations, and roof maintenance.',
    icon: <Home className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '03',
    title: 'BIM / Design Build',
    description: 'Streamlined design-build delivery integrating 3D Building Information Modeling with single-source project execution.',
    icon: <Compass className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '04',
    title: 'Sustainability',
    description: 'Eco-friendly building practices, energy-efficient design, sustainable materials, and green construction techniques.',
    icon: <Leaf className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '05',
    title: 'Construction',
    description: 'Turnkey general contracting for commercial buildouts, retail spaces, facility maintenance, and residential builds.',
    icon: <Building2 className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85'
  },
  {
    number: '06',
    title: 'Post Construction',
    description: 'Facility commissioning, final inspections, punch-list fulfillment, long-term building upkeep, and warranty care.',
    icon: <ShieldCheck className="w-6 h-6" />,
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
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
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgImage={service.bgImage}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

