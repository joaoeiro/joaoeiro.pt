/**
 * Keeps the email and phone number out of the built HTML so address-harvesting bots can't read them.
 * Values are XOR-ed and hex-encoded at build time; a tiny script in the browser turns them back.
 */
const KEY = 0x5a;

export const encode = (s: string) =>
  [...s].map((c) => (c.charCodeAt(0) ^ KEY).toString(16).padStart(2, '0')).join('');

export const decode = (hex: string) =>
  (hex.match(/../g) ?? []).map((h) => String.fromCharCode(parseInt(h, 16) ^ KEY)).join('');
