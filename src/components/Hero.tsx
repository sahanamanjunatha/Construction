import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  watermark: string;
}

const heroSlides: HeroSlide[] = [
  {
    subtitle: 'NIA Construction',
    title: 'Commercial & Residential Construction',
    description: 'NIA Construction is an African-American owned, general contractor and facility maintenance company. Thanks to 20+ years in business and counting, our staff brings over 200 years of combined experienced to this field. Your priorities are our priority.',
    ctaText: 'Learn More',
    ctaLink: '#about',
    image: '/images/roofing_worker_hero.jpg',
    watermark: 'Roofing Services'
  },
  {
    subtitle: 'NIA Construction',
    title: 'Over 20 Years of Commercial Excellence',
    description: 'With over 20 years of combined experience in both real estate development and construction management, our team delivers high-performance facilities, multi-family units, and custom commercial renovations.',
    ctaText: 'Explore Projects',
    ctaLink: '#projects',
    image: '/images/commercial_building_hero.jpg',
    watermark: 'General Contracting'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-90px)] bg-[#FAF8F5] overflow-hidden flex flex-col justify-stretch">
      
      {/* Background Yellow/Golden Sun Radial & Architectural Skyline Lines Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full pointer-events-none overflow-hidden z-0">
        {/* Yellow Sun Glow */}
        <div className="absolute top-[-10%] right-[15%] w-[650px] h-[650px] bg-amber-400/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-[20%] right-[25%] w-[450px] h-[450px] bg-yellow-300/30 rounded-full blur-2xl pointer-events-none"></div>

        {/* Architectural Wireframe Grid Graphic */}
        <svg className="absolute top-6 right-6 w-full h-full text-amber-500/15" viewBox="0 0 900 650" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Building 1 */}
          <rect x="450" y="80" width="150" height="480" />
          <line x1="450" y1="140" x2="600" y2="140" />
          <line x1="450" y1="200" x2="600" y2="200" />
          <line x1="450" y1="260" x2="600" y2="260" />
          <line x1="450" y1="320" x2="600" y2="320" />
          <line x1="450" y1="380" x2="600" y2="380" />
          <line x1="500" y1="80" x2="500" y2="560" />
          <line x1="550" y1="80" x2="550" y2="560" />

          {/* Building 2 */}
          <rect x="620" y="160" width="170" height="400" />
          <line x1="620" y1="220" x2="790" y2="220" />
          <line x1="620" y1="280" x2="790" y2="280" />
          <line x1="620" y1="340" x2="790" y2="340" />
          <line x1="675" y1="160" x2="675" y2="560" />
          <line x1="730" y1="160" x2="730" y2="560" />

          {/* Sun Circle Line Art */}
          <circle cx="400" cy="220" r="160" strokeWidth="1.5" strokeDasharray="5 5" />
          <circle cx="400" cy="220" r="195" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="w-full h-full flex-1 relative z-10 flex flex-col p-2 lg:p-4 lg:pt-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[calc(100vh-110px)] w-full gap-0 overflow-hidden rounded-tl-[40px] lg:rounded-tl-[65px] lg:rounded-br-3xl">
          
          {/* LEFT: Dark Navy Rounded Panel */}
          <div className="lg:col-span-5 bg-[#0C1427] rounded-tl-[40px] lg:rounded-tl-[65px] lg:rounded-tr-[140px] p-8 sm:p-14 lg:py-20 lg:px-16 xl:px-20 flex flex-col justify-center relative z-20 shadow-2xl overflow-hidden">
            
            {/* Far Left Vertical Watermark Text */}
            <div className="absolute left-[-45px] top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none select-none opacity-[0.11]">
              <span className="font-poppins font-black text-7xl lg:text-8xl text-white uppercase tracking-[16px] [writing-mode:vertical-rl] rotate-180 block whitespace-nowrap">
                {activeSlide.watermark}
              </span>
            </div>

            {/* Content Container */}
            <div className="relative z-10 pl-0 sm:pl-8 lg:pl-6 max-w-xl">
              <span className="font-poppins font-bold text-base sm:text-lg text-[#FA5A1E] tracking-widest mb-3 block uppercase">
                {activeSlide.subtitle}
              </span>

              {/* Main Headline */}
              <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-white leading-[1.12] mb-6 tracking-tight">
                {activeSlide.title}
              </h1>

              {/* Body Text */}
              <p className="font-poppins text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
                {activeSlide.description}
              </p>

              {/* Action Button - Extra Large & Prominent */}
              <div>
                <a
                  href={activeSlide.ctaLink}
                  className="inline-flex items-center gap-4 font-poppins font-extrabold text-xl px-11 py-5 bg-[#FA5A1E] text-white rounded-lg shadow-2xl hover:bg-[#E04808] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer tracking-wide"
                >
                  {activeSlide.ctaText} <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: High Quality Silhouetted Worker Hero Photo & Carousel */}
          <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-full overflow-hidden bg-slate-900">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Soft gradient shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C1427]/40 via-transparent to-black/20"></div>
              </div>
            ))}

            {/* Bottom-Right Dark Navy Carousel Navigation Controls */}
            <div className="absolute bottom-0 right-0 bg-[#0C1427] z-30 flex items-center shadow-2xl rounded-tl-2xl border-t border-l border-white/10 overflow-hidden">
              <button
                onClick={handlePrev}
                className="w-18 h-18 sm:w-24 sm:h-24 bg-transparent text-white hover:bg-[#FA5A1E] transition-colors duration-200 flex items-center justify-center border-r border-white/10 cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-8 h-8 sm:w-9 sm:h-9" />
              </button>
              <button
                onClick={handleNext}
                className="w-18 h-18 sm:w-24 sm:h-24 bg-transparent text-white hover:bg-[#FA5A1E] transition-colors duration-200 flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

