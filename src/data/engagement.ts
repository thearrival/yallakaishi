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
    slug: 'sprint',
    index: '01',
    name: { en: 'Sprint', zh: '冲刺 Sprint', ar: 'سرعة' },
    tagline: {
      en: 'A single, sharply bounded question answered in weeks.',
      zh: '一个边界清晰的问题，几周内给出答案。',
      ar: 'سؤال واحد محدد الإجابة عنه خلال أسابيع.',
    },
    price: { en: 'Scoped per brief', zh: '按需求评估', ar: 'حسب نطاق الطلب' },
    priceNote: {
      en: 'fixed fee, quoted before start',
      zh: '固定费用，开工前报价',
      ar: 'رسوم ثابتة تُسعَّر قبل البدء',
    },
    bestFor: {
      en: 'First-time entrants who need a feasibility read, a partner vetted, or one document family completed.',
      zh: '首次进入市场、需要可行性评估、伙伴尽调或完成某类文件的客户。',
      ar: 'الدخول لأول مرة واحتياج تقييم جدوى أو فحص شريك أو إتمام مستندات.',
    },
    includes: [
      { en: 'One defined deliverable set', zh: '一组明确的交付物', ar: 'مجموعة مخرجات محددة' },
      {
        en: 'Named specialist + written scope',
        zh: '专属专家 + 书面范围',
        ar: 'أخصائي مسمّى ونطاق مكتوب',
      },
      {
        en: 'Kickoff call and final readout',
        zh: '启动会与终期汇报',
        ar: 'مكالمة انطلاق وعرض ختامي',
      },
      { en: 'Two revision rounds included', zh: '含两轮修改', ar: 'جولتا مراجعتين' },
    ],
    notIncluded: [
      {
        en: 'Government fees and disbursements',
        zh: '政府规费与代垫费用',
        ar: 'الرسوم الحكومية والتكاليف',
      },
      {
        en: 'Ongoing monitoring after delivery',
        zh: '交付后的持续监控',
        ar: 'المتابعة المستمرة بعد التسليم',
      },
    ],
  },
  {
    slug: 'project',
    index: '02',
    name: { en: 'Project', zh: '项目 Project', ar: 'مشروع' },
    tagline: {
      en: 'A full market-entry or compliance programme, end to end.',
      zh: '完整的市场准入或合规项目，端到端。',
      ar: 'برنامج كامل لدخول السوق أو الامتثال من البداية للنهاية.',
    },
    price: { en: 'Fixed fee', zh: '固定费用', ar: 'رسوم ثابتة' },
    priceNote: {
      en: 'milestone-based, capped budget',
      zh: '按里程碑结算，预算封顶',
      ar: 'حسب المراحل، بميزانية محدّدة',
    },
    bestFor: {
      en: 'Teams launching in a new market who need licensing, contracts, compliance and local support running together.',
      zh: '在新市场启动、需要许可、合同、合规与在地支持并行推进的团队。',
      ar: 'فرق تطلق في سوق جديد وتحتاج تراخيص وعقود وامتثال ودعمًا ميدانيًا معًا.',
    },
    includes: [
      { en: 'Everything in Sprint', zh: '包含 Sprint 全部内容', ar: 'كل ما في سرعة' },
      {
        en: 'Multi-workstream plan with milestones',
        zh: '多工作流计划与里程碑',
        ar: 'خطة متعددة المسارات مع مراحل',
      },
      {
        en: 'Weekly status note in your language',
        zh: '每周以您的语言发送状态说明',
        ar: 'ملاحظة حالة أسبوعية بلغتك',
      },
      {
        en: 'Authority liaison and submission handling',
        zh: '机关沟通与递交办理',
        ar: 'تنسيق مع الجهات والإقدام',
      },
      {
        en: '30-day post-launch support window',
        zh: '上线后 30 天支持窗口',
        ar: 'نافذة دعم 30 يومًا بعد الإطلاق',
      },
    ],
    notIncluded: [
      {
        en: 'Government fees, notarisation, certifications',
        zh: '政府规费、公证与认证',
        ar: 'الرسوم الحكومية والتصديق والشهادات',
      },
    ],
    popular: true,
  },
  {
    slug: 'retainer',
    index: '03',
    name: { en: 'Retainer', zh: '常年顾问 Retainer', ar: 'مرافقة مستمرة' },
    tagline: {
      en: 'An in-house-equivalent desk on the corridor, month to month.',
      zh: '走廊上等同于内设的常驻窗口，按月合作。',
      ar: 'مكتب مكافئ للداخل على الممر، شهريًا.',
    },
    price: { en: 'Per month', zh: '每月', ar: 'شهريًا' },
    priceNote: {
      en: 'rolling, 30-day notice',
      zh: '滚动合作，提前 30 天通知',
      ar: 'مستمر بإشعار 30 يومًا',
    },
    bestFor: {
      en: 'Operating teams with live volume — filings, translations, audits, partner reviews — who need predictable capacity.',
      zh: '有持续业务量的运营团队 — 申报、翻译、审核、伙伴复核 — 需要可预期的产能。',
      ar: 'فرق تشغيل لديها عمل مستمر — ملفات وترجمات وتدقيق ومراجعة شركاء — تحتاج طاقة متوقعة.',
    },
    includes: [
      {
        en: 'Named account lead and shared channel',
        zh: '专属客户负责人与共享沟通渠道',
        ar: 'مسؤول حساب مسمّى وقناة مشتركة',
      },
      { en: 'Agreed monthly capacity hours', zh: '约定的月度工时', ar: 'ساعات شهرية متفق عليها' },
      {
        en: 'Regulatory change alerts (EN/ZH/AR)',
        zh: '监管变更预警（中英阿）',
        ar: 'تنبيهات التغيير التنظيمي (EN/ZH/AR)',
      },
      {
        en: 'Quarterly compliance health check',
        zh: '季度合规健康检查',
        ar: 'فحص صحة امتثال ربع سنوي',
      },
      {
        en: 'Priority turnaround on translations',
        zh: '翻译优先交付',
        ar: 'أولوية في التسليم للترجمات',
      },
    ],
    notIncluded: [
      {
        en: 'Large one-off registrations (quoted separately)',
        zh: '大型一次性注册（另计）',
        ar: 'التسجيلات الكبيرة (تُسعَّر منفصلة)',
      },
      {
        en: 'Government fees and disbursements',
        zh: '政府规费与代垫费用',
        ar: 'الرسوم الحكومية والتكاليف',
      },
    ],
  },
];

