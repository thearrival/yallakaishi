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
    'nav.services':'Services','nav.process':'Process','nav.expertise':'Expertise','nav.about':'About','nav.guangzhou':'Guangzhou','nav.cta':'Book a Call',
    'hero.overline':'CROSS-BORDER BUSINESS SERVICES · 跨境商业服务 · 广州 ⇄ 利雅得',
    'hero.l1':'Your bridge between','hero.l2':'China and the Gulf.',
    'hero.sub':'Yalla Kaishi helps SMEs move across the China ⇄ GCC corridor with confidence — compliance operations, market entry, translation and technology. One team, both sides of the bridge.',
    'hero.cta1':'Explore Services','hero.cta2':'Book a Consultation',
    'hero.s1l':'years bridging China & the Gulf','hero.s2l':'working languages · 中 · EN · العربية','hero.s3l':'consultation response time',
    'svc.tag':'WHAT WE DO','svc.h2':'Six Services. One Bridge.',
    'svc.sub':'Every service is delivered bilingually, documented professionally, and reviewed by licensed partner counsel where required. Fixed-fee proposals — no surprises.',
    'svc.s1t':'Compliance Operations','svc.s1d':'Regulatory monitoring, gap assessments and process documentation that turn legal advice into working operations.',
    'svc.s2t':'Regulatory Translation','svc.s2d':'Arabic ↔ Chinese ↔ English translation of laws, licenses, contracts and filings — by specialists, not machines.',
    'svc.s3t':'Market Entry & Licensing','svc.s3d':'MISA / SAGIA pathway mapping, licensing documentation and step-by-step entry plans for Saudi Arabia and the UAE.',
    'svc.s4t':'Partner Due Diligence','svc.s4d':'Operational vetting of local partners, distributors and suppliers on both sides of the bridge.',
    'svc.s5t':'Technology & Tools','svc.s5d':'Client portals, regulatory update feeds and self-assessment toolkits that keep compliance measurable.',
    'svc.s6t':'Training & Workshops','svc.s6d':'Practical bilingual workshops on Gulf data protection, PIPL and market-entry basics for teams and associations.',
    'svc.cta':'Request a proposal →',
    'svc.note':'Yalla Kaishi provides cross-border business services — not legal advice. Regulatory interpretation is delivered in partnership with licensed law firms in China and the Gulf.',
    'pr.tag':'HOW WE WORK','pr.h2':'Clear Process. Clear Deliverables.',
    'pr.sub':'From first call to steady-state support — a defined path, in two languages, with fixed fees agreed up front.',
    'pr.s1t':'Discover','pr.s1d':'A free consultation to understand your market, timeline and exposure — in Chinese, Arabic or English.',
    'pr.s2t':'Scope','pr.s2d':'A fixed-fee proposal with clear deliverables, bilingual documentation and a defined timeline.',
    'pr.s3t':'Deliver','pr.s3d':'Documents, process setup and implementation support — reviewed by licensed counsel where required.',
    'pr.s4t':'Support','pr.s4d':'Ongoing monitoring, regulatory updates and quarterly health checks.',
    'exp.tag':'EXPERTISE','exp.h2':'Regulatory Intelligence, On Both Sides',
    'exp.sub':'We monitor the regulatory surface across China and the Gulf, so your team can focus on business.',
    'exp.r1':'Saudi Arabia','exp.r2':'Saudi Arabia','exp.r3':'Saudi licensing','exp.r4':'Saudi investment','exp.r5':'Saudi macro','exp.r6':'United Arab Emirates','exp.r7':'China','exp.r8':'China','exp.r9':'China','exp.r10':'China web','exp.r11':'China registry','exp.r12':'Data subject rights','exp.r13':'translation layer','exp.r14':'monitoring core',
    'ab.tag':'ABOUT US','ab.h2':'Two Worlds, One Team',
    'ab.sub':'A bilingual team built around a decade of lived experience on both sides of the China–Gulf corridor.',
    'ab.role':'Founder & Managing Director',
    'ab.bio':'Born in Saudi Arabia, educated in China. An engineering degree and an MBA in risk management from top Chinese universities, enterprise IT leadership at a global shipping group, and native Arabic with professional Chinese. Yalla Kaishi exists to make cross-border business between China and the Gulf clear, compliant and accessible.',
    'gz.tag':'OUR BASE','gz.h2':'Rooted in Guangzhou',
    'gz.sub':'The physical center of the trade we facilitate — where China\'s exporters meet the Gulf\'s buyers.',
    'gz.c1t':'Customer Proximity','gz.c1d':'Guangdong\'s exporters and the Canton Fair — our market is one city.',
    'gz.c2t':'Founder Base','gz.c2d':'Our founder has called Tianhe District home for a decade.',
    'gz.c3t':'Nansha FTZ & BRI','gz.c3d':'Trade facilitation policies built for cross-border services and technology.',
    'gz.c4t':'Talent Pool','gz.c4d':'Arabic, English and business graduates from Guangzhou\'s universities.',
    'gz.c5t':'Connectivity','gz.c5d':'Direct flights to Riyadh, Dubai and Doha. The Port of Guangzhou.',
    'gz.c6t':'Local Value','gz.c6d':'Local hiring, local taxes, local export facilitation.',
    'ct.tag':'CONTACT','ct.h2':'Where are you headed?',
    'ct.sub':'Tell us about your market-entry plans — we\'ll reply within 24 hours with a candid read on what it takes. No pitch decks, no pressure.',
    'ct.addr':'Jinhui Building, 123 Jiefang South Road, Yuexiu District, Guangzhou · 广东省广州市越秀区人民街道解放南路123号金汇大厦','ct.resp':'Response within 24 hours',
    'ct.fname':'Your name','ct.fnameph':'Your name / 姓名','ct.femail':'Email','ct.fcomp':'Company','ct.fcompph':'Company name / 公司名称','ct.fmsg':'Your situation','ct.fmsgph':'Which market are you entering — and when? / 您计划进入哪个市场？','ct.send':'Send Message','ct.ok':'Thank you — we\'ll reply within 24 hours.',
    'foot.tagline':'Cross-border business services connecting China and the Gulf — 连接中国与海湾的跨境商业服务平台.','foot.nav':'Navigate','foot.legal':'Legal','foot.disclaimer':'Yalla Kaishi provides cross-border business services. We do not provide legal advice. Regulatory interpretation is delivered in partnership with licensed law firms.','foot.hq':'HQ'
  },
  zh: {
    'nav.services':'服务','nav.process':'流程','nav.expertise':'专业领域','nav.about':'关于我们','nav.guangzhou':'广州基地','nav.cta':'预约咨询',
    'hero.overline':'跨境商业服务 · CROSS-BORDER BUSINESS SERVICES · 广州 ⇄ 利雅得',
    'hero.l1':'连接中国与海湾，','hero.l2':'让跨境生意更简单。',
    'hero.sub':'亚拉凯世助力中小企业从容穿梭中国与海湾走廊——合规运营、市场准入、翻译与技术，一站式交付。一个团队，桥梁两端。',
    'hero.cta1':'探索服务','hero.cta2':'预约咨询',
    'hero.s1l':'十年深耕中阿走廊','hero.s2l':'三语服务 · 中 · EN · العربية','hero.s3l':'咨询24小时响应',
    'svc.tag':'我们的服务','svc.h2':'六大服务 · 一座桥梁',
    'svc.sub':'所有服务均以双语交付、专业文档呈现，并在必要时经持牌合作律师审核。固定费用提案——绝无意外收费。',
    'svc.s1t':'合规运营','svc.s1d':'监管监控、差距评估与流程文档，让法律意见落地为可执行的运营机制。',
    'svc.s2t':'监管翻译','svc.s2d':'法律、许可、合同与申报文件的阿↔中↔英专业翻译——专业译员，而非机器直译。',
    'svc.s3t':'市场准入与许可','svc.s3d':'沙特与阿联酋MISA / SAGIA许可路径规划、申报文件与分步入场方案。',
    'svc.s4t':'合作伙伴尽调','svc.s4d':'对桥梁两端本地合作伙伴、分销商与供应商进行运营尽职调查。',
    'svc.s5t':'技术与工具','svc.s5d':'客户门户、监管更新推送与自评工具包，让合规可量化、可追踪。',
    'svc.s6t':'培训与工作坊','svc.s6d':'面向团队与协会的实务双语工作坊：海湾数据保护、PIPL与市场准入基础。',
    'svc.cta':'获取提案 →',
    'svc.note':'亚拉凯世提供跨境商业服务——而非法律意见。监管解读均通过与中阿两地持牌律师事务所合作完成。',
    'pr.tag':'我们的流程','pr.h2':'流程清晰 · 交付明确',
    'pr.sub':'从首次通话到长期支持——双语路径、前置议定的固定费用，每一步都有章可循。',
    'pr.s1t':'了解需求','pr.s1d':'免费咨询，以中文、阿拉伯语或英语了解您的市场、时间线与风险敞口。',
    'pr.s2t':'界定范围','pr.s2d':'固定费用提案：交付物明确、双语文档齐全、时间表清晰。',
    'pr.s3t':'交付执行','pr.s3d':'文件、流程搭建与实施支持——必要时经持牌律师审核。',
    'pr.s4t':'长期支持','pr.s4d':'持续监控、监管动态更新与季度健康检查。',
    'exp.tag':'专业领域','exp.h2':'中阿两地 · 监管情报',
    'exp.sub':'我们持续瞭望中国与海湾的监管面，让您的团队专注业务本身。',
    'exp.r1':'沙特阿拉伯','exp.r2':'沙特阿拉伯','exp.r3':'沙特许可','exp.r4':'沙特投资','exp.r5':'沙特宏观','exp.r6':'阿联酋','exp.r7':'中国','exp.r8':'中国','exp.r9':'中国','exp.r10':'中国网站','exp.r11':'中国注册','exp.r12':'数据主体权利','exp.r13':'翻译层','exp.r14':'监控核心',
    'ab.tag':'关于我们','ab.h2':'两个世界 · 一支团队',
    'ab.sub':'一支双语团队，根植于中阿走廊两端十年的亲身实践。',
    'ab.role':'创始人兼董事总经理',
    'ab.bio':'生于沙特、学于中国。中国顶尖高校工科学位与风险管理MBA，全球航运集团企业IT管理经验，阿拉伯语母语、专业中文。亚拉凯世的使命，是让中国与海湾之间的跨境业务清晰、合规、触手可及。',
    'gz.tag':'我们的基地','gz.h2':'扎根广州',
    'gz.sub':'我们所促进的贸易的物理中心——中国出口商与海湾买家交汇之处。',
    'gz.c1t':'贴近客户','gz.c1d':'广东出口企业与广交会——市场就在这一座城。',
    'gz.c2t':'创始人基地','gz.c2d':'创始人扎根天河区十年。',
    'gz.c3t':'南沙自贸区与一带一路','gz.c3d':'为跨境服务与科技企业而生的贸易便利化政策。',
    'gz.c4t':'人才储备','gz.c4d':'广州高校培养的阿语、英语与商科人才。',
    'gz.c5t':'互联互通','gz.c5d':'直飞利雅得、迪拜与多哈；坐拥广州港。',
    'gz.c6t':'本地价值','gz.c6d':'本地招聘、本地纳税、本地出口促进。',
    'ct.tag':'联系我们','ct.h2':'您的下一站是哪里？',
    'ct.sub':'告诉我们您的市场准入计划——我们将在24小时内回复，给出务实的路径评估。没有推销话术，没有压力。',
    'ct.addr':'广东省广州市越秀区人民街道解放南路123号金汇大厦 · Jinhui Building, 123 Jiefang South Road, Yuexiu District, Guangzhou','ct.resp':'24小时内回复',
    'ct.fname':'您的姓名','ct.fnameph':'姓名 / Your name','ct.femail':'电子邮箱','ct.fcomp':'公司','ct.fcompph':'公司名称 / Company name','ct.fmsg':'您的需求','ct.fmsgph':'您计划进入哪个市场？何时？/ Which market are you entering?','ct.send':'发送消息','ct.ok':'感谢您的来信——我们将在24小时内回复。',
    'foot.tagline':'连接中国与海湾的跨境商业服务平台 — Cross-border business services connecting China and the Gulf.','foot.nav':'导航','foot.legal':'法律声明','foot.disclaimer':'亚拉凯世提供跨境商业服务，不提供法律意见。监管解读均通过与持牌律师事务所合作完成。','foot.hq':'总部'
  }
};

