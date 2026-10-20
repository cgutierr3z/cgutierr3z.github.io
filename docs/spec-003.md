# SPEC-003 — Rediseño visual «Trazado de cargas»

| Campo | Valor |
|---|---|
| **ID** | SPEC-003 |
| **Versión** | 1.0 — Propuesta |
| **Fecha** | 2026-10-20 |
| **Estado** | Pendiente de aprobación del propietario; no implementada |
| **Repositorio** | https://github.com/cgutierr3z/cgutierr3z.github.io |
| **Sitio objetivo** | https://cgutierr3z.github.io/ |
| **Base** | `master` @ `6b7172b` |
| **SPECs relacionadas** | [`docs/spec-001.md`](spec-001.md) · [`docs/spec-002.md`](spec-002.md) |
| **Origen** | Solicitud del propietario: «mejora el diseño del portafolio» |
| **Dirección visual** | **Trazado de cargas** — asignada por el roll de `impeccable` |
| **Rama propuesta de implementación** | `feat/spec-003-load-path` |
| **Rama de despliegue** | `master` |
| **Fuente de verdad** | `docs/spec-003.md` |
| **Agente de implementación** | `feature-coder` |
| **Agente de auditoría** | `code-reviewer` |

> **Nota de confidencialidad:** el nombre del empleador actual/anterior es confidencial. No debe aparecer en este documento, en el código, en los textos, en los tests, en los commits, en el README, en metadatos, en imágenes ni en el sitio generado. En el contenido se usa “Empresa confidencial” y la nota de divulgación limitada.

---

## 1. Resumen ejecutivo y contexto

SPEC-001 construyó un portafolio correcto, rápido y accesible. SPEC-002 lo endureció y dejó el sitio desplegado con Playwright/axe en verde, Lighthouse 100/100/100/100 y un CV público saneado. El contenido también es sólido: ocho proyectos aprobados, experiencia verificable en aplicaciones empresariales, migraciones PHP/Yii 1 → React + Form.io, APIs REST, AWS Lambda y datos DB2 → PostgreSQL.

El problema ya no es la corrección técnica ni la falta de contenido. Es la **identidad visual**. La implementación actual es una composición limpia de estética SaaS: hero partido con tarjeta de perfil, secciones apiladas, tarjetas redondeadas, acento teal y tipografía del sistema. Funciona, pero podría pertenecer a cualquier portafolio de desarrollo. Los proyectos no lideran la primera impresión y la evidencia diferencial —el recorrido completo de una carga desde la interfaz hasta los datos— no tiene una forma visual propia.

SPEC-003 propone un **rediseño visual completo** para reclutadores técnicos, sin cambiar el contenido aprobado ni las métricas. La dirección asignada por el roll de `impeccable` es **«Trazado de cargas»**: el portafolio se comporta como un juego de planos de ingeniería estructural para sistemas de software. La página es una lámina de trabajo, no una imagen de un plano: portada, índice de láminas, planos de obra, registro de revisiones, leyenda de materiales y bloque de títulos. El stack se convierte en una sección estructural; cada proyecto destacado, en un plano esquemático; cada afirmación, en una anotación dimensionada.

El sitio sigue siendo estático, en español, con tema claro/oscuro, GitHub Pages y la misma arquitectura Astro/TypeScript/Tailwind/Bun. La diferencia es que ahora la interfaz demuestra craft y criterio de sistemas, en lugar de solo declararlos.

### 1.1 Resultado esperado

- Una primera impresión que se reconoce como el portafolio de Carlos, no como una plantilla.
- El trabajo y la evidencia visibles desde el primer viewport.
- Una lectura clara para reclutadores: perfil → proyectos → experiencia → stack → contacto.
- Un sistema visual documentado y reutilizable, no una colección de estilos puntuales.
- Cero cambios en hechos, métricas, proyectos, roles, CV o confidencialidad.
- Cero regresiones de accesibilidad, rendimiento, SEO o despliegue.

---

## 2. Objetivos y criterios de éxito medibles

### 2.1 Objetivos

1. Reemplazar la identidad visual genérica por una dirección propia y coherente.
2. Hacer que el trabajo lidere la primera impresión, como corresponde a una superficie **Experience**.
3. Convertir el recorrido Full Stack en el mecanismo visual central: interfaz → servicios → datos → operación.
4. Mejorar la jerarquía, la densidad útil y la velocidad de escaneo para reclutadores técnicos.
5. Mantener el contenido aprobado, las métricas y la confidencialidad sin excepciones.
6. Elevar el craft: tipografía, retícula, reglas, movimiento y estados, no solo color.
7. Dejar tokens, componentes y documentación (`PRODUCT.md`, `DESIGN.md`, `README.md`) para futuras iteraciones.
8. Conservar el rendimiento, la accesibilidad WCAG 2.2 AA y el despliegue estático.

### 2.2 Criterios de éxito

| ID | Criterio | Verificación |
|---|---|---|
| SC-001 | A 1440 × 900, el primer viewport muestra nombre, rol, trazado de cargas, al menos 3 accesos a proyectos y una acción principal. | Captura + inspección visual |
| SC-002 | A 390 × 844, el primer viewport muestra nombre, rol, acción principal y el inicio del trazado; no hay scroll horizontal. | Playwright + captura |
| SC-003 | La página deja de usar una retícula de tarjetas iguales como estructura dominante. | Revisión visual y de componentes |
| SC-004 | Los 8 proyectos, los 3 destacados y las 5 fichas secundarias siguen presentes. | Test E2E |
| SC-005 | Las métricas aprobadas aparecen exactamente: **+50 aplicaciones**, **100–500 usuarios**, **2 tipos de CRM**. | Test de contenido |
| SC-006 | No aparece el nombre del empleador confidencial ni la métrica de endpoints retirada. | Auditoría de build + test |
| SC-007 | axe no reporta violaciones en tema claro ni oscuro, en home y 404. | Playwright/axe |
| SC-008 | Navegación completa por teclado, foco visible y menú móvil con Escape y restauración de foco. | Test E2E |
| SC-009 | Lighthouse móvil ≥ 95 en las cuatro categorías; objetivo 100/100/100/100. | Lighthouse |
| SC-010 | LCP ≤ 2,5 s, CLS ≤ 0,05 e INP ≤ 200 ms en laboratorio móvil. | Lighthouse / observación |
| SC-011 | La carga de fuentes no supera 120 KB WOFF2 en total y no añade dependencias de runtime. | Inspección de build |
| SC-012 | Sin overflow horizontal de 320 a 1440 px. | Playwright |
| SC-013 | `bun run check`, `bun run build` y toda la suite Playwright pasa. | CI local y PR |
| SC-014 | La home conserva canonical, `og:url` y JSON-LD; la 404 conserva `noindex` y no emite esas señales. | Test E2E |
| SC-015 | El CV y su enlace siguen intactos y descargables. | Test CV/E2E |
| SC-016 | `DESIGN.md` describe el mundo construido y `README.md` refleja el nuevo sistema. | Revisión documental |

