import { es } from '../i18n/es';

export interface ReportMetric {
  value: string;
  label: string;
  note: string;
}

export interface ReportSection {
  id: string;
  index: string;
  label: string;
  href: `#${string}`;
}

/**
 * Exactamente las tres métricas aprobadas. No añadir, alterar ni ampliar
 * valores, tendencias o comparaciones.
 */
export const reportMetrics: readonly ReportMetric[] = [
  { value: '+50', label: 'aplicaciones', note: es.report.metricsNote },
  { value: '100–500', label: 'usuarios', note: es.report.metricsNote },
  { value: '2', label: 'tipos de CRM', note: es.report.metricsNote },
];

/** Siete capítulos del informe, en el orden de la página. */
export const reportSections: readonly ReportSection[] = [
  { id: 'servicios', index: '01', label: es.report.services, href: '#servicios' },
  {
    id: 'proyectos',
    index: '02',
    label: es.report.selectedWork,
    href: '#proyectos',
  },
  {
    id: 'otros-proyectos',
    index: '03',
    label: es.report.otherProjects,
    href: '#otros-proyectos',
  },
  {
    id: 'experiencia',
    index: '04',
    label: es.report.experience,
    href: '#experiencia',
  },
  { id: 'stack', index: '05', label: es.report.stack, href: '#stack' },
  { id: 'sobre-mi', index: '06', label: es.report.about, href: '#sobre-mi' },
  { id: 'contacto', index: '07', label: es.report.contact, href: '#contacto' },
];
