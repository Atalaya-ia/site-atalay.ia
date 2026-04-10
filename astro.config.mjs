// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

const lastModified = {
  '/': '2026-03-22',
  '/blog/': '2026-03-29',
  '/blog/lancamento-atalay-ia/': '2026-03-22',
  '/blog/como-ia-contextual-muda-jornalismo/': '2026-03-20',
  '/blog/pipeline-dados-editoriais/': '2026-03-18',
  '/blog/voz-editorial-agentes/': '2026-03-15',
  '/blog/discover-vs-busca/': '2026-03-12',
  '/blog/manual-redacao-ia/': '2026-03-08',
  '/blog/por-que-audiencia-jornal-cai/': '2026-03-27',
  '/blog/caso-nyt-ia-redacao/': '2026-03-26',
  '/blog/como-levar-ia-para-redacao/': '2026-03-25',
  '/blog/ia-ferramenta-ou-ameaca-jornalismo/': '2026-03-24',
  '/blog/google-discover-trafico-redacoes/': '2026-03-23',
  '/blog/anthropic-libera-mythos-apple-ciberataques/': '2026-04-09',
  '/blog/ai-overviews-google-respostas-erradas-escala/': '2026-04-10',
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
