'use client';

import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">
              <span className="text-white">PRO</span>
              <span className="text-white/60">PAGE</span>
            </div>
            <p className="text-white/40 text-sm">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.footer.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.footer.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.footer.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>{t.footer.landingPages}</li>
              <li>{t.footer.seoSetup}</li>
              <li>{t.footer.customDesign}</li>
              <li>{t.footer.fastDelivery}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              {t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
            <div className="flex items-center gap-1.5 text-white/30 text-xs">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.footer.developedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
