/**
 * Site-wide settings. Everything João may want to change without touching
 * page code lives here and in `src/data/`.
 *
 * Social links come from the previous joaoeiro.pt (Google Sites).
 */
export const site = {
  name: 'João Eiró',
  url: 'https://joaoeiro.pt',
  // City / region shown in the footer and used for local SEO.
  location: 'Portugal',

  /**
   * Form endpoint (e.g. https://formspree.io/f/xxxx, Getform, Netlify Forms…).
   * The contact form is the only way to reach João on the site: no email or phone is published.
   */
  formEndpoint: 'https://formspree.io/f/xaeqwkwl',

  socials: {
    youtube: 'https://www.youtube.com/@joaoeiropiano',
    instagram: 'https://www.instagram.com/piano.joaoeiro',
    tiktok: 'https://www.tiktok.com/@joo.eir',
    facebook: 'https://www.facebook.com/pianistaJoaoEiro',
    // Optional — leave empty to hide.
    spotify: '',
  },

} as const;

export type Site = typeof site;
