# Yalla Kaishi — 亚拉凯世 · Official Website

Live site for **Yalla Kaishi Consultant Co., Ltd. (广州亚拉凯世咨询有限公司)** — a Guangzhou-based compliance operations platform bridging China and the GCC.

🌐 **Live:** https://thearrival.github.io/yallakaishi/

## Tech

- Vanilla HTML/CSS/JS — zero build step, zero dependencies
- Canvas particle network (Guangzhou ⇄ Riyadh bridge) in the hero
- Full EN / 中文 language toggle
- Scroll reveals, animated counters, tilt cards, glassmorphism, web3-style visuals

## Structure

```
├── index.html      # all sections (bilingual via data-i18n)
├── css/style.css   # design system + animations
└── js/app.js       # canvas, i18n, reveals, counters, tilt
```

## Deploy

Push to `main` — GitHub Pages serves the repo root automatically.

**Custom domain:** the `CNAME` file points at `yallakaishi.com`. When the domain
is registered, set the DNS record `A → 185.199.108.153` (also .154/.155/.156)
or `CNAME → thearrival.github.io` and the site will serve on the custom domain.

© 2026 Yalla Kaishi Consultant Co., Ltd. — 筹备注册中