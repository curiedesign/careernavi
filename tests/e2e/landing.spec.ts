import { test, expect } from '@playwright/test';

test('landing page renders hero and navigates to workbench', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /write your career/i, level: 1 })
  ).toBeVisible();

  await page.getByRole('link', { name: 'Workbench', exact: true }).click();
  await expect(page).toHaveURL(/\/workbench$/);
  await expect(
    page.getByRole('heading', { name: /six tools\. coming soon/i, level: 1 })
  ).toBeVisible();
});

test('404 page shows for unknown routes', async ({ page }) => {
  await page.goto('/does-not-exist');
  await expect(page.getByRole('heading', { name: '404', level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: /back to home/i })).toBeVisible();
});

test('privacy and terms routes render', async ({ page }) => {
  await page.goto('/privacy');
  await expect(
    page.getByRole('heading', { name: /your data, your rules/i, level: 1 })
  ).toBeVisible();

  await page.goto('/terms');
  await expect(
    page.getByRole('heading', { name: /the short version/i, level: 1 })
  ).toBeVisible();
});

test('header wordmark links back to home from any page', async ({ page }) => {
  await page.goto('/workbench');
  await page.getByRole('link', { name: 'CareerNavi' }).click();
  await expect(page).toHaveURL('http://localhost:5173/');
  await expect(
    page.getByRole('heading', { name: /write your career/i, level: 1 })
  ).toBeVisible();
});
