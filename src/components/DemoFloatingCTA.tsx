'use client';

import { useState, useEffect } from 'react';

const floatingTexts = {
  en: {
    cta: 'Get Your Landing Page — $40',
    sub: 'Free hosting included!',
  },
  es: {
    cta: 'Obtén Tu Landing Page — $40',
    sub: '¡Hosting gratis incluido!',
  },
  pt: {
    cta: 'Tenha Sua Landing Page — $40',
    sub: 'Hospedagem grátis incluída!',
  },
};

export default function DemoFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');

  useEffect(() => {
    const stored = localStorage.getItem('language') as 'en' | 'es' | 'pt' | null;
    if (stored && floatingTexts[stored]) setLanguage(stored);

    // Show after scrolling 300px
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = floatingTexts[language];

  if (!visible) return null;

  return (
    <a
      href="https://propages.shalomsites.com.br/#order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9998] group animate-slideUp"
    >
      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl px-5 py-4 shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-2xl bg-orange-500 animate-ping opacity-20" />

        <div className="relative flex items-center gap-3">
          <div>
            <div className="text-xs opacity-80">{t.sub}</div>
            <div className="font-bold text-sm">{t.cta}</div>
          </div>
          <div className="text-2xl">🚀</div>
        </div>
      </div>
    </a>
  );
}
