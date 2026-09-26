import type { Localized } from '../i18n';

export interface SupportService {
  slug: string;
  title: Localized;
  summary: Localized;
}

export interface SupportCategory {
  slug: string;
  index: string;
  icon: string;
  title: Localized;
  blurb: Localized;
  services: SupportService[];
}

/** 6 categories · 32 services — the China Support catalogue. */
export const supportCategories: SupportCategory[] = [
  {
    slug: 'visa',
    index: '01',
    icon: 'stamp',
    title: { en: 'Visa & Immigration', zh: '签证与出入境', ar: 'التأشيرات والهجرة' },
    blurb: {
      en: 'From invitation letters to residence permits — prepared correctly the first time, tracked until the stamp lands.',
      zh: '从邀请函到居留许可 — 一次备齐，全程跟踪至落章。',
      ar: 'من خطابات الدعوة إلى تصاريح الإقامة — تجهيز صحيح من المرة الأولى، وتتبع حتى الختم.',
    },
    services: [
      {
        slug: 'business-visa-m',
        title: { en: 'Business visa (M) filing', zh: '商务签证（M）办理', ar: 'تأشيرة العمل (M)' },
        summary: {
          en: 'Invitation documentation, forms and submission for Chinese M visas.',
          zh: '邀请材料、表格填写与递交。',
          ar: 'وثائق الدعوة والنماذج والإقدام لتأشيرات العمل الصينية.',
        },
      },
      {
        slug: 'work-permit-z',
        title: {
          en: 'Work permit + Z visa chain',
          zh: '工作许可 + Z 签证链',
          ar: 'تصريح العمل + سلسلة تأشيرة Z',
        },
        summary: {
          en: 'End-to-end sequence: work certificate, work permit, Z visa, residence permit.',
          zh: '端到端流程：工作证明、工作许可、Z 签证、居留许可。',
          ar: 'سلسلة كاملة: شهادة العمل وتصريح العمل وتأشيرة Z وإقامة.',
        },
      },
      {
        slug: 'family-reunion',
        title: {
          en: 'Family reunion (Q/S) visa',
          zh: '家庭团聚（Q/S）签证',
          ar: 'تأشيرة لم شمل الأسرة (Q/S)',
        },
        summary: {
          en: 'Support for spouses and children joining a resident in China.',
          zh: '协助随居亲属赴华。',
          ar: 'دعم الأزواج والأطفال للانضمام إلى مقيم في الصين.',
        },
      },
      {
        slug: 'residence-permit',
        title: { en: 'Residence permit renewal', zh: '居留许可续期', ar: 'تجديد تصريح الإقامة' },
        summary: {
          en: 'Renewals 30 days before expiry, with employer and housing paperwork.',
          zh: '到期前 30 天续期，含雇主与住宿材料。',
          ar: 'التجديد قبل 30 يومًا من الانتهاء مع أوراق المشغل والسكن.',
        },
      },
      {
        slug: 'exit-entry',
        title: {
          en: 'Overstay & exit-entry support',
          zh: '逾期与出入境支持',
          ar: 'دعم التأخر والخروج والدخول',
        },
        summary: {
          en: 'Assessment, authority liaison and compliant departure planning.',
          zh: '评估、机关沟通与合规离境规划。',
          ar: 'تقييم وتنسيق مع الجهات وتخطيط خروج ممتثل.',
        },
      },
      {
        slug: 'foreigner-registration',
        title: {
          en: 'Temporary residence registration',
          zh: '临时住宿登记',
          ar: 'تسجيل الإقامة المؤقتة',
        },
        summary: {
          en: 'PSB registration after arrival and after every move.',
          zh: '抵华及每次迁居后的派出所登记。',
          ar: 'تسجيل الشرطة بعد الوصول وبعد كل انتقال.',
        },
      },
    ],
  },
  {
    slug: 'business',
    index: '02',
    icon: 'building',
    title: { en: 'Business & Company', zh: '商务与公司事务', ar: 'الأعمال والشركات' },
    blurb: {
      en: 'Incorporation, licensing, tax registration and contracts — set up so the second year is boring.',
      zh: '注册、许可、税务登记与合同 — 让第二年省心的设立方式。',
      ar: 'التأسيس والتصاريح والتسجيل الضريبي والعقود — ترتيب حتى يكون العام الثاني هادئًا.',
    },
    services: [
      {
        slug: 'company-registration',
        title: {
          en: 'Company registration (WFOE / JV)',
          zh: '公司注册（WFOE / 合资）',
          ar: 'تأسيس شركة (WFOE / شراكة)',
        },
        summary: {
          en: 'Name approval, articles, business licence and seals.',
          zh: '名称核准、章程、营业执照与印章。',
          ar: 'الموافقة على الاسم والعقد والرخصة والختم.',
        },
      },
      {
        slug: 'annual-report',
        title: {
          en: 'Annual report & licence renewal',
          zh: '年报与执照续期',
          ar: 'التقرير السنوي وتجديد الرخصة',
        },
        summary: {
          en: 'SAMR filings, licence changes and deadline monitoring.',
          zh: '市场监管申报、执照变更与期限监控。',
          ar: 'إيداع SAMR وتغيير الرخصة ومتابعة المواعيد.',
        },
      },
      {
        slug: 'bank-account',
        title: {
          en: 'Corporate bank account opening',
          zh: '企业银行开户',
          ar: 'فتح حساب بنكي للشركات',
        },
        summary: {
          en: 'Bank shortlisting, document packs and appointment attendance.',
          zh: '银行筛选、材料包与陪同面签。',
          ar: 'اختيار البنك وحزم المستندات وحضور المواعيد.',
        },
      },
      {
        slug: 'tax-registration',
        title: {
          en: 'Tax registration & invoicing',
          zh: '税务登记与开票',
          ar: 'التسجيل الضريبي والفواتير',
        },
        summary: {
          en: 'Tax ID, fapiao setup and monthly filing rhythm.',
          zh: '税号、发票系统与月度申报节奏。',
          ar: 'الرقم الضريبي وإعداد الفواتير وإقرار شهري.',
        },
      },
      {
        slug: 'icp-filing',
        title: {
          en: 'ICP备案 & website compliance',
          zh: 'ICP 备案与网站合规',
          ar: 'تسجيل ICP وامتثال المواقع',
        },
        summary: {
          en: 'Chinese-hosted website filing, provider coordination and renewals.',
          zh: '境内网站备案、服务商协调与续期。',
          ar: 'تسجيل المواقع المستضافة محليًا والتنسيق مع المزوّد والتجديد.',
        },
      },
      {
        slug: 'contracts',
        title: {
          en: 'Contracts & bilingual drafting',
          zh: '合同与双语起草',
          ar: 'العقود والصياغة ثنائية اللغة',
        },
        summary: {
          en: 'Supplier, distributor and agency agreements reviewed on both sides.',
          zh: '供应商、分销与代理协议双端审阅。',
          ar: 'عقود الموردين والموزعين والوكلاء بمراجعة الطرفين.',
        },
      },
      {
        slug: 'trademark-ip',
        title: {
          en: 'Trademark & IP protection',
          zh: '商标与知识产权保护',
          ar: 'علامة تجارية وحماية الملكية',
        },
        summary: {
          en: 'China / GCC class strategy, filings and watch services.',
          zh: '中国 / 海湾类别策略、申请与监控。',
          ar: 'استراتيجية الفئات في الصين والخليج والتقديم والمراقبة.',
        },
      },
    ],
  },
  {
    slug: 'education',
    index: '03',
    icon: 'cap',
    title: { en: 'Education', zh: '教育服务', ar: 'التعليم' },
    blurb: {
      en: 'Schools, universities and training providers — applications handled with the institution, not around it.',
      zh: '学校、大学与培训机构 — 与院方直接对接办理，不走弯路。',
      ar: 'المدارس والجامعات ومزمو التدبير — طلبات تُعالج مع المؤسسة لا حولها.',
    },
    services: [
      {
        slug: 'university-admission',
        title: { en: 'University admission support', zh: '大学申请支持', ar: 'دعم القبول الجامعي' },
        summary: {
          en: 'Programme selection, document prep and application submission.',
          zh: '专业选择、材料准备与申请递交。',
          ar: 'اختيار البرنامج وتجهيز المستندات والإقدام.',
        },
      },
      {
        slug: 'student-visa-x',
        title: {
          en: 'Student visa (X1/X2) process',
          zh: '学生签证（X1/X2）流程',
          ar: 'تأشيرة الطالب (X1/X2)',
        },
        summary: {
          en: 'JW202 forms, embassy submission and arrival registration.',
          zh: 'JW202 表格、使馆递交与抵境登记。',
          ar: 'نماذج JW202 والإقدام للسفارة وتسجيل الوصول.',
        },
      },
      {
        slug: 'school-enrolment',
        title: {
          en: 'International school enrolment',
          zh: '国际学校入学',
          ar: 'الالتحاق بالمدارس الدولية',
        },
        summary: {
          en: 'Shortlisting, interviews, deposits and housing proximity.',
          zh: '择校筛选、面试、押金与就近住宿。',
          ar: 'الترشيح والمقابلات والودائع والقرب من السكن.',
        },
      },
      {
        slug: 'language-training',
        title: {
          en: 'Mandarin & Arabic programmes',
          zh: '中文与阿拉伯语课程',
          ar: 'برامج الماندرين والعربية',
        },
        summary: {
          en: 'Bespoke language training for relocating staff and families.',
          zh: '为外派员工与家属定制语言培训.',
          ar: 'تدريب لغوي مخصص للموظفين المنقولين والعائلات.',
        },
      },
      {
        slug: 'credential-evaluation',
        title: {
          en: 'Credential evaluation & notarisation',
          zh: '学历认证与公证',
          ar: 'تقييم الشهادات والتوثيق',
        },
        summary: {
          en: 'Degree verification, notarisation and apostille coordination.',
          zh: '学位核验、公证与海牙认证协调。',
          ar: 'التحقق من الدرجات والتوثيق وتنسيق الشهادة الرسومية.',
        },
      },
    ],
  },
  {
    slug: 'housing',
    index: '04',
    icon: 'key',
    title: { en: 'Accommodation & Lifestyle', zh: '住宿与生活', ar: 'السكن ونمط الحياة' },
    blurb: {
      en: 'The unglamorous logistics that decide whether a relocation succeeds — housing, banking, healthcare.',
      zh: '决定外派成败的幕后琐事 — 住房、银行、医疗。',
      ar: 'اللوجستيات غير اللامعة التي تحسم نجاح النقل — السكن والبنك والرعاية الصحية.',
    },
    services: [
      {
        slug: 'apartment-rental',
        title: {
          en: 'Apartment search & lease review',
          zh: '租房寻源与租约审阅',
          ar: 'البحث عن شقة ومراجعة العقد',
        },
        summary: {
          en: 'Area orientation, viewings, contract review and deposit handling.',
          zh: '区域介绍、看房、合同审阅与押金处理.',
          ar: 'تعريف بالمناطق والمعاينات ومراجعة العقد وإيداعات.',
        },
      },
      {
        slug: 'relocation-pack',
        title: {
          en: 'Relocation pack for staff & families',
          zh: '员工与家属安置包',
          ar: 'حزمة توطين للموظفين والعائلات',
        },
        summary: {
          en: 'Schools, utilities, SIM, bank and first-week schedule.',
          zh: '学校、水电、电话卡、银行与首周日程。',
          ar: 'المدارس والمرافق والشريحة والبنك وجدول الأسبوع الأول.',
        },
      },
      {
        slug: 'health-onboarding',
        title: {
          en: 'Healthcare & insurance onboarding',
          zh: '医疗与保险落地',
          ar: 'الرعاية الصحية والتأمين',
        },
        summary: {
          en: 'Hospital registration, insurance enrolment and translation support.',
          zh: '医院建档、参保与陪诊翻译。',
          ar: 'تسجيل المستشفى والتأمين ودعم الترجمة.',
        },
      },
      {
        slug: 'utility-setup',
        title: {
          en: 'Utilities, phone & banking setup',
          zh: '水电、手机卡与银行开户',
          ar: 'المرافق والهاتف والخدمات المصرفية',
        },
        summary: {
          en: 'Deposits, contracts, SIM registration and mobile pay.',
          zh: '押金、合约、实名办卡与移动支付。',
          ar: 'الودائع والعقود وتسجيل الشريحة والدفع عبر الهاتف.',
        },
      },
      {
        slug: 'domestic-support',
        title: {
          en: 'Domestic staff & driver sourcing',
          zh: '家政与司机推荐',
          ar: 'توظيف العون المنزلي والسائق',
        },
        summary: {
          en: 'Vetted candidates, contracts and household onboarding.',
          zh: '背调过的候选人、合同与入职安排。',
          ar: 'مرشحون مفحوصون وعقود وتهيئة المنزل.',
        },
      },
    ],
  },
  {
    slug: 'guangzhou',
    index: '05',
    icon: 'map',
    title: { en: 'Guangzhou Local Services', zh: '广州本地服务', ar: 'خدمات غوانغتشو المحلية' },
    blurb: {
      en: 'Your feet on the ground in the Pearl River Delta — factories, fairs, ports and paperwork.',
      zh: '珠三角的实地支持 — 工厂、展会、港口与文件。',
      ar: 'أقدامكم على الأرض في دلتا لؤلؤ — مصانع ومعارض وموانئ وأوراق.',
    },
    services: [
      {
        slug: 'factory-audit',
        title: {
          en: 'Factory audit & supplier visit',
          zh: '工厂审核与供应商访厂',
          ar: 'تدقيق المصنع وزيارة المورد',
        },
        summary: {
          en: 'Capacity, quality systems and on-site verification reports.',
          zh: '产能、质量体系与现场核验报告。',
          ar: 'الطاقة وأنظمة الجودة وتقارير التحقق الميداني.',
        },
      },
      {
        slug: 'canton-fair',
        title: { en: 'Canton Fair support', zh: '广交会支持', ar: 'دعم معرض قوانغتشو' },
        summary: {
          en: 'Badging, exhibitor setup, interpreters and buyer meetings.',
          zh: '办证、展位搭建、翻译陪同与买家洽谈。',
          ar: 'التذاكر وإعداد الرسوم والمترجمون واجتماعات المشترين.',
        },
      },
      {
        slug: 'sourcing-agent',
        title: {
          en: 'Sourcing & inspection agent',
          zh: '采购与验货代理',
          ar: 'وكيل التوريد والفحص',
        },
        summary: {
          en: 'Quotation comparison, sampling, pre-shipment inspection.',
          zh: '报价比对、打样、出货前验货。',
          ar: 'مقارنة العروض والعينات والفحص قبل الشحن.',
        },
      },
      {
        slug: 'port-logistics',
        title: {
          en: 'Shipping & customs coordination',
          zh: '海运与报关协调',
          ar: 'الشحن والتنسيق الجمركي',
        },
        summary: {
          en: 'HS classification, export declarations and freight follow-up.',
          zh: 'HS 归类、出口报关与货代跟进。',
          ar: 'تصنيف HS والتصاريح الصادر ومتابعة الشحن.',
        },
      },
      {
        slug: 'interpreter-field',
        title: {
          en: 'On-site interpreter & liaison',
          zh: '现场翻译与陪同',
          ar: 'مترجم ميداني وتنسيق',
        },
        summary: {
          en: 'Mandarin/Arabic interpreters for meetings, audits and clinics.',
          zh: '会议、审核与就医场景的中阿口译。',
          ar: 'مترجمو صيني/عربي للاجتماعات والتدقيق والعيادات.',
        },
      },
    ],
  },
  {
    slug: 'driving',
    index: '06',
    icon: 'car',
    title: { en: 'Driving & Vehicles', zh: '驾照与车辆', ar: 'القيادة والمركبات' },
    blurb: {
      en: 'Licence conversion, vehicle purchase and registration — the paperwork behind the keys.',
      zh: '驾照换领、购车与上牌 — 车钥匙背后的手续。',
      ar: 'تحويل الرخصة وشراء المركبة وتسجيلها — الأوراق خلف المفاتيح.',
    },
    services: [
      {
        slug: 'licence-conversion',
        title: {
          en: 'Foreign licence conversion',
          zh: '境外驾照换领',
          ar: 'تحويل الرخصة الأجنبية',
        },
        summary: {
          en: 'Eligibility check, theory booking, test escort and collection.',
          zh: '资格核查、科目一预约、陪考与领证。',
          ar: 'الأهلية وحجز الاختبار ومرافق الاختبار والاستلام.',
        },
      },
      {
        slug: 'driving-school',
        title: { en: 'Driving school enrolment', zh: '驾校报名', ar: 'الالتحاق بمدرسة القيادة' },
        summary: {
          en: 'Licensed school placement and exam scheduling for newcomers.',
          zh: '合规驾校对接与新学员考试排期。',
          ar: 'الربط بمدرسة مرخصة وجدولة الاختبارات للوافدين.',
        },
      },
      {
        slug: 'vehicle-purchase',
        title: { en: 'Vehicle purchase assistance', zh: '购车协助', ar: 'مساعدة شراء المركبة' },
        summary: {
          en: 'Dealer negotiation, import options and warranty review.',
          zh: '经销商议价、进口方案与质保审阅。',
          ar: 'تفاوض الوكالة وخيارات الاستيراد ومراجعة الضمان.',
        },
      },
      {
        slug: 'vehicle-registration',
        title: {
          en: 'Vehicle registration & plates',
          zh: '车辆登记与上牌',
          ar: 'تسجيل المركبة واللوحات',
        },
        summary: {
          en: 'Title, insurance, inspection and plate issuance handling.',
          zh: '产权、保险、年检与上牌代办。',
          ar: 'الملكية والتأمين والفحص وإصدار اللوحة.',
        },
      },
    ],
  },
];

export const supportServiceCount = supportCategories.reduce((n, c) => n + c.services.length, 0);
