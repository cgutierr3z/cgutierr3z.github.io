export const es = {
	drawing: {
		sheetIndex: 'Índice de láminas',
		titleBlock: 'Bloque de títulos',
		year: '2026',
		scale: 'Escala',
		loadPath: 'Trazado de cargas',
		loadPathDescription:
			'Corte vertical del stack: interfaz, servicios, datos y operación con cargas de experiencia.',
	},
	header: {
		home: 'Inicio',
		mainNav: 'Navegación principal',
		mobileNav: 'Navegación móvil',
	},
  nav: {
    services: 'Servicios',
    projects: 'Proyectos',
    experience: 'Experiencia',
    stack: 'Stack',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  ctas: {
    projects: 'Ver proyectos',
    contact: 'Hablemos',
    cv: 'Descargar CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  sections: {
    services: 'Servicios',
    featuredProjects: 'Proyectos destacados',
    otherProjects: 'Otros proyectos',
    experience: 'Experiencia',
    stack: 'Stack',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  projectTypes: {
    personal: 'Proyecto personal',
    practice: 'Proyecto de práctica',
    'technical-test': 'Prueba técnica',
    academic: 'Proyecto académico',
  },
  projectCategories: {
    web: 'Web y Full Stack',
    fundamentals: 'Fundamentos de ingeniería',
    games: 'Juegos y gráficos',
  },
  labels: {
    demo: 'Demo',
    repo: 'Repositorio',
    confidential: 'Empresa confidencial',
    confidentialNote: 'Nombre de la empresa no divulgado por confidencialidad.',
    historicalData: 'Datos históricos de 2020.',
    demoUnavailable: 'La demo original ya no está disponible.',
    technologies: 'Tecnologías',
    achievements: 'Logros',
    responsibilities: 'Responsabilidades',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    description:
      '¿Tienes un proyecto o una oportunidad? Estoy abierto a conversar.',
    heading: 'Construyamos algo juntos',
    bodyWithEmail:
      'Puedes escribirme por email o LinkedIn, o revisar mi trabajo en GitHub. Respondo a oportunidades laborales y proyectos de desarrollo.',
    bodyWithoutEmail:
      'Puedes escribirme por LinkedIn o revisar mi trabajo en GitHub. Respondo a oportunidades laborales y proyectos de desarrollo.',
  },
  theme: {
    toggle: 'Cambiar tema',
    light: 'Tema claro',
    dark: 'Tema oscuro',
    switchToLight: 'Cambiar a tema claro',
    switchToDark: 'Cambiar a tema oscuro',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    externalLink: 'Abre en una nueva pestaña',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con Astro.',
  },
  notFound: {
    title: 'Página no encontrada',
    description:
      'La página que buscas no existe o ha cambiado de ubicación.',
    backHome: 'Volver al inicio',
  },
};

export type Dictionary = typeof es;
