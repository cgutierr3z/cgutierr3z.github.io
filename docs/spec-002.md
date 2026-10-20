# SPEC-002 — Endurecimiento y cierre de la auditoría

| Campo | Valor |
|---|---|
| **ID** | SPEC-002 |
| **Versión** | 1.2 — Cierre |
| **Fecha** | 2026-10-20 |
| **Estado** | Implementado y desplegado; T-001 – T-013 completadas |
| **Repositorio** | https://github.com/cgutierr3z/cgutierr3z.github.io |
| **Sitio** | https://cgutierr3z.github.io/ |
| **Base** | `master` @ `f30ce3e` |
| **SPEC relacionada** | [`docs/spec-001.md`](spec-001.md) |
| **Origen** | Auditoría final `code-reviewer` del 2026-10-20: 0 bloqueantes, 0 altos, 4 medios, 7 bajos, 2 informativos |
| **Rama propuesta** | `feat/spec-002-hardening` |
| **Rama de despliegue** | `master` |
| **Fuente de verdad** | `docs/spec-002.md` |

---

## 1. Resumen ejecutivo

SPEC-001 dejó el portafolio implementado, desplegado y validado. La auditoría final no encontró defectos bloqueantes ni de severidad alta, pero sí riesgos de supply chain, permisos excesivos, ausencia de CI en pull requests, señales SEO contradictorias en la página 404, oportunidades de accesibilidad y deuda de mantenibilidad.

SPEC-002 define los arreglos necesarios para cerrar esos hallazgos sin cambiar el contenido aprobado ni la experiencia visual del sitio. El alcance es de endurecimiento técnico:

- Fijar las GitHub Actions a commits inmutables.
- Aplicar mínimo privilegio entre los jobs de build y deploy.
- Ejecutar checks y tests en pull requests antes de integrar.
- Corregir canonical, `og:url` y JSON-LD de la página 404.
- Generar el CV como PDF etiquetado.
- Anunciar correctamente los enlaces externos y dar contexto a los enlaces de proyectos.
- Eliminar la duplicación de contenido entre el sitio y el generador del CV.
- Centralizar textos de interfaz en el diccionario i18n.
- Endurecer la cobertura de tests y limpiar la documentación de cierre.

El sitio permanece publicado durante la implementación. El nuevo despliegue solo se realizará cuando el PR de SPEC-002 esté verde y validado.

---

## 2. Objetivos y criterios de éxito

### 2.1 Objetivos

1. Cerrar todos los hallazgos accionables de la auditoría.
2. Reducir el riesgo de supply chain y de permisos excesivos en GitHub Actions.
3. Detectar regresiones antes de que lleguen a `master`.
4. Corregir señales SEO y accesibilidad de bajo coste.
5. Dejar una única fuente de verdad para el contenido del CV.
6. Evitar que la documentación contradiga el estado real del sitio.
7. Mantener el sitio estático, sin backend, analytics ni nuevas funcionalidades.

### 2.2 Criterios de éxito

- Todos los `uses:` de los workflows apuntan a un SHA completo y verificado.
- El job `build` no tiene permisos de publicación; el job `deploy` conserva solo los permisos necesarios.
- Existe un workflow de `pull_request` que ejecuta `check`, `build` y Playwright/axe sin permisos de Pages.
- La página 404 no emite canonical, `og:url` ni JSON-LD de una URL inexistente.
- El CV se genera con `Tagged: yes` y conserva una página, sin datos sensibles.
- Los enlaces externos anuncian la nueva pestaña y los enlaces de proyectos incluyen el nombre del proyecto.
- El generador del CV consume `src/data` y no duplica experiencia, stack ni proyectos.
- Los textos de tema, menú y contacto salen de `src/i18n/es.ts`.
- Los tests fallan si desaparece el CV o si se reintroduce una métrica retirada.
- `bun run check`, `bun run build`, Playwright/axe y Lighthouse pasan.
- El deploy live se valida y no aparecen datos confidenciales.
- `docs/spec-001.md` y `README.md` reflejan el estado final.

---

## 3. Contexto y estado de partida

