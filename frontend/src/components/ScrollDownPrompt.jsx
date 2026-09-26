import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownPrompt = ({ targetId = 'explore-solutions' }) => {
  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
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
  );
};

export default ScrollDownPrompt;
