/** Draft entries are layout examples: visible in `astro dev`, never in production builds. */
export const published = <T extends { draft?: boolean }>(items: T[]) =>
  items.filter((item) => import.meta.env.DEV || !item.draft);
