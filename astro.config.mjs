// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeCallouts from './src/lib/rehype-callouts.mjs';

// TODO: bytt til endelig domene før lansering
export default defineConfig({
  site: 'https://www.boligbutler.no',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
  markdown: { rehypePlugins: [rehypeCallouts] },
});
