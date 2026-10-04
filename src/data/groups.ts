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
      pt: 'Companhia profissional de teatro de improviso, em que os atores criam histórias a partir das sugestões do público, com a minha ajuda atrás de um teclado, a criar ambientes musicais e canções, no momento. São também quem produz o Espontâneo (festival internacional) e o Campeonato Mundial de Improviso.',
      en: 'A professional improv theatre company where the actors create stories from the audience’s suggestions, with my help behind a keyboard, creating musical atmospheres and songs on the spot. They also produce Espontâneo (an international festival) and the Improv World Championship.',
    },
    url: 'https://instantaneos.pt/',
    featured: true,
  },
  {
    name: 'Teatroàespada',
    summary: {
      pt: 'O irmão mais novo do teatroàfaca, da Upside Down – Associação Cultural. Junta teatro e jogos narrativos: as campanhas Sopro de Tiriath, Lamento de Syrenia e Corrupção de Alora, entre outras, contam com a minha música tocada ao vivo.',
      en: 'The younger sibling of teatroàfaca, by Upside Down – Associação Cultural. It brings theatre and narrative games together: the campaigns Sopro de Tiriath, Lamento de Syrenia and Corrupção de Alora, among others, feature my music played live.',
    },
    url: 'https://teatroafaca.com/teatroaespada',
    featured: true,
  },
  {
    name: '4 You Music',
    summary: {
      pt: 'Quatro vozes acompanhadas ao piano ou à guitarra, para casamentos, cocktails e eventos. Na cerimónia, temas clássicos adequados ao momento; no cocktail, um repertório pop e divertido — e pedidos de músicas especiais para tornar a festa vossa.',
      en: 'Four voices with piano or guitar, for weddings, cocktails and events. Classic songs suited to the ceremony, a fun pop repertoire for the cocktail — and special requests to make the party your own.',
    },
    url: 'https://www.instagram.com/4you.music/',
    via: 'Instagram',
    logo: '/images/groups/4you.png',
  },
];
