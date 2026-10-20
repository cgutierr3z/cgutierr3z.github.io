# SPEC-003 — Rediseño visual «Informe de gestión»

| Campo | Valor |
|---|---|
| **ID** | SPEC-003 |
| **Versión** | 2.1 — Implementada y validada |
| **Fecha** | 2026-10-20 |
| **Estado** | Implementada y validada en `feat/spec-003-report`; pendiente de revisión y merge |
| **Repositorio** | https://github.com/cgutierr3z/cgutierr3z.github.io |
| **Sitio objetivo** | https://cgutierr3z.github.io/ |
| **Base** | `master` @ `6b7172b` |
| **SPECs relacionadas** | [`docs/spec-001.md`](spec-001.md) · [`docs/spec-002.md`](spec-002.md) |
| **Origen** | Solicitud del propietario: rediseño visual del portafolio |
| **Dirección visual** | **Informe de gestión** — reporte anual personal; asignada por el roll de `impeccable` y aprobada por el propietario |
| **Rama de implementación** | `feat/spec-003-report` (nueva; sustituye a `feat/spec-003-load-path`) |
| **Rama de despliegue** | `master` |
| **Fuente de verdad** | `docs/spec-003.md` |
| **Agente de implementación** | `feature-coder` |
| **Agente de auditoría** | `code-reviewer` |

> **Nota de confidencialidad:** el nombre del empleador actual/anterior es confidencial. No debe aparecer en este documento, en el código, en los textos, en los tests, en los commits, en el README, en metadatos, en imágenes ni en el sitio generado. En el contenido se usa “Empresa confidencial” y la nota de divulgación limitada.

---

## 0. Historial de revisiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-10-20 | Dirección «Trazado de cargas». Se implementaron T-001–T-003 (tokens, shell de láminas, portada con corte de cargas). El propietario rechazó la estética de láminas/planos; solo aprobó el esquema de colores y exigió recuperar el menú horizontal clásico. |
| 2.0 | 2026-10-20 | Dirección «Informe de gestión». Se conserva la paleta y el menú clásico; se descarta toda la metáfora de planos, láminas, bloques de títulos y anotaciones. Se reinicia el plan de implementación. |
| 2.1 | 2026-10-20 | Implementación completada (T-001–T-010) y validada en `feat/spec-003-report`: check, build, 36 pruebas Playwright/axe, Lighthouse 100/100/100/100 y detector sin hallazgos. |

La versión 1.0 queda como evidencia en el historial de git y en la rama antigua; no debe reutilizarse su lenguaje visual ni sus componentes.

---

## 1. Resumen ejecutivo y contexto

SPEC-001 construyó un portafolio correcto, rápido y accesible. SPEC-002 lo endureció y dejó el sitio desplegado con Playwright/axe en verde, Lighthouse 100/100/100/100 y un CV público saneado. El contenido es sólido: ocho proyectos aprobados, experiencia verificable en aplicaciones empresariales, migraciones PHP/Yii 1 → React + Form.io, APIs REST, AWS Lambda y datos DB2 → PostgreSQL.

La primera propuesta de rediseño (SPEC-003 v1.0, «Trazado de cargas») convirtió el sitio en un juego de planos técnicos. El propietario la rechazó: la metáfora competía con el trabajo y hacía que el portafolio pareciera un documento de ingeniería antes que el trabajo de una persona. Aprobó, en cambio, el esquema de colores —papel cálido, tinta, óxido y pátina, con tema claro/oscuro— y pidió recuperar el menú horizontal clásico.

SPEC-003 v2.0 propone una dirección nueva: **«Informe de gestión»**. El portafolio se lee como el informe anual de una práctica profesional. La portada declara quién es Carlos y qué entrega; las tres métricas aprobadas abren la evidencia como cifras del periodo; los proyectos se presentan como casos de trabajo a toda anchura; la trayectoria se lee como un registro; las capacidades, como una tabla de materiales; y el contacto cierra como correspondencia.

No es una plantilla corporativa ni un dashboard financiero. Es una pieza editorial sobria, con jerarquía de informe, tipografía a escala de portada y campos de color que ordenan la lectura. El contenido, las métricas, la confidencialidad, el tema claro/oscuro, la arquitectura Astro y el despliegue en GitHub Pages no cambian.

### 1.1 Resultado esperado

- Una primera impresión reconocible como el portafolio de Carlos, no como una plantilla.
- El trabajo y la evidencia visibles desde el primer viewport.
- Una lectura clara para reclutadores: perfil → alcance → proyectos → trayectoria → capacidades → contacto.
- Un sistema visual documentado y reutilizable, no una colección de estilos puntuales.
- La paleta aprobada y el menú clásico, sin rastros de la dirección rechazada.
- Cero cambios en hechos, métricas, proyectos, roles, CV o confidencialidad.
- Cero regresiones de accesibilidad, rendimiento, SEO o despliegue.

---

## 2. Objetivos y criterios de éxito medibles

### 2.1 Objetivos

1. Reemplazar la identidad genérica por una dirección editorial propia y coherente.
2. Hacer que el trabajo lidere la primera impresión, como corresponde a una superficie **Experience**.
3. Dar a las métricas aprobadas un lugar estructural: cifras del periodo, no adornos.
4. Mejorar la jerarquía, la densidad útil y la velocidad de escaneo para reclutadores técnicos.
5. Eliminar por completo el lenguaje de láminas, planos, bloques de títulos y anotaciones.
6. Conservar la paleta aprobada y el menú horizontal clásico.
7. Elevar el craft: tipografía, retícula, reglas, campos de color, movimiento y estados.
8. Mantener contenido, confidencialidad, rendimiento, accesibilidad WCAG 2.2 AA y despliegue estático.

### 2.2 Criterios de éxito

