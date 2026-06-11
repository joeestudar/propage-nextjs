import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://propages.shalomsites.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "ProPage Design — Landing Pages for $40 in 48 Hours",
    template: "%s | ProPage Design",
  },
  description:
    "Get a stunning, conversion-optimized landing page for your business in just 48 hours for only $40. SEO-ready, mobile responsive, and built to convert visitors into paying customers.",
  keywords:
    "landing page, local business, plumber landing page, electrician website, dental website, coach website, lawyer website, small business, propage, cheap landing page, fast website, $40 website, 48 hour website",
  authors: [{ name: "ShalomSites", url: SITE_URL }],
  creator: "ShalomSites",
  publisher: "ProPage Design",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ProPage Design — Landing Pages for $40 in 48 Hours",
    description:
      "Get a stunning, conversion-optimized landing page for your business in just 48 hours. SEO-ready and built to convert.",
    url: SITE_URL,
    siteName: "ProPage Design",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ProPage Design — Landing Pages for $40 in 48 Hours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProPage Design — Landing Pages for $40 in 48 Hours",
    description:
      "Get a stunning, conversion-optimized landing page for your business in just 48 hours for only $40.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ProPage Design",
    description: "Custom landing pages for local service businesses. $40, delivered in 48 hours.",
    url: SITE_URL,
    priceRange: "$40",
    areaServed: "Worldwide",
    serviceType: "Web Design",
    provider: {
      "@type": "Organization",
      name: "ShalomSites",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "40",
      priceCurrency: "USD",
      description: "Custom landing page with SEO, mobile responsive design, contact form, and 48-hour delivery",
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
