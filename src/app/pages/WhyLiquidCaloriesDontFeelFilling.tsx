import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-liquid-calories-dont-feel-filling',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: "Why Liquid Calories Don't Feel Filling",
  subtitle:
    'Drinks slip past chewing, stomach stretch cues, and the time your brain expects for a meal—so the same calories can vanish while hunger knocks again soon.',
  readTime: '6 min read',
  emoji: '🥤',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pour caloric drinks into visible glasses, add protein to smoothies, and treat fancy coffee like dessert. Chew something—even an apple—alongside sweet tea.',
  intro:
    'Juice, soda, and creamy coffee count as energy even when they do not feel like “eating.” That mismatch is not moral failure; it is how satiety signals were built for solid food.',
  sections: [
    {
      heading: 'Chewing matters to the brain',
      paragraphs: [
        'Oral processing time helps your brain register a meal. Liquids clear faster and often skip that clock.',
      ],
    },
    {
      heading: 'Practical swaps',
      paragraphs: [
        'Sparkling water with citrus, smaller drink sizes, or splitting shakes can keep joy without silent calorie stacking.',
      ],
    },
  ],
  faqs: [
    { q: 'Are smoothies bad?', a: 'No—add yogurt, nut butter, or oats so they behave more like meals than juice.' },
    { q: 'Alcohol?', a: 'It lowers inhibitions around food too—another reason liquid calories sneak.' },
  ],
  related: [
    { title: 'Why Portion Sizes Have Changed So Much', path: '/nutrition-science/why-portion-sizes-have-changed-so-much' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhyLiquidCaloriesDontFeelFilling() {
  return <ScienceArticlePage spec={SPEC} />;
}
