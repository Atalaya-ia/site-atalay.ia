// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

const lastModified = {
  '/': '2026-03-22',
  '/blog/': '2026-03-24',
  '/blog/lancamento-atalay-ia/': '2026-03-22',
  '/blog/como-ia-contextual-muda-jornalismo/': '2026-03-20',
  '/blog/pipeline-dados-editoriais/': '2026-03-18',
  '/blog/voz-editorial-agentes/': '2026-03-15',
  '/blog/discover-vs-busca/': '2026-03-12',
  '/blog/manual-redacao-ia/': '2026-03-08',
  '/contato/': '2026-03-22',
  '/quem-somos/': '2026-03-22',
  '/privacidade/': '2026-03-22',
  '/seguranca/': '2026-03-25',
  '/termos/': '2026-03-25',
};

export default defineConfig({
  site: 'https://atalayia.com.br',
  integrations: [
    sitemap({
      serialize(item) {
        const path = item.url.replace('https://atalayia.com.br', '');
        if (lastModified[path]) {
          item.lastmod = new Date(lastModified[path] + 'T00:00:00Z').toISOString();
        }
        return item;
      },
    }),
  ],
  build: { assets: '_assets' },
  vite: { plugins: [yaml()] },
});
