import { test, expect } from '@playwright/test';

test.describe('Interactive elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav scroll: scrolling adds .scrolled class to nav', async ({ page }) => {
    const nav = page.locator('nav#nav');
    await expect(nav).not.toHaveClass(/scrolled/);

    // Scroll down past the threshold (>40px)
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(300);
    await expect(nav).toHaveClass(/scrolled/);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await expect(nav).not.toHaveClass(/scrolled/);
  });

  test('hamburger menu: clicking toggles mobile menu', async ({ page }) => {
    // Set mobile viewport so hamburger is visible
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const hamburger = page.locator('#navHamburger');
    const mobileMenu = page.locator('#navMobile');

    // Initially not open
    await expect(mobileMenu).not.toHaveClass(/open/);

    // Click to open
    await hamburger.click();
    await expect(mobileMenu).toHaveClass(/open/);
    await expect(hamburger).toHaveClass(/active/);

    // Click again to close
    await hamburger.click();
    await expect(mobileMenu).not.toHaveClass(/open/);
  });

  test('hamburger menu: clicking a link closes the menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const hamburger = page.locator('#navHamburger');
    const mobileMenu = page.locator('#navMobile');

    // Open menu
    await hamburger.click();
    await expect(mobileMenu).toHaveClass(/open/);

    // Click a nav link
    await mobileMenu.locator('a[href="#optimize"]').click();
    await expect(mobileMenu).not.toHaveClass(/open/);
    await expect(hamburger).not.toHaveClass(/active/);
  });

  test('smooth scroll: clicking footer link scrolls to section', async ({ page }) => {
    // Scroll to footer first so the link is visible
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Click a visible anchor link in the footer
    const footerLink = page.locator('footer a[href="#optimize"]').first();
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await page.waitForTimeout(1000);

    // The optimize section should be near the viewport top
    const optimizeTop = await page.locator('#optimize').evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top;
    });
    // Should be within reasonable range of viewport top
    expect(Math.abs(optimizeTop)).toBeLessThan(200);
  });

  test('feature sidebar: clicking field card adds .accepted class', async ({ page }) => {
    // The field cards are inside an overflow sidebar, so use evaluate to simulate interaction
    const classAfter = await page.evaluate(() => {
      const el = document.querySelector('#optimize .fc[onclick]:not(.accepted)') as HTMLElement;
      if (!el) return '';
      (window as any).toggleFC(el);
      return el.className;
    });

    expect(classAfter).toContain('accepted');

    // Verify the status also changed
    const status = page.locator('#optimize .fc.accepted .fc-status.ok').first();
    await expect(status).toBeAttached();
  });

  test('trend card: clicking selects it (.sel class)', async ({ page }) => {
    // Click a non-selected trend card
    const cards = page.locator('#trends .tc');
    const secondCard = cards.nth(1);

    await secondCard.click();
    await expect(secondCard).toHaveClass(/sel/);

    // First card should lose .sel (only one selected at a time)
    const firstCard = cards.nth(0);
    await expect(firstCard).not.toHaveClass(/sel/);
  });

  test('toast: triggering shows toast', async ({ page }) => {
    const toast = page.locator('#toast');

    // Trigger toast via the global function
    await page.evaluate(() => (window as any).showToast('Test message'));
    await expect(toast).toHaveClass(/show/);
    await expect(toast).toHaveText('Test message');

    // Wait for auto-hide (2500ms + buffer)
    await page.waitForTimeout(3000);
    await expect(toast).not.toHaveClass(/show/);
  });
});
