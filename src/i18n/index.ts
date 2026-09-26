/**
 * Locale configuration + translation primitives.
 *
 * Design rule: every translated string lives in an object shaped
 * `{ en, zh, ar }` (type `Localized`). Because `Localized` is a
 * `Record` over the full locale union, **TypeScript fails the build**
 * if any locale is missing a string — and `satisfies` rejects typos
 * in key names. The 135-missing-key disaster of v2 is structurally
 * impossible here.
 */

export const locales = ['en', 'zh', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Every translatable string, in all three languages at once. */
export type Localized = Record<Locale, string>;

export interface LocaleMeta {
  /** `lang` attribute */
  code: string;
  /** Native name, shown in the language switcher */
  native: string;
  /** Short label for compact switchers */
  short: string;
  dir: 'ltr' | 'rtl';
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { code: 'en', native: 'English', short: 'EN', dir: 'ltr' },
  zh: { code: 'zh-Hans', native: '中文', short: '中', dir: 'ltr' },
  ar: { code: 'ar', native: 'العربية', short: 'ع', dir: 'rtl' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Safe accessor — falls back to English rather than showing a raw key. */
export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}

/** `{name}` interpolation. */
export function format(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
  );
}

/** Path prefix for a locale: `''` for English (default), `/zh`, `/ar`. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Build an internal URL for a locale. `path` must start with `/`. */
export function localUrl(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return `${localePrefix(locale)}${clean}/`.replace('//', '/') || '/';
}

/**
 * Parse `/<locale>/<rest>` into its parts.
 * Returns `locale: 'en'` for un-prefixed URLs.
 */
export function parseLocaleFromPath(pathname: string): { locale: Locale; rest: string } {
  const parts = pathname.split('/').filter(Boolean);
  const first = parts[0];
  if (isLocale(first) && first !== 'en') {
    return { locale: first, rest: parts.slice(1).join('/') };
  }
  // `/en/...` is a valid but non-canonical spelling of the default locale.
  if (first === 'en') {
    return { locale: 'en', rest: parts.slice(1).join('/') };
  }
  return { locale: 'en', rest: parts.join('/') };
}
