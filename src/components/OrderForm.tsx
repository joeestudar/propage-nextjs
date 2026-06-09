'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OrderForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    template: '',
    details: '',
  });

  const templateStyles = t.orderForm.styles;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(t.orderForm.error);
      }
    } catch {
      alert(t.orderForm.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.orderForm.title}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {t.orderForm.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-dark-800 border border-dark-700 rounded-2xl p-6 sm:p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              placeholder="John Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              placeholder="john@business.com"
            />
          </div>

          {/* Business Name */}
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.businessLabel}
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              placeholder="Your Business LLC"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.phoneLabel}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Template Style */}
          <div>
            <label
              htmlFor="template"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.templateLabel}
            </label>
            <select
              id="template"
              name="template"
              required
              value={formData.template}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent transition-colors"
            >
              <option value="" disabled>
                {t.orderForm.selectStyle}
              </option>
              {templateStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              {t.orderForm.detailsLabel}
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder={t.orderForm.detailsPlaceholder}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                {t.orderForm.processing}
              </>
            ) : (
              t.orderForm.payButton
            )}
          </button>

          {/* PayPal Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-600" />
            </div>
            <div className="relative flex justify-center text-xs text-gray-500">
              <span className="bg-dark-800 px-3">{t.orderForm.or}</span>
            </div>
          </div>

          <button
            type="button"
            disabled
            className="w-full bg-[#0070ba] hover:bg-[#005ea6] disabled:opacity-50 text-white font-semibold py-3.5 rounded-lg transition-colors"
          >
            {t.orderForm.paypalButton}
          </button>
        </form>
      </div>
    </section>
  );
}
