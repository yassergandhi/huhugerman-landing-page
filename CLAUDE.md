# CLAUDE.md — huhugerman-landing-page (v2, 19-ago-2026)

**Reemplaza a la v1 (17-ago-2026).** Historial de git curado: 29 commits → 16, respaldo completo en el tag `backup/full-history-2026-08-17` — nunca se borra ese tag. Ver "Aplicar el historial curado" al final de este documento.

## Project Scope
Único dominio autorizado: `huhugerman.com`. No auditar, rediseñar ni proponer cambios en yassergandhi.dev, Superprof, Fernweh Together, Cero Camadas u otros proyectos del ecosistema. Su documentación se usa solo como contexto — nunca como requisito para este repo.

## Regla dura #1 — UX/UI congelado salvo justificación de copy
**No se toca la interfaz, el layout, los componentes ni el sistema visual a menos que un cambio de copywriting lo exija.** La secuencia obligatoria antes de cualquier cambio visual:

1. ¿Qué contenido nuevo o reescrito necesita espacio, orden o jerarquía distinta?
2. ¿Por qué la estructura actual no lo sostiene?
3. ¿Cuál es el cambio estructural mínimo que lo resuelve — no el que se ve mejor, el que es indispensable?
Si la respuesta a (1) es "ninguno", no hay cambio de UI que discutir, sin importar si parece "más moderno" o "más limpio". Preferencia estética personal, tendencia de diseño o benchmark de otro sitio **no son justificación válida** por sí solas.

## Regla dura #2 — lecciones de Superprof aplicadas aquí
Este proyecto comparte ecosistema con el experimento de Superprof (`Lab-Ecosistema-Digital_YG.md`), y hereda sus lecciones costosas:
- **Ventana de evidencia mínima antes de declarar algo (éxito o fracaso): 14 días.** 36 horas de silencio, o 3 días de un solo lead, no son señal — son ruido. No se reacciona a corto plazo (fue el error que casi se comete con el precio de $900 en Superprof).
- **Una variable a la vez.** Si se cambia copy y CTA y precio en el mismo commit, no se sabe qué causó qué.
- **Ninguna decisión vigente se contradice en silencio.** Si un documento nuevo cambia lo que decía uno anterior, se registra la discrepancia explícitamente (pasó una vez entre `Validación de productos` y una actualización posterior en Superprof — no se repite aquí). Ver Decision Log.
- **Afirmación sobre negación** en todo copy nuevo — salvo "Qué no es" / "Qué no incluye", que se mantienen como delimitación de expectativas, no como defensa.
- **El precio se ancla en valor y evidencia acumulada, no en costo por hora.** Mismo marco que Superprof (Nagle, Hogan & Zale, 2016; Mohammed, 2017) — no repetir el razonamiento completo aquí, está en `Lab-Ecosistema-Digital_YG.md` §10 y §53.2.

## Source of Truth (orden de autoridad)
1. Código fuente real del repo (`src/`).
2. Este documento.
3. `Auditoria_Fase0-1_huhugerman_2026-08-17.md`.
4. `Playbook_huhuGERMAN_2026-08-17.md`.
5. `Lab-Ecosistema-Digital_YG.md` / `SSOT-v1_YG_2026-08-16.md` — contexto de ecosistema, nunca requisito directo.

