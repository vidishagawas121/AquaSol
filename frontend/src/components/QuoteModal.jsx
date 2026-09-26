import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { serviceOptions, getPredefinedMessage, getMatchingServiceOption } from '../data/serviceMessages';
import WhatsAppIcon from './WhatsAppIcon';

const QuoteModal = ({ isOpen, onClose, defaultProduct = '', defaultService = '', source = 'Quote Modal' }) => {
  const initialSelected = defaultProduct || defaultService || 'PM Surya Ghar Rooftop Solar';
  const initialOption = getMatchingServiceOption(initialSelected);
  const initialMessage = getPredefinedMessage(initialSelected);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune',
    propertyType: 'Residential',
    interestedProduct: initialOption,
    monthlyBill: '',
    message: initialMessage,
  });

  const [isMessageCustomized, setIsMessageCustomized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Sync state whenever modal opens or defaultService/defaultProduct changes
  useEffect(() => {
    if (isOpen) {
      const selected = defaultProduct || defaultService || 'PM Surya Ghar Rooftop Solar';
      const matchedOpt = getMatchingServiceOption(selected);
      const prefillMsg = getPredefinedMessage(selected);

      setFormData((prev) => ({
        ...prev,
        interestedProduct: matchedOpt,
        message: prefillMsg,
      }));
      setIsMessageCustomized(false);
      setError('');

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, defaultProduct, defaultService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'interestedProduct') {
      // Automatically update the message with the predefined template for the newly selected service
      const newMessage = getPredefinedMessage(value);
      setFormData((prev) => ({
        ...prev,
        interestedProduct: value,
        message: isMessageCustomized ? prev.message : newMessage,
      }));
    } else if (name === 'message') {
      setIsMessageCustomized(true);
      setFormData((prev) => ({ ...prev, message: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleResetMessage = () => {
    const templ = getPredefinedMessage(formData.interestedProduct);
    setFormData((prev) => ({ ...prev, message: templ }));
    setIsMessageCustomized(false);
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
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
                    Interested Solution / Service
                  </label>
                  <select
                    name="interestedProduct"
                    value={formData.interestedProduct}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white font-medium text-slate-800"
                  >
                    <optgroup label="☀️ Rooftop Solar PV">
                      {serviceOptions.filter(o => o.category === 'Rooftop Solar').map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label="💧 Water Heating Solutions">
                      {serviceOptions.filter(o => o.category === 'Water Heating').map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🔧 Servicing, Repair & AMC">
                      {serviceOptions.filter(o => o.category === 'Maintenance & Repairs').map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label="💡 Other Solar Solutions">
                      {serviceOptions.filter(o => !['Rooftop Solar', 'Water Heating', 'Maintenance & Repairs'].includes(o.category)).map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </optgroup>
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
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                    Predefined Enquiry Message
                  </label>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded-md">
                    <Sparkles className="w-3 h-3 text-brand-amber-500" /> Auto-filled for selected service
                  </span>
                </div>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details for this service enquiry..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 resize-none bg-slate-50/50 focus:bg-white text-slate-700 font-normal leading-relaxed"
                ></textarea>
                {isMessageCustomized && (
                  <div className="flex justify-end mt-1">
                    <button
                      type="button"
                      onClick={handleResetMessage}
                      className="text-[11px] text-brand-blue-600 hover:text-brand-blue-800 underline font-medium"
                    >
                      Reset to default service template
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition-all duration-200 disabled:opacity-60 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
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
