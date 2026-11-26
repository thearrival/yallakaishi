import type { Localized } from '../i18n';

export interface CoreService {
  slug: string;
  icon: string;
  index: string;
  title: Localized;
  summary: Localized;
  body: Localized;
  deliverables: Localized[];
  timeline: Localized;
  href: string;
}

export const coreServices: CoreService[] = [
  {
    slug: 'international-growth',
    icon: 'globe',
    index: '01',
    title: {
      en: 'International growth for Chinese companies',
      zh: '中国企业国际增长',
      ar: 'النمو الدولي للشركات الصينية',
    },
    summary: {
      en: 'Export-readiness, brand positioning, localization, demand generation, and partner development.',
      zh: '出口准备、品牌定位、本地化、需求生成和合作伙伴开发。',
      ar: 'الجاهزية للتصدير، وتحديد المواقع، والتوطين، وتوليد الطلب، وتطوير الشركاء.',
    },
    body: {
      en: 'We help Chinese companies reach international buyers and build a repeatable export-growth engine.',
      zh: '我们帮助中国公司触达国际买家并建立可重复的出口增长引擎。',
      ar: 'نساعد الشركات الصينية في الوصول إلى المشترين الدوليين وبناء محرك نمو صادرات قابل للتكرار.',
    },
    deliverables: [
      { en: 'Export-readiness assessment', zh: '出口准备评估', ar: 'تقييم الجاهزية للتصدير' },
      {
        en: 'International brand positioning',
        zh: '国际品牌定位',
        ar: 'تحديد المواقع للعلامة التجارية internationally',
      },
      {
        en: 'Localized website and landing pages',
        zh: '本地化网站与落地页',
        ar: 'موقع وصفحات هبوط مترجمة',
      },
      { en: 'Demand generation plan', zh: '需求生成计划', ar: 'خطة توليد الطلب' },
    ],
    timeline: { en: '4–8 weeks', zh: '4–8 周', ar: '4–8 أسابيع' },
    href: '/contact',
  },
  {
    slug: 'china-market-access',
    icon: 'building',
    index: '02',
    title: {
      en: 'China market access for international companies',
      zh: '国际企业进入中国市场',
      ar: 'الوصول إلى السوق الصينية للشركات الدولية',
    },
    summary: {
      en: 'Opportunity assessment, staged entry roadmap, localization, and qualified local support.',
      zh: '机会评估、分阶段进入路线图、本地化和合格的本地支持。',
      ar: 'تقييم الفرص، وخارطة طريق دخول مُدرّجة، والتوطين، والدعم المحلي المؤهل.',
    },
    body: {
      en: 'We help international companies assess and enter China with a practical, staged route to market.',
      zh: '我们帮助国际企业以实用、分阶段的路径评估并进入中国市场。',
      ar: 'نساعد الشركات الدولية في تقييم والدخول إلى الصين بمسار عملي ومُدرّج إلى السوق.',
    },
    deliverables: [
      { en: 'China opportunity assessment', zh: '中国市场机会评估', ar: 'تقييم فرص السوق الصينية' },
      { en: 'Staged entry roadmap', zh: '分阶段进入路线图', ar: 'خارطة طريق دخول مُدرّجة' },
      { en: 'Localization plan', zh: '本地化计划', ar: 'خطة توطين' },
      { en: 'Partner discovery', zh: '合作伙伴发现', ar: 'اكتشاف الشركاء' },
    ],
    timeline: { en: '4–8 weeks', zh: '4–8 周', ar: '4–8 أسابيع' },
    href: '/contact',
  },
  {
    slug: 'supplier-partner-discovery',
    icon: 'search',
    index: '03',
    title: {
      en: 'Supplier and partner discovery',
      zh: '供应商与合作伙伴发现',
      ar: 'اكتشاف الموردين والشركاء',
    },
    summary: {
      en: 'Requirement definition, search, shortlist, comparison, and agreed verification tier.',
      zh: '需求定义、搜索、短名单、对比和约定的验证层级。',
      ar: 'تحديد المتطلبات، والبحث، والقائمة المختصرة، والمقارنة، ومستوى التحقق المتفق عليه.',
    },
    body: {
      en: 'We coordinate supplier and partner discovery with documented checks and clear limitations.',
      zh: '我们协调供应商与合作伙伴发现，并提供有据可查的检查和明确的限制。',
      ar: 'ننسق اكتشاف الموردين والشركاء مع فحوصات موثّقة وحدود واضحة.',
    },
    deliverables: [
      { en: 'Requirement definition', zh: '需求定义', ar: 'تحديد المتطلبات' },
      { en: 'Supplier shortlist', zh: '供应商短名单', ar: 'قائمة موردين مختصرة' },
      { en: 'Comparison matrix', zh: '对比矩阵', ar: 'مصفوفة مقارنة' },
      { en: 'Verification report', zh: '验证报告', ar: 'تقرير تحقق' },
    ],
    timeline: { en: '3–6 weeks', zh: '3–6 周', ar: '3–6 أسابيع' },
    href: '/contact',
  },
  {
    slug: 'digital-demand-generation',
    icon: 'mail',
    index: '04',
    title: {
      en: 'Digital demand generation and brand execution',
      zh: '数字需求生成与品牌执行',
      ar: 'توليد الطلب الرقمي وتنفيذ العلامة التجارية',
    },
    summary: {
      en: 'Website and conversion landing pages, SEO and content, paid media, CRM workflows, and analytics.',
      zh: '网站与转化落地页、SEO 与内容、付费媒体、CRM 工作流和分析。',
      ar: 'موقع وصفحات هبوط للتحويل، SEO والمحتوى، الوسائط المدفوعة، سير عمل CRM، والتحليلات.',
    },
    body: {
      en: 'We connect campaign work to market selection, localization, partner development, and commercial learning.',
      zh: '我们将活动工作与市场选择、本地化、合作伙伴开发和商业学习相结合。',
      ar: 'نربط عمل الحملات باختيار السوق، والتوطين، وتطوير الشركاء، والتعلم التجاري.',
    },
    deliverables: [
      { en: 'Website and landing pages', zh: '网站与落地页', ar: 'موقع وصفحات هبوط' },
      { en: 'SEO and content strategy', zh: 'SEO 与内容策略', ar: 'استراتيجية SEO والمحتوى' },
      { en: 'Paid media plan', zh: '付费媒体计划', ar: 'خطة وسائط مدفوعة' },
      { en: 'CRM and analytics setup', zh: 'CRM 与分析设置', ar: 'إعداد CRM والتحليلات' },
    ],
    timeline: { en: '6–10 weeks', zh: '6–10 周', ar: '6–10 أسابيع' },
    href: '/contact',
  },
  {
    slug: 'ai-enabled-operations',
    icon: 'chip',
    index: '05',
    title: {
      en: 'AI-enabled business operations',
      zh: 'AI 赋能业务运营',
      ar: 'عمليات الأعمال المدعومة بالذكاء الاصطناعي',
    },
    summary: {
      en: 'Research triage, multilingual drafting, translation memory, lead enrichment, CRM hygiene, and reporting automation.',
      zh: '研究分流、多语言起草、翻译记忆、线索丰富、CRM 卫生和报告自动化。',
      ar: 'فرز البحث، والصياغة متعددة اللغات، وذاكرة الترجمة، وإثراء العملاء، ونظافة CRM، وأتمتة التقارير.',
    },
    body: {
      en: 'AI accelerates research and production; people validate sources, translation, supplier claims, and recommendations.',
      zh: 'AI 加速研究与生产；人员验证来源、翻译、供应商声明和建议。',
      ar: 'الذكاء الاصطناعي يسرع البحث والإنتاج؛ والبشر يتحققون من المصادر والترجمة وادعاءات الموردين والتوصيات.',
    },
    deliverables: [
      { en: 'Research triage workflow', zh: '研究分流工作流', ar: 'سير عمل فرز البحث' },
      { en: 'Translation memory', zh: '翻译记忆', ar: 'ذاكرة الترجمة' },
      { en: 'Lead enrichment', zh: '线索丰富', ar: 'إثراء العملاء' },
      { en: 'Reporting automation', zh: '报告自动化', ar: 'أتمتة التقارير' },
    ],
    timeline: { en: '2–4 weeks', zh: '2–4 周', ar: '2–4 أسابيع' },
    href: '/contact',
  },
  {
    slug: 'partner-ecosystem',
    icon: 'globe',
    index: '06',
    title: {
      en: 'Partner ecosystem and business matchmaking',
      zh: '合作伙伴生态系统与商业撮合',
      ar: 'نظام الشركاء والتوفيق التجاري',
    },
    summary: {
      en: 'Curated introductions to buyers, suppliers, distributors, service providers, investors, and trade organizations.',
      zh: '向买家、供应商、分销商、服务提供商、投资者和贸易组织进行精选介绍。',
      ar: 'مقدمة مختارة للمشترين والموردين والموزعين ومقدمي الخدمات والمستثمرين والمنظمات التجارية.',
    },
    body: {
      en: 'Matchmaking is an introduction service, not an endorsement or guarantee. We disclose any referral fee or commercial interest.',
      zh: '撮合是介绍服务，不是背书或保证。我们披露任何推荐费或商业利益。',
      ar: 'التوفيق هو خدمة تقديم، وليس تأييدًا أو ضمانًا. نكشف عن أي رسوم إحالة أو مصلحة تجارية.',
    },
    deliverables: [
      { en: 'Partner shortlist', zh: '合作伙伴短名单', ar: 'قائمة شركاء مختصرة' },
      { en: 'Introduction emails', zh: '介绍邮件', ar: 'رسائل تقديم' },
      { en: 'Meeting coordination', zh: '会议协调', ar: 'تنسيق الاجتماعات' },
      { en: 'Disclosure record', zh: '披露记录', ar: 'سجل الإفصاح' },
    ],
    timeline: { en: 'Ongoing', zh: '持续进行', ar: 'مستمر' },
    href: '/contact',
  },
];