## Architecture
Astro 5.17.1, sin integraciones adicionales. 9 páginas en `src/pages/`, 5 posts en `src/content/blog/`, sin `src/components/` compartidos. Ver v1 (Source of Truth #3) para el árbol completo — no se repite aquí (regla de eficiencia de tokens, más abajo).

**Nota de historia real (no visible en el árbol actual):** el 18 de mayo de 2026 se construyó un formulario nativo (`IntakeModal.astro` + `src/pages/api/intake.ts` + Resend) y se abandonó poco después — no está en el código de hoy. **Tally (`tally.so/r/VLVV2N`) es el plan vigente**, confirmado por Yasser el 19-ago-2026. No revivir el formulario nativo sin instrucción explícita nueva.

## Protected Areas
Escena de Berlín (`index.astro`), díptico Emilio, las 6 cifras con fuente en `riesgo.astro`, las 10 situaciones en `escenas.astro`, paleta/tipografía en `Layout.astro`, timeline 2011–2026.

## Safe Change Policy
**Seguro, sin aprobación previa:** dependencias de analítica + import en `Layout.astro`; enlace interno de `/investigacion` a `/el-viaje-de-emilio`; completar `README.md`.
**Requiere aprobación humana:** cualquier cambio a los 8 CTA (bloqueado hasta confirmar campos reales de Tally); inserción de copy sobre simulaciones con IA; cualquier cambio a "Qué no es"/"Qué no incluye"; **cualquier cambio de UI/UX**, incluso uno chico, salvo que pase la prueba de la Regla dura #1.

## Content Protocol — español neutro (México/LatAm + inmigrantes hispanohablantes en países germanoparlantes)

**Evitar por marca regional fuerte (mexicanismos):** chido, padrísimo, órale, güey/wey, neta, chavo/chava, checar (usar "revisar"), ahorita (usar "ahora" o una hora/fecha concreta), ¿mande?, no manches, está cañón, de volada, aventar (usar "enviar"), naco, ándale.

**Evitar por marca regional fuerte (españolismos):** vale (usar "de acuerdo" o "está bien"), tío/tía (como "colega"), flipar, guay, currar/curro (usar "trabajar/trabajo"), ordenador (usar "computadora"), móvil (usar "celular"), vosotros/vosotras y su conjugación (usar "ustedes" siempre), chaval, majo, joder/hostia como muletilla, coger (evitar por completo — significado distinto y potencialmente ofensivo en gran parte de LatAm; usar "tomar" o reformular).

**Preferir siempre:** computadora, celular, ustedes, trabajo/trabajar, amigo/compañero, ahora o una referencia temporal concreta, tomar (no agarrar ni coger salvo que el contexto lo pida con cuidado).

### Que no huela a IA — checklist antes de publicar cualquier copy nuevo
El propósito de este documento es que una IA escriba bien, no que se note que lo hizo. Antes de dar por bueno un párrafo nuevo, revisar:
- ¿Hay una construcción "no es solo X, es Y" repetida en el mismo texto? Máximo una vez por página, y solo si aporta algo real.
- ¿Hay tríadas de adjetivos o listas de tres en más de un párrafo seguido ("claro, directo y honesto")? La escritura humana varía el ritmo — mezclar frases cortas, largas, fragmentos.
- ¿Aparecen muletillas de relleno? "Cabe destacar", "es importante mencionar", "en resumen", "sin embargo" usado de forma mecánica entre cada dos oraciones.
- ¿Hay superlativos sin evidencia detrás ("increíble", "revolucionario", "transformador")? Ya prohibido por regla de hype — se reafirma aquí como patrón a detectar, no solo vocabulario.
- ¿Cada párrafo empieza con la misma estructura sintáctica que el anterior? Si sí, romper el patrón deliberadamente.
- ¿El texto responde una pregunta repitiéndola primero ("La pregunta es si... y la respuesta es que sí")? Cortar directo a la respuesta.
- Guión largo (—) usado más de dos veces por párrafo como muleta rítmica — es la marca más reconocible de prosa generada; si aparece así, reescribir con puntuación normal.

## Testing Protocol
Sin CI ni suite formal — mínimo viable ejecutable:
```bash
npm install && npm run build
! grep -rn "mailto:yassergandhi.dev" src/     # ningún mailto debe sobrevivir tras migrar CTA
for p in index metodo servicios riesgo investigacion escenas el-viaje-de-emilio; do
  test -f "src/pages/${p}.astro" || echo "FALTA: $p"
done
grep -q "el-viaje-de-emilio" src/pages/investigacion.astro || echo "SIGUE HUÉRFANA"
```

## Visual Regression / Analytics / Conversion Protocol
Sin cambios de fondo respecto a v1 — ver `Plan_Ejecucion_huhugerman_2026-08-17.md` para comandos, eventos y secuencia completos. No se repite aquí.

## Rollback Protocol
`git log` → `git revert <commit>` puntual, nunca `git reset` destructivo. El historial completo pre-curación vive en el tag `backup/full-history-2026-08-17` — **ese tag nunca se borra ni se sobrescribe**, es la red de seguridad de la reescritura del 19-ago-2026.

## Decision Log
| Fecha | Decisión | Nota |
|---|---|---|
| 17-ago-2026 | Playbook decía "2 CTA mailto"; código real tiene 8 | Corregido, no silenciado |
| 19-ago-2026 | Historial de git curado: 29 → 16 commits | Backup completo en tag, ver arriba |
| 19-ago-2026 | Tally confirmado como plan vigente de formulario | El intento nativo (Resend) del 18-may queda como histórico, no se revive sin instrucción nueva |
| — | Contenido real de Tally sigue sin confirmar | Stop Condition activa, ver abajo |

## Evidence Rules
Nunca convertir hipótesis en hecho. Fila sin evidencia directa se marca `EVIDENCIA INSUFICIENTE`.

## Token Efficiency
No releer archivos completos ya documentados aquí o en la Auditoría. Grep dirigido antes de abrir un archivo completo. `git diff` sobre relectura tras cualquier cambio.

## Stop Conditions
1. Contenido real de Tally sin confirmar por Yasser — bloquea el Conversion Protocol completo.
2. Cambio sin evidencia ni hipótesis explícita.
3. Cambio que toca Protected Areas.
4. `git status` con cambios sin commit al iniciar sesión.
5. **Cualquier cambio visual/de UI propuesto sin que la Regla dura #1 esté satisfecha por escrito.**

---

## Aplicar el historial curado (acción de Yasser, no de Claude Code)

No tengo credenciales para hacer push a tu GitHub — hice la reescritura real localmente y la empaqueté en `huhugerman-historial-curado.bundle`. Desde tu clon local, con tus propias credenciales:

```bash
cd /ruta/a/tu/clon/local/huhugerman-landing-page
git fetch /ruta/al/huhugerman-historial-curado.bundle main-curated:main-curated backup/full-history-2026-08-17:backup/full-history-2026-08-17

# sube primero el respaldo completo, por si acaso
git push origin backup/full-history-2026-08-17

# revisa que main-curated se vea bien
git log --oneline main-curated

# solo si estás conforme:
git branch -f main main-curated
git push origin main --force-with-lease
```
Verificado antes de entregarte esto: el árbol de archivos de `main-curated` es **idéntico byte a byte** al de `main` actual (mismo hash de árbol), y `npm run build` corre sin errores sobre el historial nuevo — la reescritura no cambió ni un archivo, solo comprimió 29 commits en 16 preservando autor y fecha original de cada uno.
