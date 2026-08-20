# Yalla Kaishi — 亚拉凯世 · Official Website

Live site for **Yalla Kaishi Consultant Co., Ltd. (广州亚拉凯世咨询有限公司)** — a Guangzhou-based compliance operations platform bridging China and the GCC.

🌐 **Live:** https://yallakaishi.com/

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

**Custom domain:** the `CNAME` file points at `yallakaishi.com`. The domain is
currently on Hostinger DNS parking with two A records:

| Record | Value | Required? |
|--------|-------|-----------|
| A | `185.199.108.153` (GitHub Pages) | ✅ keep |
| A | `2.57.91.91` (Hostinger parking) | ❌ remove — blocks HTTPS |

Once the stray record is removed (add `185.199.108.154/.155/.156` too if desired),
GitHub auto-issues the HTTPS certificate and the site becomes fully https.

© 2026 Yalla Kaishi Consultant Co., Ltd. — 筹备注册中