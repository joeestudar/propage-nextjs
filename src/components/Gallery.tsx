'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

interface GalleryItem {
  name: string;
  industry: string;
  image: string;
  href: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const { t } = useLanguage();

  return (
    <section id="templates" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="group bg-dark-800 border border-dark-700 rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-dark-900/80 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.industry}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.name}
                </h3>
                <Link
                  href={item.href}
                  className="text-accent text-sm font-medium hover:text-accent-light transition-colors"
                >
                  {t.gallery.viewDemo}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
