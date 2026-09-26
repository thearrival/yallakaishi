import type { Localized } from '../i18n';

export interface CaseStudy {
  slug: string;
  index: string;
  sector: Localized;
  icon: string;
  title: Localized;
  clientLabel: Localized;
  context: Localized;
  scope: Localized;
  duration: Localized;
  steps: Localized[];
  outcome: Localized;
  proof: { value: Localized; label: Localized }[];
  linkedService: string;
}

/**
 * Anonymised engagement patterns.
 * Client names, logos and testimonials are published only with written permission.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'gulf-caster-market-entry',
    index: '01',
    sector: {
      en: 'Manufacturing · Saudi Arabia',
      zh: '制造 · 沙特阿拉伯',
      ar: 'التصنيع · السعودية',
    },
    icon: 'gear',
    title: {
      en: 'A Foshan caster maker lands its first Saudi distributor',
      zh: '佛山脚轮制造商落地首家沙特分销商',
      ar: 'صانع بواكيز من فوشان يحجز أول موزع سعودي',
    },
    clientLabel: {
      en: 'Industrial components manufacturer (Foshan, CN)',
      zh: '工业部件制造商（中国佛山）',
      ar: 'مصنّع مكونات صناعية (فوشان، الصين)',
    },
    context: {
      en: 'A mid-sized caster and wheel maker had three years of trade-show leads from Riyadh and Jeddah, but every deal stalled at contract stage: buyers wanted a local entity, an Arabic warranty, and evidence the factory could hold tolerances.',
      zh: '一家中型脚轮与轮具制造商连续三年在利雅得、吉达展会上获取线索，但每笔交易都卡在合同阶段：买方要求本地主体、阿语质保，并需要工厂公差能力的证明。',
      ar: 'مصنّع متوسط للبواكيز والعجلات استمر ثلاث سنوات بعملاء من الرياض وجدة، لكن كل صفقة تعثّرت عند العقد: طلب المشترون كيانًا محليًا وضمانًا عربيًا وإثبات قدرة المصنع على تحمل التسامحات.',
    },
    scope: {
      en: 'Partner due diligence on four candidate distributors, bilingual distribution agreement with an exclusivity ladder, Saudi product-registration pathway, and a warranty-claim procedure documented in Arabic.',
      zh: '对四家候选分销商开展尽调，起草带阶梯式独家条款的双语分销协议，梳理沙特产品注册路径，并以阿语文档化质保索赔流程。',
      ar: 'العناية الواجبة مع أربعة موزعين محتملين، واتفاق توزيع ثنائي بسلّم حصص، ومسار تسجيل المنتج في السعودية، وإجراء مطالبة الضمان بالعربية.',
    },
    duration: { en: '11 weeks', zh: '11 周', ar: '11 أسبوعًا' },
    steps: [
      {
        en: 'Week 1–2 — screened 4 candidates, rejected 2 on litigation exposure',
        zh: '第 1–2 周 — 筛选 4 家，因诉讼风险淘汰 2 家',
        ar: 'الأسبوع 1–2 — فرز 4 مرشحين ورفض 2 بسبب القضايا',
      },
      {
        en: 'Week 3–6 — contract negotiated in EN and AR, payment terms secured',
        zh: '第 3–6 周 — 中阿双语谈判合同，锁定付款条件',
        ar: 'الأسبوع 3–6 — تفاوض بالإنجليزية والعربية وتأمين شروط الدفع',
      },
      {
        en: 'Week 7–11 — registration dossier filed, warranty procedure live',
        zh: '第 7–11 周 — 递交注册材料，质保流程上线',
        ar: 'الأسبوع 7–11 — تقديم ملف التسجيل وإطلاق إجراء الضمان',
      },
    ],
    outcome: {
      en: 'First purchase order released 11 weeks after kickoff, with the distributor carrying the warranty liability in-market rather than the manufacturer.',
      zh: '启动后第 11 周开出首张采购订单，质保责任由分销商在本地承担，而非制造商。',
      ar: 'صدر أول أمر شراء بعد 11 أسبوعًا من البدء، وتحمّل الموزع مسؤولية الضمان في السوق بدل المصنّع.',
    },
    proof: [
      {
        value: { en: '4 → 1', zh: '4 → 1', ar: '4 → 1' },
        label: {
          en: 'candidates vetted to appointed',
          zh: '候选尽调至最终任命',
          ar: 'مرشحون تم فحصهم حتى التعيين',
        },
      },
      {
        value: { en: '11 wks', zh: '11 周', ar: '11 أسبوعًا' },
        label: { en: 'kickoff to first PO', zh: '从启动到首单', ar: 'من البدء لأول طلب شراء' },
      },
      {
        value: { en: '0', zh: '0', ar: '0' },
        label: { en: 'disputes in year one', zh: '首年争议次数', ar: 'نزاعات في السنة الأولى' },
      },
    ],
    linkedService: 'partner-due-diligence',
  },
  {
    slug: 'chinese-retailer-pdpl',
    index: '02',
    sector: {
      en: 'Retail & E-commerce · UAE',
      zh: '零售与电商 · 阿联酋',
      ar: 'التجزئة والتجارة الإلكترونية · الإمارات',
    },
    icon: 'cart',
    title: {
      en: 'A Shenzhen retailer opens Dubai without a data surprise',
      zh: '深圳零售商进入迪拜，数据合规零意外',
      ar: 'تاجر من شنتشن يفتح دبي دون مفاجآت بيانات',
    },
    clientLabel: {
      en: 'Cross-border e-commerce brand (Shenzhen, CN)',
      zh: '跨境电商品牌（中国深圳）',
      ar: 'علامة تجارة إلكترونية عابرة (شنتشن، الصين)',
    },
    context: {
      en: 'The brand wanted to launch a Gulf storefront and a WhatsApp-based service desk in the same quarter. Their existing stack sent customer records to China by default — which would have been a breach from day one under the UAE data regime.',
      zh: '该品牌计划在同一季度上线海湾独立站与 WhatsApp 客服。其现有系统默认将客户数据回传中国 — 在阿联酋数据制度下，这从第一天起即属违法。',
      ar: 'أرادت العلامة إطلاق متجر خليجي ومكتب خدمة عبر واتساب في الربع نفسه. كان نظامها الحالي يرسل سجلات العملاء إلى الصين افتراضيًا — وهو مخالفة من اليوم الأول.',
    },
    scope: {
      en: 'Data-flow mapping, transfer mechanism design, UAE-facing privacy notice in Arabic and English, consent architecture for marketing pixels, and a staff playbook for the service desk.',
      zh: '数据流测绘、出境机制设计、阿英双语隐私声明、营销像素同意架构，以及客服团队操作手册。',
      ar: 'رسم تدفقات البيانات، وتصميم آلية النقل، وإشعار خصوصية بالعربية والإنجليزية، وبنية موافقة لبكسلات التسويق، ودليل تشغيل لفريق الخدمة.',
    },
    duration: { en: '6 weeks', zh: '6 周', ar: '6 أسابيع' },
    steps: [
      {
        en: 'Week 1–2 — mapped 14 data flows, retired 5 non-essential trackers',
        zh: '第 1–2 周 — 测绘 14 条数据流，下线 5 个非必要追踪器',
        ar: 'الأسبوع 1–2 — رسم 14 تدفقًا وإيقاف 5 متتبعات غير ضرورية',
      },
      {
        en: 'Week 3–4 — transfer mechanism and notices drafted in AR/EN',
        zh: '第 3–4 周 — 起草出境机制与双语声明',
        ar: 'الأسبوع 3–4 — صياغة آلية النقل والإشعارات',
      },
      {
        en: 'Week 5–6 — service-desk playbook, staff training, launch sign-off',
        zh: '第 5–6 周 — 客服手册、员工培训、上线签核',
        ar: 'الأسبوع 5–6 — دليل الخدمة وتدريب الموظفين والموافقة على الإطلاق',
      },
    ],
    outcome: {
      en: 'Storefront launched on schedule with a clean data posture; the same design was reused for the Saudi launch the following quarter.',
      zh: '独立站如期上线，数据架构干净；同一设计于下一季度复用于沙特上线。',
      ar: 'أُطلق المتجر في موعده مع وضع بيانات نظيف، وأُعيد استخدام التصميم نفسه لإطلاق السعودية في الربع التالي.',
    },
    proof: [
      {
        value: { en: '14', zh: '14', ar: '14' },
        label: { en: 'data flows mapped', zh: '测绘的数据流', ar: 'تدفقات بيانات مرسومة' },
      },
      {
        value: { en: '6 wks', zh: '6 周', ar: '6 أسابيع' },
        label: { en: 'assessment to launch', zh: '从评估到上线', ar: 'من التقييم للإطلاق' },
      },
      {
        value: { en: '2', zh: '2', ar: '2' },
        label: {
          en: 'markets reused the design',
          zh: '复用该设计的市场',
          ar: 'سوقان أعادا استخدام التصميم',
        },
      },
    ],
    linkedService: 'compliance-operations',
  },
  {
    slug: 'gcc-group-china-sourcing',
    index: '03',
    sector: {
      en: 'Trading & Distribution · China',
      zh: '贸易与分销 · 中国',
      ar: 'التوزيع والتجارة · الصين',
    },
    icon: 'swap',
    title: {
      en: 'A GCC trading group stops overpaying for bad sourcing',
      zh: '海湾贸易集团不再为糟糕的采购买单',
      ar: 'مجموعة تجارية خليجية تتوقف عن الإفراط في الدفع مقابل توريد سيئ',
    },
    clientLabel: {
      en: 'Family trading group (Gulf region)',
      zh: '家族贸易集团（海湾地区）',
      ar: 'مجموعة تجارية عائلية (الخليج)',
    },
    context: {
      en: 'The group had bought from Chinese suppliers for a decade through intermediaries, with no visibility into who actually manufactured the goods. Two quality incidents in one year pushed them to build direct capability.',
      zh: '该集团十年间一直通过中间商向中国供应商采购，对真正的生产方毫无了解。一年内两起质量事故促使他们建立直接能力。',
      ar: 'اشترت المجموعة من موردين صينيين عبر وسطاء لمدة عقد دون رؤية لمن يصنع فعليًا. حادثتا جودة في عام واحد دفعاها لبناء قدرة مباشرة.',
    },
    scope: {
      en: 'On-the-ground supplier mapping across two provinces, factory audits with scoring, a bilingual quality agreement template, pre-shipment inspection cadence and Mandarin-speaking sourcing support for their buyers.',
      zh: '两省供应商实地测绘、带评分的工厂审核、双语质量协议模板、出货前验货节奏，以及为买方配备的中文采购支持。',
      ar: 'رسم خريطة موردين ميدانيًا في ولايتين، وتدقيق مصانع بتقييم، ونموذج اتفاقية جودة، وإيقاع فحص قبل الشحن، ودعم توريد صيني للمشترين.',
    },
    duration: { en: '14 weeks (phased)', zh: '14 周（分阶段）', ar: '14 أسبوعًا (مرحّليًا)' },
    steps: [
      {
        en: 'Week 1–5 — 21 candidate suppliers profiled, 9 shortlisted',
        zh: '第 1–5 周 — 摸底 21 家候选供应商，入围 9 家',
        ar: 'الأسبوع 1–5 — تعريف 21 موردًا واختصار 9',
      },
      {
        en: 'Week 6–10 — 6 factory audits, 2 disqualified on records',
        zh: '第 6–10 周 — 6 次工厂审核，2 家因记录不合格出局',
        ar: 'الأسبوع 6–10 — 6 تدقيقات واستبعاد 2 لعدم السجلات',
      },
      {
        en: 'Week 11–14 — quality agreement signed, inspection rhythm set',
        zh: '第 11–14 周 — 签署质量协议，建立验货节奏',
        ar: 'الأسبوع 11–14 — توقيع اتفاقية الجودة وضبط الفحص',
      },
    ],
    outcome: {
      en: 'The group moved three product lines to direct, audited suppliers; their buyers now receive inspection photos before every shipment releases.',
      zh: '三条产品线转为直接、经审核的供应商；买方在每次出货前都会收到验货照片。',
      ar: 'نقلت المجموعة ثلاثة خطوط منتجات إلى موردين مدققين مباشرة، ويستلم المشترون صور الفحص قبل كل شحنة.',
    },
    proof: [
      {
        value: { en: '21 → 6', zh: '21 → 6', ar: '21 → 6' },
        label: {
          en: 'suppliers profiled to audited',
          zh: '摸底供应商至完成审核',
          ar: 'موردون حتى التدقيق',
        },
      },
      {
        value: { en: '14 wks', zh: '14 周', ar: '14 أسبوعًا' },
        label: { en: 'full programme', zh: '完整项目周期', ar: 'البرنامج الكامل' },
      },
      {
        value: { en: '3', zh: '3', ar: '3' },
        label: { en: 'product lines switched', zh: '切换的产品线', ar: 'خطوط منتجات تم تحويلها' },
      },
    ],
    linkedService: 'technology-tools',
  },
];
