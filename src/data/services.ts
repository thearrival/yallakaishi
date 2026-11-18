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
  href: string;
}

export const coreServices: CoreService[] = [
  {
    slug: 'chinese-presence',
    icon: 'globe',
    index: '01',
    title: { en: 'Chinese presence', zh: '中文形象', ar: 'حضور صيني' },
    summary: {
      en: 'A Chinese company profile, WeChat and Douyin presence, and a one-page Chinese brochure.',
      zh: '中文公司资料、微信与抖音形象，以及一页式中文宣传册。',
      ar: 'ملف شركة بالصينية، حضور على WeChat وDouyin، وكتيب صيني من صفحة واحدة.',
    },
    body: {
      en: 'We build the Chinese-facing presence your buyers can find and trust.',
      zh: '我们建立买家能找到并信任的中文形象。',
      ar: 'نبني حضورًا باللغة الصينية يمكن للمشترين العثور عليه والثقة به.',
    },
    deliverables: [
      { en: 'Chinese company profile', zh: '中文公司资料', ar: 'ملف شركة بالصينية' },
      { en: 'WeChat official account', zh: '微信公众号', ar: 'حساب WeChat رسمي' },
      { en: 'Douyin page', zh: '抖音页面', ar: 'صفحة Douyin' },
      { en: 'One-page Chinese brochure', zh: '一页式中文宣传册', ar: 'كتيب صيني من صفحة واحدة' },
    ],
    timeline: { en: 'Week 1', zh: '第 1 周', ar: 'الأسبوع 1' },
    href: '/contact',
  },
  {
    slug: 'buyer-outreach',
    icon: 'mail',
    index: '02',
    title: { en: 'Buyer outreach', zh: '买家触达', ar: 'تواصل مع المشترين' },
    summary: {
      en: 'Every month we find and contact Chinese buyers, distributors and partners for you.',
      zh: '每个月我们为您寻找并联系中国买家、分销商和合作伙伴。',
      ar: 'كل شهر نجد ونتواصل مع المشترين والموزعين والشركاء الصينيين نيابة عنك.',
    },
    body: {
      en: 'We find and contact Chinese buyers, distributors and partners, then track replies.',
      zh: '我们寻找并联系中国买家、分销商和合作伙伴，并跟踪回复。',
      ar: 'نجد ونتواصل مع المشترين والموزعين والشركاء الصينيين، ثم نتابع الردود.',
    },
    deliverables: [
      { en: 'Target buyer list', zh: '目标买家名单', ar: 'قائمة مشترين مستهدفين' },
      { en: 'Outreach messages', zh: '触达消息', ar: 'رسائل تواصل' },
      { en: 'Reply tracking', zh: '回复跟踪', ar: 'تتبع الردود' },
      { en: 'Monthly report', zh: '月度报告', ar: 'تقرير شهري' },
    ],
    timeline: { en: 'Monthly', zh: '每月', ar: 'شهريًا' },
    href: '/contact',
  },
  {
    slug: 'meetings-in-chinese',
    icon: 'chat',
    index: '03',
    title: { en: 'Meetings in Chinese', zh: '中文会议', ar: 'اجتماعات بالصينية' },
    summary: {
      en: 'We handle replies and meetings in Chinese and send a clear monthly report.',
      zh: '我们用中文处理回复和会议，并发送清晰的月度报告。',
      ar: 'نتولى الردود والاجتماعات بالصينية ونرسل تقريرًا شهريًا واضحًا.',
    },
    body: {
      en: 'We handle replies and meetings in Chinese and send a clear monthly report so you know what moved.',
      zh: '我们用中文处理回复和会议，并发送清晰的月度报告，让您了解进展。',
      ar: 'نتولى الردود والاجتماعات بالصينية ونرسل تقريرًا شهريًا واضحًا لتعرف ما تحقق.',
    },
    deliverables: [
      { en: 'Reply handling', zh: '回复处理', ar: 'معالجة الردود' },
      { en: 'Meeting setup', zh: '会议安排', ar: 'ترتيب الاجتماعات' },
      { en: 'Monthly report', zh: '月度报告', ar: 'تقرير شهري' },
      { en: 'Next steps', zh: '后续步骤', ar: 'الخطوات التالية' },
    ],
    timeline: { en: 'Weekly rhythm', zh: '每周节奏', ar: 'إيقاع أسبوعي' },
    href: '/contact',
  },
  {
    slug: 'live-factory-tours',
    icon: 'search',
    index: '04',
    title: { en: 'Live factory tours', zh: '工厂直播参观', ar: 'جولات مصنع مباشرة' },
    summary: {
      en: 'Live factory tours, Arabic and English content, and buyer conversations on social platforms.',
      zh: '工厂直播参观、阿拉伯语与英语内容，以及在社交平台上的买家对话。',
      ar: 'جولات مصنع مباشرة، محتوى بالعربية والإنجليزية، ومحادثات مع المشترين على منصات التواصل.',
    },
    body: {
      en: 'For Chinese factories selling to the world: live tours, Arabic and English content, and buyer conversations on Instagram, TikTok, WhatsApp and Facebook.',
      zh: '面向销往全球的中国工厂：直播参观、阿拉伯语与英语内容，以及在 Instagram、TikTok、WhatsApp 和 Facebook 上的买家对话。',
      ar: 'للمصانع الصينية التي تبيع للعالم: جولات مباشرة، محتوى بالعربية والإنجليزية، ومحادثات مع المشترين على Instagram وTikTok وWhatsApp وFacebook.',
    },
    deliverables: [
      { en: 'Live tour script', zh: '直播脚本', ar: 'سيناريو جولة مباشرة' },
      { en: 'Arabic content', zh: '阿拉伯语内容', ar: 'محتوى بالعربية' },
      { en: 'English content', zh: '英语内容', ar: 'محتوى بالإنجليزية' },
      { en: 'Buyer conversations', zh: '买家对话', ar: 'محادثات مع المشترين' },
    ],
    timeline: { en: 'Monthly', zh: '每月', ar: 'شهريًا' },
    href: '/contact',
  },
  {
    slug: 'arabic-english-content',
    icon: 'translate',
    index: '05',
    title: {
      en: 'Arabic & English content',
      zh: '阿拉伯语与英语内容',
      ar: 'محتوى بالعربية والإنجليزية',
    },
    summary: {
      en: 'Arabic and English content for Chinese factories selling to the world.',
      zh: '面向销往全球的中国工厂的阿拉伯语与英语内容。',
      ar: 'محتوى بالعربية والإنجليزية للمصانع الصينية التي تبيع للعالم.',
    },
    body: {
      en: 'We create Arabic and English content that presents your factory to global buyers.',
      zh: '我们创建向全球买家展示您工厂的阿拉伯语与英语内容。',
      ar: 'ننشئ محتوى بالعربية والإنجليزية يعرض مصنعك للمشترين العالميين.',
    },
    deliverables: [
      { en: 'Content plan', zh: '内容计划', ar: 'خطة محتوى' },
      { en: 'Arabic copy', zh: '阿拉伯语文案', ar: 'نسخة عربية' },
      { en: 'English copy', zh: '英语文案', ar: 'نسخة إنجليزية' },
      { en: 'Publishing schedule', zh: '发布计划', ar: 'جدول نشر' },
    ],
    timeline: { en: 'Monthly', zh: '每月', ar: 'شهريًا' },
    href: '/contact',
  },
  {
    slug: 'buyer-conversations',
    icon: 'chat',
    index: '06',
    title: { en: 'Buyer conversations', zh: '买家对话', ar: 'محادثات المشترين' },
    summary: {
      en: 'Buyer conversations on Instagram, TikTok, WhatsApp and Facebook.',
      zh: '在 Instagram、TikTok、WhatsApp 和 Facebook 上的买家对话。',
      ar: 'محادثات مع المشترين على Instagram وTikTok وWhatsApp وFacebook.',
    },
    body: {
      en: 'We handle buyer conversations on Instagram, TikTok, WhatsApp and Facebook.',
      zh: '我们处理在 Instagram、TikTok、WhatsApp 和 Facebook 上的买家对话。',
      ar: 'نتولى محادثات المشترين على Instagram وTikTok وWhatsApp وFacebook.',
    },
    deliverables: [
      { en: 'Inbox management', zh: '收件箱管理', ar: 'إدارة صندوق الوارد' },
      { en: 'Qualification', zh: '潜在客户筛选', ar: 'تأهيل العملاء' },
      { en: 'Meeting booking', zh: '会议预约', ar: 'حجز الاجتماعات' },
      { en: 'Follow-up', zh: '后续跟进', ar: 'متابعة' },
    ],
    timeline: { en: 'Ongoing', zh: '持续进行', ar: 'مستمر' },
    href: '/contact',
  },
];
