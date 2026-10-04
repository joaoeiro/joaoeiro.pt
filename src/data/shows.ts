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
  /** Poster in /public/images/shows, shown in "Em arquivo" in a 3:4 frame. */
  image?: string;
  /** For a poster far from 3:4 (e.g. square): show it whole on this background instead of trimming it. */
  posterBg?: string;
  /** Who João played with, e.g. 'Lisbon Film Orchestra'. */
  with?: string;
  draft?: boolean;
}

export const shows: Show[] = [
  // Instantâneos posters, from instantaneos.pt. Dates marked "approx." only order the archive:
  // they come from the poster, or from when the poster was published; fix them when known.
  {
    date: '2025-03-01T21:30', // approx.
    title: { en: 'Espontâneo 2025 — International Improv Theatre Festival', pt: 'Espontâneo 2025 — Festival Internacional de Teatro de Improviso' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-espontaneo-2025.jpg',
    posterBg: '#6ac1b3',
  },
  {
    date: '2024-06-01T21:30', // approx.
    title: { en: 'Evaristo', pt: 'Evaristo' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-evaristo.jpg',
    posterBg: 'linear-gradient(#1d2023, #323033)',
  },
  {
    date: '2024-12-07T22:00',
    title: { en: 'A Última Ceia', pt: 'A Última Ceia' },
    with: 'Instantâneos',
    venue: 'Forno Espaço Cultural',
    city: '',
    image: '/images/shows/instantaneos-a-ultima-ceia.jpg',
    posterBg: '#fbfbfb',
  },
  {
    date: '2026-04-11T21:30',
    title: { en: 'Duelo Improvisado', pt: 'Duelo Improvisado' },
    with: 'Instantâneos',
    venue: 'Centro Cultural Olga Cadaval',
    city: 'Sintra',
    image: '/images/shows/instantaneos-duelo-improvisado.jpg',
  },
  {
    date: '2025-10-18T17:00', // approx. year
    title: { en: 'O Banco', pt: 'O Banco' },
    with: 'Instantâneos',
    venue: 'Auditório Carlos Avilez',
    city: 'Estoril',
    image: '/images/shows/instantaneos-o-banco.jpg',
    posterBg: 'linear-gradient(#d4d3c3 50%, #173664 50%)',
  },
  {
    date: '2025-11-28T21:30',
    title: { en: 'A Bebedeira de Kant', pt: 'A Bebedeira de Kant' },
    with: 'Instantâneos',
    venue: 'Centro Cultural Olga Cadaval',
    city: 'Sintra',
    image: '/images/shows/instantaneos-bebedeira-de-kant.jpg',
  },
  {
    date: '2025-07-04T21:30', // approx.
    title: { en: 'Retrovisor', pt: 'Retrovisor' },
    with: 'Instantâneos',
    venue: 'Parque da Liberdade',
    city: 'Sintra',
    image: '/images/shows/instantaneos-retrovisor.jpg',
  },
  {
    date: '2025-06-20T21:30', // approx.
    title: { en: 'Pente Fino', pt: 'Pente Fino' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-pente-fino.jpg',
    posterBg: '#0c0c0c',
  },
  {
    date: '2025-06-15T21:30', // approx.
    title: { en: 'A2', pt: 'A2' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-a2.jpg',
  },
  {
    date: '2025-06-01T21:30', // approx.
    title: { en: 'Labirinto', pt: 'Labirinto' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-labirinto.jpg',
  },
  {
    date: '2024-11-01T21:30', // approx.
    title: { en: 'Campeonato Mundial de Improviso 2024', pt: 'Campeonato Mundial de Improviso 2024' },
    with: 'Instantâneos',
    venue: 'Coliseu de Lisboa',
    city: 'Lisboa',
    image: '/images/shows/instantaneos-campeonato-mundial-2024.jpg',
  },
  {
    date: '2021-12-01T21:30', // approx.
    title: { en: 'Ser ou Não Ser Shakespeare', pt: 'Ser ou Não Ser Shakespeare' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-ser-ou-nao-ser-shakespeare.jpg',
  },
  {
    date: '2021-11-01T21:30', // approx.
    title: { en: 'Amor', pt: 'Amor' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-amor.jpg',
  },
  {
    date: '2026-01-10T21:00',
    title: { en: 'Our Stories — Music from Movies & Series', pt: 'Our Stories — Music from Movies & Series' },
    with: 'Lisbon Film Orchestra',
    venue: 'MEO Arena',
    city: 'Lisboa',
    image: '/images/shows/lisbon-film-orchestra-our-stories.jpg',
    posterBg: 'linear-gradient(#031236, #071f55)',
  },
  {
    date: '2025-12-13T21:30',
    title: { en: 'Christmas is coming to Odivelas', pt: 'Christmas is coming to Odivelas' },
    with: 'Lisbon Film Orchestra',
    venue: 'Pavilhão Multiusos de Odivelas',
    city: 'Odivelas',
    free: true,
    image: '/images/shows/lisbon-film-orchestra-christmas-odivelas.jpg',
  },
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
