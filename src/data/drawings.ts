export interface LoadPathStage {
	id: 'interfaz' | 'servicios' | 'datos' | 'operacion';
	label: string;
	technologies: readonly string[];
	note: string;
}

export interface LoadPathMetric {
	value: string;
	label: string;
	note?: string;
}

export type ProjectDrawingVariant = 'flow' | 'section' | 'grid';

export interface ProjectDrawing {
	variant: ProjectDrawingVariant;
	caption: string;
	nodes: readonly string[];
}

/** Corte vertical del stack: exactamente cuatro etapas. */
export const loadPathStages: readonly LoadPathStage[] = [
	{
		id: 'interfaz',
		label: 'Interfaz',
		technologies: ['React', 'Form.io', 'JavaScript'],
		note: 'Formularios y experiencias web.',
	},
	{
		id: 'servicios',
		label: 'Servicios',
		technologies: ['Node.js', 'Express', 'APIs REST', 'AWS Lambda'],
		note: 'Integración y lógica de servicios.',
	},
	{
		id: 'datos',
		label: 'Datos',
		technologies: ['DB2', 'PostgreSQL', 'MySQL'],
		note: 'Persistencia y migración de datos.',
	},
	{
		id: 'operacion',
		label: 'Operación',
		technologies: ['Docker', 'Pipelines', 'GitHub', 'Bitbucket'],
		note: 'Despliegue y soporte.',
	},
];

/** Exactamente las tres métricas aprobadas. No añadir ni alterar valores. */
export const loadPathMetrics: readonly LoadPathMetric[] = [
	{ value: '+50', label: 'aplicaciones' },
	{ value: '100–500', label: 'usuarios' },
	{ value: '2', label: 'tipos de CRM' },
];

/** Diagramas de proyectos destacados; las llaves deben coincidir con los slugs. */
export const projectDrawings: Partial<
	Record<string, ProjectDrawing>
> = {
	'covidmap-col': {
		variant: 'grid',
		caption: 'Mapa de regiones y capas de datos.',
		nodes: ['Datos históricos', 'DataMaps', 'Bootstrap'],
	},
	'coffee-shop': {
		variant: 'flow',
		caption: 'Flujo de gestión de productos y ventas.',
		nodes: ['Productos', 'Ventas', 'MySQL'],
	},
	'pt-recisa': {
		variant: 'section',
		caption: 'Sección de la prueba técnica Full Stack.',
		nodes: ['Angular', 'API PHP', 'MariaDB'],
	},
};
