/** Locale-relative routes without leading/trailing slashes (English canonical). */
export const staticRoutes = [
  '',
  'services',
  'china-support',
  'industries',
  'case-studies',
  'engagement',
  'about',
  'process',
  'faq',
  'insights',
  'readiness',
  'contact',
  'legal',
  'legal/privacy',
  'legal/terms',
  'legal/disclaimer',
] as const;

export type StaticRoute = (typeof staticRoutes)[number];
