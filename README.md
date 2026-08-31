# huhugerman-landing-page

Landing comercial del servicio 1:1 de huhuGERMAN: preparación personalizada para hispanohablantes que van a Alemania y necesitan resolver situaciones reales (trámites, vivienda, trabajo, convivencia) antes del viaje. No es un curso de idioma por niveles.

## Páginas

- `index.astro` — landing principal.
- `metodo.astro`, `servicios.astro` — método y estructura del servicio 1:1.
- `escenas.astro`, `riesgo.astro` — contenido de apoyo a la propuesta.
- `el-viaje-de-emilio.astro` — referencia a la publicación de investigación del fundador.
- `blog/` — artículos.

## Stack

Astro · @vercel/analytics · @vercel/speed-insights

Desplegado en Vercel (`vercel.json` define redirects de rutas antiguas del sitio).

## Relación con el resto del ecosistema

Este repo es la cara pública del servicio, no la plataforma. Es distinto de huhugerman-instrument, el sistema operativo real (pipeline de Google Apps Script que procesa entregas de estudiantes en producción), y de huhugerman-frontend, un experimento que no está mergeado a producción. Esta landing no procesa entregas ni datos de estudiantes.

## About

**Yasser Gandhi Hernández Esquivel**

Profesor-investigador de alemán · Desarrollador web (Lic. UdeG) · Fundador de huhuGERMAN

[yassergandhi.dev](https://yassergandhi.dev) · [LinkedIn](https://linkedin.com/in/yassergandhi)
