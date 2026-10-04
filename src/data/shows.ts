import type { L10n } from '../i18n';

/**
 * Concerts and public appearances. Upcoming vs. past is decided from the
 * date — both at build time and again in the visitor's browser, so a show
 * moves to "Past" on its own the day after it happens.
 *
 * Entries with `draft: true` only appear while running `npm run dev`
 * (they are examples to show the layout — delete them when adding real dates).
 */
export interface Show {
  /** ISO date-time in Lisbon time, e.g. '2026-11-21T21:30'. */
  date: string;
  title: L10n;
  venue: string;
  city: string;
  description?: L10n;
  ticketUrl?: string;
  infoUrl?: string;
  free?: boolean;
  soldOut?: boolean;
  /** Optional poster in /public/images. */
  image?: string;
  draft?: boolean;
}

export const shows: Show[] = [
  {
    draft: true,
    date: '2026-11-21T21:30',
    title: { en: 'Solo Recital — Nocturnes & Night Songs', pt: 'Recital a Solo — Noturnos & Canções da Noite' },
    venue: 'Example Auditorium',
    city: 'Lisboa',
    description: {
      en: 'An intimate evening of piano music for the night, from Chopin to today.',
      pt: 'Uma noite intimista de música para piano, de Chopin aos nossos dias.',
    },
    ticketUrl: '#',
  },
  {
    draft: true,
    date: '2026-12-19T18:00',
    title: { en: 'Christmas at the Piano', pt: 'Natal ao Piano' },
    venue: 'Example Church',
    city: 'Porto',
    free: true,
  },
  {
    draft: true,
    date: '2027-02-14T21:00',
    title: { en: "Valentine's Piano Night", pt: 'Noite de Piano de São Valentim' },
    venue: 'Example Jazz Club',
    city: 'Lisboa',
    soldOut: true,
  },
  {
    draft: true,
    date: '2026-06-12T21:30',
    title: { en: 'Summer Students Recital', pt: 'Recital de Verão dos Alunos' },
    venue: 'Example Music School',
    city: 'Lisboa',
  },
  {
    draft: true,
    date: '2026-03-08T19:00',
    title: { en: 'Piano & Poetry', pt: 'Piano & Poesia' },
    venue: 'Example Library',
    city: 'Coimbra',
  },
];
