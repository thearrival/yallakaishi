import type { Locale, Localized } from './index';

/**
 * Global chrome: navigation, metadata, buttons, forms, footer, 404.
 * Values are `{ en, zh, ar }` — enforced by `satisfies Record<string, Localized>`.
 */
export const uiCore = {
  /* ── Document metadata ─────────────────────────────── */
  'meta.tagline': {
    en: 'China ⇄ Gulf. Sorted.',
    zh: '中国 ⇄ 海湾，一站搞定。',
    ar: 'الصين ⇄ الخليج. تمّ الأمر.',
  },
  'meta.homeTitle': {
    en: 'Yalla Kaishi — China ⇄ GCC Cross-Border Business Services',
    zh: '亚拉凯世 — 中国 ⇄ 海湾跨境商业服务',
    ar: 'يلا كايشي — خدمات أعمال عابرة للحدود بين الصين والخليج',
  },
  'meta.homeDesc': {
    en: 'Guangzhou-based cross-border business services for SMEs entering China and the GCC: market entry, compliance operations, regulatory translation, due diligence and in-country support. Fixed-fee proposals, 24-hour reply.',
    zh: '扎根广州的跨境商业服务，助力中小企业进入中国与海湾市场：市场准入、合规运营、监管翻译、尽职调查与在地支持。固定费用提案，24 小时回复。',
    ar: 'خدمات أعمال عابرة للحدود مقرها غوانغتشو، تدعم الشركات الصغيرة والمتوسطة في دخول الصين والخليج: دخول السوق، عمليات الامتثال، الترجمة التنظيمية، العناية الواجبة، والدعم الميداني. عروض بأسعار ثابتة ورد خلال 24 ساعة.',
  },

  /* ── Navigation ────────────────────────────────────── */
  'nav.services': { en: 'Services', zh: '服务', ar: 'الخدمات' },
  'nav.china': { en: 'China Support', zh: '中国支持', ar: 'دعم الصين' },
  'nav.industries': { en: 'Industries', zh: '行业方案', ar: 'القطاعات' },
  'nav.engagement': { en: 'Engagement', zh: '合作方式', ar: 'نماذج التعاون' },
  'nav.insights': { en: 'Insights', zh: '专业洞察', ar: 'رؤى' },
  'nav.about': { en: 'About', zh: '关于我们', ar: 'من نحن' },
  'nav.contact': { en: 'Contact', zh: '联系我们', ar: 'اتصل بنا' },
  'nav.cta': { en: 'Get a proposal', zh: '获取方案', ar: 'اطلب عرض سعر' },
  'nav.menu': { en: 'Open menu', zh: '打开菜单', ar: 'فتح القائمة' },
  'nav.closeMenu': { en: 'Close menu', zh: '关闭菜单', ar: 'إغلاق القائمة' },
  'nav.skip': {
    en: 'Skip to content',
    zh: '跳到主要内容',
    ar: 'انتقل إلى المحتوى',
  },
  'nav.language': { en: 'Language', zh: '语言', ar: 'اللغة' },
  'nav.switchLanguage': {
    en: 'Switch language to {lang}',
    zh: '切换语言至{lang}',
    ar: 'التبديل إلى {lang}',
  },

  /* ── Common actions & labels ───────────────────────── */
  'common.home': { en: 'Home', zh: '首页', ar: 'الرئيسية' },
  'common.more': { en: 'Learn more', zh: '了解更多', ar: 'اعرف المزيد' },
  'common.viewAll': { en: 'View all', zh: '查看全部', ar: 'عرض الكل' },
  'common.backHome': {
    en: 'Back to homepage',
    zh: '返回首页',
    ar: 'العودة للرئيسية',
  },
  'common.contactUs': { en: 'Talk to us', zh: '联系我们', ar: 'تواصل معنا' },
  'common.bookCall': {
    en: 'Book a free call',
    zh: '预约免费通话',
    ar: 'احجز مكالمة مجانية',
  },
  'common.requestProposal': {
    en: 'Request a proposal',
    zh: '索取提案',
    ar: 'اطلب عرضًا',
  },
  'common.requestService': {
    en: 'Request this service',
    zh: '申请此服务',
    ar: 'اطلب هذه الخدمة',
  },
  'common.sendMsg': { en: 'Send message', zh: '发送信息', ar: 'إرسال الرسالة' },
  'common.email': { en: 'Email', zh: '邮箱', ar: 'البريد الإلكتروني' },
  'common.phone': {
    en: 'Phone / WhatsApp',
    zh: '电话 / WhatsApp',
    ar: 'الهاتف / واتساب',
  },
  'common.address': { en: 'Head office', zh: '总部地址', ar: 'المكتب الرئيسي' },
  'common.hours': { en: 'Business hours', zh: '工作时间', ar: 'ساعات العمل' },
  'common.hoursValue': {
    en: 'Mon–Sat, 09:00–18:00 (GMT+8)',
    zh: '周一至周六 09:00–18:00（GMT+8）',
    ar: 'الاثنين–السبت، 09:00–18:00 (GMT+8)',
  },
  'common.response': {
    en: 'First reply within 24 hours',
    zh: '24 小时内首次回复',
    ar: 'الرد الأول خلال 24 ساعة',
  },
  'common.backToTop': { en: 'Back to top', zh: '回到顶部', ar: 'العودة إلى الأعلى' },
  'common.copied': { en: 'Copied', zh: '已复制', ar: 'تم النسخ' },
  'common.copyEmail': { en: 'Copy email', zh: '复制邮箱', ar: 'نسخ البريد' },
  'common.whatsapp': { en: 'Chat on WhatsApp', zh: 'WhatsApp 在线咨询', ar: 'تواصل عبر واتساب' },
  'common.next': { en: 'Continue', zh: '继续', ar: 'متابعة' },
  'common.prev': { en: 'Back', zh: '上一步', ar: 'رجوع' },
  'common.submit': { en: 'Submit request', zh: '提交申请', ar: 'إرسال الطلب' },
  'common.onThisPage': { en: 'On this page', zh: '本页目录', ar: 'في هذه الصفحة' },
  'common.readTime': { en: 'min read', zh: '分钟阅读', ar: 'دقائق قراءة' },
  'common.allRights': {
    en: 'All rights reserved.',
    zh: '版权所有。',
    ar: 'جميع الحقوق محفوظة.',
  },
  'common.notLegalAdvice': {
    en: 'Yalla Kaishi provides cross-border business services — not legal advice.',
    zh: '亚拉凯世提供跨境商业服务，不构成法律意见。',
    ar: 'يلا كايشي تقدّم خدمات أعمال عابرة للحدود وليست استشارة قانونية.',
  },

  /* ── Forms ─────────────────────────────────────────── */
  'form.name': { en: 'Full name', zh: '姓名', ar: 'الاسم الكامل' },
  'form.namePh': { en: 'Your name', zh: '您的姓名', ar: 'اسمك' },
  'form.email': {
    en: 'Work email',
    zh: '工作邮箱',
    ar: 'البريد الإلكتروني للعمل',
  },
  'form.emailPh': { en: 'you@company.com', zh: 'you@company.com', ar: 'you@company.com' },
  'form.company': { en: 'Company', zh: '公司名称', ar: 'الشركة' },
  'form.companyPh': {
    en: 'Company or organisation',
    zh: '公司或机构名称',
    ar: 'الشركة أو الجهة',
  },
  'form.country': { en: 'Country of residence', zh: '常住国家', ar: 'بلد الإقامة' },
  'form.phone': {
    en: 'WhatsApp / phone',
    zh: 'WhatsApp / 电话',
    ar: 'واتساب / الهاتف',
  },
  'form.phonePh': { en: '+966 5X XXX XXXX', zh: '+86 1XX XXXX XXXX', ar: '+966 5X XXX XXXX' },
  'form.language': { en: 'Preferred language', zh: '首选语言', ar: 'اللغة المفضلة' },
  'form.message': {
    en: 'What do you need?',
    zh: '您的需求是什么？',
    ar: 'ما الذي تحتاجه؟',
  },
  'form.messagePh': {
    en: 'Which market are you entering, and by when?',
    zh: '您计划进入哪个市场？时间节点是？',
    ar: 'أي سوق تنوي الدخول إليه، ومتى؟',
  },
  'form.services': {
    en: 'Services of interest',
    zh: '感兴趣的服务',
    ar: 'الخدمات المهتم بها',
  },
  'form.agree': {
    en: 'I agree to be contacted about this enquiry.',
    zh: '我同意我们就此咨询与我联系。',
    ar: 'أوافق على التواصل معي بخصوص هذا الاستفسار.',
  },
  'form.agreeError': {
    en: 'Please confirm we may contact you.',
    zh: '请确认我们可以与您联系。',
    ar: 'يرجى التأكيد بأننا يمكننا التواصل معك.',
  },
  'form.errorRequired': {
    en: 'This field is required.',
    zh: '此项为必填。',
    ar: 'هذا الحقل مطلوب.',
  },
  'form.errorEmail': {
    en: 'Enter a valid email address.',
    zh: '请输入有效的邮箱地址。',
    ar: 'أدخل بريدًا إلكترونيًا صحيحًا.',
  },
  'form.errorPhone': {
    en: 'Enter a valid phone number.',
    zh: '请输入有效的电话号码。',
    ar: 'أدخل رقم هاتف صحيحًا.',
  },
  'form.errorServices': {
    en: 'Select at least one service.',
    zh: '请至少选择一项服务。',
    ar: 'اختر خدمة واحدة على الأقل.',
  },
  'form.errorTooShort': {
    en: 'Please add a little more detail ({n} characters minimum).',
    zh: '请补充更多细节（至少 {n} 个字符）。',
    ar: 'يرجى إضافة تفاصيل أكثر (الحد الأدنى {n} حرفًا).',
  },
  'form.errorGeneric': {
    en: 'Something went wrong. Please try again, or email us directly.',
    zh: '出现问题，请重试，或直接发送邮件给我们。',
    ar: 'حدث خطأ ما. حاول مرة أخرى أو راسلنا مباشرة.',
  },
  'form.sending': { en: 'Sending…', zh: '发送中…', ar: 'جارٍ الإرسال…' },
  'form.successTitle': {
    en: 'Request received',
    zh: '已收到您的申请',
    ar: 'تم استلام طلبك',
  },
  'form.successBody': {
    en: 'Thank you — a specialist will reply within 24 hours. Keep the reference below for future correspondence.',
    zh: '感谢您 — 专员将在 24 小时内回复。请保留以下编号以便后续沟通。',
    ar: 'شكرًا لك — سيتواصل معك مختص خلال 24 ساعة. احتفظ بالرقم أدناه للمواصلة.',
  },
  'form.refLabel': { en: 'Your reference', zh: '您的受理编号', ar: 'رقم مرجعيك' },
  'form.again': {
    en: 'Send another request',
    zh: '再提交一份申请',
    ar: 'إرسال طلب آخر',
  },
  'form.directTitle': {
    en: 'Prefer to write directly?',
    zh: '更愿意直接写信？',
    ar: 'تفضّل المراسلة مباشرة؟',
  },
  'form.directBody': {
    en: 'No problem — email us and we will pick it up from there.',
    zh: '没问题 — 发邮件给我们，我们会继续跟进。',
    ar: 'لا مشكلة — راسلنا عبر البريد وسنكمل من هناك.',
  },
  'form.stepOf': {
    en: 'Step {n} of {t}',
    zh: '第 {n} 步 / 共 {t} 步',
    ar: 'الخطوة {n} من {t}',
  },
  'form.spamNote': {
    en: 'We never share your details. Used only to answer your enquiry.',
    zh: '我们绝不共享您的信息，仅用于回复您的咨询。',
    ar: 'لا نشارك بياناتك أبدًا، وتُستخدم فقط للرد على استفسارك.',
  },

  /* ── Footer ────────────────────────────────────────── */
  'foot.tagline': {
    en: 'From Guangzhou to Riyadh, Dubai and Doha — one bilingual team, zero guesswork.',
    zh: '从广州到利雅得、迪拜、多哈 — 一个双语团队，不再靠猜。',
    ar: 'من غوانغتشو إلى الرياض ودبي ودوحة — فريق واحد يتحدث ثلاث لغات، بلا تخمين.',
  },
  'foot.explore': { en: 'Explore', zh: '浏览', ar: 'استكشف' },
  'foot.company': { en: 'Company', zh: '公司', ar: 'الشركة' },
  'foot.resources': { en: 'Resources', zh: '资源', ar: 'الموارد' },
  'foot.contact': { en: 'Contact', zh: '联系方式', ar: 'التواصل' },
  'foot.privacy': { en: 'Privacy policy', zh: '隐私政策', ar: 'سياسة الخصوصية' },
  'foot.terms': { en: 'Terms of use', zh: '使用条款', ar: 'شروط الاستخدام' },
  'foot.disclaimerPage': {
    en: 'Disclaimer',
    zh: '免责声明',
    ar: 'إخلاء المسؤولية',
  },
  'foot.builtNote': {
    en: 'Registered in Guangzhou, China · Serving clients worldwide',
    zh: '注册于中国广州 · 服务全球客户',
    ar: 'مسجّلة في غوانغتشو، الصين · نخدم عملاء العالم',
  },

  /* ── 404 ───────────────────────────────────────────── */
  '404.code': { en: '404', zh: '404', ar: '404' },
  '404.title': {
    en: 'This page drifted off the bridge.',
    zh: '此页已偏离航线。',
    ar: 'غادرت هذه الصفحة الجسر.',
  },
  '404.body': {
    en: 'The link may be outdated, or the page has moved. Start again from the homepage — or tell us what you were looking for.',
    zh: '链接可能已过期，或页面已移动。请从首页重新开始 — 或告诉我们您在找什么。',
    ar: 'قد يكون الرابط قديمًا أو نُقلت الصفحة. ابدأ من جديد من الصفحة الرئيسية — أو أخبرنا بما تبحث عنه.',
  },
  '404.searchServices': { en: 'Browse services', zh: '浏览服务', ar: 'تصفح الخدمات' },

  /* ── Language bar ──────────────────────────────────── */
} satisfies Record<string, Localized>;

export type CoreKey = keyof typeof uiCore;

export function core(key: CoreKey, locale: Locale): string {
  const entry = uiCore[key];
  return entry[locale] ?? entry.en;
}
