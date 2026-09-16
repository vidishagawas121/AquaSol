import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { services, maintenanceGallery } from '../data';
import { useSettings } from '../context/SettingsContext';
import QuoteModal from '../components/QuoteModal';

const ServicesPage = () => {
  const { settings } = useSettings();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aqua-Sol%20Energy,%20I%20need%20solar%20servicing%20or%20tank%20repair%20in%20Pune.`;

  const galleryCategories = [
    'All',
    'Collector Washing',
    'Tank Fitting & Brand',
    'Tank Repair & Fitting',
    'On-Site Rigging & Hoisting',
    'FPC Servicing',
    'Housing Society AMC',
    'Hybrid Solar PV Care',
    'Delivery & Genuine Spares',
  ];

  const filteredGallery =
    activeGalleryFilter === 'All'
      ? maintenanceGallery
      : maintenanceGallery.filter((item) => item.category === activeGalleryFilter);

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Pune In-House Engineering & AMC
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solar Servicing, Repairs & Maintenance
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional doorstep repairs for leaking tanks, cold water problems, hard water scaling, and complete society AMC maintenance in Pune.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                {service.image && (
                  <div className="h-56 bg-slate-950 relative overflow-hidden flex items-center justify-center p-3 group">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    />
                    <span className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-sm border border-slate-700">
                      {service.category}
                    </span>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center font-bold">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {service.isAMC && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                        AMC Package
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{service.title}</h3>
                    {service.marathiTitle && (
                      <p className="text-xs font-semibold text-brand-amber-600 mt-0.5">{service.marathiTitle}</p>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {service.features?.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => {
                    setQuoteService(service.title);
                    setQuoteOpen(true);
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-brand-amber-500 hover:bg-brand-amber-600 rounded-xl shadow transition"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED MAINTENANCE & FIELD WORK GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-brand-amber-500/10 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" /> Authentic Field Work Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              On-Site Solar Servicing & Maintenance Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Real photographs of our field engineering crews performing active descaling, collector washing, argon arc tank repairs, multi-unit society maintenance, and genuine parts delivery across Pune.
            </p>
          </div>

          {/* Gallery Category Filter Chips */}
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-1 relative z-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryFilter(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  activeGalleryFilter === cat
                    ? 'bg-brand-amber-500 text-white shadow-lg shadow-brand-amber-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Container with contain + ambient blur */}
                <div
                  onClick={() => setLightboxIndex(index)}
                  className="relative h-64 bg-slate-950 flex items-center justify-center p-3 cursor-pointer overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110 pointer-events-none group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-brand-amber-400 border border-slate-700 backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2 border-t border-slate-800/80 bg-slate-900/90">
                  <h4 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-brand-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  {item.marathiTitle && (
                    <p className="text-xs font-semibold text-brand-amber-400/90">{item.marathiTitle}</p>
                  )}
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Booking Strip */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div>
              <h4 className="text-base font-bold text-white">Need Similar Expert Servicing on Your Rooftop?</h4>
              <p className="text-xs text-slate-400">Doorstep visits across Chandan Nagar, Kharadi, Viman Nagar, Hadapsar, Baner, Wakad & PCMC.</p>
            </div>
            <button
              onClick={() => {
                setQuoteService('Solar Water Heater Maintenance / AMC');
                setQuoteOpen(true);
              }}
              className="px-6 py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-amber-500/20 transition shrink-0"
            >
              Book Maintenance Visit
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
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
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNextImage}
            className="absolute right-2 sm:right-4 z-50 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[92vh]">
            <div className="h-[42vh] xs:h-[48vh] sm:h-[60vh] bg-slate-950 relative flex items-center justify-center p-2 sm:p-4 shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${filteredGallery[lightboxIndex].image})` }}
              />
              <img
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl rounded-lg sm:rounded-xl"
              />
            </div>

            <div className="p-3.5 sm:p-6 bg-slate-900 border-t border-slate-800 space-y-1.5 sm:space-y-2 overflow-y-auto">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
                  {filteredGallery[lightboxIndex].category}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                  {lightboxIndex + 1} of {filteredGallery.length}
                </span>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">{filteredGallery[lightboxIndex].title}</h3>
              {filteredGallery[lightboxIndex].marathiTitle && (
                <p className="text-xs font-semibold text-brand-amber-400">{filteredGallery[lightboxIndex].marathiTitle}</p>
              )}
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">{filteredGallery[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Hotline Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Have an Urgent Solar Leak or Breakdown in Pune?</h4>
            <p className="text-xs text-slate-400 mt-1">
              Our Chandan Nagar emergency response team dispatches technicians for quick inspection.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${settings.primaryPhone}`}
              className="px-5 py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call {settings.primaryPhone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService={quoteService}
        source="Services Page"
      />
    </div>
  );
};

export default ServicesPage;
