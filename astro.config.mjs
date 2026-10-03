// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeCallouts from './src/lib/rehype-callouts.mjs';

// Standard: eget domene i rotmappen. For GitHub Pages uten eget domene settes
// SITE_URL=https://fumbleforce.github.io og BASE_PATH=/boligbutler i byggejobben.
const SITE_URL = process.env.SITE_URL || 'https://www.boligbutler.no';
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');

// Lenkene i koden er skrevet fra rotmappen (/guider/...). Når siden ligger i en
// undermappe, legges undermappen til i alle interne lenker etter bygging.
function basePath() {
  return {
    name: 'base-path',
    hooks: {
      'astro:build:done': ({ dir }) => {
        if (!BASE) return;
        const root = fileURLToPath(dir);
        const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
        const prefix = (v) => (v.startsWith(BASE + '/') ? v : BASE + v);
        for (const f of walk(root)) {
          if (!/\.(html|css|txt|xml)$/.test(f)) continue;
          let s = fs.readFileSync(f, 'utf8');
          s = s.replace(/(href|src|action)="(\/(?!\/)[^"]*)"/g, (_, a, v) => `${a}="${prefix(v)}"`);
          s = s.replace(/url\((['"]?)(\/(?!\/)[^)'"]+)\1\)/g, (_, q, v) => `url(${q}${prefix(v)}${q})`);
          fs.writeFileSync(f, s);
        }
      },
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  base: BASE || undefined,
  trailingSlash: 'always',
  integrations: [sitemap(), basePath()],
  build: { format: 'directory' },
  markdown: { rehypePlugins: [rehypeCallouts] },
});
