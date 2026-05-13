import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-introduce-new-foods-to-kids',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Introduce New Foods to Kids',
  subtitle:
    'Novelty is scary on purpose—young humans are built to avoid unknown plants. Repeated calm exposure beats bribery: tiny tastes, neutral words, and the same food showing up on different days teach safety faster than lectures. Progress is often invisible for weeks, then suddenly obvious—Tuesday’s no can be May’s yes.',
  readTime: '9 min read',
  emoji: '✨',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve a pea-sized taste beside sure foods. Let kids touch, sniff, or lick without pressure to swallow. Aim for many gentle exposures—often ten to twenty—before deciding a food is a permanent no. Skip dessert-for-cleaning-the-plate loops that teach vegetables are the price of joy. For allergens, follow clinician protocols; this article is not a medical introduction plan.',
  intro:
    "Parents often think one brave bite should “work.” Kids think unknown food might be poison because that caution kept ancestors alive. Your job is to be the calm tour guide: “This is cucumber; it is cool and crunchy,” not the food police.\n\nIntroduction is not the same as acceptance. Seeing food on the table counts. Stirring a pot counts. Washing vegetables counts. Those steps shrink novelty before anyone swallows anything.\n\nWhen pressure drops, curiosity sometimes rises. When pressure rises, kids defend autonomy the only way they can—by refusing.",
  sections: [
    {
      heading: 'The low-pressure ladder',
      paragraphs: [
        'Start where the child is willing: presence in the room, on the plate, on a separate tasting dish, touched with a fork, smelled, licked. Each step is data for a nervous system learning what is safe.',
        'Keep portions tiny so refusal does not feel like rejecting a mountain. Praise curiosity, not compliance—praise can quietly become pressure.',
      ],
    },
    {
      heading: 'Cooking as exposure without swallowing drama',
      paragraphs: [
        'Washing snap peas, tearing lettuce, or brushing oil on roasting vegetables builds familiarity. Kids who help cook often try more eventually—not always tonight.',
      ],
      tip: 'Rotate preparations: roasted carrots tonight, raw matchsticks another day—same food, different sensory story.',
    },
    {
      heading: 'What to skip at the table',
      paragraphs: [
        'Cleaning the plate for dessert teaches that vegetables are obstacles between a child and joy. Separate moral value from food when you can.',
        'Comparisons—“your brother likes it”—usually increase shame, not appetite.',
      ],
    },
    {
      heading: 'Gagging, texture issues, and sensory sensitivity',
      paragraphs: [
        'Frequent gagging or extreme texture refusal may need occupational therapy evaluation. Slow down, cut smaller, try cooked vs raw, and avoid turning meals into endurance tests.',
      ],
    },
    {
      heading: 'School lunches and social pressure',
      paragraphs: [
        'Kids may try foods with peers they refuse at home—that is normal. Pack a safe base plus a small new item when you want gentle parallel exposure.',
      ],
    },
    {
      heading: 'Allergies: a different rulebook',
      paragraphs: [
        'Introducing allergens is a medical decision with timing and formats that change by guideline and child history. Follow your clinician’s plan, not a blog timeline.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Gagging?',
      a: 'Texture issues are real—slow down, try smaller pieces, or a different preparation (roasted vs raw). Seek help if gagging is frequent.',
    },
    {
      q: 'Allergies?',
      a: 'Follow clinician guidance for introducing allergens—this article is not a medical protocol.',
    },
    {
      q: 'How many tries?',
      a: 'Think in many low-stress exposures, not three strikes. Kids vary widely.',
    },
    {
      q: 'Should I reward tries?',
      a: 'Non-food rewards can still shift focus to performance; calm neutrality often ages better than sticker charts, though families differ.',
    },
  ],
  related: [
    { title: 'Why Kids Reject Vegetables', path: '/nutrition-science/why-kids-reject-vegetables' },
    { title: 'Why Kids Love Processed Foods', path: '/nutrition-science/why-kids-love-processed-foods' },
  ],
};

export default function HowToIntroduceNewFoodsToKids() {
  return <ScienceArticlePage spec={SPEC} />;
}
