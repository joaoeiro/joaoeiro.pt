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
  formEndpoint: '',

  /** Optional portrait in /public/images (e.g. '/images/joao.jpg'). Empty = illustrated piano. */
  portrait: '',

  socials: {
    youtube: 'https://www.youtube.com/@joaoeiropiano',
    instagram: 'https://www.instagram.com/piano.joaoeiro',
    tiktok: 'https://www.tiktok.com/@joo.eir',
    facebook: 'https://www.facebook.com/pianistaJoaoEiro',
    // Optional — leave empty to hide.
    spotify: '',
  },

  youtube: {
    /**
     * Every build pulls João's uploads from this channel automatically:
     * all of them when YOUTUBE_API_KEY is set, otherwise the latest 15 from
     * the public RSS feed. The channel ID ("UC…") is looked up from the
     * handle; fill `channelId` to skip that lookup.
     */
    handle: '@joaoeiropiano',
    channelId: '',
  },
} as const;

export type Site = typeof site;
