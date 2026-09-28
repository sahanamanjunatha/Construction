import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Check, Award, ShieldCheck } from 'lucide-react';
import { HeroBanner } from '../design-system/HeroBanner';
import { SectionTitle } from '../design-system/SectionTitle';
import { AnimatedImage } from '../design-system/AnimatedImage';
import { ArchitecturalLines } from '../design-system/ArchitecturalLines';

interface AboutViewProps {
  onNavigateHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateHome }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-white">
      
      {/* 1. REUSABLE HERO BANNER */}
      <HeroBanner
        title="About Our Company"
        breadcrumbPage="About Our Company"
        onNavigateHome={onNavigateHome}
      />

      {/* 2. ABOUT CONTENT SECTION */}
      <section className="relative py-24 bg-white overflow-hidden">
        <ArchitecturalLines />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-6"
            >
              <SectionTitle
                label="About NIA Construction"
                title="BUILDING WITH INTENTION"
              />

              <motion.p variants={itemFadeUp} className="font-poppins text-textLight text-base leading-relaxed mb-6">
                NIA Construction is an African-American owned, general contractor and facility maintenance company founded by Harry Seymour. Thanks to 20+ years in business and counting, our staff brings over 200 years of combined experience to this field.
              </motion.p>

              <motion.p variants={itemFadeUp} className="font-poppins text-textLight text-base leading-relaxed mb-8">
                NIA Construction tackles all projects with a personal commitment to providing an efficient and professional experience from start to finish. We understand the stress our clients experience when selecting the right company for their real estate related projects.
              </motion.p>

              <motion.div variants={itemFadeUp}>
                <a
                  href="#why-choose-us-section"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-7 py-4 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 active:scale-98 transition-all duration-300 group cursor-pointer"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT: Image Collage with Design System AnimatedImage Components & Floating Cards */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[480px] sm:h-[540px]">
                
                {/* Large Main Image */}
                <div className="absolute top-0 left-0 w-[72%] h-[78%] z-10">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
                    alt="Engineers reviewing site blueprints"
                    delay={0}
                  />
                </div>

                {/* Supporting Small Image 1 */}
                <div className="absolute bottom-0 right-0 w-[58%] h-[60%] z-20">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=85"
                    alt="Modern steel architectural framework"
                    delay={0.15}
                  />
                </div>

                {/* Supporting Small Image 2 */}
                <div className="absolute top-10 right-4 w-[36%] h-[35%] z-30 hidden sm:block">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=85"
                    alt="Luxury residential property"
                    delay={0.3}
                    roundedClass="rounded-xl"
                  />
                </div>

                {/* FLOATING CARD 1: Over 20 Years Experience */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-12 left-4 z-40 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-3 max-w-[240px]"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-primary text-white flex items-center justify-center flex-shrink-0 shadow-orange">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-xs text-navy-dark leading-tight">Over 20 Years</div>
                      <div className="font-poppins text-[11px] text-textLight">of Industry Experience</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* FLOATING CARD 2: Professional and Licensed */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="absolute top-4 left-1/3 z-40 bg-navy-dark text-white p-3.5 px-5 rounded-xl shadow-2xl border border-white/10 flex items-center gap-3"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-primary/20 text-orange-primary flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-poppins font-bold text-xs tracking-wide">
                      Professional & Licensed
                    </span>
                  </motion.div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section id="why-choose-us-section" className="relative py-24 bg-bgLight overflow-hidden arch-line-light">
        <ArchitecturalLines />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: 4-Image Grid Collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=85"
                  alt="Crane over construction site"
                  delay={0}
                />
                <div className="mt-6">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=85"
                    alt="Commercial high-rise building"
                    delay={0.15}
                  />
                </div>
                <div className="-mt-4">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=85"
                    alt="Logistics building panel"
                    delay={0.3}
                  />
                </div>
                <div className="mt-2">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=85"
                    alt="Luxury condominium complex"
                    delay={0.45}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: SectionTitle + Animated Checklist */}
            <div className="lg:col-span-6">
              <SectionTitle
                label="Why Choose NIA Construction"
                title="BUILDING WITH INTENTION"
                description="When you partner with NIA Construction, you gain access to over 200 years of combined experience across real estate development, general contracting, engineering, and roofing."
              />

              {/* Animated Checklist */}
              <div className="space-y-4 mt-6">
                {[
                  "Over 20 years in business (since 2008)",
                  "African-American owned minority contractor",
                  "Over 200 years of combined staff experience",
                  "Licensed general contracting & roofing",
                  "Aspire Protégé & Corporate Partnership programs"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-orange-primary hover:translate-x-1 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-primary text-white flex items-center justify-center flex-shrink-0 shadow-orange">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-poppins font-semibold text-sm sm:text-base text-navy-dark">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
