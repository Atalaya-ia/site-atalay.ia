// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://atalaya-ia.github.io',
  base: '/site-atalay.ia',
  integrations: [sitemap()],
  build: { assets: '_assets' },
  vite: { plugins: [yaml()] },
});
