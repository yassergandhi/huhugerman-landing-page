# CLAUDE.md — huhugerman-landing-page (v3, 19-ago-2026)

**Reemplaza a v2.** Se quitó todo lo que ya se ejecutó (aplicar historial curado, instalación de analítica, migración de CTA) — vive en el Decision Log, no como instrucción pendiente. Este archivo gobierna sesiones de **Claude Code**. `AGENTS.md` (si se crea desde Antigravity) es la capa portable/cruzada — ver "División de responsabilidad" al final para que no se dupliquen ni contradigan.

## Project Scope
Único dominio autorizado: `huhugerman.com`. No auditar, rediseñar ni proponer cambios en yassergandhi.dev, Superprof, Fernweh Together, Cero Camadas u otros proyectos del ecosistema.

## Regla dura #1 — UX/UI congelado salvo justificación de copy
No se toca interfaz, layout, componentes ni sistema visual a menos que un cambio de copywriting lo exija. Secuencia obligatoria: (1) ¿qué contenido necesita espacio/orden distinto? (2) ¿por qué la estructura actual no lo sostiene? (3) ¿cuál es el cambio mínimo indispensable? Preferencia estética, tendencia o benchmark no son justificación válida por sí solas.

## Regla dura #2 — lecciones de Superprof
Ventana de evidencia mínima antes de declarar algo (éxito o fracaso): 14 días. Una variable a la vez. Ninguna decisión vigente se contradice en silencio — se registra la discrepancia (Decision Log). Afirmación sobre negación en todo copy nuevo, salvo "Qué no es"/"Qué no incluye" (delimitación de expectativas, no defensa). Precio y valor se anclan en evidencia acumulada, no en costo por hora (Nagle, Hogan & Zale, 2016; Mohammed, 2017 — detalle en `Lab-Ecosistema-Digital_YG.md`).

## Source of Truth
1. Código fuente real (`src/`).
2. Este documento.
3. `Contexto_Destilado_huhugerman_2026-08-19.md` — estado actual condensado, léelo primero en cualquier sesión nueva.
4. `Auditoria_Fase0-1_huhugerman_2026-08-17.md` y `Playbook_huhuGERMAN_2026-08-17.md`.
5. `Lab-Ecosistema-Digital_YG.md` / `SSOT-v1_YG_2026-08-16.md` — contexto de ecosistema, nunca requisito directo.

## Architecture
Astro 5.17.1. 9 páginas en `src/pages/`, 5 posts en `src/content/blog/`, sin `src/components/` compartidos. `@vercel/analytics` y `@vercel/speed-insights` ya instalados (`Layout.astro`). CTA de conversión: `https://tally.so/r/VLVV2N` (7 ubicaciones). El `mailto:` de `investigacion.astro` se conserva — es contacto académico, no CTA comercial.

## Protected Areas
Escena de Berlín (`index.astro`), díptico Emilio, las 6 cifras con fuente en `riesgo.astro`, las 10 situaciones en `escenas.astro`, paleta/tipografía en `Layout.astro`, timeline 2011–2026.