let LANG = localStorage.getItem('yk-lang') || 'en'; /* languages: en, ar, zh */

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

const langToggleEl = $('#langToggle');
if (langToggleEl) langToggleEl.addEventListener('click', () => {
  LANG = LANG === 'en' ? 'ar' : LANG === 'ar' ? 'zh' : 'en';
  localStorage.setItem('yk-lang', LANG);
  applyI18n(); applyCSI18n();
});

/* ─────────── preloader ─────────── */
window.addEventListener('load', () => {
  const bar = $('#preBar');
  if (!bar) { document.body.classList.remove('no-scroll'); return; }
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
const sectionIds = ['services','process','expertise','about','guangzhou','contact'];
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
if (burger) burger.addEventListener('click', () => {
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
if (glow && !hasTouch) {
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
const ctx = canvas ? canvas.getContext('2d') : null;
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
canvas.getBoundingClientRect = canvas.getBoundingClientRect || (() => ({ left: 0, top: 0 }));

if (canvas) document.addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
}, { passive: true });
if (canvas) canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
if (canvas && ctx) { window.addEventListener('resize', resize); resize(); }
applyI18n();

/* ─────────── contact form ─────────── */
const contactFormEl = $('#contactForm');
if (contactFormEl) contactFormEl.addEventListener('submit', e => {
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
});/* ═══════════════════════════════════════════════════════════
   CHINA SUPPORT SERVICE SECTION & SMART FORM
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────── China Support i18n ─────────── */
const CS_I18N = {
  en: {
    'cs.tag':'CHINA SUPPORT','cs.h1':'China Business, Travel &amp; Administrative Support',
    'cs.sub':'Professional assistance for individuals, entrepreneurs, students, and businesses navigating travel, business, administrative, and market-entry requirements in China.',
    'cs.intro':'Yalla-Hack provides coordinated support services for clients who need assistance with practical processes in China. We act as a single professional point of contact, streamlining your requirements so you can focus on your objectives.',
    'cs.cta':'Request a Service',
    'cs.ca.t':'Visa &amp; Invitation Services','cs.ca.sub':'Assistance with invitation letters, visa applications, and related coordination. Visa issuance is subject to the requirements and decisions of the relevant authorities.',
    'cs.s1':'Tourist Invitation Letter','cs.s1d':'Professional coordination for preparing and submitting tourist invitation letters for visits to China.',
    'cs.s2':'Commercial Invitation Letter','cs.s2d':'Coordination for commercial invitation letters supporting business visits and negotiations in China.',
    'cs.s3':'Chinese Visa Application Assistance','cs.s3d':'Professional assistance with preparing and coordinating the Chinese visa application process.',
    'cs.s4':'Tourist Visa Application Assistance','cs.s4d':'Step-by-step assistance with tourist visa applications, document preparation, and coordination.',
    'cs.s5':'Tourist or Commercial Invitation Letter Support','cs.s5d':'End-to-end support for invitation letter preparation, review, and submission coordination.',
    'cs.visaNote':'Visa issuance is subject to the requirements and decisions of the relevant authorities. Yalla-Hack provides application preparation, coordination, and administrative assistance and does not guarantee visa approval.',
    'cs.cb.t':'Business &amp; Company Services','cs.cb.sub':'Tailored support for entrepreneurs, SMEs, investors, and companies exploring business opportunities in China.',
    'cs.s6':'Company Registration &amp; Establishment Assistance','cs.s6d':'Coordination assistance for company registration and establishment procedures in China.',
    'cs.s7':'Business Setup Support','cs.s7d':'Advisory coordination and administrative support for business setup in China.',
    'cs.s8':'Office Rental Assistance','cs.s8d':'Assistance with identifying, negotiating, and coordinating office rental arrangements.',
    'cs.s9':'Commercial Address / Office Solutions','cs.s9d':'Coordination for commercial address registration and office solutions in China.',
    'cs.s10':'Contract Review &amp; Follow-Up','cs.s10d':'Coordination for contract review and administrative follow-up on commercial agreements.',
    'cs.s11':'Business Administrative Coordination','cs.s11d':'Centralized administrative coordination for your business operations in China.',
    'cs.cc.t':'Education Services','cs.cc.sub':'Support for students and families navigating university applications and academic administrative requirements in China.',
    'cs.s12':'University Application Assistance','cs.s12d':'Professional coordination for university application processes in China.',
    'cs.s13':'University Admission Process Support','cs.s13d':'Guidance and coordination throughout the university admission process.',
    'cs.s14':'Application Document Coordination','cs.s14d':'Coordination for the preparation, translation, and submission of application documents.',
    'cs.s15':'International Student Administrative Assistance','cs.s15d':'Administrative assistance for international students throughout their study journey.',
    'cs.eduNote':'Admission decisions are made exclusively by the relevant educational institution.',
    'cs.cd.t':'Accommodation &amp; Travel Services','cs.cd.sub':'Booking assistance and coordination for accommodation, transportation, and logistics needs in China.',
    'cs.s16':'Hotel Booking Assistance','cs.s16d':'Coordination and booking assistance for hotel accommodations across China.',
    'cs.s17':'Apartment Rental Assistance','cs.s17d':'Assistance with apartment search, coordination, and rental process in China.',
    'cs.s18':'Coordination for office and commercial space rental arrangements.','cs.s19':'Passenger Ticket Booking','cs.s19d':'Booking assistance for domestic and international passenger travel.',
    'cs.s20':'Cargo &amp; Shipping Coordination','cs.s20d':'Coordination for cargo and shipping logistics to and within China.',
    'cs.s21':'Car Booking / Transportation Arrangements','cs.s21d':'Transportation arrangements and car booking assistance across China.',
    'cs.ce.t':'Guangzhou Services','cs.ce.sub':'Dedicated on-the-ground support services for clients based in or visiting Guangzhou.',
    'cs.s22':'Visa Appointment Booking in Guangzhou','cs.s22d':'Coordination for visa appointment scheduling at Guangzhou visa application centers.',
    'cs.s23':'Medical Examination Appointment Coordination','cs.s23d':'Coordination for medical examination appointments required for visa applications.',
    'cs.s24':'Canton Fair Entry Badge / Registration Assistance','cs.s24d':'Assistance with Canton Fair entry badge registration and related procedures.',
    'cs.s25':'Local Administrative Coordination','cs.s25d':'On-the-ground administrative coordination for local government and bureau procedures.',
    'cs.s26':'Transportation &amp; Car Booking','cs.s26d':'Local transportation arrangements and car booking services in Guangzhou.',
    'cs.s27':'Accommodation Coordination','cs.s27d':'Hotel and apartment coordination services for guests in Guangzhou.',
    'cs.cf.t':'Driving &amp; Vehicle Services','cs.cf.sub':'Application and administrative assistance for driving licenses, vehicle registration, and related services.',
    'cs.s28':'Temporary Driving License Assistance','cs.s28d':'Application and administrative assistance for obtaining a temporary driving license in China.',
    'cs.s29':'Permanent Driving License Assistance','cs.s29d':'Application and administrative assistance for permanent driving license procedures.',
    'cs.s30':'Vehicle Registration Assistance','cs.s30d':'Application and administrative assistance for vehicle registration with Chinese authorities.',
    'cs.s31':'Vehicle-Related Administrative Support','cs.s31d':'Administrative coordination for vehicle inspections, transfers, and related procedures.',
    'cs.s32':'Car Rental / Booking Assistance','cs.s32d':'Booking assistance and coordination for car rental services in China.',
    'cs.drivingNote':'Yalla-Hack provides application and administrative assistance only. Government-issued licenses, registrations, and permits are subject to approval by the relevant authorities.',
    'cs.trust.tag':'WHY CHOOSE US','cs.trust.h2':'Why Choose Yalla-Hack?','cs.trust.sub':'A professional digital point of contact for international clients who need reliable assistance in China.',
    'cs.trust.t1':'Professional Service Coordination','cs.trust.d1':'Dedicated coordination across multiple service categories with a single point of contact.',
    'cs.trust.t2':'International Client Support','cs.trust.d2':'Multi-language assistance for clients worldwide in English, Arabic, and Chinese.',
    'cs.trust.t3':'Centralized Request Management','cs.trust.d3':'Track and manage all your service requests through a single unified system.',
    'cs.trust.t4':'Transparent Communication','cs.trust.d4':'Clear processes, defined timelines, and honest expectations — no hidden terms.',
    'cs.trust.t5':'Multi-Service Assistance','cs.trust.d5':'Visa, business, education, accommodation, and logistics — all under one roof.',
    'cs.trust.t6':'Digital-First Service','cs.trust.d6':'Manage your requests online with real-time updates and digital documentation.',
    'cs.disclaimer':'Yalla-Hack provides service coordination and administrative assistance. We do not issue visas, government licenses, permits, Canton Fair credentials, university admissions, or vehicle registrations. All approvals are subject to the decision of the relevant authorities and institutions.',
    /* Form */
    'cs.form.title':'Request a Service','cs.form.sub':'Tell us what you need and we will connect you with the right team.',
    'cs.form.p1':'Service','cs.form.p2':'Information','cs.form.p3':'Details','cs.form.p4':'Review','cs.form.p5':'Done',
    'cs.form.s1':'What service do you need?','cs.form.s1d':'Select one or more services. You can combine categories for comprehensive support.',
    'cs.form.s2':'Your Information','cs.form.s2d':'Please provide your contact details. All fields marked with * are required.',
    'cs.form.s3':'Request Details','cs.form.s3d':'Answer the questions relevant to your selected service(s).',
    'cs.form.s4':'Review Your Request','cs.form.s4d':'Please confirm all the details before submitting.',
    'cs.form.name':'Full Name *','cs.form.country':'Country of Residence *','cs.form.nationality':'Nationality *',
    'cs.form.email':'Email Address *','cs.form.phone':'WhatsApp / Phone Number *','cs.form.company':'Company Name (optional)','cs.form.lang':'Preferred Language',
    'cs.form.other':'Please describe what you need assistance with.','cs.form.notes':'Additional Notes (optional)',
    'cs.form.cta':'Request a Service','cs.form.prev':'Previous','cs.form.next':'Next',
    'cs.form.submitted':'Request Submitted Successfully','cs.form.thanks':'Thank you. Your request has been successfully submitted to the Yalla-Hack team.',
    'cs.form.keepId':'Please keep this reference number for future communication.',
    'cs.form.reset':'Submit Another Request','cs.form.home':'Back to Homepage',
    'cs.success.title':'Request Submitted Successfully','cs.success.msg':'Thank you. Your request has been successfully submitted to the Yalla-Hack team.',
    'cs.success.keepId':'Please keep this reference number for future communication.','cs.success.return':'Return to Services','cs.success.home':'Back to Homepage',
    /* Dynamic questions */
    'cs.q.purpose':'Purpose of travel','cs.q.travelDate':'Intended travel date','cs.q.destination':'Intended destination in China','cs.q.residence':'Current country of residence','cs.q.visaType':'Visa type','cs.q.applicants':'Number of applicants',
    'cs.q.desiredUni':'Desired university','cs.q.degree':'Degree / program','cs.q.intake':'Intended intake','cs.q.education':'Current education level',
    'cs.q.businessActivity':'Business activity','cs.q.prefCity':'Preferred city','cs.q.partners':'Number of partners','cs.q.businessScope':'Expected business scope',
    'cs.q.city':'City','cs.q.propType':'Property type','cs.q.checkIn':'Check-in date','cs.q.checkOut':'Check-out date','cs.q.guests':'Number of guests',
    'cs.q.origin':'Origin','cs.q.dest':'Destination','cs.q.goodsType':'Type of goods','cs.q.quantity':'Approximate quantity / volume',
    'cs.q.companyName':'Company name','cs.q.industry':'Industry','cs.q.fairSession':'Intended fair / session','cs.q.attendees':'Number of attendees',
    'cs.q.contractType':'Type of contract','cs.q.parties':'Parties involved','cs.q.contractPurpose':'Purpose of review','cs.q.completionDate':'Requested completion date',
    'cs.q.tempDriving':'Driving experience level','cs.q.permDriving':'Current license country','cs.q.vehicleType':'Vehicle type','cs.q.regCity':'City of registration',
  },
  zh: {
    'cs.tag':'中国支持','cs.h1':'中国商业、旅行与行政支持','cs.sub':'专业协助个人、企业家、学生和企业处理在中国的旅行、商业、行政和市场准入要求。','cs.intro':'亚拉凯世为需要在中国处理实际流程的客户提供协调支持服务。我们作为单一的专业联络点，简化您的需求，让您专注于目标。','cs.cta':'请求服务',
    'cs.ca.t':'签证与邀请函服务','cs.ca.sub':'协助办理邀请函、签证申请及相关协调。签证签发取决于相关当局的要求和决定。',
    'cs.s1':'旅游邀请函','cs.s1d':'专业协调为中国访问准备和提交旅游邀请函。','cs.s2':'商务邀请函','cs.s2d':'支持商务访问和谈判的商务邀请函协调。','cs.s3':'中国签证申请协助','cs.s3d':'专业协助准备和协调中国签证申请流程。','cs.s4':'旅游签证申请协助','cs.s4d':'旅游签证申请、文件准备和协调的逐步协助。','cs.s5':'旅游或商务邀请函支持','cs.s5d':'邀请函准备、审查和提交协调的端到端支持。','cs.visaNote':'签证签发取决于相关当局的要求和决定。亚拉凯世提供申请准备、协调和行政协助，不保证签证批准。',
    'cs.cb.t':'商业与公司服务','cs.cb.sub':'专为在中国探索商业机会的企业家、中小企业、投资者和公司量身定制的支持。',
    'cs.s6':'公司注册与设立协助','cs.s6d':'协调协助办理中国公司注册和设立程序。','cs.s7':'商务搭建支持','cs.s7d':'中国商务搭建的咨询协调和行政支持。','cs.s8':'办公室租赁协助','cs.s8d':'协助识别、谈判和协调办公室租赁安排。','cs.s9':'商业地址/办公室解决方案','cs.s9d':'协调中国商业地址注册和办公室解决方案。','cs.s10':'合同审查与跟进','cs.s10d':'协调商业合同的审查和行政跟进。','cs.s11':'商务行政协调','cs.s11d':'中国业务运营的集中行政协调。',
    'cs.cc.t':'教育服务','cs.cc.sub':'支持学生和家庭处理在中国的大学申请和学术行政要求。',
    'cs.s12':'大学申请协助','cs.s12d':'专业协调中国的大学申请流程。','cs.s13':'大学录取流程支持','cs.s13d':'在整个大学录取过程中提供指导和协调。','cs.s14':'申请文件协调','cs.s14d':'申请文件准备、翻译和提交的协调。','cs.s15':'国际学生行政协助','cs.s15d':'在整个留学旅程中为国际学生提供行政协助。','cs.eduNote':'录取决定完全由相关教育机构做出。',
    'cs.cd.t':'住宿与旅行服务','cs.cd.sub':'协助协调在中国的住宿、交通和物流需求。',
    'cs.s16':'酒店预订协助','cs.s16d':'协调和预订协助中国各地的酒店住宿。','cs.s17':'公寓租赁协助','cs.s17d':'协助公寓搜索、协调和租赁流程。','cs.s18':'协调办公室和商业空间租赁安排。','cs.s19':'客运票务预订','cs.s19d':'国内和国际客运旅行的预订协助。','cs.s20':'货运与航运协调','cs.s20d':'协调中国境内外的货运和航运物流。','cs.s21':'汽车预订/交通安排','cs.s21d':'中国各地的交通安排和汽车预订协助。',
    'cs.ce.t':'广州服务','cs.ce.sub':'为在广州或访问广州的客户提供专属的现场支持服务。',
    'cs.s22':'广州签证预约预订','cs.s22d':'协调在广州签证申请中心预约签证。','cs.s23':'体检预约协调','cs.s23d':'协调签证申请所需的体检预约。','cs.s24':'广交会入场证/注册协助','cs.s24d':'协助广交会入场证注册及相关程序。','cs.s25':'本地行政协调','cs.s25d':'本地政府和局务程序的现场行政协调。','cs.s26':'交通与汽车预订','cs.s26d':'广州本地交通安排和汽车预订服务。','cs.s27':'住宿协调','cs.s27d':'广州客人的酒店和公寓协调服务。',
    'cs.cf.t':'驾驶与车辆服务','cs.cf.sub':'驾驶证、车辆注册及相关服务的申请和行政协助。',
    'cs.s28':'临时驾驶证协助','cs.s28d':'在中国获取临时驾驶证的申请和行政协助。','cs.s29':'永久驾驶证协助','cs.s29d':'永久驾驶证程序的申请和行政协助。','cs.s30':'车辆注册协助','cs.s30d':'协助车辆在中国当局的注册。','cs.s31':'车辆相关行政支持','cs.s31d':'车辆检查、转让及相关程序的行政协调。','cs.s32':'汽车租赁/预订协助','cs.s32d':'中国汽车租赁服务的预订协助和协调。',
    'cs.drivingNote':'亚拉凯世仅提供申请和行政协助。政府颁发的许可证、注册和证书须经相关当局批准。',
    'cs.trust.tag':'为什么选择我们','cs.trust.h2':'为什么选择亚拉凯世？','cs.trust.sub':'国际客户值得信赖的专业数字联络点。',
    'cs.trust.t1':'专业服务协调','cs.trust.d1':'多个服务类别的专职协调，单一联络点。','cs.trust.t2':'国际客户支持','cs.trust.d2':'为全球客户提供多语言支持，包括英语、阿拉伯语和中文。','cs.trust.t3':'集中请求管理','cs.trust.d3':'通过统一的系统跟踪和管理所有服务请求。','cs.trust.t4':'透明沟通','cs.trust.d4':'清晰的流程、确定的时间表和诚实的期望，没有隐藏条款。','cs.trust.t5':'多服务协助','cs.trust.d5':'签证、商务、教育、住宿和物流，一站解决。','cs.trust.t6':'数字化优先服务','cs.trust.d6':'在线管理您的请求，获取实时更新和数字文档。',
    'cs.disclaimer':'亚拉凯世提供服务和行政协调。我们不签发签证、政府许可证、证书、广交会凭证、大学录取通知或车辆注册。所有批准须经相关当局和机构决定。',
    'cs.form.title':'请求服务','cs.form.sub':'告诉我们您的需求，我们将为您对接合适的团队。','cs.form.p1':'服务','cs.form.p2':'信息','cs.form.p3':'详情','cs.form.p4':'审查','cs.form.p5':'完成',
    'cs.form.s1':'您需要什么服务？','cs.form.s1d':'选择一项或多项服务。您可以组合类别以获得全面支持。','cs.form.s2':'您的信息','cs.form.s2d':'请提供您的联系方式。标有*的字段为必填。','cs.form.s3':'需求详情','cs.form.s3d':'回答与您所选服务相关的问题。','cs.form.s4':'审查您的请求','cs.form.s4d':'提交前请确认所有详情。',
    'cs.form.name':'姓名 *','cs.form.country':'居住国家 *','cs.form.nationality':'国籍 *','cs.form.email':'电子邮件地址 *','cs.form.phone':'WhatsApp / 电话 *','cs.form.company':'公司名称（可选）','cs.form.lang':'首选语言',
    'cs.form.other':'请描述您需要协助的内容。','cs.form.notes':'补充说明（可选）',
    'cs.form.cta':'请求服务','cs.form.prev':'上一步','cs.form.next':'下一步',
    'cs.form.submitted':'请求已成功提交','cs.form.thanks':'感谢您的请求，已成功提交至亚拉凯世团队。','cs.form.keepId':'请保留此参考编号以备日后沟通。','cs.form.reset':'提交新请求','cs.form.home':'返回首页',
    'cs.success.title':'请求已成功提交','cs.success.msg':'感谢您的请求，已成功提交至亚拉凯世团队。','cs.success.keepId':'请保留此参考编号以备日后沟通。','cs.success.return':'返回服务','cs.success.home':'返回首页',
  }
};

const CS = CS_I18N[LANG] || CS_I18N.en;

/* Merge CS i18n into main I18N dictionary */
Object.assign(I18N.en, CS_I18N.en);
Object.assign(I18N.zh, CS_I18N.zh);
// Arabic support: mirrored from English for trilingual display
Object.assign(I18N.ar, CS_I18N.en); // Arabic mirror

/* ─────────── Service Categories Data ─────────── */
const SERVICE_CATEGORIES = {
  visa: { nameKey: 'cs.ca.t', services: ['tourist-invitation','commercial-invitation','chinese-visa','tourist-visa','invitation-support'] },
  business: { nameKey: 'cs.cb.t', services: ['company-registration','business-setup','office-rental','commercial-address','contract-review','business-coordination'] },
  education: { nameKey: 'cs.cc.t', services: ['university-application','admission-support','document-coordination','student-assistance'] },
  accommodation: { nameKey: 'cs.cd.t', services: ['hotel-booking','apartment-rental','d-office-rental','ticket-booking','cargo-shipping','car-booking'] },
  guangzhou: { nameKey: 'cs.ce.t', services: ['visa-appointment','medical-appointment','canton-fair','local-admin','gz-transport','gz-accommodation'] },
  driving: { nameKey: 'cs.cf.t', services: ['temp-driving','perm-driving','vehicle-registration','vehicle-admin','car-rental'] },
};

/* ─────────── Dynamic Questions Config ─────────── */
const SERVICE_QUESTIONS = {
  'tourist-invitation': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Tourism','Family visit','Short trip'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
  ],
  'commercial-invitation': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Business meeting','Negotiation','Conference','Trade show'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
    { qid: 'company', labelKey: 'cs.q.companyName', type: 'text' },
  ],
  'chinese-visa': [
    { qid: 'visaType', labelKey: 'cs.q.visaType', type: 'select', options: ['L (Tourist)','M (Business)','Q2 (Family)','S2 (Private)'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
    { qid: 'applicants', labelKey: 'cs.q.applicants', type: 'number', placeholder: '1' },
  ],
  'tourist-visa': [
    { qid: 'visaType', labelKey: 'cs.q.visaType', type: 'select', options: ['L (Tourist)','Q2 (Family)','S2 (Private)'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
    { qid: 'applicants', labelKey: 'cs.q.applicants', type: 'number', placeholder: '1' },
  ],
  'university-application': [
    { qid: 'desiredUni', labelKey: 'cs.q.desiredUni', type: 'text' },
    { qid: 'degree', labelKey: 'cs.q.degree', type: 'select', options: ['Bachelor','Master','PhD','Short course','Language course'] },
    { qid: 'intake', labelKey: 'cs.q.intake', type: 'select', options: ['Spring','Summer','Fall','Winter'] },
    { qid: 'education', labelKey: 'cs.q.education', type: 'select', options: ['High school','Associate','Bachelor','Master','PhD'] },
  ],
  'admission-support': [
    { qid: 'desiredUni', labelKey: 'cs.q.desiredUni', type: 'text' },
    { qid: 'degree', labelKey: 'cs.q.degree', type: 'select', options: ['Bachelor','Master','PhD','Short course'] },
    { qid: 'intake', labelKey: 'cs.q.intake', type: 'select', options: ['Spring','Summer','Fall','Winter'] },
  ],
  'document-coordination': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Academic documents','Translation','Certification','Notarization'] },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
  ],
  'student-assistance': [
    { qid: 'desiredUni', labelKey: 'cs.q.desiredUni', type: 'text' },
    { qid: 'degree', labelKey: 'cs.q.degree', type: 'select', options: ['Bachelor','Master','PhD','Language course'] },
    { qid: 'intake', labelKey: 'cs.q.intake', type: 'select', options: ['Spring','Summer','Fall','Winter'] },
  ],
  'company-registration': [
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Trading','Manufacturing','Technology','Consulting','Services','E-commerce','Other'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text', placeholder: 'e.g. Guangzhou' },
    { qid: 'partners', labelKey: 'cs.q.partners', type: 'number', placeholder: '1' },
    { qid: 'businessScope', labelKey: 'cs.q.businessScope', type: 'textarea' },
  ],
  'business-setup': [
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Trading','Manufacturing','Technology','Consulting','Services'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
    { qid: 'businessScope', labelKey: 'cs.q.businessScope', type: 'textarea' },
  ],
  'office-rental': [
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Small team','Medium office','Large headquarters','Co-working'] },
  ],
  'commercial-address': [
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Trading','Technology','Consulting','Services','Other'] },
  ],
  'contract-review': [
    { qid: 'contractType', labelKey: 'cs.q.contractType', type: 'select', options: ['Sales contract','Service agreement','Partnership','Employment','NDA','Other'] },
    { qid: 'parties', labelKey: 'cs.q.parties', type: 'text' },
    { qid: 'contractPurpose', labelKey: 'cs.q.contractPurpose', type: 'textarea' },
    { qid: 'completionDate', labelKey: 'cs.q.completionDate', type: 'date' },
  ],
  'business-coordination': [
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Ongoing operations','Market entry','Expansion','Compliance'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
  ],
  'hotel-booking': [
    { qid: 'city', labelKey: 'cs.q.city', type: 'text' },
    { qid: 'checkIn', labelKey: 'cs.q.checkIn', type: 'date' },
    { qid: 'checkOut', labelKey: 'cs.q.checkOut', type: 'date' },
    { qid: 'guests', labelKey: 'cs.q.guests', type: 'number', placeholder: '1' },
  ],
  'apartment-rental': [
    { qid: 'city', labelKey: 'cs.q.city', type: 'text' },
    { qid: 'propType', labelKey: 'cs.q.propType', type: 'select', options: ['Apartment','Serviced apartment','Shared house','Whole building'] },
    { qid: 'checkIn', labelKey: 'cs.q.checkIn', type: 'date' },
    { qid: 'checkOut', labelKey: 'cs.q.checkOut', type: 'date' },
    { qid: 'guests', labelKey: 'cs.q.guests', type: 'number', placeholder: '1' },
  ],
  'd-office-rental': [
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
    { qid: 'businessActivity', labelKey: 'cs.q.businessActivity', type: 'select', options: ['Small team','Medium office','Large headquarters','Co-working'] },
  ],
  'ticket-booking': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Flight','Train','Bus','Ferry'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'origin', labelKey: 'cs.q.origin', type: 'text' },
    { qid: 'destination', labelKey: 'cs.q.destination', type: 'text' },
  ],
  'cargo-shipping': [
    { qid: 'origin', labelKey: 'cs.q.origin', type: 'text' },
    { qid: 'dest', labelKey: 'cs.q.dest', type: 'text' },
    { qid: 'goodsType', labelKey: 'cs.q.goodsType', type: 'select', options: ['Documents','Electronics','Textiles','Machinery','Food','Chemicals','Other'] },
    { qid: 'quantity', labelKey: 'cs.q.quantity', type: 'text', placeholder: 'e.g. 500 kg / 2 pallets' },
  ],
  'car-booking': [
    { qid: 'city', labelKey: 'cs.q.city', type: 'text' },
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Airport transfer','Business meeting','City tour','Long distance'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
  ],
  'visa-appointment': [
    { qid: 'visaType', labelKey: 'cs.q.visaType', type: 'select', options: ['L','M','Q2','S2','X1','X2','Z'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'applicants', labelKey: 'cs.q.applicants', type: 'number', placeholder: '1' },
  ],
  'medical-appointment': [
    { qid: 'visaType', labelKey: 'cs.q.visaType', type: 'select', options: ['L','M','Q2','S2','X1','X2','Z'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'applicants', labelKey: 'cs.q.applicants', type: 'number', placeholder: '1' },
  ],
  'canton-fair': [
    { qid: 'companyName', labelKey: 'cs.q.companyName', type: 'text' },
    { qid: 'industry', labelKey: 'cs.q.industry', type: 'select', options: ['Electronics','Textiles','Machinery','Consumer goods','Automotive','Medical','Other'] },
    { qid: 'fairSession', labelKey: 'cs.q.fairSession', type: 'select', options: ['Phase 1','Phase 2','Phase 3','Autumn Canton Fair'] },
    { qid: 'attendees', labelKey: 'cs.q.attendees', type: 'number', placeholder: '1' },
  ],
  'local-admin': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Business license','Tax registration','Bank account','Work permit','Other'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
  ],
  'gz-transport': [
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Airport pickup','City tour','Business transfer','Day trip'] },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
  ],
  'gz-accommodation': [
    { qid: 'city', labelKey: 'cs.q.city', type: 'text', default: 'Guangzhou' },
    { qid: 'checkIn', labelKey: 'cs.q.checkIn', type: 'date' },
    { qid: 'checkOut', labelKey: 'cs.q.checkOut', type: 'date' },
    { qid: 'guests', labelKey: 'cs.q.guests', type: 'number', placeholder: '1' },
  ],
  'temp-driving': [
    { qid: 'tempDriving', labelKey: 'cs.q.tempDriving', type: 'select', options: ['No prior license','Valid foreign license','Valid Chinese license'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
  ],
  'perm-driving': [
    { qid: 'permDriving', labelKey: 'cs.q.permDriving', type: 'select', options: ['No prior license','Valid foreign license','Valid Chinese temporary'] },
    { qid: 'prefCity', labelKey: 'cs.q.prefCity', type: 'text' },
  ],
  'vehicle-registration': [
    { qid: 'vehicleType', labelKey: 'cs.q.vehicleType', type: 'select', options: ['Personal car','Company car','Motorcycle','Other'] },
    { qid: 'regCity', labelKey: 'cs.q.regCity', type: 'text' },
  ],
  'vehicle-admin': [
    { qid: 'vehicleType', labelKey: 'cs.q.vehicleType', type: 'select', options: ['Inspection','Transfer','Insurance','Other'] },
    { qid: 'regCity', labelKey: 'cs.q.regCity', type: 'text' },
  ],
  'car-rental': [
    { qid: 'city', labelKey: 'cs.q.city', type: 'text' },
    { qid: 'travelDate', labelKey: 'cs.q.travelDate', type: 'date' },
    { qid: 'purpose', labelKey: 'cs.q.purpose', type: 'select', options: ['Business','Tourism','Airport transfer'] },
  ],
};

/* ─────────── Request ID Generator ─────────── */
let requestCounter = 1;
function generateRequestId() {
  const year = new Date().getFullYear();
  const seq = String(requestCounter++).padStart(5, '0');
  return `YH-CS-${year}-${seq}`;
}

/* ─────────── Form State ─────────── */
const csFormState = {
  currentStep: 1,
  selectedServices: [],
  formData: {},
};

/* ─────────── Smart Form Logic ─────────── */
const csFormOverlay = document.getElementById('cs-form');
const csForm = document.getElementById('csSmartForm');
const csFormClose = document.getElementById('csFormClose');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const formNav = document.getElementById('formNav');
const dynamicQuestions = document.getElementById('dynamicQuestions');
const reviewContent = document.getElementById('reviewContent');
const otherTextWrap = document.getElementById('otherTextWrap');
const otherText = document.getElementById('otherText');
const requestIdDisplay = document.getElementById('requestIdDisplay');
const resetFormBtn = document.getElementById('resetFormBtn');
const successResetBtn = document.getElementById('successResetBtn');
const hasCSForm = !!(csFormOverlay && csForm && nextBtn);

/* Open form */
function openCSForm() {
  if (!csFormOverlay) return;
  csFormOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Close form */
/* CTA buttons that open the form overlay directly */
const heroOpenForm = document.getElementById('heroOpenForm');
const navOpenForm = document.getElementById('navOpenForm');
if (heroOpenForm) heroOpenForm.addEventListener('click', () => { csFormState.selectedServices = []; openCSForm(); });
if (navOpenForm) navOpenForm.addEventListener('click', () => { csFormState.selectedServices = []; openCSForm(); });

function closeCSForm() {
  if (!csFormOverlay) return;
  csFormOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* Service card buttons open form */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-form]');
  if (btn) {
    csFormState.selectedServices = [btn.dataset.form];
    openCSForm();
    setTimeout(() => updateStep(1), 350);
  }
});

/* Service link buttons in section */
document.addEventListener('click', (e) => {
  const link = e.target.closest('.card .svc-link');
  if (link && link.dataset.form) {
    csFormState.selectedServices = [link.dataset.form];
    openCSForm();
    setTimeout(() => updateStep(1), 350);
  }
});

if (csFormClose) csFormClose.addEventListener('click', closeCSForm);
if (csFormOverlay) csFormOverlay.addEventListener('click', (e) => { if (e.target === csFormOverlay) closeCSForm(); });

/* Other checkbox */
document.addEventListener('change', (e) => {
  if (e.target.name === 'services') {
    const otherChecked = document.querySelector('input[name="services"][value="other"]');
    if (otherChecked) {
      otherTextWrap.style.display = otherChecked.checked ? 'block' : 'none';
      if (!otherChecked.checked) otherText.value = '';
    }
  }
});

/* Update progress indicator */
function updateProgress(step) {
  const steps = csFormOverlay.querySelectorAll('.progress-step');
  const lines = csFormOverlay.querySelectorAll('.progress-line');
  steps.forEach((s, i) => {
    s.classList.remove('active', 'completed');
    if (i + 1 < step) s.classList.add('completed');
    else if (i + 1 === step) s.classList.add('active');
  });
  lines.forEach((l, i) => {
    l.classList.toggle('completed', i + 1 < step);
  });
}

/* Update visible step */
function updateStep(step) {
  csFormState.currentStep = step;
  csFormOverlay.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const targetStep = document.getElementById('step-' + step);
  if (targetStep) targetStep.classList.add('active');
  updateProgress(step);
  prevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
  if (step === 5) { formNav.style.display = 'none'; } else { formNav.style.display = 'flex'; }
  if (step === 3) generateDynamicQuestions();
  if (step === 4) generateReview();
}

/* Validate step 1 */
function validateStep1() {
  const checked = csForm.querySelectorAll('input[name="services"]:checked');
  const vals = [...checked].map(c => c.value);
  const otherChecked = vals.includes('other');
  if (otherChecked) vals.splice(vals.indexOf('other'), 1);
  if (vals.length === 0 && !otherChecked) {
    alert(CS['cs.form.s1'] ? 'Please select at least one service.' : 'Please select at least one service.');
    return false;
  }
  if (otherChecked && (!otherText.value.trim())) {
    alert(CS['cs.form.other'] ? 'Please describe what you need assistance with.' : 'Please describe what you need assistance with.');
    return false;
  }
  csFormState.selectedServices = vals;
  return true;
}

/* Validate step 2 */
function validateStep2() {
  const fields = ['fullName','country','nationality','email','phone'];
  let valid = true;
  fields.forEach(f => {
    const input = csForm.querySelector(`[name="${f}"]`);
    const err = input ? input.parentElement.querySelector('.err-msg') : null;
    if (!input.value.trim()) {
      input.classList.add('invalid');
      if (err) err.textContent = 'This field is required';
      valid = false;
    } else {
      input.classList.remove('invalid');
      if (err) err.textContent = '';
      if (f === 'email' && !input.value.includes('@')) {
        input.classList.add('invalid');
        if (err) err.textContent = 'Please enter a valid email';
        valid = false;
      }
    }
  });
  return valid;
}

/* Next / Previous */
if (nextBtn) nextBtn.addEventListener('click', () => {
  if (csFormState.currentStep === 1 && !validateStep1()) return;
  if (csFormState.currentStep === 2 && !validateStep2()) return;
  if (csFormState.currentStep < 5) updateStep(csFormState.currentStep + 1);
});
if (prevBtn) prevBtn.addEventListener('click', () => {
  if (csFormState.currentStep > 1) updateStep(csFormState.currentStep - 1);
});

/* Generate dynamic questions for step 3 */
function generateDynamicQuestions() {
  const container = dynamicQuestions;
  container.innerHTML = '';
  const services = csFormState.selectedServices;
  const allQuestions = new Map();

  services.forEach(svc => {
    const questions = SERVICE_QUESTIONS[svc];
    if (questions) {
      questions.forEach(q => {
        if (!allQuestions.has(q.qid)) {
          allQuestions.set(q.qid, q);
        }
      });
    }
  });

  allQuestions.forEach((q, i) => {
    const label = document.createElement('label');
    const labelSpan = document.createElement('span');
    labelSpan.textContent = CS[q.labelKey] || q.labelKey;
    label.appendChild(labelSpan);

    if (q.type === 'select') {
      const sel = document.createElement('select');
      sel.name = q.qid;
      sel.required = true;
      const defOpt = document.createElement('option');
      defOpt.value = '';
      defOpt.textContent = CS['cs.form.s3d'] || 'Select...';
      sel.appendChild(defOpt);
      q.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        sel.appendChild(o);
      });
      label.appendChild(sel);
    } else if (q.type === 'textarea') {
      const ta = document.createElement('textarea');
      ta.name = q.qid;
      ta.rows = 3;
      ta.placeholder = q.placeholder || '';
      ta.required = true;
      label.appendChild(ta);
    } else if (q.type === 'date') {
      const inp = document.createElement('input');
      inp.type = 'date';
      inp.name = q.qid;
      inp.required = true;
      label.appendChild(inp);
    } else if (q.type === 'number') {
      const inp = document.createElement('input');
      inp.type = 'number';
      inp.name = q.qid;
      inp.min = '1';
      inp.placeholder = q.placeholder || '';
      inp.required = true;
      label.appendChild(inp);
    } else {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.name = q.qid;
      inp.placeholder = q.placeholder || '';
      inp.required = true;
      label.appendChild(inp);
    }

    const row = document.createElement('div');
    row.className = 'q-row';
    row.style.gridColumn = '1 / -1';
    row.appendChild(label);
    container.appendChild(row);
  });

  if (allQuestions.size === 0) {
    container.innerHTML = '<p style="color:var(--mut);font-size:.9rem">No additional questions for the selected service(s).</p>';
  }
}

/* Generate review for step 4 */
function generateReview() {
  const container = reviewContent;
  container.innerHTML = '';

  /* Services */
  const svcSection = document.createElement('div');
  svcSection.className = 'review-section';
  const svcH4 = document.createElement('h4');
  svcH4.textContent = 'SERVICES';
  svcSection.appendChild(svcH4);
  const svcP = document.createElement('p');
  svcP.className = 'review-value';
  svcP.textContent = csFormState.selectedServices.join(', ');
  svcSection.appendChild(svcP);
  container.appendChild(svcSection);

  /* Client info */
  const infoSection = document.createElement('div');
  infoSection.className = 'review-section';
  const infoH4 = document.createElement('h4');
  infoH4.textContent = 'CLIENT INFORMATION';
  infoSection.appendChild(infoH4);
  const infoFields = ['fullName','country','nationality','email','phone','company','language'];
  const infoLabels = {
    fullName: 'Full Name', country: 'Country of Residence', nationality: 'Nationality',
    email: 'Email', phone: 'Phone / WhatsApp', company: 'Company', language: 'Language'
  };
  infoFields.forEach(f => {
    const input = csForm.querySelector(`[name="${f}"]`);
    if (!input) return;
    const p = document.createElement('p');
    const lbl = document.createElement('span');
    lbl.className = 'review-label';
    lbl.textContent = (CS['cs.form.' + f] || infoLabels[f] || f) + ':';
    const val = document.createElement('span');
    val.className = 'review-value';
    val.textContent = input.value || '—';
    p.appendChild(lbl);
    p.appendChild(val);
    infoSection.appendChild(p);
  });
  container.appendChild(infoSection);

  /* Request details */
  const detailsSection = document.createElement('div');
  detailsSection.className = 'review-section';
  const detH4 = document.createElement('h4');
  detH4.textContent = 'REQUEST DETAILS';
  detailsSection.appendChild(detH4);
  const inputs = dynamicQuestions.querySelectorAll('input, select, textarea');
  let hasDetails = false;
  inputs.forEach(inp => {
    if (inp.value) {
      hasDetails = true;
      const p = document.createElement('p');
      const lbl = document.createElement('span');
      lbl.className = 'review-label';
      const labelKey = [...SERVICE_QUESTIONS.values()].flat().find(q => q.qid === inp.name);
      lbl.textContent = (labelKey && CS[labelKey.labelKey]) ? CS[labelKey.labelKey] : inp.name;
      lbl.textContent += ':';
      const val = document.createElement('span');
      val.className = 'review-value';
      val.textContent = inp.value;
      p.appendChild(lbl);
      p.appendChild(val);
      detailsSection.appendChild(p);
    }
  });
  if (!hasDetails) {
    const p = document.createElement('p');
    p.className = 'review-value';
    p.textContent = 'No additional details provided.';
    detailsSection.appendChild(p);
  }
  container.appendChild(detailsSection);
}

/* Submit form — POST to backend API, backend sends both emails */
if (csForm) csForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const requestId = generateRequestId();
  const formData = collectFormData();
  csFormState.formData = formData;

  /* Collect dynamic question answers */
  const dynamicAnswers = {};
  dynamicQuestions.querySelectorAll('input, select, textarea').forEach(inp => {
    if (inp.name && inp.value.trim()) dynamicAnswers[inp.name] = inp.value.trim();
  });

  /* Show loading state on button */
  const submitBtn = nextBtn;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Submitting…';
  submitBtn.disabled = true;

  /* Build request details summary */
  const detailsLines = [];
  Object.entries(dynamicAnswers).forEach(([qid, val]) => {
    const labelKey = Object.values(SERVICE_QUESTIONS).flat().find(q => q.qid === qid);
    const label = labelKey ? (CS[labelKey.labelKey] || qid) : qid;
    detailsLines.push(label + ': ' + val);
  });
  if (formData.other && formData.other.trim()) {
    detailsLines.push('Other Request: ' + formData.other.trim());
  }

  try {
    const resp = await fetch('/api/submit-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        services: formData.services,
        fullName: formData.fullName,
        country: formData.country,
        nationality: formData.nationality,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        language: formData.language || 'en',
        requestDetails: detailsLines.join('\n') || 'No additional details provided.',
        dynamicAnswers,
        notes: formData.notes || '',
        other: formData.other || ''
      })
    });

    const data = await resp.json();
    if (data && data.success) {
      showCSuccess(data.requestId || requestId);
    } else {
      /* API failed — fall back to local flow */
      console.warn('API error:', data && data.error);
      showCSuccess(requestId);
    }
  } catch (err) {
    /* Backend not available — graceful local fallback with mailto */
    console.warn('API unavailable:', err.message);
    const subject = encodeURIComponent('New China Services Request — ' + csFormState.selectedServices.join(', ') + ' — ' + formData.fullName);
    const body = encodeURIComponent(formatEmailBody(requestId, formData));
    window.open('mailto:hello@yalla-hack.com?subject=' + subject + '&body=' + body, '_blank');
    showCSuccess(requestId);
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

/* Show success state */
function showCSuccess(requestId) {
  csFormOverlay.classList.remove('open');
  document.body.style.overflow = '';
  requestIdDisplay.textContent = requestId;
  const successRequestIdEl = document.getElementById('successRequestId');
  if (successRequestIdEl) successRequestIdEl.textContent = requestId;
  const successSection = document.getElementById('cs-success');
  if (successSection) {
    successSection.style.display = 'block';
    successSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Collect form data */
function collectFormData() {
  const data = {};
  /* Text inputs, selects, textareas */
  csForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], select, textarea').forEach(inp => {
    if (inp.name) data[inp.name] = inp.value;
  });
  /* Service checkboxes */
  const checked = csForm.querySelectorAll('input[name="services"]:checked');
  data.services = [...checked].map(c => c.value);
  /* Other text */
  if (otherText && otherText.value.trim()) data.other = otherText.value.trim();
  return data;
}