| Verificación | Estado actual |
|---|---|
| Deploy | Run `39369670221`: `build` y `deploy` en verde |
| Home | HTTP 200 |
| CV | HTTP 200, `application/pdf` |
| 404 | HTTP 404 con `noindex, nofollow` |
| Sitemap, robots y OG | HTTP 200 |
| Playwright + axe | 12/12 al inicio; 19/19 tras SPEC-002; 0 violaciones |
| Lighthouse móvil | 100 / 100 / 100 / 100 |
| Responsive | Sin scroll horizontal de 360 a 1440 px |
| Confidencialidad | Limpia en árbol, historial de `master`, `dist/`, PDF y metadatos |
| Contenido | Métricas aprobadas presentes; métrica de endpoints retirada del sitio, CV y tests |

### 3.1 Restricciones heredadas de SPEC-001

- El nombre del empleador actual/anterior es confidencial y no debe aparecer en ningún artefacto.
- El sitio se publica en español y debe quedar preparado para i18n.
- No se permite inventar proyectos, clientes, certificaciones, métricas ni resultados.
- No se añaden backend, formulario de contacto, analítica, CMS, blog ni dominio propio.
- El CV público debe seguir saneado: sin empleador, teléfono, dirección, foto ni ubicación.
- No se modifica `opencode.json`.

---

## 4. Alcance

### 4.1 Incluido

| Grupo | Hallazgos | Resultado esperado |
|---|---|---|
| Seguridad y CI | M1, M2, M4 | Acciones inmutables, permisos mínimos y CI en PR |
| SEO, accesibilidad y PDF | B1, B2, B3, B4 | 404 coherente, PDF etiquetado y enlaces accesibles |
| Mantenibilidad y pruebas | B5, B6, B7 | CV con fuente única, i18n centralizada y tests más estrictos |
| Documentación | M3, I1 | Sin contradicciones ni métricas retiradas en docs públicas |

### 4.2 Excluido

- I2: purga del blob PDF histórico no alcanzable. No contiene datos sensibles y no está publicado; no se reescribe el historial por este motivo.
- Cambios de copy, métricas, proyectos, roles o diseño visual.
- Nuevas secciones, funcionalidades, formularios, analítica o dominio propio.
- Revisión del contenido externo de LinkedIn.
- Migración de framework, rediseño o refactor estructural ajeno a los hallazgos.
- Cambios en `opencode.json`.

### 4.3 Supuestos

- El propietario aprueba este documento antes de implementar.
- La rama de trabajo se crea desde `master` y se integra por PR.
- GitHub Pages seguirá usando GitHub Actions como fuente.
- Las versiones actuales de Astro, Bun y Playwright se mantienen salvo que una opción necesaria no exista.
- El despliegue live se valida después del merge.

---

## 5. Requisitos

### 5.1 Funcionales

| ID | Requisito | Prioridad |
|---|---|---|
| FR-001 | Todos los `uses:` de `.github/workflows/*.yml` deben fijarse a un SHA completo de 40 caracteres, con el tag como comentario. | Alta |
| FR-002 | El workflow de deploy debe declarar `contents: read` a nivel global; `pages: write` e `id-token: write` solo en el job `deploy`. | Alta |
| FR-003 | Debe existir un workflow de `pull_request` que ejecute `bun install --frozen-lockfile`, `check`, `build` y Playwright/axe sin permisos de publicación. | Alta |
| FR-004 | La página 404 no debe emitir `canonical`, `og:url` ni JSON-LD `Person`; debe conservar `noindex, nofollow`, título, descripción y enlace a home. | Media |
| FR-005 | El CV debe generarse como PDF etiquetado (`Tagged: yes`), conservar una página y seguir sin datos sensibles. | Media |
| FR-006 | Todos los enlaces externos con `target="_blank"` deben anunciar “Abre en una nueva pestaña” mediante texto `sr-only` o nombre accesible equivalente. | Media |
| FR-007 | Los enlaces de proyectos deben incluir el nombre del proyecto en su nombre accesible. | Media |
| FR-008 | El generador del CV debe importar perfil, experiencia, tecnologías y proyectos desde `src/data`; no debe duplicar esos contenidos. | Media |
| FR-009 | Los textos de tema, menú móvil, navegación y contacto deben centralizarse en `src/i18n/es.ts`; los scripts inline deben leerlos desde atributos `data-*`. | Media |
| FR-010 | Los tests deben exigir la existencia del CV, verificar la 404 sin canonical y cubrir los nombres accesibles de enlaces. | Media |
| FR-011 | `docs/spec-001.md` y `README.md` deben eliminar la métrica de endpoints retirada y reflejar el estado real de `code-reviewer`. | Media |

