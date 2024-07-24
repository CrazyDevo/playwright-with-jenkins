// @ts-check
const { test, expect } = require('@playwright/test');

test('@only has title', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('@smoke get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/java/docs/auth');

  // Click the get started link.
  await page.getByRole('link', { name: 'Playwright for Java' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Playwright' })).toBeVisible();
});
