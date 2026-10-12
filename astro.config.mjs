import { defineConfig } from 'astro/config';

// Astro builds the site into `dist/`.
// Everything in the static `public/` folder is copied through unchanged,
// so your existing index.html / who.html / images / assets all keep working.
// Only the blog pages are generated from Markdown.
export default defineConfig({
  site: 'https://cagataygursoy.com',
  outDir: './dist',
  // Serve from the web root (public_html/) on cPanel.
  base: '/',
});