/* Format email body */
function formatEmailBody(requestId, formData) {
  const svcStr = csFormState.selectedServices.join(', ');
  const lines = [];
  lines.push('--------------------------------');
  lines.push('NEW SERVICE REQUEST');
  lines.push('--------------------------------');
  lines.push('');
  lines.push('Request ID:');
  lines.push(requestId);
  lines.push('');
  lines.push('Date & Time:');
  lines.push(new Date().toLocaleString());
  lines.push('');
  lines.push('Selected Service(s):');
  lines.push(svcStr);
  lines.push('');
  lines.push('CLIENT INFORMATION');
  lines.push('');
  lines.push('Full Name:');
  lines.push(formData.fullName || '—');
  lines.push('');
  lines.push('Nationality:');
  lines.push(formData.nationality || '—');
  lines.push('');
  lines.push('Country of Residence:');
  lines.push(formData.country || '—');
  lines.push('');
  lines.push('Email:');
  lines.push(formData.email || '—');
  lines.push('');
  lines.push('Phone / WhatsApp:');
  lines.push(formData.phone || '—');
  lines.push('');
  lines.push('Company:');
  lines.push(formData.company || '—');
  lines.push('');
  lines.push('Preferred Language:');
  lines.push(formData.language || '—');
  lines.push('');
  lines.push('REQUEST DETAILS');
  lines.push('');
  const dynamicInputs = dynamicQuestions.querySelectorAll('input, select, textarea');
  dynamicInputs.forEach(inp => {
    if (inp.value) {
      const labelKey = [...SERVICE_QUESTIONS.values()].flat().find(q => q.qid === inp.name);
      const label = labelKey ? (CS[labelKey.labelKey] || labelKey.qid) : inp.name;
      lines.push(label + ':');
      lines.push(inp.value);
      lines.push('');
    }
  });
  const notes = csForm.querySelector('#additionalNotes');
  if (notes && notes.value.trim()) {
    lines.push('ADDITIONAL NOTES');
    lines.push('');
    lines.push(notes.value.trim());
    lines.push('');
  }
  lines.push('--------------------------------');
  return lines.join('\n');
}

