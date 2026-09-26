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
  /** Route the "start here" button points at. */
  href: string;
}

export const coreServices: CoreService[] = [
  {
    slug: 'compliance-operations',
    icon: 'shield',
    index: '01',
    title: {
      en: 'Compliance Operations',
      zh: '合规运营',
      ar: 'عمليات الامتثال',
    },
    summary: {
      en: 'Turn legal advice into working operations — monitoring, gap assessments and documentation your team can run without us.',
      zh: '把法律意见转化为可运转的运营机制 — 监控、差距评估与团队可独立执行的文档。',
      ar: 'حوّل النصيحة القانونية إلى عمليات فعلية — مراقبة، وتقييم فجوات، ووثائق يستطيع فريقك تشغيلها بدوننا.',
    },
    body: {
      en: 'Most cross-border failures are not legal failures — they are operational ones. A policy exists, nobody owns it, and the deadline passes. We build the operating layer: a regulatory register, an owner for every obligation, evidence trails, and a quarterly health check that reports in plain language.',
      zh: '多数跨境失败并非法律问题，而是运营问题：政策存在却无人负责，期限悄然过去。我们搭建运营层 — 监管清单、每项义务的责任人、证据留痕，以及以平实语言汇报的季度健康检查。',
      ar: 'معظم الإخفاقات العابرة للحدود ليست قانونية بل تشغيلية: توجد سياسة ولا أحد مسؤول عنها، ثم يمر الموعد. نبني الطبقة التشغيلية: سجل تنظيمي، ومالك لكل التزام، وأثر للأدلة، وفحص دوري كل ربع سنة بلغة واضحة.',
    },
    deliverables: [
      {
        en: 'Regulatory register mapped to your entity',
        zh: '与您主体对应的监管清单',
        ar: 'سجل تنظيمي مرتبط بكيانك',
      },
      {
        en: 'Gap assessment with a prioritised fix list',
        zh: '差距评估与优先级整改清单',
        ar: 'تقييم فجوات مع قائمة إصلاحات مرتّبة',
      },
      {
        en: 'SOPs, RACI and evidence templates',
        zh: 'SOP、RACI 与证据模板',
        ar: 'إجراءات وقوالب أدلة ومعايير مسؤوليات',
      },
      {
        en: 'Quarterly health check and alert feed',
        zh: '季度健康检查与预警推送',
        ar: 'فحص ربع سنوي وتنبيهات تنظيمية',
      },
    ],
    timeline: {
      en: '3–6 weeks to set up, then quarterly',
      zh: '3–6 周搭建，此后按季度',
      ar: '3–6 أسابيع للتأسيس ثم ربع سنوي',
    },
    href: '/contact',
  },
  {
    slug: 'regulatory-translation',
    icon: 'globe',
    index: '02',
    title: {
      en: 'Regulatory Translation',
      zh: '监管翻译',
      ar: 'الترجمة التنظيمية',
    },
    summary: {
      en: 'Arabic ↔ Chinese ↔ English for laws, licences, contracts and filings — by specialists, never by machine alone.',
      zh: '阿语 ↔ 中文 ↔ 英语，翻译法律、许可、合同与申报文件 — 专业译员执笔，绝不单靠机器。',
      ar: 'عربي ↔ صيني ↔ إنجليزي للقوانين والتراخيص والعقود والملفات — بأخصائيين لا بالآلة وحدها.',
    },
    body: {
      en: 'A mistranslated clause can invalidate a filing or shift liability. Our terminology is drawn from the actual regulatory texts of both jurisdictions, reviewed by a native-domain specialist, and delivered with a bilingual glossary so future documents stay consistent.',
      zh: '一个误译的条款就可能使申报失效或转移责任。术语取自两个法域的真实监管文本，由母语领域专家复核，并附双语术语表，确保后续文件用词一致。',
      ar: 'قد يبطل بند مترجم خطأً ملفًا كاملًا أو ينقل المسؤولية. مصطلحاتنا مستمدة من النصوص التنظيمية الفعلية في النظامين القضائيين، ويراجعها أخصائي أصيل، مع تسليم مسرد ثنائي اللغة لاستمرارية التسليم.',
    },
    deliverables: [
      {
        en: 'Certified-quality translation with reviewer sign-off',
        zh: '认证级翻译，含审校签核',
        ar: 'ترجمة بجودة معتمدة مع اعتماد المراجع',
      },
      { en: 'Bilingual terminology glossary', zh: '双语术语表', ar: 'مسرد مصطلحات ثنائي اللغة' },
      {
        en: 'Formatting that matches the source document',
        zh: '与源文件一致的排版',
        ar: 'تنسيق مطابق للمستند الأصلي',
      },
      {
        en: 'Notarisation & legalisation coordination',
        zh: '公证与认证协调',
        ar: 'تنسيق التصديق والتوثيق',
      },
    ],
    timeline: {
      en: '48 hours – 10 days by volume',
      zh: '48 小时 – 10 天（视体量）',
      ar: 'من 48 ساعة إلى 10 أيام حسب الحجم',
    },
    href: '/contact',
  },
  {
    slug: 'market-entry-licensing',
    icon: 'building',
    index: '03',
    title: {
      en: 'Market Entry & Licensing',
      zh: '市场准入与许可',
      ar: 'دخول السوق والتراخيص',
    },
    summary: {
      en: 'MISA / SAGIA pathways, entity setup, ICP filing and step-by-step entry plans for Saudi Arabia, the UAE and China.',
      zh: '面向沙特、阿联酋与中国 的 MISA / SAGIA 路径、主体设立、ICP 备案与分步入场方案。',
      ar: 'مسارات MISA / SAGIA، وتأسيس الكيانات، وتسجيل ICP، وخطط دخول مرحّلة للسعودية والإمارات والصين.',
    },
    body: {
      en: 'Entry fails when the sequence is wrong — capital before licence, lease before registration, filing before launch. We map the exact order for your activity and jurisdiction, list every document with its issuing authority, and hold the timeline so you can plan hiring and inventory around it.',
      zh: '入场失败往往因为顺序错误 — 先注资后取证、先租址后注册、先上线后备案。我们为您的业务与法域梳理确切顺序，逐一列明每份文件及其签发机关，并守住时间表，便于您据此规划招聘与备货。',
      ar: 'يفشل الدخول عندما تكون التسلسل خاطئًا — رأس مال قبل ترخيص، وعقد إيجار قبل تسجيل، وتسجيل قبل الإطلاق. نرسم الترتيب الدقيق لنشاطك وولايتك القضائية، ونسرد كل مستند مع الجهة المصدرة، ونلتزم بالجدول لتخطيط التوظيف والمخزون.',
    },
    deliverables: [
      {
        en: 'Entry roadmap with the critical-path sequence',
        zh: '含关键路径顺序的入场路线图',
        ar: 'خارطة دخول بتسلسل المسار الحرج',
      },
      {
        en: 'Document checklist with issuing authorities',
        zh: '含签发机关的文件清单',
        ar: 'قائمة مستندات مع الجهات المصدرة',
      },
      {
        en: 'Licence / registration application handling',
        zh: '牌照 / 注册申请办理',
        ar: 'معالجة طلبات الترخيص والتسجيل',
      },
      {
        en: 'Post-licence compliance calendar',
        zh: '取证后合规日历',
        ar: 'تقويم امتثال ما بعد الترخيص',
      },
    ],
    timeline: {
      en: '6–16 weeks depending on jurisdiction',
      zh: '6–16 周（视法域）',
      ar: '6–16 أسبوعًا حسب الاختصاص',
    },
    href: '/contact',
  },
  {
    slug: 'partner-due-diligence',
    icon: 'search',
    index: '04',
    title: {
      en: 'Partner Due Diligence',
      zh: '合作伙伴尽职调查',
      ar: 'العناية الواجبة بالشركاء',
    },
    summary: {
      en: 'Operational vetting of distributors, suppliers and agents on both ends of the bridge — before the contract, not after.',
      zh: '在签约之前、而非之后，对桥梁两端的分销商、供应商与代理进行运营尽调。',
      ar: 'فحص تشغيلي للموزعين والموردين والوكلاء على طرفي الجسر — قبل العقد لا بعده.',
    },
    body: {
      en: 'A registered company is not a reliable partner. We verify ownership, licences, litigation exposure, capacity, references and sanctions screening — then hand you a decision memo with a red/amber/green rating and the questions still unanswered.',
      zh: '注册在案不等于可靠伙伴。我们核查股权、许可、诉讼风险、产能、客户背书与制裁名单筛查 — 随后交付一份红黄绿评级的决策备忘录，并列出尚未澄清的问题。',
      ar: 'الشركة المسجّلة ليست شريكًا موثوقًا نظريًا. نتحقق من الملكية والتراخيص والقضايا والطاقة الإنتاجية والمعارض والقوائم العقابية — ثم نسلّم مذكرة قرار بتقييم أحمر/أصفر/أخضر مع الأسئلة المفتوحة.',
    },
    deliverables: [
      {
        en: 'Corporate & licence verification',
        zh: '工商与许可核查',
        ar: 'التحقق من السجل والتراخيص',
      },
      {
        en: 'Capacity, references and site validation',
        zh: '产能、背书与现场核验',
        ar: 'التحقق من الطاقة والمراجع والموقع',
      },
      {
        en: 'Sanctions & adverse-media screening',
        zh: '制裁与负面舆情筛查',
        ar: 'فحص العقوبات والإعلام السلبي',
      },
      {
        en: 'Decision memo with RAG rating',
        zh: '含红黄绿评级的决策备忘录',
        ar: 'مذكرة قرار بتقييم لوني',
      },
    ],
    timeline: {
      en: '1–3 weeks per counterparty',
      zh: '每家对手方 1–3 周',
      ar: '1–3 أسابيع لكل طرف مقابل',
    },
    href: '/contact',
  },
  {
    slug: 'technology-tools',
    icon: 'chip',
    index: '05',
    title: {
      en: 'Technology & Tools',
      zh: '技术与工具',
      ar: 'التقنية والأدوات',
    },
    summary: {
      en: 'Client portals, regulatory update feeds and self-assessment toolkits that make compliance measurable.',
      zh: '客户门户、监管更新推送与自评工具包，让合规可量化。',
      ar: 'بوابات عملاء، ومسارات تحديث تنظيمية، وأدوات تقييم ذاتي تجعل الامتثال قابلًا للقياس.',
    },
    body: {
      en: 'Spreadsheets do not scale across two jurisdictions. We stand up lightweight tooling — a shared evidence vault, obligation tracking with owners and due dates, change alerts, and a dashboard leadership can read in two minutes.',
      zh: '电子表格无法跨两个法域扩展。我们搭建轻量工具 — 共享证据库、带责任人与截止日的义务追踪、变更预警，以及领导层两分钟即可读懂的看板。',
      ar: 'لا تتوسع جداول البيانات عبر الولايتين القضائيتين. ننصّب أدوات خفيفة: مخزن أدلة مشترك، وتتبّع التزامات بأصحابها ومواعيدها، وتنبيهات تغيير، ولوحة يقرأها القيادة في دقيقتين.',
    },
    deliverables: [
      {
        en: 'Shared evidence vault & document control',
        zh: '共享证据库与文档管控',
        ar: 'مخزن أدلة مشترك وضبط المستندات',
      },
      {
        en: 'Obligation tracker with owners and dates',
        zh: '含责任人与期限的义务追踪',
        ar: 'متتبع التزامات بأصحابها ومواعيدها',
      },
      {
        en: 'Regulatory change alert feed',
        zh: '监管变更预警推送',
        ar: 'مسار تنبيهات التغيير التنظيمي',
      },
      {
        en: 'Leadership dashboard (2-minute read)',
        zh: '领导层看板（两分钟读懂）',
        ar: 'لوحة قيادة تُقرأ في دقيقتين',
      },
    ],
    timeline: { en: '2–4 weeks to launch', zh: '2–4 周上线', ar: '2–4 أسابيع للإطلاق' },
    href: '/contact',
  },
  {
    slug: 'training-workshops',
    icon: 'cap',
    index: '06',
    title: {
      en: 'Training & Workshops',
      zh: '培训与工作坊',
      ar: 'التدريب وورش العمل',
    },
    summary: {
      en: 'Practical bilingual sessions on Gulf data protection, PIPL and market-entry basics — for teams and associations.',
      zh: '面向团队与协会的实务双语课程：海湾数据保护、PIPL 与市场准入基础。',
      ar: 'جلسات ثنائية اللغة عن حماية البيانات في الخليج وPIPL وأساسيات دخول السوق — للفرق والجمعيات.',
    },
    body: {
      en: 'Training that ends in slides is training that ends. Every session closes with a role-specific checklist, a decision tree for the common cases, and a 30-day follow-up clinic where your team brings real files.',
      zh: '止步于幻灯片的培训等于没训。每场课程都以岗位专属清单、常见情形决策树，以及 30 天后的跟进答疑（带着真实文件来）收尾。',
      ar: 'التدريب الذي ينتهي بشرائح إنه انتهى. كل جلسة تُختم بقائمة خاصة بالدور، وشجرة قرار للحالات الشائعة، وعيادة متابعة بعد 30 يومًا يحضر فيها فريقك ملفات حقيقية.',
    },
    deliverables: [
      {
        en: 'Custom agenda mapped to your roles',
        zh: '匹配岗位的定制议程',
        ar: 'جدول مخصص مرتبط بأدواركم',
      },
      {
        en: 'Trilingual handouts and checklists',
        zh: '三语讲义与清单',
        ar: 'مذكرات وقوائم بلغات ثلاث',
      },
      {
        en: 'Case exercises using your documents',
        zh: '基于贵司文件的案例演练',
        ar: 'تمارين حالة باستخدام مستنداتكم',
      },
      { en: '30-day follow-up clinic', zh: '30 天跟进答疑', ar: 'عيادة متابعة بعد 30 يومًا' },
    ],
    timeline: {
      en: '1 day – 4 weeks programme',
      zh: '1 天 – 4 周课程',
      ar: 'من يوم واحد إلى برنامج 4 أسابيع',
    },
    href: '/contact',
  },
];
