import type { L10n } from '../i18n';

/**
 * Reviews from students, in their original wording; the English text is a translation.
 * Entries with `draft: true` only appear in `npm run dev`.
 */
export interface Testimonial {
  quote: L10n;
  author: string;
  role: L10n;
  /** Stars out of 5. */
  rating?: number;
  draft?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      pt: 'O João é meu professor de piano e para além de ser muito paciente e claro a explicar e a ensinar (porque é visível que nasceu para o fazer), tem sentido de humor e bom gosto, fazendo com que o longo caminho de aprender a tocar piano seja agradável e desafiante! Aconselho este professor e, se pudesse, dar-lhe-ia 6 estrelas',
      en: 'João is my piano teacher and, besides being very patient and clear when explaining and teaching (you can tell he was born to do it), he has a sense of humour and good taste, which makes the long road of learning the piano enjoyable and challenging! I recommend this teacher and, if I could, I would give him 6 stars',
    },
    author: 'Luísa L.',
    role: { en: 'Piano student', pt: 'Aluna de piano' },
    rating: 5,
  },
  {
    quote: {
      pt: 'O João Eiró é um professor que se consegue adaptar aos diferentes ritmos, interesses e objectivos de cada aluno! Garantindo a liberdade dos alunos escolherem as músicas que gostariam de tocar, mantendo a motivação elevada, consegue adaptar a teoria e implementar um plano de aulas ao longo do tempo! Para mim, é um excelente investimento e todas as aulas são um excelente desafio e bastante interessantes.',
      en: 'João Eiró is a teacher who manages to adapt to each student’s pace, interests and goals! Giving students the freedom to choose the songs they would like to play, and keeping motivation high, he adapts the theory and builds a lesson plan over time! For me it is an excellent investment, and every lesson is a great challenge and really interesting.',
    },
    author: 'Manuel M.',
    role: { en: 'Piano student', pt: 'Aluno de piano' },
    rating: 5,
  },
  {
    quote: {
      pt: 'Comecei as minhas aulas há cerca de 2 meses. Tinha tocado piano em criança e decidi retomar aos 25 anos. Ensino muito versátil e adaptado às necessidades e interesses pessoais do aluno. Criatividade e dedicação que permitiu manter as aulas mesmo durante a quarentena, através de videoconferência de qualidade. Recomendo muito!',
      en: 'I started my lessons about 2 months ago. I had played the piano as a child and decided to pick it up again at 25. Very versatile teaching, adapted to each student’s needs and personal interests. Creativity and dedication that kept the lessons going even during lockdown, through high-quality video calls. Highly recommended!',
    },
    author: 'Rita C.',
    role: { en: 'Piano student', pt: 'Aluna de piano' },
    rating: 5,
  },
];
