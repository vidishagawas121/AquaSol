import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const GlobalScrollDown = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [hasScrollableContent, setHasScrollableContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScrollCheck = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      // Check if page has sufficient content to scroll
      const canScroll = documentHeight > windowHeight + 120;
      setHasScrollableContent(canScroll);

      // Check if user is near the bottom of the page (within 140px of bottom/footer)
      const atBottom = windowHeight + scrollY >= documentHeight - 140;
      setIsAtBottom(atBottom);
    };

    // Check on mount and route change after short delay for content to render
    handleScrollCheck();
    const timer = setTimeout(handleScrollCheck, 300);

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    window.addEventListener('resize', handleScrollCheck, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollCheck);
      window.removeEventListener('resize', handleScrollCheck);
    };
  }, [location.pathname]);

  const handleScrollDown = () => {
    const scrollAmount = window.innerHeight * 0.75;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  const shouldShow = hasScrollableContent && !isAtBottom;

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-30 sm:hidden transition-all duration-300 ease-out pointer-events-auto ${
        shouldShow
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={handleScrollDown}
        type="button"
        aria-label="Scroll down for more content"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 text-white border border-brand-amber-400/50 shadow-2xl backdrop-blur-md text-xs font-bold active:scale-95 transition-all cursor-pointer"
      >
        <div className="w-3.5 h-5 rounded-full border border-brand-amber-400/80 flex items-start justify-center p-0.5 shrink-0">
          <div className="w-1 h-1.5 rounded-full bg-brand-amber-400 animate-mouse-wheel"></div>
        </div>
        <span className="text-slate-200 whitespace-nowrap">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-brand-amber-400 animate-bounce shrink-0" />
      </button>
    </div>
  );
};

export default GlobalScrollDown;
