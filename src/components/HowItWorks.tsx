'use client';

import { Layout, Paintbrush, Rocket } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: Layout,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      number: 2,
      icon: Paintbrush,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      number: 3,
      icon: Rocket,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[16.7%] right-[16.7%] h-px bg-dark-600" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Numbered circle */}
                <div className="relative z-10 mx-auto w-16 h-16 bg-dark-900 border-2 border-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-accent font-bold text-xl">
                    {step.number}
                  </span>
                </div>

                <div className="flex justify-center mb-4">
                  <step.icon size={28} className="text-accent" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
