// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.procodeind.com',
  integrations: [sitemap()],
  base: '/',
  // The site used to live under /es/ and /en/; keep those links working.
  redirects: {
    '/es': '/',
    '/en': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
