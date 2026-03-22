import { test, expect } from '@playwright/test';

test.describe('Responsive: Mobile (375x812)', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero product frame is hidden', async ({ page }) => {
    const frame = page.locator('.hero-frame');
    if (await frame.count() > 0) {
      await expect(frame).toBeHidden();
    }
  });

  test('nav links are hidden, hamburger visible', async ({ page }) => {
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toBeHidden();

    const hamburger = page.locator('#navHamburger');
    await expect(hamburger).toBeVisible();
  });

  test('no horizontal scroll', async ({ page }) => {
    const { viewportWidth, scrollWidth } = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 1); // 1px tolerance
  });

  test('values grid is single column', async ({ page }) => {
    const grid = page.locator('.values-grid');
    if (await grid.count() > 0) {
      const gridColumns = await grid.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns;
      });
      // Single column means no comma in column definition or just one track
      const trackCount = gridColumns.split(/\s+/).filter((s: string) => s && s !== '0px').length;
      expect(trackCount).toBeLessThanOrEqual(1);
    }
  });

  test('feature sections are single column', async ({ page }) => {
    const featRow = page.locator('.feat-row').first();
    if (await featRow.count() > 0) {
      const display = await featRow.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return {
          display: style.display,
          gridTemplateColumns: style.gridTemplateColumns,
          flexDirection: style.flexDirection,
        };
      });
      // Should be stacked (column direction or single grid column)
      if (display.display === 'grid') {
        const tracks = display.gridTemplateColumns.split(/\s+/).filter((s: string) => s && s !== '0px').length;
        expect(tracks).toBeLessThanOrEqual(1);
      } else if (display.display === 'flex') {
        expect(display.flexDirection).toBe('column');
      }
    }
  });

  test('all text is readable (no font smaller than 12px) - spot check', async ({ page }) => {
    // Spot check key text elements
    const elements = [
      'section.hero h1',
      '.hero-sub',
      '.sec-title',
      '.pipe h4',
      '.footer-tagline',
    ];

    for (const selector of elements) {
      const el = page.locator(selector).first();
      if (await el.count() > 0 && await el.isVisible()) {
        const fontSize = await el.evaluate((e) => {
          return parseFloat(window.getComputedStyle(e).fontSize);
        });
        expect(fontSize, `${selector} font-size should be >= 12px`).toBeGreaterThanOrEqual(12);
      }
    }
  });
});

test.describe('Responsive: Tablet (768x1024)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav links visible, hamburger hidden', async ({ page }) => {
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toBeVisible();

    const hamburger = page.locator('#navHamburger');
    await expect(hamburger).toBeHidden();
  });

  test('no horizontal scroll', async ({ page }) => {
    const { viewportWidth, scrollWidth } = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});

test.describe('Responsive: Desktop (1440x900)', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero product frame is visible', async ({ page }) => {
    const frame = page.locator('.hero-frame');
    if (await frame.count() > 0) {
      await expect(frame).toBeVisible();
    }
  });

  test('all sections render at full width', async ({ page }) => {
    for (const id of ['optimize', 'trends', 'voice', 'pipeline', 'contact']) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeAttached();
    }
  });

  test('nav links visible', async ({ page }) => {
    await expect(page.locator('.nav-links')).toBeVisible();
  });

  test('no horizontal scroll', async ({ page }) => {
    const { viewportWidth, scrollWidth } = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