### 5.2 No funcionales

| ID | Requisito |
|---|---|
| NFR-001 | No se modifica el contenido aprobado ni las métricas publicadas. |
| NFR-002 | No aparece el nombre del empleador confidencial en código, contenido, tests, commits, metadatos, imágenes, PDF ni sitio generado. |
| NFR-003 | El sitio mantiene WCAG 2.2 AA y axe sin violaciones críticas/serias. |
| NFR-004 | Lighthouse móvil se mantiene ≥ 95 en las cuatro categorías; objetivo: 100/100/100/100. |
| NFR-005 | No se añaden dependencias de runtime; cualquier dependencia de desarrollo debe justificarse. |
| NFR-006 | El sitio sigue siendo estático y compatible con GitHub Pages. |
| NFR-007 | Las URLs públicas existentes no cambian. |
| NFR-008 | El build y los tests deben ser reproducibles con el lockfile actual. |

---

## 6. Diseño técnico

### 6.1 Workflow de GitHub Actions

#### Acciones inmutables

Las acciones actuales deben fijarse al commit completo del tag, no al tag mutable:

| Acción | Tag actual | Acción requerida |
|---|---|---|
| `actions/checkout` | `v7.0.1` | Resolver el SHA pelado del tag y fijarlo |
| `oven-sh/setup-bun` | `v2.2.0` | Resolver el SHA pelado del tag y fijarlo |
| `actions/upload-pages-artifact` | `v5.0.0` | Resolver el SHA pelado del tag y fijarlo |
| `actions/deploy-pages` | `v5.0.1` | Resolver el SHA pelado del tag y fijarlo |

Comando de referencia:

```bash
git ls-remote https://github.com/actions/checkout \
  refs/tags/v7.0.1 'refs/tags/v7.0.1^{}'
```

Se debe usar el SHA de la línea `^{}` (commit pelado), no el SHA del objeto tag. El tag se conserva como comentario:

```yaml
uses: actions/checkout@<sha-completo> # v7.0.1
```

No se inventan SHAs: se resuelven y verifican durante la implementación. Si se adopta Dependabot o Renovate, debe configurarse para actualizar el SHA y el comentario de versión.

#### Separación de permisos

```yaml
permissions:
  contents: read

jobs:
  build:
    permissions:
      contents: read

  deploy:
    permissions:
      contents: read
      pages: write
      id-token: write
```

El job `build` conserva la instalación, `check`, `build`, Playwright/axe y la subida del artefacto, pero no puede publicar en Pages. El job `deploy` es el único con `pages: write` e `id-token: write`.

#### CI en pull requests

Nuevo archivo propuesto: `.github/workflows/ci.yml`.

```yaml
name: CI

on:
  pull_request:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
```

Pasos mínimos:

1. Checkout fijado a SHA.
2. Setup de Bun 1.4.3 fijado a SHA.
3. `bun install --frozen-lockfile`.
4. `bun run check`.
5. `bun run build`.
6. `bunx playwright install --with-deps chromium`.
7. `bun run test:e2e --reporter=line`.

El workflow de PR no debe tener `pages: write`, `id-token: write`, environment `github-pages` ni pasos de deploy.

#### Verificación estática del workflow

Añadir un test de solo lectura, por ejemplo `tests/workflow.spec.ts`, que:

- Lea `.github/workflows/deploy.yml` y `.github/workflows/ci.yml`.
- Falle si un `uses:` no termina en un SHA de 40 caracteres hexadecimales.
- Falle si el job `build` declara `pages: write` o `id-token: write`.
- Verifique que `deploy` conserva `pages: write` e `id-token: write`.
- Verifique que el workflow de PR no contiene pasos de deploy.

### 6.2 Página 404 y SEO

`src/components/SEO.astro` debe separar la intención de indexación de la canonical:

- Si `noindex === false`: emitir `canonical`, `og:url` y JSON-LD.
- Si `noindex === true`: omitir `canonical`, `og:url` y JSON-LD; mantener `robots: noindex, nofollow`, título, descripción, Open Graph de título/descripción e imagen si aplica.
- `404.astro` ya pasa `noindex`; no se requiere cambiar su contrato.

Casos a cubrir:

