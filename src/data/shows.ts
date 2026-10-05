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
  /** CSS object-position for a poster trimmed by the 3:4 frame, e.g. 'center 85%' to show more of the bottom. */
  posterFocus?: string;
  /** Who João played with, e.g. 'Lisbon Film Orchestra'. */
  with?: string;
  draft?: boolean;
}

export const shows: Show[] = [
  // Past shows, newest first, with the months João gave; the day is approximate unless the poster says it.
  {
    date: '2026-09-24T21:00',
    title: { en: 'A Corrupção de Alora', pt: 'A Corrupção de Alora' },
    with: 'Teatroàespada',
    venue: '',
    city: '',
    image: '/images/shows/teatroaespada-corrupcao-de-alora.jpg',
  },
  {
    date: '2026-09-01T21:30',
    title: { en: 'A Bebedeira de Kant', pt: 'A Bebedeira de Kant' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-bebedeira-de-kant.jpg',
  },
  {
    date: '2026-06-19T21:00',
    title: { en: 'Círculo de Violetas e Poesia', pt: 'Círculo de Violetas e Poesia' },
    with: 'Teatroàespada',
    venue: 'Pinguim Café',
    city: 'Porto',
    image: '/images/shows/teatroaespada-circulo-de-violetas.jpg',
  },
  {
    date: '2026-04-01T21:30',
    title: { en: 'O Banco', pt: 'O Banco' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-o-banco.jpg',
  },
  {
    date: '2026-03-01T21:00',
    title: { en: 'O Lamento de Syrenia', pt: 'O Lamento de Syrenia' },
    with: 'Teatroàespada',
    venue: '',
    city: '',
    image: '/images/shows/teatroaespada-lamento-de-syrenia.jpg',
    posterFocus: 'center 85%',
  },
  {
    date: '2026-02-01T21:30',
    title: { en: 'Duelo Improvisado', pt: 'Duelo Improvisado' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-duelo-improvisado.jpg',
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
    image: '/images/shows/lisbon-film-orchestra-christmas-odivelas.jpg',
  },
  {
    date: '2025-10-01T21:00',
    title: { en: 'O Sopro de Tiriath', pt: 'O Sopro de Tiriath' },
    with: 'Teatroàespada',
    venue: '',
    city: '',
    image: '/images/shows/teatroaespada-sopro-de-tiriath.jpg',
  },
  {
    date: '2025-07-01T21:30',
    title: { en: 'Labirinto', pt: 'Labirinto' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-labirinto.jpg',
  },
  {
    date: '2025-05-01T21:30',
    title: { en: 'Ser ou Não Ser Shakespeare', pt: 'Ser ou Não Ser Shakespeare' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-ser-ou-nao-ser-shakespeare.jpg',
  },
  {
    date: '2025-02-01T21:30',
    title: { en: 'Espontâneo 2025 — Festival Internacional de Teatro de Improviso', pt: 'Espontâneo 2025 — Festival Internacional de Teatro de Improviso' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-espontaneo-2025.jpg',
    posterBg: '#6ac1b3',
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
    date: '2024-04-20T21:30',
    title: { en: 'Campeonato Mundial de Improviso 2024', pt: 'Campeonato Mundial de Improviso 2024' },
    with: 'Instantâneos',
    venue: 'Coliseu de Lisboa',
    city: 'Lisboa',
    image: '/images/shows/instantaneos-campeonato-mundial-2024.jpg',
  },
  {
    date: '2024-04-10T21:30',
    title: { en: 'Pente Fino', pt: 'Pente Fino' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-pente-fino.jpg',
    posterBg: '#0c0c0c',
  },
  {
    date: '2024-04-01T19:00',
    title: { en: 'Sefarad Project', pt: 'Sefarad Project' },
    with: 'Filipe Raposo, Coro ECCE e Paulo Lourenço',
    venue: '',
    city: 'Lisboa',
    image: '/images/shows/sefarad-project.jpg',
    posterBg: 'linear-gradient(#141010, #413d3c)',
  },
  {
    date: '2024-03-01T21:30',
    title: { en: 'A2', pt: 'A2' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-a2.jpg',
  },
  {
    date: '2024-02-17T21:30',
    title: { en: 'Espontâneo 2024 — Festival Internacional de Teatro de Improviso', pt: 'Espontâneo 2024 — Festival Internacional de Teatro de Improviso' },
    with: 'Instantâneos',
    venue: 'Centro Cultural Olga Cadaval',
    city: 'Sintra',
    image: '/images/shows/instantaneos-espontaneo-2024.jpg',
    posterBg: '#8ac5ec',
  },
  {
    date: '2023-07-15T21:30',
    title: { en: 'Retrovisor', pt: 'Retrovisor' },
    with: 'Instantâneos',
    venue: 'Parque da Liberdade',
    city: 'Sintra',
    image: '/images/shows/instantaneos-retrovisor.jpg',
  },
  {
    date: '2023-07-01T21:30',
    title: { en: 'Evaristo', pt: 'Evaristo' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-evaristo.jpg',
    posterBg: 'linear-gradient(#1d2023, #323033)',
  },
  {
    date: '2023-06-01T21:30',
    title: { en: 'Amor', pt: 'Amor' },
    with: 'Instantâneos',
    venue: '',
    city: '',
    image: '/images/shows/instantaneos-amor.jpg',
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
