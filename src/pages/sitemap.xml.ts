import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, localePrefix } from '../i18n';
import { staticRoutes } from '../routes';
import { industries } from '../data/industries';

const SITE = 'https://yallakaishi.com';

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

  for (const route of staticRoutes) {
    const path = route === '' ? '/' : `/${route}/`;
    const langs: Record<string, string> = {};
    for (const l of locales) langs[l] = `${SITE}${localePrefix(l)}${path}`;
    langs['x-default'] = langs.en;
    urls.push({ loc: `${SITE}${path}`, langs });
  }

  for (const ind of industries) {
    const path = `/industries/${ind.slug}/`;
    const langs: Record<string, string> = {};
    for (const l of locales) langs[l] = `${SITE}${localePrefix(l)}${path}`;
    langs['x-default'] = langs.en;
    urls.push({ loc: `${SITE}${path}`, langs });
  }

  for (const p of posts) {
    const path = `/insights/${slugOf(p.id)}/`;
    const langs: Record<string, string> = {};
    for (const l of locales) {
      const exists = (byLocale.get(l) ?? new Set()).has(slugOf(p.id));
      if (exists) langs[l] = `${SITE}${localePrefix(l)}${path}`;
    }
    if (langs.en) {
      langs['x-default'] = langs.en;
      urls.push({ loc: langs.en, lastmod: p.data.date.toISOString().slice(0, 10), langs });
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
          `    <xhtml:link rel="alternate" hreflang="${l === 'zh' ? 'zh-Hans' : l}" href="${href}"/>`,
      ),
      '  </url>',
    ]),
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
