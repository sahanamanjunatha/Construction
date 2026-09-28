import React from 'react';
import { HeroBanner } from '../design-system/HeroBanner';
import { SectionTitle } from '../design-system/SectionTitle';
import { ProjectCard } from '../design-system/ProjectCard';
import { ArchitecturalLines } from '../design-system/ArchitecturalLines';

interface ProjectsViewProps {
  onNavigateHome: () => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigateHome, onOpenQuoteModal }) => {
  return (
    <div className="bg-navy-dark text-white min-h-screen">
      
      {/* 300px Hero Banner */}
      <HeroBanner
        title="Our Past Work"
        breadcrumbPage="Our Past Work"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Content Section */}
      <section className="relative py-24 bg-navy-dark overflow-hidden arch-grid-pattern">
        <ArchitecturalLines dark={true} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            label="Our Past Projects"
            title="Featured Previous Projects"
            description="Browse through our portfolio of landmark commercial towers, luxury custom villas, retail centers, and industrial facilities constructed on-time and on-budget."
            align="center"
            dark={true}
          />

          {/* Grid Layout: Rows + Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ProjectCard
                name="No Grease at Concord Mills"
                location="Concord Mills Mall, NC"
                category="Commercial Retail Build"
                image="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=85"
                delay={0}
                onClick={onOpenQuoteModal}
              />
              <ProjectCard
                name="6000 Fairview 7th Floor"
                location="Fairview Road, Charlotte, NC"
                category="Corporate Office Buildout"
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                delay={0.1}
                onClick={onOpenQuoteModal}
              />
              <ProjectCard
                name="Willow Farms Denver"
                location="Denver, NC"
                category="Luxury Residential Build"
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85"
                delay={0.2}
                onClick={onOpenQuoteModal}
              />
              <ProjectCard
                name="JM Alexander"
                location="Charlotte, NC"
                category="Commercial Project"
                image="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=85"
                delay={0.3}
                onClick={onOpenQuoteModal}
              />
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <ProjectCard
                name="No Grease at Concord Mills"
                location="Concord Mills Mall, NC"
                category="Commercial Retail Build"
                image="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=85"
                isTiltedShowcase={true}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
