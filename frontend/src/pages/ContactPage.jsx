import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SectionHeading from '../components/SectionHeading';

const ContactPage = () => {
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune',
    propertyType: 'Residential',
    interestedProduct: 'General Enquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aqua-Sol%20Energy,%20I%20am%20contacting%20you%20regarding%20solar%20services%20in%20Pune.`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Name and phone number are required.');
      return;
    }

    setLoading(true);
    setError('');

    const text = `☀️ *Website Contact Enquiry - Aqua-Sol Energy*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*City/Locality:* ${formData.city}\n` +
      `*Property Type:* ${formData.propertyType}\n` +
      `*Interested In:* ${formData.interestedProduct}\n` +
      `*Message:* ${formData.message || 'Please contact me regarding solar solutions.'}`;

    window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`, '_blank');
    setSuccess(true);
    setLoading(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: 'Pune',
      propertyType: 'Residential',
      interestedProduct: 'General Enquiry',
      message: '',
    });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Aqua-Sol Energy
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visit our Pune office in Chandan Nagar, call our solar engineering desk, or send an enquiry below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Pune Office Details</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Office Address</h5>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">{settings.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Phone Numbers</h5>
                    <div className="space-y-1.5 mt-1">
                      <div className="flex flex-col">
                        <a href={`tel:${settings.primaryPhone}`} className="text-brand-blue-700 font-bold hover:underline">
                          {settings.primaryPhone}
                        </a>
                        <span className="text-slate-400 text-[11px]">Direct Line / Technical Desk</span>
                      </div>
                      <div className="flex flex-col border-t border-slate-100 pt-1.5">
                        <a href={`tel:${settings.secondaryPhone || '+91 7391037702'}`} className="text-brand-blue-700 font-bold hover:underline">
                          {settings.secondaryPhone || '+91 7391037702'}
                        </a>
                        <span className="text-slate-400 text-[11px]">Alternate Line / Support Desk</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Email Address</h5>
                    <a href={`mailto:${settings.primaryEmail}`} className="text-slate-700 hover:text-brand-blue-600">
                      {settings.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Working Hours</h5>
                    <p className="text-slate-600">{settings.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow-lg shadow-green-500/20 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  Chat Directly On WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-md overflow-hidden">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 px-2">Location Map</h4>
              <div className="h-56 w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center relative">
                <iframe
                  title="Aqua-Sol Pune Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.419402511478!2d73.91897455!3d18.54900765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1404c0ec2e9%3A0x6b4ee8e84df12a7a!2sChandan%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl space-y-6">
            <SectionHeading
              badge="Fast Enquiry"
              title="Send Us a Message"
              subtitle="Whether you need rooftop solar consultation, solar water heater repair, or an AMC quote, our team responds promptly."
              align="left"
              className="mb-4"
            />

            {success ? (
              <div className="p-8 bg-green-50 border border-green-200 text-green-900 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                <p className="text-xs text-green-800 max-w-sm mx-auto">
                  Thank you for contacting Aqua-Sol Energy. Our Pune technical advisor will review your query and call you back shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 bg-green-700 text-white text-xs font-bold rounded-xl hover:bg-green-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-xs text-red-600 font-semibold p-2 bg-red-50 rounded-lg">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Suhas Deshmukh"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Locality in Pune</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Viman Nagar, Kharadi, Hadapsar"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Interested Solution</label>
                    <select
                      name="interestedProduct"
                      value={formData.interestedProduct}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    >
                      <option value="PM Surya Ghar Rooftop Solar">PM Surya Ghar Rooftop Solar (₹78K Subsidy)</option>
                      <option value="Solar Water Heater (New)">Solar Water Heater (New System)</option>
                      <option value="Solar Water Heater Servicing/Repair">Solar Water Heater Servicing / Repair</option>
                      <option value="Commercial Solar PV">Commercial / Society Solar</option>
                      <option value="Heat Pump System">Heat Pump Water Heater</option>
                      <option value="Solar Street Light">Solar Street Lights</option>
                      <option value="General Enquiry">General Consultation</option>
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
                      <option value="Residential">Residential (Bungalow/Flat)</option>
                      <option value="Housing Society/RWA">Housing Society Common Terrace</option>
                      <option value="Commercial">Commercial / Office</option>
                      <option value="Industrial">Industrial / Factory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Specific Query</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your rooftop requirement, monthly bill, or leak/servicing issue..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Submit Enquiry
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your enquiry is sent directly to Aqua-Sol Energy's Chandan Nagar office.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
