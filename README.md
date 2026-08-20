# Yalla Kaishi — 亚拉凯世 · Official Website

Professional website for **Yalla Kaishi** — a Guangzhou-based cross-border business
services company bridging China and the GCC (Saudi Arabia, UAE and the wider Gulf).

🌐 **Live:** https://yallakaishi.com/

## What we do

Six services, one bridge — all bilingual (中文 / EN / العربية):

1. Compliance Operations
2. Regulatory Translation (AR ↔ ZH ↔ EN)
3. Market Entry & Licensing (MISA / SAGIA)
4. Partner Due Diligence
5. Technology & Tools
6. Training & Workshops

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

**Custom domain:** the `CNAME` file points at `yallakaishi.com`. The site is served
from GitHub Pages IP `185.199.108.153`. HTTPS is enabled automatically once GitHub
finishes issuing the certificate for the domain.

© 2026 Yalla Kaishi · 亚拉凯世 · Guangzhou, China