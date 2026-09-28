import React from 'react';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

interface ProjectRow {
  name: string;
  location: string;
  category: string;
  image: string;
  featured?: boolean;
}

const projectsList: ProjectRow[] = [
  {
    name: 'No Grease at Concord Mills',
    location: 'Concord Mills Mall, NC',
    category: 'Commercial Retail Build',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=85',
    featured: true
  },
  {
    name: '6000 Fairview 7th Floor',
    location: 'Fairview Road, Charlotte, NC',
    category: 'Corporate Office Buildout',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'Willow Farms Denver',
    location: 'Denver, NC',
    category: 'Luxury Residential Build',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'JM Alexander',
    location: 'Charlotte, NC',
    category: 'Commercial Project',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=85'
  }
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 bg-navy-dark text-white overflow-hidden arch-grid-pattern">
      <ArchitecturalLines dark={true} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-3 block">
              Past Projects
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Featured Past Projects
            </h2>
          </div>

          <div>
            <a
              href="#footer"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-6 py-3.5 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              View Past Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grid Layout: Left Rows + Right Tilted Overlapping Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Project List Rows */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {projectsList.map((project, idx) => (
              <div
                key={idx}
                className="bg-navy-light/80 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-orange-primary hover:bg-navy-light transition-all duration-300 flex items-center justify-between group"
              >
                <div>
                  <span className="font-poppins font-bold text-xs text-orange-primary uppercase tracking-wider mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white group-hover:text-orange-primary transition-colors mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-orange-primary" /> {project.location}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-orange-primary text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Featured Tilted Overlapping Project Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-navy-dark">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=85"
                  alt="Featured landmark project - No Grease at Concord Mills"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 bg-navy-dark border-t border-white/10">
                  <span className="text-xs font-bold text-orange-primary uppercase tracking-wider">
                    Showcase Landmark
                  </span>
                  <h4 className="font-poppins font-bold text-lg text-white mt-1">
                    No Grease at Concord Mills
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Turnkey commercial retail space & high-finish interior engineering.
                  </p>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="absolute -top-4 -right-4 bg-orange-primary text-white text-xs font-bold px-4 py-2 rounded-md shadow-orange">
                Featured Build
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
