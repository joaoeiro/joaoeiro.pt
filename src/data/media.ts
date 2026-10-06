import type { L10n } from '../i18n';

/**
 * Instagram videos for the Portfolio band on the home page, in the order they appear.
 * Each one shows its cover image; a click plays the video right there.
 *
 *   url:   the post/reel link, e.g. https://www.instagram.com/reel/ABC123/
 *   cover: an image in /public/images/instagram/ (e.g. a screenshot of the post)
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
];
