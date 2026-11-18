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
    slug: 'tech-advanced-manufacturing',
    index: '01',
    icon: 'chip',
    name: {
      en: 'Tech and advanced manufacturing',
      zh: '科技与先进制造',
      ar: 'التقنية والتصنيع المتقدم',
    },
    headline: {
      en: 'Great product, but no Chinese-language presence or local contacts.',
      zh: '产品很好，但没有中文形象，也没有本地联系人。',
      ar: 'منتج ممتاز، لكن بلا حضور باللغة الصينية أو جهات اتصال محلية.',
    },
    body: {
      en: 'One closed distributor deal can be worth tens of thousands of dollars, so focus beats volume. We build the Chinese-facing presence and open the first conversations.',
      zh: '一单分销协议就可能价值数万美元，因此专注胜过数量。我们建立面向中国的形象，并开启第一批对话。',
      ar: 'صفقة توزيع واحدة قد تساوي عشرات الآلاف من الدولارات، لذا فالتركيز أفضل من الحجم. نبني الحضور الموجّه للصين ونفتح أول المحادثات.',
    },
    entryPoints: [
      { en: 'Europe', zh: '欧洲', ar: 'أوروبا' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
      { en: 'America', zh: '美洲', ar: 'الأمريكتان' },
    ],
    risks: [
      { en: 'No Chinese-language presence', zh: '没有中文形象', ar: 'بلا حضور باللغة الصينية' },
      { en: 'No local contacts', zh: '没有本地联系人', ar: 'بلا جهات اتصال محلية' },
      { en: 'Long sales cycle', zh: '销售周期长', ar: 'دورة مبيعات طويلة' },
    ],
  },
  {
    slug: 'trade-supply-chain',
    index: '02',
    icon: 'swap',
    name: {
      en: 'Trade and supply chain',
      zh: '贸易与供应链',
      ar: 'التجارة وسلسلة التوريد',
    },
    headline: {
      en: 'Buyers need trusted Chinese suppliers and clear communication.',
      zh: '买家需要值得信赖的中国供应商和清晰的沟通。',
      ar: 'المشترون بحاجة إلى موردين صينيين موثوقين وتواصل واضح.',
    },
    body: {
      en: 'Buyers need trusted Chinese suppliers and clear communication. We connect both sides with verified profiles and bilingual outreach.',
      zh: '买家需要值得信赖的中国供应商和清晰的沟通。我们通过经验证的资料和双语触达连接双方。',
      ar: 'المشترون بحاجة إلى موردين صينيين موثوقين وتواصل واضح. نربط الطرفين بملفات موثّقة وتواصل ثنائي اللغة.',
    },
    entryPoints: [
      { en: 'Middle East', zh: '中东', ar: 'الشرق الأوسط' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
    ],
    risks: [
      { en: 'Unverified suppliers', zh: '供应商未经验证', ar: 'موردون غير موثّقين' },
      { en: 'Language gaps', zh: '语言障碍', ar: 'فجوات لغوية' },
      { en: 'Slow response', zh: '响应缓慢', ar: 'استجابة بطيئة' },
    ],
  },
  {
    slug: 'education-professional-services',
    index: '03',
    icon: 'cap',
    name: {
      en: 'Education and professional services',
      zh: '教育与专业服务',
      ar: 'التعليم والخدمات المهنية',
    },
    headline: {
      en: 'They want Chinese students, partners and clients, but do not know the platforms.',
      zh: '他们想要中国学生、合作伙伴和客户，但不知道该用哪些平台。',
      ar: 'يريدون طلابًا وشركاء وعملاء صينيين، لكنهم لا يعرفون المنصات.',
    },
    body: {
      en: 'They want Chinese students, partners and clients, but do not know the platforms. We build the presence and run the outreach.',
      zh: '他们想要中国学生、合作伙伴和客户，但不知道该用哪些平台。我们建立形象并执行触达。',
      ar: 'يريدون طلابًا وشركاء وعملاء صينيين، لكنهم لا يعرفون المنصات. نبني الحضور وندير التوعية.',
    },
    entryPoints: [
      { en: 'Europe', zh: '欧洲', ar: 'أوروبا' },
      { en: 'America', zh: '美洲', ar: 'الأمريكتان' },
      { en: 'Middle East', zh: '中东', ar: 'الشرق الأوسط' },
      { en: 'Asia', zh: '亚洲', ar: 'آسيا' },
    ],
    risks: [
      { en: 'Wrong platforms', zh: '平台选择错误', ar: 'منصات غير مناسبة' },
      { en: 'No local trust', zh: '缺乏本地信任', ar: 'بلا ثقة محلية' },
      { en: 'Unclear offer', zh: '价值主张不清', ar: 'عرض غير واضح' },
    ],
  },
];