- `/404.html` no contiene `<link rel="canonical">`.
- `/404.html` no contiene `og:url`.
- `/404.html` no contiene JSON-LD `Person`.
- `/` conserva canonical, `og:url` y JSON-LD.

### 6.3 CV etiquetado

En `page.pdf(...)` del generador:

```ts
await page.pdf({
  path: output,
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
});
```

Validaciones:

```bash
pdfinfo public/cv/carlos-gutierrez-cv.pdf | grep -E 'Tagged|Pages|Page size'
pdftotext -layout public/cv/carlos-gutierrez-cv.pdf -
pdftoppm -png -r 110 public/cv/carlos-gutierrez-cv.pdf /tmp/cv-preview
```

Criterios:

- `Tagged: yes`.
- `Pages: 1`.
- `Page size: 612 x 792 pts (letter)`.
- Sin imágenes (`pdfimages -list` vacío).
- Sin empleador, teléfono, dirección, foto ni ubicación.
- Lectura visual y orden de texto correctos.

Si la versión actual de Playwright no genera un etiquetado suficiente, no se debe afirmar que el PDF es accesible: se documenta la limitación y se evalúa un CV HTML accesible como alternativa. Esa decisión queda fuera del alcance inicial si el `Tagged: yes` funciona.

### 6.4 Enlaces externos y enlaces de proyectos

- En `Contact.astro` y `Footer.astro`, añadir el texto oculto `es.a11y.externalLink` a cada enlace con `target="_blank"`.
- En `ProjectCard.astro`, construir un nombre accesible contextual:

```ts
const accessibleLabel = `${link.label} de ${project.title}. ${es.a11y.externalLink}`;
```

- Mantener el texto visible (`Demo`, `Repositorio`) y el icono.
- Evitar duplicar el anuncio de nueva pestaña en el nombre accesible.
- Aplicar el mismo criterio a los enlaces de demo y repositorio.

### 6.5 Fuente única de datos del CV

Estado actual:

- `scripts/generate-cv.mjs` contiene HTML con perfil, experiencia, habilidades, proyectos y educación hardcodeados.
- El sitio obtiene esos datos de `src/data/profile.ts`, `experience.ts`, `technologies.ts` y `projects.ts`.

Propuesta:

1. Crear `scripts/generate-cv.ts` ejecutable con Bun.
2. Importar:
   - `profile` desde `src/data/profile.ts`.
   - `experience` desde `src/data/experience.ts`.
   - `technologies` desde `src/data/technologies.ts`.
   - `featuredProjects` desde `src/data/projects.ts`.
3. Crear `src/data/cv.ts` solo para datos exclusivos del CV que no existan en el sitio, por ejemplo educación y el resumen específico del CV.
4. Renderizar fechas desde `experience.start`/`experience.end` con un helper de formato español.
5. Renderizar experiencia, stack y proyectos desde los datos importados.
6. Cambiar `package.json`:

```json
"cv:generate": "bun scripts/generate-cv.ts"
```

7. Retirar `scripts/generate-cv.mjs` una vez validada la equivalencia.
8. Añadir una comprobación de que el PDF generado contiene las métricas aprobadas y no contiene la métrica de endpoints retirada.

No se debe duplicar el contenido en dos lugares. Si un dato solo existe en el CV, debe vivir en `src/data/cv.ts` y no repetirse en el generador.

### 6.6 i18n y textos inline

Centralizar en `src/i18n/es.ts`:

- Navegación principal y móvil.
- “Inicio”.
- Etiquetas de abrir/cerrar menú.
- Etiquetas de cambiar a tema claro/oscuro.
- Copy de la sección Contacto.
- Textos de enlaces externos.

Los scripts `is:inline` no pueden importar el diccionario directamente. Deben recibir los textos mediante atributos `data-*`:

```astro
<button
  id="menu-toggle"
  data-open-label={es.a11y.openMenu}
  data-close-label={es.a11y.closeMenu}
>
```

Y el JavaScript debe leer `button.dataset.openLabel` y `button.dataset.closeLabel`.

Para el toggle de tema:

```astro
<button
  id="theme-toggle"
  data-light-label={es.theme.switchToLight}
  data-dark-label={es.theme.switchToDark}
>
```

Mantener valores de respaldo seguros si un atributo falta, para no romper el menú ni el tema.

### 6.7 Pruebas

Ampliar `tests/portfolio.spec.ts`:

- El enlace de CV debe existir siempre: `toHaveCount(1)`.
- El PDF debe responder 200 y `application/pdf`.
- Los enlaces de proyectos deben incluir el nombre del proyecto en su nombre accesible.
- Contacto y Footer deben incluir el anuncio de nueva pestaña.
- La 404 no debe tener canonical, `og:url` ni JSON-LD.
- La home sí debe conservar canonical, `og:url` y JSON-LD.
- Añadir `tests/workflow.spec.ts` para las invariantes de los workflows.

Ajustar `tests/a11y.spec.ts`:

- Mantener el fallo ante violaciones `critical` y `serious`.
- Revisar las violaciones `moderate`; si existen, corregirlas o documentar una excepción explícita.
- No ocultar violaciones para hacer pasar el test.

---

## 7. Plan de tareas

| ID | Tarea | Hallazgos | Dependencias | Criterio de aceptación |
|---|---|---|---|---|
| T-001 | Aprobar SPEC-002 y crear rama `feat/spec-002-hardening`. | — | SPEC-001 | Documento aprobado; rama desde `master`. |
| T-002 | Fijar las cuatro acciones a SHA y separar permisos de build/deploy. | M1, M2 | T-001 | `uses:` con SHA completo; `build` sin permisos de publicación; deploy verde. |
| T-003 | Añadir workflow de CI para pull requests. | M4 | T-002 | PR ejecuta check/build/Playwright; no puede desplegar. |
| T-004 | Corregir canonical, `og:url` y JSON-LD de la 404. | B1 | T-001 | 404 sin canonical/og:url/JSON-LD; home intacta. |
| T-005 | Generar el CV con `tagged: true` y verificar metadatos. | B2 | T-001 | `pdfinfo` reporta `Tagged: yes`; una página; sin datos sensibles. |
| T-006 | Añadir anuncio de nueva pestaña y nombres accesibles contextuales. | B3, B4 | T-001 | Enlaces externos y de proyectos con nombre accesible completo. |
| T-007 | Migrar el generador del CV a `src/data`. | B5 | T-005 | `bun run cv:generate` usa datos compartidos; sin duplicación. |
| T-008 | Centralizar textos de tema, menú y contacto en i18n. | B6 | T-001 | Componentes sin textos hardcodeados; tema/menú funcionan. |
| T-009 | Endurecer tests de CV, 404, enlaces y workflows. | B7 | T-003, T-004, T-006 | Tests fallan ante regresiones; 12/12 o más en verde. |
| T-010 | Limpiar documentación y checklist. | M3, I1 | T-009 | Sin métrica retirada en docs; `code-reviewer` documentado. |
| T-011 | Ejecutar verificación completa. | — | T-002 – T-010 | Check, build, Playwright, axe, Lighthouse y PDF OK. |
| T-012 | Abrir PR, revisar, mergear y desplegar. | — | T-011 | CI y deploy en verde; sitio live validado. |
| T-013 | Cerrar SPEC-002 y actualizar SPEC-001. | — | T-012 | Estado final documentado; sin pendientes. |

**Estado de ejecución:** T-001 – T-013 completadas. Implementación integrada en `master` y validada en el sitio live.

### 7.1 Registro de ejecución

