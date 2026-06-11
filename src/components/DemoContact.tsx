'use client';

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface DemoContactProps {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  hours: string;
  businessName: string;
  accent: string;
  accentRgb?: string;
}

export default function DemoContact({
  phone,
  email,
  address,
  city,
  state,
  hours,
  businessName,
  accent,
}: DemoContactProps) {
  const { t } = useLanguage();
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}, ${state}`)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.demoContact.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            {t.demoContact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accent}20` }}
              >
                <Phone size={20} style={{ color: accent }} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.demoContact.phone}</p>
                <a
                  href={`https://wa.me/5515997124325?text=${encodeURIComponent(t.whatsappMessage)}`}
                  className="text-white font-medium hover:underline"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accent}20` }}
              >
                <Mail size={20} style={{ color: accent }} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.demoContact.email}</p>
                <a
                  href={`mailto:${email}`}
                  className="text-white font-medium hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accent}20` }}
              >
                <MapPin size={20} style={{ color: accent }} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.demoContact.address}</p>
                <p className="text-white font-medium">
                  {address}, {city}, {state}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accent}20` }}
              >
                <Clock size={20} style={{ color: accent }} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t.demoContact.hours}</p>
                <p className="text-white font-medium">{hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/5515997124325?text=${encodeURIComponent(t.whatsappMessage)}`}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            <Phone size={20} />
            {t.demoContact.callBusiness.replace('{name}', businessName)}
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            {t.demoContact.googleMaps}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
