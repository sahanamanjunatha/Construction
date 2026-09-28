import React, { useState } from 'react';
import { HeroBanner } from '../design-system/HeroBanner';
import { SectionTitle } from '../design-system/SectionTitle';
import { ContactCard } from '../design-system/ContactCard';
import { ArchitecturalLines } from '../design-system/ArchitecturalLines';
import { AnimatedImage } from '../design-system/AnimatedImage';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ContactViewProps {
  onNavigateHome: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigateHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-white">
      
      {/* 300px Hero Banner */}
      <HeroBanner
        title="Contact Us"
        breadcrumbPage="Contact Us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Content Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <ArchitecturalLines />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: Text & Image */}
            <div className="lg:col-span-6">
              <SectionTitle
                label="Contact NIA Construction"
                title="BUILDING WITH INTENTION"
                description="Have questions about commercial construction, residential services, or roofing in Charlotte, NC or across the Southeast? Reach out to our expert team today."
              />

              <p className="font-poppins text-textLight text-base leading-relaxed mb-8">
                Our main office is located in Charlotte with a regional office in Durham, allowing us to service all of North Carolina and the surrounding Southeastern United States. Call us today at (704) 910-4521!
              </p>

              <div className="mt-8">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85"
                  alt="Construction consultation desk"
                />
              </div>
            </div>

            {/* RIGHT: Contact Info Card Panel + Form */}
            <div className="lg:col-span-6 space-y-8">
              <ContactCard />

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card">
                {submitted ? (
                  <div className="py-8 text-center flex flex-col items-center justify-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-poppins font-bold text-2xl text-navy-dark mb-2">Message Sent!</h3>
                    <p className="font-poppins text-textLight text-sm max-w-md">
                      Thank you! Your request has been submitted successfully. Our office will contact you today.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-poppins font-extrabold text-xl text-navy-dark mb-4">
                      Send Us a Message
                    </h3>

                    <div>
                      <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                        />
                      </div>
                      <div>
                        <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Required Service *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary bg-white"
                      >
                        <option value="" disabled>Select service</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Residential Construction">Residential Build</option>
                        <option value="Renovation">Renovation & Remodeling</option>
                        <option value="Roofing">Roofing Solution</option>
                        <option value="Project Management">Project Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Message / Project Brief *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project location and scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 font-poppins font-semibold text-sm py-4 bg-orange-primary text-white rounded-lg shadow-orange hover:bg-orange-hover transition-colors cursor-pointer active:scale-98"
                    >
                      Submit Request <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
