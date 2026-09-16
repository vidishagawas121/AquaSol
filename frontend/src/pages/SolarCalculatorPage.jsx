import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Sun,
  Zap,
  PiggyBank,
  Leaf,
  Calendar,
  Send,
  Loader2,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SectionHeading from '../components/SectionHeading';

const SolarCalculatorPage = () => {
  const { settings } = useSettings();

  const [monthlyBill, setMonthlyBill] = useState(3500);
  const [propertyType, setPropertyType] = useState('Residential');
  const [roofArea, setRoofArea] = useState(300);

  // Form Lead State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Calculations
  const tariff = settings.calculatorConfig?.avgTariffPerUnit || 8.5;
  const monthlyUnits = monthlyBill / tariff;
  // ~120 units generated per kW monthly in Pune
  const recommendedKw = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
  const annualUnits = Math.round(recommendedKw * 1450);
  const annualSavings = Math.round(annualUnits * tariff);
  const approxGrossCost = Math.round(recommendedKw * 60000);

  // Subsidy Calculation (Residential only)
  let eligibleSubsidy = 0;
  if (propertyType === 'Residential') {
    if (recommendedKw >= 3) eligibleSubsidy = 78000;
    else if (recommendedKw >= 2) eligibleSubsidy = 60000;
    else eligibleSubsidy = 30000;
  }

  const netEstimatedCost = Math.max(0, approxGrossCost - eligibleSubsidy);
  const paybackYears = Math.round((netEstimatedCost / annualSavings) * 10) / 10;
  const lifetime25YrSavings = Math.round(annualSavings * 25 - netEstimatedCost);
  const co2MitigatedTons = Math.round((annualUnits * 0.82 * 25) / 1000);

  const handleSubmitLead = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number');
      return;
    }

    setLoading(true);
    setError('');

    const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
    const text = `⚡ *Solar Calculator Estimate - Aqua-Sol Energy*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*City:* ${formData.city}\n` +
      `*Monthly Bill:* ₹${monthlyBill.toLocaleString('en-IN')}\n` +
      `*Property Type:* ${propertyType}\n` +
      `*Recommended System:* ${recommendedKw} kW\n` +
      `*Est. Annual Savings:* ₹${annualSavings.toLocaleString('en-IN')}\n` +
      `*Eligible Subsidy:* ₹${eligibleSubsidy.toLocaleString('en-IN')}\n` +
      `*Net Est. Investment:* ₹${netEstimatedCost.toLocaleString('en-IN')}\n` +
      `*Estimated Payback:* ~${paybackYears} Years\n` +
      `*Roof Area:* ${roofArea} sq.ft.\n` +
      `*Notes:* ${formData.notes || 'Please share detailed rooftop solar quotation.'}`;

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
            Precision Solar Estimator
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pune Rooftop Solar Calculator
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estimate your recommended solar plant capacity, annual unit generation, PM Surya Ghar subsidy, and lifetime electricity savings.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brand-blue-600" />
              <span>Input Your Parameters</span>
            </h3>

            {/* Monthly Bill Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Average Monthly Bill:</span>
                <span className="text-base font-extrabold text-brand-blue-600">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>₹1,000</span>
                <span>₹15,000</span>
                <span>₹30,000+</span>
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Property Type</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {['Residential', 'Commercial', 'Industrial', 'Housing Society/RWA'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2 px-3 rounded-xl border text-center transition ${
                      propertyType === type
                        ? 'bg-brand-blue-50 border-brand-blue-600 text-brand-blue-700 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Roof Area Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Available Shadow-Free Roof Area:</span>
                <span className="text-sm font-bold text-slate-800">{roofArea} sq. ft</span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>100 sq.ft</span>
                <span>1,000 sq.ft</span>
                <span>2,000+ sq.ft</span>
              </div>
            </div>

            {/* Calculation Assumptions Note */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-500 space-y-1">
              <p className="font-bold text-slate-700">Centralized Parameters:</p>
              <p>• Average MSEDCL residential unit tariff: ₹{tariff}/kWh</p>
              <p>• Pune annual generation factor: ~1,450 units/kW/year</p>
              <p>• Rooftop area requirement: ~80-100 sq. ft per kW</p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 text-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-400">
                  Estimated Recommendation
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                  {recommendedKw} kW Rooftop Solar Plant
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Tailored to offset your ₹{monthlyBill.toLocaleString('en-IN')}/month electricity bill.
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Govt. Subsidy</span>
                  <p className="text-base xs:text-lg sm:text-2xl font-black text-brand-amber-400 mt-0.5 tracking-tight whitespace-nowrap">
                    ₹{eligibleSubsidy.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">PM Surya Ghar DBT</p>
                </div>

                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Annual Savings</span>
                  <p className="text-base xs:text-lg sm:text-2xl font-black text-emerald-400 mt-0.5 tracking-tight whitespace-nowrap">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">Estimated bill reduction</p>
                </div>

                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Payback Period</span>
                  <p className="text-base xs:text-lg sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                    {paybackYears} <span className="text-xs sm:text-sm font-normal text-slate-300">Years</span>
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">Then 21+ yrs free power</p>
                </div>

                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Annual Generation</span>
                  <p className="text-sm xs:text-base sm:text-xl font-bold text-white mt-0.5 tracking-tight">
                    {annualUnits.toLocaleString('en-IN')} <span className="text-[10px] sm:text-xs font-normal text-slate-300">units</span>
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">Units (kWh) / year</p>
                </div>

                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">25-Yr Net Savings</span>
                  <p className="text-sm xs:text-base sm:text-xl font-bold text-emerald-400 mt-0.5 tracking-tight whitespace-nowrap">
                    ₹{Math.max(0, lifetime25YrSavings).toLocaleString('en-IN')}
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">Lifetime wealth created</p>
                </div>

                <div className="bg-slate-800/90 p-2.5 xs:p-3 sm:p-4 rounded-xl border border-slate-700 overflow-hidden flex flex-col justify-between">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">CO2 Offset</span>
                  <p className="text-sm xs:text-base sm:text-xl font-bold text-emerald-400 mt-0.5 tracking-tight">
                    {co2MitigatedTons} <span className="text-[10px] sm:text-xs font-normal text-slate-300">Tons</span>
                  </p>
                  <p className="text-[9px] xs:text-[10px] text-slate-400 mt-0.5 leading-tight">Green benefit</p>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200">
                💡 <strong>Bank Loan Available:</strong> Low-interest EMI option through Nationalised Banks. Monthly EMI is typically lower than your electricity bill savings!
              </div>
            </div>

            {/* Request Exact Engineering Quote Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg space-y-4">
              <h4 className="text-lg font-bold text-slate-900">
                Get an Exact Engineering Quote For This {recommendedKw} kW System
              </h4>
              <p className="text-xs text-slate-500">
                Enter your details to receive an official customized engineering proposal and schedule a free roof inspection in Pune.
              </p>

              {success ? (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span>
                    Thank you! Your quotation request for {recommendedKw} kW has been logged into our Pune engineering desk. We will call you shortly.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-3">
                  {error && <p className="text-xs text-red-600 font-semibold">{error}</p>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Pune Locality (e.g. Kharadi)"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white text-xs font-bold rounded-xl shadow transition flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Lock In Estimate & Get Engineering Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarCalculatorPage;
