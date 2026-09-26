import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building,
  GraduationCap,
  Shield,
  Factory,
  ShoppingBag,
  Award,
  Users,
  Phone,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import QuoteModal from '../components/QuoteModal';
import { products, esteemedClients, brandLegacy } from '../data';
import { useSettings } from '../context/SettingsContext';
import solarCanopyImg from '../assets/rooftop_solar_1.jpg';

const ProjectsPage = () => {
  const { settings } = useSettings();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aquasol%20Energy,%20we%20would%20like%20to%20discuss%20a%20commercial%20or%20residential%20solar%20project%20in%20Pune.`;

  const getClientIcon = (iconType) => {
    switch (iconType) {
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-brand-amber-500" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-emerald-500" />;
      case 'factory':
        return <Factory className="w-5 h-5 text-blue-500" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-5 h-5 text-purple-500" />;
      default:
        return <Building className="w-5 h-5 text-brand-amber-500" />;
    }
  };

  const categoryMap = {
    'Solar PV': 'Rooftop Solar PV',
    'Solar Water Heater': 'Solar Water Heaters',
    'Heat Pump': 'Heat Pumps',
    'Solar Street Light': 'Solar Street Lights',
  };

  const projectCategories = [
    'All',
    'Rooftop Solar PV',
    'Solar Water Heaters',
    'Heat Pumps',
    'Solar Street Lights',
  ];

  // Compile all product images into a category-wise project gallery without duplicates
  const projectGalleryList = products.flatMap((prod) =>
    (prod.gallery || [prod.image]).map((img, idx) => ({
      id: `${prod.id}-${idx}`,
      title: `${prod.title} (Photo #${idx + 1})`,
      category: categoryMap[prod.category] || prod.category,
      image: img,
      productTitle: prod.title,
    }))
  );

  const filteredProjects =
    activeCategory === 'All'
      ? projectGalleryList
      : projectGalleryList.filter((item) => item.category === activeCategory);

  const getCategoryCount = (category) => {
    if (category === 'All') return projectGalleryList.length;
    return projectGalleryList.filter((item) => item.category === category).length;
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header & 15-Year Legacy Welcome Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            <Award className="w-4 h-4 text-brand-amber-400" />
            15 Years of Engineering Excellence
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Illuminating a Sustainable Future Since 2009
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {brandLegacy.overview}
          </p>

          <div className="max-w-3xl mx-auto p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xs sm:text-sm text-slate-300 italic">
            "{brandLegacy.reputation}"
          </div>
        </div>
      </section>

      {/* 2. ESTEEMED CLIENTELE & PARTNERS */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl text-white space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Users className="w-3.5 h-3.5" /> Trusted Partners
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Our Esteemed Clientele & Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We take immense pride in powering some of Maharashtra's most prestigious developers, universities, defense establishments, and industrial leaders.
            </p>
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 relative z-10">
            {esteemedClients.map((client, index) => (
              <div
                key={index}
                className="bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-slate-700/80 hover:border-brand-amber-500/50 shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getClientIcon(client.iconType)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-amber-400 transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-brand-amber-400/90 block mt-0.5">
                      {client.category}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Banner */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center relative z-10">
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              <strong className="text-brand-amber-400 font-bold">Long-Term Relationships:</strong> {brandLegacy.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY-WISE PRODUCT & PROJECT INSTALLATIONS GALLERY */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" /> Products & Installations Portfolio
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Project Installations Across All Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore authentic site photographs and hardware blueprints across Rooftop Solar PV, Solar Water Heaters, Heat Pumps, and All-in-One Solar Street Lights installed by Aquasol Energy.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-1 relative z-10">
            {projectCategories.map((category) => {
              const count = getCategoryCount(category);
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-brand-amber-500 text-white shadow-lg shadow-brand-amber-500/20 scale-[1.02]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[10px] font-extrabold ${
                      isActive ? 'bg-black/20 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clean Projects Gallery Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {filteredProjects.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => setLightboxIndex(index)}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-amber-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative"
              >
                {/* Image Container with Contain + Ambient Background Blur */}
                <div className="relative h-56 sm:h-64 bg-slate-950 flex items-center justify-center p-2.5 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110 pointer-events-none group-hover:opacity-35 transition-opacity"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-h-full max-w-full object-contain rounded-xl drop-shadow-md group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-brand-amber-400 border border-slate-700 backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-brand-amber-400 shrink-0" />
              <span>Showing {filteredProjects.length} Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Click any image to view fullscreen high-resolution photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Projects Gallery */}
      {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 xs:p-3 sm:p-6 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrevImage}
            className="absolute left-2 sm:left-4 z-50 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNextImage}
            className="absolute right-2 sm:right-4 z-50 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[92vh]">
            <div className="h-[42vh] xs:h-[48vh] sm:h-[60vh] bg-slate-950 relative flex items-center justify-center p-2 sm:p-4 shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${filteredProjects[lightboxIndex].image})` }}
              />
              <img
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl rounded-lg sm:rounded-xl"
              />
            </div>

            <div className="p-3.5 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                  {filteredProjects[lightboxIndex].category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                  {filteredProjects[lightboxIndex].productTitle}
                </h3>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                {lightboxIndex + 1} of {filteredProjects.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. PARTNERSHIP & CONSULTATION INVITATION */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-100 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100">
              Commercial & Institutional Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Partner with Aquasol Energy for Your Next Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are planning rooftop solar PV for an industrial facility, centralized water heating for a residential township, or a green campus transition, our Pune engineering desk offers turnkey consultation, feasibility study, and execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>15+ years of verified execution track record</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full MSEDCL liaisoning & DISCOM net-metering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 solar modules & high-spec stainless steel tanks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated lifecycle AMC & emergency technical support</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${settings.primaryPhone}`}
              className="px-6 py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              Call {settings.primaryPhone}
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-green-500/20 transition flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              WhatsApp Engineering Desk
            </button>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService="Commercial Solar PV"
        source="Projects Page"
      />
    </div>
  );
};

export default ProjectsPage;
