import type { Localized } from '../i18n';

export interface Plan {
  slug: string;
  index: string;
  name: Localized;
  tagline: Localized;
  price: Localized;
  priceNote: Localized;
  bestFor: Localized;
  includes: Localized[];
  notIncluded: Localized[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    slug: 'china-test',
    index: '01',
    name: { en: 'China Test', zh: '中国测试', ar: 'اختبار الصين' },
    tagline: {
      en: '30 days, one time',
      zh: '30 天，一次性',
      ar: '30 يومًا، مرة واحدة',
    },
    price: { en: '¥4,800', zh: '¥4,800', ar: '¥4,800' },
    priceNote: {
      en: 'about $690',
      zh: '约 $690',
      ar: 'حوالي $690',
    },
    bestFor: {
      en: 'First-time entrants who need a market check and a first set of conversations.',
      zh: '首次进入市场、需要市场检查和第一批对话的客户。',
      ar: 'الداخلون لأول مرة الذين يحتاجون فحص سوق وأول مجموعة من المحادثات.',
    },
    includes: [
      { en: 'Market check', zh: '市场检查', ar: 'فحص السوق' },
      { en: 'Chinese profile', zh: '中文资料', ar: 'ملف بالصينية' },
      { en: '20 posts', zh: '20 条内容', ar: '20 منشورًا' },
      {
        en: '10 target buyers contacted',
        zh: '联系 10 位目标买家',
        ar: 'التواصل مع 10 مشترين مستهدفين',
      },
      { en: 'Results report', zh: '结果报告', ar: 'تقرير النتائج' },
    ],
    notIncluded: [
      { en: 'Government fees and disbursements', zh: '政府费用与支出', ar: 'رسوم حكومية ونفقات' },
    ],
  },
  {
    slug: 'growth',
    index: '02',
    name: { en: 'Growth', zh: '增长', ar: 'نمو' },
    tagline: { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
    price: { en: '¥9,800', zh: '¥9,800', ar: '¥9,800' },
    priceNote: { en: 'about $1,400', zh: '约 $1,400', ar: 'حوالي $1,400' },
    bestFor: {
      en: 'Teams that want ongoing presence and outreach month after month.',
      zh: '希望持续保持形象并每月触达的团队。',
      ar: 'الفرق التي تريد حضورًا مستمرًا وتواصلًا شهريًا.',
    },
    includes: [
      { en: 'Everything in China Test', zh: '包含中国测试全部内容', ar: 'كل ما في اختبار الصين' },
      { en: 'Ongoing posts', zh: '持续内容发布', ar: 'منشورات مستمرة' },
      { en: '30 outreach contacts a month', zh: '每月 30 次触达', ar: '30 تواصلًا شهريًا' },
      { en: 'Reply handling', zh: '回复处理', ar: 'معالجة الردود' },
    ],
    notIncluded: [
      { en: 'Government fees and disbursements', zh: '政府费用与支出', ar: 'رسوم حكومية ونفقات' },
    ],
    popular: true,
  },
  {
    slug: 'full-desk',
    index: '03',
    name: { en: 'Full Desk', zh: '全案服务', ar: 'خدمة كاملة' },
    tagline: { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
    price: { en: '¥19,800', zh: '¥19,800', ar: '¥19,800' },
    priceNote: { en: 'about $2,830', zh: '约 $2,830', ar: 'حوالي $2,830' },
    bestFor: {
      en: 'Teams that need meetings, partner search and a monthly strategy call.',
      zh: '需要会议安排、合作伙伴搜索和月度策略沟通的团队。',
      ar: 'الفرق التي تحتاج إلى اجتماعات وبحث عن شركاء ومكالمة استراتيجية شهرية.',
    },
    includes: [
      { en: 'Everything in Growth', zh: '包含增长套餐全部内容', ar: 'كل ما في نمو' },
      { en: 'Meetings arranged', zh: '会议安排', ar: 'ترتيب الاجتماعات' },
      {
        en: 'Distributor and partner search',
        zh: '分销商与合作伙伴搜索',
        ar: 'بحث عن موزعين وشركاء',
      },
      { en: 'Monthly strategy call', zh: '月度策略沟通', ar: 'مكالمة استراتيجية شهرية' },
    ],
    notIncluded: [
      { en: 'Government fees and disbursements', zh: '政府费用与支出', ar: 'رسوم حكومية ونفقات' },
    ],
  },
];

export const comparisonRows: { label: Localized; values: [Localized, Localized, Localized] }[] = [
  {
    label: { en: 'Commercial model', zh: '合作模式', ar: 'النموذج التجاري' },
    values: [
      { en: 'One-time fee', zh: '一次性费用', ar: 'رسوم لمرة واحدة' },
      { en: 'Monthly fee', zh: '月费', ar: 'رسوم شهرية' },
      { en: 'Monthly fee', zh: '月费', ar: 'رسوم شهرية' },
    ],
  },
  {
    label: { en: 'Typical duration', zh: '典型周期', ar: 'المدة المعتادة' },
    values: [
      { en: '30 days', zh: '30 天', ar: '30 يومًا' },
      { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
      { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
    ],
  },
  {
    label: { en: 'Best for', zh: '适合', ar: 'الأفضل لـ' },
    values: [
      { en: 'First test', zh: '首次测试', ar: 'اختبار أول' },
      { en: 'Ongoing growth', zh: '持续增长', ar: 'نمو مستمر' },
      { en: 'Full service', zh: '全案服务', ar: 'خدمة كاملة' },
    ],
  },
];
