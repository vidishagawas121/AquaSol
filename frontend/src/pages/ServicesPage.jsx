import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Check, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { services } from '../data';
import { useSettings } from '../context/SettingsContext';
import QuoteModal from '../components/QuoteModal';

const ServicesPage = () => {
  const { settings } = useSettings();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aqua-Sol%20Energy,%20I%20need%20solar%20servicing%20or%20tank%20repair%20in%20Pune.`;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center font-bold">
                    <Wrench className="w-6 h-6" />
                  </div>
                  {service.isAMC && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                      AMC Package
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  {service.marathiTitle && (
                    <p className="text-xs font-semibold text-brand-amber-600 mt-0.5">{service.marathiTitle}</p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {service.features?.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
                >
                  View Process & Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => {
                    setQuoteService(service.title);
                    setQuoteOpen(true);
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-brand-amber-500 hover:bg-brand-amber-600 rounded-xl shadow transition"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Hotline Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
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
