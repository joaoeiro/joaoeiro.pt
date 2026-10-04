import type { L10n } from '../i18n';

/**
 * Styles and repertoire shown on the Portfolio page. Edit freely — these are
 * a starting point based on what João shares online (classical, groove,
 * improvisation, accompaniment).
 */
export const repertoire: { style: L10n; items: (string | L10n)[] }[] = [
  {
    style: { en: 'Classical', pt: 'Clássico' },
    items: ['J. S. Bach', 'W. A. Mozart', 'L. van Beethoven', 'F. Chopin', 'C. Debussy', 'E. Satie'],
  },
  {
    style: { en: 'Improvisation', pt: 'Improvisação' },
    items: [
      { en: 'Free improvisation', pt: 'Improvisação livre' },
      { en: 'Themes on request', pt: 'Temas a pedido' },
      { en: 'Reharmonisations', pt: 'Rearmonizações' },
    ],
  },
  {
    style: { en: 'Groove & pop', pt: 'Groove & pop' },
    items: [
      { en: 'Pop covers', pt: 'Versões pop' },
      { en: 'Soul & funk grooves', pt: 'Grooves soul & funk' },
      { en: 'Film & TV themes', pt: 'Temas de cinema & TV' },
    ],
  },
  {
    style: { en: 'Accompaniment', pt: 'Acompanhamento' },
    items: [
      { en: 'Singers', pt: 'Cantores' },
      { en: 'Instrumentalists', pt: 'Instrumentistas' },
      { en: 'Choirs', pt: 'Coros' },
    ],
  },
];
