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
    'ct.addr':'Tianhe District, Guangzhou, China · 中国广州天河','ct.resp':'Response within 24 hours',
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
    'ct.addr':'中国广州天河区 · Tianhe District, Guangzhou','ct.resp':'24小时内回复',
    'ct.fname':'您的姓名','ct.fnameph':'姓名 / Your name','ct.femail':'电子邮箱','ct.fcomp':'公司','ct.fcompph':'公司名称 / Company name','ct.fmsg':'您的需求','ct.fmsgph':'您计划进入哪个市场？何时？/ Which market are you entering?','ct.send':'发送消息','ct.ok':'感谢您的来信——我们将在24小时内回复。',
    'foot.tagline':'连接中国与海湾的跨境商业服务平台 — Cross-border business services connecting China and the Gulf.','foot.nav':'导航','foot.legal':'法律声明','foot.disclaimer':'亚拉凯世提供跨境商业服务，不提供法律意见。监管解读均通过与持牌律师事务所合作完成。','foot.hq':'总部'
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