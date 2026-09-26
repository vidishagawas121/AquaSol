import React from 'react';
import { useSettings } from '../context/SettingsContext';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton = ({ customMessage }) => {
  const { settings } = useSettings();

  const phone = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';

  const defaultMsg = customMessage || 
    `Hello Aquasol Energy, I am interested in rooftop solar / solar water heating solutions in Pune. Please share details and pricing.`;

  const encodedMessage = encodeURIComponent(defaultMsg);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat directly on WhatsApp with Aquasol Energy"
        aria-label="Chat directly on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-amber-500"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;