| ID | Criterio | Verificación |
|---|---|---|
| SC-001 | A 1440 × 900, el primer viewport muestra nombre, rol, tesis, al menos 3 accesos a proyectos y la acción primaria; las cifras del periodo comienzan a verse. | Captura + inspección visual |
| SC-002 | A 390 × 844, el primer viewport muestra nombre, rol, acción primaria y el inicio de las cifras; no hay scroll horizontal. | Playwright + captura |
| SC-003 | La página no contiene láminas, planos, bloques de títulos, marcas de esquina, retícula blueprint, cotas ni numeración de láminas. | Revisión de código + test de contenido |
| SC-004 | Los 8 proyectos, los 3 destacados y los 5 secundarios siguen presentes. | Test E2E |
| SC-005 | Las métricas aprobadas aparecen exactamente: **+50 aplicaciones**, **100–500 usuarios**, **2 tipos de CRM**. | Test de contenido |
| SC-006 | No aparece el nombre del empleador confidencial ni la métrica de endpoints retirada. | Auditoría de build + test |
| SC-007 | axe no reporta violaciones en tema claro ni oscuro, en home y 404. | Playwright/axe |
| SC-008 | Navegación completa por teclado, foco visible, menú móvil con Escape y restauración de foco. | Test E2E |
| SC-009 | Lighthouse móvil ≥ 95 en las cuatro categorías; objetivo 100/100/100/100. | Lighthouse |
| SC-010 | LCP ≤ 2,5 s, CLS ≤ 0,05 e INP ≤ 200 ms en laboratorio móvil. | Lighthouse / observación |
| SC-011 | La carga de fuentes no supera 120 KB WOFF2 en total y no añade dependencias de runtime. | Inspección de build |
| SC-012 | Sin overflow horizontal de 320 a 1440 px. | Playwright |
| SC-013 | `bun run check`, `bun run build` y toda la suite Playwright pasa. | CI local y PR |
| SC-014 | La home conserva canonical, `og:url` y JSON-LD; la 404 conserva `noindex` y no emite esas señales. | Test E2E |
| SC-015 | El CV y su enlace siguen intactos y descargables; se enlaza una sola vez desde la portada. | Test CV/E2E |
| SC-016 | `DESIGN.md` describe el mundo construido y `README.md` refleja el nuevo sistema. | Revisión documental |
| SC-017 | El header conserva el menú horizontal clásico de cinco enlaces: Servicios, Proyectos, Experiencia, Stack y Sobre mí, en ese orden. | Test E2E |
| SC-018 | Los tokens de color aprobados (papel, tinta, óxido, pátina) se conservan en claro y oscuro. | Revisión de `global.css` |

### 2.3 Criterios de fracaso

Cualquiera de estos resultados invalida la implementación:

- Se reutiliza la estética de láminas, planos o bloque de títulos.
- Se inventa, elimina o reescribe contenido aprobado sin autorización.
- La pieza se convierte en una parodia de informe financiero o usa gráficos/datos falsos.
- Se publica el nombre del empleador o cualquier dato sensible.
- Se sustituyen los proyectos por capturas, mockups o imágenes que simulen ser reales.
- El rendimiento baja de 95 en móvil o la accesibilidad deja de ser AA.
- La página depende de JavaScript para mostrar el contenido principal.
- Se rompen las URLs, anclas, el CV o el despliegue de GitHub Pages.

---

## 3. Alcance

### 3.1 Incluido

| Grupo | Incluye |
|---|---|
| Identidad visual | Paleta aprobada, tipografía, retícula, escalas, reglas, campos de color, foco y movimiento. |
| Arquitectura de información | Orden actual de la home (Portada → Servicios → Proyectos → Otros → Experiencia → Stack → Sobre mí → Contacto), conservando todos los `id`. |
| Componentes | Header clásico, portada, banda de cifras, entradas de proyecto, ledger de otros proyectos, registro de experiencia, tabla de capacidades, nota de autor, bloque de contacto, colofón y 404. |
| Navegación | Menú horizontal clásico de cinco enlaces y menú móvil accesible; sin índice de láminas. |
| Tipografía | `Archivo Variable` y `Fragment Mono` self-hosted, con presupuesto de peso y uso restringido del mono a datos y etiquetas. |
| Tema | Claro y oscuro con los tokens existentes, sin flash y con contraste verificado. |
| Movimiento | Aparición sobria de reglas y bloques, transiciones de estado y respeto a `prefers-reduced-motion`. |
| Metadatos visuales | Nueva imagen Open Graph 1200 × 630 y favicon coherente con la dirección. |
| Datos de presentación | `src/data/report.ts` para cifras y capítulos; sin nuevos hechos. |
| i18n | Nuevas etiquetas de interfaz en `src/i18n/es.ts`; se retira el bloque `drawing`. |
| Pruebas | Actualización de E2E, axe claro/oscuro, viewport 320–1440 y controles de contenido/dirección. |
| Documentación | `DIRECTION` en esta SPEC, `DESIGN.md`, `README.md` y cierre de SPEC-003. |

### 3.2 Excluido

- Reescribir el copy aprobado de perfil, proyectos, servicios, experiencia, stack, sobre mí o contacto.
- Añadir proyectos, clientes, testimonios, certificaciones, logos o métricas.
- Publicar el nombre del empleador o datos personales retirados del CV.
- Formulario de contacto, backend, CMS, blog, analítica, cookies, pagos o dominio propio.
- Selector de idioma o contenido en inglés.
- Casos de estudio individuales o páginas nuevas.
- Capturas de pantalla, mockups o imágenes generadas que simulen ser los proyectos reales.
- Gráficos financieros, ejes, barras de crecimiento, cifras inventadas o cualquier dato no aprobado.
- WebGL, canvas, vídeo, parallax, scroll-jacking o librerías de animación.
- Cambios en el CV público, en su generador o en sus pruebas de contenido.
- Cambios en `.github/workflows/*.yml`, en la política de despliegue o en `opencode.json`.
- Modificación de `docs/spec-001.md` o `docs/spec-002.md`; solo se enlazan.
- Purga del blob histórico no alcanzable tratado en SPEC-002.

### 3.3 Supuestos y decisiones cerradas

