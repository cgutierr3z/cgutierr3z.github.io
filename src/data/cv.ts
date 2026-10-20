import type { Experience } from './types';

/**
 * Contenido exclusivo del CV aprobado por el propietario.
 *
 * La experiencia principal, las fechas y los títulos se importan desde
 * src/data/experience.ts. Los bullets, la agrupación de habilidades y los
 * resúmenes de proyectos se conservan aquí porque son el copy aprobado del CV
 * y no deben cambiar sin una nueva aprobación.
 */
export const cvSummary =
  'Desarrollador Full Stack con experiencia en modernización de aplicaciones empresariales, migración de plataformas legacy PHP (Yii 1) hacia React/Form.io, desarrollo con Node.js/Express, integración de APIs REST y migración de datos DB2 → PostgreSQL. Enfocado en soluciones mantenibles, automatización y soporte de aplicaciones en producción.';

export const cvCurrentRoleBullets = [
  'Participación en la migración de más de 50 aplicaciones empresariales, migrando formularios PHP/Yii 1 a React + Form.io para dos tipos de CRM: internos y orientados a clientes.',
  'Desarrollo de herramienta batch en Node.js para migración DB2 → PostgreSQL mediante CSV y APIs REST, con registros de auditoría.',
  'Integración de APIs REST y servicios en AWS Lambda para procesos de integración y procesamiento de información.',
  'Soporte y mantenimiento de soluciones utilizadas por entre 100 y 500 usuarios por instancia de producción.',
  'Gestión de requerimientos e incidentes P1/P2, incluyendo guardias mensuales y soporte en producción.',
  'Creación y manejo de contenedores Docker; participación en pipelines y despliegues.',
];

export const cvSkillGroups = [
  {
    category: 'Backend',
    items: ['PHP', 'Yii 1', 'Node.js', 'Express', 'APIs REST', 'AWS Lambda'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'React', 'Form.io', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Datos',
    items: ['DB2', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Infraestructura',
    items: ['Docker', 'GitHub', 'Bitbucket', 'Linux', 'Postman', 'Jira', 'Scrum'],
  },
];

export const cvProjectSummaries: Record<string, string> = {
  'covidmap-col':
    'Mapa interactivo de Colombia por regiones con datos históricos de COVID-19 (2020). HTML, Bootstrap y DataMaps.',
  'coffee-shop':
    'Aplicación de gestión de productos y ventas con CodeIgniter 4/PHP, JavaScript y MySQL.',
  'pt-recisa':
    'Aplicación con Angular, PHP y MariaDB; API y base de datos.',
};

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
