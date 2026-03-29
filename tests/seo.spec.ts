import { test, expect } from '@playwright/test';

test.describe('SEO checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page has correct title tag', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('Atalay.ia');
  });

  test('meta description exists and is not empty', async ({ page }) => {
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(10);
  });

  test('Open Graph tags present', async ({ page }) => {
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();

    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();

    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
    expect(ogType).toBe('website');

    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    expect(ogUrl).toContain('atalayia.com.br');

    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();
  });

  test('Twitter card tags present', async ({ page }) => {
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBeTruthy();

    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
    expect(twitterTitle).toBeTruthy();
  });

  test('canonical URL is correct', async ({ page }) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toMatch(/^https:\/\/atalayia\.com\.br\/?$/);
  });

  test('robots.txt allows crawling', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Allow: /');
    expect(text).toContain('Sitemap:');
  });

  test('sitemap-index.xml exists and is valid XML', async ({ request }) => {
    const response = await request.get('/sitemap-index.xml');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('<?xml');
    expect(text).toContain('sitemapindex');
    expect(text).toContain('<loc>');
  });

  test('all images have alt text', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      const src = await images.nth(i).getAttribute('src');
      expect(alt, `Image ${src} is missing alt text`).not.toBeNull();
    }
  });

  test('no broken internal anchor links', async ({ page }) => {
    const anchors = await page.locator('a[href^="#"]').evaluateAll((links) => {
      return links
        .map((a) => a.getAttribute('href'))
        .filter((href): href is string => href !== null && href !== '#');
    });

    // Deduplicate
    const unique = [...new Set(anchors)];

    for (const href of unique) {
      const target = page.locator(href);
      const count = await target.count();
      expect(count, `Anchor target ${href} should exist on the page`).toBeGreaterThan(0);
    }
  });

  test('lang attribute is pt-BR', async ({ page }) => {
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('pt-BR');
  });
});
