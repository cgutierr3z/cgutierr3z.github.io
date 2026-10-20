# Sistema de diseño — «Informe de gestión»

Este documento describe el sistema visual construido para el portafolio de Carlos Gutierrez (SPEC-003). La página se lee como el informe de gestión de una práctica profesional: portada, cifras del periodo, casos de trabajo, registro, trayectoria, capacidades, nota del autor, correspondencia y colofón.

La fuente de verdad del contenido sigue siendo `src/data/`. Este documento describe la forma, no añade hechos.

## Principios

1. **La evidencia manda.** La portada declara el perfil y el trabajo; las cifras abren la evidencia antes que la biografía.
2. **Jerarquía de informe.** Capítulos numerados, reglas finas y campos de color ordenan la lectura; no hay tarjetas redondeadas ni sombras.
3. **Una sola voz.** Archivo Variable conduce títulos, cuerpo y navegación; Fragment Mono se reserva para datos, fechas y etiquetas.
4. **Sobriedad activa.** El color señala acción y cifras; no decora.
5. **Accesible por defecto.** Contraste AA, foco visible, teclado completo y contenido visible sin JavaScript.

## Color

Estrategia comprometida: papel y tinta ocupan campos completos; el óxido señala acción y cifras; la pátina es material de apoyo.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#F2EEE4` | `#0F1416` | Fondo del informe |
| `--paper-raised` | `#FBF8F0` | `#161C1F` | Superficies elevadas |
| `--ink` | `#15191B` | `#F1EBDF` | Texto principal |
| `--ink-soft` | `#4C5455` | `#B8B2A6` | Texto secundario |
| `--rule` | `#C9C1AF` | `#2D3537` | Reglas finas |
| `--rule-strong` | `#8B8476` | `#5C6769` | Reglas activas |
| `--oxide` | `#A64B33` | `#E18368` | Acción primaria, cifras, señal |
| `--oxide-strong` | `#7E3524` | `#F0A18A` | Hover y énfasis |
| `--patina` | `#2E5F5A` | `#7CC0B7` | Banda de cifras |
| `--on-signal` | `#FFF9F0` | `#0F1416` | Texto sobre óxido y pátina |
| `--focus` | `#1D5F86` | `#8EC9E8` | Foco visible |

Reglas:

- El texto normal cumple 4,5:1; el texto grande, 3:1; los componentes, 3:1.
- El tema oscuro es un campo nocturno, no una inversión automática.
- El color nunca es el único portador de significado.
- Sobre los campos de óxido y pátina, el foco se dibuja con `--on-signal`.
- Sin gradientes decorativos, sin glassmorphism y sin sombras difusas.

## Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Voz principal | Archivo Variable | Nombre, títulos, cuerpo, navegación y botones |
| Datos y etiquetas | Fragment Mono | Cifras, fechas, índices, metadatos y notas |

- Self-hosted, subset latino, `font-display: swap` y precarga de Archivo.
- Presupuesto de fuentes verificado en el build: **116 KB WOFF2** (88 KB + 25 KB, redondeados).
- Escala fluida:
  - `h1`: `clamp(3.5rem, 9vw, 7rem)`, línea `0.92`, tracking `-0.045em`.
  - `h2`: `clamp(2rem, 4.5vw, 3.75rem)`, línea `1.02`.
  - `h3`: `clamp(1.25rem, 2vw, 1.625rem)`.
  - Cuerpo: `1.0625rem / 1.65`; datos: `0.75rem`.
- `text-wrap: balance` en titulares y `pretty` en párrafos.
- `font-variant-numeric: tabular-nums` en cifras, fechas y metadatos.
- El mono no se usa en párrafos, navegación ni titulares.
- Medida de lectura: `66ch` (principal) y `54ch` (estrecha).

## Retícula y composición

- Ancho máximo: `75rem` (1200 px); márgenes laterales fluidos de 24 a 64 px.
- Retícula de 12 columnas en escritorio; las secciones usan 7/5 y 4/8 según el contenido.
- Unidad base de 8 px; separación entre secciones de 56 a 128 px.
- Radios de 0 a 2 px. Sin tarjetas redondeadas ni sombras.
- Bandas de sección separadas por reglas de 1 px.
- Campos de color a sangre solo en la banda de cifras y en la correspondencia.
- En móvil, los metadatos se apilan con etiquetas visibles; nada se oculta.

## Componentes

