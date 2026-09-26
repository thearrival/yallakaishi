# Yalla Kaishi — 亚拉凯世 · Official Website

Cross-border business services website for **Yalla Kaishi** — a Guangzhou-based
firm bridging China and the GCC (Saudi Arabia, UAE and the wider Gulf).

**Live:** https://yallakaishi.com/

## Stack

- **Astro 7** static site, zero runtime JS beyond small inline behaviours
- **Trilingual**: English (`/`), 中文 (`/zh/…`), العربية (`/ar/…`, RTL)
- TypeScript strict, `@astrojs/check` clean, Vitest unit tests
- Design system in plain CSS (`src/styles/*.css`), system fonts only — no
  third-party font CDN (China accessibility + privacy)
- Content collections for insights, typed data modules for everything else

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # static build → dist/
npm run preview    # serve dist/ locally

npm run typecheck  # astro check (0 errors / 0 warnings)
npm test           # vitest
npm run verify     # i18n key integrity + internal link check (needs dist/)
npm run format     # prettier --write
npm run ci         # format:check + typecheck + test + build + verify
```

## Structure

```
src/
├── i18n/            # locales, dictionaries (en/zh/ar), t() lookup
├── data/            # typed content: services, industries, cases, FAQ…
├── content/         # insights collection (9 articles × 3 locales)
├── components/      # Icon, Header, Footer, ContactForm, SEO, cards…
├── views/           # one view per page type
├── pages/
│   ├── [...path].astro   # catch-all router (locale × route)
│   ├── sitemap.xml.ts    # hreflang-aware sitemap
│   └── robots.txt.ts
└── styles/          # tokens, base, components, sections
scripts/             # verify-i18n.mjs, verify-links.mjs
public/              # CNAME, favicon.svg, og-image.png, china-support.html
```

## i18n rules

- Every translated string is `Record<Locale, string>` — a missing translation
  fails the build.
- Keys live in `src/i18n/ui-core.ts` (chrome) and `ui-pages.ts` (page copy),
  merged into `t(key, locale, vars?)`.
- `npm run verify` fails on unknown keys, dead keys, or content problems.

## Routing

Locale prefix decides the language: no prefix = English, `/zh/…`, `/ar/…`.
Trailing slashes are canonical (`trailingSlash: 'always'`, `build.format:
'directory'`) so GitHub Pages serves directory indexes without a redirect hop.

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and publishes `dist/`
to GitHub Pages.

**Custom domain:** `public/CNAME` → `yallakaishi.com`. HTTPS is issued by
GitHub once the domain is verified.

© 2026 Yalla Kaishi · 亚拉凯世 · Guangzhou, China
