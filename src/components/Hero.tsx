import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const heroSlides: HeroSlide[] = [
  {
    subtitle: 'NIA Construction',
    title: 'Commercial & Residential Construction',
    description: 'NIA Construction is an African-American owned, general contractor and facility maintenance company. Thanks to 20+ years in business and counting, our staff brings over 200 years of combined experienced to this field. Your priorities are our priority.',
    ctaText: 'Learn More',
    ctaLink: '#about',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85'
  },
  {
    subtitle: 'NIA Construction',
    title: 'Over 20 Years of Experience',
    description: 'With over 20 years of combined experience in both the real estate and construction industries, the NIA team consists of highly-trained experts with backgrounds ranging from real estate development and mortgage lending to engineering and general contracting.',
    ctaText: 'Learn More',
    ctaLink: '#projects',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
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
    <section id="home" className="relative w-full min-h-[calc(100vh-85px)] bg-bgLight overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-85px)]">
        
        {/* LEFT: Overlapping Dark Navy Rounded Panel */}
        <div className="lg:col-span-5 bg-navy-dark rounded-none lg:rounded-hero-panel p-8 sm:p-14 lg:p-20 flex flex-col justify-center relative z-20 shadow-hero arch-grid-pattern">
          
          <div className="inline-flex items-center gap-2 bg-orange-primary/20 text-orange-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            <span>Servicing Charlotte, NC and the entire Southeast</span>
          </div>

          <span className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-2 inline-block">
            {activeSlide.subtitle}
          </span>

          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
            {activeSlide.title}
          </h1>

          <p className="font-poppins text-base text-gray-300 leading-relaxed mb-8 max-w-lg">
            {activeSlide.description}
          </p>

          <div>
            <a
              href={activeSlide.ctaLink}
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm px-7 py-4 bg-orange-primary text-white rounded-md shadow-orange hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {activeSlide.ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT: Construction Worker / Site Image Slider */}
        <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full overflow-hidden">
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
              <div className="absolute inset-0 bg-navy-dark/10"></div>
            </div>
          ))}

          {/* Slider Control Box at Bottom-Right */}
          <div className="absolute bottom-0 right-0 bg-navy-dark z-30 flex items-center rounded-tl-xl overflow-hidden shadow-2xl">
            <button
              onClick={handlePrev}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-transparent text-white hover:bg-orange-primary hover:text-white transition-colors duration-200 flex items-center justify-center border-r border-white/10 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={handleNext}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-transparent text-white hover:bg-orange-primary hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
