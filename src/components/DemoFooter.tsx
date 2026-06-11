'use client';

import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface DemoFooterProps {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  accent: string;
  accentRgb?: string;
}

export default function DemoFooter({
  businessName,
  phone,
  email,
  address,
  city,
  state,
  accent,
}: DemoFooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">{businessName}</p>
            <p className="mt-2 text-gray-400 text-sm">
              {t.demoFooter.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Phone size={14} style={{ color: accent }} />
              <a href="https://wa.me/5515997124325?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20minha%20pagina%20de%2040%20usd." className="hover:text-white transition-colors">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={14} style={{ color: accent }} />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} style={{ color: accent }} />
              <span>{address}, {city}, {state}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href={`https://wa.me/5515997124325?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20minha%20pagina%20de%2040%20usd.`}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-lg w-full sm:w-auto transition-colors hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <Phone size={16} />
              {t.demoNavbar.callNow}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-dark-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              {t.demoFooter.copyright.replace('{year}', String(currentYear)).replace('{name}', businessName)}
            </p>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.demoFooter.developedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
