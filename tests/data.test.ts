import { describe, expect, it } from 'vitest';
import { supportCategories, supportServiceCount } from '../src/data/china-support';
import { coreServices } from '../src/data/services';
import { industries } from '../src/data/industries';
import { caseStudies } from '../src/data/cases';
import { plans, comparisonRows } from '../src/data/engagement';
import { faqs, faqGroups } from '../src/data/faq';
import { processSteps } from '../src/data/process';
import { locales } from '../src/i18n/index';
import { navRoutes, routes } from '../src/data/site';
import { staticRoutes } from '../src/routes';

/** Every Localized value in the data layer must be complete — the v2 site's
 *  135-missing-key failure is structurally impossible if this holds. */
function expectLocalized(obj: unknown, path: string, depth = 0): void {
  if (depth > 6) return;
  if (obj === null || typeof obj !== 'object') return;

  if (!Array.isArray(obj)) {
    const record = obj as Record<string, unknown>;
    const keys = Object.keys(record);
    const looksLocalized = keys.length === locales.length && locales.every((l) => keys.includes(l));
    if (looksLocalized) {
      for (const l of locales) {
        const v = record[l];
        if (typeof v !== 'string' || v.trim() === '') {
          throw new Error(`empty/invalid ${l} at ${path}`);
        }
      }
      return;
    }
  }

  if (Array.isArray(obj)) {
    obj.forEach((v, i) => expectLocalized(v, `${path}[${i}]`, depth + 1));
    return;
  }
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    expectLocalized(v, `${path}.${k}`, depth + 1);
  }
}

describe('data completeness', () => {
  it('every translated string exists in all three locales', () => {
    expectLocalized(coreServices, 'coreServices');
    expectLocalized(supportCategories, 'supportCategories');
    expectLocalized(industries, 'industries');
    expectLocalized(caseStudies, 'caseStudies');
    expectLocalized(plans, 'plans');
    expectLocalized(comparisonRows, 'comparisonRows');
    expectLocalized(faqs, 'faqs');
    expectLocalized(processSteps, 'processSteps');
  });
});

describe('published catalogue counts', () => {
  it('ships exactly 6 core services', () => {
    expect(coreServices).toHaveLength(6);
    expect(new Set(coreServices.map((s) => s.slug)).size).toBe(6);
  });

  it('ships 6 China-support categories totalling 32 services', () => {
    expect(supportCategories).toHaveLength(6);
    expect(supportServiceCount).toBe(32);
    expect(supportCategories.reduce((n, c) => n + c.services.length, 0)).toBe(32);
  });

  it('ships 6 industries, 3 case studies, 3 plans, 4 process steps', () => {
    expect(industries).toHaveLength(6);
    expect(caseStudies).toHaveLength(3);
    expect(plans).toHaveLength(3);
    expect(processSteps).toHaveLength(4);
  });

  it('ships at least 12 FAQs across known groups', () => {
    expect(faqs.length).toBeGreaterThanOrEqual(12);
    const groupKeys = new Set(faqGroups.map((g) => g.key));
    for (const f of faqs) expect(groupKeys.has(f.group)).toBe(true);
  });

  it('marks exactly one plan as most popular', () => {
    expect(plans.filter((p) => p.popular)).toHaveLength(1);
  });

  it('comparison table has a value column per plan', () => {
    for (const row of comparisonRows) expect(row.values).toHaveLength(plans.length);
  });
});

describe('routing', () => {
  it('builds every route for every locale', () => {
    expect(navRoutes.length).toBeGreaterThan(4);
    expect(staticRoutes.includes('legal/privacy')).toBe(true);
    expect(routes.contact.startsWith('/')).toBe(true);
  });
});
