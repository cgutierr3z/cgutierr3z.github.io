# Directrices de Desarrollo (Spec-Driven Development)

Este proyecto sigue una metodología estricta orientada por especificaciones técnicas guardadas en `docs/spec-NNN.md` (portada desde la filosofía de `opencode.json`).

---

## 1. Modo Arquitecto (`spec-architect`)
**Objetivo**: Analizar requerimientos y crear especificaciones técnicas antes de escribir código.
- Revisa los archivos existentes en `docs/spec-*.md` y usa el siguiente número secuencial (ej. `docs/spec-002.md`).
- **Nunca sobrescribas** una especificación anterior.
- Estructura obligatoria de la especificación:
  1. Resumen ejecutivo y contexto.
  2. Objetivos y criterios de éxito medibles.
  3. Alcance (incluido y excluido explícitamente).
  4. Decisiones técnicas y arquitectura.
  5. Contratos de datos y modelos TypeScript.
  6. Plan de tareas ordenado (`T-001`, `T-002`...).
- **Regla estricta**: No escribas código de producción en esta fase. Si falta información crítica, documenta las preguntas pendientes en lugar de inventar decisiones.

---

## 2. Modo Implementación (`feature-coder`)
**Objetivo**: Implementar las tareas planificadas respetando estrictamente la especificación.
- Lee primero la especificación de referencia (`docs/spec-NNN.md`) y el código existente.
- Trabaja en **una tarea a la vez** (`T-XXX`).
- Respeta la arquitectura establecida:
  - Framework: **Astro 7+** (salida estática, sin SSR).
  - Tipado: **TypeScript strict**; datos centralizados en `src/data/`.
  - Estilos: **Tailwind CSS 4**.
  - Package manager: **Bun**.
  - i18n: Cadenas de UI centralizadas en `src/i18n/`.
- Evita cambios fuera del alcance y no inventes requisitos.
- Valida siempre los cambios con `bun run check` y `bun run build`.

---

## 3. Modo Corrección Rápida (`fast-fix`)
**Objetivo**: Resolver errores concretos, fallos de compilación o cambios puntuales.
- Diagnostica la causa raíz antes de modificar código.
- Realiza el **cambio mínimo necesario**, evitando refactorizaciones innecesarias.
- Verifica que el cambio no rompa el comportamiento existente ni las pruebas.
- Si el problema requiere cambios arquitectónicos mayores, recomienda volver al Modo Arquitecto para actualizar la especificación.

---

## 4. Modo Auditoría y Revisión (`code-reviewer`)
**Objetivo**: Auditar la implementación, calidad, seguridad y cumplimiento del alcance.
- Compara la implementación contra `docs/spec-NNN.md`.
- Prioriza defectos reales y reproducibles sobre preferencias estéticas.
- Entrega los hallazgos ordenados por severidad:
  1. **Bloqueante / Crítico** (rompe funcionalidad, tipos, build o confidencialidad).
  2. **Advertencia** (inconsistencia con la spec, riesgo de accesibilidad o rendimiento).
  3. **Mejora opcional** (limpieza o sugerencia menor).
- **Regla de confidencialidad estricta**: Verifica siempre que no se divulgue el nombre de la empresa confidencial en código, commits, textos, metadatos ni archivos compilados.
