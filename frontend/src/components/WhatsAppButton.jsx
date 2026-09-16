import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

const WhatsAppButton = ({ customMessage }) => {
  const { settings } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  const phone = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';

  const defaultMsg = customMessage || 
    `Hello Aquasol Energy, I am interested in rooftop solar / solar water heating solutions in Pune. Please share details and pricing.`;

  const encodedMessage = encodeURIComponent(defaultMsg);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Floating Tooltip / Mini card */}
      {isOpen && (
        <div className="mb-2 sm:mb-3 w-[calc(100vw-2.5rem)] max-w-xs sm:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-scaleUp">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">Aquasol Solar Desk</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Need quick assistance regarding PM Surya Ghar subsidy, solar water heaters, or repair in Pune? Chat with our engineer on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Chat on WhatsApp with Aquasol Energy"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-amber-500"></span>
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-transparent" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
