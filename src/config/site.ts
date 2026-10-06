/**
 * Site-wide settings. Everything João may want to change without touching
 * page code lives here and in `src/data/`.
 *
 * Contacts and social links come from the previous joaoeiro.pt (Google Sites).
 */
export const site = {
  name: 'João Eiró',
  url: 'https://joaoeiro.pt',
  email: 'joaoeiro.piano@gmail.com',
  // Leave empty to hide.
  phone: '+351 913 583 010',
  // Optional WhatsApp number in international format without "+" or spaces, e.g. '351912345678'.
  whatsapp: '',
  // City / region shown in the footer and used for local SEO.
  location: 'Portugal',

  /**
   * Form endpoint (e.g. https://formspree.io/f/xxxx, Getform, Netlify Forms…).
   * When empty, forms open the visitor's email app with everything pre-filled.
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
