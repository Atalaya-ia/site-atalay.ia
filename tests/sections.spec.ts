import { test, expect } from '@playwright/test';

test.describe('All sections render', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Nav', () => {
    test('logo text "atalay.ia" is present', async ({ page }) => {
      const logo = page.locator('.nav-wm');
      await expect(logo).toBeVisible();
      await expect(logo).toContainText('atalay');
      await expect(logo.locator('.nav-wm-ia')).toContainText('.ia');
    });

    test('hamburger button exists', async ({ page }) => {
      await expect(page.locator('#navHamburger')).toBeAttached();
    });

    test('CTA button exists', async ({ page }) => {
      await expect(page.locator('nav .nav-cta')).toBeAttached();
    });
  });

  test.describe('Hero', () => {
    test('badge is visible', async ({ page }) => {
      await expect(page.locator('.hero-badge')).toBeVisible();
    });

    test('h1 text is present', async ({ page }) => {
      const h1 = page.locator('section.hero h1');
      await expect(h1).toBeVisible();
      await expect(h1).toContainText('inteligencia editorial');
    });

    test('subtitle is present', async ({ page }) => {
      await expect(page.locator('.hero-sub')).toBeVisible();
    });
  });

  test.describe('Proof bar', () => {
    test('has proof-card elements', async ({ page }) => {
      const cards = page.locator('.proof-card');
      expect(await cards.count()).toBeGreaterThanOrEqual(6);
    });

    test('stars are visible', async ({ page }) => {
      const stars = page.locator('.proof-card-stars');
      expect(await stars.count()).toBeGreaterThanOrEqual(1);
    });
  });

  test.describe('Values', () => {
    test('3 value cards exist', async ({ page }) => {
      const vals = page.locator('.val');
      await expect(vals).toHaveCount(3);
    });

    test('FIG labels are present', async ({ page }) => {
      const figs = page.locator('.val-fig');
      await expect(figs).toHaveCount(3);
      await expect(figs.nth(0)).toContainText('FIG');
    });

    test('each value card has an SVG', async ({ page }) => {
      const svgs = page.locator('.val-svg svg');
      await expect(svgs).toHaveCount(3);
    });
  });

  test.describe('Feature Optimize (id="optimize")', () => {
    test('section exists with correct id', async ({ page }) => {
      await expect(page.locator('#optimize')).toBeAttached();
    });

    test('header h2 is present', async ({ page }) => {
      const h2 = page.locator('#optimize .feat-header h2');
      await expect(h2).toBeVisible();
    });

    test('stats grid has 3 stats', async ({ page }) => {
      const stats = page.locator('#optimize .feat-stat');
      await expect(stats).toHaveCount(3);
    });

    test('feat-items are present', async ({ page }) => {
      const items = page.locator('#optimize .feat-item');
      expect(await items.count()).toBeGreaterThanOrEqual(4);
    });

    test('sidebar has field cards', async ({ page }) => {
      const cards = page.locator('#optimize .fc');
      expect(await cards.count()).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe('Feature Trends (id="trends")', () => {
    test('section exists with correct id', async ({ page }) => {
      await expect(page.locator('#trends')).toBeAttached();
    });

    test('header h2 is present', async ({ page }) => {
      const h2 = page.locator('#trends .feat-header h2');
      await expect(h2).toBeVisible();
    });

    test('stats are present', async ({ page }) => {
      const stats = page.locator('#trends .feat-stat');
      await expect(stats).toHaveCount(3);
    });

    test('trend cards exist in sidebar', async ({ page }) => {
      const tcs = page.locator('#trends .tc');
      expect(await tcs.count()).toBeGreaterThanOrEqual(2);
    });
  });

  test.describe('Feature Voice (id="voice")', () => {
    test('section exists with correct id', async ({ page }) => {
      await expect(page.locator('#voice')).toBeAttached();
    });

    test('header h2 is present', async ({ page }) => {
      const h2 = page.locator('#voice .feat-header h2');
      await expect(h2).toBeVisible();
    });

    test('voice profile card exists', async ({ page }) => {
      await expect(page.locator('.vp-card').first()).toBeAttached();
    });

    test('wizard steps exist', async ({ page }) => {
      const steps = page.locator('.wiz-step');
      expect(await steps.count()).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe('Pipeline (id="pipeline")', () => {
    test('section exists', async ({ page }) => {
      await expect(page.locator('#pipeline')).toBeAttached();
    });

    test('4 pipe cards with numbers 01-04', async ({ page }) => {
      const pipes = page.locator('#pipeline .pipe');
      await expect(pipes).toHaveCount(4);

      await expect(page.locator('#pipeline .pipe-num').nth(0)).toHaveText('01');
      await expect(page.locator('#pipeline .pipe-num').nth(1)).toHaveText('02');
      await expect(page.locator('#pipeline .pipe-num').nth(2)).toHaveText('03');
      await expect(page.locator('#pipeline .pipe-num').nth(3)).toHaveText('04');
    });
  });

  test.describe('CTA (id="contact")', () => {
    test('section exists', async ({ page }) => {
      await expect(page.locator('#contact')).toBeAttached();
    });

    test('h2 is present', async ({ page }) => {
      await expect(page.locator('#contact h2')).toBeVisible();
    });

    test('2 buttons exist', async ({ page }) => {
      const buttons = page.locator('#contact .cta-actions a');
      await expect(buttons).toHaveCount(2);
    });
  });

  test.describe('Footer', () => {
    test('brand name is present', async ({ page }) => {
      const brand = page.locator('.footer-name');
      await expect(brand).toBeVisible();
      await expect(brand).toContainText('atalay');
    });

    test('3 column sections (Produto, Empresa, Legal)', async ({ page }) => {
      const cols = page.locator('.footer-col');
      await expect(cols).toHaveCount(3);

      const titles = page.locator('.footer-col-title');
      await expect(titles.nth(0)).toHaveText('Produto');
      await expect(titles.nth(1)).toHaveText('Empresa');
      await expect(titles.nth(2)).toHaveText('Legal');
    });

    test('copyright text is present', async ({ page }) => {
      const copy = page.locator('.footer-copy');
      await expect(copy).toContainText('2026');
      await expect(copy).toContainText('ATALAYIA');
    });
  });
});
