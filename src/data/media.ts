/**
 * João's videos across platforms.
 *
 * YouTube: if `site.youtube.channelId` is set, uploads are pulled in
 * automatically at build time and merged with the list below (handy for
 * pinning favourites to the top). Otherwise, paste video IDs here.
 *   https://www.youtube.com/watch?v=VIDEO_ID  →  id: 'VIDEO_ID'
 *   https://youtu.be/VIDEO_ID                 →  id: 'VIDEO_ID'
 *   https://www.youtube.com/shorts/VIDEO_ID   →  id: 'VIDEO_ID', short: true
 *
 * Instagram: paste the post/reel URL, e.g. https://www.instagram.com/reel/ABC123/
 * TikTok:    paste the video URL, e.g. https://www.tiktok.com/@user/video/7234567890123456789
 *
 * The first `featured` items appear on the home page.
 */

export interface YouTubeVideo {
  id: string;
  title: string;
  /** ISO date, optional — used for sorting. */
  published?: string;
  /** Vertical YouTube Short. */
  short?: boolean;
  featured?: boolean;
}

export interface SocialPost {
  url: string;
  caption?: string;
  featured?: boolean;
}

export const youtube: YouTubeVideo[] = [
  // { id: 'VIDEO_ID', title: 'Moonlight Sonata', featured: true },  (channel: @joaoeiropiano)
];

export const instagram: SocialPost[] = [
  // { url: 'https://www.instagram.com/reel/XXXXXXXXXXX/', featured: true },  (account: @piano.joaoeiro)
];

export const tiktok: SocialPost[] = [
  {
    url: 'https://www.tiktok.com/@joo.eir/video/7603066545488547104',
    caption: 'Beethoven was a genius. Small but powerful moment in his Moonlight Sonata',
    featured: true,
  },
  {
    url: 'https://www.tiktok.com/@joo.eir/video/7604903059440930081',
    caption: "I stole your beat. Then I gave it back. We're cool now 😌🎹",
    featured: true,
  },
];