- El propietario aprobó la dirección «Informe de gestión» y el alcance de esta SPEC.
- El propietario confirmó la paleta actual y el menú horizontal clásico.
- El sitio seguirá siendo estático y se publicará en GitHub Pages.
- No hay imágenes reales de los proyectos; no se inventan capturas ni diagramas que simulen serlo.
- El contenido y las métricas de `src/data/` son la única fuente de verdad.
- La implementación se hará en `feat/spec-003-report`, con PR y CI en verde.
- La rama y el PR de «Trazado de cargas» se descartan; no se mezclan sus componentes con esta dirección.

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

**Diagnóstico:** el problema no es la falta de contenido ni la corrección técnica, sino la falta de una forma editorial propia. El rediseño debe hacer visible la evidencia y el criterio, no disfrazarlos con una metáfora.

### 4.2 Dirección visual: «Informe de gestión»

La dirección se eligió con el roll de `impeccable` (`concept-seed`, modo `experience`), tras descartar «Trazado de cargas». Se ordenaron siete direcciones propias por resonancia con el mundo del reclutador técnico; la asignación fue la número 6.

| # | Dirección propia | Lectura | Resultado |
|---|---|---|---|
| 1 | **Monografía técnica** | Libro impreso de obra: cubierta, índice, capítulos y colofón. | Pick; alternativa no seleccionada. Riesgo: cercana al cliché editorial. |
| 2 | **Dosier de revisión** | Cada proyecto como un changeset revisable con notas al margen. | Alternativa no seleccionada. Riesgo: gimmick si las notas no son honestas. |
| 3 | **Registro de versiones** | Trayectoria como changelog con fechas y estados. | Alternativa no seleccionada. |
| 4 | **Programa de conferencia** | Proyectos como sesiones con tracks y horarios. | Alternativa no seleccionada. |
| 5 | **Catálogo de exposición** | Obra y etiquetas de sala. | Alternativa no seleccionada; demasiado próxima a la estética de láminas rechazada. |
| 6 | **Informe de gestión** | Reporte anual personal: cifras del periodo, trabajo seleccionado, trayectoria y correspondencia. | **Asignada y aprobada por el propietario.** |
| 7 | **Cuaderno de campo** | Carpeta de notas de proyecto con pestañas. | No seleccionada. |

#### Challengers del catálogo y veredictos

| Challenger | Veredicto | Donación de disciplina |
|---|---|---|
| Río de letreros de mercado nocturno | Declinado | Jerarquía de señalización: cada sección declara dónde está y qué sigue. |
| Portada de highlife | Declinado | Escala tipográfica de portada: el nombre ocupa el espacio de una cubierta. |
| Puente de vúmetros | Declinado | Disciplina de señal: el óxido se reserva para acción y cifras, no para decorar. |
| Pila HyperCard | Competitivo | Direccionabilidad: cada evidencia tiene ancla y estado propio; se descarta su paleta B/N. |
| Nocturno urbano bajo lluvia | Declinado | Profundidad del tema oscuro como campo, no como inversión automática. |
| Torre de arcilla enrollada | Declinado | Ritmo de cursos apilados: bandas horizontales que ordenan la lectura. |

La dirección asignada se eleva con esas disciplinas, sin copiar paletas, motivos ni vestuario. Un solo mundo posee la página.

#### Contrato de dirección

> Este contrato vive en esta SPEC y no debe copiarse al código, al HTML, a los atributos `data-*`, a los metadatos ni a ningún artefacto servido.

- **THESIS:** Un portafolio que se lee como el informe de gestión de una práctica profesional: la portada declara quién es Carlos y qué entrega; las cifras aprobadas abren la evidencia; los proyectos se leen como casos, no como tarjetas. Rechaza el hero genérico con tarjeta de perfil y la retícula de tarjetas iguales.
- **OWN-WORLD:** Papel cálido, tinta, óxido y pátina; `Archivo Variable` a escala de portada y cuerpo; `Fragment Mono` solo para cifras, fechas y etiquetas; bandas regladas, campos de color a sangre y jerarquía de informe. Sin láminas, planos, marcas de esquina, bloques de títulos, retícula blueprint ni anotaciones de cota.
- **STORY:** El reclutador entiende en segundos quién es Carlos, qué evidencia respalda su experiencia y dónde está el trabajo; reconoce al menos dos proyectos y encuentra contacto sin fricción. El visitante siente que hojea un informe bien hecho, no una plantilla.
- **FIRST VIEWPORT:** Portada de informe a 1440 × 900: cinta superior con «Informe de gestión / 2026»; nombre a escala de portada y rol; tesis y resumen a la izquierda; acción primaria «Ver proyectos» y secundaria «Descargar CV»; panel de «Cifras del periodo» con las tres métricas aprobadas en cifras grandes; índice de los tres proyectos destacados. A 390 × 844: nombre, rol, acción primaria y el inicio de las cifras, sin scroll horizontal.
- **FORM:** Dirección asignada #6 de 7 direcciones propias; `seed:d7de94566aeb8481`.
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

#### Lo que la dirección no es

- No es un plano, una lámina ni un documento de ingeniería.
- No es un dashboard ni una plantilla SaaS con tarjetas.
- No es una parodia de informe financiero: no hay gráficos, ejes ni cifras inventadas.
- No es una portada corporativa genérica: el trabajo y las personas están por delante.
- No es una excusa para añadir adornos; cada regla, campo y cifra cumple una función de lectura.

### 4.3 Sistema visual

#### Color

Estrategia: **Committed**. El papel y la tinta ocupan campos completos; el óxido es la señal y la pátina el material de apoyo. No es una paleta neutra con un acento decorativo.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#F2EEE4` | `#0F1416` | Fondo del informe |
| `--paper-raised` | `#FBF8F0` | `#161C1F` | Filas y superficies elevadas |
| `--ink` | `#15191B` | `#F1EBDF` | Texto principal y campos oscuros |
| `--ink-soft` | `#4C5455` | `#B8B2A6` | Texto secundario |
| `--rule` | `#C9C1AF` | `#2D3537` | Reglas finas |
| `--rule-strong` | `#8B8476` | `#5C6769` | Reglas activas y énfasis |
| `--oxide` | `#A64B33` | `#E18368` | Acción primaria, cifras y señal |
| `--oxide-strong` | `#7E3524` | `#F0A18A` | Hover y énfasis |
| `--patina` | `#2E5F5A` | `#7CC0B7` | Campos de caso y datos de apoyo |
| `--on-signal` | `#FFF9F0` | `#0F1416` | Texto sobre óxido y pátina |
| `--focus` | `#1D5F86` | `#8EC9E8` | Foco visible |

