import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-portion-sizes-have-changed-so-much',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Portion Sizes Have Changed So Much',
  subtitle:
    'Plates grew, soda cups turned into buckets, and value menus trained eyes to call “normal” what used to be a feast. Your eyes set expectations about fullness before your stomach finishes its report—so the same calories can feel like “not enough” when the plate still looks empty.',
  readTime: '9 min read',
  emoji: '📏',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Use smaller plates at home sometimes, split restaurant entrees, and pour drinks into glasses so size is visible. Relearn hunger with gentle check-ins for a few weeks—not punishment. Teach kids portion talk with clinician guidance; growing bodies are not miniature adult diets. Pair caloric drinks with food that chews so satiety cues keep up.',
  intro:
    "Restaurants compete on perceived generosity; bigger piles feel like better value. At home, cereal bowls and drinking glasses quietly drift too. Packaging shrinks or swells while prices change—your hands stop being a reliable measuring cup.\n\nNone of this means you must weigh every bite forever. It means awareness is a boring and effective tool: half to go by default, starter-sized mains, or family-style serving so seconds are a choice.\n\nPortion creep is also a social story—second helpings offered as love, clean plates praised as politeness. Unwinding those habits takes kindness, not shame.",
  sections: [
    {
      heading: 'Visual anchors and the “empty plate” reflex',
      paragraphs: [
        'People stop eating partly because the plate looks finished—even when energy needs vary. Same meal on a smaller plate can feel satisfying sooner for some people because the eyes register completion.',
      ],
    },
    {
      heading: 'Restaurant math versus home math',
      paragraphs: [
        'Appetizers became entrees; bread baskets became bottomless; fries became buckets. Splitting, boxing early, and choosing veg sides are practical defenses that still let you enjoy dining out.',
      ],
      tip: 'Box half when the plate arrives if you know portions run huge—eyes fight less when the mountain disappears early.',
    },
    {
      heading: 'Liquid calories hide in tall cups',
      paragraphs: [
        'Smoothie bar sizes and dessert coffees can match a meal’s energy without chewing cues. Pouring into a visible glass often changes how much disappears while distracted.',
      ],
    },
    {
      heading: 'Packaging psychology at the grocery store',
      paragraphs: [
        '“Family size” chips and cereal boxes reset what a serving looks like on the couch. Pre-portioning bowls beats trusting autopilot while scrolling.',
      ],
    },
    {
      heading: 'Kids, growth, and different rules',
      paragraphs: [
        'Children need energy for growth; adult portion anxiety should not become their soundtrack. Pediatricians read growth charts—use them instead of internet fear.',
      ],
    },
    {
      heading: 'When tracking helps and when it hurts',
      paragraphs: [
        'Photos, simple notes, or a week of gentle awareness can reset habits. If tracking spikes anxiety or obsessive thoughts, stop and get support—numbers are a tool, not a score of worth.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should I weigh everything?',
      a: 'Optional—many people reset habits with plate photos or “half to go” defaults without a scale forever.',
    },
    {
      q: 'Kids and growth?',
      a: 'Children need energy for growth—portion talk for kids should stay clinician-guided.',
    },
    {
      q: 'Are smaller plates a trick?',
      a: 'They are a gentle visual nudge—useful for some, not magic for all.',
    },
    {
      q: 'Buffets?',
      a: 'Use one plate rule, start with vegetables and protein, and remember boredom eating is common—social breaks help.',
    },
  ],
  related: [
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
    { title: 'Why Liquid Calories Don’t Feel Filling', path: '/nutrition-science/why-liquid-calories-dont-feel-filling' },
  ],
};

export default function WhyPortionSizesHaveChangedSoMuch() {
  return <ScienceArticlePage spec={SPEC} />;
}
