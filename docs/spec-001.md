# SPEC-001 — Portafolio profesional Full Stack

| Campo | Valor |
|---|---|
| **ID** | SPEC-001 |
| **Versión** | 1.2 — Implementado, desplegado y validado |
| **Fecha** | 2026-10-19 y 2026-10-20 |
| **Estado** | Aprobado por el propietario · T-001 – T-020 completadas; sitio desplegado |
| **Repositorio** | https://github.com/cgutierr3z/cgutierr3z.github.io |
| **Sitio objetivo** | https://cgutierr3z.github.io/ |
| **Rama de implementación** | `master` (mergeada desde `feat/spec-001-portfolio`) |
| **Rama de despliegue** | `master` |
| **Fuente de verdad** | `docs/spec-001.md` |
| **Agente de implementación** | `feature-coder` |
| **Agente de auditoría** | `code-reviewer` |
| **Idioma del sitio** | Español (`es`) |

> **Nota de confidencialidad:** el nombre del empleador actual/anterior es confidencial. No debe aparecer en este documento, en el código, en el contenido, en los tests, en los commits, en el README, en metadatos, en imágenes ni en el sitio generado. En el contenido se usará “Empresa confidencial” y una nota de divulgación limitada.

---

## 1. Resumen ejecutivo

Crear el sitio público de portafolio de **Carlos Gutierrez**, desarrollador Full Stack, para presentar sus servicios, experiencia, tecnologías y proyectos reales. El objetivo es conseguir oportunidades laborales y clientes.

El sitio será una página estática, responsive, accesible y optimizada para SEO, construida con **Astro + TypeScript + Tailwind CSS** y desplegada en **GitHub Pages mediante GitHub Actions**. El contenido estará centralizado en archivos de datos tipados para facilitar su mantenimiento.

### Resultado esperado

Un sitio de una sola página, en español, con:

- Propuesta de valor clara en menos de 30 segundos.
- Servicios derivados de la experiencia real.
- Tres proyectos destacados y cinco proyectos académicos secundarios.
- Experiencia laboral anonimizada.
- Stack técnico agrupado.
- Contacto directo por email, LinkedIn y GitHub.
- Descarga de CV, si el propietario lo aprueba.
- SEO técnico, accesibilidad y rendimiento verificables.

---

## 2. Objetivos y criterios de éxito

### 2.1 Objetivos

1. Presentar a Carlos Gutierrez como desarrollador Full Stack con experiencia en aplicaciones empresariales, migraciones PHP/Yii 1 a React + Form.io, APIs REST, Node.js/Express, AWS Lambda y migración de datos DB2 a PostgreSQL.
2. Mostrar servicios profesionales claros para clientes potenciales.
3. Facilitar el contacto de reclutadores y clientes.
4. Publicar proyectos reales sin inventar clientes, métricas, certificaciones ni resultados.
5. Mantener el contenido actualizable sin modificar componentes.
6. Desplegar automáticamente en GitHub Pages.

### 2.2 Criterios de éxito

- Un reclutador entiende el perfil, la experiencia y el stack en menos de 30 segundos.
- Un cliente potencial entiende los servicios y encuentra el contacto en dos clics o menos.
- El sitio obtiene Lighthouse móvil ≥ 95 en Rendimiento, Accesibilidad, Buenas Prácticas y SEO.
- El sitio cumple los fundamentos de WCAG 2.2 AA.
- El contenido se actualiza desde `src/data/` sin tocar componentes.
- El despliegue se ejecuta automáticamente al hacer merge a `master`.
- No aparece el nombre del empleador confidencial en el repositorio ni en el sitio.
- No hay contenido inventado ni placeholders en producción.

---

## 3. Audiencias

| Audiencia | Necesidad principal | Acción esperada |
|---|---|---|
| Reclutadores y empresas | Evaluar experiencia, stack, trayectoria y disponibilidad | Ver experiencia, descargar CV o contactar |
| Clientes potenciales | Entender servicios, capacidades y proyectos | Ver servicios/proyectos y contactar |
| Pares técnicos | Revisar proyectos, código y stack | Abrir GitHub, demos o LinkedIn |

### 3.1 Prioridad

El sitio debe equilibrar **empleo** y **clientes**. El CTA principal será el contacto; el secundario, ver proyectos.

---

## 4. Alcance

### 4.1 Incluido en el MVP

- Página principal (`/`) con las secciones definidas en la arquitectura de información.
- Página 404 personalizada.
- Navegación por anclas y menú móvil.
- Tema claro/oscuro con preferencia persistente.
- Contenido en español.
- Estructura preparada para una futura versión en inglés, sin selector de idioma en el MVP.
- SEO técnico: metadatos, canonical, Open Graph, Twitter Card, sitemap, `robots.txt` y JSON-LD `Person`.
- Imagen Open Graph y favicon.
- Descarga de CV, si se proporciona y aprueba.
- Enlaces a GitHub, LinkedIn, demos y repositorios.
- Tests automatizados mínimos y auditoría de accesibilidad.
- Despliegue automático en GitHub Pages mediante GitHub Actions.
- README con instrucciones de desarrollo, contenido y despliegue.

### 4.2 Excluido del MVP

- Backend, base de datos, autenticación o API propia.
- CMS.
- Blog.
- Formulario de contacto con backend propio.
- Analítica y cookies.
- Dominio propio.
- Pagos o reservas.
- Selector de idioma y contenido en inglés.
- Páginas individuales de caso de estudio.
- Casos de estudio profesionales anonimizados.
- Demos live de PHP, Form.io o AWS Lambda.
- Testimonios, certificaciones, clientes o métricas no verificadas.
- Curriculum interactivo.
- Comentarios, newsletter o buscador.

### 4.3 Supuestos

- El repositorio es público.
- El sitio se publica en la raíz de un *user site* de GitHub Pages.
- No habrá dominio propio en el MVP.
- El propietario proporcionará y aprobará todo el contenido antes del deploy.
- El propietario autoriza el cambio de fuente de GitHub Pages a GitHub Actions.
- El nombre del empleador confidencial no se publicará.
- No se inventará ningún dato profesional.

---

## 5. Decisiones aprobadas

| Decisión | Valor aprobado |
|---|---|
| Stack | Astro + TypeScript + Tailwind CSS |
| Salida | Estática (`output: 'static'`), sin SSR |
| Gestor de paquetes | Bun, con lockfile versionado |
| Despliegue | GitHub Actions → GitHub Pages |
| Idioma | Español; estructura i18n preparada |
| Público | Empleo y clientes |
| Diseño | Claro, profesional, responsive, light/dark |
| Proyectos destacados | `covidmap-col`, `coffee-shop`, `pt-recisa` |
| Proyectos secundarios | `sparcv8-monocycle`, `PHP-Compiler`, `NinjaVsEsmad`, `PacmanShoot`, `2048python` |
| Casos profesionales anónimos | No se incluyen |
| Formulario de contacto | No en el MVP |
| Analítica | No en el MVP |
| Dominio propio | No en el MVP |
| `opencode.json` | Ignorado por Git; no se versiona |
| Nombre del empleador | Confidencial; no se publica |

