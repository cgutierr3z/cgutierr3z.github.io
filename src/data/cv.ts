import type { Experience } from './types';

/**
 * Contenido exclusivo del CV que no forma parte del sitio.
 * La experiencia principal, el stack y los proyectos se importan desde src/data.
 */
export const cvSummary =
  'Desarrollador Full Stack con experiencia en modernización de aplicaciones empresariales, migración de plataformas legacy PHP (Yii 1) hacia React/Form.io, desarrollo con Node.js/Express, integración de APIs REST y migración de datos DB2 → PostgreSQL. Enfocado en soluciones mantenibles, automatización y soporte de aplicaciones en producción.';

export const cvEducation = {
  institution: 'Universidad Tecnológica de Pereira',
  program: 'Ingeniería de Sistemas y Computación',
  detail: 'Estudios pausados, 7.º semestre.',
};

export const cvAdditionalExperience: Experience[] = [
  {
    company: 'Empresa confidencial',
    companyConfidential: true,
    role: 'Analista de Desarrollo y Soporte',
    start: '2022-01',
    end: '2022-12',
    summary:
      'Soporte y evolución de sistema de control de acceso basado en PHP y PostgreSQL.',
    responsibilities: [
      'Soporte y evolución de sistema de control de acceso basado en PHP y PostgreSQL; resolución de incidencias.',
    ],
    achievements: [],
    stack: ['PHP', 'PostgreSQL'],
  },
  {
    company: 'Empresa confidencial',
    companyConfidential: true,
    role: 'Técnico de Instalación',
    start: '2018-01',
    end: '2019-12',
    summary:
      'Implementación de software educativo en instituciones y configuración de laboratorios.',
    responsibilities: [
      'Implementación de software educativo en instituciones y configuración de laboratorios.',
    ],
    achievements: [],
    stack: [],
  },
  {
    company: 'Empresa confidencial',
    companyConfidential: true,
    role: 'Desarrollador Web',
    start: '2016-01',
    end: '2017-12',
    summary: 'Desarrollo de sitio web corporativo y sistema interno de catálogo.',
    responsibilities: [
      'Desarrollo de sitio web corporativo y sistema interno de catálogo.',
    ],
    achievements: [],
    stack: [],
  },
];