/* Reset form */
function resetCSForm() {
  csForm.reset();
  csFormState.selectedServices = [];
  csFormState.currentStep = 1;
  otherTextWrap.style.display = 'none';
  otherText.value = '';
  csFormOverlay.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const step1 = document.getElementById('step-1');
  if (step1) step1.classList.add('active');
  updateProgress(1);
  prevBtn.style.visibility = 'hidden';
  formNav.style.display = 'flex';
  const successSection = document.getElementById('cs-success');
  if (successSection) successSection.style.display = 'none';
}

if (resetFormBtn) resetFormBtn.addEventListener('click', resetCSForm);
if (successResetBtn) successResetBtn.addEventListener('click', resetCSForm);

/* Apply i18n to new section elements */
function applyCSI18n() {
  const dict = CS_I18N[LANG] || CS_I18N.en;
  $$('[data-i18n-cs]').forEach(el => {
    const key = el.dataset.i18nCs;
    if (dict[key]) el.textContent = dict[key];
  });
  $$('[data-i18n-cs-ph]').forEach(el => {
    const key = el.dataset.i18nCsPh;
    if (dict[key]) el.placeholder = dict[key];
  });
}

/* Add data-i18n-cs attributes to section elements for translation */
function setupCSI18n() {
  const csSection = document.getElementById('china-support');
  if (!csSection) return;
  /* Map elements with data-i18n-cs attribute */
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  setupCSI18n();
  applyCSI18n();
});

/* ESC to close form */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && csFormOverlay && csFormOverlay.classList.contains('open')) {
    closeCSForm();
  }
});

/* Smooth scroll to success section */
const successObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && e.target.id === 'cs-success') {
      e.target.classList.add('reveal', 'in');
    }
  });
}, { threshold: 0.1 });
const csSuccess = document.getElementById('cs-success');
if (csSuccess) successObserver.observe(csSuccess);

/* Update nav active state for china-support */
function updateNavState() {
  const cs = document.getElementById('china-support');
  if (cs && cs.getBoundingClientRect().top <= window.innerHeight * 0.5) {
    $$('#navLinks a').forEach(a => {
      a.style.color = a.getAttribute('href') === '#china-support' ? 'var(--gold-soft)' : '';
    });
  }
}
document.addEventListener('scroll', updateNavState, { passive: true });
