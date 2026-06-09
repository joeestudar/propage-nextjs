import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface DemoContactProps {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  hours: string;
  accent: string;
  accentRgb?: string;
}

export default function DemoContact({
  businessName,
  phone,
  email,
  address,
  city,
  state,
  hours,
  accent,
}: DemoContactProps) {
  const fullAddress = `${address}, ${city}, ${state}`;

  return (
    <section className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            We&apos;d love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <Phone size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
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
                  <Mail size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <MapPin size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Address</p>
                  <p className="text-gray-400 text-sm">{fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  <Clock size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Hours</p>
                  <p className="text-gray-400 text-sm">{hours}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <Phone size={18} />
              Call {businessName}
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden min-h-[350px] flex items-center justify-center">
            <div className="text-center px-6">
              <MapPin size={40} className="mx-auto mb-3 text-gray-500" />
              <p className="text-gray-400 text-sm">{fullAddress}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium hover:underline"
                style={{ color: accent }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
