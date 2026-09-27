import type { Locale, Localized } from './index';

/**
 * Page-level copy: headings, introductions, section labels, page metadata.
 * Repeating content records (services, industries, FAQs…) live in `src/data`
 * with the same `{ en, zh, ar }` shape.
 */
export const uiPages = {
  /* ══════════ HOME ══════════ */
  'home.hero.eyebrow': {
    en: 'Cross-border business services · China ⇄ GCC',
    zh: '跨境商业服务 · 中国 ⇄ 海湾',
    ar: 'خدمات أعمال عابرة للحدود · الصين ⇄ الخليج',
  },
  'home.hero.title1': {
    en: 'Two markets. One team.',
    zh: '两个市场，一个团队。',
    ar: 'سوقان. فريق واحد.',
  },
  'home.hero.title2': {
    en: 'Zero guesswork.',
    zh: '不再靠猜。',
    ar: 'بدون تخمين.',
  },
  'home.hero.sub': {
    en: 'Market entry, compliance and in-country operations on both ends of the corridor — fixed-fee scope and a written plan before you spend a riyal or a renminbi.',
    zh: '走廊两端的市场准入、合规与在地运营 — 固定费用，花钱前先出书面方案。',
    ar: 'دخول السوق والامتثال والعمليات الميدانية على طرفي الممر — نطاق برسوم ثابتة وخطة مكتوبة قبل أول ريال أو يوان.',
  },
  'home.hero.cta1': {
    en: 'Get a free assessment',
    zh: '获取免费评估',
    ar: 'احصل على تقييم مجاني',
  },
  'home.hero.cta2': { en: 'Explore services', zh: '浏览服务', ar: 'استكشف الخدمات' },
  'home.panel.title': {
    en: 'The corridor, in one view',
    zh: '一条走廊，一图看懂',
    ar: 'الممر في نظرة واحدة',
  },
  'home.panel.leg1t': { en: 'China side', zh: '中国一端', ar: 'الجانب الصيني' },
  'home.panel.leg1d': {
    en: 'Sourcing, incorporation, ICP filings, contracts and factory audits from Guangzhou.',
    zh: '从广州提供采购、注册、ICP 备案、合同与工厂审核。',
    ar: 'التوريد وتأسيس الشركات وتسجيل ICP والعقود وتدقيق المصانع من غوانغتشو.',
  },
  'home.panel.leg2t': { en: 'Gulf side', zh: '海湾一端', ar: 'الجانب الخليجي' },
  'home.panel.leg2d': {
    en: 'MISA / SAGIA licensing, PDPL readiness, distributor vetting and Arabic filings.',
    zh: 'MISA / SAGIA 许可、PDPL 合规、分销商尽调与阿拉伯语申报。',
    ar: 'تراخيص MISA / SAGIA، والاستعداد لـ PDPL، والتحقق من الموزعين، والملفات بالعربية.',
  },
  'home.panel.foot': {
    en: 'Single point of contact',
    zh: '单一对接窗口',
    ar: 'نقطة تواصل واحدة',
  },
  'home.panel.live': { en: 'Guangzhou HQ', zh: '广州总部', ar: 'المقر: غوانغتشو' },

  'home.services.eyebrow': { en: 'What we do', zh: '我们的服务', ar: 'ما نقدمه' },
  'home.services.title': {
    en: 'Six services. One bridge.',
    zh: '六大服务，一座桥梁。',
    ar: 'ست خدمات. جسر واحد.',
  },
  'home.services.sub': {
    en: 'Delivered bilingually, documented professionally, and reviewed by licensed partner counsel wherever the law requires it.',
    zh: '以双语交付、专业文档呈现，并在法律要求时由持牌合作律师复核。',
    ar: 'تُقدَّم بلغتين، بمستندات احترافية، ومراجعة من مستشارين قانونيين مرخّصين حيثما يقتضي القانون ذلك.',
  },
  'home.services.all': {
    en: 'See all services',
    zh: '查看全部服务',
    ar: 'عرض كل الخدمات',
  },

  'home.process.eyebrow': { en: 'How we work', zh: '合作流程', ar: 'كيف نعمل' },
  'home.process.title': {
    en: 'Clear process. Clear deliverables.',
    zh: '流程清晰，交付明确。',
    ar: 'عملية واضحة. مخرجات محددة.',
  },
  'home.process.sub': {
    en: 'From the first call to steady-state support — a defined path with fixed fees agreed up front.',
    zh: '从首次通话到持续支持 — 路径明确，费用事先约定。',
    ar: 'من أول مكالمة إلى الدعم المستمر — مسار محدد ورسوم متفق عليها مسبقًا.',
  },

  'home.industries.eyebrow': { en: 'Who we serve', zh: '服务对象', ar: 'من نخدم' },
  'home.industries.title': {
    en: 'Six sectors, two directions of trade.',
    zh: '六大行业，双向贸易。',
    ar: 'ستة قطاعات، تجارة في اتجاهين.',
  },
  'home.industries.sub': {
    en: 'The corridor looks different for a caster in Foshan than for a retailer in Riyadh. We plan for yours.',
    zh: '佛山的铸造厂与利雅得的零售商，走廊上的挑战截然不同。我们为您的场景定制方案。',
    ar: 'يبدو الممر مختلفًا لصانع في فوشان عن تاجر تجزئة في الرياض. نخطط لحالتك أنت.',
  },

  'home.engagement.eyebrow': {
    en: 'Engagement models',
    zh: '合作模式',
    ar: 'نماذج التعاون',
  },
  'home.engagement.title': {
    en: 'Pick the shape of the work.',
    zh: '选择适合的合作形态。',
    ar: 'اختر شكل العمل.',
  },
  'home.engagement.sub': {
    en: 'Three ways to work with us — each with a written scope, a fixed price or a capped budget, and no surprise invoices.',
    zh: '三种合作方式 — 均附书面范围、固定价格或封顶预算，绝无意外账单。',
    ar: 'ثلاث طرق للعمل معنا — لكل منها نطاق مكتوب وسعر ثابت أو ميزانية محدّدة، دون فواتير مفاجئة.',
  },

  'home.faq.eyebrow': { en: 'Questions', zh: '常见问题', ar: 'الأسئلة الشائعة' },
  'home.faq.title': {
    en: 'Straight answers, before you book.',
    zh: '预约之前，先给你直接的答案。',
    ar: 'إجابات مباشرة قبل أن تحجز.',
  },

  'home.cta.title': {
    en: 'Tell us the market. We map the path.',
    zh: '告诉我们要进的市场，我们来画路线。',
    ar: 'أخبرنا بالسوق، ونرسم لك الطريق.',
  },
  'home.cta.body': {
    en: 'Two lines about your plan. Cost, timeline and risk back within 24 hours — no deck, no pressure.',
    zh: '两行需求，24 小时内给你成本、周期与风险的实话 — 不推销，不施压。',
    ar: 'سطران عن خطتك، وتحصل خلال 24 ساعة على التكلفة والمدة والمخاطر — بلا عرض ضاغط.',
  },

  /* ══════════ SERVICES ══════════ */
  'services.meta.title': { en: 'Services', zh: '服务', ar: 'الخدمات' },
  'services.meta.desc': {
    en: 'Six cross-border services: compliance operations, regulatory translation, market entry, partner due diligence, technology and training — for China ⇄ GCC trade.',
    zh: '六项跨境服务：合规运营、监管翻译、市场准入与许可、合作伙伴尽调、技术工具与培训 — 面向中国 ⇄ 海湾贸易。',
    ar: 'ست خدمات عابرة للحدود: عمليات الامتثال، الترجمة التنظيمية، دخول السوق والتراخيص، العناية الواجبة بالشركاء، التقنية والتدريب — لتجارة الصين ⇄ الخليج.',
  },
  'services.eyebrow': { en: 'Service lines', zh: '服务线', ar: 'خطوط الخدمة' },
  'services.deliverTitle': {
    en: 'What you get',
    zh: '交付内容',
    ar: 'ماذا تحصل عليه',
  },
  'services.timeTitle': {
    en: 'Typical timeline',
    zh: '参考周期',
    ar: 'المدة النموذجية',
  },
  'services.title': {
    en: 'Everything the corridor demands, under one roof.',
    zh: '走廊所需，一站式齐备。',
    ar: 'كل ما يتطلبه الممر تحت سقف واحد.',
  },
  'services.sub': {
    en: 'Each line has its own deliverables, timeline and fixed-fee band. Combine them into a single engagement when you are entering a market for the first time.',
    zh: '每条服务线都有独立的交付物、时间表与固定费用区间。首次进入市场时，可将它们组合为一个合作方案。',
    ar: 'لكل خط خدمة مخرجاته ومدته ورسومه الثابتة. اجمعها في تعاقد واحد عند دخولك سوقًا لأول مرة.',
  },
  'services.notLegal': {
    en: 'Regulatory interpretation is delivered together with licensed law firms in China and the Gulf. We do not practise law.',
    zh: '监管解读由我们与中国及海湾地区的持牌律所共同完成。我们不从事法律执业。',
    ar: 'يُقدَّم التفسير التنظيمي بالتعاون مع مكاتب محاماة مرخّصة في الصين والخليج. لا نمارس مهنة القانون.',
  },

  /* ══════════ CHINA SUPPORT ══════════ */
  'cs.meta.title': { en: 'China Support', zh: '中国支持服务', ar: 'دعم الصين' },
  'cs.meta.desc': {
    en: 'Visa, business, education, accommodation, Guangzhou and driving services in China — one professional point of contact for international clients.',
    zh: '在华签证、商务、教育、住宿、广州本地与驾照服务 — 为国际客户提供单一专业对接窗口。',
    ar: 'خدمات التأشيرات والأعمال والتعليم والسكن وغوانغتشو والقيادة في الصين — نقطة تواصل مهنية واحدة للعملاء الدوليين.',
  },
  'cs.eyebrow': { en: 'In-country support', zh: '在地支持', ar: 'دعم داخل الصين' },
  'cs.title': {
    en: 'China business, travel & admin — handled.',
    zh: '在华商务、出行与行政 — 交给我们。',
    ar: 'أعمال وسفر وإجراءات في الصين — نتكفّل بها.',
  },
  'cs.sub': {
    en: 'Thirty-two coordinated services across six categories. One form, one reference number, one team following up — so you are not chasing five vendors in three time zones.',
    zh: '六大类、三十二项协同服务。一份表单、一个受理编号、一个团队跟进 — 您无需在三个时区里对接五家供应商。',
    ar: 'اثنتان وثلاثون خدمة منسّقة عبر ست فئات. نموذج واحد، ورقم مرجعي واحد، وفريق واحد يتابع — دون الحاجة لموردين خمسة عبر ثلاث مناطق زمنية.',
  },
  'cs.categories': { en: 'Six categories', zh: '六大类别', ar: 'ست فئات' },
  'cs.allServices': {
    en: 'All services in this category',
    zh: '本类别全部服务',
    ar: 'كل الخدمات في هذه الفئة',
  },
  'cs.requestCta': { en: 'Request service', zh: '申请服务', ar: 'اطلب الخدمة' },
  'cs.whyTitle': {
    en: 'Why clients use us for China',
    zh: '客户为何选择我们在华支持',
    ar: 'لماذا يعتمد علينا العملاء في الصين',
  },
  'cs.disclaimerTitle': { en: 'Important', zh: '重要提示', ar: 'مهم' },
  'cs.disclaimer': {
    en: 'Yalla Kaishi provides service coordination and administrative assistance. We do not issue visas, government licences, permits, Canton Fair credentials, university admissions or vehicle registrations. All approvals remain at the discretion of the relevant authorities and institutions.',
    zh: '亚拉凯世提供服务协调与行政协助。我们不签发签证、政府许可、广交会证件、大学录取或车辆登记。所有审批权归相关主管机构与院校所有。',
    ar: 'تقيّم يلا كايشي تنسيق الخدمات والمساعدة الإدارية. لا نصدر التأشيرات أو التراخيص الحكومية أو تصاريح معرض قوانغتشو أو قبول الجامعات أو تسجيل المركبات. تبقى كل الموافقات لجهات الاختصاص.',
  },
  'cs.visaTitle': {
    en: 'Visa approvals',
    zh: '签证审批',
    ar: 'موافقات التأشيرات',
  },
  'cs.visaNote': {
    en: 'Visa issuance depends entirely on the relevant authorities. We prepare, coordinate and submit — we never guarantee approval.',
    zh: '签证签发完全取决于主管机关。我们负责准备、协调与递交 — 从不保证获批。',
    ar: 'إصدار التأشيرات يعود بالكامل للجهات المختصة. نحن نجهّز وننسّق ونقدّم — ولا نضمن القبول أبدًا.',
  },
  'cs.eduTitle': { en: 'Admission decisions', zh: '录取决定', ar: 'قرارات القبول' },
  'cs.eduNote': {
    en: 'Admission decisions are made exclusively by the educational institution.',
    zh: '录取决定完全由相关院校作出。',
    ar: 'قرارات القبول من صلاحيات المؤسسة التعليمية حصريًا.',
  },

  /* ══════════ INDUSTRIES ══════════ */
  'industries.meta.title': { en: 'Industries', zh: '行业方案', ar: 'القطاعات' },
  'industries.meta.desc': {
    en: 'Sector-specific China ⇄ GCC market-entry playbooks for trading, manufacturing, e-commerce, education, hospitality and technology.',
    zh: '面向贸易、制造、电商、教育、酒店与科技行业的中国 ⇄ 海湾市场进入方案。',
    ar: 'خطط دخول مخصصة لقطاعات التجارة والتصنيع والتجارة الإلكترونية والتعليم والضيافة والتكنولوجيا بين الصين والخليج.',
  },
  'industries.eyebrow': { en: 'Industries', zh: '行业', ar: 'القطاعات' },
  'industries.title': {
    en: 'Your sector has its own rulebook.',
    zh: '每个行业都有自己的规则手册。',
    ar: 'لكل قطاع قواعده الخاصة.',
  },
  'industries.sub': {
    en: 'The paperwork, the regulators and the risk profile differ by industry. Here is how we adapt the corridor for each.',
    zh: '所需文件、主管机关与风险特征因行业而异。以下是我们针对各行业的走廊方案。',
    ar: 'تختلف الأوراق والجهات الرقابية وملف المخاطر باختلاف القطاع. إليك كيف نكيّف الممر لكل قطاع.',
  },
  'industries.risks': { en: 'Watch-outs', zh: '重点风险', ar: 'نقاط الانتباه' },
  'industries.entryTitle': {
    en: 'Where we come in',
    zh: '我们的切入点',
    ar: 'أين نتدخل',
  },

  /* ══════════ CASE STUDIES ══════════ */
  'cases.meta.title': { en: 'Case studies', zh: '案例研究', ar: 'دراسات الحالة' },
  'cases.meta.desc': {
    en: 'Anonymised engagement patterns showing how cross-border entry actually runs — scope, timeline and outcomes.',
    zh: '匿名合作案例，呈现跨境进入的实际推进方式 — 范围、周期与成果。',
    ar: 'أنماط تعاقد مجهولة الهوية توضح كيف يجري دخول السوق فعليًا — النطاق والمدة والنتائج.',
  },
  'cases.eyebrow': { en: 'Case studies', zh: '案例', ar: 'دراسات الحالة' },
  'cases.title': {
    en: 'How the work actually runs.',
    zh: '实际推进方式。',
    ar: 'كيف يجري العمل فعليًا.',
  },
  'cases.sub': {
    en: 'Three representative engagements, anonymised to protect client confidentiality. Figures are illustrative of scope, not published client results.',
    zh: '三个代表性合作案例，为保护客户机密已作匿名处理。数据用于说明工作范围，并非公开的客户成果。',
    ar: 'ثلاثة تعاقدات تمثيلية، مجهولة الهوية حفاظًا على سرية العملاء. الأرقام توضيحية للنطاق وليست نتائج منشورة.',
  },
  'cases.scope': { en: 'Scope', zh: '范围', ar: 'النطاق' },
  'cases.duration': { en: 'Duration', zh: '周期', ar: 'المدة' },
  'cases.outcome': { en: 'Outcome', zh: '结果', ar: 'النتيجة' },
  'cases.anonymised': {
    en: 'Anonymised engagement',
    zh: '匿名合作案例',
    ar: 'تعاون مجهول الهوية',
  },
  'cases.placeholderNote': {
    en: 'Client names, logos and signed testimonials are added only with written permission.',
    zh: '客户名称、标识与签署的推荐语，仅在获得书面许可后才会展示。',
    ar: 'تُضاف أسماء العملاء والشعارات والتوصيات الموقعة فقط بموافقة مكتوبة.',
  },

  /* ══════════ ENGAGEMENT ══════════ */
  'eng.meta.title': {
    en: 'Engagement & pricing',
    zh: '合作方式与投入',
    ar: 'نماذج التعاون والتسعير',
  },
  'eng.meta.desc': {
    en: 'Three engagement models — sprint, project and retainer — with fixed fees, capped budgets and written scopes.',
    zh: '三种合作模式 — 冲刺、项目与常年顾问 — 固定费用、封顶预算、书面范围。',
    ar: 'ثلاثة نماذج تعاقد — سريع، ومشروع، ومرافقة مستمرة — برسوم ثابتة ونطاق مكتوب وميزانية محدّدة.',
  },
  'eng.eyebrow': { en: 'Working with us', zh: '与我们合作', ar: 'العمل معنا' },
  'eng.title': {
    en: 'Transparent by default.',
    zh: '默认透明。',
    ar: 'الشفافية هي الأصل.',
  },
  'eng.sub': {
    en: 'You always know the price, the deliverables and the deadline before work begins. If scope changes, we re-quote in writing first.',
    zh: '开工前您就清楚价格、交付物与截止日期。若范围变更，我们会先书面重新报价。',
    ar: 'تعرف السعر والمخرجات والموعد النهائي قبل بدء العمل. وإذا تغيّر النطاق نعيد التسعير كتابيًا أولًا.',
  },
  'eng.fixedFee': { en: 'Fixed fee', zh: '固定费用', ar: 'رسوم ثابتة' },
  'eng.capped': { en: 'capped budget', zh: '封顶预算', ar: 'ميزانية محدّدة' },
  'eng.mostPopular': { en: 'Most chosen', zh: '最常选择', ar: 'الأكثر اختيارًا' },
  'eng.includes': { en: 'What is included', zh: '包含内容', ar: 'ما يشمله' },
  'eng.notIncluded': { en: 'Not included', zh: '不包含', ar: 'غير مشمول' },
  'eng.notIncludedNote': {
    en: 'Government fees, notarisation, legal disbursements and third-party certifications are always billed at cost with receipts.',
    zh: '政府规费、公证、律师代垫费用与第三方认证始终按实际发生金额凭票据结算。',
    ar: 'الرسوم الحكومية والتصديق والتكاليف القانونية والشهادات الخارجية تُحصَّل دائمًا بالتكلفة الفعلية مع الإيصالات.',
  },
  'eng.compare': { en: 'Compare models', zh: '模式对比', ar: 'مقارنة النماذج' },
  'eng.customTitle': {
    en: 'Not sure which fits?',
    zh: '不确定选哪个？',
    ar: 'لست متأكدًا ما يناسبك؟',
  },
  'eng.customBody': {
    en: 'Describe the market and the deadline. We will recommend a model — and tell you honestly if you do not need us yet.',
    zh: '描述您的市场与时间节点。我们会推荐合适的模式 — 若您暂时不需要我们，也会坦诚告知。',
    ar: 'صِف السوق والموعد النهائي. سنوصي بنموذج مناسب — ونخبرك بصراحة إذا لم تكن بحاجتنا بعد.',
  },

  /* ══════════ ABOUT ══════════ */
  'about.meta.title': { en: 'About', zh: '关于我们', ar: 'من نحن' },
  'about.meta.desc': {
    en: 'A bilingual team rooted in Guangzhou, built around a decade on the China–Gulf corridor.',
    zh: '扎根广州的双语团队，十年深耕中国—海湾走廊：市场准入、合规运营与在地支持，固定费用、书面方案先行。',
    ar: 'فريق ثنائي اللغة مقره غوانغتشو، بُني على عقد من العمل على ممر الصين–الخليج.',
  },
  'about.eyebrow': { en: 'About us', zh: '关于我们', ar: 'من نحن' },
  'about.title': {
    en: 'Two worlds, one team.',
    zh: '两个世界，一个团队。',
    ar: 'عالمان، فريق واحد.',
  },
  'about.sub': {
    en: 'We have lived on both ends of the corridor — which is why our advice survives contact with reality.',
    zh: '我们长期生活在走廊两端 — 所以我们的建议经得起现实检验。',
    ar: 'عشنا على طرفي الممر — ولذلك تصمد نصائحنا أمام الواقع.',
  },
  'about.storyTitle': {
    en: 'Why Yalla Kaishi exists',
    zh: '亚拉凯世为何而生',
    ar: 'لماذا وُجدت يلا كايشي',
  },
  'about.valuesTitle': { en: 'How we operate', zh: '我们的做事方式', ar: 'كيف نعمل' },
  'about.presenceTitle': {
    en: 'Where we are',
    zh: '我们的所在地',
    ar: 'أين نتواجد',
  },
  'about.teamTitle': { en: 'The people', zh: '团队成员', ar: 'الأفراد' },
  'about.teamNote': {
    en: 'A compact senior team — you always speak to the person doing the work.',
    zh: '精干的资深团队 — 您永远直接对接执行者本人。',
    ar: 'فريق صغير ذو خبرة عالية — تتواصل دائمًا مع من ينفّذ العمل.',
  },
  'about.credsTitle': {
    en: 'Credentials & network',
    zh: '资质与合作网络',
    ar: 'الاعتمادات والشبكة',
  },

  /* ══════════ PROCESS ══════════ */
  'process.meta.title': { en: 'Process', zh: '合作流程', ar: 'العملية' },
  'process.meta.desc': {
    en: 'Discover, scope, deliver, support — a four-step engagement with fixed fees and written deliverables.',
    zh: '诊断、界定、交付、支持 — 四步合作，固定费用，书面交付。',
    ar: 'الاستكشاف والتخصيص والتسليم والدعم — أربع خطوات برسوم ثابتة ومخرجات مكتوبة.',
  },
  'process.eyebrow': { en: 'How we work', zh: '工作方式', ar: 'منهجيتنا' },
  'process.title': {
    en: 'Four steps. No black boxes.',
    zh: '四个步骤，没有黑箱。',
    ar: 'أربع خطوات. بلا صناديق سوداء.',
  },
  'process.sub': {
    en: 'You see the plan, the price and the progress at every stage — in English, Chinese or Arabic.',
    zh: '每个阶段您都能看到计划、价格与进度 — 支持英文、中文或阿拉伯文。',
    ar: 'ترى الخطة والسعر والتقدم في كل مرحلة — بالإنجليزية أو الصينية أو العربية.',
  },
  'process.whatNext': { en: 'What you get', zh: '您将获得', ar: 'ما تحصل عليه' },
  'process.timelineTitle': {
    en: 'Indicative timeline',
    zh: '参考时间表',
    ar: 'الجدول الزمني التقريبي',
  },
  'process.timelineNote': {
    en: 'Indicative only — government processing times are outside our control and are confirmed in your proposal.',
    zh: '仅供参考 — 政府审批时间不受我方控制，将在提案中另行确认。',
    ar: 'تقديري فقط — أوقات معالجة الجهات الحكومية خارج سيطرتنا وتُؤكَّد في عرضك.',
  },

  /* ══════════ FAQ ══════════ */
  'faq.meta.title': { en: 'FAQ', zh: '常见问题', ar: 'الأسئلة الشائعة' },
  'faq.meta.desc': {
    en: 'Answers on fees, timelines, legal boundaries, data handling and how cross-border engagements actually run.',
    zh: '关于费用、周期、法律边界、数据处理与跨境合作实际运作方式的解答。',
    ar: 'إجابات عن الرسوم والمدة والحدود القانونية ومعالجة البيانات وكيف يجري التعاقد فعليًا.',
  },
  'faq.eyebrow': { en: 'FAQ', zh: '常见问题', ar: 'الأسئلة الشائعة' },
  'faq.title': {
    en: 'Everything worth asking.',
    zh: '值得问的一切。',
    ar: 'كل ما يستحق السؤال.',
  },
  'faq.sub': {
    en: 'If your question is not here, ask it — we answer honestly, including when the answer is “not yet”.',
    zh: '若这里没有您的问题，请直接提出 — 我们会诚实作答，包括“暂时不需要”。',
    ar: 'إن لم تجد سؤالك هنا اسألنا — نجيب بصدق، حتى لو كانت الإجابة «ليس بعد».',
  },
  'faq.stillTitle': {
    en: 'Still wondering?',
    zh: '还有疑问？',
    ar: 'ما زلت تتساءل؟',
  },
  'faq.stillBody': {
    en: 'Send the question directly. A specialist — not a bot — replies within 24 hours.',
    zh: '直接把问题发给我们。由专业人员（非机器人）在 24 小时内回复。',
    ar: 'أرسل سؤالك مباشرة. يرد عليك مختص — لا روبوت — خلال 24 ساعة.',
  },

  /* ══════════ INSIGHTS ══════════ */
  'insights.meta.title': { en: 'Insights', zh: '专业洞察', ar: 'رؤى' },
  'insights.meta.desc': {
    en: 'Practical notes on regulation, market entry and operations across China and the Gulf.',
    zh: '中国—海湾走廊的监管变化、市场准入与运营实务笔记 — 为经营者而写，不讲空话。',
    ar: 'ملاحظات عملية عن التنظيم ودخول السوق والعمليات في الصين والخليج.',
  },
  'insights.eyebrow': { en: 'Insights', zh: '洞察', ar: 'رؤى' },
  'insights.title': {
    en: 'What changed, and what it means for you.',
    zh: '变了什么，对您意味着什么。',
    ar: 'ما الذي تغيّر، وماذا يعني لك.',
  },
  'insights.sub': {
    en: 'Short, practical briefings from the corridor — written for operators, not for lawyers.',
    zh: '来自走廊的简短实务简报 — 为经营者而写，不为律师而写。',
    ar: 'إحاطات عملية قصيرة من الممر — مكتوبة للممارسين لا للمحامين.',
  },
  'insights.empty': {
    en: 'New briefings are on the way.',
    zh: '新简报即将发布。',
    ar: 'إحاطات جديدة في الطريق.',
  },
  'insights.back': { en: 'All insights', zh: '全部洞察', ar: 'كل الرؤى' },
  'insights.related': {
    en: 'Related reading',
    zh: '相关阅读',
    ar: 'قراءات ذات صلة',
  },
  'insights.contactAuthor': {
    en: 'Questions about this briefing?',
    zh: '关于本简报还有问题？',
    ar: 'أسئلة حول هذه الإحاطة؟',
  },

  /* ══════════ CONTACT ══════════ */
  'contact.meta.title': { en: 'Contact', zh: '联系我们', ar: 'اتصل بنا' },
  'contact.meta.desc': {
    en: 'Tell us the market and the deadline. First reply within 24 hours, in English, Chinese or Arabic.',
    zh: '告诉我们要进入的市场与时间节点。24 小时内首次回复，支持中英阿三语。',
    ar: 'أخبرنا بالسوق والموعد النهائي. الرد الأول خلال 24 ساعة بالإنجليزية أو الصينية أو العربية.',
  },
  'contact.eyebrow': { en: 'Contact', zh: '联系', ar: 'تواصل' },
  'contact.title': {
    en: 'Where are you headed?',
    zh: '您要去哪里？',
    ar: 'إلى أين متجه؟',
  },
  'contact.sub': {
    en: 'A two-line brief is enough to start. We reply with a candid read on cost, timeline and risk — and what to do next.',
    zh: '两行简述即可开始。我们会回复关于成本、周期与风险的坦诚评估 — 以及下一步建议。',
    ar: 'يكفي ملخص من سطرين للبدء. نرد بتقييم صريح للتكلفة والمدة والمخاطر — وما ينبغي فعله بعد ذلك.',
  },
  'contact.formTitle': { en: 'Send a brief', zh: '发送需求简述', ar: 'أرسل ملخصًا' },
  'contact.directTitle': {
    en: 'Direct lines',
    zh: '直接联系方式',
    ar: 'قنوات مباشرة',
  },
  'contact.offices': { en: 'Presence', zh: '据点', ar: 'الحضور' },
  'contact.nextSteps': {
    en: 'What happens next',
    zh: '接下来会发生什么',
    ar: 'ماذا يحدث بعد ذلك',
  },
  'contact.step1t': { en: 'We read it', zh: '我们阅读需求', ar: 'نقرأ طلبك' },
  'contact.step1d': {
    en: 'A specialist reviews your brief — not a sales queue.',
    zh: '由专业人员审阅您的简述 — 不是销售队列。',
    ar: 'يراجع مختص ملخصك — لا طابور مبيعات.',
  },
  'contact.step2t': { en: 'We reply', zh: '我们回复', ar: 'نرد عليك' },
  'contact.step2d': {
    en: 'Within 24 hours: feasibility, indicative cost and timeline.',
    zh: '24 小时内：可行性、参考成本与周期。',
    ar: 'خلال 24 ساعة: الجدوى والتكلفة التقديرية والمدة.',
  },
  'contact.step3t': { en: 'We scope', zh: '我们界定范围', ar: 'نحدد النطاق' },
  'contact.step3d': {
    en: 'A written, fixed-fee proposal with deliverables and dates.',
    zh: '书面固定费用提案，含交付物与日期。',
    ar: 'عرض مكتوب برسوم ثابتة يشمل المخرجات والتواريخ.',
  },

  /* ══════════ LEGAL ══════════ */
  'legal.eyebrow': { en: 'Legal', zh: '法律信息', ar: 'قانوني' },
  'legal.lastUpdated': {
    en: 'Last updated: 27 September 2026',
    zh: '最后更新：2026 年 9 月 27 日',
    ar: 'آخر تحديث: 27 سبتمبر 2026',
  },
  'legal.privacyTitle': {
    en: 'Privacy policy',
    zh: '隐私政策',
    ar: 'سياسة الخصوصية',
  },
  'legal.privacyDesc': {
    en: 'What we collect, why we collect it, how long we keep it and the rights you have over it.',
    zh: '我们收集什么、为何收集、保存多久，以及您对这些信息享有的权利。',
    ar: 'ما نجمعه ولماذا وكم نحتفظ به والحقوق التي تملكها تجاهه.',
  },
  'legal.termsTitle': { en: 'Terms of use', zh: '使用条款', ar: 'شروط الاستخدام' },
  'legal.termsDesc': {
    en: 'The rules for using this website and engaging our services.',
    zh: '使用本网站及委托我们服务时的权利、限制与责任划分。',
    ar: 'قواعد استخدام هذا الموقع والاستفادة من خدماتنا.',
  },
  'legal.disclaimerTitle': {
    en: 'Disclaimer',
    zh: '免责声明',
    ar: 'إخلاء المسؤولية',
  },
  'legal.disclaimerDesc': {
    en: 'Where our services end and where licensed professionals take over.',
    zh: '我们的服务边界在哪里，以及持牌专业人士从何处接手。',
    ar: 'حدود خدماتنا ومن يتولى الاختصاص من المهنيين المرخّصين.',
  },
} satisfies Record<string, Localized>;

export type PageKey = keyof typeof uiPages;

export function page(key: PageKey, locale: Locale): string {
  const entry = uiPages[key];
  return entry[locale] ?? entry.en;
}
