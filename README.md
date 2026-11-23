# procodeind.com

Website of ProCode Ind, an AI engineering workshop in Cartagena, Colombia. Built with Astro and deployed to GitHub Pages on every push to `main` (`.github/workflows/pages.yml`).

## Structure

| Path | What it is |
|---|---|
| `src/pages/index.astro` | Home page |
| `src/pages/404.astro` | Not-found page |
| `public/assets/site.css` | All styles (GNOME palette, Ubuntu fonts, light and dark themes) |
| `public/assets/site.js` | Reading progress line, copy buttons, iguana and owl animations |
| `public/assets/iguana-*.png` | Iguana drawing split into mask layers (lines, crest, eye), colored by CSS |
| `astro.config.mjs` | Redirects the old `/es/` and `/en/` URLs to `/` |

## Commands

```sh
npm ci
npm run dev      # local server at http://localhost:4321
npm run build    # static output in ./dist
```