---

## 6. Arquitectura de información

### 6.1 Orden de secciones

| # | Sección | Propósito | Contenido principal |
|---|---|---|---|
| 1 | Header | Navegación y CTA | Nombre/monograma, enlaces, botón de contacto, toggle de tema |
| 2 | Hero | Propuesta de valor | Nombre, rol, tagline, resumen, CTAs, disponibilidad si se aprueba |
| 3 | Servicios | Oferta profesional | 6 servicios derivados de la experiencia real |
| 4 | Proyectos destacados | Prueba de capacidad | 3 proyectos web/full stack con etiqueta de tipo |
| 5 | Otros proyectos | Amplitud técnica | 5 proyectos académicos agrupados |
| 6 | Experiencia | Trayectoria | Empleador confidencial, rol, fechas, logros, stack |
| 7 | Stack | Competencias | Tecnologías agrupadas por categoría |
| 8 | Sobre mí | Contexto humano | Bio breve y enfoque profesional |
| 9 | Contacto | Conversión | Email, LinkedIn, GitHub, disponibilidad |
| 10 | Footer | Cierre | Copyright, enlace al repositorio, nota de confidencialidad |
| — | 404 | Error | Mensaje y enlace a la home |

### 6.2 Navegación

- Enlaces: `#servicios`, `#proyectos`, `#experiencia`, `#stack`, `#sobre-mi`, `#contacto`.
- En desktop: navegación horizontal.
- En móvil: menú desplegable accesible con `aria-expanded`, cierre con `Escape` y restauración de foco.
- Skip link al inicio del `<main>`.
- El logo/monograma enlaza a `/`.

### 6.3 CTAs

| CTA | Destino | Comportamiento |
|---|---|---|
| Ver proyectos | `#proyectos` | Scroll suave, respetando `prefers-reduced-motion` |
| Hablemos | `mailto:` o LinkedIn | Abre el cliente de correo o LinkedIn |
| Descargar CV | PDF local | Descarga directa; se oculta si no hay CV aprobado |
| GitHub | Perfil público | Nueva pestaña con `rel="noopener noreferrer"` |
| LinkedIn | Perfil público | Nueva pestaña con `rel="noopener noreferrer"` |

---

## 7. Contenido verificado

> **Regla:** todo el contenido de esta sección debe ser validado por el propietario antes del deploy. Las métricas se publican tal como fueron declaradas; no se redondean ni se amplían.

### 7.1 Perfil

| Campo | Valor |
|---|---|
| Nombre público | Carlos Gutierrez |
| Rol | Desarrollador Full Stack |
| GitHub | https://github.com/cgutierr3z |
| LinkedIn | https://www.linkedin.com/in/cgutierr3z/ |
| Sitio | https://cgutierr3z.github.io/ |
| Email | `[PENDIENTE]` |
| Ubicación | `[PENDIENTE]` |
| Zona horaria | `[PENDIENTE]` |
| Disponibilidad | `[PENDIENTE]` |
| Foto | `[PENDIENTE]` |
| CV | `[PENDIENTE]` |

### 7.2 Experiencia

| Campo | Valor |
|---|---|
| Empresa | Empresa confidencial |
| Divulgación | “Nombre de la empresa no divulgado por confidencialidad.” |
| Rol | Desarrollador Full Stack |
| Periodo | Marzo 2023 – Julio 2026 |
| Ubicación / modalidad | `[PENDIENTE]` |

**Resumen:**

> Desarrollo, mantenimiento y soporte de aplicaciones empresariales con PHP, JavaScript, React, Form.io, Node.js y AWS Lambda. Participación en migraciones de formularios PHP/Yii 1 hacia React + Form.io, integración de APIs REST y migración de datos desde DB2 on-premise hacia PostgreSQL en la nube.

**Responsabilidades:**

- Desarrollo, mantenimiento y soporte de aplicaciones empresariales con PHP, JavaScript y herramientas web.
- Migración de formularios y funcionalidades desde PHP con Yii 1 hacia soluciones basadas en React y Form.io.
- Desarrollo de servicios y procesos de integración de datos con Node.js y Express.
- Consumo e integración de APIs REST con servicios en AWS Lambda.
- Migración de datos desde DB2 on-premise hacia PostgreSQL en la nube, utilizando CSV, APIs y generación de logs.
- Gestión de requerimientos e incidentes P1 y P2, incluyendo guardias mensuales.
- Creación y manejo de imágenes y contenedores Docker; participación en pipelines y despliegues.
- Trabajo con GitHub, Bitbucket y metodologías ágiles Scrum.

**Logros verificables:**

- Participación en la migración de formularios de más de 50 aplicaciones empresariales.
- Trabajo con dos tipos de CRM: aplicaciones internas y orientadas a clientes.
- Soporte y mantenimiento de soluciones utilizadas por entre 100 y 500 usuarios por instancia de producción.
- Participación en procesos de migración de datos entre infraestructura local y bases de datos en la nube.

**Stack:**

PHP, Yii 1, JavaScript, HTML5, CSS3, Node.js, Express, APIs REST, React, Form.io, Bootstrap, DB2, PostgreSQL, MySQL, AWS Lambda, Docker, CSV, pipelines, GitHub, Bitbucket, Postman, Jira, Linux, Scrum.

### 7.3 Proyectos

#### Proyectos destacados