### 2.3 Criterios de fracaso

Cualquiera de estos resultados invalida la implementación:

- Se inventa, elimina o reescribe contenido aprobado sin autorización.
- La metáfora visual compite con la lectura o convierte el sitio en una ilustración decorativa.
- Se publica el nombre del empleador o cualquier dato sensible.
- Se sustituyen los diagramas por capturas falsas de proyectos.
- El rendimiento baja de 95 en móvil o la accesibilidad deja de ser AA.
- La página depende de JavaScript para mostrar el contenido principal.
- Se rompen las URLs, anclas, el CV o el despliegue de GitHub Pages.

---

## 3. Alcance

### 3.1 Incluido

| Grupo | Incluye |
|---|---|
| Identidad visual | Tokens de color, tipografía, retícula, reglas, marcas de esquina, bloque de títulos, sellos y movimiento. |
| Arquitectura de información | Reordenación de secciones para que el trabajo y la experiencia lideren; se conservan los `id` y las URLs. |
| Componentes | Header, índice de láminas, hero/portada, proyectos, otros proyectos, servicios, experiencia, stack, sobre mí, contacto, footer y 404. |
| Diagramas | Trazado de cargas del stack y planos esquemáticos de los 3 proyectos destacados, generados con HTML/CSS/SVG a partir de datos existentes. |
| Navegación | Índice de láminas en escritorio, menú móvil accesible, estado activo y enlaces estables. |
| Tipografía | Fuentes variables self-hosted con subset latino y presupuesto de peso. |
| Tema | Lámina diurna y nocturna, sin flash y con contraste verificado. |
| Movimiento | Dibujo de líneas, transiciones de estado y respeto a `prefers-reduced-motion`. |
| Metadatos visuales | Nueva imagen Open Graph 1200 × 630 y favicon coherente. |
| Datos de presentación | `src/data/drawings.ts` para etapas, métricas visuales y variantes de planos; sin nuevos hechos. |
| i18n | Nuevas etiquetas de interfaz en `src/i18n/es.ts`. |
| Pruebas | Actualización de E2E, axe claro/oscuro, viewport 320–1440 y controles de contenido. |
| Documentación | `PRODUCT.md`, `DESIGN.md`, `README.md` y cierre de esta SPEC. |

### 3.2 Excluido

- Reescribir el copy aprobado de perfil, proyectos, servicios, experiencia, stack, sobre mí o contacto.
- Añadir proyectos, clientes, testimonios, certificaciones, logos o métricas.
- Publicar el nombre del empleador o datos personales retirados del CV.
- Formulario de contacto, backend, CMS, blog, analítica, cookies, pagos o dominio propio.
- Selector de idioma o contenido en inglés.
- Casos de estudio individuales o páginas nuevas.
- Capturas de pantalla, mockups o imágenes generadas que simulen ser los proyectos reales.
- WebGL, canvas, vídeo, parallax, scroll-jacking o librerías de animación.
- Cambios en el CV público, en su generador o en sus pruebas de contenido.
- Cambios en `.github/workflows/*.yml`, en la política de despliegue o en `opencode.json`.
- Modificación de `docs/spec-001.md` o `docs/spec-002.md`; solo se enlazan.
- Purga del blob histórico no alcanzable tratado en SPEC-002.

### 3.3 Supuestos

- El propietario aprueba la dirección «Trazado de cargas» y el alcance de esta SPEC antes de implementar.
- El sitio seguirá siendo estático y se publicará en GitHub Pages.
- No hay imágenes reales de los proyectos; los planos serán diagramas esquemáticos derivados del stack declarado, nunca capturas falsas.
- Las fuentes `Archivo` y `Fragment Mono` están disponibles como paquetes de Fontsource o se pueden self-hostear con licencia abierta.
- El contenido y las métricas de `src/data/` son la única fuente de verdad.
- La implementación se hará en una rama y se integrará por PR con CI en verde.

---

## 4. Decisiones técnicas y arquitectura

### 4.1 Diagnóstico del sistema actual

| Aspecto | Estado actual | Consecuencia |
|---|---|---|
| Primera impresión | Hero partido: texto a la izquierda y tarjeta de perfil a la derecha. | Correcto, pero es el patrón por defecto de la categoría. |
| Identidad | Teal, fondo slate, tarjetas blancas, tipografía del sistema. | Limpio y seguro; poco memorable. |
| Proyectos | Tres tarjetas iguales en una cuadrícula. | Los proyectos no lideran ni se diferencian entre sí. |
| Servicios | Seis tarjetas iguales con iconos. | Misma jerarquía para capacidades distintas. |
| Experiencia | Tarjeta grande con logros y un `details`. | La evidencia queda encerrada en un contenedor genérico. |
| Stack | Tarjetas por categoría. | No comunica el recorrido entre capas. |
| Tipografía | System UI. | Rápida, pero sin voz ni craft visible. |
| Movimiento | Transiciones de color y scroll suave. | Suficiente, sin una gramática propia. |
| Base técnica | Astro estático, TS strict, Tailwind 4, Bun, 19 tests, Lighthouse 100. | Excelente plataforma para un rediseño sin deuda. |

**Diagnóstico:** el contenido tiene un mecanismo diferencial claro —el recorrido de una carga a través de interfaz, servicios, datos y operación—, pero la interfaz no lo representa. El rediseño debe convertir ese mecanismo en estructura, no en decoración.

### 4.2 Dirección visual: «Trazado de cargas»

La dirección se eligió mediante el roll de `impeccable` (`concept-seed`, modo `experience`). Se ordenaron siete direcciones propias por resonancia con el mundo del reclutador técnico; la asignación fue la número 5.

