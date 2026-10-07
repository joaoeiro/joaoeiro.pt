// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Old addresses (src/pages/*, via Moved.astro): pages that are now sections of the home page,
// and the English-first layout (Portuguese under /pt). They only redirect, so they stay out of the sitemap.
const moved = [
  'piano-lessons', 'portfolio', 'shows', 'events', 'press', 'contact',
  'pt', 'pt/contacto', 'pt/aulas-de-piano', 'pt/portfolio', 'pt/concertos', 'pt/eventos', 'pt/imprensa',
];

export default defineConfig({
  site: 'https://joaoeiro.pt',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !moved.includes(new URL(page).pathname.replace(/^\/|\/$/g, '')) })],
  devToolbar: { enabled: false },
});
