import type { Localized } from '../i18n';

export interface ProcessStep {
  index: string;
  key: string;
  icon: string;
  name: Localized;
  summary: Localized;
  detail: Localized;
  youGet: Localized[];
  when: Localized;
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    key: 'define',
    icon: 'chat',
    name: { en: 'Define', zh: '定义', ar: 'تحديد' },
    summary: {
      en: 'Define the opportunity and the target market.',
      zh: '定义机会与目标市场。',
      ar: 'تحديد الفرصة والسوق المستهدف.',
    },
    detail: {
      en: 'Clarify the market, the commercial objective, and what would make the project successful.',
      zh: '明确市场、商业目标以及什么会使项目成功。',
      ar: 'توضيح السوق والهدف التجاري وما الذي يجعل المشروع ناجحًا.',
    },
    youGet: [
      { en: 'Opportunity statement', zh: '机会陈述', ar: 'بيان الفرصة' },
      { en: 'Target market', zh: '目标市场', ar: 'السوق المستهدف' },
      { en: 'Success criteria', zh: '成功标准', ar: 'معايير النجاح' },
    ],
    when: { en: 'Week 1', zh: '第 1 周', ar: 'الأسبوع 1' },
  },
  {
    index: '02',
    key: 'validate',
    icon: 'search',
    name: { en: 'Validate', zh: '验证', ar: 'تحقق' },
    summary: {
      en: 'Validate assumptions with evidence.',
      zh: '用证据验证假设。',
      ar: 'التحقق من الفرضيات بالدليل.',
    },
    detail: {
      en: 'Research customers, competitors, channels, and pricing; separate facts from assumptions.',
      zh: '研究客户、竞争对手、渠道和定价；区分事实与假设。',
      ar: 'بحث العملاء والمنافسين والقنوات والتسعير؛ التمييز بين الحقائق والفرضيات.',
    },
    youGet: [
      { en: 'Evidence appendix', zh: '证据附录', ar: 'ملحق الأدلة' },
      { en: 'Assumptions register', zh: '假设登记', ar: 'سجل الفرضيات' },
      { en: 'Go / no-go recommendation', zh: '推进/不推进建议', ar: 'توصية المتابعة/التوقف' },
    ],
    when: { en: 'Weeks 2–4', zh: '第 2–4 周', ar: 'الأسابيع 2–4' },
  },
  {
    index: '03',
    key: 'pilot',
    icon: 'mail',
    name: { en: 'Pilot', zh: '试点', ar: 'تجربة' },
    summary: {
      en: 'Run a focused pilot in one market.',
      zh: '在一个市场运行聚焦试点。',
      ar: 'تشغيل تجربة مركزة في سوق واحد.',
    },
    detail: {
      en: 'Execute a bounded campaign or partner outreach and measure learning.',
      zh: '执行有边界的活动或合作伙伴触达并衡量学习。',
      ar: 'تنفيذ حملة محدودة أو تواصل مع الشركاء وقياس التعلم.',
    },
    youGet: [
      { en: 'Pilot plan', zh: '试点计划', ar: 'خطة تجربة' },
      { en: 'Learning report', zh: '学习报告', ar: 'تقرير التعلم' },
      { en: 'Next steps', zh: '后续步骤', ar: 'الخطوات التالية' },
    ],
    when: { en: 'Weeks 4–10', zh: '第 4–10 周', ar: 'الأسابيع 4–10' },
  },
  {
    index: '04',
    key: 'scale',
    icon: 'check',
    name: { en: 'Scale', zh: '扩展', ar: 'توسيع' },
    summary: {
      en: 'Scale what the evidence supports.',
      zh: '扩展证据支持的内容。',
      ar: 'توسيع ما يدعمه الدليل.',
    },
    detail: {
      en: 'Convert suitable pilots to retainers or larger programmes and expand carefully.',
      zh: '将合适的试点转化为留存或更大的项目，并谨慎扩展。',
      ar: 'تحويل التجارب المناسبة إلى احتفاظ أو برامج أكبر والتوسع بحذر.',
    },
    youGet: [
      { en: 'Scale roadmap', zh: '扩展路线图', ar: 'خارطة طريق التوسيع' },
      { en: 'Renewal plan', zh: '续签计划', ar: 'خطة تجديد' },
      { en: 'Partner framework', zh: '合作伙伴框架', ar: 'إطار الشركاء' },
    ],
    when: { en: 'Months 3–12', zh: '第 3–12 月', ar: 'الأشهر 3–12' },
  },
];
