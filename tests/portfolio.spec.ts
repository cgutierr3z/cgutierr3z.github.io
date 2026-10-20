import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { featuredProjects, otherProjects } from '../src/data/projects';

test.describe('Portafolio Carlos Gutierrez - E2E & A11y', () => {
  test('la home carga con h1 correcto, nombre y rol', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('#hero-title');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Carlos Gutierrez');
    await expect(h1).toContainText('Desarrollador Full Stack');
  });

  test('todas las secciones obligatorias existen y tienen identificador', async ({ page }) => {
    await page.goto('/');

    const expectedSections = [
      'inicio',
      'servicios',
      'proyectos',
      'otros-proyectos',
      'experiencia',
      'stack',
      'sobre-mi',
      'contacto',
    ];

    for (const id of expectedSections) {
      const section = page.locator(`section#${id}`);
      await expect(section).toBeVisible();
    }
  });

  test('los enlaces de navegacion desktop apuntan a sus anclas', async ({ page }) => {
    await page.goto('/');

    const navLinks = page.locator('header nav[aria-label="Navegación principal"] a');
    await expect(navLinks).toHaveCount(5);

    const hrefs = await navLinks.evaluateAll((links) => links.map((a) => a.getAttribute('href')));
    expect(hrefs).toEqual([
      '#servicios',
      '#proyectos',
      '#experiencia',
      '#stack',
      '#sobre-mi',
    ]);

    const labels = await navLinks.allTextContents();
    expect(labels.map((label) => label.trim())).toEqual([
      'Servicios',
      'Proyectos',
      'Experiencia',
      'Stack',
      'Sobre mí',
    ]);
  });

  test('el menu movil abre, cierra con Escape y devuelve el foco al boton', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const toggle = page.locator('#menu-toggle');
    const menu = page.locator('#mobile-menu');

    await expect(toggle).toBeVisible();
    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(menu).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveAttribute('aria-label', 'Cerrar menú');

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAttribute('aria-label', 'Abrir menú');
    await expect(toggle).toBeFocused();
  });

  test('el toggle de tema cambia a oscuro y persiste al recargar', async ({ page }) => {
    await page.goto('/');

    const root = page.locator('html');
    const toggle = page.locator('#theme-toggle');

    await expect(root).toHaveAttribute('data-theme', 'light');

    await toggle.click();
    await expect(root).toHaveAttribute('data-theme', 'dark');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await page.reload();
    await expect(root).toHaveAttribute('data-theme', 'dark');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  test('los enlaces externos tienen rel y target seguros', async ({ page }) => {
    await page.goto('/');

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('el enlace de CV existe y apunta a un PDF descargable', async ({ page }) => {
    await page.goto('/');

    const cvLinks = page.getByRole('link', { name: /Descargar CV/i });
    await expect(cvLinks).toHaveCount(1);
    await expect(cvLinks.first()).toHaveAttribute('href', /\.pdf$/i);
    await expect(cvLinks.first()).toHaveAttribute('download', '');

    const href = await cvLinks.first().getAttribute('href');
    expect(href).toBeTruthy();
    const response = await page.request.get(
      new URL(href!, page.url()).toString(),
    );
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });

  test('los enlaces externos anuncian la nueva pestaña', async ({ page }) => {
    await page.goto('/');

    const hero = page.locator('#inicio');
    await expect(
      hero.getByRole('link', { name: /GitHub/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);
    await expect(
      hero.getByRole('link', { name: /LinkedIn/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);

    const contact = page.locator('#contacto');
    await expect(
      contact.getByRole('link', { name: /GitHub/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);
    await expect(
      contact.getByRole('link', { name: /LinkedIn/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);

    const footer = page.locator('footer');
    await expect(
      footer.getByRole('link', { name: /GitHub/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);
    await expect(
      footer.getByRole('link', { name: /LinkedIn/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);
    await expect(
      footer.getByRole('link', { name: /Repositorio/ }),
    ).toHaveAccessibleName(/Abre en una nueva pestaña/);
  });

  test('los enlaces de proyectos incluyen el nombre del proyecto', async ({ page }) => {
    await page.goto('/');

    const projectLinks = page.locator('section#proyectos a[target="_blank"]');
    const expectedLinks = featuredProjects.reduce(
      (total, project) => total + project.links.length,
      0,
    );
    await expect(projectLinks).toHaveCount(expectedLinks);

    const labels = await projectLinks.evaluateAll((links) =>
      links.map((link) => link.getAttribute('aria-label') ?? ''),
    );

    for (const label of labels) {
      expect(label).toMatch(/^(Demo|Repositorio) de .+\. Abre en una nueva pestaña$/);
    }
  });

  test('los tres casos destacados tienen ancla estable', async ({ page }) => {
    await page.goto('/');

    for (const project of featuredProjects) {
      const entry = page.locator(`#proyecto-${project.slug}`);
      await expect(entry).toHaveCount(1);
      await expect(entry).toHaveAttribute('aria-labelledby', `${project.slug}-title`);
      await expect(page.locator(`#${project.slug}-title`)).toHaveText(project.title);
    }
  });

  test('el registro contiene los cinco proyectos secundarios', async ({ page }) => {
    await page.goto('/');

    const ledger = page.locator('#otros-proyectos');
    await expect(ledger.locator('li')).toHaveCount(otherProjects.length);

    for (const project of otherProjects) {
      await expect(ledger).toContainText(project.title);
    }
  });

  test('la portada muestra las cifras aprobadas y su nota exacta', async ({ page }) => {
    await page.goto('/');

    const band = page.locator('#inicio .field-patina');
    await expect(band).toBeVisible();
    await expect(band).toContainText('+50');
    await expect(band).toContainText('aplicaciones');
    await expect(band).toContainText('100–500');
    await expect(band).toContainText('usuarios');
    await expect(band).toContainText('tipos de CRM');
    await expect(band).toContainText(
      'Métricas de experiencia profesional, no de los proyectos listados.',
    );

    const text = await band.innerText();
    expect(text).not.toMatch(/%|↑|↓|vs\.?/i);
  });

  test('el primer viewport de escritorio muestra el trabajo y la accion primaria', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await expect(page.locator('#hero-title')).toContainText('Carlos Gutierrez');
    await expect(page.locator('#hero-title')).toContainText('Desarrollador Full Stack');

    const projectLinks = page.locator('#inicio a[href^="#proyecto-"]');
    await expect(projectLinks).toHaveCount(3);

    for (let i = 0; i < 3; i++) {
      const box = await projectLinks.nth(i).boundingBox();
      expect(box, `enlace ${i + 1} sin caja`).not.toBeNull();
      expect(box!.y).toBeLessThan(900);
    }

    const primary = page.locator('#inicio').getByRole('link', { name: 'Ver proyectos' });
    await expect(primary).toBeVisible();
    const primaryBox = await primary.boundingBox();
    expect(primaryBox!.y).toBeLessThan(900);

    const bandBox = await page.locator('#inicio .field-patina').boundingBox();
    expect(bandBox!.y).toBeLessThan(900);
  });

  test('el primer viewport movil muestra nombre, rol, CTA e inicio de cifras', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(page.locator('#hero-title')).toContainText('Carlos Gutierrez');
    await expect(page.locator('#hero-title')).toContainText('Desarrollador Full Stack');
    await expect(
      page.locator('#inicio').getByRole('link', { name: 'Ver proyectos' }),
    ).toBeVisible();

    const bandBox = await page.locator('#inicio .field-patina').boundingBox();
    expect(bandBox!.y).toBeLessThan(844);

    const hasHorizontalScroll = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalScroll).toBe(false);
  });

  test('la pagina 404 carga, tiene titulo descriptivo y enlaza a home', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/404.html');

    await expect(page).toHaveTitle(/Página no encontrada/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(0);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);

    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('la home conserva canonical, og:url y JSON-LD', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(1);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
  });

  test('no hay scroll horizontal de 320px a 1440px', async ({ page }) => {
    for (const width of [320, 360, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalScroll, `scroll horizontal a ${width}px`).toBe(false);
    }
  });

  test('no hay errores no capturados ni excepciones en consola en la home', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    expect(errors).toEqual([]);
  });

  test('accesibilidad con axe sin violaciones', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});

test.describe('sin JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('el contenido principal sigue visible y navegable', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#hero-title')).toContainText('Carlos Gutierrez');
    await expect(page.locator('#inicio .field-patina')).toContainText('+50');
    await expect(page.locator('#experiencia')).toContainText('Empresa confidencial');
    await expect(page.locator('#contacto')).toBeVisible();
    await expect(page.locator('#contacto a[href^="mailto:"]')).toBeVisible();
  });
});
