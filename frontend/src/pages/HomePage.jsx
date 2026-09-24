import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  Zap,
  Flame,
  Wrench,
  Calculator,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  MapPin,
  Building,
  Home,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  GraduationCap,
  Shield,
  Factory,
  ShoppingBag,
  Users,
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import {
  products,
  services as staticServices,
  maintenanceGallery as staticMaintenanceGallery,
  projects as staticProjects,
  esteemedClients,
  brandLegacy,
  faqs as staticFaqs,
} from '../data';
import SectionHeading from '../components/SectionHeading';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';

// Authentic brochure assets
import familyHero from '../assets/pm_surya_ghar_family.png';
import solarCanopyImg from '../assets/rooftop_solar_1.jpg';
import swhImg from '../assets/solar_water_heater_1.jpg';
import streetLightImg from '../assets/solar_street_light_5.png';
import heatPumpImg from '../assets/heat_pump_1.png';
import maintenanceImg from '../assets/solar_maintenance_cleaning.jpg';
import vendorBadge from '../assets/official_vendor_badge.png';
import msmeLogo from '../assets/msme_logo.png';

const HomePage = () => {
  const { settings } = useSettings();
  const [featuredProducts] = useState(products);
  const [services] = useState(staticServices);
  const [maintenanceGalleryList] = useState(staticMaintenanceGallery);
  const [maintenanceLightboxIndex, setMaintenanceLightboxIndex] = useState(null);
  const [faqs] = useState(staticFaqs.slice(0, 5));
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const getClientIcon = (iconType) => {
    switch (iconType) {
      case 'graduation-cap':
        return <GraduationCap className="w-4 h-4 text-brand-amber-400" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'factory':
        return <Factory className="w-4 h-4 text-blue-400" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-4 h-4 text-purple-400" />;
      default:
        return <Building className="w-4 h-4 text-brand-amber-400" />;
    }
  };

  // Quick Calculator State
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [calcResult, setCalcResult] = useState({ kw: 2.5, units: 3600, savings: 30600, subsidy: 60000 });

  // Recalculate quick savings on monthly bill slider change
  useEffect(() => {
    const tariff = settings.calculatorConfig?.avgTariffPerUnit || 8.5;
    const monthlyUnits = monthlyBill / tariff;
    // ~120 units per kW per month
    const kw = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
    const annualUnits = Math.round(kw * 1450);
    const annualSavings = Math.round(annualUnits * tariff);
    
    // PM Surya Ghar subsidy rule
    let subsidy = 30000;
    if (kw >= 3) subsidy = 78000;
    else if (kw >= 2) subsidy = 60000;

    setCalcResult({ kw, units: annualUnits, savings: annualSavings, subsidy });
  }, [monthlyBill, settings]);

  const handleOpenQuote = (productName = '') => {
    setSelectedProduct(productName);
    setQuoteModalOpen(true);
  };

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aquasol%20Energy,%20I%20am%20interested%20in%20rooftop%20solar%20under%20PM%20Surya%20Ghar.`;

  return (
    <div className="space-y-20 pb-16">
      <SEO
        title="Solar Rooftop PV, PM Surya Ghar Subsidy & Solar Water Heaters"
        description="Pune's top rated solar power installer. Claim ₹78,000 PM Surya Ghar subsidy, get solar panel installation, stainless steel water heaters, heat pumps & solar AMC across Pune."
        keywords="Solar Rooftop Pune, PM Surya Ghar Pune, Solar Panel Installation Pune, Solar Water Heater Servicing Pune, Solar AMC Pune, Heat Pump Pune Maharashtra, Aquasol Energy Chandan Nagar"
        canonical="https://aquasolenergy.in"
      />
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle decorative solar grid ambient background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Official Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                  <Sun className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                  PM Surya Ghar Authorized Assistance
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> Pune & Maharashtra
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
                Power Your Future With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-400 via-amber-300 to-yellow-200">
                  Clean Solar Energy
                </span>
              </h1>

              {/* Authentic Marathi Tagline from Client Brochure */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:py-2.5 rounded-xl bg-brand-amber-500/10 border border-brand-amber-500/20 text-brand-amber-300 font-semibold text-xs sm:text-base backdrop-blur-sm shadow-sm">
                <Sparkles className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <span>"घराच्या छतावर सोलर बसवा, वीजबिलातून कायमची सुटका मिळवा!"</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aquasol Energy delivers turnkey On-Grid Rooftop Solar PV with up to <strong className="text-white font-bold">₹78,000 direct subsidy</strong>, heavy-duty stainless steel Solar Water Heaters, Heat Pumps, and prompt repair/AMC services across Pune.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-2">
                <button
                  onClick={() => handleOpenQuote('PM Surya Ghar Rooftop Solar')}
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-brand-amber-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sun className="w-4 h-4 fill-white shrink-0" />
                  <span>Get a Free Solar Quote</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 sm:py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-green-500/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
                  <span>WhatsApp Us</span>
                </a>

                <Link
                  to="/solar-calculator"
                  className="w-full sm:w-auto px-4 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-brand-amber-400 shrink-0" />
                  <span>Solar Calculator</span>
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>₹78,000 Direct Bank Subsidy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nationalised Bank Loan Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>25-Year Performance Warranty</span>
                </div>
              </div>
            </div>

            {/* Right: Authentic Visual Card */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-800/60 p-2 sm:p-2.5 border border-slate-700/60 shadow-2xl group">
                <img
                  src={familyHero}
                  alt="PM Surya Ghar Solar Installation Aquasol Energy"
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-inner transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              {/* Scheme Highlight Card Docked Below Photo (People & Sign 100% Visible) */}
              <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-brand-amber-500/30 shadow-xl flex items-center justify-between gap-2.5 sm:gap-4">
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-brand-amber-400">
                    <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-amber-400 fill-brand-amber-400 shrink-0" />
                    प्रधानमंत्री सूर्यघर योजना
                  </span>
                  <h4 className="text-xs sm:text-base font-bold text-white leading-snug">300 युनिट मोफत वीज + ₹78,000 सबसिडी</h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 truncate sm:whitespace-normal">घरच्या घरी वीज निर्मिती • बिलात मोठी बचत</p>
                </div>
                <Link
                  to="/pm-surya-ghar"
                  className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs transition flex items-center gap-1 shrink-0 shadow-md shadow-brand-amber-500/20 active:scale-95"
                >
                  <span className="hidden xs:inline sm:inline">योजना माहिती</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDIBILITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">MSME Registered</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Officially registered Micro, Small & Medium Enterprise operating with engineering integrity in Pune.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-amber-50 text-brand-amber-600 flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">PM Surya Ghar Official Vendor</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  End-to-end documentation, MSEDCL net metering approvals, and direct subsidy transfer to your bank.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Dedicated Repair & AMC</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  In-house team for solar tank argon welding, descaling, leak stoppage, and Annual Maintenance Contracts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Bank Loan Support</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Seamless collateral-free solar financing support through nationalised banks and leading lenders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. 15-YEAR LEGACY & ESTEEMED CLIENTELE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-brand-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white space-y-8 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Award className="w-3.5 h-3.5" /> 15 Years of Engineering Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Maharashtra's Leading Developers & Institutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              For over a decade and a half, Aquasol Energy has delivered specialized, high-efficiency solar power and water heating installations across commercial, residential, and defense infrastructures.
            </p>
          </div>

          {/* Esteemed Clients Logo/Badge Cloud */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {esteemedClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-slate-850/90 hover:bg-slate-800 bg-slate-800/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 hover:border-brand-amber-500/50 transition-all duration-300 group flex items-start gap-3"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getClientIcon(client.iconType)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-brand-amber-400 transition-colors">
                    {client.name}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-amber-400/90 block truncate mt-0.5">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-brand-amber-400 font-bold">Our Philosophy:</strong> We don't just install solar panels—we build long-term relationships anchored in trust and sustainable growth.
            </p>
            <Link
              to="/projects"
              className="px-5 py-2.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs rounded-xl shadow transition shrink-0 inline-flex items-center gap-1.5"
            >
              View Case Studies <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Complete Energy Spectrum"
          title="Clean Energy Solutions For Every Requirement"
          subtitle="From residential bungalows and housing societies to industrial facilities and institutions across Pune."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Solution 1: PM Surya Ghar Rooftop Solar */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-48 sm:h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={solarCanopyImg}
                  alt="Rooftop Solar PV Installation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  PM Surya Ghar
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber-600">Residential Power</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue-600 transition mt-0.5">
                  Rooftop Solar PV (PM Surya Ghar)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Slash your electricity bill up to 90% and receive up to ₹78,000 direct bank subsidy with net metering and smart monitoring.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Up to 300 free units of electricity monthly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    MSEDCL bi-directional net meter liaison
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Tier-1 modules with 25-year warranty
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/solutions/residential-rooftop-solar"
                className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
              >
                Learn Details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => handleOpenQuote('Residential Rooftop Solar')}
                className="text-xs font-bold text-brand-amber-600 hover:text-brand-amber-700"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Solution 2: Solar Water Heating */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-48 sm:h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={swhImg}
                  alt="Solar Water Heating Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  100 - 5000+ LPD
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">Zero Electricity Hot Water</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue-600 transition mt-0.5">
                  Solar Water Heating Systems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy-duty stainless steel evacuated tube (ETC) and flat plate (FPC) systems retaining heat for 48+ hours in all seasons.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Capacities from 100 LPD to 5,000+ LPD
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Food-grade SS 304/316 inner rust-proof tank
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Saves 30% on overall home electricity bills
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/solutions/solar-water-heating-solutions"
                className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
              >
                Learn Details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => handleOpenQuote('Solar Water Heater')}
                className="text-xs font-bold text-brand-amber-600 hover:text-brand-amber-700"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Solution 3: Heat Pump Systems */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-48 sm:h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={heatPumpImg}
                  alt="Heat Pump Water Heaters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  75% Power Saving
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Thermodynamic Water Heating</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue-600 transition mt-0.5">
                  Heat Pump Water Heaters
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Save up to 75% electricity compared to conventional geysers. Delivers uninterrupted hot water 24 hours a day in all weather.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Operates 24x7 in monsoons, winter & night
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    High COP up to 4.2 for maximum power saving
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Ideal for villas, hotels, and healthcare
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/solutions/heat-pump-solutions"
                className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
              >
                Learn Details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => handleOpenQuote('Heat Pump System')}
                className="text-xs font-bold text-brand-amber-600 hover:text-brand-amber-700"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* View All Solutions Banner */}
        <div className="mt-8 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-700 hover:text-brand-blue-800"
          >
            Explore All Solutions (Including Commercial Solar & Solar Street Lights) →
          </Link>
        </div>
      </section>

      {/* 4. PM SURYA GHAR SPOTLIGHT HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-brand-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-brand-amber-500/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                <Award className="w-3.5 h-3.5 text-brand-amber-400" /> Central Government Financial Scheme
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                PM Surya Ghar: Muft Bijli Yojana
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The Government of India provides a direct subsidy of up to <strong className="text-brand-amber-400 font-bold">₹78,000</strong> directly deposited into your bank account. Install rooftop solar with Aquasol Energy in Pune and receive up to 300 units of free power each month!
              </p>

              {/* Subsidy Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 hover:border-slate-600 transition">
                  <span className="text-xs font-semibold text-slate-400">1 kW System</span>
                  <p className="text-2xl font-black text-brand-amber-400 mt-0.5">₹30,000</p>
                  <p className="text-[11px] text-slate-400">Direct Subsidy</p>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 hover:border-slate-600 transition">
                  <span className="text-xs font-semibold text-slate-400">2 kW System</span>
                  <p className="text-2xl font-black text-brand-amber-400 mt-0.5">₹60,000</p>
                  <p className="text-[11px] text-slate-400">Direct Subsidy</p>
                </div>
                <div className="bg-brand-amber-500/15 backdrop-blur-md rounded-2xl p-4 border border-brand-amber-500/40 shadow-sm">
                  <span className="text-xs font-bold text-brand-amber-300">3 kW & Above</span>
                  <p className="text-2xl font-black text-brand-amber-400 mt-0.5">₹78,000</p>
                  <p className="text-[11px] text-brand-amber-400/80">Maximum Subsidy</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <Link
                to="/pm-surya-ghar"
                className="w-full text-center px-6 py-4 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition active:scale-[0.99]"
              >
                Complete PM Surya Ghar Scheme Guide
              </Link>
              <button
                onClick={() => handleOpenQuote('PM Surya Ghar Subsidy Application')}
                className="w-full text-center px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-sm rounded-xl border border-white/20 transition active:scale-[0.99]"
              >
                Check My Subsidy Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SOLAR CALCULATOR QUICK WIDGET */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 text-white shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-400">
                  Instant Pune Solar Estimator
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                  How Much Can You Save With Solar?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Adjust your average monthly electricity bill to calculate recommended system size, estimated annual generation, and government subsidy.
                </p>
              </div>

              <div className="space-y-2 bg-slate-800/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-700">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-semibold">Your Monthly Electricity Bill:</span>
                  <span className="text-lg sm:text-xl font-bold text-brand-amber-400">₹{monthlyBill.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-amber-500"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500">
                  <span>₹1,000/mo</span>
                  <span>₹7,500/mo</span>
                  <span>₹15,000+/mo</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-500 shrink-0" />
                  <span>Based on MSEDCL tariffs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-500 shrink-0" />
                  <span>Pune solar irradiance data</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-800 to-slate-900 p-3.5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-700 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-slate-900/80 p-2.5 xs:p-3 sm:p-4 rounded-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block truncate">Recommended System</span>
                    <p className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-extrabold text-white mt-0.5 sm:mt-1 leading-tight tracking-tight">
                      {calcResult.kw} <span className="text-xs sm:text-base font-bold text-slate-300">kW</span>
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-tight">Approx. {Math.round(calcResult.kw * 90)} sq. ft roof</p>
                </div>

                <div className="bg-slate-900/80 p-2.5 xs:p-3 sm:p-4 rounded-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block truncate">Estimated Subsidy</span>
                    <p className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-extrabold text-brand-amber-400 mt-0.5 sm:mt-1 leading-tight tracking-tight whitespace-nowrap">
                      ₹{calcResult.subsidy.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-tight">PM Surya Ghar Direct Credit</p>
                </div>

                <div className="bg-slate-900/80 p-2.5 xs:p-3 sm:p-4 rounded-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block truncate">Annual Generation</span>
                    <p className="text-sm xs:text-base sm:text-xl lg:text-2xl font-bold text-white mt-0.5 sm:mt-1 leading-tight tracking-tight">
                      {calcResult.units.toLocaleString('en-IN')} <span className="text-[10px] sm:text-xs font-normal text-slate-300">units</span>
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-tight">Clean electricity / year</p>
                </div>

                <div className="bg-slate-900/80 p-2.5 xs:p-3 sm:p-4 rounded-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block truncate">Annual Bill Savings</span>
                    <p className="text-sm xs:text-base sm:text-xl lg:text-2xl font-bold text-brand-green-500 mt-0.5 sm:mt-1 leading-tight tracking-tight whitespace-nowrap">
                      ₹{calcResult.savings.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-tight">Yearly savings in your pocket</p>
                </div>
              </div>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleOpenQuote(`${calcResult.kw} kW Rooftop Solar System`)}
                  className="flex-1 py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition text-center active:scale-[0.99]"
                >
                  Request Exact Engineering Quote
                </button>
                <Link
                  to="/solar-calculator"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition text-center active:scale-[0.99]"
                >
                  Full Detailed Calculator
                </Link>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                *Values are technical estimates based on standard Pune insolation conditions. Actual savings depend on rooftop orientation and DISCOM sanction load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPECIALIZED MAINTENANCE & SERVICING (From Client Brochure) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Specialized Pune Technical Desk"
          title="Solar Water Heater Servicing, Repairs & AMC"
          subtitle="Prompt doorstep servicing across Pune & PCMC to restore high temperatures, fix leaks, and extend tank life."
        />

        {/* Real On-Site Maintenance Feature Showcase */}
        <div className="bg-gradient-to-br from-slate-900 via-brand-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Container with contain and ambient blur */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 relative min-h-[260px] sm:min-h-[320px] max-h-[380px] flex items-center justify-center p-3 group">
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${maintenanceImg})` }}
              />
              <img
                src={maintenanceImg}
                alt="Aquasol Energy technician washing and descaling solar collector panels and water tank on Pune rooftop"
                className="relative z-10 w-full h-full max-h-[340px] object-contain rounded-xl drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-slate-900/90 backdrop-blur-md text-brand-amber-400 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5 shadow">
                <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" />
                Live On-Site Maintenance & Descaling
              </div>
            </div>

            {/* Content info */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                <Wrench className="w-3.5 h-3.5 text-brand-amber-400" /> Doorstep Pune & PCMC Team
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Restoring Peak 80°C Heat & Leak-Free Performance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Hard water deposits and dust dramatically diminish heat absorption and cause pipe scaling. Our factory-trained field technicians perform rigorous high-pressure washing, collector descaling, gasket renewal, and argon arc welding across Pune.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-40% immediate temperature increase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Safe chemical-free descaling & flushing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Argon arc welding & inner tank leak repair</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive Annual Maintenance (AMC)</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => handleOpenQuote('Solar Servicing & Descaling')}
                  className="px-6 py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition active:scale-[0.99]"
                >
                  Book Doorstep Servicing
                </button>
                <Link
                  to="/services"
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition flex items-center gap-1.5"
                >
                  Explore All 5 Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-amber-50 text-brand-amber-600 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">सोलर वॉटर हिटर सर्व्हिसिंग</h4>
              <p className="text-xs font-semibold text-brand-blue-700">Solar Water Heater Servicing</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chemical-free descaling of vacuum tubes, manifold flushing, and seal replacement to restore 80°C hot water output.
              </p>
            </div>
            <Link
              to="/services/solar-water-heater-servicing"
              className="mt-4 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 inline-flex items-center gap-1"
            >
              Book Servicing <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">सोलर टँक रिपेअरिंग</h4>
              <p className="text-xs font-semibold text-brand-blue-700">Solar Tank Repairing</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-precision argon welding for damaged stainless steel inner tanks, flange renewal, and PUF insulation repair.
              </p>
            </div>
            <Link
              to="/services/solar-tank-repairing"
              className="mt-4 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 inline-flex items-center gap-1"
            >
              Tank Repair Details <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">लिकेज रिमुव्हल वर्क</h4>
              <p className="text-xs font-semibold text-brand-blue-700">Leakage Removal Work</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant stoppage of water seepage from manifold fittings, vacuum tube grommets, air vents, and terrace plumbing.
              </p>
            </div>
            <Link
              to="/services/tank-solar-leakage-removal"
              className="mt-4 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 inline-flex items-center gap-1"
            >
              Fix Leakage <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Service 4: Solar Panel Brush Cleaning */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">सोलर पॅनल ब्रश क्लिनिंग</h4>
              <p className="text-xs font-semibold text-brand-blue-700">Panel Brush Cleaning</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scratch-free telescopic rotary brush washing to eliminate dust layers and boost power generation by up to 25-30%.
              </p>
            </div>
            <Link
              to="/services/solar-panel-brush-cleaning"
              className="mt-4 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 inline-flex items-center gap-1"
            >
              Brush Cleaning <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Service 5: AMC */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">We Undertake AMC</h4>
              <p className="text-xs font-semibold text-brand-blue-700">Annual Maintenance Contracts</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheduled quarterly preventive visits, sacrificial anode renewal, priority breakdown attendance, and zero callout fees.
              </p>
            </div>
            <Link
              to="/services/solar-water-heater-amc"
              className="mt-4 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 inline-flex items-center gap-1"
            >
              AMC Plans <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Section 6 - Live On-Site Maintenance Gallery Grid */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white border border-slate-800 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" /> Field Servicing Gallery
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1.5 sm:mt-2">
                Real Field Maintenance & On-Site Projects
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                Authentic photographs of our crew repairing, descaling, washing, and commissioning solar systems across Pune.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-brand-amber-400 hover:text-brand-amber-300 bg-slate-800 hover:bg-slate-750 px-4 py-2.5 rounded-xl border border-slate-700 transition shrink-0 w-full sm:w-auto text-center"
            >
              View Full Gallery & Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {maintenanceGalleryList.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setMaintenanceLightboxIndex(index)}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-amber-500/50 shadow-md group cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-36 bg-slate-950 relative flex items-center justify-center p-2 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-lg opacity-20 scale-110 pointer-events-none group-hover:opacity-35 transition-opacity"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg drop-shadow group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 z-20 w-6 h-6 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
                <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-left">
                  <span className="text-[9px] font-bold text-brand-amber-400 uppercase tracking-wider block truncate">
                    {item.category}
                  </span>
                  <p className="text-[11px] font-bold text-slate-200 line-clamp-1 mt-0.5 group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Lightbox Modal for Homepage */}
        {maintenanceLightboxIndex !== null && maintenanceGalleryList[maintenanceLightboxIndex] && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 xs:p-3 sm:p-6 animate-fadeIn">
            <button
              onClick={() => setMaintenanceLightboxIndex(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() =>
                setMaintenanceLightboxIndex((prev) =>
                  prev === 0 ? maintenanceGalleryList.length - 1 : prev - 1
                )
              }
              className="absolute left-2 sm:left-4 z-50 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={() =>
                setMaintenanceLightboxIndex((prev) =>
                  prev === maintenanceGalleryList.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-2 sm:right-4 z-50 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[92vh]">
              <div className="h-[42vh] xs:h-[48vh] sm:h-[60vh] bg-slate-950 relative flex items-center justify-center p-2 sm:p-4 shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-110 pointer-events-none"
                  style={{
                    backgroundImage: `url(${maintenanceGalleryList[maintenanceLightboxIndex].image})`,
                  }}
                />
                <img
                  src={maintenanceGalleryList[maintenanceLightboxIndex].image}
                  alt={maintenanceGalleryList[maintenanceLightboxIndex].title}
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl rounded-lg sm:rounded-xl"
                />
              </div>

              <div className="p-3.5 sm:p-6 bg-slate-900 border-t border-slate-800 space-y-1.5 sm:space-y-2 overflow-y-auto">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                    {maintenanceGalleryList[maintenanceLightboxIndex].category}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                    {maintenanceLightboxIndex + 1} of {maintenanceGalleryList.length}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">
                  {maintenanceGalleryList[maintenanceLightboxIndex].title}
                </h3>
                {maintenanceGalleryList[maintenanceLightboxIndex].marathiTitle && (
                  <p className="text-xs font-semibold text-brand-amber-400">
                    {maintenanceGalleryList[maintenanceLightboxIndex].marathiTitle}
                  </p>
                )}
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  {maintenanceGalleryList[maintenanceLightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 7. HOW IT WORKS / PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Turnkey Execution"
          title="How We Deliver Your Solar Plant"
          subtitle="A seamless 6-step journey from initial consultation to 25 years of clean solar power."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { step: '01', title: 'Consultation', desc: 'Understanding your power bills, roof type, and energy goals.' },
            { step: '02', title: 'Site Survey', desc: 'Detailed 3D shadow analysis and structural measurement.' },
            { step: '03', title: 'Design & Approvals', desc: 'Engineering blueprint & MSEDCL portal registration.' },
            { step: '04', title: 'Installation', desc: 'Precision mounting of Tier-1 panels and smart inverters.' },
            { step: '05', title: 'Net-Metering', desc: 'Bi-directional meter installation and grid synchronization.' },
            { step: '06', title: 'Subsidy & Care', desc: 'Direct ₹78K bank transfer and 25-year warranty service.' },
          ].map((item) => (
            <div key={item.step} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative">
              <span className="text-2xl font-black text-brand-blue-600/30 font-mono">{item.step}</span>
              <h4 className="text-sm font-bold text-slate-900 mt-2">{item.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 9. FAQ SECTION */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Clear Answers About Solar & Subsidies"
            subtitle="Everything you need to know about PM Surya Ghar, warranties, and maintenance."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id || index} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-brand-amber-500 font-extrabold">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-2 pl-5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/contact" className="text-xs font-bold text-brand-blue-700 hover:underline">
              Have another question? Contact our Pune engineers directly →
            </Link>
          </div>
        </section>
      )}

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={selectedProduct}
        source="Homepage CTA"
      />
    </div>
  );
};

export default HomePage;
