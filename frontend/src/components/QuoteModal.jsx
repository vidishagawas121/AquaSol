import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const QuoteModal = ({ isOpen, onClose, defaultProduct = '', defaultService = '', source = 'Quote Modal' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune',
    propertyType: 'Residential',
    interestedProduct: defaultProduct || defaultService || 'PM Surya Ghar Rooftop Solar',
    monthlyBill: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Name and 10-digit mobile number are required.');
      return;
    }

    setLoading(true);
    setError('');

    const phoneDigits = companyInfo.whatsappNumber || '918275067701';
    const text = `☀️ *Solar Quote Request - Aquasol Energy*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*City/Area:* ${formData.city}\n` +
      `*Interested Solution:* ${formData.interestedProduct}\n` +
      `*Approx. Monthly Bill:* ₹${formData.monthlyBill || 'N/A'}\n` +
      `*Message:* ${formData.message || 'Please provide quotation and subsidy information.'}\n` +
      `*Source:* ${source}`;

    window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`, '_blank');
    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh] my-auto animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed/Sticky at top */}
        <div className="bg-gradient-to-r from-brand-blue-700 via-brand-blue-800 to-slate-900 px-4 py-3.5 sm:px-6 sm:py-4 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-brand-amber-400">Aquasol Energy</span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">Request a Free Solar Quote</h3>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">Pune & Maharashtra Rooftop Solutions</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable on mobile */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1">
          {success ? (
            <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Quote Request Sent!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. Your request has been forwarded to our Chandan Nagar, Pune technical team. We will respond promptly on WhatsApp & call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xs font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full pl-11 pr-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@gmail.com"
                    className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">City / Area</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Pune, Hadapsar, Wagholi"
                    className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Interested Solution</label>
                  <select
                    name="interestedProduct"
                    value={formData.interestedProduct}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white"
                  >
                    <option value="PM Surya Ghar Rooftop Solar">PM Surya Ghar Rooftop Solar (₹78K Subsidy)</option>
                    <option value="Solar Water Heater">Solar Water Heater (100-500 LPD)</option>
                    <option value="Solar Water Heater Servicing/Repair">Solar Water Heater Servicing & Repair</option>
                    <option value="Commercial Solar PV">Commercial / Industrial Solar</option>
                    <option value="Heat Pump System">Heat Pump Water Heater</option>
                    <option value="Solar Street Light">Solar Street Lighting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Approx. Monthly Bill (₹)</label>
                  <input
                    type="number"
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    placeholder="e.g. 3500"
                    className="w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Message / Specific Requirement (Optional)</label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your rooftop type or query..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 resize-none bg-white"
                ></textarea>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition-all duration-200 disabled:opacity-60 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
                  <span>Send Quote Request via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[11px] sm:text-xs pt-0.5 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Privacy. Instant response on official Pune helpline.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
