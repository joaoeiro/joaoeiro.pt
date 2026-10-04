# joaoeiro.pt

Website of **João Eiró** — pianist, piano teacher, accompanist, soloist and compulsive improviser.
Built with [Astro](https://astro.build), fully static, in **English** (`/`) and **Portuguese** (`/pt/`).
Visitors whose browser language is Portuguese are sent to the Portuguese version automatically
(unless they pick a language with the EN/PT switch, which is remembered).

Two themes: **dark** (noir, gold, ivory) and **light** (sand `#D7CFC4`, maroon `#800000`).
The site follows the visitor's system setting; the sun/moon button switches and remembers the choice.
All colours are tokens at the top of `src/styles/global.css` — `:root` for dark, `:root[data-theme='light']` for light.

## Pages

Two pages, in English (`/`, `/contact/`) and Portuguese (`/pt/`, `/pt/contacto/`).

**Home** — playable piano hero, the word ribbon, and four sections. Closed, each shows a picture beside a
short text; clicking it expands the rest:

| Section | Anchor (EN / PT) | Content |
| --- | --- | --- |
| Now showing / Em cartaz | `#now-showing` / `#em-cartaz` | Upcoming shows, add-to-calendar |
| Archive / Em arquivo | `#archive` / `#arquivo` | Past shows |
| Lessons / Aulas de piano | `#lessons` / `#aulas` | Free first lesson; teaching approach |
| Portfolio | `#portfolio` | Always open: bio, videos (YouTube / TikTok / Instagram), repertoire, photo gallery |

The menu and any link to an anchor open that section (`src/components/Tab.astro`); old page addresses
(`/piano-lessons/`, `/pt/concertos/`…) redirect to their section, or to the home page for pages that are gone.
Each section's picture is set at the top of its file in `src/components/tabs/`.

**Contact** — the contact form (subject: lessons, events or other). `?s=lessons` / `?s=events` preselects the subject.

## Editing content — no code needed

| What | Where |
| --- | --- |
| Email, phone, social links, form endpoint | `src/config/site.ts` |
| Main photo (hero & portfolio), optimised automatically | `src/assets/joao-eiro-live.jpg` |
| Videos (YouTube IDs, TikTok & Instagram URLs) | `src/data/media.ts` |
| Concerts | `src/data/shows.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Repertoire / styles | `src/data/repertoire.ts` |
| Photos | put files in `public/images/`, list them in `src/data/gallery.ts` |
| Page texts | top of `src/views/Home.astro`, `src/views/Contact.astro` and each section in `src/components/tabs/` (`en` and `pt` side by side) |

**YouTube is synced automatically.** Every build looks up `@joaoeiropiano` and adds its uploads:
the latest 15 via the public RSS feed, or *every* video when a `YOUTUBE_API_KEY` secret is set.
The deploy workflow rebuilds weekly, so new videos appear on their own.

**Drafts:** items with `draft: true` (the example shows) appear only in `npm run dev`,
never on the live site. Replace them with real ones.

**Contact form:** one form, on the contact page, reached from the "Contacta-me" tab on the right edge of every page.
With `formEndpoint` empty, it opens the visitor's email app pre-filled with every answer.
Create a free [Formspree](https://formspree.io) form and paste its URL to receive messages directly.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run check    # type check
```

## Deploy (GitHub Pages)

Every push to `main` builds and deploys the site with GitHub Actions
(`.github/workflows/deploy.yml`); it also rebuilds every Monday to pick up new
YouTube videos and move finished shows to "Past". Pull requests are built and
type-checked but not deployed. Run it by hand from **Actions → Deploy to GitHub Pages → Run workflow**.

The build reads the Pages URL, so links work both at `https://neteinstein.github.io/joaoeiro.pt/`
and on the custom domain. To serve it at **joaoeiro.pt**:

1. **Settings → Pages → Custom domain**: enter `joaoeiro.pt`, save, and tick *Enforce HTTPS* once available.
2. At the domain registrar, replace the Google Sites records with GitHub Pages:
   `A` records for `joaoeiro.pt` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and `www` as a `CNAME` → `neteinstein.github.io`.
3. Re-run the workflow so the build switches to the root domain.
4. Optional: add a `YOUTUBE_API_KEY` repository secret to list *every* YouTube upload (otherwise the latest 15).

Any other static host (Netlify, Vercel, Cloudflare Pages) also works: build command `npm run build`, output `dist`.

## Credits

The playable piano on the home page uses recordings from the
[Salamander Grand Piano V3](https://archive.org/details/SalamanderGrandPianoV3) by Alexander Holm,
licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). They were trimmed to 6 seconds and
re-encoded; they live in `public/audio/piano/`.
