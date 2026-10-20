import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { profile } from '../src/data/profile';
import { experience } from '../src/data/experience';
import { featuredProjects } from '../src/data/projects';
import {
  cvAdditionalExperience,
  cvCurrentRoleBullets,
  cvEducation,
  cvProjectSummaries,
  cvSkillGroups,
  cvSummary,
} from '../src/data/cv';
import type { Experience } from '../src/data/types';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/cv/carlos-gutierrez-cv.pdf');

const monthNames = [
  'ene.',
  'feb.',
  'mar.',
  'abr.',
  'may.',
  'jun.',
  'jul.',
  'ago.',
  'sept.',
  'oct.',
  'nov.',
  'dic.',
];

const escapeHtml = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character] ?? character,
  );

const formatDate = (value: string): string => {
  const [year, month] = value.split('-').map(Number);
  return month ? `${monthNames[month - 1]} ${year}` : String(year);
};

const formatRange = (start: string, end: string | null): string => {
  if (!end) return `${formatDate(start)} – actualidad`;

  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);

  if (startYear === endYear && startMonth === 1 && endMonth === 12) {
    return String(startYear);
  }

  if (startMonth === 1 && endMonth === 12) {
    return `${startYear} – ${endYear}`;
  }

  return `${formatDate(start)} – ${formatDate(end)}`;
};

const current = experience[0];
if (!current) {
  throw new Error('No hay experiencia principal para generar el CV.');
}

const jobs: Array<Experience & { bullets: string[] }> = [
  { ...current, bullets: cvCurrentRoleBullets },
  ...cvAdditionalExperience.map((job) => ({
    ...job,
    bullets: job.responsibilities.length > 0 ? job.responsibilities : [job.summary],
  })),
];

const renderJob = (job: Experience & { bullets: string[] }): string => `
      <div class="job">
        <div class="job-head">
          <div>
            <h3>${escapeHtml(job.role)}</h3>
            <p class="company">${
              job.companyConfidential ? 'Empresa confidencial' : escapeHtml(job.company)
            }</p>
          </div>
          <p class="dates">${escapeHtml(formatRange(job.start, job.end))}</p>
        </div>
        <ul>
          ${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('\n          ')}
        </ul>
      </div>`;

const skills = cvSkillGroups
  .map(
    (group) =>
      `<strong>${escapeHtml(group.category)}:</strong> ${group.items
        .map(escapeHtml)
        .join(', ')}.`,
  )
  .join('\n        <br />\n        ');

const projects = featuredProjects
  .map((project) => {
    const summary = cvProjectSummaries[project.slug] ?? project.summary;
    return `
        <p class="project">
          <strong>${escapeHtml(project.title)}</strong> — ${escapeHtml(summary)}
        </p>`;
  })
  .join('');

const contact = [
  profile.email
    ? `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>`
    : '',
  `<a href="${escapeHtml(profile.github)}">${escapeHtml(
    profile.github.replace(/^https?:\/\//, ''),
  )}</a>`,
  `<a href="${escapeHtml(profile.linkedin)}">${escapeHtml(
    profile.linkedin
      .replace(/^https?:\/\/(www\.)?/, '')
      .replace(/\/$/, ''),
  )}</a>`,
]
  .filter(Boolean)
  .join('\n        &nbsp;·&nbsp;\n        ');

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="${escapeHtml(profile.name)}" />
    <title>${escapeHtml(profile.name)} — ${escapeHtml(profile.role)}</title>
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
        letter-spacing: 0.08em;
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
      <h1>${escapeHtml(profile.name)}</h1>
      <p class="role">${escapeHtml(profile.role)}</p>
      <p class="contact">
        ${contact}
      </p>
    </header>

    <section>
      <h2>Perfil</h2>
      <p class="summary">${escapeHtml(cvSummary)}</p>
    </section>

    <section>
      <h2>Experiencia</h2>
      ${jobs.map(renderJob).join('\n')}
    </section>

    <section>
      <h2>Habilidades</h2>
      <p class="skills">
        ${skills}
      </p>
    </section>

    <section>
      <h2>Proyectos</h2>
      <div class="projects">${projects}
      </div>
    </section>

    <section>
      <h2>Educación</h2>
      <p class="muted">
        ${escapeHtml(cvEducation.program)} — ${escapeHtml(cvEducation.institution)}.
        ${escapeHtml(cvEducation.detail)}
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
    tagged: true,
  });
} finally {
  await browser.close();
}

console.log(`CV generado en ${path.relative(root, output)}`);
