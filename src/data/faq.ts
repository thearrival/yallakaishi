import type { Localized } from '../i18n';

export type FaqGroup = 'engagement' | 'legal' | 'delivery' | 'markets';

export interface FaqItem {
  id: string;
  group: FaqGroup;
  q: Localized;
  a: Localized;
}

export const faqGroups: { key: FaqGroup; label: Localized }[] = [
  {
    key: 'engagement',
    label: { en: 'Engagement & fees', zh: '合作与费用', ar: 'التعاون والرسوم' },
  },
  { key: 'legal', label: { en: 'Legal boundaries', zh: '法律边界', ar: 'الحدود القانونية' } },
  { key: 'delivery', label: { en: 'Delivery & data', zh: '交付与数据', ar: 'التسليم والبيانات' } },
  { key: 'markets', label: { en: 'Markets & languages', zh: '市场与语言', ar: 'الأسواق واللغات' } },
];

export const faqs: FaqItem[] = [
  {
    id: 'pricing',
    group: 'engagement',
    q: { en: 'How do you price your work?', zh: '你们如何定价？', ar: 'كيف تسعّرون عملكم؟' },
    a: {
      en: 'Fixed fee for defined scopes, a capped budget for programmes with uncertainty, and a monthly fee for retainers. Government fees, notarisation and third-party certifications are always passed through at cost with receipts.',
      zh: '明确范围固定费用，不确定项目采用上限预算，留存采用月费。政府费用、公证和第三方认证始终按成本转嫁并附收据。',
      ar: 'رسوم ثابتة للنطاقات المحددة، وميزانية محدودة للبرامج غير المؤكدة، ورسوم شهرية للاحتفاظ. تُمرر رسوم الحكومة والتوثيق والشهادات第三方 luôn بالتكلفة مع الإيصالات.',
    },
  },
  {
    id: 'law-firm',
    group: 'legal',
    q: { en: 'Are you a law firm?', zh: '你们是律师事务所吗？', ar: 'هل أنتم مكتب محاماة؟' },
    a: {
      en: 'No. Yalla Kaishi provides cross-border business services: coordination, operations, translation, diligence and training. Where legal advice is required, we work alongside licensed law firms.',
      zh: '不是。Yalla Kaishi 提供跨境商业服务：协调、运营、翻译、尽职调查和培训。需要法律建议时，我们与持牌律师事务所合作。',
      ar: 'لا. Yalla Kaishi تقدم خدمات تجارية عبر الحدود: التنسيق، والعمليات، والترجمة، والعناية الواجبة، والتدريب. عند الحاجة إلى مشورة قانونية، نعمل مع مكاتب محاماة مرخصة.',
    },
  },
  {
    id: 'guarantee',
    group: 'legal',
    q: {
      en: 'Do you guarantee approvals and visas?',
      zh: '你们保证审批和签证吗？',
      ar: 'هل تضمنون الموافقات والتأشيرات؟',
    },
    a: {
      en: 'No. Approval rests with the relevant authority. What we guarantee is the quality and timeliness of the submission.',
      zh: '不。审批权属于相关机构。我们保证的是提交的质量和及时性。',
      ar: 'لا. الموافقة تعود للسلطة المختصة. ما نضمنه هو جودة وتوقيت التقديم.',
    },
  },
  {
    id: 'timeline',
    group: 'engagement',
    q: { en: 'How fast can you start?', zh: '你们多久可以开始？', ar: 'متى يمكنكم البدء؟' },
    a: {
      en: 'Discovery calls usually happen within two working days. A written proposal follows within three. Work can start the week you approve it.',
      zh: '发现通话通常在两个工作日内进行。书面提案随后三天内提供。批准后当周即可开始。',
      ar: 'عادة ما تتم مكالمات الاكتشاف خلال يومي عمل. يتبعها مقترح مكتوب خلال ثلاثة أيام. يمكن البدء في الأسبوع الذي توافق فيه.',
    },
  },
  {
    id: 'data',
    group: 'delivery',
    q: {
      en: 'How do you handle our data?',
      zh: '你们如何处理我们的数据？',
      ar: 'كيف تتعاملون مع بياناتنا؟',
    },
    a: {
      en: 'Only what the engagement needs, stored in a shared vault you control access to, and never used for marketing.',
      zh: '仅使用项目所需数据，存储在你控制访问权限的共享库中，绝不用于营销。',
      ar: 'فقط ما يحتاجه المشروع، مخزّن في خزنة مشتركة تتحكم في الوصول إليها، ولا يُستخدم للتسويق أبدًا.',
    },
  },
  {
    id: 'supplier-checks',
    group: 'delivery',
    q: {
      en: 'What do you verify for suppliers?',
      zh: '你们对供应商验证什么？',
      ar: 'ماذا تتحققون من الموردين؟',
    },
    a: {
      en: 'Identity, capability, references, and documentation to the contracted level. Supplier discovery is not certification or a guarantee of performance.',
      zh: '身份、能力、参考和文件，达到合同约定的层级。供应商发现不是认证或绩效保证。',
      ar: 'الهوية، والقدرة، والمراجع، والوثائق إلى المستوى المتفق عليه. اكتشاف الموردين ليس شهادة أو ضمانًا للأداء.',
    },
  },
];
