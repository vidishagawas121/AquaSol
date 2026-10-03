import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingContactButtons = ({ customMessage }) => {
  const { settings } = useSettings();

  const rawPhone = settings.primaryPhone || '+91 8275067701';
  const cleanCallPhone = rawPhone.replace(/\s+/g, '');
  const rawWhatsApp = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';

  const defaultMsg =
    customMessage ||
    `Hello Aquasol Energy, I am interested in rooftop solar / solar water heating solutions in Pune. Please share details and pricing.`;

  const encodedMessage = encodeURIComponent(defaultMsg);
  const whatsappUrl = `https://wa.me/${rawWhatsApp}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. Floating Instant Call Button */}
      <a
        href={`tel:${cleanCallPhone}`}
        title={`Call Aquasol Energy directly (${rawPhone})`}
        aria-label="Call Aquasol Energy"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-brand-blue-700 via-brand-blue-600 to-sky-500 text-white shadow-xl shadow-brand-blue-600/30 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-amber-400"></span>
        </span>
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-200" />
        
        {/* Tooltip on hover (desktop) */}
        <span className="hidden sm:group-hover:flex absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap items-center gap-1.5 pointer-events-none transition-opacity">
          <span>Call: {rawPhone}</span>
        </span>
      </a>

      {/* 2. Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat directly on WhatsApp with Aquasol Energy"
        aria-label="Chat directly on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-amber-500"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-105 transition-transform duration-200" />

        {/* Tooltip on hover (desktop) */}
        <span className="hidden sm:group-hover:flex absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap items-center gap-1.5 pointer-events-none transition-opacity">
          <span>Chat on WhatsApp</span>
        </span>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
