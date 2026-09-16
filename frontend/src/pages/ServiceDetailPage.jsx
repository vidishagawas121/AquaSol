import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { services } from '../data';
import { useSettings } from '../context/SettingsContext';
import QuoteModal from '../components/QuoteModal';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { settings } = useSettings();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const service = services.find((s) => s.slug === slug) || services[0];

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aquasol%20Energy,%20I%20want%20to%20book%20${encodeURIComponent(
    service.title
  )}%20in%20Pune.`;

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-brand-amber-400">{service.title}</span>
          </div>

          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Doorstep Pune Service
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          {service.marathiTitle && (
            <p className="text-sm font-semibold text-brand-amber-300">{service.marathiTitle}</p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Showcase, Description & Step-by-Step Execution */}
          <div className="lg:col-span-8 space-y-8">
            {service.image && (
              <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-xl relative min-h-[280px] sm:min-h-[380px] max-h-[480px] flex items-center justify-center p-3 sm:p-5 group">
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative z-10 w-full h-full max-h-[440px] object-contain rounded-2xl drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md text-brand-amber-400 text-[11px] font-bold px-3 py-1 rounded-full shadow border border-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-amber-400" />
                  {service.category}
                </div>
              </div>
            )}

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Service Overview</h3>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Step-by-Step Process */}
            {service.processSteps?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
                <h3 className="text-xl font-bold text-slate-900">How We Execute This Service</h3>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step.stepNumber} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="w-8 h-8 rounded-xl bg-brand-blue-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {step.stepNumber}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features / Benefits */}
            {service.features?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Key Benefits For You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Form & Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-brand-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-400">
                Doorstep Booking
              </span>
              <h4 className="text-xl font-bold text-white">
                Book {service.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schedule a technician visit to your residence or society in Pune. Transparent pricing and genuine replacement parts.
              </p>

              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs rounded-xl shadow transition"
              >
                Schedule Service Visit
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                WhatsApp Quick Booking
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Service Guarantee</span>
              </div>
              <p>Workmanship warranty on argon welds and replacement gaskets installed by Aquasol engineers.</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService={service.title}
        source={`Service Detail: ${service.title}`}
      />
    </div>
  );
};

export default ServiceDetailPage;
