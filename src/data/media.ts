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
  caption: string;
  draft?: boolean;
}

export const instagram: InstagramVideo[] = [
  // { url: 'https://www.instagram.com/reel/XXXXXXXXXXX/', cover: '/images/instagram/moonlight.jpg', video: '/videos/moonlight.mp4', caption: 'Moonlight Sonata' },
];