Reglas:

- El texto normal debe cumplir 4,5:1; el texto grande, 3:1; los componentes, 3:1.
- El tema oscuro es un campo nocturno con el mismo sistema, no una inversión automática.
- El color nunca es el único portador de significado.
- El óxido se reserva para la acción primaria, las cifras aprobadas y las reglas activas.
- La pátina puede ser campo de un caso destacado o fondo de la banda de cifras; nunca texto pequeño sobre óxido.
- Se retira `--grid`: no hay retícula de plano ni textura blueprint.
- Sin gradientes decorativos, sin glassmorphism y sin sombras difusas.

#### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Voz principal | **Archivo Variable** | Nombre, títulos, cuerpo, navegación y botones. |
| Datos y etiquetas | **Fragment Mono** | Cifras pequeñas, fechas, índices de capítulo, metadatos y notas. |

Decisiones:

- Self-hosted, subset latino, `font-display: swap`, precarga de la voz principal.
- Presupuesto total de fuentes: ≤ 120 KB WOFF2.
- Escala fluida: `h1` `clamp(3.5rem, 9vw, 7rem)`; `h2` `clamp(2rem, 4.5vw, 3.75rem)`; cuerpo `1.0625rem/1.65`; datos `0.75rem`.
- `text-wrap: balance` en titulares; `text-wrap: pretty` en párrafos; medida de 60–70 caracteres.
- `font-variant-numeric: tabular-nums` en fechas, cifras y metadatos.
- Mayúsculas y tracking solo en etiquetas cortas; nunca en párrafos.
- El mono no se usa para párrafos, navegación ni titulares: solo para datos y etiquetas.

#### Retícula y composición

- Retícula base de 12 columnas en escritorio, 8 en tablet y 4 en móvil; unidad de 8 px.
- Ancho máximo del contenido: 1200 px; márgenes laterales de 24/40/64 px; canal de 24–32 px.
- Sin barra lateral fija ni índice de láminas: el menú clásico vive en el header.
- Bandas de sección separadas por reglas de 1 px; campos de color a sangre solo en la portada (cifras) y en contacto.
- Espaciado vertical: 96–128 px entre secciones en escritorio; 56–72 px en móvil.
- Radios: 0–4 px. Sin tarjetas redondeadas ni sombras.
- En móvil, los metadatos secundarios se apilan con etiquetas visibles; el contenido nunca se oculta.

#### Materiales y componentes

| Componente | Regla visual |
|---|---|
| Cinta de informe | Línea superior con «Informe de gestión / 2026» y regla fina. |
| Portada | Nombre a escala de cubierta, rol, tesis, resumen y acciones; sin tarjeta de perfil. |
| Banda de cifras | Campo de pátina con las tres métricas aprobadas en cifras grandes y nota al pie. |
| Índice de trabajo | Tres filas 01–03 con título de proyecto, año y enlace. |
| Encabezado de capítulo | Índice, título, descripción breve y regla; sin numeración de lámina. |
| Caso destacado | Banda a toda anchura con campo de color, título, metadatos, resumen, `details`, stack y enlaces. |
| Registro adicional | Tabla/ledger de otros proyectos; en móvil, filas apiladas con etiquetas. |
| Trayectoria | Cronología con columna de fechas, rol, empresa confidencial, logros y nota. |
| Capacidades | Tabla de materiales por categoría; dos columnas en escritorio. |
| Nota del autor | Dos párrafos aprobados y una lista breve de principios. |
| Correspondencia | Banda de óxido a sangre con email primario y enlaces secundarios. |
| Colofón | Créditos, tipografías, stack, copyright y nota de confidencialidad. |

#### Movimiento

- Aparición de secciones: `opacity` y `translateY(8px)` en 400–500 ms, una sola vez.
- Reglas y campos de color: transición de 200 ms al entrar en viewport.
- Hover/foco: 150 ms; cambio de tema: 200 ms.
- Sin contadores, sin rebotes, sin parallax, sin scroll-jacking.
- `prefers-reduced-motion: reduce`: sin transformaciones ni animaciones de entrada; scroll instantáneo.
- Sin JS, todo el contenido sigue visible y navegable.

### 4.4 Arquitectura de información

| # | Sección | `id` | Contenido |
|---|---|---|---|
| 00 | Portada | `inicio` | Nombre, rol, tesis, resumen, acciones, cifras del periodo e índice de los tres destacados. |
| 01 | Servicios | `servicios` | Seis alcances numerados con etiqueta de ámbito y CTA de contacto. |
| 02 | Proyectos destacados | `proyectos` | Tres casos a toda anchura: `covidmap-col`, `coffee-shop`, `pt-recisa`. |
| 03 | Otros proyectos | `otros-proyectos` | Cinco proyectos en registro, agrupados por categoría. |
| 04 | Experiencia | `experiencia` | Trayectoria, logros, métricas aprobadas y responsabilidades en `details`. |
| 05 | Stack | `stack` | Tabla de capacidades por categoría. |
| 06 | Sobre mí | `sobre-mi` | Nota del autor y principios. |
| 07 | Contacto | `contacto` | Correspondencia: email, GitHub y LinkedIn. |

Decisiones:

- Se conservan todos los `id` y las URLs públicas.
- El orden actual de la home se mantiene: Portada → Servicios → Proyectos → Otros → Experiencia → Stack → Sobre mí → Contacto.
- Los tres casos destacados reciben anclas estables `#proyecto-{slug}`.
- El header conserva el menú horizontal clásico de cinco enlaces y su menú móvil; no se añade índice lateral.
- El footer funciona como colofón del informe.

