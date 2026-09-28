import { describe, expect, it } from 'vitest';
import {
  defaultLocale,
  format,
  isLocale,
  locales,
  localeMeta,
  localePrefix,
  localUrl,
  metaDescription,
  parseLocaleFromPath,
  pick,
  type Localized,
} from '../src/i18n/index';

describe('locale configuration', () => {
  it('exposes exactly the three shipping locales', () => {
    expect([...locales]).toEqual(['en', 'zh', 'ar']);
    expect(defaultLocale).toBe('en');
  });

  it('gives every locale a code, native name and direction', () => {
    for (const l of locales) {
      const m = localeMeta[l];
      expect(m.code).toBeTruthy();
      expect(m.native).toBeTruthy();
      expect(['ltr', 'rtl']).toContain(m.dir);
    }
    expect(localeMeta.ar.dir).toBe('rtl');
    expect(localeMeta.en.dir).toBe('ltr');
    expect(localeMeta.zh.dir).toBe('ltr');
  });

  it('recognises valid locales only', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('ar')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe('pick', () => {
  const value: Localized = { en: 'Services', zh: '服务', ar: 'الخدمات' };

  it('returns the requested language', () => {
    expect(pick(value, 'zh')).toBe('服务');
    expect(pick(value, 'ar')).toBe('الخدمات');
  });

  it('never returns undefined for a complete entry', () => {
    for (const l of locales) expect(pick(value, l)).toBeTruthy();
  });
});

describe('format', () => {
  it('interpolates named placeholders', () => {
    expect(format('Step {n} of {t}', { n: 2, t: 3 })).toBe('Step 2 of 3');
  });

  it('leaves unknown placeholders intact instead of printing undefined', () => {
    expect(format('Hello {name}', {})).toBe('Hello {name}');
  });

  it('is a no-op without vars', () => {
    expect(format('plain text')).toBe('plain text');
  });
});

describe('URL building', () => {
  it('prefixes only non-default locales', () => {
    expect(localePrefix('en')).toBe('');
    expect(localePrefix('zh')).toBe('/zh');
    expect(localePrefix('ar')).toBe('/ar');
  });

  it('always emits a trailing slash (GitHub Pages directory mode)', () => {
    expect(localUrl('en', '/services')).toBe('/services/');
    expect(localUrl('zh', '/services')).toBe('/zh/services/');
    expect(localUrl('ar', '/')).toBe('/ar/');
    expect(localUrl('en', '/')).toBe('/');
  });

  it('never doubles the slash', () => {
    expect(localUrl('zh', '/')).toBe('/zh/');
    expect(localUrl('en', '/legal/privacy/')).toBe('/legal/privacy/');
  });
});

describe('parseLocaleFromPath', () => {
  it('treats unprefixed paths as English', () => {
    expect(parseLocaleFromPath('/services')).toEqual({ locale: 'en', rest: 'services' });
    expect(parseLocaleFromPath('/')).toEqual({ locale: 'en', rest: '' });
  });

  it('strips the zh / ar prefixes', () => {
    expect(parseLocaleFromPath('/zh/services')).toEqual({ locale: 'zh', rest: 'services' });
    expect(parseLocaleFromPath('/ar/insights/pdpl-meets-pipl')).toEqual({
      locale: 'ar',
      rest: 'insights/pdpl-meets-pipl',
    });
  });

  it('normalises a non-canonical /en/ prefix', () => {
    expect(parseLocaleFromPath('/en/services')).toEqual({ locale: 'en', rest: 'services' });
  });

  it('keeps nested rest paths intact', () => {
    expect(parseLocaleFromPath('/zh/legal/privacy')).toEqual({
      locale: 'zh',
      rest: 'legal/privacy',
    });
  });
});

describe('metaDescription', () => {
  it('returns a short first sentence untouched', () => {
    const body = 'Restaurants need halal certification. Then comes labelling.';
    expect(metaDescription(body)).toBe('Restaurants need halal certification.');
  });

  it('caps a long opening sentence and never exceeds the limit', () => {
    const long =
      'Whether you are placing orders into the Pearl River Delta or setting up production in the Gulf, the risks are the same: certificates that were never renewed, capacity that exists only on paper, and quality systems with no records behind them.';
    const out = metaDescription(long);
    expect(out.length).toBeLessThanOrEqual(158);
    expect(out.endsWith('…')).toBe(true);
  });

  it('clips on a word boundary rather than mid-word', () => {
    const out = metaDescription(
      'Satisfyingly uncomplicated administrative choreography for international entrants seeking a regional licence without unnecessary delay or unnecessary expense in a foreign jurisdiction today.',
    );
    expect(out.length).toBeLessThanOrEqual(158);
    expect(out.endsWith('…')).toBe(true);
    // the last token before the ellipsis is a whole word, not a fragment
    expect(out.slice(0, -1).trim().split(' ').pop()).toMatch(/^[A-Za-z]+$/);
  });

  it('splits on Chinese full stops as well as Latin ones', () => {
    expect(metaDescription('这是第一句。这是第二句。')).toBe('这是第一句。');
  });

  it('handles copy with no sentence break at all', () => {
    const out = metaDescription('A single unbroken run of words that never terminates');
    expect(out).toBe('A single unbroken run of words that never terminates');
  });

  it('respects a custom limit', () => {
    expect(
      metaDescription('One two three four five six seven eight.', 20).length,
    ).toBeLessThanOrEqual(20);
  });
});