| ID | Estado | Evidencia |
|---|---|---|
| T-001 | Completada | Aprobación del propietario; rama `feat/spec-002-hardening`; SPEC-002 registrada en `9ad3d04`. |
| T-002 | Completada | Cuatro acciones fijadas a SHA completo; `build` solo con `contents: read`; `deploy` con `pages: write` e `id-token: write`; invariantes en `tests/workflow.spec.ts`. El deploy real se valida en T-012. |
| T-003 | Completada | `.github/workflows/ci.yml` se ejecuta en `pull_request`, usa las mismas acciones fijadas y no tiene permisos ni pasos de publicación. |
| T-004 | Completada | `dist/404.html` sin canonical, `og:url` ni JSON-LD; la home conserva las tres señales. Cubierto por `tests/portfolio.spec.ts`. |
| T-005 | Completada | `pdfinfo`: `Tagged: yes`, `Pages: 1`, `Page size: 612 x 792 pts (letter)`; `pdfimages -list` sin imágenes; texto sin datos sensibles. |
| T-006 | Completada | Contacto y footer anuncian “Abre en una nueva pestaña”; los cuatro enlaces de proyectos incluyen el nombre del proyecto; tests en verde. |
| T-007 | Completada | Nuevo `scripts/generate-cv.ts`; `src/data/cv.ts` conserva el copy aprobado del CV (bullets, habilidades y resúmenes de proyectos); experiencia, fechas y títulos se importan desde `src/data`; `scripts/generate-cv.mjs` retirado; script `cv:generate` con Bun. |
| T-008 | Completada | Textos de menú, tema y contacto centralizados en `src/i18n/es.ts`; `Header` y `ThemeToggle` usan atributos `data-*` para sus etiquetas dinámicas. |
| T-009 | Completada | `bunx playwright test --reporter=line`: 19/19. Incluye verificación del PDF (texto, etiquetado, una página), CV obligatorio, SEO de 404, enlaces accesibles, proyectos y workflows. |
| T-010 | Completada | SPEC-001 actualizada; búsqueda de la métrica retirada limpia; ejecución de `code-reviewer` y hallazgos documentados. |
| T-011 | Completada | `astro check`: 0 errores; build correcto; Lighthouse local: 100/100/100/100; `pdfinfo`: `Tagged: yes`, 1 página, Letter; sin imágenes ni datos sensibles. |
| T-012 | Completada | PR #2: CI run `39375636236` en verde; squash merge `4fd2af6`; deploy run `39375852568` con `build` y `deploy` en verde. |
| T-013 | Completada | Live: home 200, 404 404 con `noindex`, CV 200 `application/pdf`; PDF `Tagged: yes`, 1 página, Letter; sin métrica retirada ni datos sensibles; sitemap, robots y OG 200. |

La revisión de implementación detectó dos brechas medias: faltaba una comprobación automática del contenido del PDF y la migración del generador había cambiado el copy aprobado del CV. Ambas se cerraron antes del merge: `tests/cv.spec.ts` verifica el texto y los metadatos del PDF, y `src/data/cv.ts` conserva el copy aprobado. También se corrigieron el fallback de etiquetas de proyectos, la validación de permisos globales y la separación del anuncio de nueva pestaña en el Hero.

---

## 8. Casos borde y manejo de errores

| Caso | Comportamiento esperado |
|---|---|
| Un tag de acción se mueve o se elimina | El SHA fijado sigue apuntando al commit auditado; Dependabot/Renovate o una revisión manual actualizan el pin. |
| El job `build` necesita un permiso adicional | Se documenta y se añade solo al job que lo necesite, nunca a nivel global. |
| El workflow de PR se ejecuta desde un fork | Token de solo lectura; no hay secrets ni deploy. |
| El 404 se sirve como `/404.html` o como ruta inexistente | En ambos casos no hay canonical/og:url/JSON-LD; `noindex` se mantiene. |
| El PDF etiquetado cambia de paginación | Se ajusta el CSS o el contenido del CV; no se acepta un PDF de dos páginas si rompe el diseño aprobado. |
| Playwright no soporta `tagged` | No se simula el etiquetado; se documenta la limitación y se evalúa un CV HTML accesible. |
| El generador del CV no encuentra un dato opcional | Se omite el bloque o se usa un fallback vacío; no se inventa contenido. |
| Un enlace de proyecto no tiene label | Se usa `Repositorio de ${project.title}` o `Demo de ${project.title}` según el tipo. |
| Un texto i18n falta en el DOM | El script usa un fallback seguro y no rompe el tema ni el menú. |
| axe reporta una violación moderada | Se corrige o se documenta con justificación; no se elimina el test. |
| La purga histórica se considera necesaria | Se trata como tarea separada con reescritura de historia y coordinación; no forma parte de SPEC-002. |

---

## 9. Criterios de aceptación

### 9.1 Automáticos

- [x] `bun install --frozen-lockfile` sin cambios inesperados.
- [x] `bun run check` con 0 errores.
- [x] `bun run build` genera `dist/` correctamente.
- [x] Playwright + axe pasan (19/19).
- [x] El test de CV exige el enlace, el PDF y su contenido aprobado.
- [x] El test de la 404 verifica ausencia de canonical/og:url/JSON-LD.
- [x] El test de workflows verifica SHA y permisos.
- [x] Lighthouse móvil ≥ 95 en Rendimiento, Accesibilidad, Buenas Prácticas y SEO (100/100/100/100).
- [x] `pdfinfo` reporta `Tagged: yes`, una página y tamaño Letter.
- [x] No hay scroll horizontal de 360 a 1440 px (360, 768, 1024 y 1440).

