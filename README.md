# Tejiendo con Ranchesca

Proyecto: sitio estático profesional para patrones, packs y recomendaciones afiliadas.

Tecnologías principales

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MDX para contenido (frontmatter con gray-matter)
- ESLint + Prettier
- Preparado para deploy en Netlify

Objetivo

Crear un sitio SSG (generación estática) orientado a SEO y a programa de afiliados. Incluye blog, patrones, packs y fichas de productos con redirección interna `/go/[slug]` hacia enlaces afiliados.

Estructura importante

- `/app` — rutas App Router (páginas y layout)
- `/components` — componentes reutilizables (LayoutShell, Card, Badge, CTAButton…)
- `/content` — contenido en MDX dividido por carpetas:
  - `content/blog/` (posts)
  - `content/patrones/` (patrones)
  - `content/packs/` (packs)
  - `content/recomendados/` (productos afiliados)
  - `content/affiliate-links.json` (mapa slug -> URL afiliada)
- `/lib` — utilidades para cargar contenido (ej. `lib/content.ts`)

Cómo ejecutar (desarrollo)

```bash
npm install
npm run dev
```

Build y preview de producción

```bash
npm run build
npm start
```

Agregar contenido

- Crear un archivo MDX dentro de la carpeta correspondiente, por ejemplo `content/blog/nuevo-post.mdx` con frontmatter YAML.
- Para `recomendados`, incluya en el frontmatter `affiliateSlug: "mi-slug"` y añada el mapeo en `content/affiliate-links.json`.

Servicio de afiliados y redirección

- El archivo `content/affiliate-links.json` mapea `slug` → `url` real.
- En el UI se usan rutas internas `/go/{slug}` que redirigen a la URL real y agregan parámetros UTM si no existen.

Deploy en Netlify

- `netlify.toml` y `public/_redirects` están incluidos para facilitar el deploy.

Archivos útiles

- `lib/content.ts` — utilidades para leer MDX y frontmatter.
- `app/sitemap.xml/route.ts` — genera `sitemap.xml` dinámico.
- `public/robots.txt` — reglas de robots.

Scripts relevantes (en `package.json`)

- `dev` — entorno de desarrollo
- `build` — compilación para producción (SSG donde aplique)
- `start` — servidor de producción
- `lint` — ESLint


