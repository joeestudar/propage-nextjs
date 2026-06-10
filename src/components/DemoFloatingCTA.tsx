'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const ctaTexts = {
  en: { prefix: 'Free hosting included!', button: 'Get Your Landing Page', suffix: '$40' },
  es: { prefix: '¡Hosting gratis incluido!', button: 'Obtén Tu Landing Page', suffix: '$40' },
  pt: { prefix: 'Hospedagem grátis incluída!', button: 'Garanta Sua Landing Page', suffix: '$40' },
};

export default function DemoFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      }
    };

    // Show after delay
    const timer = setTimeout(() => {
      window.addEventListener('scroll', onScroll);
      // Also check if already scrolled
      if (window.scrollY > 300) setVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) return null;

  const t = ctaTexts[language] || ctaTexts.en;

  return (
    <a
      href="https://propages.shalomsites.com.br/#order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-fadeIn"
    >
      <div
        className="relative flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #ef4444 100%)',
        }}
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-2xl animate-ping opacity-20" style={{ background: '#FF6B35' }} />

        {/* Rocket icon */}
        <span className="text-2xl group-hover:animate-bounce">🚀</span>

        <div className="relative flex flex-col">
          <span className="text-white/80 text-[10px] font-medium tracking-wider uppercase">
            {t.prefix}
          </span>
          <span className="text-white font-bold text-sm">
            {t.button} <span className="text-yellow-300">{t.suffix}</span>
          </span>
        </div>

        {/* Arrow */}
        <svg
          className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