| # | Dirección propia | Lectura | Resultado |
|---|---|---|---|
| 1 | **Expediente de evidencia** | Carpeta de selección con folios, pestañas y marcas de revisión. | Pick; alternativa no seleccionada. Riesgo: puede leerse como un CV extendido. |
| 2 | **Acta de selección** | Volumen de ponencias técnicas con abstracts y evidencias. | Alternativa no seleccionada. |
| 3 | **Registro de servicio** | Bitácora de mantenimiento con sellos, inspecciones y horas. | Alternativa no seleccionada. |
| 4 | **Índice de catálogo** | Fichero bibliográfico con materias y referencias cruzadas. | Alternativa no seleccionada. |
| 5 | **Trazado de cargas** | Juego de planos estructurales: secciones, dimensiones, conexiones y memoria. | **Asignada y seleccionada.** |
| 6 | **Cuaderno de puesta en escena** | Libreto de producción con cues, cambios y orden de ejecución. | No seleccionada. |
| 7 | **Patch bay de señal** | Módulos, cables y recorridos de señal. | No seleccionada; además es el candidato más cercano al rut de herramientas. |

#### Challengers del catálogo y veredictos

| Challenger | Veredicto | Donación de disciplina |
|---|---|---|
| Cuenca de tinta suminagashi | Declinado | Una superficie continua que conserva las trazas de la interacción; se traduce en líneas de dibujo que no se reinician. |
| Cuarto oscuro con luz ámbar | Competitivo | Tiras de prueba y revelado por pasos; se traduce en un registro de revisión y estados de evidencia. |
| Showroom de metalistería Wiener Werkstätte | Competitivo | Retícula ortogonal estricta y celda activa; se traduce en la retícula de 12 columnas y el estado activo del índice. |
| Broadside de calaveras de Posada | Declinado | Banda de título y densidad anotada; se traduce en el bloque de títulos y las anotaciones al margen. |
| Taller Akari de papel y bambú | Declinado | Capas translúcidas y despliegue suave; se traduce en la relación entre lámina, detalle y anexo. |
| Torre de arcilla enrollada | Competitivo | Registro de construcción por cursos; se traduce en la cronología de experiencia como historial de revisiones. |

La dirección asignada se eleva con esas disciplinas, sin copiar sus paletas, motivos ni vestuario. Un solo mundo posee la página.

#### Contrato de dirección

> Este contrato vive en esta SPEC y no debe copiarse al código, al HTML, a los atributos `data-*`, a los metadatos ni a ningún artefacto servido.

- **THESIS:** Un portafolio como juego de planos de carga para sistemas de software; cada proyecto es una obra construida y cada afirmación tiene una cota, una conexión o una revisión. Rechaza el hero genérico con tarjeta de perfil y la cuadrícula de tarjetas iguales.
- **OWN-WORLD:** Papel de vellum, grafito, óxido y pátina; `Archivo` para la voz principal y `Fragment Mono` para anotaciones; láminas regladas, marcas de esquina, bloques de títulos, líneas de dimensión y sellos. Sin sombras difusas, sin glassmorphism y sin tarjetas redondeadas.
- **STORY:** El reclutador entiende el recorrido Full Stack, reconoce los proyectos y la evidencia, escanea la trayectoria y contacta. El visitante siente que está leyendo el sistema de trabajo de alguien, no una plantilla.
- **FIRST VIEWPORT:** Una portada técnica con bloque de títulos; nombre, rol, tesis y acciones; un corte vertical del stack con cargas anotadas; un índice de tres proyectos seleccionados. La acción principal es «Ver proyectos»; la secundaria, «Descargar CV».
- **FORM:** Dirección asignada #5 de 7 direcciones propias; `seed:aa3f3ffd513bd8a0`.
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

#### Lo que la dirección no es

- No es un fondo de blueprint azul con texto blanco.
- No es una plantilla de dashboard oscuro.
- No es una ilustración de un plano: es una página que funciona como un juego de planos.
- No es una excusa para añadir adornos; cada línea debe cumplir una función de lectura, jerarquía o estado.

### 4.3 Sistema visual

#### Color

Estrategia: **Committed**. El papel y el grafito ocupan campos completos; el óxido es la señal y la pátina la estructura. No es una paleta neutra con un acento decorativo.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#F2EEE4` | `#0F1416` | Fondo de lámina |
| `--paper-raised` | `#FBF8F0` | `#161C1F` | Bloques y superficies elevadas |
| `--ink` | `#15191B` | `#F1EBDF` | Texto principal |
| `--ink-soft` | `#4C5455` | `#B8B2A6` | Texto secundario |
| `--rule` | `#C9C1AF` | `#2D3537` | Reglas finas |
| `--rule-strong` | `#8B8476` | `#5C6769` | Dimensiones y reglas activas |
| `--oxide` | `#A64B33` | `#E18368` | Señal, enlaces y acción primaria |
| `--oxide-strong` | `#7E3524` | `#F0A18A` | Hover y énfasis |
| `--patina` | `#2E5F5A` | `#7CC0B7` | Estructura, conexiones y estados |
| `--on-signal` | `#FFF9F0` | `#0F1416` | Texto sobre óxido |
| `--focus` | `#1D5F86` | `#8EC9E8` | Foco visible |
| `--grid` | `rgba(21, 25, 27, 0.04)` | `rgba(241, 235, 223, 0.05)` | Retícula de fondo, siempre sutil |

Reglas:

- El texto normal debe cumplir 4,5:1; el texto grande, 3:1; los componentes, 3:1.
- El tema oscuro no es una inversión automática: es una lámina nocturna con el mismo sistema.
- El color nunca es el único portador de significado.
- El óxido no se usa para texto pequeño sobre pátina ni para decorar párrafos completos.

#### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Voz principal | **Archivo Variable** | Títulos, cuerpo, navegación y botones. |
| Anotación | **Fragment Mono** | Números de lámina, dimensiones, fechas, etiquetas y notas técnicas. |

Decisiones:

- Self-hosted, subset latino, `font-display: swap`, precarga de la voz principal.
- Presupuesto total de fuentes: ≤ 120 KB WOFF2.
- Escala fluida: `h1` `clamp(2.75rem, 6vw, 5.5rem)`; `h2` `clamp(2rem, 4vw, 3.5rem)`; cuerpo 1rem/1.65; anotaciones 0.6875–0.8125rem.
- `text-wrap: balance` en titulares; `text-wrap: pretty` en párrafos; medida de 60–70 caracteres.
- `font-variant-numeric: tabular-nums` en fechas y métricas.
- Mayúsculas y tracking solo en etiquetas cortas; nunca en párrafos.

#### Retícula y composición

