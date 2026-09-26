import type { Localized } from '../i18n';

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

/** Regulators / frameworks the firm monitors — rendered in the marquee + expertise. */
export const regulators: { label: string; region: Localized }[] = [
  { label: 'PIPL', region: { en: 'China · data', zh: '中国 · 数据', ar: 'الصين · البيانات' } },
  {
    label: 'CSL',
    region: { en: 'China · cybersecurity', zh: '中国 · 网络安全', ar: 'الصين · الأمن السيبراني' },
  },
  {
    label: 'DSL',
    region: { en: 'China · data security', zh: '中国 · 数据安全', ar: 'الصين · أمن البيانات' },
  },
  {
    label: 'ICP 备案',
    region: { en: 'China · web filing', zh: '中国 · 网站备案', ar: 'الصين · تسجيل المواقع' },
  },
  {
    label: 'SAMR',
    region: { en: 'China · registry', zh: '中国 · 市场监管', ar: 'الصين · السجل التجاري' },
  },
  {
    label: 'MISA',
    region: { en: 'Saudi · investment', zh: '沙特 · 投资许可', ar: 'السعودية · الاستثمار' },
  },
  {
    label: 'SAGIA',
    region: { en: 'Saudi · licensing', zh: '沙特 · 牌照', ar: 'السعودية · التراخيص' },
  },
  {
    label: 'PDPL',
    region: { en: 'Saudi · data', zh: '沙特 · 数据保护', ar: 'السعودية · حماية البيانات' },
  },
  {
    label: 'NCA-ECC',
    region: { en: 'Saudi · cyber', zh: '沙特 · 网络安全', ar: 'السعودية · الأمن السيبراني' },
  },
  {
    label: 'UAE PDPL',
    region: { en: 'UAE · data', zh: '阿联酋 · 数据保护', ar: 'الإمارات · حماية البيانات' },
  },
  {
    label: 'VISION 2030',
    region: { en: 'Saudi · macro', zh: '沙特 · 宏观战略', ar: 'السعودية · الرؤية' },
  },
  {
    label: 'Canton Fair',
    region: { en: 'China · trade', zh: '中国 · 广交会', ar: 'الصين · معرض قوانغتشو' },
  },
];

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
  contact: '/contact',
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
