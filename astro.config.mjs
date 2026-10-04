// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Old pages that are now sections of the home page (src/pages/*, via Moved.astro):
// they only redirect, so they stay out of the sitemap.
const moved = ['piano-lessons', 'portfolio', 'shows', 'events', 'press', 'pt/aulas-de-piano', 'pt/portfolio', 'pt/concertos', 'pt/eventos', 'pt/imprensa'];

export default defineConfig({
  site: 'https://joaoeiro.pt',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !moved.some((m) => new URL(page).pathname.replace(/\/$/, '').endsWith(`/${m}`)) })],
  devToolbar: { enabled: false },
});
