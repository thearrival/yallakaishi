import type { Localized } from '../i18n';

export interface FaqItem {
  id: string;
  group: FaqGroup;
  q: Localized;
  a: Localized;
}

export type FaqGroup = 'engagement' | 'legal' | 'delivery' | 'markets';

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
    id: 'fees',
    group: 'engagement',
    q: { en: 'How do you price your work?', zh: '你们如何收费？', ar: 'كيف تسعّرون عملكم؟' },
    a: {
      en: 'Fixed fee for defined scopes, a capped budget for programmes with uncertainty, and a monthly fee for retainers. Government fees, notarisation and third-party certifications are always passed through at cost with receipts. You receive the price in writing before anything starts.',
      zh: '明确范围采用固定费用，存在不确定性的项目采用封顶预算，常年顾问按月计费。政府规费、公证与第三方认证始终凭票据按实际发生金额代收代付。动工前您会收到书面价格。',
      ar: 'رسوم ثابتة للنطاقات المحددة، وميزانية محدّدة للبرامج غير المؤكدة، ورسوم شهرية للمرافقة المستمرة. الرسوم الحكومية والتصديق والشهادات تُحصَّل بالتكلفة الفعلية مع الإيصالات. تصلك السعر كتابيًا قبل أي بدء.',
    },
  },
  {
    id: 'not-law-firm',
    group: 'legal',
    q: { en: 'Are you a law firm?', zh: '你们是律所吗？', ar: 'هل أنتم مكتب محاماة؟' },
    a: {
      en: 'No. Yalla Kaishi provides cross-border business services: coordination, operations, translation, diligence and training. Where legal advice or representation is required, we work alongside licensed law firms in China and the Gulf, and we tell you when that handoff is happening.',
      zh: '不是。亚拉凯世提供跨境商业服务：协调、运营、翻译、尽调与培训。当需要法律意见或代理时，我们与中海湾持牌律所协作，并明确告知您交接的时点。',
      ar: 'لا. تقدّم يلا كايشي خدمات أعمال عابرة للحدود: تنسيق وتشغيل وترجمة وعناية وتدريب. وعند الحاجة لاستشارة أو تمثيل قانوني نعمل مع مكاتب محاماة مرخّصة في الصين والخليج، ونُعلمك بموعد التحويل.',
    },
  },
  {
    id: 'guarantee',
    group: 'legal',
    q: {
      en: 'Do you guarantee approvals and visas?',
      zh: '你们保证获批与签证吗？',
      ar: 'هل تضمنون الموافقات والتأشيرات؟',
    },
    a: {
      en: 'No, and be wary of anyone who does. Approval rests with the relevant authority. What we guarantee is the quality and timeliness of the submission: correct documents, complete filings, tracked deadlines and prompt escalation when a case is queried.',
      zh: '不保证，并请警惕任何声称保证的一方。审批权在主管机关。我们保证的是递交的质量与时效：材料正确、申报完整、期限受跟踪、遇质询第一时间升级处理。',
      ar: 'لا، واحذر مَن يفعل. الموافقة للجهة المختصة. نضمن جودة الإقدام وتوقيته: مستندات صحيحة، وملفات مكتملة، ومواعيد متتبعة، وتصعيد فوري عند الاستفسار.',
    },
  },
  {
    id: 'what-not-do',
    group: 'legal',
    q: { en: 'What will you not do?', zh: '你们不会做什么？', ar: 'ما الذي لن تفعلوه؟' },
    a: {
      en: 'We do not fabricate documents, misdeclare customs values, backdate filings, or advise you to structure around a rule rather than with it. If the honest answer is that a plan will not survive scrutiny, you will hear that from us first.',
      zh: '我们不伪造文件、不低报完税价格、不倒签申报日期，也不建议您绕开规则而非顺应规则。如果诚实的答案是某方案经不起审查，您会最先从我们这里听到。',
      ar: 'لا نزوّر مستندات ولا نقلل القيم الجمركية ولا نتلاعب بتواريخ الإيداع ولا ننصح بتجاوز القاعدة بل بالالتزام بها. وإن كانت الإجابة الصادقة أن الخطة لن تصمد، تسمعها منّا أولًا.',
    },
  },
  {
    id: 'timeline',
    group: 'engagement',
    q: { en: 'How fast can you start?', zh: '多快可以启动？', ar: 'ما سرعة البدء؟' },
    a: {
      en: 'Discovery calls usually happen within two working days. A written proposal follows within three. Work can start the week you approve it, subject to specialist availability — we will tell you honestly if a named lead is not free.',
      zh: '诊断通话通常两个工作日内安排，书面提案三个工作日内提交。您批准的当周即可开工，视专家档期而定 — 若指定负责人档期不便，我们会如实告知。',
      ar: 'تُجرى مكالمات الاستكشاف عادة خلال يومَي عمل، ويتبعها عرض مكتوب خلال ثلاثة. يمكن البدء في الأسبوع الموافق لاعتمادك حسب توفّر الأخصائي — ونخبرك بصراحة إن كان المسؤول غير متاح.',
    },
  },
  {
    id: 'retainer-minimum',
    group: 'engagement',
    q: {
      en: 'Is there a minimum commitment?',
      zh: '有最低合作期限吗？',
      ar: 'هل هناك حد أدنى للالتزام؟',
    },
    a: {
      en: 'Sprints and projects have no minimum — they end when the scope ends. Retainers ask for three months so monitoring is meaningful, then roll monthly with 30 days notice.',
      zh: '冲刺与项目无最低期限 — 范围结束即结束。常年顾问建议三个月以使监控有意义，此后按月滚动，提前 30 天通知即可。',
      ar: 'لا حد أدنى للسرعة والمشاريع — تنتهي بنهاية النطاق. أما المرافقة فتطلب ثلاثة أشهر ليكون المراقبة ذات معنى، ثم تتجدد شهريًا بإشعار 30 يومًا.',
    },
  },
  {
    id: 'languages',
    group: 'markets',
    q: {
      en: 'Which languages do you work in?',
      zh: '你们使用哪些语言？',
      ar: 'ما اللغات التي تعملون بها؟',
    },
    a: {
      en: 'English, Chinese and Arabic — in writing and in meetings. Contracts are drafted so that each party can read the operative terms in its own language, and we run a bilingual review before anything is signed.',
      zh: '英文、中文与阿拉伯文 — 书面与会议皆可。合同起草确保各方都能以本方语言读懂关键条款，签署前我们会进行双语复核。',
      ar: 'الإنجليزية والصينية والعربية — كتابيًا وفي الاجتماعات. تُصاغ العقود بحيث يقرأ كل طرف بنوده بلغته، وإجراء مراجعة ثنائية قبل أي توقيع.',
    },
  },
  {
    id: 'where-based',
    group: 'markets',
    q: {
      en: 'Where are you based, and where do you work?',
      zh: '你们在哪里？在哪里开展服务？',
      ar: 'أين تقيمون وأين تعملون؟',
    },
    a: {
      en: 'Head office in Guangzhou, with an active presence across the Gulf through partner counsel and correspondents. Most engagements are run remotely with scheduled on-site days when audits, inspections or filings require them.',
      zh: '总部设于广州，通过合作律师与代理人在海湾地区保持活跃存在。多数合作远程推进，在审核、验货或递交需要时安排现场日。',
      ar: 'المقر الرئيسي في غوانغتشو، مع حضور فعّال في الخليج عبر مستشارين شركاء ومراسلين. يُدار معظم التعاون عن بُعد مع أيام ميدانية عند الحاجة للتدقيق أو الفحص أو الإيداع.',
    },
  },
  {
    id: 'data-handling',
    group: 'delivery',
    q: {
      en: 'How do you handle our data?',
      zh: '你们如何处理我们的数据？',
      ar: 'كيف تتعاملون مع بياناتكم؟',
    },
    a: {
      en: 'Only what the engagement needs, stored in a shared vault you control access to, and never used for marketing. We follow the data rules of both jurisdictions — including cross-border transfer requirements — and delete project material on request after handover.',
      zh: '仅收集合作所需，存储于您控制权限的共享库，绝不用于营销。我们遵守两个法域的数据规则 — 包括数据出境要求 — 并可在交接后应要求删除项目资料。',
      ar: 'القدر اللازم فقط، في مخزن مشترك تتحكمون في وصوله، ولا يُستخدم للتسويق أبدًا. نلتزم بقواعد البيانات في النظامين، بما فيها متطلبات النقل العابر، ونحذف مواد المشروع عند الطلب بعد التسليم.',
    },
  },
  {
    id: 'reporting',
    group: 'delivery',
    q: {
      en: 'How will we know progress is being made?',
      zh: '如何知道项目在推进？',
      ar: 'كيف نعرف أن العمل يتقدم؟',
    },
    a: {
      en: 'A weekly note covering what moved, what is blocked and what we need from you — plus a shared tracker for milestone dates. If a submission is sitting with an authority, you know the date it was lodged and who is chasing it.',
      zh: '每周一份说明，涵盖进展、阻塞点与需要您配合的事项 — 另有共享里程碑追踪表。若某项递交正由机关处理，您会清楚递交日期与跟进人。',
      ar: 'ملاحظة أسبوعية تغطي التقدم وما عُلق وما نحتاج منك — مع متتبع مشترك لمواعيد المراحل. وإن كان إيداع لدى جهة فتعرف تاريخه ومن يتابعه.',
    },
  },
  {
    id: 'first-engagement',
    group: 'engagement',
    q: {
      en: 'What is the right first engagement?',
      zh: '第一次合作选什么合适？',
      ar: 'ما أفضل تعاقد أول؟',
    },
    a: {
      en: 'Usually a Sprint: a feasibility read, a partner vetted, or one document family completed. It shows you how we work before you commit to a larger programme — and if we think you do not need us yet, we will say so.',
      zh: '通常是冲刺：一次可行性评估、一次伙伴尽调，或完成某类文件。它让您在投入更大项目前先了解我们的工作方式 — 若我们认为您暂时不需要我们，也会直言。',
      ar: 'عادةً سرعة: تقييم جدوى أو فحص شريك أو إتمام مستندات. تكشف لك أسلوب عملنا قبل الالتزام ببرنامج أكبر — وإن رأينا أنكم لا تحتاجونا بعد نقول ذلك.',
    },
  },
  {
    id: 'who-works',
    group: 'delivery',
    q: { en: 'Who actually does the work?', zh: '实际执行的是谁？', ar: 'من ينفّذ العمل فعليًا؟' },
    a: {
      en: 'A named senior specialist — not a rotating account pool. You meet the person doing the work in the kickoff call, and that person stays with you through delivery. Translation and legal review are handled by second specialists who sign their work.',
      zh: '一位具名的资深专家 — 不是轮换的客户池。启动会上您会见到执行者本人，且其全程服务至交付。翻译与法律复核由签署其工作的第二专家完成。',
      ar: 'أخصائي رفيع المستوى مسمّى — لا مجموعة حسابات متغيّرة. تلتقي بالمنفّذ في مكالمة البدء ويبقى معك حتى التسليم. والترجمة والمراجعة القانونية لأخصائيين آخرين يوقّعون عملهم.',
    },
  },
];
