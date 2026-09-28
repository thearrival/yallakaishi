import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, localePrefix, type Locale } from '../i18n';
import { staticRoutes } from '../routes';
import { industries } from '../data/industries';
import { coreServices } from '../data/services';

const SITE = 'https://yallakaishi.com';

/** hreflang code emitted in the XML (the `code` from localeMeta, not the folder name). */
const hreflangCode: Record<string, string> = { en: 'en', zh: 'zh-Hans', ar: 'ar' };

export const GET: APIRoute = async () => {
  const posts = await getCollection('insights');
  const slugOf = (id: string) => id.replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '');

  const byLocale = new Map<string, Set<string>>();
  for (const p of posts) {
    const set = byLocale.get(p.data.locale) ?? new Set<string>();
    set.add(slugOf(p.id));
    byLocale.set(p.data.locale, set);
  }

  const urls: { loc: string; lastmod?: string; langs: Record<string, string> }[] = [];

  /**
   * Every localized version gets its own `<url>` entry, and each entry
   * advertises all of its alternates. Listing only the English URL and
   * relying on the alternate links leaves the translated pages without
   * entries of their own in the sitemap.
   */
  const addPath = (
    path: string,
    availableLocales: readonly Locale[] = locales,
    lastmod?: string,
  ) => {
    const langs: Record<string, string> = {};
    for (const l of locales) langs[l] = `${SITE}${localePrefix(l)}${path}`;
    if (!langs.en) return;
    langs['x-default'] = langs.en;
    for (const l of availableLocales) {
      if (!langs[l]) continue;
      urls.push({ loc: langs[l], lastmod, langs });
    }
  };

  for (const route of staticRoutes) {
    addPath(route === '' ? '/' : `/${route}/`);
  }

  for (const ind of industries) {
    addPath(`/industries/${ind.slug}/`);
  }

  for (const svc of coreServices) {
    addPath(`/services/${svc.slug}/`);
  }

  for (const p of posts) {
    const slug = slugOf(p.id);
    const available = locales.filter((l) => (byLocale.get(l) ?? new Set()).has(slug));
    if (available.includes('en')) {
      addPath(`/insights/${slug}/`, available, p.data.date.toISOString().slice(0, 10));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls.flatMap((u) => [
      '  <url>',
      `    <loc>${u.loc}</loc>`,
      ...(u.lastmod ? [`    <lastmod>${u.lastmod}</lastmod>`] : []),
      ...Object.entries(u.langs).map(
        ([l, href]) =>
          `    <xhtml:link rel="alternate" hreflang="${hreflangCode[l] ?? l}" href="${href}"/>`,
      ),
      '  </url>',
    ]),
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
