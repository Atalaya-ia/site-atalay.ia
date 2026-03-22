# Atalay.ia — Landing Page

Marketing site for [Atalay.ia](https://atalayia.com.br) — inteligência editorial para redações.

## Pages

| Rota | Descrição |
|------|-----------|
| `/` | Landing page (hero, proof bar, values, features, pipeline, CTA) |
| `/blog` | Blog (featured post + grid, filtros por categoria) |
| `/contato` | Formulário de contato (demo request) |
| `/quem-somos` | Sobre a empresa |
| `/privacidade` | Política de Privacidade (LGPD) |
| `/termos` | Termos de Uso |
| `/seguranca` | Práticas de Segurança |
| `/admin` | CMS visual (Sveltia CMS, login GitHub) |

## Stack

- **Astro 6** — static site generator (requer Node 22+)
- **Sveltia CMS** — editor visual em `/admin`
- **GitHub Pages** — hosting
- **GitHub Actions** — CI/CD (build → test → deploy)
- **Playwright** — 71 testes E2E
- **Cloud Run** — OAuth proxy para CMS

## Desenvolvimento

### Setup

```bash
npm install
npx playwright install chromium
```

### Dev server

```bash
npm run dev
```

Abre em `http://localhost:4321`.

### Build

```bash
npm run build
npm run preview
```

### Testes

```bash
npm test              # todos os 71 testes
npm run test:smoke    # smoke tests
npm run test:ui       # modo interativo
```

**Suites de teste:**

| Suite | Testes | Cobertura |
|-------|--------|-----------|
| `smoke` | 10 | Health checks: página, título, nav, hero, footer, favicon, robots, sitemap |
| `sections` | 32 | Cada seção renderiza com conteúdo esperado |
| `interactions` | 7 | Nav scroll, hamburger, smooth scroll, field cards, trend cards, toast |
| `responsive` | 12 | Mobile 375px, tablet 768px, desktop 1440px |
| `seo` | 10 | Meta tags, OG, canonical, robots, sitemap, alt text, lang |

## Estrutura

```
site-atalay.ia/
├── public/
│   ├── admin/                 # Sveltia CMS (config.yml + index.html)
│   ├── CNAME                  # atalayia.com.br
│   ├── favicon.ico            # 16/32/48px
│   ├── favicon-32.png         # PNG para abas do browser
│   ├── apple-touch-icon.png   # iOS 180px
│   ├── logom.png              # Logo laranja 942×942px
│   ├── logom.webp             # Logo original
│   ├── hero-art.jpeg          # Ilustração do hero (onboarding)
│   ├── robots.txt
│   └── uploads/               # Imagens do CMS
├── src/
│   ├── components/
│   │   ├── Nav.astro          # Nav fixa + dropdown Produto + hamburger mobile
│   │   ├── Hero.astro         # Hero com product frame (CMS + sidebar)
│   │   ├── ProofBar.astro     # Testimonials scroll infinito
│   │   ├── Values.astro       # 3 cards FIG com SVGs isométricos
│   │   ├── FeatureSection.astro # Seção reutilizável (Optimize/Trends/Voice)
│   │   ├── FeatureIcon.astro  # Mapa de ícones SVG
│   │   ├── Pipeline.astro     # 4 steps "Dados primeiro"
│   │   ├── CtaSection.astro   # CTA com 2 botões
│   │   ├── Footer.astro       # Footer 4 colunas
│   │   └── sidebars/
│   │       ├── OptimizeSidebar.astro
│   │       ├── TrendsSidebar.astro
│   │       └── VoiceSidebar.astro
│   ├── content/
│   │   └── landing.yaml       # Conteúdo editável via CMS
│   ├── layouts/
│   │   └── Base.astro         # HTML shell, meta tags, fonts, scripts
│   ├── pages/
│   │   ├── index.astro        # Landing page
│   │   ├── blog.astro         # Blog
│   │   ├── contato.astro      # Contato
│   │   ├── quem-somos.astro   # Quem somos
│   │   ├── privacidade.astro  # Privacidade
│   │   ├── termos.astro       # Termos de uso
│   │   └── seguranca.astro    # Segurança
│   └── styles/
│       └── global.css         # Todos os estilos (tokens, componentes, responsive)
├── oauth-proxy/
│   ├── server.js              # OAuth proxy (Node.js, Cloud Run)
│   ├── Dockerfile
│   └── package.json
├── tests/                     # Playwright E2E
├── .github/workflows/
│   └── deploy.yml             # Build → Test → Deploy
├── astro.config.mjs
├── playwright.config.ts
└── package.json
```

## Edição de conteúdo (CMS)

1. Acesse https://atalayia.com.br/admin/
2. Faça login com GitHub
3. Edite o conteúdo
4. Sveltia faz commit → deploy automático (~2 min)

## Deploy

Push para `main` dispara o pipeline:

1. **Build** — `npm run build` gera arquivos estáticos em `dist/`
2. **Test** — Playwright roda 71 testes E2E
3. **Deploy** — GitHub Pages (só se os testes passarem)

## Domínio e infra

- **Domínio:** atalayia.com.br (GoDaddy DNS → GitHub Pages)
- **HTTPS:** Let's Encrypt via GitHub Pages
- **OAuth:** Cloud Run `decap-oauth-proxy` (southamerica-east1)
- **GitHub OAuth App:** `Atalaya CMS` (Client ID: `Ov23lioJj4ir08WzmyQd`)

## Design

- **Cor principal:** `#c06a42` (laranja)
- **Fontes:** DM Sans (corpo), Instrument Serif (títulos), JetBrains Mono (números)
- **Dark theme only**
- **Referência:** `docs/atalayia-landing-v10.html` no repo principal
- **Inspiração:** linear.app
