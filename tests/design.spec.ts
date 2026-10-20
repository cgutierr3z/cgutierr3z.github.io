import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { featuredProjects } from '../src/data/projects';
import { reportMetrics, reportSections } from '../src/data/report';

test.describe('Dirección «Informe de gestión»', () => {
  test('la cinta y la portada declaran el informe sin lenguaje de láminas', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#inicio')).toContainText('Informe de gestión');
    await expect(page.locator('#inicio')).toContainText('2026');
    await expect(page.locator('#hero-title')).toContainText('Carlos Gutierrez');
    await expect(page.locator('#hero-title')).toContainText('Desarrollador Full Stack');

    const bodyText = await page.locator('body').innerText();
    expect(bodyText).not.toMatch(
      /lámina|plano|trazado de cargas|bloque de títulos|escala 1:1|índice de láminas|anotación/i,
    );
  });

  test('el índice de la portada enlaza los tres casos', async ({ page }) => {
    await page.goto('/');

    const indexLinks = page.locator('#inicio a[href^="#proyecto-"]');
    await expect(indexLinks).toHaveCount(featuredProjects.length);

    for (const [i, project] of featuredProjects.entries()) {
      const link = indexLinks.nth(i);
      await expect(link).toHaveAttribute('href', `#proyecto-${project.slug}`);
      await expect(link).toContainText(project.title);
    }
  });

  test('la banda de cifras usa las tres métricas aprobadas', async ({ page }) => {
    await page.goto('/');

    const values = await page
      .locator('#inicio .field-patina dd')
      .allTextContents();
    expect(values.map((value) => value.trim())).toEqual(
      reportMetrics.map((metric) => metric.value),
    );

    const labels = await page
      .locator('#inicio .field-patina dt')
      .allTextContents();
    expect(labels.map((label) => label.trim())).toEqual(
      reportMetrics.map((metric) => metric.label),
    );
  });

  test('los capítulos siguen el orden del informe', async ({ page }) => {
    await page.goto('/');

    const ids = await page
      .locator('main > section')
      .evaluateAll((sections) => sections.map((section) => section.id));
    expect(ids).toEqual(['inicio', ...reportSections.map((section) => section.id)]);

    const footerIndex = page.locator('footer nav a');
    await expect(footerIndex).toHaveCount(reportSections.length);
    const labels = await footerIndex.allTextContents();
    expect(labels.map((label) => label.trim())).toEqual(
      reportSections.map((section) => section.label),
    );
  });

  test('los servicios son una lista de seis alcances sin iconos', async ({ page }) => {
    await page.goto('/');

    const rows = page.locator('#servicios ol > li');
    await expect(rows).toHaveCount(6);
    await expect(page.locator('#servicios li svg')).toHaveCount(0);
  });

  test('los casos usan campos de color y no imágenes de proyecto', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#proyectos .field-patina')).toHaveCount(1);
    await expect(page.locator('#proyectos .field-oxide')).toHaveCount(1);
    await expect(page.locator('#proyectos .field-ink')).toHaveCount(1);
    await expect(page.locator('main img, main canvas, main video')).toHaveCount(0);
  });

  test('el colofón y la confidencialidad están presentes', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toContainText('Colofón');
    await expect(footer).toContainText('Archivo Variable');
    await expect(footer).toContainText('Fragment Mono');
    await expect(footer).toContainText(
      'Nombre de la empresa no divulgado por confidencialidad.',
    );
    await expect(page.locator('#experiencia')).toContainText('Empresa confidencial');
  });

  test('la 404 se presenta como fe de erratas sin señales de indexación', async ({ page }) => {
    await page.goto('/404.html');

    await expect(page.locator('#main')).toContainText('Fe de erratas');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(0);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
  });

  test('los tokens aprobados se conservan y no hay retícula de plano', async () => {
    const css = await readFile('src/styles/global.css', 'utf8');

    expect(css).toMatch(/--paper:\s*#f2eee4/i);
    expect(css).toMatch(/--ink:\s*#15191b/i);
    expect(css).toMatch(/--oxide:\s*#a64b33/i);
    expect(css).toMatch(/--patina:\s*#2e5f5a/i);
    expect(css).toMatch(/\[data-theme="dark"\]/);
    expect(css).not.toMatch(/--grid/);
    expect(css).not.toMatch(/color-grid/);
  });
});

test.describe('movimiento', () => {
  test('con prefers-reduced-motion el contenido sigue visible', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const revealed = page.locator('#experiencia [data-reveal]');
    await expect(revealed).toBeVisible();
    const opacity = await revealed.evaluate((element) => getComputedStyle(element).opacity);
    expect(opacity).toBe('1');

    const transform = await revealed.evaluate((element) => getComputedStyle(element).transform);
    expect(transform === 'none' || transform === 'matrix(1, 0, 0, 1, 0, 0)').toBe(true);
  });
});
