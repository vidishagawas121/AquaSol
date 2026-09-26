import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownPrompt = ({ targetId = 'explore-solutions' }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Inline Hero Scroll Indicator (Positioned at bottom of Hero) */}
      <div className="w-full flex flex-col items-center justify-center pt-6 sm:pt-8 pb-2">
        <button
          onClick={scrollToTarget}
          aria-label="Scroll down to explore products and services"
          className="group flex flex-col items-center gap-1.5 text-slate-300 hover:text-white transition-all cursor-pointer select-none focus:outline-none"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs font-semibold shadow-lg shadow-black/20 group-hover:border-brand-amber-400/50 group-hover:text-brand-amber-300 transition-all">
            <span className="w-2 h-2 rounded-full bg-brand-amber-400 animate-ping"></span>
            <span>Scroll Down to Explore</span>
            <span className="text-slate-400 group-hover:text-brand-amber-300 text-[10px]">खाली पहा ↓</span>
          </div>

          <div className="flex flex-col items-center animate-bounce-scroll text-brand-amber-400 group-hover:text-brand-amber-300">
            <ChevronDown className="w-5 h-5 -mb-2 opacity-70" />
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 2. Floating Mobile Hint (Appears at bottom on mobile when at top of page, fades out on scroll) */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-30 sm:hidden transition-all duration-500 ease-out pointer-events-auto ${
          hasScrolled
            ? 'opacity-0 translate-y-4 pointer-events-none'
            : 'opacity-100 translate-y-0'
        }`}
      >
        <button
          onClick={scrollToTarget}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 text-white border border-brand-amber-400/40 shadow-2xl backdrop-blur-md text-xs font-bold active:scale-95 animate-bounce-scroll transition-all"
        >
          <div className="w-3.5 h-5 rounded-full border border-brand-amber-400/80 flex items-start justify-center p-0.5">
            <div className="w-1 h-1.5 rounded-full bg-brand-amber-400 animate-mouse-wheel"></div>
          </div>
          <span className="text-slate-200">Scroll Down for More</span>
          <ChevronDown className="w-4 h-4 text-brand-amber-400" />
        </button>
      </div>
    </>
  );
};

export default ScrollDownPrompt;
