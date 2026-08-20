/* ═══════════════════════════════════════════════════════════
   YALLA KAISHI — app.js
   canvas network · i18n · scroll reveals · counters · tilt
   ═══════════════════════════════════════════════════════════ */
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ─────────── i18n dictionary ─────────── */
const I18N = {
  en: {
    'nav.gap':'The Gap','nav.bridge':'The Bridge','nav.services':'Services','nav.founder':'Founder','nav.guangzhou':'Guangzhou','nav.roadmap':'Roadmap','nav.cta':'Get Started',
    'hero.overline':'COMPLIANCE OPERATIONS · 合规运营 · 广州 ⇄ 利雅得',
    'hero.l1':'Bridging China & the Gulf.','hero.l2':'One compliance layer at a time.',
    'hero.sub':'Yalla Kaishi helps Guangzhou SMEs enter Saudi Arabia and the GCC with confidence — and helps Middle East companies build China-market compliance groundwork. Advisory · Documents · Technology.',
    'hero.cta1':'Explore the Platform','hero.cta2':'Book a Free Consultation',
    'hero.s1':'$230B+','hero.s1l':'China–GCC bilateral trade','hero.s2':'1,200+','hero.s2l':'addressable SME clients','hero.s3':'3','hero.s3l':'languages · 中 · EN · العربية',
    'gap.tag':'THE PROBLEM','gap.h2':'The Compliance Bottleneck',
    'gap.sub':'Chinese SMEs are sprinting into Saudi Arabia and the UAE — and every one of them hits the same wall. Four barriers, one bottleneck.',
    'gap.c1t':'Language Barrier','gap.c1d':'Saudi regulation is published in Arabic with virtually no Chinese translation — and mistranslation creates real liability.',
    'gap.c2t':'Cost Barrier','gap.c2d':'Big Four retainers run 500,000–2,000,000 RMB a year. SMEs cannot afford advice that costs more than the deal.',
    'gap.c3t':'Fragmentation Barrier','gap.c3d':'Chinese firms lack Arabic. Saudi firms lack Chinese. Translation agencies lack regulatory depth.',
    'gap.c4t':'Execution Barrier','gap.c4d':'Even with legal advice, SMEs lack the operational capacity to implement processes, documents and training.',
    'bridge.tag':'THE SOLUTION','bridge.h2':'Compliance Operations, Engineered',
    'bridge.sub':'We are the operations layer between licensed legal counsel and your business — translation, documentation, process management and technology. We never give legal advice; every deliverable is reviewed by licensed partner law firms.',
    'bridge.city1':'GUANGZHOU · 广州','bridge.city1s':'China SMEs','bridge.city2':'RIYADH · 利雅得','bridge.city2s':'Saudi & GCC market',
    'bridge.core':'COMPLIANCE OPERATIONS','bridge.core2':'翻译 · 文件 · 流程 · 技术',
    'bridge.l1k':'LAYER 01','bridge.l1t':'Advisory','bridge.l1d':'Arabic → Chinese regulatory translation, gap-assessment coordination, bilingual templates for DPAs, privacy notices and consent forms, plus implementation support.',
    'bridge.l2k':'LAYER 02','bridge.l2t':'Market-Entry Operations','bridge.l2d':'MISA / SAGIA licensing pathway mapping, local partner vetting and cultural protocol guidance for your first Gulf deal.',
    'bridge.l3k':'LAYER 03 · YEAR 2','bridge.l3t':'Technology','bridge.l3d':'A client portal for compliance tracking, an automated trilingual regulatory feed and digitized self-assessment tools.',
    'svc.tag':'SERVICES & PRICING','svc.h2':'Transparent, Mid-Market Pricing',
    'svc.sub':'Big-consultancy rigor at a price SMEs can actually pay. Three ways to work with us.',
    'svc.p1t':'Monthly Compliance Retainer','svc.per':'/month','svc.p1w':'For companies with ongoing GCC operations',
    'svc.p1a':'Continuous regulatory update monitoring','svc.p1b':'Quarterly compliance health checks','svc.p1c':'Data subject request (DSR) process documentation','svc.p1d':'Incident-response coordination templates','svc.p1e':'Liaison with licensed local counsel',
    'svc.cta':'Start a Retainer',
    'svc.flag':'MOST CHOSEN','svc.p2t':'GCC Market-Entry Packages','svc.per2':'/project','svc.p2w':'For first-time entrants to Saudi Arabia & the UAE',
    'svc.p2a':'Saudi PDPA readiness assessment','svc.p2b':'NCA-ECC gap analysis coordination','svc.p2c':'MISA / SAGIA licensing pathway support','svc.p2d':'Arabic ↔ Chinese regulatory document translation','svc.p2e':'Local partner due-diligence support',
    'svc.cta2':'Scope My Project',
    'svc.p3t':'China Inbound Compliance','svc.per3':'/project','svc.p3w':'For Middle East companies entering China',
    'svc.p3a':'PIPL / CSL / DSL readiness documentation','svc.p3b':'Cross-border data transfer assessment coordination','svc.p3c':'ICP 备案 filing guidance','svc.p3d':'WFOE registration pathway support','svc.p3e':'Bilingual operations templates',
    'svc.cta3':'Enter China',
    'svc.note':'Yalla Kaishi provides compliance operations support — not legal advice. All regulatory interpretation is delivered in partnership with licensed Chinese and Saudi law firms.',
    'radar.tag':'REGULATORY INTELLIGENCE','radar.h2':'Every Regulation That Matters',
    'radar.sub':'One platform, three jurisdictions, live watch. We monitor the regulatory surface so your team doesn\'t have to.',
    'radar.r1':'Saudi Arabia','radar.r2':'Saudi Arabia','radar.r3':'Saudi licensing','radar.r4':'Saudi investment','radar.r5':'Saudi macro','radar.r6':'United Arab Emirates','radar.r7':'China','radar.r8':'China','radar.r9':'China','radar.r10':'China web','radar.r11':'China registry','radar.r12':'Data subject rights','radar.r13':'translation layer','radar.r14':'monitoring core',
    'founder.tag':'FOUNDER','founder.h2':'Two Worlds, One Operator',
    'founder.sub':'A rare profile: native Arabic, professional Chinese, Chinese engineering and MBA degrees, and a decade on the ground in Guangzhou.',
    'founder.role':'Founder & Managing Director',
    'founder.bio':'Born in Saudi Arabia, educated in China. Ten years of residence, two degrees from top Chinese universities, IT operations at a Fortune 500 shipping group, and a decade of informal cross-border facilitation between the Middle East and China.',
    'founder.t1':'B.Eng · Communications Engineering · Wuhan','founder.t2':'MBA · Risk Management & Information Security · Hefei / Guangzhou','founder.t3':'Enterprise systems, cybersecurity infrastructure & digital transformation for a Fortune 500 shipping group','founder.t4':'Independent research & informal advisory connecting Middle Eastern and Chinese companies',
    'gz.tag':'WHY GUANGZHOU','gz.h2':'The Only Logical Headquarters',
    'gz.sub':'Not an arbitrary choice — six concrete, non-substitutable reasons. This is the physical center of the trade we facilitate.',
    'gz.c1t':'Customer Proximity','gz.c1d':'Guangdong SME exporters and the Canton Fair — our entire market, in one city.',
    'gz.c2t':'Founder Home','gz.c2d':'Registered in Tianhe District, where the founder has lived and worked for years.',
    'gz.c3t':'Nansha FTZ & BRI','gz.c3d':'Belt & Road trade facilitation policies for cross-border services and tech startups.',
    'gz.c4t':'Talent Pipeline','gz.c4d':'Sun Yat-sen, SCUT and Guangdong University of Foreign Studies produce Arabic, English and business graduates.',
    'gz.c5t':'Infrastructure','gz.c5d':'Direct flights to Riyadh, Dubai and Doha. The Port of Guangzhou. Baiyun Airport.',
    'gz.c6t':'Local Value','gz.c6d':'Local hiring, local taxes, local export facilitation — a three-year commitment to Guangzhou.',
    'mkt.tag':'MARKET','mkt.h2':'The Numbers Behind the Bridge',
    'mkt.sub':'A real macro trend, a realistic addressable market, and unit economics that work for SMEs.',
    'mkt.m1':'China–GCC bilateral trade (USD, 2022)','mkt.m2':'Guangdong SMEs exporting to the GCC','mkt.m3':'Companies with active compliance needs','mkt.m4':'Retainer gross margin','mkt.m5':'LTV / CAC ratio (15–22×)','mkt.m6':'RMB export value facilitated via 5 clients',
    'road.tag':'ROADMAP','road.h2':'The First 12 Months',
    'road.sub':'A conservative, service-first build-out — from WFOE registration to monthly break-even.',
    'road.m1':'MONTHS 1–3','road.p1t':'Foundation',
    'road.p1a':'WFOE registered in Tianhe District, Guangzhou','road.p1b':'Service methodology & template library v1.0','road.p1c':'Law-firm partnership MOU signed','road.p1d':'15 prospect meetings scheduled',
    'road.m2':'MONTHS 4–6','road.p2t':'Validation',
    'road.p2a':'Compliance Operations Associate hired','road.p2b':'First retainer + first project client signed','road.p2c':'Canton Fair presence & WeChat channel live','road.p2d':'¥70,000 revenue · first delivery completed',
    'road.m3':'MONTHS 7–9','road.p3t':'Expansion',
    'road.p3a':'Business Development Associate hired','road.p3b':'3 projects completed · ¥210,000 cumulative','road.p3c':'Client portal MVP specification started','road.p3d':'Software copyright application filed',
    'road.m4':'MONTHS 10–12','road.p4t':'Consolidation',
    'road.p4a':'3 active retainer clients · 5 projects total','road.p4b':'¥370,000 revenue · monthly break-even','road.p4c':'Portal MVP development begins','road.p4d':'Year-2 budget & hiring plan prepared',
    'road.sc1':'CONSERVATIVE','road.sc1n':'保守情景','road.sc1r':'Year-1 revenue','road.sc1l':'Net result','road.sc1b':'Break-even',
    'road.sc2':'BASE CASE','road.sc2n':'基本情景','road.sc2r':'Year-1 revenue','road.sc2l':'Net result','road.sc2b':'Break-even',
    'road.sc3':'GROWTH','road.sc3n':'增长情景','road.sc3r':'Year-1 revenue','road.sc3l':'Net result','road.sc3b':'Break-even',
    'ct.tag':'CONTACT','ct.h2':'Ready to go GCC-ready?',
    'ct.sub':'Book a free 30-minute consultation with the founder. No pitch decks, no pressure — just a candid read on your compliance position.',
    'ct.addr':'Tianhe District, Guangzhou, China · 中国广州天河','ct.resp':'Response within 24 hours',
    'ct.fname':'Your name','ct.fnameph':'Ismail / 姓名','ct.femail':'Email','ct.fcomp':'Company','ct.fcompph':'Company name / 公司名称','ct.fmsg':'Your situation','ct.fmsgph':'Which market are you entering — and when? / 您计划进入哪个市场？','ct.send':'Send Message','ct.ok':'Thank you — we\'ll reply within 24 hours.',
    'foot.tagline':'Compliance operations connecting China and the Gulf — 连接中国与海湾的合规运营平台.','foot.nav':'Navigate','foot.legal':'Legal','foot.disclaimer':'Yalla Kaishi provides compliance operations support. We do not provide legal advice. All regulatory interpretation is delivered in partnership with licensed law firms.','foot.hq':'HQ'
  },
  zh: {
    'nav.gap':'痛点','nav.bridge':'方案','nav.services':'服务','nav.founder':'创始人','nav.guangzhou':'为什么广州','nav.roadmap':'路线图','nav.cta':'立即开始',
    'hero.overline':'合规运营 · COMPLIANCE OPERATIONS · 广州 ⇄ 利雅得',
    'hero.l1':'连接中国与海湾。','hero.l2':'一层合规，一桥通达。',
    'hero.sub':'亚拉凯世帮助广州中小企业自信进入沙特及海湾市场，同时协助中东企业构建中国市场合规基石。顾问咨询 · 文件交付 · 技术赋能。',
    'hero.cta1':'探索服务','hero.cta2':'预约免费咨询',
    'hero.s1':'2300亿美元+','hero.s1l':'中阿双边贸易额','hero.s2':'1200+','hero.s2l':'可触达中小企业客户','hero.s3':'3','hero.s3l':'三语服务 · 中 · EN · العربية',
    'gap.tag':'问题所在','gap.h2':'合规瓶颈',
    'gap.sub':'中国中小企业正加速进入沙特与阿联酋市场——而每一家都撞上同一堵墙。四大壁垒，一个瓶颈。',
    'gap.c1t':'语言壁垒','gap.c1d':'沙特法规以阿拉伯语发布，几乎没有中文译本——而错译即是真实的法律责任。',
    'gap.c2t':'成本壁垒','gap.c2d':'"四大"顾问年费高达50万至200万元，比交易本身还贵，中小企业难以承受。',
    'gap.c3t':'碎片化壁垒','gap.c3d':'中国律所缺阿拉伯语能力，沙特律所缺中文支持，翻译机构缺乏监管专业深度。',
    'gap.c4t':'执行壁垒','gap.c4d':'即便获得法律意见，中小企业仍缺乏落地能力——流程、文件与培训，环环缺失。',
    'bridge.tag':'解决方案','bridge.h2':'合规运营 · 系统化交付',
    'bridge.sub':'我们是持牌法律顾问与企业之间的运营层——翻译、文件、流程管理与技术赋能。我们绝不提供法律意见；所有交付物均由持牌合作律所审核。',
    'bridge.city1':'广州 · GUANGZHOU','bridge.city1s':'中国中小企业','bridge.city2':'利雅得 · RIYADH','bridge.city2s':'沙特及海湾市场',
    'bridge.core':'合规运营层','bridge.core2':'TRANSLATION · DOCS · PROCESS · TECH',
    'bridge.l1k':'服务层一','bridge.l1t':'合规运营顾问','bridge.l1d':'阿拉伯语→中文监管翻译、差距评估协调、数据处理协议/隐私通知/同意书双语模板，以及落地实施支持。',
    'bridge.l2k':'服务层二','bridge.l2t':'市场准入运营','bridge.l2d':'MISA / SAGIA许可路径规划、本地合作伙伴尽职调查与首单海湾交易的文化礼仪指导。',
    'bridge.l3k':'服务层三 · 第二年','bridge.l3t':'技术赋能','bridge.l3d':'客户合规追踪门户、自动化三语监管推送与数字化自评工具。',
    'svc.tag':'服务与定价','svc.h2':'透明 · 中端定价',
    'svc.sub':'国际顾问公司的严谨，中小企业家付得起的价格。三种合作方式。',
    'svc.p1t':'月度合规运营服务','svc.per':'/月','svc.p1w':'适合有持续海湾业务的企业',
    'svc.p1a':'持续监管动态监控','svc.p1b':'季度合规健康检查','svc.p1c':'数据主体请求（DSR）流程文件','svc.p1d':'事件响应协调模板','svc.p1e':'持牌本地律师联络对接',
    'svc.cta':'启动月度服务',
    'svc.flag':'最受欢迎','svc.p2t':'GCC市场准入项目包','svc.per2':'/项目','svc.p2w':'适合首次进入沙特与阿联酋的企业',
    'svc.p2a':'沙特PDPA就绪度评估','svc.p2b':'NCA-ECC差距分析协调','svc.p2c':'MISA / SAGIA许可路径文件支持','svc.p2d':'阿中双语监管文件翻译','svc.p2e':'本地合作伙伴尽职调查支持',
    'svc.cta2':'规划我的项目',
    'svc.p3t':'中国入境合规支持','svc.per3':'/项目','svc.p3w':'适合进入中国市场的中东企业',
    'svc.p3a':'PIPL / CSL / DSL就绪文件','svc.p3b':'跨境数据传输评估协调','svc.p3c':'ICP备案指导','svc.p3d':'WFOE注册路径支持','svc.p3e':'双语运营模板',
    'svc.cta3':'进入中国',
    'svc.note':'亚拉凯世提供合规运营支持——而非法律意见。所有监管解读均通过与持牌中国及沙特律师事务所合作完成。',
    'radar.tag':'监管情报','radar.h2':'全部关键法规 · 一站监控',
    'radar.sub':'一个平台，三大法域，实时瞭望。我们监控监管面，让您的团队专注业务。',
    'radar.r1':'沙特阿拉伯','radar.r2':'沙特阿拉伯','radar.r3':'沙特许可','radar.r4':'沙特投资','radar.r5':'沙特宏观','radar.r6':'阿联酋','radar.r7':'中国','radar.r8':'中国','radar.r9':'中国','radar.r10':'中国网站','radar.r11':'中国注册','radar.r12':'数据主体权利','radar.r13':'翻译层','radar.r14':'监控核心',
    'founder.tag':'创始人','founder.h2':'两个世界 · 一位操盘手',
    'founder.sub':'罕见履历：阿拉伯语母语、专业中文、中国工科与MBA双学位、十年广州在地经验。',
    'founder.role':'创始人兼董事总经理',
    'founder.bio':'生于沙特，学于中国。十年居留、两所中国顶尖大学学位、财富500强航运集团IT运营经验，以及十年中阿跨境商业协调实践。',
    'founder.t1':'工学学士 · 通信工程 · 武汉','founder.t2':'工商管理硕士 · 风险管理与信息安全 · 合肥/广州','founder.t3':'财富500强航运集团企业系统、网络安全基础设施与数字化转型','founder.t4':'连接中东与中国企业的独立研究与非正式顾问服务',
    'gz.tag':'为什么广州','gz.h2':'唯一合理的总部',
    'gz.sub':'并非任意选择——六个具体且不可替代的理由。这是我们促进的贸易的物理中心。',
    'gz.c1t':'贴近客户','gz.c1d':'广东出口中小企业与广交会——整个市场，尽在一城。',
    'gz.c2t':'创始人家园','gz.c2d':'注册于创始人多年生活与工作的天河区。',
    'gz.c3t':'南沙自贸区与一带一路','gz.c3d':'跨境服务与科技初创企业专属的贸易便利化政策。',
    'gz.c4t':'人才管道','gz.c4d':'中山大学、华南理工大学与广东外语外贸大学持续输送阿语、英语与商科人才。',
    'gz.c5t':'基础设施','gz.c5d':'直飞利雅得、迪拜、多哈；广州港；白云机场。',
    'gz.c6t':'本地价值','gz.c6d':'本地招聘、本地纳税、本地出口促进——对广州的三年承诺。',
    'mkt.tag':'市场','mkt.h2':'桥梁背后的数字',
    'mkt.sub':'真实的宏观趋势、务实的可寻址市场，以及适合中小企业的单位经济模型。',
    'mkt.m1':'中阿双边贸易额（美元 · 2022）','mkt.m2':'出口海湾的广东中小企业','mkt.m3':'有活跃合规需求的企业','mkt.m4':'月度服务毛利率','mkt.m5':'客户终身价值/获客成本比（15–22倍）','mkt.m6':'5个客户撬动的出口额（元）',
    'road.tag':'路线图','road.h2':'第一个12个月',
    'road.sub':'保守、服务优先的推进——从WFOE注册到月度收支平衡。',
    'road.m1':'第1–3个月','road.p1t':'基础建设',
    'road.p1a':'天河区注册WFOE','road.p1b':'服务方法论与模板库1.0版','road.p1c':'律所合作MOU签署','road.p1d':'安排15场潜在客户会议',
    'road.m2':'第4–6个月','road.p2t':'验证与首批客户',
    'road.p2a':'招聘合规运营专员','road.p2b':'签约首个月度+项目客户','road.p2c':'参展广交会、公众号上线','road.p2d':'收入7万元 · 首个项目交付完成',
    'road.m3':'第7–9个月','road.p3t':'扩张',
    'road.p3a':'招聘业务拓展专员','road.p3b':'完成3个项目 · 累计21万元','road.p3c':'客户门户MVP规格定义启动','road.p3d':'提交软件著作权申请',
    'road.m4':'第10–12个月','road.p4t':'巩固与规划',
    'road.p4a':'3个活跃月度客户 · 共5个项目','road.p4b':'收入37万元 · 月度收支平衡','road.p4c':'门户MVP开发启动','road.p4d':'制定第二年预算与招聘计划',
    'road.sc1':'保守情景','road.sc1n':'CONSERVATIVE','road.sc1r':'第一年收入','road.sc1l':'净结果','road.sc1b':'收支平衡',
    'road.sc2':'基本情景','road.sc2n':'BASE CASE','road.sc2r':'第一年收入','road.sc2l':'净结果','road.sc2b':'收支平衡',
    'road.sc3':'增长情景','road.sc3n':'GROWTH','road.sc3r':'第一年收入','road.sc3l':'净结果','road.sc3b':'收支平衡',
    'ct.tag':'联系我们','ct.h2':'准备好出海了吗？',
    'ct.sub':'预约与创始人30分钟免费咨询。没有推销话术，没有压力——只有对您合规现状的坦诚评估。',
    'ct.addr':'中国广州天河区 · Tianhe District, Guangzhou','ct.resp':'24小时内回复',
    'ct.fname':'您的姓名','ct.fnameph':'姓名 / Name','ct.femail':'电子邮箱','ct.fcomp':'公司','ct.fcompph':'公司名称 / Company name','ct.fmsg':'您的需求','ct.fmsgph':'您计划进入哪个市场？何时？/ Which market are you entering?','ct.send':'发送消息','ct.ok':'感谢您的来信——我们将在24小时内回复。',
    'foot.tagline':'连接中国与海湾的合规运营平台 — Compliance operations connecting China and the Gulf.','foot.nav':'导航','foot.legal':'法律声明','foot.disclaimer':'亚拉凯世提供合规运营支持，不提供法律意见。所有监管解读均通过与持牌律师事务所合作完成。','foot.hq':'总部'
  }
};

