#!/usr/bin/env node
/**
 * Post-build link integrity check.
 *
 * Collects every internal href/src emitted into dist/ and asserts the target
 * file exists. Catches the class of bug that made the v2 site return 404s for
 * its own navigation.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

if (!existsSync(dist)) {
  console.error('✗ dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

/** Map a URL path to the file GitHub Pages would serve. */
function resolveUrl(urlPath) {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return join(dist, 'index.html');
  const rel = clean.replace(/^\/+/, '');
  const direct = join(dist, rel);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  const asDir = join(dist, rel, 'index.html');
  if (existsSync(asDir)) return asDir;
  const withHtml = join(dist, `${rel}.html`);
  if (existsSync(withHtml)) return withHtml;
  const notFound = join(dist, '404.html');
  if (existsSync(notFound)) return notFound;
  return null;
}

const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));
const assets = new Set(walk(dist));
const missing = [];
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const refs = new Set();

  for (const m of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) refs.add(m[1]);
  for (const m of html.matchAll(/content="([^"]+)"/g)) {
    if (/^https:\/\/yallakaishi\.com\//.test(m[1])) refs.add(m[1]);
  }

  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/.test(ref)) continue;
    if (/\{|\}|<%/.test(ref)) continue;
    checked++;

    let target = ref;
    if (target.startsWith('https://yallakaishi.com'))
      target = target.slice('https://yallakaishi.com'.length);
    if (!target.startsWith('/')) {
      // document-relative
      const base = posix.dirname(relative(dist, file).split('\\').join('/'));
      target = posix.join('/', base === '.' ? '' : base, target);
    }
    if (!target.startsWith('/')) target = '/' + target;

    const resolved = resolveUrl(target);
    if (!resolved) {
      missing.push(`${relative(dist, file)} → ${ref}`);
      continue;
    }
    // Hash-only jumps must exist in the same document.
    if (ref.startsWith('#')) {
      const id = ref.slice(1);
      if (id && !new RegExp(`id="${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(html)) {
        missing.push(`${relative(dist, file)} → missing #${id}`);
      }
    }
  }
}

// Anchor targets across pages (href="/path/#id").
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#]*#([^"]+))"/g)) {
    const [, full, id] = m;
    if (/^https?:|^mailto:/.test(full)) continue;
    const path = full.split('#')[0];
    const resolved = resolveUrl(path);
    checked++;
    if (!resolved) {
      missing.push(`${relative(dist, file)} → ${full}`);
      continue;
    }
    if (resolved.endsWith('.html')) {
      const target = readFileSync(resolved, 'utf8');
      if (!new RegExp(`id="${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(target)) {
        missing.push(`${relative(dist, file)} → missing #${id} in ${relative(dist, resolved)}`);
      }
    }
  }
}

if (missing.length) {
  console.error(`✗ ${missing.length} broken internal link(s) (of ${checked} checked):`);
  for (const m of [...new Set(missing)]) console.error('   ' + m);
  process.exit(1);
}

console.log(`✓ links OK — ${checked} internal references across ${htmlFiles.length} pages`);
console.log(`✓ ${assets.size} files in dist/`);
