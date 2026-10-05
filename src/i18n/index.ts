export const languages = { en: 'English', pt: 'Português' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** One entry per page. English lives at the root, Portuguese under /pt. */
export const routes = {
  home: { en: '/', pt: '/pt/' },
  contact: { en: '/contact/', pt: '/pt/contacto/' },
} as const;
export type RouteKey = keyof typeof routes;

/**
 * Expandable sections of the home page, with their anchor in each language.
 * `legacy` anchors (from earlier versions of the site) still open the section.
 */
export const sections: Record<'current' | 'archive' | 'lessons' | 'portfolio', { en: string; pt: string; legacy?: string[] }> = {
  current: { en: 'now-showing', pt: 'em-cartaz', legacy: ['shows', 'concertos'] },
  archive: { en: 'archive', pt: 'arquivo' },
  lessons: { en: 'lessons', pt: 'aulas' },
  portfolio: { en: 'portfolio', pt: 'portfolio' },
};
export type SectionKey = keyof typeof sections;

/**
 * Base path the site is served from: '' on a custom domain (joaoeiro.pt),
 * '/joaoeiro.pt' on <user>.github.io/joaoeiro.pt. Set at build time.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative URL ('/images/x.jpg') with the base path. */
export const asset = (url: string) => (url.startsWith('/') ? BASE + url : url);

export const path = (key: RouteKey, lang: Lang) => asset(routes[key][lang]);

/** Link to a home-page section; opening it expands that section. */
export const sectionHref = (key: SectionKey, lang: Lang) => `${path('home', lang)}#${sections[key][lang]}`;

/** Locale tags used for <html lang>, hreflang and date formatting. */
export const locales: Record<Lang, string> = { en: 'en', pt: 'pt-PT' };

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.lessons': 'Piano Lessons',
    'nav.portfolio': 'Portfolio',
    'nav.current': 'Now showing',
    'nav.archive': 'Archive',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.skip': 'Skip to content',
    'cta.side': 'Get in touch',
    'cta.shows': 'See upcoming shows',
    'cta.watch': 'Watch & listen',
    'cta.contact': 'Get in touch',
    'footer.follow': 'Follow the music',
    'footer.rights': 'All rights reserved.',
    'footer.top': 'Back to top',
    'lang.switch': 'Ler em Português',
    'lang.short': 'PT',
    'theme.light': 'Switch to light theme',
    'theme.dark': 'Switch to dark theme',
    'piano.hint': 'Click the keys, or play with your keyboard (A – K)',
    'piano.sound': 'Sound',
    'piano.credit': 'Piano sound:',
    'media.youtube': 'YouTube',
    'media.instagram': 'Instagram',
    'media.tiktok': 'TikTok',
    'media.follow': 'Follow on',
    'media.play': 'Play video',
    'media.empty': 'New videos are on the way — follow along on social media.',
    'media.more': 'See all videos',
    'shows.nonePast': 'The archive is being tuned.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone (optional)',
    'form.message': 'Message',
    'form.send': 'Send',
    'form.sending': 'Sending…',
    'form.sent': 'Thank you! Your message is on its way — João will reply soon.',
    'form.error': 'Something went wrong. Please email directly:',
    'form.mailto': 'Your email app will open with the message ready to send.',
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.allShows': 'All shows',
  },
  pt: {
    'nav.home': 'Início',
    'nav.lessons': 'Aulas de Piano',
    'nav.portfolio': 'Portfólio',
    'nav.current': 'Em cartaz',
    'nav.archive': 'Em arquivo',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menu',
    'nav.close': 'Fechar menu',
    'nav.skip': 'Saltar para o conteúdo',
    'cta.side': 'Contacta-me',
    'cta.shows': 'Ver próximos concertos',
    'cta.watch': 'Ver e ouvir',
    'cta.contact': 'Falar com o João',
    'footer.follow': 'Segue a música',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.top': 'Voltar ao topo',
    'lang.switch': 'Read in English',
    'lang.short': 'EN',
    'theme.light': 'Mudar para tema claro',
    'theme.dark': 'Mudar para tema escuro',
    'piano.hint': 'Clica nas teclas ou toca com o teclado do computador (A – K)',
    'piano.sound': 'Som',
    'piano.credit': 'Som de piano:',
    'media.youtube': 'YouTube',
    'media.instagram': 'Instagram',
    'media.tiktok': 'TikTok',
    'media.follow': 'Seguir no',
    'media.play': 'Ver vídeo',
    'media.empty': 'Novos vídeos a caminho — acompanha nas redes sociais.',
    'media.more': 'Ver todos os vídeos',
    'shows.nonePast': 'O arquivo está a ser afinado.',
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.phone': 'Telefone (opcional)',
    'form.message': 'Mensagem',
    'form.send': 'Enviar',
    'form.sending': 'A enviar…',
    'form.sent': 'Obrigado! A tua mensagem foi enviada — o João responde em breve.',
    'form.error': 'Algo correu mal. Escreve diretamente para:',
    'form.mailto': 'A tua aplicação de email vai abrir com a mensagem pronta a enviar.',
    'common.readMore': 'Ler mais',
    'common.learnMore': 'Saber mais',
    'common.allShows': 'Todos os concertos',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export const useT = (lang: Lang) => (key: UiKey) => ui[lang][key] ?? ui.en[key];

/** Bilingual string helper used by data files. */
export type L10n = { en: string; pt: string };
export const pick = (value: L10n | string, lang: Lang) =>
  typeof value === 'string' ? value : value[lang];

/**
 * Dates in data files are written as Lisbon wall-clock time ('2026-11-21T21:30').
 * They are parsed as UTC and formatted as UTC so they always display exactly as written.
 */
export const parseLocalDate = (iso: string) => new Date(iso.length <= 10 ? `${iso}T00:00Z` : `${iso}Z`);

export const formatDate = (date: Date, lang: Lang, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(locales[lang], { timeZone: 'UTC', ...opts }).format(date);