let LANG = localStorage.getItem('yk-lang') || 'en';

function applyI18n() {
  const dict = I18N[LANG] || I18N.en;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  $$('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) el.placeholder = dict[key];
  });
  document.documentElement.lang = LANG;
  const t = $('#langToggle');
  if (t) t.textContent = LANG === 'en' ? '中文' : 'EN';
}

$('#langToggle').addEventListener('click', () => {
  LANG = LANG === 'en' ? 'zh' : 'en';
  localStorage.setItem('yk-lang', LANG);
  applyI18n();
});

/* ─────────── preloader ─────────── */
window.addEventListener('load', () => {
  const bar = $('#preBar');
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 22 + 6;
    if (p >= 100) { p = 100; clearInterval(iv); }
    bar.style.width = p + '%';
    if (p >= 100) {
      setTimeout(() => {
        $('#preloader').classList.add('done');
        document.body.classList.remove('no-scroll');
      }, 260);
    }
  }, 130);
  document.body.classList.add('no-scroll');
});

/* ─────────── scroll progress + nav state + scrollspy ─────────── */
const progressSpan = $('#progress span');
const nav = $('#nav');
const sectionIds = ['gap','bridge','services','founder','guangzhou','roadmap'];
const navLinks = $$('#navLinks a');

function onScroll() {
  const h = document.documentElement;
  const sc = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  progressSpan.style.width = (sc / max * 100) + '%';
  nav.classList.toggle('scrolled', sc > 40);

  let current = '';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= h.clientHeight * 0.45) current = id;
  });
  navLinks.forEach(a => {
    const on = a.getAttribute('href') === '#' + current;
    a.style.color = on ? 'var(--gold-soft)' : '';
  });
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ─────────── mobile menu ─────────── */
const burger = $('#burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  $('#navLinks').classList.toggle('open');
});
$$('#navLinks a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  $('#navLinks').classList.remove('open');
}));

