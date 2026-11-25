import type { Localized } from '../i18n';

export interface Plan {
  slug: string;
  index: string;
  name: Localized;
  tagline: Localized;
  bestFor: Localized;
  includes: Localized[];
  notIncluded: Localized[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    slug: 'fit-check',
    index: '01',
    name: { en: 'Cross-Border Fit Check', zh: '跨境适应性检查', ar: 'فحص التوافق عبر الحدود' },
    tagline: { en: '1–2 weeks', zh: '1–2 周', ar: '1–2 أسبوع' },
    bestFor: {
      en: 'A structured first-pass opportunity assessment, risks, and a recommended next step.',
      zh: '结构化的首次机会评估、风险和推荐的下一步。',
      ar: 'تقييم فرص أولي منظم، والمخاطر، والخطوة التالية الموصى بها.',
    },
    includes: [
      { en: 'Structured intake', zh: '结构化 intake', ar: 'استقبال منظم' },
      { en: 'First-pass opportunity assessment', zh: '首次机会评估', ar: 'تقييم فرص أولي' },
      { en: 'Risks and next step', zh: '风险与下一步', ar: 'المخاطر والخطوة التالية' },
    ],
    notIncluded: [{ en: 'Full bespoke research', zh: '完整定制研究', ar: 'بحث مخصص كامل' }],
  },
  {
    slug: 'opportunity-sprint',
    index: '02',
    name: { en: 'Market Opportunity Sprint', zh: '市场机会冲刺', ar: 'سبرينت فرص السوق' },
    tagline: { en: '3–4 weeks', zh: '3–4 周', ar: '3–4 أسابيع' },
    bestFor: {
      en: 'Focused customer, competitor, and channel research with a 90-day plan.',
      zh: '聚焦客户、竞争对手和渠道研究，附 90 天计划。',
      ar: 'بحث مركز على العملاء والمنافسين والقنوات مع خطة 90 يومًا.',
    },
    includes: [
      {
        en: 'Customer and competitor mapping',
        zh: '客户与竞争对手地图',
        ar: 'خريطة العملاء والمنافسين',
      },
      { en: 'Channel and pricing hypotheses', zh: '渠道与定价假设', ar: 'فرضيات القنوات والتسعير' },
      { en: '90-day plan', zh: '90 天计划', ar: 'خطة 90 يومًا' },
    ],
    notIncluded: [
      { en: 'Execution and media spend', zh: '执行与媒体支出', ar: 'التنفيذ ونفقات الوسائط' },
    ],
    popular: true,
  },
  {
    slug: 'growth-partner',
    index: '03',
    name: { en: 'Growth Partner Retainer', zh: '增长合作伙伴留存', ar: 'احتفاظ شريك النمو' },
    tagline: { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
    bestFor: {
      en: 'Ongoing market activation, content, lead or partner development, and monthly review.',
      zh: '持续的市场激活、内容、线索或合作伙伴开发，以及月度回顾。',
      ar: 'تفعيل السوق المستمر، والمحتوى، وتطوير العملاء أو الشركاء، والمراجعة الشهرية.',
    },
    includes: [
      { en: 'Ongoing market activation', zh: '持续市场激活', ar: 'تفعيل السوق المستمر' },
      { en: 'Content and campaign execution', zh: '内容与活动执行', ar: 'تنفيذ المحتوى والحملات' },
      {
        en: 'Lead or partner development',
        zh: '线索或合作伙伴开发',
        ar: 'تطوير العملاء أو الشركاء',
      },
      { en: 'Monthly review', zh: '月度回顾', ar: 'مراجعة شهرية' },
    ],
    notIncluded: [
      {
        en: 'Media spend and third-party costs',
        zh: '媒体支出与第三方成本',
        ar: 'نفقات الوسائط والتكاليف第三方',
      },
    ],
  },
];

export const comparisonRows: { label: Localized; values: [Localized, Localized, Localized] }[] = [
  {
    label: { en: 'Commercial model', zh: '合作模式', ar: 'النموذج التجاري' },
    values: [
      { en: 'Fixed fee', zh: '固定费用', ar: 'رسوم ثابتة' },
      { en: 'Capped budget', zh: '封顶预算', ar: 'ميزانية capped' },
      { en: 'Monthly retainer', zh: '月度留存', ar: 'رسوم شهرية' },
    ],
  },
  {
    label: { en: 'Typical duration', zh: '典型周期', ar: 'المدة المعتادة' },
    values: [
      { en: '1–2 weeks', zh: '1–2 周', ar: '1–2 أسبوع' },
      { en: '3–4 weeks', zh: '3–4 周', ar: '3–4 أسابيع' },
      { en: 'Monthly', zh: '按月', ar: 'شهريًا' },
    ],
  },
  {
    label: { en: 'Best for', zh: '适合', ar: 'الأفضل لـ' },
    values: [
      { en: 'First step', zh: '第一步', ar: 'الخطوة الأولى' },
      { en: 'Focused research', zh: '聚焦研究', ar: 'بحث-centered' },
      { en: 'Ongoing growth', zh: '持续增长', ar: 'نمو مستمر' },
    ],
  },
];
