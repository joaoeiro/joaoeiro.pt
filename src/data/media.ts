import type { L10n } from '../i18n';

/**
 * Instagram videos for the Portfolio band on the home page, in the order they appear.
 * Each one shows its cover image; a click plays the video right there.
 *
 *   url:   the post/reel link, e.g. https://www.instagram.com/reel/ABC123/
 *   cover: an image in /public/images/instagram/ (e.g. a screenshot of the post, cropped
 *          so Instagram's sound icon in the bottom-right corner doesn't show)
 *   video: optional .mp4 in /public/videos/ — plays straight away on the site.
 *          Without it, the click opens Instagram's own player for that post.
 *
 * Entries with `draft: true` only appear in `npm run dev`.
 */
export interface InstagramVideo {
  url: string;
  cover: string;
  video?: string;
  /** Short description, read by screen readers and used as the image's alt text. */
  caption: L10n;
  draft?: boolean;
}

export const instagram: InstagramVideo[] = [
  // { url: 'https://www.instagram.com/reel/XXXXXXXXXXX/', cover: '/images/instagram/moonlight.jpg', video: '/videos/moonlight.mp4', caption: { en: 'Moonlight Sonata', pt: 'Sonata ao Luar' } },
  {
    url: 'https://www.instagram.com/p/DLS5U9wiz0c/',
    cover: '/images/instagram/piano-em-casa.jpg',
    caption: { en: 'João Eiró at the piano at home', pt: 'João Eiró ao piano em casa' },
  },
  {
    url: 'https://www.instagram.com/p/DaYIXISqaO8/',
    cover: '/images/instagram/maos-no-piano.jpg',
    caption: { en: 'João Eiró’s hands on the piano', pt: 'As mãos do João Eiró ao piano' },
  },
  {
    url: 'https://www.instagram.com/p/DRU_7OMCDDK/',
    cover: '/images/instagram/piano-janela.jpg',
    caption: { en: 'João Eiró playing the piano by the window', pt: 'João Eiró a tocar piano junto à janela' },
  },
  {
    url: 'https://www.instagram.com/p/DZnjcS9K3fU/',
    cover: '/images/instagram/piano-microfone.jpg',
    caption: { en: 'João Eiró recording at the piano', pt: 'João Eiró a gravar ao piano' },
  },
  {
    url: 'https://www.instagram.com/p/DYVPSdtK7uG/',
    cover: '/images/instagram/piano-caveira.jpg',
    caption: { en: 'João Eiró’s hands on the Yamaha piano keys', pt: 'As mãos do João Eiró no teclado do piano Yamaha' },
  },
  {
    url: 'https://www.instagram.com/p/Cu4tnO6I_kc/',
    cover: '/images/instagram/piano-camisola-verde.jpg',
    caption: { en: 'João Eiró playing the piano', pt: 'João Eiró a tocar piano' },
  },
  {
    url: 'https://www.instagram.com/p/DXWfQWTKfF0/',
    cover: '/images/instagram/piano-candeeiro.jpg',
    caption: { en: 'João Eiró’s hands on the piano, lit by a desk lamp', pt: 'As mãos do João Eiró ao piano, sob um candeeiro' },
  },
  {
    url: 'https://www.instagram.com/p/DXPOjsEqerm/',
    cover: '/images/instagram/piano-dados.jpg',
    caption: { en: 'João Eiró playing the piano at home', pt: 'João Eiró a tocar piano em casa' },
  },
  {
    url: 'https://www.instagram.com/p/DBgvfw3IK80/',
    cover: '/images/instagram/piano-rosa.jpg',
    caption: { en: 'João Eiró playing the piano, with a red rose on the lid', pt: 'João Eiró a tocar piano, com uma rosa vermelha na tampa' },
  },
  {
    url: 'https://www.instagram.com/p/DQw61JqjEiZ/',
    cover: '/images/instagram/piano-relogio.jpg',
    caption: { en: 'João Eiró playing the piano under a wall clock', pt: 'João Eiró a tocar piano por baixo de um relógio de parede' },
  },
];
