// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://practice.cydeo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice/);
});

test('@smoke get started link', async ({ page }) => {
  await page.goto('https://practice.cydeo.com/abtest');

  // Click the get started link.
  await page.getByRole('link', { name: 'Home' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Test Automation Practice' })).toBeVisible();
});
