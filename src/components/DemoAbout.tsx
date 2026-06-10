'use client';

import { CheckCircle } from 'lucide-react';

interface DemoAboutProps {
  title: string;
  text: string;
  features: { label: string }[];
  ownerName?: string;
  ownerRole?: string;
  ownerImage?: string;
  accent: string;
}

export default function DemoAbout({
  title,
  text,
  features,
  ownerName,
  ownerRole,
  ownerImage,
  accent,
}: DemoAboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="mt-5 text-gray-400 text-lg leading-relaxed">
              {text}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: accent }} />
                  <span className="text-gray-300 text-sm font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {ownerImage && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <img
                  src={ownerImage}
                  alt={ownerName || title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                {ownerName && (
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">{ownerName}</p>
                    {ownerRole && (
                      <p className="text-gray-300 text-sm">{ownerRole}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
