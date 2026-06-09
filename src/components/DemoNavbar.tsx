'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
];

interface DemoNavbarProps {
  businessName: string;
  phone: string;
  email?: string;
  accent: string;
  accentRgb?: string;
}

export default function DemoNavbar({ businessName, phone, email, accent }: DemoNavbarProps) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg sm:text-xl font-bold text-white truncate max-w-[50%]">
            {businessName}
          </a>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
              </a>
            )}
            
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
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: accent }}
            >
              <Phone size={16} />
              {t.demoNavbar.callNow}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-dark-800 border-t border-dark-700">
          <div className="px-4 py-4 space-y-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                {email}
              </a>
            )}

            {/* Mobile Language Switcher */}
            <div className="flex gap-2 py-2">
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
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-2 text-white font-semibold text-sm px-5 py-3 rounded-lg w-full transition-colors"
              style={{ backgroundColor: accent }}
            >
              <Phone size={16} />
              {t.demoNavbar.callNow} — {phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
