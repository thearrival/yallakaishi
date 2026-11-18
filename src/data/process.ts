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
    key: 'build',
    icon: 'globe',
    name: { en: 'Build', zh: '搭建', ar: 'بناء' },
    summary: {
      en: 'Chinese company profile, WeChat official account, Douyin page and a one-page Chinese brochure.',
      zh: '中文公司资料、微信公众号、抖音页面和一页式中文宣传册。',
      ar: 'ملف شركة بالصينية، حساب WeChat رسمي، صفحة Douyin، وكتيب صيني من صفحة واحدة.',
    },
    detail: {
      en: 'We create the Chinese-facing presence your buyers can find and trust: a company profile, WeChat official account, Douyin page and a one-page Chinese brochure.',
      zh: '我们创建买家能找到并信任的中文形象：公司资料、微信公众号、抖音页面和一页式中文宣传册。',
      ar: 'ننشئ حضورًا باللغة الصينية يمكن للمشترين العثور عليه والثقة به: ملف شركة، حساب WeChat رسمي، صفحة Douyin، وكتيب صيني من صفحة واحدة.',
    },
    youGet: [
      { en: 'Chinese company profile', zh: '中文公司资料', ar: 'ملف شركة بالصينية' },
      { en: 'WeChat official account', zh: '微信公众号', ar: 'حساب WeChat رسمي' },
      { en: 'Douyin page', zh: '抖音页面', ar: 'صفحة Douyin' },
      { en: 'One-page Chinese brochure', zh: '一页式中文宣传册', ar: 'كتيب صيني من صفحة واحدة' },
    ],
    when: { en: 'Week 1', zh: '第 1 周', ar: 'الأسبوع 1' },
  },
  {
    index: '02',
    key: 'reach',
    icon: 'mail',
    name: { en: 'Reach', zh: '触达', ar: 'وصول' },
    summary: {
      en: 'Every month we find and contact Chinese buyers, distributors and partners for you.',
      zh: '每个月我们为您寻找并联系中国买家、分销商和合作伙伴。',
      ar: 'كل شهر نجد ونتواصل مع المشترين والموزعين والشركاء الصينيين نيابة عنك.',
    },
    detail: {
      en: 'Every month we find and contact Chinese buyers, distributors and partners for you, then track replies.',
      zh: '每个月我们为您寻找并联系中国买家、分销商和合作伙伴，并跟踪回复。',
      ar: 'كل شهر نجد ونتواصل مع المشترين والموزعين والشركاء الصينيين نيابة عنك، ثم نتابع الردود.',
    },
    youGet: [
      { en: 'Target buyer list', zh: '目标买家名单', ar: 'قائمة مشترين مستهدفين' },
      { en: 'Outreach messages', zh: '触达消息', ar: 'رسائل تواصل' },
      { en: 'Reply tracking', zh: '回复跟踪', ar: 'تتبع الردود' },
      { en: 'Monthly report', zh: '月度报告', ar: 'تقرير شهري' },
    ],
    when: { en: 'Monthly', zh: '每月', ar: 'شهريًا' },
  },
  {
    index: '03',
    key: 'close',
    icon: 'chat',
    name: { en: 'Close', zh: '成交', ar: 'إغلاق' },
    summary: {
      en: 'We handle replies and meetings in Chinese and send a clear monthly report.',
      zh: '我们用中文处理回复和会议，并发送清晰的月度报告。',
      ar: 'نتولى الردود والاجتماعات بالصينية ونرسل تقريرًا شهريًا واضحًا.',
    },
    detail: {
      en: 'We handle replies and meetings in Chinese and send a clear monthly report so you know what moved.',
      zh: '我们用中文处理回复和会议，并发送清晰的月度报告，让您了解进展。',
      ar: 'نتولى الردود والاجتماعات بالصينية ونرسل تقريرًا شهريًا واضحًا لتعرف ما تحقق.',
    },
    youGet: [
      { en: 'Reply handling', zh: '回复处理', ar: 'معالجة الردود' },
      { en: 'Meeting setup', zh: '会议安排', ar: 'ترتيب الاجتماعات' },
      { en: 'Monthly report', zh: '月度报告', ar: 'تقرير شهري' },
      { en: 'Next steps', zh: '后续步骤', ar: 'الخطوات التالية' },
    ],
    when: { en: 'Weekly rhythm', zh: '每周节奏', ar: 'إيقاع أسبوعي' },
  },
];
