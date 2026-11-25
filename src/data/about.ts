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
      ar: 'إن لم تصمد الخطة أمام منظّم أو بنك أو مشتري، تسمع ذلك في مكالمة الاستكشاف لا بعد الفاتورة.',
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
      zh: '重要措辞在提交机关前均经三语验 — 因为昂贵的错误几乎都是翻译错误。',
      ar: 'تُتحقق الكلمات المهمة بلغات الثلاث قبل وصولها للجهات — لأن الأخطاء الباهظة غالبًا أخطاء ترجمة.',
    },
  },
  {
    icon: 'clock',
    title: { en: 'Own the deadline', zh: '对截止日期负责', ar: 'الالتزام بالموعد' },
    body: {
      en: 'We track authority processing times and tell you when they slip — before you have to ask.',
      zh: '我们跟踪机关审批时长，一旦延误会主动告知 — 无需您来追问。',
      ar: 'نتتبع أوقات معالجة الجهات ونخبرك عند التأخر — قبل أن تسأل.',
    },
  },
];

export const founder = {
  name: { en: 'Ismail Ahmed', zh: '韦德', ar: 'اسماعيل أحمد' },
  role: { en: 'Founder', zh: '创始人', ar: 'المؤسس' },
  quote: {
    en: 'Our mission is to bridge the gap between Chinese businesses and global markets.',
    zh: '我们的使命是弥合中国企业与全球市场之间的差距。',
    ar: 'مهمتنا هي bridging the gap between Chinese businesses and global markets.',
  },
  bio: {
    en: 'Ismail Ahmed leads our market entry strategy and has helped numerous Chinese companies successfully establish presence in international markets.',
    zh: 'Ismail Ahmed leads our market entry strategy and has helped numerous Chinese companies successfully establish presence in international markets.',
    ar: 'Ismail Ahmed يقود استراتيجية دخول السوق وقد ساعد العديد من الشركات الصينية بنجاح على تأسيس حضورها في الأسواق الدولية.',
  },
  languages: {
    en: 'Arabic · English · Mandarin',
    zh: '阿拉伯语 · 英语 · 普通话',
    ar: 'العربية · الإنجليزية · الماندرين',
  },
};

export const founderTwo = {
  name: { en: 'Liu Li', zh: '刘丽', ar: 'ليو لي' },
  role: { en: 'Co-founder', zh: '合伙人', ar: 'شريك تأسيس' },
  quote: {
    en: 'I believe every Chinese company deserves a fair chance to grow internationally.',
    zh: '我相信每个中国公司都值得公平地发展国际业务。',
    ar: 'أنا أعتقد أن كل شركة صينية تستحق فرصة عادلة للنمو دولياً.',
  },
  bio: {
    en: 'Liu Li brings deep expertise in cross-border regulatory compliance and helps Chinese companies navigate the complexities of international expansion with confidence.',
    zh: '刘丽在跨境监管合规方面拥有深厚专业知识，帮助中国公司以信心应对国际扩张的复杂性。',
    ar: 'ليو لي يمتلك خبرة عميقة في الامتثال عبر الحدود ويساعد الشركات الصينية على navigating تعقيدات التوسع الدولي بثقة.',
  },
  languages: {
    en: 'Arabic · English · Mandarin',
    zh: '阿拉伯语 · 英语 · 普通话',
    ar: 'العربية · الإنجليزية · الماندرين',
  },
};
