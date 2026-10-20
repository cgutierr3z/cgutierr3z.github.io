import type { TechnologyGroup } from './types';

export const technologies: TechnologyGroup[] = [
  {
    category: 'Backend',
    items: [
      'PHP',
      'Yii 1',
      'Node.js',
      'Express',
      'APIs REST',
      'AWS Lambda',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'JavaScript',
      'React',
      'Form.io',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
  },
  {
    category: 'Datos',
    items: ['DB2', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'pipelines', 'Linux', 'GitHub', 'Bitbucket'],
  },
  {
    category: 'Herramientas',
    items: ['Postman', 'Jira', 'Scrum'],
  },
];