- Retícula base de 12 columnas en escritorio, 8 en tablet y 4 en móvil; unidad de 8 px.
- Ancho máximo: 1440 px; márgenes laterales de 24/40/64 px; canal de 24–32 px.
- Índice de láminas fijo de 208 px en escritorio; el contenido ocupa el resto.
- Láminas con marcas de esquina, reglas de 1 px y bloque de títulos; radio máximo de 2 px.
- Espaciado vertical generoso: 96–128 px entre láminas en escritorio; 56–72 px en móvil.
- La retícula de fondo es sutil y no compite con el texto; se desactiva en secciones densas.
- En móvil, las anotaciones secundarias se ocultan o se mueven a un anexo; el contenido nunca se oculta.

#### Materiales y componentes

| Componente | Regla visual |
|---|---|
| Bloque de títulos | Caja reglada con nombre, rol, año, escala, lámina y contacto. |
| Índice de láminas | Lista numerada `00–07`, con estado activo en óxido y marca de sección. |
| Encabezado de lámina | Número, título, descripción breve y regla de dimensión. |
| Anotación | Texto mono pequeño con línea guía; nunca flotando sin referencia. |
| Plano de proyecto | Diagrama esquemático de nodos y conexiones; `aria-hidden`; el texto equivalente vive en la ficha. |
| Ficha de proyecto | Título grande, metadatos, resumen, stack, enlaces y plano; sin tarjeta redondeada. |
| Fila de otros proyectos | Lista tipo schedule: número, título, tipo, año, stack y enlace. |
| Lista de alcances | Filas numeradas de servicios; sin iconos decorativos. |
| Registro de revisión | Cronología con fechas, rol, logros y anexo de responsabilidades. |
| Leyenda de materiales | Grupos de stack en filas, con etiquetas mono y marcas de leyenda. |
| Nota de autor | Dos párrafos y una lista de principios; sello sobrio. |
| Bloque de contacto | Caja de solicitud con email, GitHub y LinkedIn. |
| Colofón | Créditos, tipografías, stack, copyright y nota de confidencialidad. |

#### Movimiento

- Dibujo de líneas al cargar: 600–800 ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Hover/foco: 150 ms; cambio de tema: 200 ms.
- Sin rebotes, sin parallax, sin scroll-jacking y sin animaciones que oculten contenido.
- `prefers-reduced-motion: reduce`: sin dibujo animado, sin transiciones de transformación y scroll instantáneo.
- El estado activo del índice se actualiza con `IntersectionObserver`; sin JS, los enlaces siguen funcionando.

### 4.4 Arquitectura de información

| Lámina | Sección | `id` | Contenido |
|---|---|---|---|
| 00 | Portada | `inicio` | Nombre, rol, tesis, trazado de cargas, índice de proyectos, CTAs, CV y enlaces. |
| 01 | Proyectos destacados | `proyectos` | Tres planos de obra: `covidmap-col`, `coffee-shop`, `pt-recisa`. |
| 02 | Otros proyectos | `otros-proyectos` | Cinco fichas de anexo, agrupadas por fundamentos y juegos. |
| 03 | Experiencia | `experiencia` | Registro de revisión de la trayectoria y métricas aprobadas. |
| 04 | Stack | `stack` | Leyenda de materiales por categoría. |
| 05 | Servicios | `servicios` | Lista de alcances profesionales. |
| 06 | Sobre mí | `sobre-mi` | Nota de autor y principios. |
| 07 | Contacto | `contacto` | Bloque de solicitud y enlaces. |

Decisiones:

- Se conservan todos los `id` y las URLs públicas; solo cambia el orden visual.
- Los proyectos destacados reciben anclas estables `#proyecto-{slug}`.
- El índice de láminas es la navegación principal en escritorio; el menú móvil usa la misma fuente de datos.
- El header conserva marca, tema, CTA de contacto y botón de menú; no duplica una barra de navegación horizontal.
- El primer viewport incluye un índice de los tres proyectos destacados para que el trabajo lidere.

### 4.5 Composición por lámina

#### 00 — Portada

- Lámina de altura generosa, con retícula sutil y marcas de esquina.
- Columna principal: nombre, rol, tagline, resumen y acciones.
- Columna de dibujo: corte vertical del stack con cuatro etapas (Interfaz, Servicios, Datos, Operación), flechas y cotas.
- Bloque de títulos: `Carlos Gutierrez`, `Desarrollador Full Stack`, `Portafolio / 2026`, `Lámina 00`, `Escala 1:1`, contacto.
- Índice inferior: `01.1 CovidMap Colombia`, `01.2 Coffee Shop`, `01.3 Prueba técnica Full Stack`.
- Métricas aprobadas como anotaciones, con nota: «Métricas de experiencia profesional, no de los proyectos listados».
- Acción primaria: «Ver proyectos». Secundaria: «Descargar CV». Enlaces GitHub/LinkedIn con anuncio de nueva pestaña.

#### 01 — Proyectos destacados

- Tres láminas de proyecto, alternando la posición del plano y del texto en escritorio.
- Cada ficha incluye número de lámina, tipo, año, título, resumen, disclosure, stack y enlaces.
- El plano es un diagrama esquemático derivado del stack declarado; nunca una captura falsa.
- `covidmap-col`: variante `grid`; nodos `Datos históricos → DataMaps → Bootstrap`.
- `coffee-shop`: variante `flow`; nodos `Productos → Ventas → MySQL`.
- `pt-recisa`: variante `section`; nodos `Angular → API PHP → MariaDB`.
- Leyenda visible: «Diagrama esquemático a partir del stack declarado».
- Enlaces externos conservan el patrón accesible `Demo|Repositorio de {proyecto}. Abre en una nueva pestaña`.

#### 02 — Otros proyectos

- Lista tipo schedule, no tarjetas.
- Agrupación: Fundamentos de ingeniería y Juegos y gráficos.
- Cada fila: número `02.x`, título, tipo, año, stack y enlace al repositorio.
- En móvil, cada fila se convierte en una ficha apilada con etiquetas visibles; sin tabla horizontal.
- Nota de contexto: proyectos académicos y de exploración, no trabajos para clientes.

#### 03 — Experiencia

- Registro de revisión con una línea vertical y marcas de fecha.
- Rol, empresa confidencial, periodo, resumen y logros.
- Métricas aprobadas dentro de los logros, sin ampliarlas ni reinterpretarlas.
- Responsabilidades dentro de un `details` accesible, cerrado por defecto.
- Stack como etiquetas de leyenda.
- Nota de confidencialidad visible.

