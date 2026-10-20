import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/cv/carlos-gutierrez-cv.pdf');

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Carlos Gutierrez" />
    <title>Carlos Gutierrez — Desarrollador Full Stack</title>
    <style>
      @page {
        size: Letter;
        margin: 0.45in 0.55in;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #17202a;
        font-family: "DejaVu Sans", Arial, sans-serif;
        font-size: 9.6pt;
        line-height: 1.32;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      h1,
      h2,
      h3,
      p,
      ul {
        margin: 0;
      }

      header {
        border-bottom: 2px solid #0f766e;
        padding-bottom: 8px;
      }

      h1 {
        font-size: 21pt;
        letter-spacing: -0.02em;
      }

      .role {
        margin-top: 2px;
        color: #0f766e;
        font-size: 11pt;
        font-weight: 700;
      }

      .contact {
        margin-top: 5px;
        color: #475569;
        font-size: 8.8pt;
      }

      .contact a {
        color: #0f766e;
        text-decoration: none;
      }

      section {
        margin-top: 11px;
        break-inside: avoid;
      }

      h2 {
        border-bottom: 1px solid #d7dee7;
        padding-bottom: 3px;
        color: #0f766e;
        font-size: 9pt;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        break-after: avoid;
      }

      .summary {
        margin-top: 6px;
      }

      .job {
        margin-top: 7px;
        break-inside: avoid;
      }

      .job:first-of-type {
        margin-top: 5px;
      }

      .job-head {
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }

      h3 {
        font-size: 10.5pt;
      }

      .company {
        color: #475569;
        font-size: 9.5pt;
      }

      .dates {
        color: #64748b;
        font-size: 9pt;
        white-space: nowrap;
      }

      ul {
        margin-top: 3px;
        padding-left: 15px;
      }

      li {
        margin-top: 1px;
      }

      .skills {
        margin-top: 5px;
      }

      .projects {
        margin-top: 5px;
      }

      .project {
        margin-top: 4px;
      }

      .project strong {
        color: #17202a;
      }

      .muted {
        color: #475569;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Carlos Gutierrez</h1>
      <p class="role">Desarrollador Full Stack</p>
      <p class="contact">
        <a href="mailto:cgutierrez@utp.edu.co">cgutierrez@utp.edu.co</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/cgutierr3z">github.com/cgutierr3z</a>
        &nbsp;·&nbsp;
        <a href="https://www.linkedin.com/in/cgutierr3z/">linkedin.com/in/cgutierr3z</a>
      </p>
    </header>

    <section>
      <h2>Perfil</h2>
      <p class="summary">
        Desarrollador Full Stack con experiencia en modernización de aplicaciones
        empresariales, migración de plataformas legacy PHP (Yii 1) hacia
        React/Form.io, desarrollo con Node.js/Express, integración de APIs REST y
        migración de datos DB2 → PostgreSQL. Enfocado en soluciones mantenibles,
        automatización y soporte de aplicaciones en producción.
      </p>
    </section>

    <section>
      <h2>Experiencia</h2>

      <div class="job">
        <div class="job-head">
          <div>
            <h3>Desarrollador Full Stack</h3>
            <p class="company">Empresa confidencial</p>
          </div>
          <p class="dates">mar. 2023 – jul. 2026</p>
        </div>
        <ul>
          <li>
            Participación en la migración de más de 50 aplicaciones empresariales,
            migrando formularios PHP/Yii 1 a React + Form.io para dos tipos de CRM:
            internos y orientados a clientes.
          </li>
          <li>
            Desarrollo de herramienta batch en Node.js para migración DB2 →
            PostgreSQL mediante CSV y APIs REST, con registros de auditoría.
          </li>
          <li>
            Integración de APIs REST y servicios en AWS Lambda para procesos de
            integración y procesamiento de información.
          </li>
          <li>
            Soporte y mantenimiento de soluciones utilizadas por entre 100 y 500
            usuarios por instancia de producción.
          </li>
          <li>
            Gestión de requerimientos e incidentes P1/P2, incluyendo guardias
            mensuales y soporte en producción.
          </li>
          <li>
            Creación y manejo de contenedores Docker; participación en pipelines y
            despliegues.
          </li>
        </ul>
      </div>

      <div class="job">
        <div class="job-head">
          <div>
            <h3>Analista de Desarrollo y Soporte</h3>
            <p class="company">Empresa confidencial</p>
          </div>
          <p class="dates">2022</p>
        </div>
        <ul>
          <li>
            Soporte y evolución de sistema de control de acceso basado en PHP y
            PostgreSQL; resolución de incidencias.
          </li>
        </ul>
      </div>

      <div class="job">
        <div class="job-head">
          <div>
            <h3>Técnico de Instalación</h3>
            <p class="company">Empresa confidencial</p>
          </div>
          <p class="dates">2018 – 2019</p>
        </div>
        <ul>
          <li>
            Implementación de software educativo en instituciones y configuración de
            laboratorios.
          </li>
        </ul>
      </div>

      <div class="job">
        <div class="job-head">
          <div>
            <h3>Desarrollador Web</h3>
            <p class="company">Empresa confidencial</p>
          </div>
          <p class="dates">2016 – 2017</p>
        </div>
        <ul>
          <li>
            Desarrollo de sitio web corporativo y sistema interno de catálogo.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Habilidades</h2>
      <p class="skills">
        <strong>Backend:</strong> PHP, Yii 1, Node.js, Express, APIs REST, AWS Lambda.
        <br />
        <strong>Frontend:</strong> JavaScript, React, Form.io, HTML5, CSS3, Bootstrap.
        <br />
        <strong>Datos:</strong> DB2, PostgreSQL, MySQL.
        <br />
        <strong>Infraestructura:</strong> Docker, GitHub, Bitbucket, Linux, Postman, Jira, Scrum.
      </p>
    </section>

    <section>
      <h2>Proyectos</h2>
      <div class="projects">
        <p class="project">
          <strong>CovidMap Colombia</strong> — Mapa interactivo de Colombia por
          regiones con datos históricos de COVID-19 (2020). HTML, Bootstrap y DataMaps.
        </p>
        <p class="project">
          <strong>Coffee Shop</strong> — Aplicación de gestión de productos y ventas
          con CodeIgniter 4/PHP, JavaScript y MySQL.
        </p>
        <p class="project">
          <strong>Prueba técnica Full Stack</strong> — Aplicación con Angular, PHP y
          MariaDB; API y base de datos.
        </p>
      </div>
    </section>

    <section>
      <h2>Educación</h2>
      <p class="muted">
        Ingeniería de Sistemas y Computación — Universidad Tecnológica de Pereira.
        Estudios pausados, 7.º semestre.
      </p>
    </section>
  </body>
</html>`;

await mkdir(path.dirname(output), { recursive: true });

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({
    path: output,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
  });
} finally {
  await browser.close();
}

console.log(`CV generado en ${path.relative(root, output)}`);
