# Yalla Kaishi 开始 website

Bilingual (English / 中文) one-page website for Yalla Kaishi. Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `css/styles.css` | All styling |
| `js/config.js` | **Your settings**: email, WeChat, WhatsApp, form endpoint, reply time |
| `js/i18n.js` | All English and Chinese text |
| `js/main.js` | Language switch and contact form |
| `assets/logo.png` | Logo with transparent background |
| `assets/logo-original.png` | Your original logo image |
| `assets/favicon.svg` | Browser tab icon |

## Before you publish

1. Open `js/config.js` and fill in `email`, `wechat` and `whatsapp`. Empty values are hidden.
2. Make the contact form work (pick one):
   - **Best:** create a free form at formspree.io and paste its URL into `formEndpoint`.
   - **Simple:** leave `formEndpoint` empty and set `email`. The form then opens the visitor's email app.
3. Ask Mona to proofread the Chinese text in `js/i18n.js`.
4. Check the prices in `index.html` and `js/i18n.js` (they are estimates to test with real clients).
5. Ask a designer for an SVG version of the logo when possible.

## Publish on GitHub Pages (free)

1. Create a new repository on GitHub and upload all these files (keep the folders).
2. Go to **Settings > Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
3. After a minute the site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.
4. Custom domain: add it under Settings > Pages and create the DNS records GitHub shows you.

Or with git:

```bash
git init
git add .
git commit -m "Yalla Kaishi website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Notes

- The page remembers the visitor's language choice, and defaults to Chinese for Chinese browsers.
- China access: Google Fonts can be slow or blocked in mainland China. For Chinese visitors, host the fonts yourself or remove the Google Fonts links in `index.html` (the page falls back to system fonts).
- Mainland-China hosting with a custom `.cn` domain needs an ICP filing. GitHub Pages is fine for international visitors.
- This site is not legal or tax advice; check your business registration and advertising rules.