#### 04 — Stack

- Leyenda de materiales: cinco filas de categoría.
- Cada tecnología se presenta como una entrada de leyenda, no como una tarjeta.
- En escritorio, dos columnas; en móvil, una.
- Sin iconos ni colores que impliquen niveles de dominio no declarados.

#### 05 — Servicios

- Lista de alcances numerada `01–06`.
- Cada fila: número, título, descripción y una etiqueta de ámbito.
- Sin tarjetas ni iconos decorativos; la jerarquía la hacen el número, la regla y el espacio.
- El CTA de contacto se mantiene al final de la lista y en el header.

#### 06 — Sobre mí

- Nota de autor con los dos párrafos aprobados.
- Lista de principios de trabajo, derivada del contenido existente.
- Sello discreto `CG / 2026`; sin foto ni retrato inventado.

#### 07 — Contacto

- Bloque de solicitud de información con título y texto aprobados.
- Email como acción primaria; GitHub y LinkedIn como secundarias.
- Sin formulario, sin backend y sin promesas de respuesta no verificadas.
- El enlace de CV sigue existiendo una sola vez, en la portada.

#### 404

- Lámina `404` con una línea interrumpida y el mensaje «Página no encontrada».
- Enlace a la portada.
- Conserva `noindex, nofollow`; no emite canonical, `og:url` ni JSON-LD.
- Mantiene el título descriptivo que ya verifica la suite.

### 4.6 Arquitectura técnica

| Decisión | Valor |
|---|---|
| Framework | Astro 7.4.1, salida estática, sin SSR. |
| Tipado | TypeScript 6.0.3 strict. |
| Estilos | Tailwind CSS 4.3.3 con tokens semánticos. |
| Runtime | Bun 1.4.3; lockfile versionado. |
| Despliegue | GitHub Actions → GitHub Pages, sin cambios de workflow. |
| Fuentes | `@fontsource-variable/archivo` y `@fontsource/fragment-mono`, subset latino. |
| Diagramas | HTML, CSS y SVG inline; sin canvas ni WebGL. |
| Iconos | SVG inline existentes; sin librería nueva. |
| JS de cliente | Tema, menú móvil e `IntersectionObserver` para el índice; sin framework. |
| Imágenes | OG image y favicon; sin capturas de proyectos. |
| SEO | Se conserva la implementación de `SEO.astro`; solo se actualiza la imagen OG. |
| Tests | Playwright + axe; se actualizan selectores y se añaden controles de diseño. |

#### Archivos previstos

```text
PRODUCT.md                              # verdad de producto (creado en esta fase)
DESIGN.md                               # sistema visual construido (se escribe al cierre)
docs/spec-003.md                        # esta especificación

src/
  components/
    Header.astro                        # marca, tema, CTA y menú móvil
    drawing/
      SheetIndex.astro                  # índice 00–07 y estado activo
      SheetHeader.astro                 # número, título y descripción de lámina
      TitleBlock.astro                  # bloque de títulos y metadatos
      RuleLabel.astro                   # etiqueta mono con regla
      Annotation.astro                  # anotación con línea guía
      LoadPath.astro                    # corte del stack y cotas
      ProjectDrawing.astro              # plano esquemático por proyecto
    Hero.astro                          # portada
    FeaturedProjects.astro              # láminas 01
    ProjectPlate.astro                  # ficha de proyecto destacado
    OtherProjects.astro                 # schedule 02
    Experience.astro                    # registro 03
    Stack.astro                         # leyenda 04
    Services.astro                      # alcances 05
    About.astro                         # nota de autor 06
    Contact.astro                       # bloque 07
    Footer.astro                        # colofón
    Icon.astro                          # iconos existentes, sin librería
    SEO.astro                           # sin cambios funcionales
    ThemeToggle.astro                   # sin cambios funcionales
  data/
    drawings.ts                         # etapas, métricas visuales y variantes
  i18n/
    es.ts                               # nuevas etiquetas de láminas y a11y
  layouts/
    BaseLayout.astro                    # estructura, fuentes y skip link
  pages/
    index.astro                         # nuevo orden de secciones
    404.astro                           # lámina 404
  styles/
    global.css                          # tokens, base, retícula y movimiento
public/
  og-image.png                          # nueva portada social 1200 × 630
  favicon.svg                           # monograma coherente
tests/
  portfolio.spec.ts                     # E2E y contenido
  a11y.spec.ts                          # axe claro/oscuro
  design.spec.ts                        # controles de la dirección
```

#### Componentes retirados o absorbidos

- `Section.astro` se sustituye por `SheetHeader.astro` + estructura de lámina; no se mantiene una capa genérica que empuje todas las secciones al mismo molde.
- `ProjectCard.astro` se sustituye por `ProjectPlate.astro` para destacados y por filas de schedule para el anexo.
- Los iconos de servicios dejan de renderizarse; el dato `Service.icon` puede permanecer para no romper el modelo, pero no se usa como decoración.
- `Hero.astro` se reescribe; no conserva la tarjeta lateral de perfil.

### 4.7 Accesibilidad

- Objetivo WCAG 2.2 AA.
- Un solo `h1`; jerarquía `h2`/`h3`/`h4` sin saltos.
- Skip link existente.
- Foco visible de 2 px con offset de 3 px en ambos temas.
- El índice de láminas usa `<nav aria-label="Índice de láminas">` y `<ol>`.
- Estado activo con `aria-current="true"`, no solo color.
- Los diagramas son decorativos: `aria-hidden="true"` y texto visible equivalente.
- Los enlaces externos anuncian la nueva pestaña; los enlaces de proyecto incluyen el nombre.
- El menú móvil conserva `aria-expanded`, `aria-controls`, Escape y restauración de foco.
- Los `details` de responsabilidades son operables por teclado.
- Sin dependencia de hover para acceder a información.
- Contraste verificado en claro y oscuro; no se acepta texto gris claro sobre papel.
- `prefers-reduced-motion` desactiva el dibujo y las transformaciones.
- En móvil, las etiquetas mono no bajan de 11 px y el cuerpo no baja de 16 px.

### 4.8 Rendimiento

