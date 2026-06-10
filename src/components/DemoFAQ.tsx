'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface DemoFAQProps {
  faq: { q: string; a: string }[];
  accent: string;
  accentRgb?: string;
}

export default function DemoFAQ({ faq, accent, accentRgb }: DemoFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.demoFAQ.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.demoFAQ.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-dark-900 rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: accent }}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
