import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pdw.tecminho.uminho.pt';
  
  const routes = [
    '',
    '/sobre',
    '/solucao',
    '/casos-de-uso',
    '/casos-de-uso/diplomas-digitais',
    '/contactos',
    '/privacidade',
    '/termos',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
