import type { L10n } from '../i18n';

/**
 * Instagram videos for the Portfolio band on the home page, in the order they appear:
 * newest post first, as on Instagram.
 * Each one shows its cover image; a click plays the video right there.
 *
 *   url:   the post/reel link, e.g. https://www.instagram.com/reel/ABC123/
 *   cover: an image in /public/images/instagram/ (e.g. a screenshot of the post, cropped
 *          so Instagram's sound icon in the bottom-right corner doesn't show)
 *   title: the piece's name, shown under the video; artist: who wrote it (optional)
 *   video: optional .mp4 in /public/videos/ — plays straight away on the site.
 *          Without it, the click opens Instagram's own player for that post.
 *
 * Entries with `draft: true` only appear in `npm run dev`.
 */
export interface InstagramVideo {
  url: string;
  cover: string;
  video?: string;
  /** The piece's name, shown under the video. */
  title: string;
  /** Who wrote it, shown after the title. */
  artist?: string;
  /** Short description, read by screen readers and used as the image's alt text. */
  caption: L10n;
  draft?: boolean;
}

export const instagram: InstagramVideo[] = [
  // { url: 'https://www.instagram.com/reel/XXXXXXXXXXX/', cover: '/images/instagram/moonlight.jpg', video: '/videos/moonlight.mp4', title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven', caption: { en: 'João Eiró at the piano', pt: 'João Eiró ao piano' } },
  {
    url: 'https://www.instagram.com/p/DaYIXISqaO8/',
    cover: '/images/instagram/maos-no-piano.jpg',
    title: 'Mia & Sebastian’s Theme',
    artist: 'Justin Hurwitz',
    caption: { en: 'João Eiró’s hands on the piano', pt: 'As mãos do João Eiró ao piano' },
  },
  {
    url: 'https://www.instagram.com/p/DYFvqYTqFzS/',
    cover: '/images/instagram/piano-camisola-riscas.jpg',
    title: 'Waltz for Debby',
    artist: 'Bill Evans',
    caption: { en: 'João Eiró recording at the piano, in a striped T-shirt', pt: 'João Eiró a gravar ao piano, de t-shirt às riscas' },
  },
  {
    url: 'https://www.instagram.com/p/DXPOjsEqerm/',
    cover: '/images/instagram/piano-dados.jpg',
    title: 'O Lamento de Syrenia',
    artist: 'João Eiró',
    caption: { en: 'João Eiró playing the piano at home', pt: 'João Eiró a tocar piano em casa' },
  },
  {
    url: 'https://www.instagram.com/p/DRU_7OMCDDK/',
    cover: '/images/instagram/piano-janela.jpg',
    title: 'Clair de Lune',
    artist: 'Claude Debussy',
    caption: { en: 'João Eiró playing the piano by the window', pt: 'João Eiró a tocar piano junto à janela' },
  },
  {
    url: 'https://www.instagram.com/p/DLS5U9wiz0c/',
    cover: '/images/instagram/piano-em-casa.jpg',
    title: 'Blackbird',
    artist: 'The Beatles',
    caption: { en: 'João Eiró at the piano at home', pt: 'João Eiró ao piano em casa' },
  },
  {
    url: 'https://www.instagram.com/p/CtKRgY8JSc3/',
    cover: '/images/instagram/piano-calcoes-verdes.jpg',
    title: 'Succession',
    artist: 'Nicholas Britell',
    caption: { en: 'João Eiró’s hands on the Yamaha piano, seen from the side', pt: 'As mãos do João Eiró no piano Yamaha, vistas de lado' },
  },
];
