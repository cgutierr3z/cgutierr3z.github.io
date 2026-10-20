import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Genera la portada social del informe (1200 × 630).
 *
 * Procedencia: HTML local renderizado con Chromium vía Playwright; no usa
 * imágenes externas ni datos de proyectos. Tipografías self-hosted del
 * repositorio. Ejecutar con `bun scripts/generate-og.ts`.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const archivo = path.join(
  root,
  'node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2',
);
const fragment = path.join(
  root,
  'node_modules/@fontsource/fragment-mono/files/fragment-mono-latin-400-normal.woff2',
);
const output = path.join(root, 'public/og-image.png');
const tmpDir = path.join(root, '.tmp');
const htmlPath = path.join(tmpDir, 'og-image.html');

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: "Archivo";
    src: url("file://${archivo}") format("woff2-variations");
    font-weight: 100 900;
    font-display: block;
  }
  @font-face {
    font-family: "Fragment";
    src: url("file://${fragment}") format("woff2");
    font-weight: 400;
    font-display: block;
  }
  html, body { margin: 0; width: 1200px; height: 630px; }
  body {
    background: #F2EEE4;
    color: #15191B;
    font-family: "Archivo", sans-serif;
  }
  .frame {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 54px 64px 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ribbon {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #8B8476;
    padding-bottom: 10px;
    font-family: "Fragment", monospace;
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4C5455;
  }
  .name {
    margin-top: 36px;
    font-size: 112px;
    line-height: 0.92;
    letter-spacing: -0.045em;
    font-weight: 640;
  }
  .role {
    margin-top: 18px;
    font-size: 34px;
    line-height: 1.1;
    letter-spacing: -0.015em;
    color: #4C5455;
    font-weight: 500;
  }
  .foot {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    border-top: 1px solid #C9C1AF;
    padding-top: 18px;
    font-family: "Fragment", monospace;
    font-size: 15px;
    letter-spacing: 0.06em;
    color: #4C5455;
  }
  .mark { width: 56px; height: 10px; background: #A64B33; }
</style>
</head>
<body>
  <div class="frame">
    <div>
      <div class="ribbon">
        <span>Informe de gestión / 2026</span>
        <span>Portafolio</span>
      </div>
      <div class="name">Carlos<br />Gutierrez</div>
      <div class="role">Desarrollador Full Stack</div>
    </div>
    <div class="foot">
      <span>Aplicaciones empresariales · APIs · Datos</span>
      <span class="mark" aria-hidden="true"></span>
      <span>cgutierr3z.github.io</span>
    </div>
  </div>
</body>
</html>`;

await mkdir(tmpDir, { recursive: true });
await writeFile(htmlPath, html, 'utf8');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${htmlPath}`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: output });
await browser.close();

console.log(`OG image generada en ${output}`);