/* ─────────── reveal + counters ─────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.querySelectorAll?.('.count').forEach(runCounter);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => io.observe(el));

function runCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = +el.dataset.target;
  const dur = 1800, t0 = performance.now();
  const fmt = v => (el.dataset.prefix || '') + Math.round(v).toLocaleString('en-US') + (el.dataset.suffix || '');
  (function tick(t) {
    const k = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(target * e);
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ─────────── roadmap fill ─────────── */
const roadSec = $('#roadmap');
const roadFill = $('#roadFill');
if (roadSec && roadFill) {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) roadFill.style.width = '100%';
    });
  }, { threshold: 0.25 }).observe(roadSec);
}

/* ─────────── tilt cards ─────────── */
const hasTouch = matchMedia('(pointer:coarse)').matches;
if (!hasTouch) {
  document.addEventListener('mousemove', e => {
    $$('.tilt').forEach(card => {
      const r = card.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        if (card.style.transform) { card.style.transform = ''; card.style.setProperty('--mx','50%'); card.style.setProperty('--my','50%'); }
        return;
      }
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const rx = (y - .5) * -7, ry = (x - .5) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mx', (x * 100) + '%');
      card.style.setProperty('--my', (y * 100) + '%');
    });
  });
}

/* ─────────── cursor glow ─────────── */
const glow = $('#cursorGlow');
if (!hasTouch) {
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  document.body.classList.add('glow-on');
  (function loop() {
    gx += (tx - gx) * .08; gy += (ty - gy) * .08;
    glow.style.transform = `translate(${gx - 260}px,${gy - 260}px)`;
    requestAnimationFrame(loop);
  })();
}