| Proyecto | Tipo | Año | Descripción | Enlaces |
|---|---|---|---|---|
| `covidmap-col` | Personal | 2020 | Mapa interactivo de Colombia por regiones con casos COVID-19. Bootstrap + DataMaps. Demo activa con datos históricos. | [Demo](https://cgutierr3z.github.io/covidmap-col/) · [Repo](https://github.com/cgutierr3z/covidmap-col) |
| `coffee-shop` | Práctica | 2023 | Aplicación CodeIgniter 4 / PHP + JavaScript para gestión de productos y ventas. La demo original ya no está disponible. | [Repo](https://github.com/cgutierr3z/coffee-shop) |
| `pt-recisa` | Prueba técnica | 2022 | Prueba técnica de Angular, PHP y MariaDB con API y base de datos. | [Repo](https://github.com/cgutierr3z/pt-recisa) |

#### Otros proyectos — Fundamentos de ingeniería

| Proyecto | Tipo | Año | Descripción | Enlaces |
|---|---|---|---|---|
| `sparcv8-monocycle` | Académico | 2015 | Procesador monociclo de arquitectura SPARC V8 modelado en VHDL. | [Repo](https://github.com/cgutierr3z/sparcv8-monocycle) |
| `PHP-Compiler` | Académico | 2016 | Pequeño compilador para PHP usando PLY (Python-Lex-Yacc). | [Repo](https://github.com/cgutierr3z/PHP-Compiler) |

#### Otros proyectos — Juegos y gráficos

| Proyecto | Tipo | Año | Descripción | Enlaces |
|---|---|---|---|---|
| `NinjaVsEsmad` | Académico | 2015 | Proyecto final de Computación Gráfica, ISC UTP 2015; juego en Python. | [Repo](https://github.com/cgutierr3z/NinjaVsEsmad) |
| `PacmanShoot` | Académico | 2015 | Juego en Python/Pygame con control por mouse y dificultad progresiva. | [Repo](https://github.com/cgutierr3z/PacmanShoot) |
| `2048python` | Académico | 2015 | Versión del juego 2048 implementada con PyGame. | [Repo](https://github.com/cgutierr3z/2048python) |

**Reglas de presentación:**

- Los proyectos académicos no se presentan como clientes ni casos de éxito.
- `coffee-shop` y `pt-recisa` se etiquetan como práctica y prueba técnica, respectivamente.
- `covidmap-col` se etiqueta como proyecto personal y se advierte que los datos son históricos.
- Los proyectos sin demo muestran solo el enlace al repositorio.
- No se usarán capturas si no hay permiso; se puede usar un placeholder visual neutro.
- El diagrama de `sparcv8-monocycle` requiere confirmación de autoría/atribución.

### 7.4 Servicios

| # | Servicio | Descripción | Evidencia |
|---|---|---|---|
| 1 | Desarrollo y mantenimiento de aplicaciones web | Construcción y evolución de aplicaciones con PHP, JavaScript y React. | Experiencia profesional |
| 2 | Migración de aplicaciones y formularios | Migración de formularios y funcionalidades PHP/Yii 1 a React + Form.io. | Experiencia profesional |
| 3 | APIs REST e integraciones | Servicios y procesos de integración con Node.js/Express, APIs REST y AWS Lambda. | Experiencia profesional |
| 4 | Migración de datos | Procesos de migración DB2 → PostgreSQL con CSV, APIs y logs. | Experiencia profesional |
| 5 | Soporte y evolución | Gestión de incidentes P1/P2, guardias y mantenimiento de aplicaciones. | Experiencia profesional |
| 6 | Contenedores y despliegues | Docker, pipelines, GitHub y Bitbucket. | Experiencia profesional |

No se publicarán precios ni promesas de resultados.

### 7.5 Stack agrupado

| Categoría | Tecnologías |
|---|---|
| Backend | PHP, Yii 1, Node.js, Express, APIs REST, AWS Lambda |
| Frontend | JavaScript, React, Form.io, HTML5, CSS3, Bootstrap |
| Datos | DB2, PostgreSQL, MySQL |
| DevOps | Docker, pipelines, Linux, GitHub, Bitbucket |
| Herramientas | Postman, Jira, Scrum |

### 7.6 Copy preliminar

> Los siguientes textos son borradores basados en hechos verificados. Requieren aprobación antes del deploy.

**Hero — título:**

> Carlos Gutierrez
> Desarrollador Full Stack

**Hero — tagline:**

> Desarrollo, modernizo y mantengo aplicaciones empresariales.

**Hero — resumen:**

> Especializado en migraciones PHP/Yii 1 → React + Form.io, APIs REST con Node.js/Express y AWS Lambda, y migración de datos DB2 → PostgreSQL.

**Sobre mí:**

> Soy Carlos Gutierrez, desarrollador Full Stack. He trabajado en aplicaciones empresariales, migración de formularios a React + Form.io, integración de APIs y procesos de migración de datos. Me enfoco en construir soluciones mantenibles y acompañar su evolución.

**Contacto:**

> ¿Tienes un proyecto o una oportunidad? Hablemos.

**Footer:**

> © 2026 Carlos Gutierrez. Todos los derechos reservados.
> Nombre de la empresa colaboradora no divulgado por confidencialidad.

---

## 8. Requisitos funcionales

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| FR-001 | La home debe renderizar todas las secciones en el orden definido. | Existen Header, Hero, Servicios, Proyectos destacados, Otros proyectos, Experiencia, Stack, Sobre mí, Contacto y Footer. |
| FR-002 | La navegación por anclas debe funcionar en desktop y móvil. | Cada enlace lleva a la sección correcta; el menú móvil abre, cierra con `Escape` y restaura el foco. |
| FR-003 | El Hero debe mostrar nombre, rol, tagline, resumen y CTAs. | Los textos provienen de `src/data`; los CTAs funcionan. |
| FR-004 | Los servicios deben mostrarse en tarjetas. | Se muestran los 6 servicios aprobados, sin precios ni promesas no verificadas. |
| FR-005 | Los proyectos destacados deben mostrar tipo, año, descripción, stack y enlaces. | Los 3 proyectos destacados aparecen con etiquetas correctas. |
| FR-006 | Los otros proyectos deben agruparse por categoría. | “Fundamentos de ingeniería” y “Juegos y gráficos” se muestran en una grilla compacta. |
| FR-007 | La experiencia debe mostrarse de forma anonimizada. | Se ve “Empresa confidencial” y la nota de divulgación; no aparece el nombre real. |
| FR-008 | El stack debe agruparse por categoría. | Se muestran las 5 categorías aprobadas. |
| FR-009 | La sección Sobre mí debe mostrar una bio breve. | El texto está aprobado y no contiene afirmaciones no verificadas. |
| FR-010 | El contacto debe ofrecer email, LinkedIn y GitHub. | Los enlaces son correctos y externos abren en nueva pestaña con `rel` seguro. |
| FR-011 | El CV debe descargarse si está aprobado. | El botón aparece solo si existe el PDF aprobado; la descarga funciona. |
| FR-012 | El tema claro/oscuro debe funcionar y persistir. | Respeta `prefers-color-scheme`, alterna con un botón accesible y guarda la preferencia. |
| FR-013 | La página 404 debe existir. | GitHub Pages sirve `404.html` con enlace a la home. |
| FR-014 | El contenido debe ser data-driven. | Los textos y proyectos se editan en `src/data` sin tocar componentes. |
| FR-015 | La estructura debe estar preparada para i18n. | Las cadenas de UI están en `src/i18n/es.ts`; no hay selector en el MVP. |
| FR-016 | El sitio debe incluir metadatos SEO. | Title, description, canonical, OG y Twitter Card están presentes. |
| FR-017 | El sitio debe incluir JSON-LD `Person`. | El JSON-LD es válido y no incluye al empleador confidencial. |
| FR-018 | El sitio debe incluir sitemap y `robots.txt`. | `sitemap-index.xml` y `robots.txt` se generan/publican. |
| FR-019 | Las imágenes deben ser locales y optimizadas. | No hay hotlinking; las imágenes tienen dimensiones y `alt`. |
| FR-020 | Los enlaces externos deben ser seguros. | Todos usan `target="_blank"` y `rel="noopener noreferrer"`. |
| FR-021 | El sitio no debe incluir formularios ni trackers. | No hay `<form>`, cookies de analítica ni scripts de terceros. |
| FR-022 | El sitio debe ser responsive. | No hay scroll horizontal entre 360px y 1440px. |
| FR-023 | El sitio debe incluir una nota de confidencialidad. | El footer o la sección de experiencia indica que el nombre de la empresa no se divulga. |
| FR-024 | El sitio debe incluir el enlace al repositorio. | El footer enlaza al repositorio público. |

---

## 9. Requisitos no funcionales

| ID | Categoría | Requisito | Criterio de aceptación |
|---|---|---|---|
| NFR-001 | Arquitectura | Sitio estático, sin servidor propio. | `output: 'static'`; el build genera HTML/CSS/JS en `dist/`. |
| NFR-002 | Compatibilidad | GitHub Pages como único hosting. | El sitio funciona en la raíz del *user site*. |
| NFR-003 | Responsive | Diseño mobile-first. | Correcto en 360, 390, 768, 1024 y 1440px. |
| NFR-004 | Accesibilidad | WCAG 2.2 AA básico. | Sin violaciones críticas/serias en axe; navegación por teclado; contraste adecuado. |
| NFR-005 | Rendimiento | Lighthouse móvil ≥ 95. | Rendimiento, Accesibilidad, Buenas Prácticas y SEO ≥ 95. |
| NFR-006 | Rendimiento | LCP < 2.0s, CLS < 0.1, INP < 200ms. | Medido en Lighthouse móvil/4G. |
| NFR-007 | Rendimiento | JS inicial < 50KB gzip. | Solo tema y menú móvil; sin framework runtime. |
| NFR-008 | SEO | Metadatos y datos estructurados válidos. | Sin errores en Rich Results Test; canonical correcto. |
| NFR-009 | Privacidad | Sin cookies ni trackers. | No hay scripts de analítica ni almacenamiento no esencial. |
| NFR-010 | Seguridad | Sin secretos ni datos sensibles. | `.env*`, `opencode.json` y credenciales fuera de Git. |
| NFR-011 | Confidencialidad | Sin nombre del empleador. | Búsqueda local en `src/` y `dist/` sin coincidencias. |
| NFR-012 | Mantenibilidad | Contenido tipado y centralizado. | TypeScript strict; datos en `src/data`; sin duplicación. |
| NFR-013 | i18n | Preparado para inglés. | Cadenas de UI en `src/i18n/es.ts`; sin selector en el MVP. |
| NFR-014 | Compatibilidad | Navegadores modernos. | Últimas 2 versiones de Chrome, Firefox, Safari y Edge; iOS Safari 16+. |
| NFR-015 | Calidad | Sin errores de consola. | Consola limpia en la home y 404. |
| NFR-016 | Despliegue | Deploy automático y reproducible. | Workflow exitoso desde `master`; build con lockfile. |
| NFR-017 | Contenido | Sin datos inventados. | Cada afirmación es trazable a este spec o al propietario. |
| NFR-018 | Legal | Copyright y atribuciones. | Footer con copyright; licencias de assets respetadas. |

---

## 10. Arquitectura técnica

### 10.1 Stack

| Componente | Elección |
|---|---|
| Framework | Astro 7.x, salida estática |
| Lenguaje | TypeScript strict |
| Estilos | Tailwind CSS 4.x + variables CSS |
| Gestor | Bun 1.4.x |
| Runtime local | Node.js ≥ 22.22 (entorno actual: 26.8.1) |
| Deploy | GitHub Actions + GitHub Pages |
| Tests | `astro check`, Playwright, axe |
| SEO | `@astrojs/sitemap` |
| Control de versiones | Git + GitHub |

**Versiones fijadas al iniciar la implementación:**

| Paquete | Versión |
|---|---|
| `astro` | `7.4.1` |
| `tailwindcss` | `4.3.3` |
| `@tailwindcss/vite` | `4.3.3` |
| `@astrojs/sitemap` | `3.7.4` |
| `@astrojs/check` | `0.9.11` |
| `typescript` | `6.0.3` |
| `@playwright/test` | `1.64.1` |
| `@axe-core/playwright` | `4.14.0` |
| `lighthouse` | `13.5.0` |
| Bun | `1.4.3` |

> **Nota:** `typescript@7.0.2` no es compatible con el peer dependency de `@astrojs/check@0.9.11`; se fijó `6.0.3`. Verificar compatibilidad al actualizar.

### 10.2 Estructura de carpetas prevista

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── spec-001.md
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── .nojekyll
│   ├── cv/
│   │   └── [cv-aprobado].pdf
│   └── projects/
│       └── [capturas-aprobadas].webp
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── MobileNav.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── OtherProjects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Experience.astro
│   │   ├── Stack.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── ThemeToggle.astro
│   │   └── Section.astro
│   ├── data/
│   │   ├── profile.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── technologies.ts
│   ├── i18n/
│   │   └── es.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── tests/
│   └── e2e/
│       └── portfolio.spec.ts
├── astro.config.mjs
├── package.json
├── bun.lock
├── tsconfig.json
├── playwright.config.ts
├── .gitignore
└── README.md
```

### 10.3 Modelo de contenido

```ts
// src/data/types.ts
export type Locale = 'es';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location?: string;
  timezone?: string;
  availability?: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl?: string;
  photo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'migration' | 'api' | 'data' | 'support' | 'docker';
}

export type ProjectType = 'personal' | 'practice' | 'technical-test' | 'academic';
export type ProjectCategory = 'web' | 'fundamentals' | 'games';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'demo' | 'repo';
}

export interface Project {
  slug: string;
  name: string;
  title: string; // Nombre visible en el sitio (puede diferir del slug)
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
  company: string; // "Empresa confidencial"
  companyConfidential: boolean;
  role: string;
  start: string; // ISO-like: "2023-03"
  end: string | null; // "2026-07"
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
  ogImage: string;
  locale: string;
}
```

### 10.4 Componentes

- `BaseLayout.astro`: `<html lang="es">`, `<head>`, skip link, header, `<main>`, footer, theme script.
- `SEO.astro`: title, description, canonical, OG, Twitter, JSON-LD.
- `Header.astro`: navegación desktop, toggle de tema, CTA.
- `MobileNav.astro`: menú accesible.
- `Hero.astro`: nombre, rol, tagline, resumen, CTAs, foto/monograma.
- `Services.astro`: grid de 6 tarjetas.
- `FeaturedProjects.astro`: 3 tarjetas destacadas.
- `OtherProjects.astro`: grilla compacta agrupada.
- `ProjectCard.astro`: tipo, año, descripción, stack, enlaces, imagen opcional.
- `Experience.astro`: timeline/ tarjeta de experiencia confidencial.
- `Stack.astro`: grupos de tecnologías.
- `About.astro`: bio.
- `Contact.astro`: email, LinkedIn, GitHub.
- `Footer.astro`: copyright, repositorio, nota de confidencialidad.
- `ThemeToggle.astro`: botón accesible.
- `Section.astro`: wrapper semántico con título y `aria-labelledby`.

### 10.5 Theming

- Tokens CSS: `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-border`, `--color-accent`, `--color-accent-contrast`, `--color-focus`.
- Tema por atributo `data-theme="light|dark"` en `<html>`.
- Preferencia inicial: `localStorage` > `prefers-color-scheme` > `light`.
- Script inline mínimo en `<head>` para evitar flash de tema incorrecto.
- Persistencia en `localStorage` con clave `theme`.
- Botón con `aria-label` y estado visible.
- Sin animaciones que ignoren `prefers-reduced-motion`.

### 10.6 i18n

- `src/i18n/es.ts` contiene cadenas de UI: navegación, botones, labels, mensajes de 404, footer.
- Los datos de contenido (`profile`, `services`, `projects`, `experience`, `technologies`) están en español.
- No hay selector de idioma en el MVP.
- La estructura debe permitir añadir `src/i18n/en.ts` y una ruta `/en/` en el futuro.
- `lang="es"` en `<html>`.

### 10.7 SEO

- `site: 'https://cgutierr3z.github.io'` en `astro.config.mjs`.
- `base: '/'`.
- Title: `Carlos Gutierrez | Desarrollador Full Stack`.
- Description: `Portafolio de Carlos Gutierrez, desarrollador Full Stack con experiencia en PHP, JavaScript, React, Node.js, Form.io y migración de aplicaciones.`
- Canonical: `https://cgutierr3z.github.io/`.
- Open Graph: `og:type=website`, `og:title`, `og:description`, `og:url`, `og:image` (1200×630).
- Twitter Card: `summary_large_image`.
- JSON-LD `Person`:
  - `name`: Carlos Gutierrez
  - `jobTitle`: Desarrollador Full Stack
  - `url`: https://cgutierr3z.github.io/
  - `sameAs`: GitHub, LinkedIn
  - `knowsAbout`: PHP, JavaScript, React, Node.js, Form.io, APIs REST, AWS Lambda, PostgreSQL
  - No incluir `worksFor` ni el nombre del empleador.
- `sitemap-index.xml` vía `@astrojs/sitemap`.
- `robots.txt` con `Allow: /` y URL del sitemap.
- Favicon SVG con monograma `CG` o logo aprobado.

### 10.8 Imágenes

- Usar `<Image />` de Astro para imágenes locales.
- Formatos: AVIF/WebP; fallback si es necesario.
- Dimensiones explícitas para evitar CLS.
- `loading="lazy"` para imágenes bajo el pliegue.
- `loading="eager"` y `fetchpriority="high"` solo para la imagen principal si existe.
- `alt` descriptivo; imágenes decorativas con `alt=""`.
- No hotlinking.
- Screenshots solo con permiso del propietario.
- Si no hay captura, usar un placeholder visual neutro generado con CSS, no una imagen falsa.
- OG image estática de 1200×630; sin nombre del empleador.

### 10.9 Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`.
- Un solo `<h1>`.
- Jerarquía de encabezados correcta.
- Skip link visible al enfocar.
- Foco visible en todos los elementos interactivos.
- Contraste mínimo 4.5:1 para texto normal y 3:1 para texto grande.
- Objetivos táctiles ≥ 44×44px.
- Navegación completa por teclado.
- Menú móvil: `aria-expanded`, `aria-controls`, cierre con `Escape`, foco restaurado.
- Toggle de tema: `aria-label`/`aria-pressed`.
- Enlaces externos: indicar que abren en nueva pestaña mediante texto visible o `sr-only`.
- `prefers-reduced-motion`.
- Sin autoplay.
- Formularios: no aplica en el MVP.
- Probar con axe y revisión manual.

### 10.10 Rendimiento

- Sin hidratación de framework.
- JS solo para tema y menú móvil.
- CSS compilado con Tailwind; sin librerías de UI pesadas.
- Fuentes del sistema por defecto; si se usa una fuente personalizada, autoalojarla en WOFF2 y precargarla.
- Sin Google Fonts ni CDNs de terceros.
- Imágenes optimizadas y dimensionadas.
- Evitar animaciones costosas; usar `transform`/`opacity`.
- Presupuesto: JS inicial < 50KB gzip; CSS < 50KB gzip; LCP < 2.0s; CLS < 0.1.

### 10.11 Seguridad y privacidad

- Sin backend ni base de datos.
- Sin secretos en el repositorio.
- `.gitignore` debe incluir:
  - `node_modules/`
  - `dist/`
  - `.astro/`
  - `.engram/`
  - `opencode.json`
  - `.env`
  - `.env.*`
  - `!.env.example`
  - `.DS_Store`
  - `*.log`
  - `playwright-report/`
  - `test-results/`
  - `.lighthouseci/`
- No incluir el nombre del empleador confidencial en ningún archivo.
- El CV público debe revisarse; si contiene el nombre del empleador, redactarlo o no publicarlo.
- LinkedIn puede revelar el nombre del empleador; el propietario debe confirmar si la restricción aplica solo al sitio.
- Email público: usar una dirección profesional; no publicar teléfono ni dirección.
- Enlaces externos con `rel="noopener noreferrer"`.
- Sin cookies, analytics ni píxeles de seguimiento.
- Sin `source maps` en producción.
- Revisar dependencias antes del deploy.

### 10.12 Despliegue

Workflow `.github/workflows/deploy.yml`:

- Trigger: `push` a `master` y `workflow_dispatch`.
- Permisos: `contents: read`, `pages: write`, `id-token: write`.
- Concurrencia: grupo `pages`, `cancel-in-progress: false`.
- Jobs:
  1. **build**:
     - `actions/checkout@v7.0.1`
     - `oven-sh/setup-bun@v2.2.0` con `bun-version: 1.4.3`
     - `bun install --frozen-lockfile`
     - `bun run check`
     - `bun run build`
     - `bunx playwright install --with-deps chromium`
     - `bun run test:e2e --reporter=line` (E2E + axe)
     - `actions/upload-pages-artifact@v5.0.0` con `path: dist`
  2. **deploy**:
     - `actions/deploy-pages@v5.0.1`
     - environment `github-pages`
- Cambio manual requerido: Settings → Pages → Source = **GitHub Actions**.
- `public/.nojekyll` para evitar procesamiento de Jekyll.
- `astro.config.mjs`: `site` y `base` correctos.
- Rollback: revertir el commit y volver a desplegar.
- Acciones fijadas por versión exacta; actualizar deliberadamente al renovar el workflow.

### 10.13 Git y workflow

- Crear rama `feat/spec-001-portfolio` desde `master`.
- Commits con convención: `feat:`, `fix:`, `docs:`, `test:`, `chore:`.
- Abrir PR hacia `master`.
- El PR debe pasar `bun run check`, `bun run build` y tests.
- Merge a `master` dispara el deploy.
- No commitear `opencode.json`, `dist`, `node_modules`, `.astro`, `.engram`.
- Actualizar `README.md` con:
  - Descripción del proyecto.
  - Stack.
  - Requisitos (Bun, Node).
  - Scripts.
  - Cómo editar contenido.
  - Cómo desplegar.
  - Nota de confidencialidad.
  - Enlace a `docs/spec-001.md`.

---

## 11. Plan de tareas

| ID | Tarea | Depende de | Criterio de aceptación |
|---|---|---|---|
| T-001 | Higiene del repositorio: `.gitignore`, README base, rama de trabajo. | — | `opencode.json` ignorado; rama creada; README inicial. |
| T-002 | Scaffold de Astro + TypeScript + Tailwind + Bun. | T-001 | `bun install`, `bun run dev` y `bun run build` funcionan. |
| T-003 | Configuración de Astro, TypeScript strict, Tailwind y estructura de carpetas. | T-002 | Build estático en `dist/`; tipos sin errores. |
| T-004 | Tokens de diseño, estilos globales y layout base. | T-003 | Tema claro/oscuro base; contenedores y tipografía. |
| T-005 | Modelo de datos tipado y contenido inicial en `src/data`. | T-003 | Datos de perfil, servicios, proyectos, experiencia y stack. |
| T-006 | Header, navegación desktop/móvil y skip link. | T-004, T-005 | Navegación accesible y responsive. |
| T-007 | Hero con CTAs y foto/monograma. | T-005, T-006 | Nombre, rol, tagline y CTAs visibles. |
| T-008 | Sección de Servicios. | T-005, T-004 | 6 tarjetas con contenido aprobado. |
| T-009 | Proyectos destacados y otros proyectos. | T-005, T-004 | 3 destacados + 5 secundarios con etiquetas y enlaces. |
| T-010 | Experiencia anonimizada. | T-005, T-004 | Empresa confidencial, fechas, logros y stack. |
| T-011 | Stack, Sobre mí y Contacto. | T-005, T-004 | Secciones completas; enlaces funcionando. |
| T-012 | Footer, copyright y nota de confidencialidad. | T-011 | Footer completo; enlace al repo. |
| T-013 | Toggle de tema persistente. | T-004, T-006 | Cambia y persiste; sin flash. |
| T-014 | Página 404. | T-004 | `404.html` generado; enlace a home. |
| T-015 | SEO, JSON-LD, sitemap, robots, favicon y OG. | T-003, T-012 | Metadatos válidos; sitemap y robots publicados. |
| T-016 | Optimización de imágenes y assets. | T-009, T-015 | Imágenes locales, dimensionadas y con `alt`. |
| T-017 | Tests Playwright + axe. | T-009, T-013, T-014 | Tests de home, nav, tema, enlaces, 404 y accesibilidad. |
| T-018 | Workflow de GitHub Actions y configuración de Pages. | T-002, T-017 | Deploy exitoso a GitHub Pages. |
| T-019 | Content gate: reemplazar placeholders y validar copy. | T-009, T-010, T-011 | Todo el contenido aprobado; sin placeholders. |
| T-020 | Auditoría de confidencialidad y revisión final. | T-019, T-018 | Sin nombre del empleador; `code-reviewer` sin bloqueantes (o auditoría manual equivalente si no está disponible). |

### 11.1 Registro de tareas ejecutadas

| ID | Estado | Evidencia |
|---|---|---|
| T-001 | Completada | `.gitignore` (con `opencode.json`), `README.md` reescrito, rama `feat/spec-001-portfolio` creada. |
| T-002 | Completada | `package.json` con Astro 7.4.1, `bun.lock`, `bun install` OK, `bun run build` OK. |
| T-003 | Completada | `astro.config.mjs`, `tsconfig.json` (astro/tsconfigs/strict), estructura `src/`. |
| T-004 | Completada | Tokens de tema por variable, layout base, skip link, favicon SVG monograma, sitemap. |
| T-005 | Completada | 8 proyectos, experiencia tipo portal con métricas, tipos/límites e íconos definidos en `src/data/*` y `src/i18n/es.ts`. |
| T-006 | Completada | Header sticky, nav de escritorio, menú móvil accesible, skip link en BaseLayout. |
| T-007 | Completada | Hero con h1 compuesto (nombre+rol), tarjeta lateral con card visual de stacks, CTAs navegación y externos. |
| T-008 | Completada | 6 servicios con iconos SVG por tema. |
| T-009 | Completada | 3 destacados + 5 secundarios agrupados por categoría (fundamentos/juegos). |
| T-010 | Completada | Experiencia con fechas en español, logros, responsabilidades en `<details>`, stack y nota de confidencialidad. |
| T-011 | Completada | Stack, Sobre mí y Contacto; contacto con GitHub, LinkedIn y email en `profile.ts` (añadido por el propietario; confirmación final pendiente). |
| T-012 | Completada | Footer con copyright dinámico, enlaces y nota de confidencialidad. |
| T-013 | Completada | Toggle de tema único, persistencia en `localStorage`; sin FOUC. |
| T-014 | Completada | `404.astro` con `noindex`, título descriptivo y enlace a `/`. |
| T-015 | Completada | `SEO.astro` con title, description, canonical, Open Graph, Twitter Card y JSON-LD; `og-image.png` y `robots.txt`; sitemap; hostname configurado en `astro.config.mjs`. |
| T-016 | Completada | Imágenes (`og-image.png`, favicon SVG monograma) locales; `alt` en elementos visuales; sin imágenes remotas. |
| T-017 | Completada | `tests/portfolio.spec.ts` (11 casos E2E) + `tests/a11y.spec.ts` (0 violaciones críticas/serias en `/` y `404.html`). |
| T-018 | Completada | `.github/workflows/deploy.yml` con acciones fijadas, Bun 1.4.3, `check`, `build`, Playwright/axe en CI y deploy a Pages. Primera ejecución real exitosa: run `39369166799`; jobs `build` y `deploy` en verde. |
| T-019 | Completada | Aprobados: email, rol “Desarrollador Full Stack”, “+50 aplicaciones”, “100–500 usuarios” y “2 tipos de CRM”; se eliminaron las referencias a los ~5 endpoints. Copy/roles de proyectos, CV saneado y educación aprobados. El CV público está en `public/cv/carlos-gutierrez-cv.pdf`, sin empleadores, teléfono ni dirección. LinkedIn revisado y aprobado por el propietario. |
| T-020 | Completada con salvedad | Auditoría manual y smoke live sin bloqueantes: home/CV/404/sitemap/robots/OG correctos, axe 0 violaciones serias/críticas, 0 errores de consola y confidencialidad limpia. El subagente `code-reviewer` no estuvo disponible por cuenta/cuota; se sustituyó por revisión manual. |

---

## 12. Estrategia de pruebas

### 12.1 Checks automáticos

- `bun run check`: `astro check` + validación TypeScript.
- `bun run build`: build estático sin errores.
- `bun run test:e2e`: Playwright.
- `bun run test:e2e:headed`: Playwright en modo con head visible.
- `bun run test:a11y`: axe integrado en Playwright o comando equivalente.
- `bun run test:lighthouse`: Lighthouse CLI (necesita servidor de preview en `4321` y `CHROME_PATH` apuntando a Chromium/Chrome).

### 12.2 Playwright — casos mínimos

1. La home carga y muestra el `<h1>` con el nombre.
2. Existen todas las secciones esperadas.
3. Los enlaces de navegación llevan a las anclas correctas.
4. El menú móvil abre, cierra con `Escape` y devuelve el foco.
5. El toggle de tema cambia y persiste tras recargar.
6. Los enlaces externos tienen `target="_blank"` y `rel` seguro.
7. El botón de CV existe solo si hay CV y descarga un PDF.
8. La página 404 se sirve y enlaza a la home.
9. No hay scroll horizontal a 360px.
10. No hay errores de consola en home ni 404.

### 12.3 Accesibilidad

- axe sin violaciones críticas/serias.
- Navegación completa con teclado.
- Foco visible.
- Contraste validado.
- `prefers-reduced-motion` respetado.
- Revisión manual con lector de pantalla básico (VoiceOver/NVDA) si es posible.

### 12.4 Rendimiento

- Lighthouse móvil ≥ 95 en las cuatro categorías.
- LCP < 2.0s, CLS < 0.1, INP < 200ms.
- JS inicial < 50KB gzip.
- Sin solicitudes a dominios de terceros.

### 12.5 Revisión manual

- Revisar copy contra este spec.
- Verificar enlaces externos.
- Verificar que `coffee-shop` no tenga enlace a demo caída.
- Verificar que `covidmap-col` advierta datos históricos.
- Verificar que no aparezca el nombre del empleador.
- Revisar CV público si existe.
- Revisar metadatos con Rich Results Test.
- Revisar el sitio en Chrome, Firefox y Safari.

### 12.6 Confidencialidad

- Buscar el nombre real del empleador en `src/`, `public/`, `dist/`, `docs/`, `README.md` y tests **sin incluirlo en el repositorio**. La búsqueda se hace localmente con el valor real fuera de Git.
- Revisar el PDF del CV.
- Revisar el perfil de LinkedIn si la restricción aplica más allá del sitio.
- Revisar metadatos, JSON-LD, `alt`, títulos y commits.
- Si se detecta una coincidencia, bloquear el deploy.

---

### Estado de ejecución (2026-10-20)

- T-001 – T-020: completadas. Merge squash en `master` (`60cfbe2`).
- Resultados locales: `bun install --frozen-lockfile` sin cambios; `bun run check` 0 errores; `bun run build` OK (2 páginas); `bunx playwright test` 12/12 OK; axe 0 violaciones críticas/serias; Lighthouse móvil final: performance 100, accessibility 100, best-practices 100, seo 100.
- T-018: workflow de deploy con acciones fijadas, Bun, check/build, Playwright/axe y deploy a Pages. Run `39369166799` exitoso; jobs `build` y `deploy` en verde.
- T-019: email, rol, “+50 aplicaciones”, “100–500 usuarios”, “2 tipos de CRM”, proyectos, CV saneado y educación aprobados. Se eliminaron las referencias a los ~5 endpoints. El CV público se genera con `bun run cv:generate` y se publica en `public/cv/carlos-gutierrez-cv.pdf`. LinkedIn revisado y aprobado.
- T-020: validación live: home 200; CV 200 `application/pdf`; ruta inexistente 404 con `noindex`; sitemap, robots y OG 200; sin scroll horizontal de 360 a 1440 px; tema persistente; menú móvil accesible; 0 errores de consola; 0 violaciones axe críticas/serias. Confidencialidad limpia en árbol, historial, `dist/` y PDF.
- `code-reviewer` no pudo ejecutarse por un error de cuenta/cuota; la auditoría se completó manualmente y con smoke live.

---

## 13. Criterios de aceptación globales

- [x] `bun install --frozen-lockfile` funciona con el lockfile actual.
- [x] `bun run check` pasa sin errores.
- [x] `bun run build` genera `dist/` correctamente.
- [x] Los tests de Playwright pasan (12/12).
- [x] axe no reporta violaciones críticas/serias.
- [x] Lighthouse móvil ≥ 95 en Rendimiento, Accesibilidad, Buenas Prácticas y SEO (100/100/100/100).
- [x] La home es responsive de 360px a 1440px sin scroll horizontal.
- [x] Todas las secciones y CTAs funcionan.
- [x] El tema claro/oscuro funciona y persiste.
- [x] La página 404 funciona en GitHub Pages.
- [x] El CV descarga correctamente, si está aprobado.
- [x] No hay placeholders en producción.
- [x] No aparece el nombre del empleador confidencial.
- [x] No hay cookies, analytics ni trackers.
- [x] No hay secretos en el repositorio.
- [x] `opencode.json` no está versionado.
- [x] El workflow de GitHub Actions despliega correctamente.
- [x] El README documenta setup, contenido y deploy.
- [ ] `code-reviewer` no reporta defectos bloqueantes — no disponible por error de cuenta/cuota; sustituido por auditoría manual y smoke live.
- [x] El propietario aprueba el contenido final.

---

## 14. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Faltan email, CV, foto o descripciones | El sitio no puede publicarse sin placeholders | Content gate antes del deploy; ocultar secciones opcionales |
| El nombre del empleador aparece en el CV o LinkedIn | Incumplimiento de confidencialidad | Revisar/redactar CV; confirmar alcance con el propietario |
| Se filtra el nombre en código, metadatos o commits | Incumplimiento de confidencialidad | Búsqueda local obligatoria; revisión de `dist/`; bloqueo de deploy |
| `coffee-shop` tiene demo caída | Enlace roto | Enlazar solo el repositorio |
| `covidmap-col` muestra datos desactualizados | Información engañosa | Etiquetar como datos históricos de 2020 |
| Los proyectos académicos diluyen el perfil Full Stack | Mala percepción | Destacar los 3 proyectos web; agrupar los académicos en “Otros” |
| No hay casos profesionales públicos | Menor prueba de experiencia | La sección Experiencia anonimizada cubre la trayectoria |
| Astro/Tailwind/TypeScript incompatibles | Bloqueo de build | Verificar versiones y fijar lockfile al inicio |
| Bun no disponible en CI | Deploy falla | `oven-sh/setup-bun`; fallback documentado a npm/Node |
| Cambio de fuente de Pages no aplicado | El sitio no se actualiza | Verificar Settings → Pages → GitHub Actions |
| `opencode.json` se commitea por error | Configuración personal publicada | `.gitignore` + revisión de `git status` |
| `docs/spec.md` no existe y el workflow lo espera | El agente no encuentra la spec | Usar `docs/spec-001.md`; crear copia solo si se aprueba |
| Imágenes sin permiso | Problema legal | Usar solo capturas autorizadas o placeholders neutros |

---

## 15. Preguntas y contenido pendiente

| # | Dato | Necesario para | Bloquea deploy | Estado |
|---|---|---|---|---|
| 1 | Email profesional | Contacto y footer | Sí | Aprobado: `cgutierrez@utp.edu.co` |
| 2 | CV en PDF | Descarga de CV | Sí, si se publica CV | Publicado saneado en `public/cv/carlos-gutierrez-cv.pdf` |
| 3 | Foto profesional | Hero/Sobre mí | No; usar monograma | Omitida; se usa monograma |
| 4 | Ubicación y zona horaria | Hero/Contacto | No | Omitida |
| 5 | Disponibilidad | Hero/Contacto | No | Omitida |
| 6 | Descripción y rol en `coffee-shop` | Proyecto destacado | Sí | Aprobado con el copy actual |
| 7 | Descripción y rol en `pt-recisa` | Proyecto destacado | Sí | Aprobado con el copy actual |
| 8 | Descripción y rol en los 5 proyectos académicos | Otros proyectos | Sí | Aprobado con el copy actual |
| 9 | Individual/equipo en proyectos académicos | Atribución | Sí | Aprobado con el copy actual; sin atribuciones a terceros |
| 10 | Permiso para screenshots | Imágenes de proyectos | No; usar placeholder | Cerrado: no se usan screenshots |
| 11 | Autoría del diagrama de `sparcv8-monocycle` | Atribución | No; omitir imagen | Cerrado: no se usa el diagrama |
| 12 | Confirmación de publicación de métricas | Experiencia | Sí | Aprobado: 100–500 usuarios y 2 tipos de CRM; ~5 endpoints eliminados |
| 13 | Alcance de la confidencialidad (sitio, CV, LinkedIn) | Privacidad | Sí | CV: todos los empleadores anonimizados; LinkedIn revisado y aprobado |
| 14 | Aprobación de tagline, bio y servicios | Copy final | Sí | Aprobado con el copy actual |
| 15 | Formulario de contacto | Alcance | No; default no | Cerrado: no |
| 16 | Analítica | Alcance | No; default no | Cerrado: no |
| 17 | Dominio propio | Alcance | No; default no | Cerrado: no |
| 18 | Educación, certificaciones e idiomas | Secciones opcionales | No | Pendiente |
| 19 | Color de acento, tipografía y logo | Diseño | No; usar default | Pendiente |
| 20 | `docs/spec.md` vs `docs/spec-001.md` | Flujo SDD | No | Pendiente |

> El `spec-architect` puede redactar la especificación con estos campos como `[PENDIENTE]`. El deploy no debe ejecutarse hasta resolver los bloqueantes.

### 15.1 Decisiones provisionales de la implementación

Mientras el propietario confirma cada ítem, la implementación aplica lo siguiente sin inventar datos:

- Item 1: email aprobado (`cgutierrez@utp.edu.co`) y presente en `profile.ts`.
- Item 2: CV saneado publicado en `public/cv/carlos-gutierrez-cv.pdf`; se genera con `bun run cv:generate`. Todos los empleadores aparecen como “Empresa confidencial”; no hay teléfono ni dirección.
- Items 3-5: foto, ubicación y disponibilidad omitidas; el hero usa el monograma `CG`.
- Items 6-9: copy y roles actuales aprobados por el propietario; sin atribuciones a terceros.
- Items 10-11: no se usan screenshots ni el diagrama de `sparcv8-monocycle`.
- Item 12: aprobadas “100–500 usuarios” y “2 tipos de CRM”; se eliminaron las referencias a los ~5 endpoints del sitio y del CV.
- Item 13: el CV anonimiza todos los empleadores; LinkedIn fue revisado y aprobado por el propietario.
- Item 18: educación incluida en el CV; idiomas omitidos; sin certificaciones publicadas.
- Item 19: acento teal (`#0f766e`/`#2dd4bf`), tipografía por sistema (`ui-sans-serif`), logo monograma `CG`.
- El contenido del repositorio y del sitio está aprobado; el sitio está desplegado y validado. T-020 se cerró con auditoría manual y smoke live; `code-reviewer` no estuvo disponible.

---

## 16. Definición de terminado

Una tarea se considera terminada cuando:

1. Cumple su criterio de aceptación.
2. No introduce contenido inventado.
3. No introduce el nombre del empleador confidencial.
4. Pasa `bun run check` y `bun run build`.
5. Mantiene la accesibilidad y el rendimiento.
6. Actualiza la documentación si cambia el comportamiento.
7. Pasa la revisión de `code-reviewer`.

El proyecto se considera terminado cuando:

1. Todos los requisitos funcionales y no funcionales se cumplen.
2. El contenido está aprobado y sin placeholders.
3. La auditoría de confidencialidad está limpia.
4. El deploy en GitHub Pages es exitoso.
5. El propietario aprueba el sitio publicado.

---

## 17. Anexos

### A. Inventario de archivos inicial

| Archivo | Estado |
|---|---|
| `README.md` | Existe; se reescribirá |
| `opencode.json` | Existe; se ignorará en Git |
| `docs/spec-001.md` | Este documento |
| `.gitignore` | No existe; se creará |
| `package.json` | No existe; se creará |
| `astro.config.mjs` | No existe; se creará |
| `src/` | No existe; se creará |
| `public/` | No existe; se creará |
| `.github/workflows/deploy.yml` | No existe; se creará |
| `tests/` | No existe; se creará |

### B. SEO preliminar

```text
Title: Carlos Gutierrez | Desarrollador Full Stack
Description: Portafolio de Carlos Gutierrez, desarrollador Full Stack con
experiencia en PHP, JavaScript, React, Node.js, Form.io y migración de
aplicaciones.
Canonical: https://cgutierr3z.github.io/
OG image: /og-image.png (1200×630)
Twitter: summary_large_image
```

### C. Checklist de contenido antes del deploy

- [x] Nombre y rol aprobados.
- [x] Email aprobado.
- [x] CV aprobado y revisado por confidencialidad, si se publica.
- [x] Foto no usada; se mantiene el monograma.
- [x] Ubicación, zona horaria y disponibilidad no usadas.
- [x] Tagline, resumen y bio aprobados.
- [x] Servicios aprobados.
- [x] Experiencia anonimizada aprobada.
- [x] Métricas aprobadas: 100–500 usuarios y 2 tipos de CRM; sin referencia a ~5 endpoints.
- [x] Descripciones y roles de los 8 proyectos aprobados.
- [x] Etiquetas de tipo de proyecto aprobadas.
- [x] Enlaces de demo/repositorio verificados.
- [x] Screenshots no usados; se mantienen tarjetas neutras.
- [x] Sin nombre del empleador en el contenido.
- [x] Sin datos inventados.
- [ ] Sin placeholders en producción.

### D. Nota sobre el flujo SDD

El `opencode.json` actual referencia `docs/spec.md` en el workflow SDD. Esta iteración usa `docs/spec-001.md` para versionar la especificación. Opciones antes de implementar:

1. Indicar al `feature-coder` que lea `docs/spec-001.md` explícitamente.
2. Crear `docs/spec.md` como copia o enlace a `docs/spec-001.md`, si el flujo lo requiere.
3. Ajustar el workflow en una decisión posterior, sin cambiar agentes ni modelos.

No se modificará `opencode.json` en esta fase.

### E. Glosario

| Término | Definición |
|---|---|
| MVP | Producto mínimo viable: one-page + 404, sin backend ni CMS. |
| Content gate | Revisión y aprobación del propietario antes de publicar. |
| User site | Sitio de GitHub Pages publicado en `https://usuario.github.io/`. |
| LCP | Largest Contentful Paint, métrica de rendimiento. |
| CLS | Cumulative Layout Shift, métrica de estabilidad visual. |
| INP | Interaction to Next Paint, métrica de interactividad. |
| axe | Herramienta automatizada de auditoría de accesibilidad. |

---

**Fin de SPEC-001.**
