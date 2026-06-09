'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);
  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-white tracking-tight">
            <span className="text-white">PRO</span>
            <span className="text-white/60">PAGE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#templates"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t.navbar.templates}
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t.navbar.howItWorks}
            </a>
            <a
              href="/#pricing"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t.navbar.pricing}
            </a>
            <a
              href="/#testimonials"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t.navbar.testimonials}
            </a>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-white/80"
              >
                <span className="text-base">{currentLang.flag}</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/40" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#141414] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-white/10 text-white'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#order"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-all"
            >
              {t.navbar.getYourPage}
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-4 py-6 space-y-4">
          <a
            href="/#templates"
            className="block text-white/60 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t.navbar.templates}
          </a>
          <a
            href="/#how-it-works"
            className="block text-white/60 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t.navbar.howItWorks}
          </a>
          <a
            href="/#pricing"
            className="block text-white/60 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t.navbar.pricing}
          </a>
          <a
            href="/#testimonials"
            className="block text-white/60 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t.navbar.testimonials}
          </a>

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  language === lang.code
                    ? 'bg-white/15 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <a
            href="#order"
            className="block bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-white/90"
            onClick={() => setMobileOpen(false)}
          >
            {t.navbar.getYourPage}
          </a>
        </div>
      )}
    </nav>
  );
}