/** Rows for the comparison table on /engagement. */
export const comparisonRows: { label: Localized; values: [Localized, Localized, Localized] }[] = [
  {
    label: { en: 'Commercial model', zh: '商务模式', ar: 'النموذج التجاري' },
    values: [
      { en: 'Fixed fee', zh: '固定费用', ar: 'رسوم ثابتة' },
      { en: 'Fixed fee + milestones', zh: '固定费用 + 里程碑', ar: 'رسوم ثابتة + مراحل' },
      { en: 'Monthly fee', zh: '月度费用', ar: 'رسوم شهرية' },
    ],
  },
  {
    label: { en: 'Typical duration', zh: '典型周期', ar: 'المدة النموذجية' },
    values: [
      { en: '1–4 weeks', zh: '1–4 周', ar: '1–4 أسابيع' },
      { en: '6–16 weeks', zh: '6–16 周', ar: '6–16 أسبوعًا' },
      { en: 'Rolling monthly', zh: '按月滚动', ar: 'شهري مستمر' },
    ],
  },
  {
    label: { en: 'Workstreams', zh: '工作流数量', ar: 'مسارات العمل' },
    values: [
      { en: 'One', zh: '一条', ar: 'واحد' },
      { en: 'Two to five', zh: '二至五条', ar: 'اثنان إلى خمسة' },
      { en: 'Continuous', zh: '持续', ar: 'مستمر' },
    ],
  },
  {
    label: { en: 'Authority liaison', zh: '机关沟通', ar: 'التنسيق مع الجهات' },
    values: [
      { en: 'As scoped', zh: '按范围', ar: 'حسب النطاق' },
      { en: 'Included', zh: '包含', ar: 'مشمول' },
      { en: 'Included', zh: '包含', ar: 'مشمول' },
    ],
  },
  {
    label: { en: 'Regulatory alerts', zh: '监管预警', ar: 'تنبيهات تنظيمية' },
    values: [
      { en: '—', zh: '—', ar: '—' },
      { en: 'Project window', zh: '项目窗口期内', ar: 'أثناء المشروع' },
      { en: 'Ongoing', zh: '持续', ar: 'مستمر' },
    ],
  },
  {
    label: { en: 'Reporting', zh: '汇报', ar: 'التقارير' },
    values: [
      { en: 'Final readout', zh: '终期汇报', ar: 'عرض ختامي' },
      { en: 'Weekly note', zh: '每周说明', ar: 'ملاحظة أسبوعية' },
      { en: 'Weekly + quarterly review', zh: '每周 + 季度复盘', ar: 'أسبوعي ومراجعة ربع سنوية' },
    ],
  },
  {
    label: { en: 'Minimum commitment', zh: '最低承诺', ar: 'أقل التزام' },
    values: [
      { en: 'None', zh: '无', ar: 'لا يوجد' },
      { en: 'Project scope', zh: '项目范围', ar: 'نطاق المشروع' },
      { en: '3 months', zh: '3 个月', ar: '3 أشهر' },
    ],
  },
];
