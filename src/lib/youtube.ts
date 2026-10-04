import { site } from '../config/site';
import { youtube as manual, type YouTubeVideo } from '../data/media';

const TIMEOUT_MS = 8000;

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

async function get(url: string) {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res;
}

/** Every upload on the channel, via the YouTube Data API (needs YOUTUBE_API_KEY). */
async function fromApi(channelId: string, key: string): Promise<YouTubeVideo[]> {
  const playlistId = 'UU' + channelId.slice(2);
  const videos: YouTubeVideo[] = [];
  let pageToken = '';
  do {
    const url =
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50` +
      `&playlistId=${playlistId}&key=${key}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const data = await (await get(url)).json();
    for (const item of data.items ?? []) {
      const s = item.snippet;
      if (!s?.resourceId?.videoId || s.title === 'Private video' || s.title === 'Deleted video') continue;
      videos.push({ id: s.resourceId.videoId, title: s.title, published: s.publishedAt });
    }
    pageToken = data.nextPageToken ?? '';
  } while (pageToken);
  return videos;
}

/** Latest 15 uploads via the public RSS feed (no key needed). */
async function fromRss(channelId: string): Promise<YouTubeVideo[]> {
  const xml = await (await get(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)).text();
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].flatMap(([, entry]) => {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    if (!id) return [];
    return [
      {
        id,
        title: decode(entry.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''),
        published: entry.match(/<published>([^<]+)<\/published>/)?.[1],
        short: /\/shorts\//.test(entry.match(/<link[^>]+href="([^"]+)"/)?.[1] ?? ''),
      },
    ];
  });
}

/** Channel ID from config, the Data API (with a key) or the public channel page. */
async function resolveChannelId(key?: string): Promise<string | undefined> {
  const { channelId, handle } = site.youtube;
  if (channelId) return channelId;
  if (!handle) return undefined;
  if (key) {
    const data = await (
      await get(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(handle)}&key=${key}`)
    ).json();
    if (data.items?.[0]?.id) return data.items[0].id;
  }
  const page = await (await get(`https://www.youtube.com/${handle}`)).text();
  return (
    page.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{22})"/)?.[1] ??
    page.match(/"(?:externalId|channelId)":"(UC[\w-]{22})"/)?.[1]
  );
}

let cache: Promise<YouTubeVideo[]> | undefined;

/**
 * Manual entries first (in the order written), then synced uploads newest
 * first, without duplicates. Network failures never break the build.
 */
export function getYouTubeVideos() {
  cache ??= (async () => {
    const key: string | undefined = import.meta.env.YOUTUBE_API_KEY;
    let synced: YouTubeVideo[] = [];
    try {
      const channelId = await resolveChannelId(key);
      if (channelId) synced = key ? await fromApi(channelId, key) : await fromRss(channelId);
    } catch (err) {
      console.warn(`[youtube] Could not sync ${site.youtube.handle || 'channel'}: ${(err as Error).message}`);
    }
    synced.sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
    const seen = new Set<string>();
    return [...manual, ...synced].filter((v) => !seen.has(v.id) && seen.add(v.id));
  })();
  return cache;
}
