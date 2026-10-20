# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Prioritario:** reclutadores técnicos y hiring managers que revisan portafolios de desarrollo Full Stack. Suelen llegar desde LinkedIn, GitHub o el CV, comparan perfiles y necesitan entender en menos de dos minutos el nivel de experiencia, el stack, el tipo de problemas resueltos y cómo contactar.

**Secundario:** clientes potenciales de servicios freelance. La oferta de servicios existe, pero no es la audiencia que debe guiar este rediseño.

## Product Purpose

Portafolio personal one-page de Carlos Gutierrez, desarrollador Full Stack. Existe para convertir una revisión rápida en una conversación profesional: demostrar experiencia real, criterio técnico y capacidad de entrega mediante proyectos y trayectoria verificables.

El éxito significa que un reclutador pueda identificar el perfil, reconocer al menos dos proyectos relevantes y encontrar una vía de contacto sin fricción.

## Positioning

Perfil híbrido entre producto e implementación: experiencia construyendo y manteniendo aplicaciones web completas, con migraciones de PHP/Yii a React, integración de pagos y trabajo con sistemas CRM. La evidencia son proyectos y responsabilidades concretas, no afirmaciones genéricas.

## Operating Context

- Evaluación en navegador, principalmente escritorio y también móvil.
- Llegada desde enlaces profesionales externos y desde el CV.
- Comparación con otros portafolios; la decisión inicial ocurre en los primeros segundos.
- Sitio estático publicado en GitHub Pages, en español.
- Tema claro y oscuro.
- CV público descargable en PDF.
- Contenido y métricas aprobados previamente; no se deben inventar proyectos, clientes, certificaciones ni resultados.

## Capabilities and Constraints

- Sitio one-page con secciones de perfil, servicios, proyectos destacados, otros proyectos, stack, experiencia, sobre mí y contacto.
- Ocho proyectos aprobados; `coffee-shop` y `pt-recisa` son los destacados.
- Métricas aprobadas: **+50 aplicaciones**, **100–500 usuarios** y **2 tipos de CRM**.
- Sin formulario de contacto, analítica, backend, casos de estudio anónimos ni dominio propio.
- Sin publicar el nombre del empleador; se usa “Empresa confidencial”.
- Sin foto, teléfono, dirección ni ubicación en el CV público.
- Sin testimonios, logos de clientes ni resultados no documentados.
- Stack existente: Astro 7+, TypeScript strict, Tailwind CSS 4 y Bun.
- La dirección visual actual (paleta teal, composición y tipografía) es evidencia del sistema vigente, no un compromiso de marca confirmado. El rediseño visual completo está aprobado; el tema claro/oscuro y la confidencialidad se mantienen.

## Brand Commitments

- Nombre exacto: **Carlos Gutierrez**.
- Tono profesional, directo y sobrio; sin hype ni promesas no verificables.
- Confidencialidad estricta del empleador real.
- No hay logotipo, fotografía ni testimonios aprobados; no inventarlos.
- El sitio debe seguir siendo reconocible como el portafolio de Carlos, no como una plantilla genérica.

## Evidence on Hand

- Ocho proyectos descritos en `src/data/projects.ts`, con roles, stacks y resultados aprobados.
- Experiencia y métricas en `src/data/experience.ts`.
- Perfil, email, GitHub, LinkedIn y URL del CV en `src/data/profile.ts`.
- CV público saneado en `public/cv/carlos-gutierrez-cv.pdf`.
- Sistema visual y componentes existentes en `src/styles/global.css` y `src/components/`.
- Suite Playwright/axe y verificación del CV en `tests/`.

## Product Principles

1. **La evidencia manda.** Cada afirmación debe estar respaldada por un proyecto, una responsabilidad o una métrica aprobada.
2. **Claridad para quien contrata.** El perfil, la evidencia y el contacto deben encontrarse sin esfuerzo.
3. **Confidencialidad sin excepciones.** Ningún texto, metadato o archivo compilado puede revelar el empleador real.
4. **Craft visible.** La calidad de la interfaz es parte de la prueba de capacidad técnica.
5. **Rendimiento y acceso.** La experiencia debe seguir siendo rápida, accesible y funcional en móvil, teclado y tema oscuro.

## Accessibility & Inclusion

- Objetivo WCAG 2.2 AA.
- Navegación completa por teclado y foco visible.
- Contraste suficiente en ambos temas.
- Respeto a `prefers-reduced-motion`.
- Sin dependencia de color, hover o puntero para acceder al contenido.
- Layout usable desde 320 px sin scroll horizontal.
