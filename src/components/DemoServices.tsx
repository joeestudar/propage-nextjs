'use client';

import Image from 'next/image';
import {
  Dumbbell,
  Users,
  Apple,
  Laptop,
  Shield,
  Sparkles,
  Zap,
  Wrench,
  Heart,
  Briefcase,
  Globe,
  FileText,
  Battery,
  Repeat,
  Lightbulb,
  Power,
  AlertTriangle,
  Droplets,
  Search,
  Flame,
  Construction,
  Droplet,
  ShieldCheck,
  AlignLeft,
  Star,
  Baby,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  dumbbell: Dumbbell,
  users: Users,
  apple: Apple,
  laptop: Laptop,
  shield: Shield,
  sparkles: Sparkles,
  zap: Zap,
  wrench: Wrench,
  heart: Heart,
  briefcase: Briefcase,
  globe: Globe,
  fileText: FileText,
  battery: Battery,
  repeat: Repeat,
  lightbulb: Lightbulb,
  power: Power,
  alertTriangle: AlertTriangle,
  droplets: Droplets,
  search: Search,
  flame: Flame,
  construction: Construction,
  droplet: Droplet,
  shieldCheck: ShieldCheck,
  alignLeft: AlignLeft,
  star: Star,
  baby: Baby,
  gavel: Wrench,
  scale: Search,
  dollarSign: Sparkles,
  checkCircle: ShieldCheck,
  award: Sparkles,
  graduation: Sparkles,
  trophy: Sparkles,
  monitor: Zap,
  clock: Sparkles,
  creditCard: Sparkles,
};

interface Service {
  title: string;
  desc: string;
  price?: string;
  icon: string;
  image: string;
}

interface DemoServicesProps {
  services: Service[];
  accent: string;
  accentRgb?: string;
}

export default function DemoServices({ services, accent }: DemoServicesProps) {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.demoServices.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            {t.demoServices.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Zap;

            return (
              <div
                key={service.title}
                className="group bg-dark-800 border border-dark-700 rounded-xl overflow-hidden hover:border-dark-500 transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accent}20` }}
                    >
                      <span style={{ color: accent }}>
                        <IconComponent size={20} className="text-current" />
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-white font-semibold">
                          {service.title}
                        </h3>
                        {service.price && (
                          <span
                            className="text-sm font-semibold shrink-0"
                            style={{ color: accent }}
                          >
                            {service.price}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