/* ─────────── hero network canvas ─────────── */
const canvas = $('#net');
const ctx = canvas.getContext('2d');
let W = 0, H = 0, parts = [], packets = [], raf = 0, running = false;
const mouse = { x: -9999, y: -9999 };

const HUB = [
  { x: .16, y: .46, color: '#e8b34b', label: 'GUANGZHOU · 广州' },
  { x: .84, y: .46, color: '#2dd4bf', label: 'RIYADH · 利雅得' }
];

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  W = canvas.clientWidth; H = canvas.clientHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.min(150, Math.floor(W * H / 11000));
  parts = [];
  for (let i = 0; i < n; i++) {
    const cluster = Math.random() < .5 ? 0 : 1;
    const h = HUB[cluster];
    parts.push({
      x: h.x * W + (Math.random() - .5) * W * .38,
      y: h.y * H + (Math.random() - .5) * H * .32,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.6 + .5,
      c: Math.random() < .18 ? (cluster ? '#2dd4bf' : '#e8b34b') : '#8fa0c0'
    });
  }
  packets = [0, 1, 2, 3].map(i => ({ t: (i * .25 + Math.random() * .1) % 1, d: 1, wob: Math.random() * 6.28 }));
}

function bez(p0, p1) {
  const mx = (p0.x + p1.x) / 2, my = p0.y + 60;
  return t => {
    const u = 1 - t;
    return {
      x: u * u * p0.x + 2 * u * t * mx + t * t * p1.x,
      y: u * u * p0.y + 2 * u * t * my + t * t * p1.y
    };
  };
}

