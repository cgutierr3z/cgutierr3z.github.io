import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo y mantenimiento de aplicaciones web',
    description:
      'Construcción y evolución de aplicaciones con PHP, JavaScript y React, cuidando mantenibilidad y estabilidad.',
    icon: 'code',
  },
  {
    id: 'migration',
    title: 'Migración de aplicaciones y formularios',
    description:
      'Migración de formularios y funcionalidades PHP/Yii 1 a soluciones basadas en React y Form.io.',
    icon: 'migration',
  },
  {
    id: 'apis',
    title: 'APIs REST e integraciones',
    description:
      'Servicios y procesos de integración con Node.js/Express, APIs REST y AWS Lambda.',
    icon: 'api',
  },
  {
    id: 'data',
    title: 'Migración de datos',
    description:
      'Procesos de migración DB2 → PostgreSQL con archivos CSV, APIs y generación de logs.',
    icon: 'data',
  },
  {
    id: 'support',
    title: 'Soporte y evolución',
    description:
      'Gestión de incidentes P1/P2, guardias y mantenimiento de aplicaciones en producción.',
    icon: 'support',
  },
  {
    id: 'docker',
    title: 'Contenedores y despliegues',
    description:
      'Docker, pipelines de despliegue, GitHub y Bitbucket para acompañar la operación.',
    icon: 'docker',
  },
];