### 4.5 Composición por sección

#### 00 — Portada

- Cinta superior: «Informe de gestión / 2026» y una regla fina de lado a lado.
- `h1#hero-title` con **Carlos Gutierrez** a escala de cubierta y **Desarrollador Full Stack** debajo.
- Tesis (`profile.tagline`) en cuerpo grande; resumen aprobado en medida de lectura.
- Acción primaria «Ver proyectos»; secundaria «Descargar CV»; GitHub, LinkedIn y contacto como enlaces de texto con anuncio de nueva pestaña.
- Panel de «Cifras del periodo»: las tres métricas aprobadas en cifras grandes dentro de un campo de pátina, con la nota «Métricas de experiencia profesional, no de los proyectos listados».
- Índice de trabajo: `01 CovidMap Colombia`, `02 Coffee Shop`, `03 Prueba técnica Full Stack`, con enlaces a sus anclas.
- Sin foto, sin tarjeta de perfil, sin bloque de títulos, sin retícula de plano.

#### 01 — Servicios

- Lista numerada `01–06`; cada fila: número, título, descripción y etiqueta de ámbito.
- Sin tarjetas ni iconos decorativos; la jerarquía la hacen el número, la regla y el espacio.
- CTA de contacto al final de la lista y en el header.

#### 02 — Proyectos destacados

- Tres casos a toda anchura, no una cuadrícula de tarjetas.
- Cada caso: número de caso (01/02/03), campo de color (pátina, óxido o tinta), tipo, año, título, resumen, metadatos, `details` con detalle aprobado, stack y enlaces.
- En escritorio, el campo de color ocupa 4 columnas y el texto 8; en móvil se apila.
- Sin diagramas, sin capturas falsas y sin imágenes que simulen los proyectos.
- Enlaces externos con el patrón accesible «Demo|Repositorio de {proyecto}. Abre en una nueva pestaña».
- Ancla `#proyecto-{slug}` en cada caso.

#### 03 — Otros proyectos

- Registro tipo ledger, no tarjetas.
- Agrupación por categoría: Fundamentos de ingeniería y Juegos y gráficos.
- Cada fila: número `02.x`, título, tipo, año, stack y enlace al repositorio.
- En móvil, cada fila se convierte en una ficha apilada con etiquetas visibles; sin tabla horizontal.
- Nota de contexto: proyectos académicos y de exploración, no trabajos para clientes.

#### 04 — Experiencia

- Registro de trayectoria con línea vertical y marcas de fecha.
- Rol, empresa confidencial, periodo, resumen y logros.
- Métricas aprobadas dentro de los logros, sin ampliarlas ni reinterpretarlas.
- Responsabilidades dentro de un `details` accesible, cerrado por defecto.
- Stack como etiquetas de texto.
- Nota de confidencialidad visible.

#### 05 — Stack

- Tabla de capacidades: cinco filas de categoría.
- Cada tecnología se presenta como una entrada de tabla, no como una tarjeta.
- En escritorio, dos columnas; en móvil, una.
- Sin iconos ni colores que impliquen niveles de dominio no declarados.

#### 06 — Sobre mí

- Nota del autor con los dos párrafos aprobados.
- Lista de principios de trabajo, derivada del contenido existente.
- Firma discreta `Carlos Gutierrez / 2026`; sin foto ni retrato inventado.

#### 07 — Contacto

- Banda de óxido a sangre con título y texto aprobados.
- Email como acción primaria; GitHub y LinkedIn como secundarias.
- Sin formulario, sin backend y sin promesas de respuesta no verificadas.
- El enlace de CV sigue existiendo una sola vez, en la portada.

#### 404

- Página de fe de erratas: «Página no encontrada» y una regla interrumpida.
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
| Iconos | SVG inline existentes; sin librería nueva. |
| JS de cliente | Tema, menú móvil y aparición de secciones; sin framework. |
| Imágenes | OG image y favicon; sin capturas de proyectos. |
| SEO | Se conserva la implementación de `SEO.astro`; solo se actualiza la imagen OG. |
| Tests | Playwright + axe; se actualizan selectores y se añaden controles de diseño. |

#### Archivos previstos

```text
PRODUCT.md                              # verdad de producto
DESIGN.md                               # sistema visual construido (se escribe al cierre)
docs/spec-003.md                        # esta especificación

src/
  components/
    Header.astro                        # menú horizontal clásico, tema, CTA y menú móvil
    ReportSection.astro                 # banda de sección con capítulo y regla
    ChapterHeader.astro                 # índice, título y descripción de capítulo
    MetricBand.astro                    # cifras del periodo
    Hero.astro                          # portada del informe
    Services.astro                      # alcances 01–06
    FeaturedProjects.astro              # casos destacados
    ProjectEntry.astro                  # caso a toda anchura
    OtherProjects.astro                 # registro adicional
    Experience.astro                    # trayectoria
    Stack.astro                         # tabla de capacidades
    About.astro                         # nota del autor
    Contact.astro                       # correspondencia
    Footer.astro                        # colofón
    Icon.astro                          # iconos existentes, sin librería
    SEO.astro                           # sin cambios funcionales
    ThemeToggle.astro                   # sin cambios funcionales
  data/
    report.ts                           # métricas y capítulos del informe
  i18n/
    es.ts                               # etiquetas del informe y a11y
  layouts/
    BaseLayout.astro                    # estructura, fuentes y skip link
  pages/
    index.astro                         # orden de secciones
    404.astro                           # fe de erratas
  styles/
    global.css                          # tokens, base, escala y movimiento
public/
  og-image.png                          # portada social 1200 × 630
  favicon.svg                           # monograma coherente
tests/
  portfolio.spec.ts                     # E2E y contenido
  a11y.spec.ts                          # axe claro/oscuro
  design.spec.ts                        # controles de la dirección
```

#### Componentes y datos retirados

