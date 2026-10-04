import type { L10n } from '../i18n';

/**
 * Groups João plays with most, shown in "Em cartaz". `featured` ones get a larger card.
 * Logos: put the file in /public/images/groups and set `logo: '/images/groups/<file>'`;
 * until then the group's name stands in for it.
 */
export interface Group {
  name: string;
  summary?: L10n;
  url: string;
  /** Link label when it isn't the group's website (e.g. Instagram). */
  via?: string;
  logo?: string;
  featured?: boolean;
}

export const groups: Group[] = [
  {
    name: 'Instantâneos',
    summary: {
      pt: 'Companhia profissional de teatro de improviso: os atores criam histórias, situações e personagens a partir das sugestões do público. São também quem produz o Espontâneo – Festival Internacional de Teatro de Improviso e o Campeonato Mundial de Improviso, com o Coliseu de Lisboa.',
      en: 'A professional improv theatre company: the actors create stories, situations and characters from the audience’s suggestions. They also produce Espontâneo – International Improv Theatre Festival and the Improv World Championship, with Coliseu de Lisboa.',
    },
    url: 'https://instantaneos.pt/',
    featured: true,
  },
  {
    name: 'Teatroàespada',
    summary: {
      pt: 'O irmão mais novo do teatroàfaca, um projeto da Upside Down – Associação Cultural que junta teatro e jogos narrativos: campanhas ao vivo como Normalville, sessões de Drama & Dados e dois podcasts.',
      en: 'The younger sibling of teatroàfaca, a project by Upside Down – Associação Cultural bringing theatre and narrative games together: live campaigns such as Normalville, Drama & Dados sessions and two podcasts.',
    },
    url: 'https://teatroafaca.com/teatroaespada',
    featured: true,
  },
  {
    name: '4 You Music',
    url: 'https://www.instagram.com/4you.music/',
    via: 'Instagram',
  },
];
