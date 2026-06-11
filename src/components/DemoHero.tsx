'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface DemoHeroProps {
  businessName?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
  phone?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  accent: string;
  accentRgb: string;
  stats: { value: string; label: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export default function DemoHero({
  businessName,
  heroTitle,
  heroSubtitle,
  heroImage,
  phone,
  title,
  subtitle,
  image,
  accent,
  accentRgb,
  stats,
  ctaText,
  ctaLink,
}: DemoHeroProps) {
  const { t } = useLanguage();
  const heading = heroTitle || title || '';
  const sub = heroSubtitle || subtitle || '';
  const bgImage = heroImage || image || '';

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={heading}
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, rgba(${accentRgb}, 0.15) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {businessName && (
          <p className="text-sm sm:text-base font-medium tracking-wide uppercase mb-4" style={{ color: accent }}>
            {businessName}
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {heading}
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>

        <div className="mt-8">
          {ctaLink ? (
            <a
              href={ctaLink}
              className="inline-block text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              {ctaText || t.demoNavbar.callNow}
            </a>
          ) : phone ? (
            <a
              href={`https://wa.me/5515997124325?text=${encodeURIComponent(t.whatsappMessage)}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <Phone size={20} />
              {t.demoNavbar.callNow}
            </a>
          ) : null}
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: accent }}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
