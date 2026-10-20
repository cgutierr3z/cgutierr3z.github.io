import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('la home y la 404 no tienen violaciones axe criticas ni serias', async ({ page }) => {
  await page.goto('/');

  let results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();

  expect(
    results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? '')),
  ).toEqual([]);

  await page.goto('/404.html');

  results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();

  expect(
    results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? '')),
  ).toEqual([]);
});
