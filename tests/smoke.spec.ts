import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads with 200 status', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('title contains "Atalaya"', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Atalaya/);
  });

  test('nav is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav#nav')).toBeVisible();
  });

  test('hero section exists with h1', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('section.hero');
    await expect(hero).toBeVisible();
    await expect(hero.locator('h1')).toBeVisible();
  });

  test('footer exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    // Allow the page to settle
    await page.waitForTimeout(1000);
    expect(errors).toEqual([]);
  });

  test('admin page loads (/admin/)', async ({ page }) => {
    const response = await page.goto('/admin/');
    expect(response?.status()).toBe(200);
    // Sveltia CMS overrides the title on load
    await expect(page).toHaveTitle(/Sveltia CMS|Admin/);
  });

  test('favicon.svg exists', async ({ request }) => {
    const response = await request.get('/favicon.svg');
    expect(response.status()).toBe(200);
  });

  test('robots.txt exists and allows crawling', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Allow: /');
  });

  test('sitemap-index.xml exists', async ({ request }) => {
    const response = await request.get('/sitemap-index.xml');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('<?xml');
    expect(text).toContain('sitemapindex');
  });
});
