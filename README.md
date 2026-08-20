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
on **Hostinger DNS parking** with two A records, so traffic round-robins
between two servers:

| Record | Value | Effect |
|--------|-------|--------|
| A | `185.199.108.153` (GitHub Pages) | ✅ serves the real site |
| A | `2.57.91.91` (Hostinger parking) | ❌ serves a generic parked page to ~50% of visitors |

**Required fix (Hostinger hPanel → Domains → DNS / Zone editor):**
1. Delete the `A` record pointing to `2.57.91.91`
2. Keep the `A` record pointing to `185.199.108.153` (optionally also add
   `.154`, `.155`, `.156`)
3. Save and wait for propagation (~1h)

Once the stray record is gone, GitHub auto-issues the HTTPS certificate
(`https://yallakaishi.com` will work) and 100% of traffic reaches the site.

© 2026 Yalla Kaishi Consultant Co., Ltd. — 筹备注册中