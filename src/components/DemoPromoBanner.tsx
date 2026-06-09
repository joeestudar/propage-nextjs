'use client';

import { useState, useEffect } from 'react';

const promoTexts = {
  en: {
    main: '🔥 LIMITED OFFER',
    price: '$40',
    desc: 'Professional Landing Page',
    bonus: '+ FREE Hosting for First 50 Customers!',
    cta: 'Get Yours Now →',
  },
  es: {
    main: '🔥 OFERTA LIMITADA',
    price: '$40',
    desc: 'Landing Page Profesional',
    bonus: '+ ¡Hosting GRATIS para los Primeros 50 Clientes!',
    cta: 'Consigue la Tuya →',
  },
  pt: {
    main: '🔥 OFERTA LIMITADA',
    price: '$40',
    desc: 'Landing Page Profissional',
    bonus: '+ Hospedagem GRÁTIS para os Primeiros 50 Clientes!',
    cta: 'Garanta a Sua →',
  },
};

export default function DemoPromoBanner() {
  const [visible, setVisible] = useState(true);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');

  useEffect(() => {
    const stored = localStorage.getItem('language') as 'en' | 'es' | 'pt' | null;
    if (stored && promoTexts[stored]) setLanguage(stored);
  }, []);

  if (!visible) return null;

  const t = promoTexts[language];

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] animate-slideDown">
      {/* Gradient animated background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 animate-gradientShift">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        <div className="relative flex items-center justify-center gap-2 sm:gap-4 px-3 py-2.5 sm:py-3">
          {/* Left fire emoji */}
          <span className="text-lg sm:text-xl animate-pulse">🔥</span>

          {/* Main text */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
              {t.main}
            </span>

            {/* Price badge */}
            <span className="bg-white text-orange-600 font-black text-lg sm:text-2xl px-2 sm:px-3 py-0.5 rounded-lg shadow-lg animate-bounce-slow">
              {t.price}
            </span>

            <span className="text-white font-semibold text-xs sm:text-sm">
              {t.desc}
            </span>

            {/* Separator dot */}
            <span className="hidden sm:inline text-yellow-300">•</span>

            {/* Bonus */}
            <span className="text-yellow-300 font-bold text-xs sm:text-sm animate-pulse">
              {t.bonus}
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="https://propages.shalomsites.com.br/#order"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-white text-orange-600 font-bold text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-yellow-300 hover:text-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
          >
            {t.cta}
          </a>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="ml-1 text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