- `src/components/drawing/` completo (`SheetIndex`, `SheetHeader`, `TitleBlock`, `RuleLabel`, `Annotation`, `LoadPath` y cualquier `ProjectDrawing`).
- `src/data/drawings.ts`.
- El bloque `drawing` de `src/i18n/es.ts`.
- Toda referencia textual a «lámina», «plano», «trazado de cargas», «bloque de títulos», «escala 1:1» o «anotación».
- `ProjectCard.astro` se sustituye por `ProjectEntry.astro`; los iconos de servicios dejan de renderizarse.
- `Section.astro` puede conservarse solo si no impone la retícula de tarjetas; preferible sustituirlo por `ReportSection.astro`.
- `Hero.astro` se reescribe; no conserva la tarjeta lateral de perfil.

### 4.7 Accesibilidad

- Objetivo WCAG 2.2 AA.
- Un solo `h1`; jerarquía `h2`/`h3`/`h4` sin saltos.
- Skip link existente.
- Foco visible de 2 px con offset de 3 px en ambos temas.
- El header conserva `aria-label="Navegación principal"` y el menú móvil su `aria-expanded`, `aria-controls`, Escape y restauración de foco.
- Los enlaces externos anuncian la nueva pestaña; los enlaces de proyecto incluyen el nombre.
- Los `details` de responsabilidades y de los casos son operables por teclado.
- Sin dependencia de hover para acceder a información.
- Contraste verificado en claro y oscuro; no se acepta texto gris claro sobre papel.
- `prefers-reduced-motion` desactiva las transformaciones y las animaciones de entrada.
- En móvil, las etiquetas mono no bajan de 11 px y el cuerpo no baja de 16 px.
- La banda de óxido usa `--on-signal` y se verifica en ambos temas.

### 4.8 Rendimiento

- Sin nuevas dependencias de runtime.
- Solo dos familias de fuentes, subset latino y precarga de la principal.
- Sin imágenes de proyectos; la OG image es la única imagen raster nueva.
- CSS para reglas y campos de color; sin canvas.
- JS de cliente mínimo y progresivo.
- Evitar `backdrop-filter`, sombras grandes y animaciones de `box-shadow`.
- Presupuesto: LCP ≤ 2,5 s, CLS ≤ 0,05, INP ≤ 200 ms, Lighthouse ≥ 95.
- Las animaciones usan `transform` y `opacity`.

### 4.9 SEO y metadatos

- Se conservan título, descripción, canonical, `og:url`, Twitter Card y JSON-LD.
- La imagen OG se reemplaza por una portada tipográfica 1200 × 630 coherente con el informe.
- Se añade `og:image:alt` descriptivo.
- La 404 conserva `noindex, nofollow` y no emite canonical, `og:url` ni JSON-LD.
- No se cambian URLs, anclas existentes ni el sitemap.

### 4.10 Contenido y confidencialidad

- No se reescribe el copy aprobado de `src/data/`.
- Las nuevas cadenas son etiquetas de interfaz y se centralizan en `src/i18n/es.ts`.
- Las métricas se muestran como cifras de experiencia profesional, no como resultados de los proyectos.
- No se añaden testimonios, clientes, logos, certificaciones ni resultados.
- No se publica el nombre del empleador; se mantiene «Empresa confidencial» y su nota.
- El CV no se modifica.
- La auditoría de confidencialidad se ejecuta sobre el árbol, `dist/`, el PDF y los metadatos.

---

## 5. Contratos de datos y modelos TypeScript

### 5.1 Tipos existentes que no cambian

`Profile`, `Service`, `Project`, `Experience`, `TechnologyGroup`, `SiteMeta`, `ProjectType`, `ProjectCategory` y `ProjectLink` se conservan. No se añaden campos de contenido a `Project` ni a `Experience`.

### 5.2 Nuevo archivo `src/data/report.ts`

```ts
export interface ReportMetric {
  value: string;
  label: string;
  note: string;
}

export interface ReportSection {
  id: string;
  index: string; // '01', '02'…
  label: string;
  href: `#${string}`;
}

