import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'covidmap-col',
    name: 'covidmap-col',
    title: 'CovidMap Colombia',
    type: 'personal',
    category: 'web',
    year: 2020,
    summary:
      'Mapa interactivo de Colombia por regiones con casos COVID-19. Construido con Bootstrap y DataMaps; la demo conserva datos históricos de 2020.',
    stack: ['HTML', 'Bootstrap', 'DataMaps'],
    links: [
      {
        label: 'Demo',
        url: 'https://cgutierr3z.github.io/covidmap-col/',
        type: 'demo',
      },
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/covidmap-col',
        type: 'repo',
      },
    ],
    featured: true,
    disclosure: 'Datos históricos de 2020.',
  },
  {
    slug: 'coffee-shop',
    name: 'coffee-shop',
    title: 'Coffee Shop',
    type: 'practice',
    category: 'web',
    year: 2023,
    summary:
      'Aplicación CodeIgniter 4 / PHP + JavaScript para gestión de productos y ventas, con consultas SQL y despliegue de práctica.',
    stack: ['PHP', 'CodeIgniter 4', 'JavaScript', 'MySQL'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/coffee-shop',
        type: 'repo',
      },
    ],
    featured: true,
    disclosure: 'La demo original ya no está disponible.',
  },
  {
    slug: 'pt-recisa',
    name: 'pt-recisa',
    title: 'Prueba técnica Full Stack',
    type: 'technical-test',
    category: 'web',
    year: 2022,
    summary:
      'Prueba técnica de Angular, PHP y MariaDB con API y base de datos.',
    stack: ['Angular', 'PHP', 'MariaDB'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/pt-recisa',
        type: 'repo',
      },
    ],
    featured: true,
  },
  {
    slug: 'sparcv8-monocycle',
    name: 'sparcv8-monocycle',
    title: 'Procesador SPARC V8',
    type: 'academic',
    category: 'fundamentals',
    year: 2015,
    summary:
      'Procesador monociclo de arquitectura SPARC V8 modelado en VHDL.',
    stack: ['VHDL'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/sparcv8-monocycle',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: 'php-compiler',
    name: 'PHP-Compiler',
    title: 'Compilador PHP',
    type: 'academic',
    category: 'fundamentals',
    year: 2016,
    summary:
      'Pequeño compilador para PHP usando PLY (Python-Lex-Yacc).',
    stack: ['Python', 'PLY'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/PHP-Compiler',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: 'ninja-vs-esmad',
    name: 'NinjaVsEsmad',
    title: 'Ninja vs Esmad',
    type: 'academic',
    category: 'games',
    year: 2015,
    summary:
      'Proyecto final de Computación Gráfica, ISC UTP 2015; juego en Python.',
    stack: ['Python'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/NinjaVsEsmad',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: 'pacman-shoot',
    name: 'PacmanShoot',
    title: 'Pacman Shoot',
    type: 'academic',
    category: 'games',
    year: 2015,
    summary:
      'Juego en Python/Pygame con control por mouse y dificultad progresiva.',
    stack: ['Python', 'PyGame'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/PacmanShoot',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: '2048python',
    name: '2048python',
    title: '2048 en Python',
    type: 'academic',
    category: 'games',
    year: 2015,
    summary: 'Versión del juego 2048 implementada con PyGame.',
    stack: ['Python', 'PyGame'],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/cgutierr3z/2048python',
        type: 'repo',
      },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