### 9.2 Manuales

- [x] El CV se ve correctamente en una página.
- [x] El PDF no contiene empleador, teléfono, dirección, foto ni ubicación.
- [x] Los enlaces de Hero, Contacto y Footer anuncian la nueva pestaña.
- [x] Los enlaces de proyectos incluyen el nombre del proyecto.
- [x] El tema claro/oscuro persiste.
- [x] El menú móvil abre, cierra con Escape y devuelve el foco.
- [x] La 404 live responde 404 y conserva `noindex`.
- [x] El workflow de deploy está en verde (run `39375852568`).
- [x] No hay datos confidenciales en árbol, historial, `dist/` ni PDF.
- [x] No se modificaron las métricas aprobadas.

### 9.3 Documentación

- [x] `docs/spec-002.md` actualizado con el registro de tareas.
- [x] `docs/spec-001.md` sin la métrica de endpoints retirada.
- [x] `docs/spec-001.md` refleja que `code-reviewer` se ejecutó y no reportó bloqueantes.
- [x] `README.md` documenta el CI de PR y el estado del deploy.
- [x] Checklist de contenido y checklist global sin contradicciones.

---

## 10. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Un SHA fijado impide recibir parches de seguridad | Deuda de mantenimiento | Revisión periódica o Dependabot/Renovate con PR y tests. |
| Separar permisos rompe el deploy | Publicación fallida | Validar el workflow en una rama con `workflow_dispatch` antes del merge; revisar logs. |
| Añadir CI de PR aumenta el tiempo de feedback | PR más lentos | Cachear Bun/Playwright si es necesario; timeout de 15 minutos. |
| Quitar canonical de la 404 afecta SEO | Señal incompleta | La 404 ya es `noindex`; omitir canonical es correcto para páginas no indexables. |
| `tagged: true` cambia el layout del PDF | CV menos legible | Verificar una página y lectura visual; ajustar CSS. |
| Refactor del CV introduce diferencias de contenido | CV desalineado | Tests de contenido y comparación contra datos aprobados. |
| i18n en scripts inline rompe tema/menú | Regresión funcional | Atributos `data-*` con fallback y tests E2E. |
| El test de workflows es demasiado rígido | Bloqueos por cambios legítimos | Validar solo invariantes de seguridad, no formato de YAML. |
| El blob histórico se considera un riesgo | Reescritura innecesaria | Documentar que no es alcanzable ni público; no incluirlo en el alcance. |

---

## 11. Fuera de alcance

- Purga del blob PDF histórico no alcanzable.
- Cambios de contenido, copy, métricas, proyectos o roles.
- Nuevos servicios, secciones, animaciones o rediseño.
- Formulario de contacto, backend, CMS, blog, analítica o cookies.
- Dominio propio o cambio de proveedor de hosting.
- Revisión del perfil de LinkedIn.
- Modificación de `opencode.json`.
- Reescritura del historial de Git.

---

## 12. Dependencias y orden de implementación

1. **Fase A — Seguridad y CI:** T-002, T-003.
2. **Fase B — SEO, accesibilidad y PDF:** T-004, T-005, T-006.
3. **Fase C — Mantenibilidad y pruebas:** T-007, T-008, T-009.
4. **Fase D — Documentación y cierre:** T-010, T-011, T-012, T-013.

Las fases B y C pueden ejecutarse en paralelo si no comparten archivos. La fase D requiere que las anteriores estén verdes.

---

## 13. Definición de terminado

SPEC-002 se considera terminada cuando:

1. Todos los hallazgos accionables están cerrados o documentados como fuera de alcance.
2. El PR de SPEC-002 tiene CI en verde.
3. El merge a `master` despliega correctamente.
4. El sitio live y el CV se validan sin datos confidenciales.
5. `docs/spec-001.md`, `docs/spec-002.md` y `README.md` reflejan el estado final.
6. No quedan tareas `Pendiente` en este documento.

---

## 14. Anexo A — Trazabilidad de hallazgos

