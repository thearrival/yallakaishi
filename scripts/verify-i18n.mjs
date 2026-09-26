#!/usr/bin/env node
/**
 * i18n guard-rail.
 *
 * 1. Every `t('key', …)` used anywhere in src must exist in the dictionaries.
 * 2. Every dictionary key must be used somewhere (dead keys rot).
 * 3. Every insight article must declare a locale that actually exists.
 *
 * (TypeScript already guarantees each key carries en/zh/ar — this script
 * catches typos in *key names*, which `satisfies` cannot, and dead entries.)
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = join(root, 'src');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const dictFiles = [join(src, 'i18n', 'ui-core.ts'), join(src, 'i18n', 'ui-pages.ts')];

const defined = new Set();
for (const file of dictFiles) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(/^\s{2}'([^']+)':\s*\{/gm)) defined.add(m[1]);
}

if (defined.size === 0) {
  console.error('✗ no dictionary keys found — parser broken?');
  process.exit(1);
}

const codeFiles = walk(src).filter(
  (f) =>
    ['.astro', '.ts'].includes(extname(f)) && !f.includes('ui-core') && !f.includes('ui-pages'),
);

// Keys can be referenced directly (`t('key')`) or as data (`label: 'key'`),
// so the whole source is searched, not just t() calls.
const typos = [];
const corpus = [];
for (const file of codeFiles) {
  const text = readFileSync(file, 'utf8');
  corpus.push(text);
  for (const m of text.matchAll(/\bt\(\s*'([^']+)'/g)) {
    if (!defined.has(m[1])) typos.push(`${relative(root, file)} → '${m[1]}'`);
  }
}
const blob = corpus.join('\n');
const used = new Set([...defined].filter((k) => blob.includes(`'${k}'`)));

const unused = [...defined].filter((k) => !used.has(k));

// ── content checks ────────────────────────────────────────────────
const locales = ['en', 'zh', 'ar'];
const contentDir = join(src, 'content', 'insights');
const contentErrors = [];
let articles = 0;
for (const dir of readdirSync(contentDir)) {
  if (!locales.includes(dir)) {
    contentErrors.push(`unexpected locale folder: content/insights/${dir}`);
    continue;
  }
  for (const file of readdirSync(join(contentDir, dir))) {
    articles++;
    const text = readFileSync(join(contentDir, dir, file), 'utf8');
    const fm = text.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) {
      contentErrors.push(`missing frontmatter: content/insights/${dir}/${file}`);
      continue;
    }
    const loc = fm[1].match(/^locale:\s*(\w+)/m);
    if (!loc || loc[1] !== dir) {
      contentErrors.push(`locale mismatch: content/insights/${dir}/${file}`);
    }
    for (const field of ['title', 'excerpt', 'date', 'category']) {
      if (!new RegExp(`^${field}:`, 'm').test(fm[1])) {
        contentErrors.push(`missing '${field}': content/insights/${dir}/${file}`);
      }
    }
    if (text.trim().length < 400) {
      contentErrors.push(`suspiciously short body: content/insights/${dir}/${file}`);
    }
  }
}

let failed = false;

if (typos.length) {
  failed = true;
  console.error(`\n✗ ${typos.length} unknown translation key(s):`);
  for (const t of typos) console.error('   ' + t);
}

if (unused.length) {
  failed = true;
  console.error(`\n✗ ${unused.length} unused dictionary key(s) (dead weight):`);
  for (const k of unused) console.error('   ' + k);
}

if (contentErrors.length) {
  failed = true;
  console.error(`\n✗ ${contentErrors.length} content problem(s):`);
  for (const e of contentErrors) console.error('   ' + e);
}

if (failed) process.exit(1);

console.log(
  `✓ i18n OK — ${defined.size} keys × 3 locales, ${used.size} in use, ${articles} articles across ${locales.length} locales`,
);
