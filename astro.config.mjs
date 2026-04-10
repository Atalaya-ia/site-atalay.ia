// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

const lastModified = {
  '/': '2026-04-10',
  '/blog/': '2026-04-10',
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
  '/blog/o-que-e-eeat/': '2026-03-29',
  '/blog/o-que-e-ymyl/': '2026-03-29',
  '/blog/google-discover-core-update-fevereiro-2026/': '2026-03-29',
  '/blog/google-spam-update-reescrita-titulos-ia/': '2026-03-29',
  '/blog/anthropic-vaza-codigo-claude-code/': '2026-04-01',
  '/blog/anthropic-conter-vazamento-claude-code/': '2026-04-02',
  '/blog/nyt-rompe-colaborador-ia-resenha/': '2026-04-02',
  '/blog/llms-txt-arquitetura-marca-fonte-ia/': '2026-04-02',
  '/blog/bimbofication-google-trends-kristi-noem/': '2026-04-02',
  '/blog/anthropic-libera-mythos-apple-ciberataques/': '2026-04-09',
  '/blog/ai-overviews-google-respostas-erradas-escala/': '2026-04-10',
  '/blog/chatbots-ia-bajulacao-sycophancy-stanford/': '2026-04-10',
  '/blog/ia-muda-redacoes-2025-nao-aposenta-jornalista/': '2026-04-10',
  '/autor/bruno-lopes/': '2026-04-10',
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
        // Prioridade e frequência por tipo de página
        if (path === '/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (path === '/blog/') {
          item.changefreq = 'daily';
          item.priority = 0.9;
        } else if (path.startsWith('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
  build: { assets: '_assets' },
  vite: { plugins: [yaml()] },
});
