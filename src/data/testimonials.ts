import type { L10n } from '../i18n';

/**
 * Words from students, parents and clients. Add real quotes (with permission)
 * and remove `draft: true` — drafts only appear in `npm run dev`.
 */
export interface Testimonial {
  quote: L10n;
  author: string;
  role: L10n;
  draft?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    draft: true,
    quote: {
      en: 'Example quote — after six months of lessons my daughter plays for the whole family every Sunday.',
      pt: 'Citação de exemplo — ao fim de seis meses de aulas a minha filha toca para a família inteira todos os domingos.',
    },
    author: 'Parent name',
    role: { en: 'Parent of a student', pt: 'Mãe de aluna' },
  },
  {
    draft: true,
    quote: {
      en: 'Example quote — the piano made our gala dinner unforgettable. Every guest asked who the pianist was.',
      pt: 'Citação de exemplo — o piano tornou o nosso jantar de gala inesquecível. Todos os convidados perguntaram quem era o pianista.',
    },
    author: 'Client name',
    role: { en: 'Corporate event', pt: 'Evento corporativo' },
  },
  {
    draft: true,
    quote: {
      en: 'Example quote — I started at 45 with zero experience. João made every lesson feel like a small concert.',
      pt: 'Citação de exemplo — comecei aos 45 sem qualquer experiência. O João fez de cada aula um pequeno concerto.',
    },
    author: 'Student name',
    role: { en: 'Adult student', pt: 'Aluno adulto' },
  },
];