| Componente | Archivo | Regla |
|---|---|---|
| Header | `Header.astro` | Menú horizontal clásico de cinco enlaces, tema, CTA y menú móvil accesible. |
| Portada | `Hero.astro` | Cinta «Informe de gestión / 2026», nombre a escala de cubierta, rol, tesis, resumen, acciones e índice 01–03. |
| Banda de cifras | `MetricBand.astro` | Campo de pátina con las tres métricas aprobadas y la nota exacta. |
| Capítulo | `ChapterHeader.astro` | Índice, etiqueta, título, descripción y regla. |
| Sección | `ReportSection.astro` | Banda reglada con capítulo y contenido; aplica la aparición sobria. |
| Caso destacado | `ProjectEntry.astro` | Caso a toda anchura: campo de color, número, tipo, año, título, metadatos, `details`, stack y enlaces. |
| Registro adicional | `OtherProjects.astro` | Ledger agrupado por categoría; en móvil, fichas apiladas. |
| Trayectoria | `Experience.astro` | Línea vertical, fechas, rol, «Empresa confidencial», logros con cifras y responsabilidades en `details`. |
| Capacidades | `Stack.astro` | Tabla de categorías y tecnologías, sin iconos ni niveles implícitos. |
| Nota del autor | `About.astro` | Dos párrafos aprobados, principios y firma. |
| Correspondencia | `Contact.astro` | Banda de óxido a sangre con email primario y enlaces secundarios. |
| Colofón | `Footer.astro` | Identidad, índice de capítulos, enlaces, tipografías, copyright y nota de confidencialidad. |
| Fe de erratas | `pages/404.astro` | Regla interrumpida, título, enlace a la portada y `noindex`. |

## Movimiento

- Aparición de secciones: `opacity` y `translateY(8px)` en 460 ms, una sola vez, mediante `IntersectionObserver`.
- Solo se activa con JavaScript (`data-js`); sin JS todo el contenido es visible.
- Hover y foco: 150 ms. Cambio de tema: 200 ms.
- Sin contadores, rebotes, parallax ni scroll-jacking.
- `prefers-reduced-motion: reduce`: sin transformaciones, sin animaciones de entrada y scroll instantáneo.

## Accesibilidad

- WCAG 2.2 AA verificado con axe en claro y oscuro, en home y 404.
- Un solo `h1`; jerarquía `h2`/`h3`/`h4` sin saltos.
- Menú móvil con `aria-expanded`, `aria-controls`, Escape y restauración de foco.
- Enlaces externos con anuncio de nueva pestaña; enlaces de proyecto con el nombre.
- `details` operables por teclado.
- Foco de 2 px con desplazamiento de 3 px.
- Sin dependencia de hover para acceder a información.

## Rendimiento

- Astro estático; JS de cliente limitado a tema, menú y aparición.
- Dos familias tipográficas, subset latino y una sola precarga.
- Sin imágenes de proyectos; la OG es la única imagen raster nueva.
- Sin `backdrop-filter`, sombras grandes ni animaciones de `box-shadow`.
- Lighthouse móvil (local): **100 / 100 / 100 / 100**; LCP 1,7 s; CLS 0; TBT 0 ms.

## Imágenes y procedencia

- `public/og-image.png`: 1200 × 630, composición tipográfica en papel cálido. Se genera localmente con Chromium mediante Playwright desde un HTML propio: `bun run og:generate` (`scripts/generate-og.ts`). No usa imágenes externas ni datos de proyectos.
- `public/favicon.svg`: monograma vectorial escrito a mano, con papel, tinta y una banda de óxido.

## Contenido y confidencialidad

- El contenido y las métricas provienen de `src/data/`; el diseño no reescribe hechos.
- Las tres métricas son «+50 aplicaciones», «100–500 usuarios» y «2 tipos de CRM», con la nota «Métricas de experiencia profesional, no de los proyectos listados».
- El empleador no se publica: se usa «Empresa confidencial» y su nota de divulgación limitada.
- El CV público no se modifica y se enlaza una sola vez, desde la portada.

## Verificación

| Comando | Resultado |
|---|---|
| `bun run check` | 0 errores, 0 advertencias |
| `bun run build` | 2 páginas estáticas generadas |
| `bun run test:e2e` | 36 pruebas en verde |
| `impeccable detect` | Sin hallazgos |
| Lighthouse móvil | 100 / 100 / 100 / 100 |
