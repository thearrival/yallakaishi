import type { Localized } from '../i18n';

export const values: { icon: string; title: Localized; body: Localized }[] = [
  {
    icon: 'eye',
    title: {
      en: 'Say the uncomfortable thing early',
      zh: '难听的话早点说',
      ar: 'قل المزعج مبكرًا',
    },
    body: {
      en: 'If a plan will not survive a regulator, a bank or a buyer, you hear it in the discovery call — not after the invoice.',
      zh: '若某个方案经不起监管、银行或买方的检验，您会在诊断通话中听到 — 而不是在收到账单之后。',
      ar: 'إن لم تصمد الخطة أمام منظّم أو بنك أو مشترٍ، تسمع ذلك في مكالمة الاستكشاف لا بعد الفاتورة.',
    },
  },
  {
    icon: 'document',
    title: { en: 'Deliverables, not decks', zh: '交付物，不是幻灯片', ar: 'مخرجات لا عروض' },
    body: {
      en: 'Every engagement ends with documents someone can act on: a checklist, a filing, a contract, a register with owners against dates.',
      zh: '每次合作都以可执行的文档收尾：清单、申报、合同，以及带责任人与日期的登记表。',
      ar: 'ينتهي كل تعاقد بمستندات قابلة للتنفيذ: قائمة، أو ملف، أو عقد، أو سجل بأصحابه ومواعيده.',
    },
  },
  {
    icon: 'translate',
    title: { en: 'Bilingual by default', zh: '双语是默认设置', ar: 'ثنائية اللغة هي الأصل' },
    body: {
      en: 'Important words are verified in all three languages before they reach an authority — because the expensive mistakes are almost always translation mistakes.',
      zh: '重要措辞在提交机关前均经三语核验 — 因为昂贵的错误几乎都是翻译错误。',
      ar: 'تُتحقق الكلمات المهمة بلغات الثلاث قبل وصولها للجهات — لأن الأخطاء الباهظة غالبًا أخطاء ترجمة.',
    },
  },
  {
    icon: 'clock',
    title: { en: 'Own the deadline', zh: '对截止日期负责', ar: 'الالتزام بالموعد' },
    body: {
      en: 'We track authority processing times and tell you when they slip — before you have to ask.',
      zh: '我们跟踪机关审批时长，一旦延误会主动告知 — 无需您来追问。',
      ar: 'نتتبّع أوقات معالجة الجهات ونخبرك عند التأخر — قبل أن تسأل.',
    },
  },
];

export const founder = {
  name: { en: 'Omar Al-Rashidi', zh: '奥马尔·拉希迪', ar: 'عمر الراشد' },
  role: { en: 'Founder & Managing Director', zh: '创始人兼董事总经理', ar: 'المؤسس والمدير العام' },
  quote: {
    en: 'I spent a decade watching good businesses lose a year — and a budget — to a filing order nobody had written down. Yalla Kaishi exists so that does not happen to you.',
    zh: '我花了十年时间，眼睁睁看着好企业因为没有人写下来的申报顺序，白白损失一年与一笔预算。亚拉凯世的存在，就是为了让这种事不会发生在您身上。',
    ar: 'قضيت عقدًا أرى فيها أعمالاً جيدة تخسر عامًا وميزانية بسبب تسلسل إيداع لم يسجّله أحد. وُجدت يلا كايشي لكي لا يحصل هذا معكم.',
  },
  bio: {
    en: 'Before founding the firm, Omar spent ten years running cross-border operations between South China and the Gulf — first on the sourcing side for a GCC distributor, then building an in-house compliance desk for a Shenzhen exporter. He has personally filed, appealed and re-filed more regulatory dossiers than he cares to count.',
    zh: '在创立本所之前，奥马尔在华南与海湾之间运营跨境业务十年 — 先为一家海湾分销商负责采购，后为一家深圳出口商搭建内部合规台。他亲自递交、申诉与重递的监管材料数量，多到自己都懒得数。',
    ar: 'قبل تأسيس المكتب، قضا عمر عقدًا في تشغيل العمليات العابرة للحدود بين جنوب الصين والخليج — أولًا في التوريد لموزع خليجي، ثم ببناء مكتب امتثال داخلي لمصدّر من شنتشن. لقد قدّم وطعن وأعاد تقديم ملفات تنظيمية أكثر مما يحبّ عدّها.',
  },
  languages: {
    en: 'Arabic · English · Mandarin',
    zh: '阿拉伯语 · 英语 · 普通话',
    ar: 'العربية · الإنجليزية · الماندرين',
  },
};

export interface TeamMember {
  name: Localized;
  role: Localized;
  focus: Localized;
  languages: Localized;
}

