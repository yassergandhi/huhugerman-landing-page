# huhuGERMAN

**Pedagogical method and research system for teaching authentic German from A1.**  
UAM Azcapotzalco · CELEX · Mexico City · 2011–2026

---

## What it is

huhuGERMAN is a language pedagogy method — and the research infrastructure built around it — that
introduces authentic German documentary content (Y-Kollektiv, funk/ARD) from the first weeks of an A1
course, with explicit metacognitive scaffolding.

The field's dominant assumption is that authentic materials should be deferred until post-A2 readiness.
huhuGERMAN challenges that assumption with 15 years of documented classroom evidence.

The core claim: the 41% dropout rate of foreign students in Germany (DAAD/Reucher 2019) has pedagogical
roots that can be addressed before departure — from Mexico, from A1 — by training learners to navigate
real *Umgangssprache* before the contact with Germany becomes evaluative and potentially exclusionary.

---

## The method: h.u.h.u.

A 90-minute asynchronous session structured in six sequential parts (*Teile*):

| Teil | Component | Function |
|------|-----------|----------|
| T1 | Affective priming | Emotions before words |
| T2 | First listening — global comprehension | Identify topic, not words |
| T3 | Grammar in context | Recognize structures from authentic input |
| T4 | Second listening — selective transcription | Write what you hear, errors accepted |
| T5 | Written production | Express from personal perspective in German |
| T6 | Metacognitive reflection | In Spanish — the most research-relevant section |

The mandatory final reflection distinguishes between *global comprehension* (understanding the general
topic) and *selective comprehension* (recognizing specific phrases). Students report how many times they
listened, whether they experienced repetition as failure or process, and their affective state at the end.

---

## What students actually produce

From trimestre 25-O (October 2025), after watching an unscripted Y-Kollektiv documentary about young
offenders in German detention — native *Umgangssprache*, no pedagogical adaptation:

> *"Ich bin traurig. Ich denke an meine Eltern. Ich sehe vier Wände. Es ist sehr still."*  
> — A1 student, written production task, Week 3

> *"Ich bin allein. Ich denke an meine Mutter. Ich bin traurig, aber ich hoffe."*  
> — A1 student, same session

These students had no prior vocabulary related to incarceration, criminal justice, or emotional
self-expression in German. The only scaffold was the method.

---

## Research infrastructure

The method runs on a deliberately minimal but rigorous data pipeline:

```
Google Forms (student submission)
  → Apps Script (UUID/SHA-256 identity resolution, GAS v8)
  → Google Sheets (ACTIVIDADES + ENTREGAS, 25-col schema)
  → Notion API (qualitative coding — pending connection)
```

Key design decision (ADR-002): column indices are referenced by integer, not by header name.
The system is tolerant of mobile auth failures, email typos, and inconsistent student IDs —
because those are the actual conditions of use.

**WochenKontextSchema** (TypeScript/Zod): the AI layer does not decide what to correct.
It obeys the pedagogical domain model. The schema defines what was taught in a given week and
what the AI is explicitly forbidden to flag as an error.

---

## Current state (February 2026)

| Component | Status |
|-----------|--------|
| Method (6-Teil structure) | Active — 30–40 students/trimester |
| GAS pipeline | v8 — production |
| huhugerman.com | 403 (OAuth active, no new frontend deployed) |
| Landing page (this repo) | Deployed — static Astro |
| Notion qualitative coding | Pending API connection |
| Academic publication | Target: *Die Unterrichtspraxis / Teaching German* centenary 2026 |

---

## Technical stack

**Frontend:** Astro · TypeScript  
**Data pipeline:** Google Forms · Google Apps Script · Supabase (PostgreSQL)  
**Schema validation:** Zod  
**Design system:** Ubuntu Lynx 10.04 palette (`#300A24` aubergine · `#E95420` Ubuntu Orange)

---

## Theoretical foundations

- **Krashen** — Input hypothesis extended, not rejected. Authentic i+1 from A1 with scaffolding.
- **Vandergrift** — Metacognitive listening strategies made explicit. First systematic application in Mexico (CELE-UNAM 2015).
- **Gadamer / Bildung** — Encounter with otherness as transformative experience (*Erfahrung*). The documentary is not a tool; it is a meeting with a living language.
- **Borg** — Teacher research as legitimate epistemology. 15 years of classroom observation as evidence base.

---

## About the author

Yasser Gandhi Hernández Esquivel  
Germanist C1 (Offenburg 2019) · UNAM German Literature & Pedagogy (CONACYT) · UdeG Web Systems (GPA 98.5)  
15 years CELEX UAM Azcapotzalco · 11 Scopus peer reviews published  

[yassergandhi.dev](https://yassergandhi.dev)

---

## Deploy

```bash
npm install
npm run dev       # localhost:4321
npm run build     # dist/
```

Deploy to Vercel: `vercel` — framework auto-detected as Astro.  
No server required. Fully static output.

---

## Data & privacy

All student data displayed on this site is anonymized by session code (UUID-derived).
No names, emails, or institutional IDs appear in any layer of the frontend — including
HTML attributes, JavaScript variables, and build-time data.

Source CSV files are not included in this repository.
