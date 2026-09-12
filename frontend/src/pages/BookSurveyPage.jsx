import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, Send, Loader2, ShieldCheck, Phone } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SectionHeading from '../components/SectionHeading';

const BookSurveyPage = () => {
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Independent Bungalow/Villa',
    address: '',
    city: 'Pune',
    pincode: '',
    requirement: 'PM Surya Ghar Rooftop Solar',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.preferredDate) {
      setError('Name, phone number, address, and preferred date are required');
      return;
    }

    setLoading(true);
    setError('');

    const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
    const text = `📅 *Site Survey Booking Request - Aqua-Sol Energy*\n\n` +
      `*Customer Name:* ${formData.name}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Requirement:* ${formData.requirement}\n` +
      `*Property Type:* ${formData.propertyType}\n` +
      `*Inspection Address:* ${formData.address}, ${formData.city} (PIN: ${formData.pincode || 'N/A'})\n` +
      `*Preferred Date:* ${formData.preferredDate}\n` +
      `*Preferred Slot:* ${formData.preferredTime}\n` +
      `*Special Notes:* ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`, '_blank');
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Technical Assessment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Book a Rooftop Site Survey
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our Pune engineers will visit your terrace, evaluate shadow conditions, measure roof angles, and review your electrical connection.
          </p>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Survey Appointment Requested!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. An engineer from our Chandan Nagar, Pune office will call you to confirm the time slot and address for {formData.preferredDate}.
              </p>
              <div className="pt-4">
                <a
                  href={`tel:${settings.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue-50 text-brand-blue-700 font-bold text-xs rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  Have an urgent question? Call {settings.primaryPhone}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <SectionHeading
                badge="Site Visit Scheduling"
                title="Tell Us About Your Location"
                subtitle="Select your preferred appointment date and provide your installation address."
                align="left"
                className="mb-6"
              />

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                  {error}
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Shinde"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98XXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>
              </div>

              {/* Requirement & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Requirement *</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  >
                    <option value="PM Surya Ghar Rooftop Solar">PM Surya Ghar Rooftop Solar (₹78K Subsidy)</option>
                    <option value="Commercial Rooftop Solar">Commercial Rooftop Solar</option>
                    <option value="Solar Water Heater Installation">Solar Water Heater Installation</option>
                    <option value="Solar Water Heater Servicing/Repair">Solar Water Heater Servicing / Repair</option>
                    <option value="Heat Pump System">Heat Pump System</option>
                    <option value="Solar Street Lighting">Solar Street Lighting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  >
                    <option value="Independent Bungalow/Villa">Independent Bungalow / Villa</option>
                    <option value="Apartment/Flat">Apartment / Flat (Individual)</option>
                    <option value="Housing Society/RWA">Cooperative Housing Society (CHS)</option>
                    <option value="Commercial Building">Commercial Building / Office</option>
                    <option value="Industrial Shed">Industrial Shed / Factory</option>
                    <option value="Hospital/School/College">Hospital / School / College</option>
                  </select>
                </div>
              </div>

              {/* Address & Pune Location */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Installation Address *</label>
                  <textarea
                    required
                    name="address"
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Building name, street, landmark in Pune..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City / Town</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Pune"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="e.g. 411014"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Scheduling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Survey Date *</label>
                  <input
                    type="date"
                    required
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Window</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    <option value="Any Time">Any Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes / Roof Details</label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. RCC flat roof, tin shed, 3rd floor, etc."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Scheduling Survey Appointment...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Confirm Site Survey Booking
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero obligations. Thorough engineering assessment by local Pune engineers.</span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookSurveyPage;
