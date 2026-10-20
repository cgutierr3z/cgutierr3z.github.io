import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

test.describe('axe en tema claro y oscuro', () => {
  for (const theme of ['light', 'dark'] as const) {
    test(`home y 404 sin violaciones en tema ${theme}`, async ({ page }) => {
      await page.goto('/');
      await page.evaluate((value) => localStorage.setItem('theme', value), theme);
      await page.reload();

      let results = await new AxeBuilder({ page }).withTags(tags).analyze();
      expect(results.violations, `home en tema ${theme}`).toEqual([]);

      await page.goto('/404.html');

      results = await new AxeBuilder({ page }).withTags(tags).analyze();
      expect(results.violations, `404 en tema ${theme}`).toEqual([]);
    });
  }
});