export const team: TeamMember[] = [
  {
    name: { en: 'Lin Zhao', zh: '赵琳', ar: 'لين تشاو' },
    role: { en: 'Head of China Operations', zh: '中国区运营负责人', ar: 'رئيسة عمليات الصين' },
    focus: {
      en: 'Entity setup, ICP filings, factory audits, customs',
      zh: '主体设立、ICP 备案、工厂审核、关务',
      ar: 'تأسيس الكيانات وتسجيل ICP وتدقيق المصانع والجمارك',
    },
    languages: { en: 'Mandarin · English', zh: '普通话 · 英语', ar: 'الماندرين · الإنجليزية' },
  },
  {
    name: { en: 'Fatima Nasser', zh: '法蒂玛·纳赛尔', ar: 'فاطمة ناصر' },
    role: { en: 'Head of Gulf Markets', zh: '海湾市场负责人', ar: 'رئيسة أسواق الخليج' },
    focus: {
      en: 'MISA / SAGIA licensing, PDPL readiness, Arabic filings',
      zh: 'MISA / SAGIA 牌照、PDPL 就绪、阿语申报',
      ar: 'تراخيص MISA / SAGIA والاستعداد لـ PDPL والملفات العربية',
    },
    languages: { en: 'Arabic · English', zh: '阿拉伯语 · 英语', ar: 'العربية · الإنجليزية' },
  },
  {
    name: { en: 'Wei Chen', zh: '陈伟', ar: 'وي تشن' },
    role: {
      en: 'Regulatory Translation Lead',
      zh: '监管翻译负责人',
      ar: 'مسؤول الترجمة التنظيمية',
    },
    focus: {
      en: 'Legal & regulatory texts, terminology governance',
      zh: '法律与监管文本、术语治理',
      ar: 'النصوص القانونية والتنظيمية وحوكمة المصطلحات',
    },
    languages: {
      en: 'Mandarin · English · Arabic',
      zh: '普通话 · 英语 · 阿拉伯语',
      ar: 'الماندرين · الإنجليزية · العربية',
    },
  },
  {
    name: { en: 'James Okonkwo', zh: '詹姆斯·奥孔克沃', ar: 'جيمس أكونكو' },
    role: { en: 'Due Diligence & Risk', zh: '尽职调查与风险', ar: 'العناية الواجبة والمخاطر' },
    focus: {
      en: 'Counterparty verification, sanctions screening, audits',
      zh: '对手方核验、制裁筛查、审核',
      ar: 'التحقق من الأطراف وفحص العقوبات والتدقيق',
    },
    languages: { en: 'English · Mandarin', zh: '英语 · 普通话', ar: 'الإنجليزية · الماندرين' },
  },
];

export const presence: { city: Localized; role: Localized; note: Localized }[] = [
  {
    city: { en: 'Guangzhou, China', zh: '中国 · 广州', ar: 'غوانغتشو، الصين' },
    role: { en: 'Head office', zh: '总部', ar: 'المقر الرئيسي' },
    note: {
      en: 'Full team, filings, audits, translation desk',
      zh: '完整团队、申报、审核、翻译台',
      ar: 'الفريق الكامل والإيداعات والتدقيق والترجمة',
    },
  },
  {
    city: {
      en: 'Gulf region (via partners)',
      zh: '海湾地区（通过合作方）',
      ar: 'المنطقة الخليجية (عبر الشركاء)',
    },
    role: { en: 'Partner network', zh: '合作网络', ar: 'شبكة الشركاء' },
    note: {
      en: 'Licensed counsel, filing agents, inspectors',
      zh: '持牌律师、申报代理、验厂员',
      ar: 'مستشارون مرخّصون ووكلاء إيداع ومدققون',
    },
  },
  {
    city: {
      en: 'Remote-first across all three time zones',
      zh: '三地时区远程优先',
      ar: 'عن بُعد في المناطق الزمنية الثلاث',
    },
    role: { en: 'Delivery model', zh: '交付模式', ar: 'نموذج التسليم' },
    note: {
      en: 'Scheduled on-site days when the work requires',
      zh: '工作需要时安排现场日',
      ar: 'أيام ميدانية مجدولة عند الحاجة',
    },
  },
];

export const credentials: Localized[] = [
  {
    en: 'Registered business services entity, Guangzhou',
    zh: '注册商业服务机构，广州',
    ar: 'كيان خدمات أعمال مسجّل، غوانغتشو',
  },
  {
    en: 'Partner network of licensed law firms (CN / KSA / UAE)',
    zh: '持牌律所合作网络（中国 / 沙特 / 阿联酋）',
    ar: 'شبكة شركاء من مكاتب محاماة مرخّصة (الصين / السعودية / الإمارات)',
  },
  {
    en: 'Certified translators for legal and regulatory texts',
    zh: '法律与监管文本认证译员',
    ar: 'مترجمون معتمدون للنصوص القانونية والتنظيمية',
  },
  {
    en: 'Inspection and audit partners across the Pearl River Delta',
    zh: '覆盖珠三角的验厂与审核伙伴',
    ar: 'شركاء تدقيق وفحص في دلتا لؤلؤ',
  },
];
