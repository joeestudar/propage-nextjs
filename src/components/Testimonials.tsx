'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? 'text-accent fill-accent'
              : 'text-dark-500 fill-dark-500'
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials({ items }: TestimonialsProps) {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-dark-800 border border-dark-700 rounded-xl p-6"
            >
              <StarRating rating={item.rating} />

              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
