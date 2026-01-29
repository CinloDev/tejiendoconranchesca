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

Scripts relevantes (en `package.json`)

- `dev` — entorno de desarrollo
- `build` — compilación para producción (SSG cuando corresponda)
- `start` — servidor de producción
- `lint` — ESLint
