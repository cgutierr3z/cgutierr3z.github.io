export type Locale = 'es';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location?: string;
  timezone?: string;
  availability?: string;
  email?: string;
  github: string;
  linkedin: string;
  cvUrl?: string;
  photo?: string;
}

export type ServiceIcon =
  | 'code'
  | 'migration'
  | 'api'
  | 'data'
  | 'support'
  | 'docker';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export type ProjectType =
  | 'personal'
  | 'practice'
  | 'technical-test'
  | 'academic';

export type ProjectCategory = 'web' | 'fundamentals' | 'games';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'demo' | 'repo';
}

export interface Project {
  slug: string;
  name: string;
  title: string;
  type: ProjectType;
  category: ProjectCategory;
  year: number;
  summary: string;
  role?: string;
  context?: string;
  solution?: string;
  stack: string[];
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
  featured: boolean;
  disclosure?: string;
}

export interface Experience {
  company: string;
  companyConfidential: boolean;
  role: string;
  start: string;
  end: string | null;
  location?: string;
  modality?: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
}

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  locale: Locale;
}
