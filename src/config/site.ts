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
   * Form endpoint: the Google Apps Script web app in scripts/contact-form.gs (emails João and thanks the visitor).
   * A Formspree URL (previously https://formspree.io/f/xaeqwkwl) also works, without the thank-you email.
   * The contact form is the only way to reach João on the site: no email or phone is published.
   */
  formEndpoint: 'https://script.google.com/macros/s/AKfycbzz4mJN4QBONGVXftM38a1APe1skDd7_aZ6SBnZMwZAQhN8Ek6eFrmc_kbM5tiJuSBT/exec',

  socials: {
    youtube: 'https://www.youtube.com/@joaoeiropiano',
    instagram: 'https://www.instagram.com/piano.joaoeiro',
    tiktok: 'https://www.tiktok.com/@piano.joaoeiro',
    facebook: 'https://www.facebook.com/pianistaJoaoEiro',
    // Optional — leave empty to hide.
    spotify: '',
  },

} as const;

export type Site = typeof site;
