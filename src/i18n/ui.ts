import { uiCore, type CoreKey } from './ui-core';
import { uiPages, type PageKey } from './ui-pages';
import type { Locale } from './index';
import { format } from './index';

const all: Record<string, Record<Locale, string>> = { ...uiCore, ...uiPages };

export type TKey = CoreKey | PageKey;

/**
 * Translate a chrome/UI string.
 * Falls back to English, and to the key itself only if the key is unknown
 * (which `astro check` prevents from ever shipping).
 */
export function t(key: TKey, locale: Locale, vars?: Record<string, string | number>): string {
  const entry = all[key];
  const raw = entry ? (entry[locale] ?? entry.en) : key;
  return vars ? format(raw, vars) : raw;
}

export { uiCore, uiPages };
export type { CoreKey, PageKey };