function step() {
  ctx.clearRect(0, 0, W, H);

  /* links */
  for (let i = 0; i < parts.length; i++) {
    for (let j = i + 1; j < parts.length; j++) {
      const a = parts[i], b = parts[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 115 * 115) {
        const al = (1 - Math.sqrt(d2) / 115) * .16;
        ctx.strokeStyle = `rgba(143,160,192,${al})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    /* cursor links */
    const p = parts[i];
    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const dm = Math.sqrt(dx * dx + dy * dy);
    if (dm < 150) {
      ctx.strokeStyle = `rgba(232,179,75,${(1 - dm / 150) * .5})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      p.vx += dx / dm * .12; p.vy += dy / dm * .12;
    }
    /* move */
    p.x += p.vx; p.y += p.vy;
    p.vx *= .985; p.vy *= .985;
    if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
    if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
  }

  /* packets */
  const B = bez(HUB[0], HUB[1]);
  packets.forEach(pk => {
    pk.t += pk.d * .0032;
    if (pk.t > 1 || pk.t < 0) pk.d *= -1;
    const pos = B(pk.t);
    const y2 = pos.y + Math.sin(pk.t * 9 + pk.wob) * 8;
    const g = ctx.createRadialGradient(pos.x, y2, 0, pos.x, y2, 9);
    g.addColorStop(0, 'rgba(232,179,75,.9)');
    g.addColorStop(1, 'rgba(232,179,75,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(pos.x, y2, 9, 0, 6.2832); ctx.fill();
  });

  /* particles */
  for (const p of parts) {
    ctx.fillStyle = p.c;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
  }

  /* hubs */
  HUB.forEach(h => {
    const x = h.x * W, y = h.y * H;
    const g = ctx.createRadialGradient(x, y, 0, x, y, 42);
    g.addColorStop(0, h.color + '33'); g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 42, 0, 6.2832); ctx.fill();
    ctx.strokeStyle = h.color; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(x, y, 7, 0, 6.2832); ctx.stroke();
    ctx.fillStyle = h.color;
    ctx.beginPath(); ctx.arc(x, y, 3, 0, 6.2832); ctx.fill();
    ctx.font = '600 12px Space Grotesk, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(233,238,248,.75)';
    ctx.fillText(h.label, x, y + 30);
  });
}

function loop() {
  step();
  raf = requestAnimationFrame(loop);
}

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !running) { running = true; loop(); }
    else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
  });
}, { threshold: 0.05 }).observe(canvas);

document.addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
}, { passive: true });
canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
window.addEventListener('resize', resize);
resize();
applyI18n();

/* ─────────── contact form ─────────── */
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!f.name.value.trim() || !f.email.value.includes('@')) {
    f.email.reportValidity?.(); return;
  }
  const subject = encodeURIComponent(`[Yalla Kaishi] Consultation — ${f.name.value.trim()}`);
  const body = encodeURIComponent(
    `Name: ${f.name.value}\nEmail: ${f.email.value}\nCompany: ${f.company.value}\n\n${f.message.value}`
  );
  location.href = `mailto:hello@yallakaishi.com?subject=${subject}&body=${body}`;
  const note = $('#formNote');
  note.hidden = false;
  f.reset();
  setTimeout(() => { note.hidden = true; }, 8000);
});