| Hallazgo | Severidad | Tarea | Verificación |
|---|---|---|---|
| M1. Acciones fijadas a tags | Media | T-002 | Test de workflows + revisión de `uses:` |
| M2. Permisos de publicación en build | Media | T-002 | Test de permisos + revisión YAML |
| M3. Métrica retirada en documentación | Media | T-010 | Búsqueda en docs/README |
| M4. Sin CI en pull requests | Media | T-003 | Workflow de PR en verde |
| B1. Canonical de la 404 | Baja | T-004 | Test de 404 y curl live |
| B2. PDF no etiquetado | Baja | T-005 | `pdfinfo` con `Tagged: yes` |
| B3. Enlaces externos sin aviso | Baja | T-006 | Test de nombres accesibles |
| B4. Enlaces de repositorio sin contexto | Baja | T-006 | Test de nombres accesibles |
| B5. Contenido del CV duplicado | Baja | T-007 | Revisión + `bun run cv:generate` |
| B6. i18n parcial | Baja | T-008 | Revisión de componentes + E2E |
| B7. Cobertura de tests laxa | Baja | T-009 | Tests negativos/positivos |
| I1. Checklist documental inconsistente | Informativo | T-010 | Revisión de `docs/spec-001.md` |
| I2. Blob PDF histórico | Informativo | — | Documentado como fuera de alcance |

## 15. Anexo B — Comandos de verificación

```bash
bun install --frozen-lockfile
bun run check
bun run build
bun run test:e2e
bun run cv:generate

pdfinfo public/cv/carlos-gutierrez-cv.pdf | grep -E 'Tagged|Pages|Page size'
pdftotext -layout public/cv/carlos-gutierrez-cv.pdf -

# Workflows
grep -n 'uses:' .github/workflows/*.yml
grep -n 'permissions:' -A 6 .github/workflows/*.yml

# Sitio live
curl -sS -o /dev/null -w '%{http_code} %{content_type}\n' \
  https://cgutierr3z.github.io/cv/carlos-gutierrez-cv.pdf
curl -sS -o /dev/null -w '%{http_code}\n' \
  https://cgutierr3z.github.io/ruta-inexistente/
```

## 16. Anexo C — Archivos previstos

| Archivo | Cambio |
|---|---|
| `.github/workflows/deploy.yml` | SHA, permisos y versiones comentadas |
| `.github/workflows/ci.yml` | Nuevo workflow de pull request |
| `src/components/SEO.astro` | Canonical/og:url/JSON-LD condicionados a `noindex` |
| `src/pages/404.astro` | Sin cambios de contrato; validar salida |
| `scripts/generate-cv.ts` | Nuevo generador basado en `src/data` |
| `scripts/generate-cv.mjs` | Retirado tras la migración |
| `src/data/cv.ts` | Datos exclusivos del CV |
| `package.json` | `cv:generate` con Bun y script de verificación si aplica |
| `src/components/Contact.astro` | i18n y aviso de nueva pestaña |
| `src/components/Footer.astro` | Aviso de nueva pestaña |
| `src/components/ProjectCard.astro` | Nombres accesibles contextuales |
| `src/components/Header.astro` | Textos i18n y atributos `data-*` |
| `src/components/ThemeToggle.astro` | Textos i18n y atributos `data-*` |
| `src/i18n/es.ts` | Nuevas claves de tema, menú, navegación y contacto |
| `tests/portfolio.spec.ts` | CV obligatorio, 404 SEO y enlaces |
| `tests/cv.spec.ts` | Contenido, etiquetado y paginación del PDF |
| `tests/a11y.spec.ts` | Umbral y revisión de moderadas |
| `tests/workflow.spec.ts` | Invariantes de SHA y permisos |
| `.github/workflows/ci.yml` / `deploy.yml` | Instalación de `poppler-utils` para verificar el PDF |
| `docs/spec-001.md` | Limpieza de métrica retirada y checklist |
| `README.md` | CI de PR y estado del deploy |
| `docs/spec-002.md` | Registro de ejecución y cierre |

---

## 17. Aprobación

| Rol | Nombre | Decisión | Fecha |
|---|---|---|---|
| Propietario | Carlos Gutierrez | Aprobado | 2026-10-20 |
| Arquitecto | — | Revisado | 2026-10-20 |

Una vez aprobado, la implementación se realiza en `feat/spec-002-hardening` y se integra mediante pull request. No se modifica `master` directamente ni se publica hasta que el CI y la validación live estén en verde.
