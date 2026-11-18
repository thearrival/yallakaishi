import type { Localized } from '../i18n';

export interface Industry {
  slug: string;
  index: string;
  icon: string;
  name: Localized;
  headline: Localized;
  body: Localized;
  entryPoints: Localized[];
  risks: Localized[];
}

export const industries: Industry[] = [
  {
    slug: 'b2b-manufacturing-components',
    index: '01',
    icon: 'gear',
    name: {
      en: 'B2B manufacturing and components',
      zh: 'B2B 制造与零部件',
      ar: 'التصنيع B2B والمكونات',
    },
    headline: {
      en: 'Export-ready manufacturers with a differentiated product.',
      zh: '具有差异化产品的出口就绪制造商。',
      ar: 'مصنعون جاهزون للتصدير بمنتج متميز.',
    },
    body: {
      en: 'Chinese manufacturers and component suppliers with export documentation and a decision-maker willing to invest in growth.',
      zh: '具有出口文件和愿意投资增长的决策者的中国制造商和零部件供应商。',
      ar: 'مصنعون وموردو مكونات صينيون مع وثائق تصدير وصانع قرار مستعد للاستثمار في النمو.',
    },
    entryPoints: [
      { en: 'Europe', zh: '欧洲', ar: 'أوروبا' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
      { en: 'America', zh: '美洲', ar: 'الأمريكتان' },
    ],
    risks: [
      { en: 'No Chinese-language presence', zh: '没有中文形象', ar: 'بلا حضور باللغة الصينية' },
      { en: 'No local contacts', zh: '没有本地联系人', ar: 'بلا جهات اتصال محلية' },
      { en: 'Long sales cycle', zh: '销售周期长', ar: 'دورة مبيعات طويلة' },
    ],
  },
  {
    slug: 'consumer-brands',
    index: '02',
    icon: 'cart',
    name: { en: 'Consumer brands', zh: '消费品牌', ar: 'العلامات الاستهلاكية' },
    headline: {
      en: 'Consumer brands with the right to sell abroad.',
      zh: '有权在海外销售的消费品牌。',
      ar: 'علامات استهلاكية لها حق البيع في الخارج.',
    },
    body: {
      en: 'Consumer brands with adequate fulfilment capability and a product that can be adapted for the target market.',
      zh: '具有充足履约能力且产品可适应目标市场的消费品牌。',
      ar: 'علامات استهلاكية ذات قدرة تلبية كافية ومنتج يمكن تكييفه للسوق المستهدف.',
    },
    entryPoints: [
      { en: 'Middle East', zh: '中东', ar: 'الشرق الأوسط' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
    ],
    risks: [
      { en: 'Unverified suppliers', zh: '供应商未经验证', ar: 'موردون غير موثّقين' },
      { en: 'Language gaps', zh: '语言障碍', ar: 'فجوات لغوية' },
      { en: 'Slow response', zh: '响应缓慢', ar: 'استجابة بطيئة' },
    ],
  },
  {
    slug: 'professional-services-education',
    index: '03',
    icon: 'cap',
    name: {
      en: 'Professional services and education',
      zh: '专业服务与教育',
      ar: 'الخدمات المهنية والتعليم',
    },
    headline: {
      en: 'Established companies with a specific China hypothesis.',
      zh: '具有明确中国假设的成熟企业。',
      ar: 'شركات راسخة مع فرضية صينية محددة.',
    },
    body: {
      en: 'International B2B companies with a specific China hypothesis, budget, and executive sponsor.',
      zh: '具有明确中国假设、预算和高管支持的国际 B2B 企业。',
      ar: 'شركات B2B دولية مع فرضية صينية محددة وميزانية وراعٍ تنفيذي.',
    },
    entryPoints: [
      { en: 'Europe', zh: '欧洲', ar: 'أوروبا' },
      { en: 'America', zh: '美洲', ar: 'الأمريكتان' },
      { en: 'Middle East', zh: '中东', ar: 'الشرق الأوسط' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
    ],
    risks: [
      { en: 'Wrong platforms', zh: '平台选择错误', ar: 'منصات غير مناسبة' },
      { en: 'No local trust', zh: '缺乏本地信任', ar: 'بلا ثقة محلية' },
      { en: 'Unclear offer', zh: '价值主张不清', ar: 'عرض غير واضح' },
    ],
  },
];