## Safe Change Policy
**Seguro sin aprobación previa:** completar `README.md`; ajustes de copy que no toquen Protected Areas ni impliquen cambio visual.
**Requiere aprobación humana:** cualquier cambio de UI/UX (Regla dura #1); cualquier cambio a "Qué no es"/"Qué no incluye"; reconfiguración del formulario de Tally.

## Content Protocol — español neutro + anti-IA
Ver `Contexto_Destilado_huhugerman_2026-08-19.md` para el glosario completo de regionalismos a evitar (mexicanismos y españolismos) y el checklist "que no huela a IA" (guiones largos como muletilla, tríadas de adjetivos, "no es solo X, es Y" repetido, muletillas de relleno). No se duplica aquí — un solo lugar de verdad para esto.

## Testing Protocol
```bash
npm install && npm run build
! grep -rn "mailto:yassergandhi.dev" src/pages/index.astro src/pages/servicios.astro src/content/blog/
for p in index metodo servicios riesgo investigacion escenas el-viaje-de-emilio; do
  test -f "src/pages/${p}.astro" || echo "FALTA: $p"
done
grep -q "el-viaje-de-emilio" src/pages/investigacion.astro || echo "SIGUE HUÉRFANA"
```

## Rollback Protocol
`git revert <commit>` puntual, nunca `git reset` destructivo. Historial completo pre-curación (29 commits originales) vive en el tag `backup/full-history-2026-08-17` en `origin` — no se borra nunca.

## Decision Log
| Fecha | Decisión | Nota |
|---|---|---|
| 17-ago-2026 | Playbook decía "2 CTA mailto"; código real tenía 8 | Corregido |
| 19-ago-2026 | Historial de git curado: 29 → 16 commits, aplicado y pusheado | Backup en tag `backup/full-history-2026-08-17` |
| 19-ago-2026 | Commit `d279174`: Analytics instalado, 7 CTA migrados a Tally, enlace huérfano corregido, `CLAUDE.md` agregado al repo | Ejecutado por sesión de Claude Code en máquina de Yasser |
| 19-ago-2026 | Tally confirmado como plan vigente; formulario nativo (Resend, 18-may) queda histórico | No revivir sin instrucción nueva |
| 19-ago-2026 | Pendiente: párrafo de `index.astro` (~línea 650) asume flujo de correo, ahora apunta a Tally — desalineado | Señalado por la sesión anterior, corregido el 19-ago-2026 (ver fila siguiente) |
| — | Contenido real de campos de Tally sigue sin confirmar por Yasser | Stop Condition activa |
| 19-ago-2026 | Párrafo de contacto de `index.astro` reescrito: "envíame"/"primer mensaje" (flujo de correo) → "cuéntame"/"formulario" (flujo Tally real) | Auditoría Antigravity, aprobado por Yasser con ajuste de fraseo |
| 19-ago-2026 | `skills/` (no commiteada) auditada: 3 skills (`schema-markup`, `seo-audit`, `site-architecture`) migradas a `.claude/skills/` con referencias muertas limpiadas; 8 descartadas por razón específica (`marketing/landing` viola Regla dura #1; `copywriting` empuja a inventar prueba social, viola Regla dura #2; `marketing-context` duplica a `Contexto_Destilado...md`; `pricing-strategy`/`aeo`/`page-cro`/`copy-editing` no aplican al dominio o quedan superadas); carpeta `skills/` original borrada tras verificar la migración | Auditoría Antigravity, 19-ago-2026 |
| — | `form-cro` no migrada — **diferida**, no descartada: depende de la Stop Condition de contenido real de Tally. Candidata legítima a revisarse cuando esa condición se resuelva | Para no perder el porqué si se re-propone más adelante |
| 19-ago-2026 | `AGENTS.md` creado en raíz — referencia a `CLAUDE.md` y `Contexto_Destilado...md`, no duplica reglas; skill nueva `revisar-copy-neutro` creada en `.claude/skills/`, referencia el glosario/checklist de la sección 5 del destilado en vez de repetirlo | Auditoría Antigravity, 19-ago-2026 |
| 19-ago-2026 | Diferencial de simulaciones con IA (sección 4 del destilado) integrado con una frase en `servicios.astro` (tarjeta "Alemán de uso real") y `metodo.astro` (tarjeta "Responder cuando algo no sale como esperabas") — sin nombrar el método interno, sin tocar UI | Candidato equivalente en `index.astro` diferido por baja prioridad — no implementado |

## Evidence Rules
Nunca convertir hipótesis en hecho. Sin evidencia directa: `EVIDENCIA INSUFICIENTE`.

## Stop Conditions
1. Contenido real de Tally sin confirmar.
2. Cambio sin evidencia ni hipótesis explícita.
3. Cambio que toca Protected Areas.
4. `git status` con cambios sin commit al iniciar sesión.
5. Cambio visual/de UI sin que la Regla dura #1 esté satisfecha por escrito.

---

## División de responsabilidad — CLAUDE.md vs. AGENTS.md (para que no colisionen)

- **CLAUDE.md** (este archivo): gobierna sesiones de Claude Code. Fuente de verdad para reglas duras, Protected Areas, Decision Log y Stop Conditions.
- **AGENTS.md** (si Antigravity lo crea): capa portable que Antigravity lee — debe **referenciar** este archivo y `Contexto_Destilado_huhugerman_2026-08-19.md`, no reescribir las reglas con otras palabras. Si algún día divergen, gana este archivo (Source of Truth #2) y se registra la discrepancia aquí, no se resuelve en silencio.
- **Skills** (`.claude/skills/`): capacidades puntuales invocables, no reglas de gobierno — no deben repetir contenido de este archivo, solo ejecutar tareas específicas (ej. "revisar copy contra el checklist anti-IA", no "estas son las reglas de la marca").
