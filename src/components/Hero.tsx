'use client';

import Link from 'next/link';
import { Clock, DollarSign, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const badges = [
    { icon: Clock, label: t.hero.badge48h },
    { icon: DollarSign, label: t.hero.badgeFlat },
    { icon: Sparkles, label: t.hero.badgeCustom },
  ];

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-dark-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#order"
            className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            {t.hero.ctaGetPage}
          </Link>
          <Link
            href="#templates"
            className="border border-dark-600 hover:border-dark-400 text-gray-300 hover:text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            {t.hero.ctaViewTemplates}
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-400">
              <badge.icon size={18} className="text-accent" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
