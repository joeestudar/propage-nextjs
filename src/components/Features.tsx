'use client';

import {
  Smartphone,
  Search,
  Zap,
  Palette,
  Mail,
  MapPin,
  AtSign,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Smartphone,
      title: t.features.mobileTitle,
      description: t.features.mobileDesc,
    },
    {
      icon: Search,
      title: t.features.seoTitle,
      description: t.features.seoDesc,
    },
    {
      icon: Zap,
      title: t.features.fastTitle,
      description: t.features.fastDesc,
    },
    {
      icon: Palette,
      title: t.features.brandingTitle,
      description: t.features.brandingDesc,
    },
    {
      icon: Mail,
      title: t.features.formsTitle,
      description: t.features.formsDesc,
    },
    {
      icon: MapPin,
      title: t.features.mapsTitle,
      description: t.features.mapsDesc,
    },
    {
      icon: AtSign,
      title: t.features.emailTitle,
      description: t.features.emailDesc,
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.features.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
