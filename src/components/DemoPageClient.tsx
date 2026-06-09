'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { demoTranslations, DemoTranslations } from '@/i18n/demoTranslations';
import DemoNavbar from '@/components/DemoNavbar';
import DemoHero from '@/components/DemoHero';
import DemoServices from '@/components/DemoServices';
import DemoTestimonials from '@/components/DemoTestimonials';
import DemoContact from '@/components/DemoContact';
import DemoFooter from '@/components/DemoFooter';
import { Language } from '@/i18n/translations';

interface Demo {
  slug: string;
  businessName: string;
  heroTitle: string;
  heroSubtitle: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  hours: string;
  accent: string;
  accentRgb: string;
  heroImage: string;
  tagline: string;
  stats: { value: string; label: string }[];
  services: { title: string; desc: string; price?: string; icon: string; image: string }[];
  testimonials: { name: string; role: string; text: string; rating: number; image: string }[];
}

interface DemoPageClientProps {
  demo: Demo;
}

export default function DemoPageClient({ demo }: DemoPageClientProps) {
  const { language, t } = useLanguage();
  
  // Get translations for this demo
  const demoTrans = demoTranslations[demo.slug]?.[language] || demoTranslations[demo.slug]?.['en'];
  
  if (!demoTrans) {
    // Fallback: use demo data as-is if no translations
    return (
      <div className="min-h-screen bg-dark-900">
        <DemoNavbar
          businessName={demo.businessName}
          phone={demo.phone}
          accent={demo.accent}
        />
        <DemoHero
          title={demo.heroTitle}
          subtitle={demo.heroSubtitle}
          image={demo.heroImage}
          accent={demo.accent}
          accentRgb={demo.accentRgb}
          stats={demo.stats}
          ctaText={t.demoNavbar.callNow}
          ctaLink={`tel:${demo.phone}`}
        />
        <DemoServices
          services={demo.services}
          accent={demo.accent}
        />
        <DemoTestimonials
          testimonials={demo.testimonials}
          accent={demo.accent}
        />
        <DemoContact
          phone={demo.phone}
          email={demo.email}
          address={demo.address}
          city={demo.city}
          state={demo.state}
          hours={demo.hours}
          businessName={demo.businessName}
          accent={demo.accent}
        />
        <DemoFooter
          businessName={demo.businessName}
          phone={demo.phone}
          email={demo.email}
          address={demo.address}
          city={demo.city}
          state={demo.state}
          accent={demo.accent}
        />
      </div>
    );
  }

  // Map translated services to the format expected by DemoServices
  const translatedServices = demoTrans.services.map((service, i) => ({
    ...service,
    icon: demo.services[i]?.icon || 'zap',
    image: demo.services[i]?.image || '',
  }));

  // Map translated testimonials
  const translatedTestimonials = demoTrans.testimonials.map((test, i) => ({
    name: demo.testimonials[i]?.name || '',
    role: demo.testimonials[i]?.role || '',
    text: test.text,
    rating: demo.testimonials[i]?.rating || 5,
    image: demo.testimonials[i]?.image || '',
  }));

  return (
    <div className="min-h-screen bg-dark-900">
      <DemoNavbar
        businessName={demo.businessName}
        phone={demo.phone}
        email={demo.email}
        accent={demo.accent}
      />
      <DemoHero
        businessName={demo.businessName}
        heroTitle={demoTrans.heroTitle}
        heroSubtitle={demoTrans.heroSubtitle}
        heroImage={demo.heroImage}
        phone={demo.phone}
        accent={demo.accent}
        accentRgb={demo.accentRgb}
        stats={demoTrans.stats}
        ctaText={t.demoNavbar.callNow}
        ctaLink={`tel:${demo.phone}`}
      />
      <DemoServices
        services={translatedServices}
        accent={demo.accent}
      />
      <DemoTestimonials
        testimonials={translatedTestimonials}
        accent={demo.accent}
      />
      <DemoContact
        phone={demo.phone}
        email={demo.email}
        address={demo.address}
        city={demo.city}
        state={demo.state}
        hours={demo.hours}
        businessName={demo.businessName}
        accent={demo.accent}
      />
      <DemoFooter
        businessName={demo.businessName}
        phone={demo.phone}
        email={demo.email}
        address={demo.address}
        city={demo.city}
        state={demo.state}
        accent={demo.accent}
      />
    </div>
  );
}
