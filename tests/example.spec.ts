import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await expect(page).toHaveTitle('Tài liệu học automation test - Playwright Việt Nam');
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await page.click('a[href="01-xpath-register-page.html"]');
  const heading = page.locator('h1', { hasText: 'User Registration' });
  await expect(heading).toBeVisible();
});