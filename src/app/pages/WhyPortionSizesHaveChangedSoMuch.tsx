import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-portion-sizes-have-changed-so-much',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Portion Sizes Have Changed So Much',
  subtitle:
    'Plates grew, drinks went from 8 oz to buckets, and value menus trained eyes to call “normal” what used to be a feast—your eyes set fullness before your stomach speaks.',
  readTime: '6 min read',
  emoji: '📏',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Use smaller plates at home, split restaurant entrees, and pour drinks into glasses so size is visible. Relearn hunger with a few weeks of gentle check-ins, not punishment.',
  intro:
    'Restaurants compete on perceived value; bigger piles feel generous. At home, cereal bowls and drinking glasses quietly drift too. Awareness is boring and effective.',
  sections: [
    {
      heading: 'Visual anchors matter',
      paragraphs: [
        'People stop eating partly because the plate looks empty—same calories on a smaller plate can feel satisfying sooner.',
      ],
    },
    {
      heading: 'Liquid calories hide',
      paragraphs: [
        'Smoothie bar sizes and coffee desserts can match a meal’s energy without chewing cues.',
      ],
    },
  ],
  faqs: [
    { q: 'Should I weigh everything?', a: 'Optional—many people reset habits with plate photos or simple “half to go” defaults.' },
    { q: 'Kids and growth?', a: 'Children need energy for growth—portion talk for kids should stay clinician-guided.' },
  ],
  related: [
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
    { title: 'Why Liquid Calories Don’t Feel Filling', path: '/nutrition-science/why-liquid-calories-dont-feel-filling' },
  ],
};

export default function WhyPortionSizesHaveChangedSoMuch() {
  return <ScienceArticlePage spec={SPEC} />;
}
