import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '$100k - $500k',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-orange-primary transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-navy-dark mb-2">Request Received!</h3>
            <p className="font-poppins text-textLight text-sm max-w-md">
              Thank you! Your request has been submitted successfully. Our estimating team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="font-poppins font-extrabold text-2xl text-navy-dark mb-1">
              Get a Free Quote
            </h3>
            <p className="font-poppins text-textLight text-xs sm:text-sm mb-6">
              Submit your project specifications and our estimating desk will provide a detailed proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    placeholder="(704) 910-4521"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Project Type *</label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary bg-white"
                  >
                    <option value="" disabled>Select Type</option>
                    <option value="Commercial Construction">Commercial Build</option>
                    <option value="Residential Construction">Residential Estate</option>
                    <option value="Renovation">Renovation & Remodel</option>
                    <option value="Roofing">Roofing Solution</option>
                    <option value="Preconstruction">BIM / Preconstruction</option>
                  </select>
                </div>
                <div>
                  <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Project Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary bg-white"
                >
                  <option value="$100k - $500k">$100,000 – $500,000</option>
                  <option value="$500k - $2M">$500,000 – $2,000,000</option>
                  <option value="$2M - $10M">$2,000,000 – $10,000,000</option>
                  <option value="$10M+">$10,000,000+</option>
                </select>
              </div>

              <div>
                <label className="block font-poppins font-semibold text-xs text-navy-dark mb-1">Project Details *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your site requirements and timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-textDark focus:outline-none focus:border-orange-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-poppins font-semibold text-sm py-4 bg-orange-primary text-white rounded-lg shadow-orange hover:bg-orange-hover transition-colors"
              >
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
