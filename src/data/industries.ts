import type { Localized } from '../i18n';

export interface Industry {
  slug: string;
  index: string;
  icon: string;
  name: Localized;
  headline: Localized;
  body: Localized;
  entryPoints: Localized[];
  risks: Localized[];
}

export const industries: Industry[] = [
  {
    slug: 'trading-distribution',
    index: '01',
    icon: 'swap',
    name: { en: 'Trading & Distribution', zh: '贸易与分销', ar: 'التوزيع والتجارة' },
    headline: {
      en: 'Product in, buyer paid, margin intact.',
      zh: '货进得来，款收得到，利润守得住。',
      ar: 'المنتج يدخل، والمشتري يدفع، والهامش سليم.',
    },
    body: {
      en: 'Importers and exporters live and die by paperwork timing. We sequence contracts, quality specs, customs classification and payment terms so goods move and money follows — with contracts drafted in the language each side will actually litigate in.',
      zh: '进出口商的成败取决于文件时序。我们将合同、质量标准、海关归类与付款条件排序，让货物流转、资金跟上 — 并以双方真正可能诉诸司法的语言起草合同。',
      ar: 'يعيش المستوردون والصادرون أو يموتون على توقيت أوروبا. نرتّب العقود ومواصفات الجودة والتصنيف الجمركي وشروط الدفع لحركة السلع ومتابعة الأموال — بعقود بلغة كل طرف عند اللجوء إليها.',
    },
    entryPoints: [
      {
        en: 'Supplier / distributor due diligence',
        zh: '供应商 / 分销商尽调',
        ar: 'العناية الواجبة بالموزع والمورد',
      },
      {
        en: 'Bilingual contracts with payment security',
        zh: '含付款保障的双语合同',
        ar: 'عقود ثنائية مع أمانة دفع',
      },
      {
        en: 'Customs classification & export declaration',
        zh: '海关归类与出口申报',
        ar: 'التصنيف الجمركي والإقرار الصادر',
      },
      { en: 'Pre-shipment inspection', zh: '出货前验货', ar: 'الفحص قبل الشحن' },
    ],
    risks: [
      {
        en: 'HS misclassification triggering duty reassessment',
        zh: 'HS 归类错误引发补税',
        ar: 'خطأ التصنيف يؤدي إلى إعادة تقييم الرسوم',
      },
      {
        en: 'Quality clauses unenforceable in the buyer jurisdiction',
        zh: '质量条款在买方法域不可执行',
        ar: 'بنود جودة غير قابلة للتنفيذ لدى المشتري',
      },
      {
        en: 'Payment released before inspection rights bite',
        zh: '付款先于验货权生效',
        ar: 'الدفع قبل سريان حق الفحص',
      },
    ],
  },
  {
    slug: 'manufacturing',
    index: '02',
    icon: 'gear',
    name: { en: 'Manufacturing', zh: '制造业', ar: 'التصنيع' },
    headline: {
      en: 'Audited capacity, not sales-deck capacity.',
      zh: '产能以审核为准，不以宣传册为准.',
      ar: 'طاقة مدقَّقة لا طاقة في العروض.',
    },
    body: {
      en: 'Whether you are placing orders into the Pearl River Delta or setting up production in the Gulf, the risks are the same: certificates that were never renewed, capacity that exists only on paper, and quality systems with no records behind them.',
      zh: '无论您在珠三角下单，还是在海湾设厂，风险都一样：过期未续的证书、纸面产能，以及没有记录支撑的质量体系。',
      ar: 'سواء تطلب من دلتا لؤلؤ أو تأسّس إنتاجًا في الخليج فالمخاطر واحدة: شهادات منتهية، وطاقة ورقية، وأنظمة جودة بلا سجلات.',
    },
    entryPoints: [
      {
        en: 'Factory audit with scoring report',
        zh: '工厂审核与评分报告',
        ar: 'تدقيق مصنع بتقرير مقيّم',
      },
      {
        en: 'Supplier quality agreement (bilingual)',
        zh: '供应商质量协议（双语）',
        ar: 'اتفاقية جودة المورد (ثنائية)',
      },
      {
        en: 'Certificates & standards verification',
        zh: '证书与标准核验',
        ar: 'التحقق من الشهادات والمعايير',
      },
      {
        en: 'China or Gulf production set-up',
        zh: '中国或海湾产能落地',
        ar: 'تأسيس إنتاج في الصين أو الخليج',
      },
    ],
    risks: [
      {
        en: 'ISO certificates expired or scope-limited',
        zh: 'ISO 证书过期或范围受限',
        ar: 'شهادات ISO منتهية أو محدودة النطاق',
      },
      {
        en: 'Sub-tier suppliers never audited',
        zh: '二级供应商从未审核',
        ar: 'موردو الطبقات الفرعية لم يُدقَّقوا',
      },
      {
        en: 'Product-liability exposure unallocated',
        zh: '产品责任风险未分配',
        ar: 'مسؤولية المنتج غير موزّعة',
      },
    ],
  },
  {
    slug: 'ecommerce-retail',
    index: '03',
    icon: 'cart',
    name: { en: 'E-commerce & Retail', zh: '电商与零售', ar: 'التجارة الإلكترونية والتجزئة' },
    headline: {
      en: 'Storefronts, marketplaces and the filings behind them.',
      zh: '店面、平台，以及其背后的备案手续。',
      ar: 'المتاجر والأسواق الإلكترونية وتسجيلاتها.',
    },
    body: {
      en: 'Selling across the corridor means two content rules, two consumer-protection regimes and two data regimes. We build the filing and content structure once, then keep it compliant as listings, campaigns and pixels change weekly.',
      zh: '跨走廊销售意味着两套内容规则、两套消费者保护制度与两套数据制度。我们一次性搭建备案与内容结构，并随每周变动的上架商品、广告活动与像素持续维持合规。',
      ar: 'البيع عبر الممر يعني نظامي محتوى ونظامي حماية للمستهلك ونظامي بيانات. نبني التسجيل والمحتوى مرة واحدة، ثم نحافظ على الامتثال مع تغير العروض والحملات أسبوعيًا.',
    },
    entryPoints: [
      {
        en: 'ICP filing & hosting structure',
        zh: 'ICP 备案与托管架构',
        ar: 'تسجيل ICP وهيكل الاستضافة',
      },
      {
        en: 'Cross-border e-commerce registration',
        zh: '跨境电商主体登记',
        ar: 'تسجيل التجارة الإلكترونية العابرة',
      },
      {
        en: 'Label, claims & advertising review',
        zh: '标签、宣称与广告审阅',
        ar: 'مراجعة الملصقات والادعاءات والإعلانات',
      },
      {
        en: 'Data-transfer & pixel consent',
        zh: '数据出境与像素同意',
        ar: 'نقل البيانات والموافقة',
      },
    ],
    risks: [
      {
        en: 'Claims that read differently in Arabic copy',
        zh: '阿语文案中的宣称含义走样',
        ar: 'ادعاءات تختلف دلالتها بالعربية',
      },
      {
        en: 'Personal data exported without a transfer mechanism',
        zh: '个人数据无合法出境路径',
        ar: 'تصدير بيانات دون آلية نقل',
      },
      {
        en: 'Unregistered marketplace seller account',
        zh: '平台卖家账号未登记',
        ar: 'حساب بائع غير مسجّل',
      },
    ],
  },
  {
    slug: 'education-training',
    index: '04',
    icon: 'cap',
    name: { en: 'Education & Training', zh: '教育与培训', ar: 'التعليم والتدريب' },
    headline: {
      en: 'Curriculum crosses borders; licences do not.',
      zh: '课程可以跨境，牌照不行.',
      ar: 'المنهج يعبر الحدود، والتراخيص لا.',
    },
    body: {
      en: 'Institutions expanding between China and the Gulf hit the same wall: accreditation recognition, campus licensing and student-data rules. We map what transfers, what must be re-approved locally, and how to price without over-promising.',
      zh: '在中海湾之间扩张的院校都会撞上同一堵墙：学历互认、校区许可与学生数据规则。我们厘清哪些可转移、哪些须本地重新审批，以及如何定价而不夸大承诺。',
      ar: 'تصطدم المؤسسات بالجدار نفسه عند التوسع بين الصين والخليج: الاعتراف بالاعتماد، وترخيص الحرم، وقواعد بيانات الطلاب. نوضح ما ينتقل وما يحتاج إعادة اعتماد محلياً والتسعير دون مبالغة.',
    },
    entryPoints: [
      {
        en: 'Accreditation & recognition mapping',
        zh: '认证与互认梳理',
        ar: 'خريطة الاعتراف بالاعتماد',
      },
      {
        en: 'Campus / branch licence applications',
        zh: '校区 / 分校牌照申请',
        ar: 'طلبات ترخيص الحرم',
      },
      {
        en: 'Student-data compliance (PIPL / PDPL)',
        zh: '学生数据合规（PIPL / PDPL）',
        ar: 'امتثال بيانات الطلاب (PIPL / PDPL)',
      },
      {
        en: 'MoU & franchise agreement drafting',
        zh: '合作备忘录与加盟协议起草',
        ar: 'صياغة مذكرات التفاهم والامتياز',
      },
    ],
    risks: [
      {
        en: 'Foreign credential claims rejected locally',
        zh: '境外资质不被本地认可',
        ar: 'رفض الاعتماد الأجنبي محليًا',
      },
      {
        en: 'Branch operating before licence issued',
        zh: '校区在获牌前即开学',
        ar: 'التشغيل قبل إصدار الترخيص',
      },
      {
        en: 'Student records shared across borders informally',
        zh: '学生信息非正式跨境共享',
        ar: 'مشاركة سجلات الطلاب عبر الحدود غير رسمياً',
      },
    ],
  },
  {
    slug: 'hospitality-fnb',
    index: '05',
    icon: 'cup',
    name: { en: 'Hospitality & F&B', zh: '酒店与餐饮', ar: 'الضيافة والأغذية' },
    headline: {
      en: 'One menu, two food-safety rulebooks.',
      zh: '一份菜单，两套食安规则.',
      ar: 'قائمة واحدة، ونظاما سلامة غذاء.',
    },
    body: {
      en: 'Restaurants, catering and hotel groups moving between the two markets discover that halal certification, ingredient labelling and alcohol licensing are not paperwork details — they are brand decisions. We sequence them properly.',
      zh: '在两个市场之间拓展的餐饮与酒店集团会发现：清真认证、配料标签与酒类许可不是文书细节，而是品牌决策。我们为您排出正确顺序。',
      ar: 'اكتشفت المطاعم ومجموعات الفنادق أن شهادة الحلال وملصقات المكونات وترخيص الكحول ليست تفاصيل ورقية بل قرارات علامة. نرتبها كما ينبغي.',
    },
    entryPoints: [
      { en: 'Halal certification coordination', zh: '清真认证协调', ar: 'تنسيق شهادة الحلال' },
      {
        en: 'Ingredient & label compliance review',
        zh: '配料与标签合规审阅',
        ar: 'مراجعة المكونات والملصقات',
      },
      {
        en: 'F&B licensing & premises approval',
        zh: '餐饮许可与场地审批',
        ar: 'ترخيص الأغذية وموافقة المكان',
      },
      { en: 'Imported-product registration', zh: '进口食品登记', ar: 'تسجيل المنتجات المستوردة' },
    ],
    risks: [
      {
        en: 'Label claims lost in translation',
        zh: '标签宣称在翻译中走样',
        ar: 'ضياع الادعاءات في الترجمة',
      },
      {
        en: 'Local partnership assumed where not required',
        zh: '误以为必须本地合伙',
        ar: 'افتراض شراكة محلية حيث لا تلزم',
      },
      {
        en: 'Menu changes shipped before approval',
        zh: '菜单改版先于审批上线',
        ar: 'تحديث القائمة قبل الموافقة',
      },
    ],
  },
  {
    slug: 'technology-services',
    index: '06',
    icon: 'chip',
    name: { en: 'Technology & Services', zh: '科技与专业服务', ar: 'التكنولوجيا والخدمات' },
    headline: {
      en: 'Software, data and people move differently.',
      zh: '软件、数据与人员，各有各的跨境规则.',
      ar: 'البرمجيات والبيانات والأفراد تتحرك بقواعد مختلفة.',
    },
    body: {
      en: 'SaaS providers, consultancies and engineering firms face the softest and hardest barriers at once: language on the sales side, and data residency, contracting entity and licensing on the delivery side.',
      zh: 'SaaS、咨询与工程公司同时面对最软与最硬的壁垒：销售侧的语言，与交付侧的数据驻留、签约主体和牌照。',
      ar: 'تواجه شركات SaaS والاستشارات والهندسة أبرز الحواجز نعومة وقسوة معًا: لغة جانب البيع، وإقامة البيانات والكيان المتعاقد والترخيص جانب التسليم.',
    },
    entryPoints: [
      {
        en: 'Entity setup for regional delivery',
        zh: '区域交付主体设立',
        ar: 'تأسيس كيان للتسليم الإقليمي',
      },
      {
        en: 'Data-residency & cross-border transfer plan',
        zh: '数据驻留与出境方案',
        ar: 'خطة إقامة البيانات والنقل العابر',
      },
      {
        en: 'Localisation of contracts & support terms',
        zh: '合同与支持条款本地化',
        ar: 'توطين العقود وشروط الدعم',
      },
      {
        en: 'Recruitment & expatriate work permits',
        zh: '招聘与外籍工作许可',
        ar: 'التوظيف وتصاريح عمل المقيمين',
      },
    ],
    risks: [
      {
        en: 'Server location treated as compliance strategy',
        zh: '把服务器位置当作合规策略',
        ar: 'اعتبار موقع الخادم استراتيجية امتثال',
      },
      {
        en: 'Support terms unenforceable in local courts',
        zh: '支持条款在本地法院不可执行',
        ar: 'شروط الدعم غير قابلة للتنفيذ',
      },
      {
        en: 'Hiring abroad without a work-permit chain',
        zh: '海外用工无工作许可链路',
        ar: 'توظيف بلا سلسلة تصاريح',
      },
    ],
  },
];
