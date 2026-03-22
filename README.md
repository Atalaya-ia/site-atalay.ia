# atalay.ia -- Landing Page

Marketing site for [Atalaya.IA](https://atalayia.com.br) -- editorial intelligence for newsrooms.

## Stack

- **Astro 6** -- static site generator
- **Sveltia CMS** -- visual content editor at `/admin`
- **GitHub Pages** -- hosting
- **GitHub Actions** -- CI/CD (build, test, deploy)
- **Playwright** -- E2E testing

## Development

### Setup

```bash
npm install
npx playwright install chromium
```

### Dev server

```bash
npm run dev
```

Opens at `http://localhost:4321`.

### Build

```bash
npm run build
npm run preview
```

### Tests

```bash
npm test              # all 71 tests
npm run test:smoke    # smoke tests only
npm run test:ui       # interactive UI mode
```

**Test suites:**

| File | What it covers |
|------|---------------|
| `tests/smoke.spec.ts` | Homepage loads, title, nav, hero, footer, admin page, favicon, robots.txt, sitemap |
| `tests/sections.spec.ts` | Every section renders with expected content (Nav, Hero, Proof Bar, Values, Optimize, Trends, Voice, Pipeline, CTA, Footer) |
| `tests/interactions.spec.ts` | Nav scroll class, hamburger menu toggle, smooth scroll, field card accept, trend card select, toast show/hide |
| `tests/responsive.spec.ts` | Mobile (375px), Tablet (768px), Desktop (1440px) layout checks, no horizontal scroll, font readability |
| `tests/seo.spec.ts` | Title, meta description, Open Graph, Twitter cards, canonical URL, robots.txt, sitemap XML, image alt text, anchor integrity, lang attribute |

## Project Structure

```
site-atalay.ia/
├── public/
│   ├── admin/              # Sveltia CMS (config.yml + index.html)
│   ├── CNAME               # Custom domain: atalayia.com.br
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── hero-art.jpeg
│   ├── robots.txt
│   └── uploads/            # CMS media uploads
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ProofBar.astro
│   │   ├── Values.astro
│   │   ├── FeatureSection.astro
│   │   ├── Pipeline.astro
│   │   ├── CtaSection.astro
│   │   ├── Footer.astro
│   │   ├── FeatureIcon.astro
│   │   ├── Stats.astro
│   │   └── sidebars/
│   │       ├── OptimizeSidebar.astro
│   │       ├── TrendsSidebar.astro
│   │       └── VoiceSidebar.astro
│   ├── content/
│   │   └── landing.yaml    # CMS-editable content
│   ├── layouts/
│   │   └── Base.astro      # HTML shell, meta tags, fonts, scripts
│   ├── pages/
│   │   └── index.astro     # Page composition
│   └── styles/
│       └── global.css      # All styles (tokens, components, responsive)
├── tests/
│   ├── smoke.spec.ts
│   ├── sections.spec.ts
│   ├── interactions.spec.ts
│   ├── responsive.spec.ts
│   └── seo.spec.ts
├── .github/workflows/
│   └── deploy.yml          # Build -> Test -> Deploy pipeline
├── astro.config.mjs
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Content Editing

1. Go to https://atalayia.com.br/admin/
2. Log in with GitHub
3. Edit content
4. Sveltia commits to the repo and triggers auto-deploy

## Deployment

Push to `main` triggers the GitHub Actions pipeline:

1. **Build** -- `npm run build` generates static files to `dist/`
2. **Test** -- Playwright runs 71 E2E tests against the built site
3. **Deploy** -- Uploads to GitHub Pages (only if tests pass)

## Domain

- **Domain:** atalayia.com.br (GoDaddy DNS pointing to GitHub Pages)
- **HTTPS:** enforced via GitHub Pages
- **OAuth proxy:** Cloud Run (`decap-oauth-proxy`) for CMS authentication
