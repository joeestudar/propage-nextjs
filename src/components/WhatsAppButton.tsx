'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phone = '5515997124325';
  const message = encodeURIComponent(t.whatsappMessage);
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.469.653 4.881 1.893 6.997L2 30l7.197-1.863A13.93 13.93 0 0016.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.6a11.56 11.56 0 01-5.903-1.616l-.425-.252-4.277 1.112 1.138-4.168-.277-.428A11.53 11.53 0 014.4 16.002c0-6.404 5.2-11.6 11.604-11.6 6.404 0 11.6 5.196 11.6 11.6 0 6.404-5.196 11.6-11.6 11.6zm6.353-8.71c-.348-.174-2.062-1.018-2.38-1.133-.318-.115-.55-.174-.782.174-.233.348-.899 1.133-1.102 1.365-.203.233-.405.261-.753.087-.348-.174-1.468-.541-2.8-1.73-1.032-.932-1.728-2.084-1.932-2.432-.203-.348-.022-.536.152-.71.156-.155.348-.405.522-.608.174-.203.233-.348.348-.58.115-.233.058-.435-.029-.609-.087-.174-.782-1.886-1.072-2.581-.283-.677-.571-.586-.782-.598-.203-.01-.434-.012-.666-.012-.233 0-.609.087-.928.435-.318.348-1.22 1.19-1.22 2.9s1.249 3.364 1.423 3.596c.174.233 2.449 3.738 5.935 5.239.828.357 1.475.57 1.98.73.832.265 1.592.228 2.19.138.668-.1 2.062-.842 2.352-1.656.29-.814.29-1.512.203-1.656-.087-.145-.318-.233-.666-.406z" />
      </svg>
      <span className="text-sm hidden sm:inline">WhatsApp</span>
    </a>
  );
}
