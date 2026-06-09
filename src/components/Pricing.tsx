'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const features = t.pricing.features;

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="bg-dark-900 border-2 border-accent rounded-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="text-6xl font-bold text-white">$40</span>
            <p className="mt-2 text-gray-400">{t.pricing.oneTime}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#order"
            className="block w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 rounded-lg text-center transition-colors"
          >
            {t.pricing.cta}
          </Link>
          <p className="mt-4 text-gray-500 text-xs text-center">
            {t.pricing.domainNote}
          </p>
        </div>
      </div>
    </section>
  );
}
