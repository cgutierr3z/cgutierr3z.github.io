# Portafolio profesional — Carlos Gutierrez

Sitio personal de **Carlos Gutierrez**, desarrollador Full Stack. Presenta servicios, experiencia, tecnologías y proyectos reales para oportunidades laborales y clientes.

- **Sitio:** https://cgutierr3z.github.io/
- **Especificación:** [`docs/spec-001.md`](docs/spec-001.md)
- **Estado:** MVP implementado; deploy pendiente del content gate

## Stack

- [Astro](https://astro.build/) con salida estática
- TypeScript en modo strict
- Tailwind CSS 4
- Bun como gestor de paquetes
- GitHub Actions + GitHub Pages

## Requisitos

- Bun 1.4 o superior
- Node.js 22.22 o superior (requisito de Astro)

## Desarrollo

```bash
bun install
bun run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

## Scripts

| Comando | Descripción |
|---|---|
| `bun run dev` | Servidor de desarrollo |
| `bun run build` | Build estático en `dist/` |
| `bun run preview` | Previsualización del build |
| `bun run check` | Validación de Astro y TypeScript |
| `bun run test:e2e` | Playwright (E2E + axe) |
| `bun run test:e2e:headed` | Playwright con navegador visible |
| `bun run test:a11y` | Auditoría axe en home y 404 |
| `bun run test:lighthouse` | Lighthouse local contra `http://127.0.0.1:4321` |

### Tests

```bash
bunx playwright install chromium
bun run build
bun run test:e2e
```

Playwright inicia `astro preview` automáticamente en el puerto `4321`. Para Lighthouse, inicia el preview en `4321` y define `CHROME_PATH` si Lighthouse no encuentra Chrome/Chromium:

```bash
bun run preview --host 127.0.0.1 --port 4321
CHROME_PATH=/ruta/a/chrome bun run test:lighthouse
```

## Contenido

El contenido se centraliza en `src/data/` para poder actualizarlo sin modificar los componentes:

- `profile.ts`: nombre, rol, resumen, contacto y enlaces.
- `services.ts`: servicios profesionales.
- `projects.ts`: proyectos y enlaces.
- `experience.ts`: experiencia laboral.
- `technologies.ts`: stack agrupado.

Las cadenas principales de interfaz se encuentran en `src/i18n/es.ts`; parte del copy de secciones vive en los componentes. El MVP está en español y la estructura permite extraer el resto al añadir inglés.

## Despliegue

El despliegue se realiza con GitHub Actions al hacer merge a `master`. El workflow ejecuta `bun run check`, `bun run build`, Playwright/axe y solo publica si todo pasa.

Configuración requerida en GitHub:

1. Ir a **Settings → Pages**.
2. Seleccionar **Source: GitHub Actions**.
3. Hacer merge a `master` o ejecutar el workflow manualmente.

## Confidencialidad

El nombre de la empresa del empleador actual/anterior es confidencial. No debe incluirse en el código, el contenido, los tests, los commits, los metadatos, las imágenes ni el sitio generado. En la experiencia se muestra como **“Empresa confidencial”**.

Antes de publicar un CV, revisar que no incluya el nombre de la empresa, teléfono ni dirección. El CV local en `assets/` está ignorado por Git hasta completar esa revisión.

## Configuración local

`opencode.json` es configuración local de OpenCode y está ignorado por Git. No se versiona.

## Licencia

© 2026 Carlos Gutierrez. Todos los derechos reservados.
