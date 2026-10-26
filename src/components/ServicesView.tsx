import React from 'react';
import { HeroBanner } from '../design-system/HeroBanner';
import { SectionTitle } from '../design-system/SectionTitle';
import { ServiceCard } from '../design-system/ServiceCard';
import { ArchitecturalLines } from '../design-system/ArchitecturalLines';
import { ClipboardList, Home, Compass, Leaf, Building2, ShieldCheck } from 'lucide-react';

interface ServicesViewProps {
  onNavigateHome: () => void;
  onOpenQuoteModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigateHome, onOpenQuoteModal }) => {
  return (
    <div className="bg-white">
      
      {/* 300px Hero Banner */}
      <HeroBanner
        title="Construction Services"
        breadcrumbPage="Construction Services"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Content Section */}
      <section className="relative py-24 bg-bgLight overflow-hidden arch-line-light">
        <ArchitecturalLines />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            label="Featured NIA Construction Services"
            title="Commercial & Residential Contracting"
            description="The NIA team consists of highly-trained experts with backgrounds ranging from real estate development and mortgage lending to engineering and general contracting."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              number="01"
              title="Preconstruction"
              description="Comprehensive preconstruction planning, estimating, feasibility analysis, zoning approvals, and structural blueprinting."
              icon={<ClipboardList className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85"
              delay={0}
              onSelect={onOpenQuoteModal}
            />

            <ServiceCard
              number="02"
              title="Roofing Services"
              description="Commercial and residential roofing solutions, storm damage repairs, membrane installations, and roof maintenance."
              icon={<Home className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=85"
              delay={0.1}
              onSelect={onOpenQuoteModal}
            />

            <ServiceCard
              number="03"
              title="BIM / Design Build"
              description="Streamlined design-build delivery integrating 3D Building Information Modeling with single-source project execution."
              icon={<Compass className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85"
              delay={0.2}
              onSelect={onOpenQuoteModal}
            />

            <ServiceCard
              number="04"
              title="Sustainability"
              description="Eco-friendly building practices, energy-efficient design, sustainable materials, and green construction techniques."
              icon={<Leaf className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85"
              delay={0.3}
              onSelect={onOpenQuoteModal}
            />

            <ServiceCard
              number="05"
              title="Construction"
              description="Turnkey general contracting for commercial buildouts, retail spaces, facility maintenance, and residential builds."
              icon={<Building2 className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85"
              delay={0.4}
              onSelect={onOpenQuoteModal}
            />

            <ServiceCard
              number="06"
              title="Post Construction"
              description="Facility commissioning, final inspections, punch-list fulfillment, long-term building upkeep, and warranty care."
              icon={<ShieldCheck className="w-6 h-6" />}
              bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85"
              delay={0.5}
              onSelect={onOpenQuoteModal}
            />
          </div>
        </div>
      </section>

    </div>
  );
};