- Sin nuevas dependencias de runtime.
- Solo dos familias de fuentes, subset latino y precarga de la principal.
- SVG inline para diagramas; sin imágenes pesadas.
- CSS para retículas y texturas; sin canvas.
- JS de cliente mínimo y progresivo.
- Evitar `backdrop-filter`, sombras grandes y animaciones de `box-shadow`.
- Presupuesto: LCP ≤ 2,5 s, CLS ≤ 0,05, INP ≤ 200 ms, Lighthouse ≥ 95.
- Las animaciones usan `transform` y `opacity`; las líneas usan `stroke-dashoffset`.
- `content-visibility: auto` solo si no provoca saltos de layout y se valida en Safari/Firefox.

### 4.9 SEO y metadatos

- Se conservan título, descripción, canonical, `og:url`, Twitter Card y JSON-LD.
- La imagen OG se reemplaza por una portada 1200 × 630 coherente con la dirección.
- Se añade `og:image:alt` descriptivo.
- La 404 conserva `noindex, nofollow` y no emite canonical, `og:url` ni JSON-LD.
- No se cambian URLs, anclas existentes ni el sitemap.
- El CV sigue enlazado una sola vez desde la portada.

### 4.10 Contenido y confidencialidad

- No se reescribe el copy aprobado de `src/data/`.
- Las nuevas cadenas son etiquetas de interfaz y se centralizan en `src/i18n/es.ts`.
- Las métricas se muestran como anotaciones de experiencia, no como resultados de los proyectos.
- Los planos de proyecto se etiquetan como esquemáticos y derivados del stack declarado.
- No se añaden testimonios, clientes, logos, certificaciones ni resultados.
- No se publica el nombre del empleador; se mantiene «Empresa confidencial» y su nota.
- El CV no se modifica.
- La auditoría de confidencialidad se ejecuta sobre el árbol, `dist/`, el PDF y los metadatos.

---

## 5. Contratos de datos y modelos TypeScript

### 5.1 Tipos existentes que no cambian

`Profile`, `Service`, `Project`, `Experience`, `TechnologyGroup`, `SiteMeta`, `ProjectType`, `ProjectCategory` y `ProjectLink` se conservan. No se añaden campos de contenido a `Project` ni a `Experience`.

### 5.2 Nuevo archivo `src/data/drawings.ts`

```ts
export interface SheetIndexItem {
  id: string;
  number: string;
  label: string;
  href: `#${string}`;
}

export type ProjectDrawingVariant = 'flow' | 'section' | 'grid';

export interface ProjectDrawing {
  variant: ProjectDrawingVariant;
  caption: string;
  nodes: readonly string[];
}

export interface LoadPathStage {
  id: string;
  label: string;
  technologies: readonly string[];
  note: string;
}

