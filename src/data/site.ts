/** Single source of truth for contact details, JSON-LD and the footer. */
export const site = {
  name: 'Yalla Kaishi',
  nameAr: 'يلا كايشي',
  nameZh: '亚拉凯世',
  url: 'https://yallakaishi.com',
  email: 'hello@yallakaishi.com',
  phoneDisplay: '+86 187 0678 7811',
  phoneIntl: '+8618706787811',
  whatsappIntl: '8618706787811',
  address: {
    street: 'Jinhui Building, 123 Jiefang South Road',
    district: 'Yuexiu District',
    city: 'Guangzhou',
    province: 'Guangdong',
    country: 'China',
    postal: '510220',
    streetZh: '广东省广州市越秀区人民街道解放南路123号金汇大厦',
    streetAr: 'مبنى جينهوي، 123 شارع جيافانغ الجنوبي، حي يويشيو، غوانغتشو، الصين',
  },
  geo: { lat: 23.1251, lng: 113.2608 },
  hours: 'Mo-Sa 09:00-18:00',
  founded: 2016,
  languages: ['en', 'zh', 'ar'],
  sameAs: [] as string[],
} as const;

/** Structured-data identifier strings reused across pages. */
export const orgIds = {
  legalName: 'Yalla Kaishi',
  alternateName: ['Yalla-Hack', '亚拉凯世', 'يلا كايشي'],
} as const;

/** Footer / nav route definitions (path is locale-relative, always starts with `/`). */
export const routes = {
  home: '/',
  services: '/services',
  chinaSupport: '/china-support',
  industries: '/industries',
  cases: '/case-studies',
  engagement: '/engagement',
  about: '/about',
  process: '/process',
  faq: '/faq',
  insights: '/insights',
  readiness: '/readiness',
  contact: '/contact',
  legal: '/legal',
  privacy: '/legal/privacy',
  terms: '/legal/terms',
  disclaimer: '/legal/disclaimer',
} as const;

export type RouteKey = keyof typeof routes;

/** Routes exposed in the primary navigation. */
export const navRoutes: RouteKey[] = [
  'services',
  'chinaSupport',
  'industries',
  'engagement',
  'insights',
  'about',
];
