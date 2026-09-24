import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Award,
  CheckCircle2,
  FileCheck,
  Building2,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Send,
  Loader2,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import familyHero from '../assets/pm_surya_ghar_family.png';

const PMSuryaGharPage = () => {
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune',
    monthlyBill: '',
    propertyType: 'Residential',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const pmData = settings.pmSuryaGhar || {};
  const subsidyMatrix = pmData.subsidyMatrix || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and mobile number');
      return;
    }

    setLoading(true);
    setError('');

    const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
    const text = `☀️ *PM Surya Ghar Scheme Enquiry - Aquasol Energy*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*City/Area:* ${formData.city}\n` +
      `*Property Type:* ${formData.propertyType}\n` +
      `*Monthly Bill:* ₹${formData.monthlyBill || 'N/A'}\n` +
      `*Message:* ${formData.message || 'Need assistance with PM Surya Ghar ₹78,000 subsidy.'}`;

    window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`, '_blank');
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="PM Surya Ghar Muft Bijli Yojana Pune | ₹78,000 Subsidy Assistance"
        description="Apply for PM Surya Ghar Muft Bijli Yojana in Pune with Aquasol Energy. Get up to ₹78,000 direct bank subsidy, MSEDCL net metering and zero electricity bills."
        keywords="PM Surya Ghar Pune, PM Surya Ghar Muft Bijli Yojana, Solar Subsidy Pune, PM Surya Ghar apply online Pune, Rooftop Solar Scheme Maharashtra, MSEDCL solar subsidy"
        canonical="https://aquasolenergy.in/pm-surya-ghar"
      />
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Sun className="w-3.5 h-3.5 fill-brand-amber-400" /> PM Surya Ghar: Muft Bijli Yojana
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              प्रधानमंत्री सूर्यघर मोफत वीज योजना
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Get up to <strong className="text-white font-bold">₹78,000 direct subsidy</strong> credited into your bank account and enjoy up to 300 units of free power each month. Aquasol Energy handles your entire application, DISCOM liaisoning, and installation in Pune.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#apply-now"
                className="px-6 py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white text-xs font-bold rounded-xl shadow-lg transition"
              >
                Apply For Scheme Assistance
              </a>
              <a
                href={pmData.officialPortalUrl || 'https://pmsuryaghar.gov.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition flex items-center gap-2"
              >
                <span>Official National Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 p-2 bg-slate-800/40">
              <img src={familyHero} alt="PM Surya Ghar Rooftop Solar Family" className="w-full h-auto rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SUBSIDY SLABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Benefit Transfer (DBT)"
          title="Government Subsidy Structure"
          subtitle="Direct subsidy credited into customer Aadhaar-linked bank account within 30 days of net meter commissioning."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subsidyMatrix.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border transition flex flex-col justify-between ${
                idx === 2
                  ? 'bg-gradient-to-br from-brand-amber-500/10 via-amber-500/5 to-white border-brand-amber-300 shadow-xl relative overflow-hidden'
                  : 'bg-white border-slate-100 shadow-md'
              }`}
            >
              {idx === 2 && (
                <span className="absolute top-4 right-4 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-brand-amber-500 text-white">
                  Most Popular
                </span>
              )}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {item.capacity}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    ₹{item.subsidyAmount?.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Subsidy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <a
                  href="#apply-now"
                  className="w-full block text-center py-2.5 bg-slate-900 hover:bg-brand-blue-700 text-white text-xs font-bold rounded-xl transition"
                >
                  Choose {item.capacity}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. UNION BANK SOLAR LOAN HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <CreditCard className="w-3.5 h-3.5" /> Collateral-Free Bank Financing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              PM सूर्यघर योजने अंतर्गत सोलरसाठी नॅशनलाइज्ड बँक लोन सुविधा उपलब्ध
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Install rooftop solar with minimal upfront investment! Collateral-free solar loans with subsidized interest rates up to 3 kW capacity. The monthly EMI is easily compensated by the savings on your MSEDCL electricity bill.
            </p>
          </div>
          <a
            href="#apply-now"
            className="px-6 py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white text-xs font-bold rounded-xl shadow transition shrink-0"
          >
            Apply for Bank Loan Assistance
          </a>
        </div>
      </section>

      {/* 4. DOCUMENTS REQUIRED & ELIGIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Eligibility */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Who Is Eligible?</h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Indian citizens owning a residential property (individual bungalow, row house, or apartment).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Active residential electricity connection in the applicant's name with MSEDCL.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Shadow-free rooftop area (approx. 80-100 sq. ft per kW).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Has not availed central financial assistance for solar on the same connection earlier.</span>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Documents Required</h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Latest MSEDCL Electricity Bill (Consumer Number clearly visible).</span>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Aadhaar Card copy of the electricity bill consumer.</span>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Bank Account details (Cancelled Cheque or Passbook copy) for direct subsidy credit.</span>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                <span>Passport size photograph and roof ownership proof (Tax receipt / 7/12 or index-2).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM (LEAD CAPTURE) */}
      <section id="apply-now" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <SectionHeading
            badge="Online Assistance"
            title="Get PM Surya Ghar Scheme Assistance"
            subtitle="Fill out your details below and our Pune solar engineers will register your national portal application and coordinate site inspection."
          />

          {success ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Request Submitted!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. An Aquasol PM Surya Ghar executive will call you within 24 hours to verify your consumer number and initiate the subsidy process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name (As on Electricity Bill) *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (Aadhaar-Linked) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Average Monthly Bill (₹)</label>
                  <input
                    type="number"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    placeholder="e.g. 3000"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pune Area / Pincode</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Chandan Nagar / 411014"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">MSEDCL Consumer Number (Optional)</label>
                <input
                  type="text"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Found on your electricity bill (e.g. 015XXXXXXXXX)"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Application Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Apply For PM Surya Ghar Subsidy Assistance
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Aquasol Energy is an authorized vendor providing turnkey engineering, installation, and DISCOM facilitation.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default PMSuryaGharPage;