export interface LoadPathMetric {
  value: string;
  label: string;
  note?: string;
}
```

Contratos:

- `sheetIndex` se define en `src/i18n/es.ts` porque es navegación de interfaz; `drawings.ts` contiene solo geometría y datos visuales.
- `loadPathStages` tiene exactamente cuatro etapas: `interfaz`, `servicios`, `datos`, `operacion`.
- `loadPathMetrics` contiene exactamente las tres métricas aprobadas, con la nota «Métricas de experiencia profesional, no de los proyectos listados».
- `projectDrawings` es un `Partial<Record<string, ProjectDrawing>>`; si falta una entrada, `ProjectDrawing.astro` debe mostrar un fallback textual, no romper el build.
- Los nodos de cada plano usan solo tecnologías y conceptos ya declarados en `src/data/projects.ts`.
- No se añaden afirmaciones, cifras ni relaciones no verificadas.

### 5.3 Etapas del trazado de cargas

| Etapa | Tecnologías | Nota |
|---|---|---|
| Interfaz | React, Form.io, JavaScript | Formularios y experiencias web. |
| Servicios | Node.js, Express, APIs REST, AWS Lambda | Integración y lógica de servicios. |
| Datos | DB2, PostgreSQL, MySQL | Persistencia y migración de datos. |
| Operación | Docker, pipelines, GitHub, Bitbucket | Despliegue y soporte. |

### 5.4 Planos de los proyectos destacados

| Proyecto | Variante | Nodos | Caption |
|---|---|---|---|
| `covidmap-col` | `grid` | Datos históricos → DataMaps → Bootstrap | Mapa de regiones y capas de datos. |
| `coffee-shop` | `flow` | Productos → Ventas → MySQL | Flujo de gestión de productos y ventas. |
| `pt-recisa` | `section` | Angular → API PHP → MariaDB | Sección de una prueba técnica Full Stack. |

### 5.5 i18n

Añadir a `src/i18n/es.ts` un bloque `drawing` con, como mínimo:

- `sheetIndex`: «Índice de láminas».
- `sheet`: «Lámina».
- `cover`: «Portada».
- `selectedWork`: «Proyectos destacados».
- `annex`: «Otros proyectos».
- `loadPath`: «Trazado de cargas».
- `loadPathDescription`: descripción del corte del stack.
- `metricsNote`: «Métricas de experiencia profesional, no de los proyectos listados».
- `schematic`: «Diagrama esquemático a partir del stack declarado».
- `scale`: «Escala».
- `revision`: «Revisión».
- `legend`: «Leyenda de materiales».
- `scope`: «Alcances».
- `authorNote`: «Nota de autor».
- `contactBlock`: «Solicitud de información».
- `colophon`: «Colofón».
- `notFound`: «Lámina no encontrada».
- `sheets`: arreglo tipado de `SheetIndexItem` con las ocho láminas.

Los textos de tema, menú, contacto, tipos de proyecto, categorías y etiquetas existentes se conservan y se reutilizan. No se duplican cadenas en componentes.

---

## 6. Plan de tareas

> Cada tarea se implementa y valida por separado. No se avanza a la siguiente sin `bun run check` y una revisión visual del estado actual.

| ID | Tarea | Archivos principales | Criterio de aceptación |
|---|---|---|---|
| T-001 | **Base de tokens y tipografía.** Instalar fuentes, definir tokens claro/oscuro, retícula, foco, selección y presupuesto de fuentes. | `package.json`, `bun.lock`, `src/styles/global.css`, `src/layouts/BaseLayout.astro` | Tokens documentados; contraste verificado; fuentes cargan sin flash; build correcto. |
| T-002 | **Shell de láminas e índice.** Crear `SheetIndex`, `SheetHeader`, `TitleBlock`, `RuleLabel` y `Annotation`; rehacer `Header` y el orden de `index.astro`. | `src/components/drawing/*`, `Header.astro`, `BaseLayout.astro`, `index.astro` | Índice 00–07 funcional; menú móvil accesible; anclas existentes conservadas. |
| T-003 | **Portada y trazado de cargas.** Reescribir `Hero`; añadir `LoadPath` y el índice de proyectos; crear `src/data/drawings.ts`. | `Hero.astro`, `LoadPath.astro`, `drawings.ts`, `es.ts` | Primer viewport cumple SC-001/SC-002; métricas exactas; texto alternativo del diagrama. |
| T-004 | **Planos de proyectos destacados.** Crear `ProjectPlate` y `ProjectDrawing`; reemplazar las tarjetas de `FeaturedProjects`. | `FeaturedProjects.astro`, `ProjectPlate.astro`, `ProjectDrawing.astro`, `drawings.ts` | Tres planos, tres proyectos, enlaces accesibles; ningún dato inventado. |
| T-005 | **Anexo de otros proyectos.** Convertir `OtherProjects` en schedule agrupado y responsive. | `OtherProjects.astro`, `ProjectPlate.astro` | Cinco proyectos, dos grupos, sin tabla horizontal; enlaces accesibles. |
| T-006 | **Registro de experiencia.** Rehacer `Experience` como historial de revisión con `details` y stack de leyenda. | `Experience.astro`, `es.ts` | Contenido exacto; confidencialidad; teclado; sin tarjeta genérica. |
| T-007 | **Stack y servicios.** Rehacer `Stack` como leyenda y `Services` como lista de alcances. | `Stack.astro`, `Services.astro` | Sin cuadrícula de tarjetas; jerarquía clara; contenido intacto. |
| T-008 | **Sobre mí, contacto, footer y 404.** Adaptar las secciones restantes y la 404 al lenguaje de láminas. | `About.astro`, `Contact.astro`, `Footer.astro`, `404.astro`, `es.ts` | Copy aprobado; CV una sola vez; 404 sin señales SEO; foco y contraste. |
| T-009 | **Movimiento, responsive, tema y print.** Añadir dibujo de líneas, estado activo, transiciones y estilos de impresión. | `global.css`, componentes, `ThemeToggle.astro` | `prefers-reduced-motion`; 320–1440 sin overflow; claro/oscuro; print legible. |
| T-010 | **OG image y favicon.** Diseñar la portada social 1200 × 630 y el monograma; actualizar metadatos. | `public/og-image.png`, `public/favicon.svg`, `SEO.astro` | Imagen legible a tamaño social; `og:image:alt`; sin datos sensibles. |
| T-011 | **Pruebas y QA visual.** Actualizar E2E, axe claro/oscuro, contenido y viewports; capturar pantallas. | `tests/portfolio.spec.ts`, `tests/a11y.spec.ts`, `tests/design.spec.ts` | Suite completa en verde; 0 violaciones; capturas revisadas. |
| T-012 | **Documentación y cierre.** Escribir `DESIGN.md` desde el sistema construido; actualizar README y estado de SPEC-003. | `DESIGN.md`, `README.md`, `docs/spec-003.md` | Documentación coincide con el build; sin contradicciones; listo para revisión final. |

### 6.1 Dependencias

- T-002 depende de T-001.
- T-003 depende de T-002.
- T-004 y T-005 dependen de T-003.
- T-006, T-007 y T-008 dependen de T-002.
- T-009 depende de T-003 a T-008.
- T-010 depende de T-001 y T-003.
- T-011 depende de T-001 a T-010.
- T-012 depende de T-011.

### 6.2 Orden de implementación recomendado

1. T-001 → T-002 → T-003.
2. T-004 → T-005.
3. T-006 → T-007 → T-008.
4. T-009 → T-010.
5. T-011 → T-012.

---

## 7. Plan de pruebas y aceptación

### 7.1 Pruebas automatizadas

| Prueba | Cobertura |
|---|---|
| `bun run check` | Tipos, Astro y referencias de datos. |
| `bun run build` | Generación estática, sitemap y assets. |
| `bun run test:e2e` | Home, secciones, navegación, tema, CV, enlaces, 404, SEO, responsive y axe. |
| `bun run test:a11y` | axe en home y 404, tema claro y oscuro. |
| `tests/design.spec.ts` | Índice de láminas, trazado de cargas, planos y ausencia de la retícula de tarjetas dominante. |

### 7.2 Casos nuevos o actualizados

- El índice de láminas tiene ocho enlaces y apunta a los `id` correctos.
- El primer viewport contiene al menos tres enlaces a proyectos destacados.
- El trazado de cargas tiene cuatro etapas y las tres métricas aprobadas.
- Los tres proyectos destacados tienen plano y enlace externo accesible.
- Los cinco proyectos secundarios aparecen en el anexo.
- No existen tarjetas de servicio con iconos decorativos.
- El registro de experiencia conserva «Empresa confidencial» y no revela el empleador.
- El tema oscuro no produce violaciones axe.
- La 404 conserva `noindex` y no emite canonical, `og:url` ni JSON-LD.
- No hay overflow horizontal a 320, 360, 390, 768, 1024 y 1440 px.
- El contenido principal es visible sin JavaScript.
- `prefers-reduced-motion` no rompe la visibilidad ni la navegación.

### 7.3 QA visual

Capturas obligatorias para la revisión de cierre:

- Home 1440 × 900, tema claro y oscuro.
- Home 1024 × 768, tema claro.
- Home 768 × 1024, tema claro.
- Home 390 × 844, tema claro y oscuro.
- Home 320 × 720, tema claro.
- 404 en 1440 y 390.
- Primer viewport y sección de proyectos en detalle.
- Estados de foco, hover y menú móvil abierto.

Revisión:

- El trabajo lidera la primera impresión.
- La metáfora se lee como sistema, no como decoración.
- La tipografía no se rompe en español ni en palabras largas.
- Las líneas de dimensión no compiten con el texto.
- El tema oscuro se siente como una lámina nocturna, no como una inversión.
- No hay cards redondeadas, sombras difusas ni gradientes decorativos.
- La página sigue siendo legible sin las animaciones.

### 7.4 Criterios de aceptación final

- [ ] SC-001 a SC-016 verificados.
- [ ] `bun run check` sin errores.
- [ ] `bun run build` correcto.
- [ ] Suite Playwright/axe completa en verde.
- [ ] Lighthouse móvil ≥ 95 en las cuatro categorías.
- [ ] Capturas de QA visual revisadas y aprobadas.
- [ ] Contenido, métricas y confidencialidad auditados.
- [ ] `DESIGN.md` y `README.md` actualizados.
- [ ] `docs/spec-003.md` marcado como implementado y validado.
- [ ] PR con CI en verde y revisión `code-reviewer` APTO.

---

## 8. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| La metáfora de planos se vuelve literal o decorativa. | La página se lee como un tema, no como un sistema. | Cada línea debe tener función; el contenido manda; revisión de craft y capturas. |
| El exceso de anotaciones reduce la legibilidad. | Reclutadores abandonan la lectura. | Jerarquía tipográfica; anotaciones secundarias ocultas en móvil; medida de 60–70 caracteres. |
| Las fuentes self-hosted aumentan el peso. | Peor LCP y CLS. | Subset latino, WOFF2, precarga, `font-display: swap` y presupuesto de 120 KB. |
| El tema oscuro pierde contraste. | Falla WCAG y axe. | Tokens separados, verificación de ratios y axe en ambos temas. |
| Los planos sugieren arquitecturas o resultados no verificados. | Riesgo de afirmaciones falsas. | Derivar solo del stack declarado; etiquetar como esquemático; sin métricas de proyecto inventadas. |
| La densidad del dibujo rompe en móvil. | Scroll horizontal o texto ilegible. | Versión vertical simplificada; pruebas 320–1440; sin tablas horizontales. |
| Los tests actuales se acoplan a la estructura anterior. | Falsos negativos o positivos. | Actualizar selectores de forma intencional; añadir pruebas de diseño y contenido. |
| Se cuela el nombre del empleador en un texto, imagen o metadato. | Incumplimiento de confidencialidad. | Auditoría de árbol, build, PDF y metadatos; revisión `code-reviewer`. |
| Se rompe el SEO o el CV. | Pérdida de tráfico o de descarga. | No tocar URLs ni `SEO.astro` funcional; test de canonical, 404 y PDF. |
| El alcance crece hacia nuevas funcionalidades. | Retraso y deuda. | Exclusión explícita; cualquier añadido requiere nueva SPEC. |

---

## 9. Preguntas pendientes

No hay preguntas bloqueantes para iniciar la implementación una vez aprobada esta SPEC. Quedan decisiones menores que se resuelven en T-001/T-010:

1. ¿Se conserva el favicon actual o se sustituye por el monograma de la nueva portada? Recomendación: sustituirlo para mantener coherencia.
2. ¿El email se muestra como texto visible además del botón? Recomendación: mostrarlo en el bloque de títulos y en contacto, sin ofuscación que rompa la accesibilidad.
3. ¿Se añade un botón «Copiar email»? Recomendación: no en esta iteración; añade JS y no es necesario para el objetivo.
4. ¿Se incluye una hoja de impresión? Recomendación: sí, como mejora de bajo coste en T-009, sin convertirla en un requisito de aceptación.

Cualquier cambio de contenido, métrica, proyecto o identidad de marca requiere aprobación explícita del propietario y, si altera el alcance, una nueva SPEC.

---

## 10. Definición de terminado

La SPEC-003 se considera terminada cuando:

1. La dirección «Trazado de cargas» está implementada en todas las secciones y en la 404.
2. El primer viewport muestra el trabajo y el mecanismo Full Stack.
3. El contenido aprobado y las métricas están intactos.
4. La confidencialidad está auditada en árbol, build, PDF y metadatos.
5. La suite Playwright/axe pasa en claro y oscuro, de 320 a 1440 px.
6. Lighthouse móvil alcanza al menos 95/95/95/95.
7. `DESIGN.md` documenta el sistema construido; `README.md` refleja el nuevo estado.
8. `docs/spec-003.md` registra el cierre y las tareas completadas.
9. La revisión `code-reviewer` emite veredicto **APTO**.
10. El PR está fusionado y el despliegue de GitHub Pages se validó en vivo.

> **Regla de cierre:** una página que parece terminada pero no tiene `DESIGN.md`, capturas revisadas y veredicto de la revisión final no está terminada; está abandonada en la meta.

---

## Apéndice A — Mapa de cambios de contenido

| Elemento | Cambia | Nota |
|---|---|---|
| Perfil, tagline y resumen | No | Se reutilizan desde `src/data/profile.ts`. |
| Proyectos, roles, stacks y enlaces | No | Se reutilizan desde `src/data/projects.ts`. |
| Métricas | No | +50 aplicaciones, 100–500 usuarios, 2 tipos de CRM. |
| Experiencia y responsabilidades | No | Se reutilizan desde `src/data/experience.ts`. |
| Servicios | No | Se reutilizan desde `src/data/services.ts`. |
| Stack | No | Se reutiliza desde `src/data/technologies.ts`. |
| CV | No | Mismo PDF, misma URL, mismo contenido saneado. |
| Etiquetas de interfaz | Sí | Nuevas cadenas en `src/i18n/es.ts`. |
| Orden de secciones | Sí | Proyectos y experiencia antes de servicios. |
| Identidad visual | Sí | Reemplazo completo por «Trazado de cargas». |
| 404 | Sí, visual | Conserva SEO y enlace a home. |
| OG image y favicon | Sí | Nueva portada social y monograma. |

## Apéndice B — Lista de verificación de confidencialidad

- [ ] El nombre del empleador no aparece en `src/`, `docs/`, `public/`, `tests/`, `README.md` ni en los mensajes de commit.
- [ ] El nombre del empleador no aparece en `dist/`, en el PDF, en la imagen OG ni en los metadatos.
- [ ] Se usa «Empresa confidencial» y la nota de divulgación limitada.
- [ ] No se añaden teléfono, dirección, foto ni ubicación.
- [ ] No se añaden clientes, testimonios, certificaciones ni resultados no aprobados.
- [ ] La métrica de endpoints retirada sigue ausente del sitio, CV y tests.

## Apéndice C — Registro de la ronda de dirección

| Campo | Valor |
|---|---|
| Herramienta | `impeccable concept-seed` |
| Modo | `experience` |
| Scope | `direction` |
| Seed reference | `seed:aa3f3ffd513bd8a0` |
| Dirección asignada | #5 de 7 — «Trazado de cargas» |
| Elección del propietario | Confirmada: «Trazado de cargas (asignada)» |
| Canal | Cuestionario estructurado; no se abrió la página de decisión |
| Challengers evaluados | 6; 3 competitivos, 3 declinados |
| Pick | «Expediente de evidencia», no seleccionado |
| Estado | Resuelto; sin re-roll |

---

**Fin de SPEC-003.**
