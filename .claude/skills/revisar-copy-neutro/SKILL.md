---
name: "revisar-copy-neutro"
description: "Revisa copy de huhugerman.com contra el glosario de español neutro y el checklist anti-IA definidos en Contexto_Destilado_huhugerman_2026-08-19.md (sección 5). Usar antes de dar por bueno cualquier párrafo nuevo o reescrito en el sitio."
license: MIT
metadata:
  category: content-qa
  project: huhugerman-landing-page
  version: 1.0.0
---

# Revisión de copy — español neutro + anti-IA

Antes de aplicar cualquier revisión, lee `Contexto_Destilado_huhugerman_2026-08-19.md`
(raíz del repo), sección 5 — glosario completo de regionalismos a evitar/preferir y el
checklist "que no huela a IA". Esa sección es la única fuente de las reglas; esta skill
no las repite, las ejecuta.

Si `Contexto_Destilado_huhugerman_2026-08-19.md` no existe o la sección 5 cambió de
número, léelo completo primero — no asumas la estructura de una sesión anterior.

## Proceso

1. Leer el párrafo o página objetivo completo, sin editar todavía.
2. Contrastar cada palabra contra el glosario (mexicanismos y españolismos marcados a
   evitar; términos neutros preferidos).
3. Contrastar el párrafo contra el checklist anti-IA de siete puntos.
4. Reportar hallazgos línea por línea: qué regla se rompe, dónde exactamente, y una
   propuesta de fix — nunca reescribir sin mostrar antes/después.
5. Verificar que el cambio no toca una Protected Area (`CLAUDE.md`) sin aprobación
   explícita, y que no introduce afirmaciones de resultado que rompan la Regla dura #2
   (nunca prometer fluidez garantizada, resultados cuantificables, ni usar hype).

## Cuándo usar

Antes de comprometer cualquier copy nuevo o reescrito en `src/pages/` o
`src/content/blog/` — no solo en cambios grandes, también en ediciones de una frase.
