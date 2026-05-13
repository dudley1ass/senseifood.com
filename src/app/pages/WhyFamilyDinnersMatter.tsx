import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-family-dinners-matter',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Family Dinners Matter',
  subtitle:
    'Shared meals teach pacing, vocabulary, and food variety—and they are one of the few daily screens-off anchors left in many homes. Dinner is not only nutrients; it is modeling. Kids who see adults eat vegetables often try more eventually. Adults who slow down sometimes notice fullness sooner. The table is a small social technology that survives imperfect food.',
  readTime: '9 min read',
  emoji: '👪',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for frequency over fantasy: several calm fifteen-minute sit-downs beat one stressed banquet. Phones in a bowl, chairs pulled in, conversation optional but present. Late shifts make dinner a moving target—shared breakfast or weekend lunch counts the same if the rhythm is real. Silence is fine; forced performance usually backfires.',
  intro:
    "Family dinner has been mythologized into a Norman Rockwell painting. Real life is shorter, louder, and sometimes cereal. The useful idea underneath the myth is repetition: a place where food is normal, bodies are respected, and people look at each other sometimes.\n\nResearch summaries often link shared meals with patterns kids carry—more vegetables tried over time, fewer disordered eating signals in some studies, better vocabulary in younger kids because conversation shows up. Your kitchen is not a lab, but the mechanisms make intuitive sense.\n\nIf dinner cannot happen, borrow another meal. The point is connection and modeling, not the clock.",
  sections: [
    {
      heading: 'What kids pick up without a lecture',
      paragraphs: [
        'Manners, language, and exposure to new foods ride along with the casserole. Curiosity copies calm more than it copies nagging.',
        'When adults eat the same foods—not a “diet” separate plate—kids learn what “normal eating” looks like.',
      ],
    },
    {
      heading: 'Pacing, fullness, and the speed of chewing',
      paragraphs: [
        'Conversations create natural pauses between bites. That pacing matters for noticing fullness before seconds are automatic.',
      ],
    },
    {
      heading: 'When schedules fight back',
      paragraphs: [
        'Late shifts make dinner a moving target—shared breakfast or weekend lunch counts the same if the rhythm is real. Fifteen real minutes beats zero because ideals were too high.',
      ],
      tip: 'Put phones in a bowl; the friction of reaching for them reminds everyone what dinner is for.',
    },
    {
      heading: 'Teens, autonomy, and not turning meals into trials',
      paragraphs: [
        'Teens may disappear; occasional overlap still preserves connection. Persist gently without interrogation as the appetizer.',
      ],
    },
    {
      heading: 'Food insecurity and busy pain',
      paragraphs: [
        'If dinner together is hard because of work schedules or food access, grace first. Community programs and schools can be part of the nutrition story.',
      ],
    },
    {
      heading: 'Perfection is the enemy of the table',
      paragraphs: [
        'If the bar is a cooked-from-scratch masterpiece nightly, families quit. If the bar is “we sat and ate something,” more weeks survive.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Forced conversation?',
      a: 'Silence is fine; pressure ruins the anchor. Let the bar stay humane.',
    },
    {
      q: 'Teens disappear?',
      a: 'Even occasional overlap preserves connection—persist gently without turning meals into trials.',
    },
    {
      q: 'Picky eaters ruin dinner?',
      a: 'Include a safe food, keep exposure calm, and protect the social warmth of the table.',
    },
    {
      q: 'TV dinners sometimes?',
      a: 'Life happens—pair with a plan to reconnect when the week calms; shame spirals help nobody.',
    },
  ],
  related: [
    { title: 'How to Build Balanced Family Meals', path: '/nutrition-science/how-to-build-balanced-family-meals' },
    { title: 'Nutrition for Busy Families', path: '/nutrition-science/nutrition-for-busy-families' },
  ],
};

export default function WhyFamilyDinnersMatter() {
  return <ScienceArticlePage spec={SPEC} />;
}
