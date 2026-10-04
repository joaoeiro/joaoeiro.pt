# joaoeiro.pt

Website of **João Eiró** — pianist, piano teacher, accompanist, soloist and compulsive improviser.
Built with [Astro](https://astro.build), fully static, in **English** (`/`) and **Portuguese** (`/pt/`).
Visitors whose browser language is Portuguese are sent to the Portuguese version automatically
(unless they pick a language with the EN/PT switch, which is remembered).

## Pages

| English | Português | |
| --- | --- | --- |
| `/` | `/pt/` | Home — playable piano hero, services, videos, next shows |
| `/piano-lessons/` | `/pt/aulas-de-piano/` | Lessons — who it's for, formats, method, plans, FAQ, booking form |
| `/portfolio/` | `/pt/portfolio/` | Bio, all videos (YouTube / TikTok / Instagram), repertoire, photo gallery |
| `/shows/` | `/pt/concertos/` | Upcoming and past concerts, add-to-calendar |
| `/events/` | `/pt/eventos/` | Weddings, private & corporate events, quote form |
| `/press/` | `/pt/imprensa/` | Press kit — short/long bio (copy buttons), photos, tech rider |
| `/contact/` | `/pt/contacto/` | Contact form and socials |

## Editing content — no code needed

| What | Where |
| --- | --- |
| Email, phone, social links, form endpoint, portrait | `src/config/site.ts` |
| Videos (YouTube IDs, TikTok & Instagram URLs) | `src/data/media.ts` |
| Concerts | `src/data/shows.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Repertoire / styles | `src/data/repertoire.ts` |
| Photos | put files in `public/images/`, list them in `src/data/gallery.ts` |
| Page texts | top of each file in `src/views/` (`en` and `pt` side by side) |

**YouTube is synced automatically.** Every build looks up `@joaoeiropiano` and adds its uploads:
the latest 15 via the public RSS feed, or *every* video when a `YOUTUBE_API_KEY` secret is set.
The deploy workflow rebuilds weekly, so new videos appear on their own.

**Drafts:** items with `draft: true` (example shows and testimonials) appear only in `npm run dev`,
never on the live site. Replace them with real ones.

**Forms:** with `formEndpoint` empty, forms open the visitor's email app pre-filled.
Create a free [Formspree](https://formspree.io) form and paste its URL to receive messages directly.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run check    # type check
```

## Deploy (GitHub Pages)

1. Repository **Settings → Pages → Source: GitHub Actions**.
2. Point the `joaoeiro.pt` DNS to GitHub Pages (A records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`;
   `www` CNAME → `<user>.github.io`). `public/CNAME` already contains the domain.
3. Optional: add a `YOUTUBE_API_KEY` repository secret to list every YouTube upload.

Any static host (Netlify, Vercel, Cloudflare Pages) also works: build command `npm run build`, output `dist`.
