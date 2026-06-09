import { MetadataRoute } from 'next';

const BASE_URL = 'https://propages.shalomsites.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const demos = [
    'plumber', 'electrician', 'dentist', 'restaurant',
    'coach', 'lawyer', 'gym', 'salon',
  ];

  const demoEntries: MetadataRoute.Sitemap = demos.map((slug) => ({
    url: `${BASE_URL}/demos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...demoEntries,
  ];
}
