import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ArchitecturalLines } from './ArchitecturalLines';

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Why Choose NIA Construction?",
    answer: "Thanks to 25 years in business and counting, our staff brings over 200 years of combined experienced to this field. Our knowledge staff is ready and available to help your project every step of the way."
  },
  {
    question: "What services does NIA offer?",
    answer: "The NIA team consists of highly-trained experts with backgrounds ranging from real estate development and mortgage lending to engineering and general contracting. Our professionals provide both our commercial and residential clients skilled service and on-time results."
  },
  {
    question: "What areas does NIA serve?",
    answer: "Although, our main office is in Charlotte we do have a regional office in Durham. This gives us the ability to service the entire North Carolina and surrounding Southeastern United States."
  },
  {
    question: "Does NIA handle commercial or residential projects?",
    answer: "We currently service both commercial and residential projects! For more information on NIA Construction or to speak with an expert about your project, please contact us today! (704) 910-4521"
  },
  {
    question: "Is NIA Construction licensed?",
    answer: "NIA Construction is a licensed, certified, full-service general contracting firm that offers a wide-array of real estate development, building, renovation, and demolition services. NIA regards craftsmanship and client satisfaction as the keys to continued success. The company is committed to providing exceptional, professional and ethical service to meet the real estate needs of its clients and community."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-bgLight overflow-hidden arch-line-light">
      <ArchitecturalLines />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: FAQ Accordion */}
          <div className="lg:col-span-6">
            <span className="font-poppins font-bold text-xs sm:text-sm text-orange-primary uppercase tracking-[2.5px] mb-3 block">
              FAQ
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy-dark leading-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqList.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-poppins font-bold text-base sm:text-lg text-navy-dark hover:text-orange-primary transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-orange-primary text-white' : 'bg-bgLight text-orange-primary'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 font-poppins text-textLight text-sm leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Image Collage with Outlined "FAQ" Typographic Watermark */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Outlined "FAQ" Decorative Watermark Text */}
            <div className="absolute -top-12 -left-6 select-none pointer-events-none z-0">
              <span className="font-poppins font-black text-[140px] sm:text-[180px] leading-none text-transparent stroke-text opacity-15">
                FAQ
              </span>
            </div>

            <div className="relative w-full max-w-md z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=85"
                    alt="Construction site team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[260px] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=85"
                    alt="Completed luxury home"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Floating Accent Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-dark text-white p-4 rounded-xl shadow-2xl border-2 border-orange-primary flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-primary text-white flex items-center justify-center font-extrabold text-lg">
                  24/7
                </div>
                <div>
                  <div className="font-poppins font-bold text-xs text-white uppercase">Client Assistance</div>
                  <div className="text-[11px] text-gray-300">Quick project estimations</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #101735;
        }
      `}</style>
    </section>
  );
};