export const reportMetrics: readonly ReportMetric[];
export const reportSections: readonly ReportSection[];
```

Contratos:

- `reportMetrics` contiene exactamente las tres métricas aprobadas, en este orden:
  1. `value: '+50'`, `label: 'aplicaciones'`.
  2. `value: '100–500'`, `label: 'usuarios'`.
  3. `value: '2'`, `label: 'tipos de CRM'`.
- `note` es exactamente: «Métricas de experiencia profesional, no de los proyectos listados».
- No se añaden cifras, tendencias, porcentajes, periodos ni comparaciones.
- `reportSections` contiene exactamente siete capítulos con los `id` `servicios`, `proyectos`, `otros-proyectos`, `experiencia`, `stack`, `sobre-mi` y `contacto`.
- `reportSections` alimenta los encabezados de capítulo y el índice del colofón; el header mantiene su propia lista clásica de cinco enlaces.
- Ningún dato de `report.ts` puede contradecir `projects.ts`, `experience.ts` o `profile.ts`.

### 5.3 i18n

Añadir a `src/i18n/es.ts` un bloque `report` con, como mínimo:

- `kicker`: «Informe de gestión».
- `period`: «2026».
- `highlights`: «Cifras del periodo».
- `metricsNote`: «Métricas de experiencia profesional, no de los proyectos listados».
- `selectedWork`: «Trabajo seleccionado».
- `services`: «Alcance».
- `otherProjects`: «Registro adicional».
- `experience`: «Trayectoria».
- `stack`: «Capacidades».
- `about`: «Nota del autor».
- `contact`: «Correspondencia».
- `colophon`: «Colofón».
- `errata`: «Fe de erratas».
- `case`: «Caso».
- `scope`: «Ámbito».
- `schematic`: no se usa; se retira.
- `sheetIndex`, `sheet`, `loadPath`, `annotation`, `scale` y demás claves de la v1.0 se eliminan.

Los textos de tema, menú, contacto, tipos de proyecto, categorías y etiquetas existentes se conservan y se reutilizan. No se duplican cadenas en componentes.

---

## 6. Plan de tareas

> Cada tarea se implementa y valida por separado. No se avanza a la siguiente sin `bun run check`, `bun run build` y la suite Playwright en verde (actualizando los tests afectados dentro de la misma tarea).

| ID | Tarea | Archivos principales | Criterio de aceptación |
|---|---|---|---|
| T-001 | **Base visual y limpieza.** Conservar la paleta aprobada; retirar `--grid`; definir escala tipográfica, reglas, campos y foco; eliminar componentes y datos de la dirección rechazada. | `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/components/drawing/*`, `src/data/drawings.ts`, `src/i18n/es.ts` | No quedan referencias a láminas/planos; `check` y `build` pasan; contraste en claro/oscuro. |
| T-002 | **Shell del informe.** Crear `ReportSection` y `ChapterHeader`; conservar el header clásico; adaptar el footer a colofón; fijar el orden de secciones. | `ReportSection.astro`, `ChapterHeader.astro`, `Header.astro`, `Footer.astro`, `index.astro` | Ocho `id` presentes; menú de 5 enlaces en orden clásico; menú móvil operativo; axe sin violaciones. |
| T-003 | **Portada del informe.** Reescribir `Hero` como cubierta; crear `MetricBand`; indexar los tres destacados; conectar `report.ts`. | `Hero.astro`, `MetricBand.astro`, `report.ts`, `es.ts` | SC-001/SC-002; `h1#hero-title` con nombre y rol; 3 accesos a proyectos; 3 métricas exactas; sin tarjeta lateral. |
| T-004 | **Servicios y casos destacados.** Rehacer `Services` como lista de alcances y `FeaturedProjects` con `ProjectEntry` a toda anchura. | `Services.astro`, `FeaturedProjects.astro`, `ProjectEntry.astro` | Seis alcances; tres casos; anclas `#proyecto-{slug}`; sin diagramas ni capturas; enlaces accesibles. |
| T-005 | **Registro de otros proyectos.** Convertir `OtherProjects` en ledger agrupado y responsive. | `OtherProjects.astro` | Cinco proyectos, dos grupos, sin tabla horizontal; enlaces accesibles; tipos y años visibles. |
| T-006 | **Trayectoria.** Rehacer `Experience` como registro con `details` de responsabilidades y nota de confidencialidad. | `Experience.astro`, `es.ts` | Contenido exacto; métricas dentro de logros; teclado; «Empresa confidencial» visible. |
| T-007 | **Capacidades, nota y correspondencia.** Rehacer `Stack` como tabla, `About` como nota del autor y `Contact` como banda de óxido. | `Stack.astro`, `About.astro`, `Contact.astro` | Sin cuadrícula de tarjetas; copy aprobado; email primario; contraste de la banda verificado. |
| T-008 | **404, colofón y metadatos.** Adaptar `Footer` como colofón y `404` como fe de erratas; renovar OG image y favicon. | `Footer.astro`, `404.astro`, `public/og-image.png`, `public/favicon.svg`, `SEO.astro` | 404 sin señales SEO; OG legible; colofón completo; sin datos sensibles. |
| T-009 | **Movimiento, responsive, tema e impresión.** Añadir aparición sobria de secciones, estados y estilos de impresión. | `global.css`, componentes afectados | `prefers-reduced-motion`; 320–1440 sin overflow; claro/oscuro; impresión legible. |
| T-010 | **Pruebas, documentación y cierre.** Actualizar E2E/axe/design; escribir `DESIGN.md` y actualizar `README.md` y esta SPEC. | `tests/*`, `DESIGN.md`, `README.md`, `docs/spec-003.md` | Suite completa en verde; 0 violaciones; documentación coherente con el build; criterios SC verificados. |

### 6.1 Dependencias

- T-002 depende de T-001.
- T-003 depende de T-002.
- T-004 y T-005 dependen de T-003.
- T-006, T-007 y T-008 dependen de T-002.
- T-009 depende de T-003 a T-008.
- T-010 depende de T-001 a T-009.

### 6.2 Orden de implementación recomendado

1. T-001 → T-002 → T-003.
2. T-004 → T-005.
3. T-006 → T-007 → T-008.
4. T-009.
5. T-010.

---

## 7. Plan de pruebas y aceptación

### 7.1 Pruebas automatizadas

| Prueba | Cobertura |
|---|---|
| `bun run check` | Tipos, Astro y referencias de datos. |
| `bun run build` | Generación estática, sitemap y assets. |
| `bun run test:e2e` | Home, secciones, navegación, tema, CV, enlaces, 404, SEO, responsive y axe. |
| `bun run test:a11y` | axe en home y 404, tema claro y oscuro. |
| `tests/design.spec.ts` | Portada, cifras, capítulos, header clásico y ausencia de la dirección rechazada. |

### 7.2 Casos nuevos o actualizados

- El header tiene cinco enlaces en el orden clásico y apunta a los `id` correctos.
- El primer viewport contiene al menos tres enlaces a proyectos destacados y la acción primaria.
- La portada muestra las tres métricas aprobadas y la nota exacta.
- Las cifras no incluyen porcentajes, tendencias ni comparaciones inventadas.
- Los tres casos destacados tienen ancla `#proyecto-{slug}` y enlaces accesibles.
- Los cinco proyectos secundarios aparecen en el registro.
- No existen tarjetas de servicio con iconos decorativos.
- El registro de experiencia conserva «Empresa confidencial» y no revela el empleador.
- El tema oscuro no produce violaciones axe.
- La 404 conserva `noindex` y no emite canonical, `og:url` ni JSON-LD.
- No hay overflow horizontal a 320, 360, 390, 768, 1024 y 1440 px.
- El contenido principal es visible sin JavaScript.
- No quedan cadenas «Lámina», «Trazado de cargas», «plano», «bloque de títulos» ni «escala 1:1».
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
- La pieza se lee como informe, no como lámina ni dashboard.
- La tipografía no se rompe en español ni en palabras largas.
- Las reglas y los campos de color ordenan la lectura; no compiten con el texto.
- El tema oscuro se siente como un campo nocturno, no como una inversión.
- No hay cards redondeadas, sombras difusas ni gradientes decorativos.
- La página sigue siendo legible sin las animaciones.

### 7.4 Criterios de aceptación final

- [x] SC-001 a SC-018 verificados.
- [x] `bun run check` sin errores.
- [x] `bun run build` correcto.
- [x] Suite Playwright/axe completa en verde (36/36).
- [x] Lighthouse móvil ≥ 95 en las cuatro categorías (100/100/100/100).
- [x] Capturas de QA visual revisadas: 1440 × 900, 1024 × 768, 768 × 1024, 390 × 844, 320 × 720, 404 y tema oscuro.
- [x] Contenido, métricas y confidencialidad auditados.
- [x] `DESIGN.md` y `README.md` actualizados.
- [x] `docs/spec-003.md` marcado como implementado y validado.
- [ ] PR con CI en verde y revisión `code-reviewer` APTO. *(No se abre PR por indicación del propietario; queda para su revisión.)*

---

## 8. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Que el informe se lea como una plantilla corporativa. | Pérdida de identidad. | Voz personal en la portada y la nota del autor; campos de color y tipografía a escala editorial; evitar gráficos y jerga financiera. |
| Que la paleta se diluya en neutros. | Pérdida del esquema aprobado. | Tokens fijos; óxido y pátina como campos, no como acentos; auditoría visual en claro/oscuro. |
| Que las cifras se interpreten como resultados de los proyectos. | Afirmación falsa. | Nota exacta junto a la banda; ubicación en «Cifras del periodo»; sin relación visual con los casos. |
| Que el contenido aprobado se reescriba por conveniencia del diseño. | Incumplimiento de producto. | `src/data/` como fuente única; revisión diff de contenido. |
| Que reaparezca el lenguaje de láminas. | Rechazo del propietario. | T-001 elimina componentes y cadenas; SC-003 y test de contenido; revisión visual. |
| Que la banda de óxido falle el contraste. | Accesibilidad. | `--on-signal` y verificación axe en ambos temas. |
| Que el movimiento distraiga o rompa la lectura. | Experiencia. | Movimiento sobrio, `prefers-reduced-motion`, contenido visible sin JS. |
| Que el CV o la confidencialidad se vean afectados. | Riesgo legal/reputacional. | No tocar CV ni workflows; auditoría de confidencialidad sobre el build. |

---

## 9. Entrega al agente `feature-coder`

La implementación se entrega con estas reglas:

1. Leer `AGENTS.md`, esta SPEC, `PRODUCT.md` y el código existente antes de editar.
2. Trabajar en `feat/spec-003-report`, una tarea a la vez, en el orden de §6.2.
3. Eliminar la implementación de «Trazado de cargas»; no intentar reutilizarla.
4. Conservar el header clásico, la paleta, los `id`, el contenido y las métricas.
5. No inventar datos, imágenes de proyectos, clientes, testimonios ni resultados.
6. Validar cada tarea con `bun run check`, `bun run build` y `bun run test:e2e`; actualizar los tests afectados dentro de la misma tarea.
7. No modificar `opencode.json`, `.github/workflows/*.yml`, el CV público ni `docs/spec-001.md`/`docs/spec-002.md`.
8. Al cierre: escribir `DESIGN.md` desde el sistema construido, actualizar `README.md`, marcar esta SPEC como implementada y entregar el resumen de validación.
9. No copiar el contrato de dirección a código, HTML, atributos, metadatos ni artefactos servidos.
10. Si una decisión de contenido no está en `src/data/`, detenerse y documentar la pregunta; no inventarla.

---

## 10. Registro de implementación

### 10.1 Entrega

| Campo | Valor |
|---|---|
| Rama | `feat/spec-003-report` (sin PR; revisión del propietario) |
| Tareas | T-001 a T-010 completadas en orden |
| Commits | Un commit convencional por tarea (`feat(T-00N): …`) |
| Archivos clave | `src/styles/global.css`, `src/components/*`, `src/data/report.ts`, `src/i18n/es.ts`, `tests/*`, `DESIGN.md`, `README.md` |
| Fuera de alcance | Sin cambios en `opencode.json`, `.github/workflows/*.yml`, `public/cv/`, `docs/spec-001.md` ni `docs/spec-002.md` |

### 10.2 Validación

| Verificación | Resultado |
|---|---|
| `bun run check` | 0 errores, 0 advertencias, 0 avisos |
| `bun run build` | 2 páginas estáticas (`/` y `/404.html`) |
| `bun run test:e2e` | 36/36 en verde |
| axe (home y 404, claro y oscuro) | 0 violaciones |
| Lighthouse móvil | 100 rendimiento / 100 accesibilidad / 100 buenas prácticas / 100 SEO |
| LCP / CLS / TBT | 1,7 s / 0 / 0 ms |
| Fuentes WOFF2 | 116 KB en total |
| `impeccable detect` | Sin hallazgos (`[]`) |
| Scroll horizontal | Ninguno de 320 a 1440 px |
| Sin JavaScript | Contenido, cifras y contacto visibles |
| Impresión | 8 páginas A4 legibles, navegación oculta y campos de color resueltos en blanco y negro |

### 10.3 Decisiones de implementación

- El ledger de otros proyectos usa numeración `03.x` para coincidir con el capítulo 03 visible; la referencia `02.x` de §4.5 se interpretó como formato de ejemplo y se resolvió a favor de la coherencia del índice.
- `ProjectEntry` muestra `details` cuando existe un detalle aprobado (`disclosure`). No se inventan detalles para casos sin nota.
- `reportMetrics` toma la nota de `es.report.metricsNote` para evitar duplicar la cadena exacta.
- La aparición de secciones se activa solo con JavaScript (`data-js`) y se desactiva con `prefers-reduced-motion`; sin JS todo el contenido permanece visible.
- La portada social y el favicon son tipográficos y vectoriales, sin imágenes de proyectos ni datos sensibles. La OG se regenera con `bun run og:generate`.

### 10.4 Pendiente

- Revisión del propietario, apertura de PR si la desea y despliegue a `master`.

