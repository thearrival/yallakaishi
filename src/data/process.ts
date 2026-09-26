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
    key: 'discover',
    icon: 'chat',
    name: { en: 'Discover', zh: '诊断', ar: 'الاستكشاف' },
    summary: {
      en: 'A 30-minute call that ends with a written problem statement.',
      zh: '30 分钟通话，以一份书面问题陈述收尾。',
      ar: 'مكالمة 30 دقيقة تنتهي ببيان مشكلة مكتوب.',
    },
    detail: {
      en: 'You describe the market, the deadline and what has already been tried. We ask the awkward questions early — about budget authority, decision makers and what happens if the approval slips. You leave with a one-page problem statement, whether or not you hire us.',
      zh: '您描述市场、时间节点与已经尝试过的做法。我们会尽早抛出尖锐问题 — 关于预算权限、决策人，以及审批延误的应对。无论是否雇佣我们，您都会带走一页纸的问题陈述。',
      ar: 'تصف السوق والموعد وما جرّبناه. نطرح الأسئلة الصعبة مبكرًا — عن صلاحية الميزانية ومن يقرر وماذا لو تأخرت الموافقة. تخرج ببيان مشكلة من صفحة واحدة سواء اعتمدتمونا أو لا.',
    },
    youGet: [
      { en: 'One-page problem statement', zh: '一页纸问题陈述', ar: 'بيان مشكلة من صفحة' },
      { en: 'Candid feasibility read', zh: '坦诚的可行性判断', ar: 'تقييم صريح للجدوى' },
      {
        en: 'Rough cost and timeline band',
        zh: '参考成本与周期区间',
        ar: 'نطاق تقريبي للتكلفة والمدة',
      },
    ],
    when: { en: 'Day 0', zh: '第 0 天', ar: 'اليوم 0' },
  },
  {
    index: '02',
    key: 'scope',
    icon: 'ruler',
    name: { en: 'Scope', zh: '界定', ar: 'تحديد النطاق' },
    summary: {
      en: 'A fixed-fee proposal with deliverables, dates and owners.',
      zh: '固定费用提案，含交付物、日期与责任人。',
      ar: 'عرض برسوم ثابتة بالمخرجات والتواريخ والمسؤولين.',
    },
    detail: {
      en: 'We break the work into milestones, list every document with the authority that issues it, and name the person accountable on each side. Assumptions are written down — because unstated assumptions are where cross-border budgets die.',
      zh: '我们将工作拆解为里程碑，逐一列明每份文件及其签发机关，并写明双方责任人。所有假设都会记录在案 — 因为未言明的假设正是跨境预算的死因。',
      ar: 'نقسم العمل إلى مراحل، ونسرد كل مستند مع الجهة المصدرة، ونحدد المسؤول عن كل طرف. تُسجَّل المسلمات — لأن المسلمات غير المعلنة حيث تموت الميزانيات العابرة للحدود.',
    },
    youGet: [
      { en: 'Milestone plan with dates', zh: '含日期的里程碑计划', ar: 'خطة مراحل بالتواريخ' },
      {
        en: 'Fixed fee or capped budget',
        zh: '固定费用或封顶预算',
        ar: 'رسوم ثابتة أو ميزانية محدّدة',
      },
      { en: 'Named leads on both sides', zh: '双方负责人', ar: 'مسؤولون مسمّون في الطرفين' },
    ],
    when: { en: 'Within 3 working days', zh: '3 个工作日内', ar: 'خلال 3 أيام عمل' },
  },
  {
    index: '03',
    key: 'deliver',
    icon: 'check',
    name: { en: 'Deliver', zh: '交付', ar: 'التسليم' },
    summary: {
      en: 'Work runs in the open — you see progress every week.',
      zh: '工作在开放中推进 — 每周都能看到进度。',
      ar: 'يجري العمل بشفافية — ترى التقدم أسبوعيًا.',
    },
    detail: {
      en: 'Each week you receive a short note: what moved, what is blocked, what we need from you. Submissions to authorities are handled and tracked; translations are reviewed by a second specialist. Nothing is presented as finished until the reviewer signs it off.',
      zh: '每周您都会收到简短说明：进展、阻塞点、需要您配合的事项。向机关的递交由我们办理并跟踪；翻译由第二位专家复核。未经审校签核，绝不视为完成。',
      ar: 'كل أسبوع تصلك ملاحظة قصيرة: ما تقدم، وما عُلق، وما نحتاج منك. تُعالج إيداعات الجهات وتُتتبع، وتراجع الترجمات أخصائية ثانية. لا يُعرض شيء كمكتمل حتى يوقّع المراجع.',
    },
    youGet: [
      { en: 'Weekly status note', zh: '每周状态说明', ar: 'ملاحظة حالة أسبوعية' },
      {
        en: 'Tracked submissions and receipts',
        zh: '递交跟踪与回执',
        ar: 'إيداعات متتبعة وإيصالات',
      },
      {
        en: 'Second-reviewer sign-off on translations',
        zh: '翻译二审签核',
        ar: 'اعتماد مراجعة ثانية للترجمات',
      },
    ],
    when: { en: 'Weekly rhythm', zh: '每周节奏', ar: 'إيقاع أسبوعي' },
  },
  {
    index: '04',
    key: 'support',
    icon: 'life',
    name: { en: 'Support', zh: '支持', ar: 'الدعم' },
    summary: {
      en: 'Handover with a playbook — and a desk still open afterwards.',
      zh: '以操作手册交接 — 此后窗口依旧开放。',
      ar: 'تسليم مع دليل تشغيل — ومكتب مفتوح بعده.',
    },
    detail: {
      en: 'At the end of every engagement you get the documents, the calendar of obligations and a plain-language playbook so your team can run it. If you want us to keep running it, a retainer starts where the project ends — with no re-onboarding.',
      zh: '每次合作结束，您都会获得全部文档、义务日历与平实语言的操作手册，供团队自行运转。若希望我们继续托管，常年顾问可从项目终点无缝开始 — 无需重新入场。',
      ar: 'في نهاية كل تعاقد تحصل على المستندات وتقويم الالتزامات ودليل بلغة بسيطة لتشغيله بفريقك. وإن أردت استمرارنا، تبدأ المرافقة من حيث انتهى المشروع — دون إعادة تهيئة.',
    },
    youGet: [
      {
        en: 'Document pack and obligation calendar',
        zh: '文档包与义务日历',
        ar: 'حزمة مستندات وتقويم التزامات',
      },
      { en: 'Plain-language playbook', zh: '平实语言操作手册', ar: 'دليل بلغة بسيطة' },
      {
        en: 'Optional retainer, no re-onboarding',
        zh: '可选常年顾问，无需重新入场',
        ar: 'مرافقة اختيارية دون إعادة تهيئة',
      },
    ],
    when: { en: 'At delivery + 30 days', zh: '交付时 + 30 天', ar: 'عند التسليم + 30 يومًا' },
  },
];
