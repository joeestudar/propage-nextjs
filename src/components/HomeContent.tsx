'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import OrderForm from '@/components/OrderForm';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const galleryItems = [
  { name: 'Apex Athletic Training', industry: 'Coaching', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600', href: '/demos/coach' },
  { name: 'Meridian Dental', industry: 'Dental', image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=600', href: '/demos/dentist' },
  { name: 'Justice Legal Group', industry: 'Legal', image: 'https://images.pexels.com/photos/8927462/pexels-photo-8927462.jpeg?auto=compress&cs=tinysrgb&w=600', href: '/demos/lawyer' },
  { name: 'Bright Wire Electric', industry: 'Electrician', image: 'https://images.pexels.com/photos/8961101/pexels-photo-8961101.jpeg?auto=compress&cs=tinysrgb&w=600', href: '/demos/electrician' },
  { name: 'Canyon Plumbing', industry: 'Plumber', image: 'https://images.pexels.com/photos/5691602/pexels-photo-5691602.jpeg?auto=compress&cs=tinysrgb&w=600', href: '/demos/plumber' },
];

export default function HomeContent() {
  const { t } = useLanguage();

  const testimonials = [
    { name: 'Sarah K.', role: 'FitPro Coaching, Austin TX', text: t.testimonials.items[0]?.text || 'ProPage delivered our site in 36 hours. We booked 4 new clients in the first week. Best $40 I ever spent.', rating: 5, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Marcus R.', role: 'Spark Electric, Miami FL', text: t.testimonials.items[1]?.text || 'The site looks like I paid $2,000 for it. Customers constantly compliment how professional it looks.', rating: 5, image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Dr. Lisa P.', role: 'Bright Smile Dental, Chicago IL', text: t.testimonials.items[2]?.text || 'We were losing patients to competitors with better websites. ProPage fixed that in 2 days. Our bookings are up 30%.', rating: 5, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  const faqItems = t.faq.items || [
    { q: 'What do I get for $40?', a: 'A complete, custom-branded landing page with your business info, services, contact form, Google Maps, and mobile optimization.' },
    { q: 'How long does it take?', a: 'Most pages are delivered within 48 hours. Complex customizations may take up to 72 hours.' },
    { q: 'Can I make changes after?', a: 'Yes! Your first revision is free. Additional revisions are $10 each.' },
    { q: 'Do I need a domain?', a: 'No! We host your page on a professional subdomain. If you have your own domain, we can point it there for free.' },
    { q: 'What payment methods do you accept?', a: 'Credit/debit cards via Stripe and PayPal. All payments are secure and encrypted.' },
    { q: 'Is there a monthly fee?', a: 'No! $40 is a one-time payment. Your page stays live forever.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Gallery items={galleryItems} />
        <Pricing />
        <Testimonials items={testimonials} />
        <FAQ items={faqItems} />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
