import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'best-foods-for-healthy-aging',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Best Foods for Healthy Aging',
  subtitle:
    'There is no single berry that erases decades. Healthy aging on a plate looks more like rotation: enough protein to protect muscle, enough fiber for steady digestion and blood sugar, enough color for the messy family of plant compounds we shorthand as “antioxidants,” and enough fat for satisfaction so the pattern survives Wednesday.',
  readTime: '9 min read',
  emoji: '🥗',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Build weeks around fish or beans several times, leafy greens most days, yogurt or other fermented dairy if you tolerate it, nuts for crunch, olive oil for cooking, and berries when you can. Frozen and canned count as real food. If chewing, budget, or access is tight, prioritize any vegetables and proteins you will actually eat over a perfect Instagram bowl.',
  intro:
    "“Best foods” lists often sound like a moral ranking. In real kitchens, the best food is the one that gets eaten, repeated, and paid for without stress. Aging rewards consistency: blood vessels, bones, muscles, and brains all respond to years of small choices more than one heroic January.\n\nThis article keeps the science flavor without turning your grocery list into homework. Think categories, not superfoods: protein anchors, fiber carriers, colorful plants, fats that make meals feel like meals, and enough fluid for everything to move comfortably.\n\nIf you track one thing for a month, track protein plus plants—not because other nutrients do not matter, because those two pillars quietly support independence, energy, and the boring daily wins that make life feel doable.",
  sections: [
    {
      heading: 'Protein and muscle: the independence nutrient',
      paragraphs: [
        'Muscle is not vanity; it is how you carry groceries, recover from illness, and keep blood sugar steadier after meals. Dairy, eggs, fish, poultry, soy, and legumes all deliver amino acids; choose textures that match your teeth and your budget.',
        'Spreading protein through the day tends to beat one giant dinner for many older adults, especially when appetite is smaller.',
      ],
    },
    {
      heading: 'Fiber: the quiet mechanic of digestion and fullness',
      paragraphs: [
        'Beans, lentils, oats, vegetables, fruits with skins, and whole grains add bulk and slow digestion in helpful ways. Raise fiber gradually and drink enough fluid so your gut adjusts kindly.',
      ],
      tip: 'If beans cause gas at first, smaller portions, rinsing canned beans, and longer cooking often help more than quitting entirely.',
    },
    {
      heading: 'Color: not decoration, part of the package',
      paragraphs: [
        'Deep greens, berries, tomatoes, peppers, citrus, and herbs bring polyphenols and carotenoids alongside vitamins. Frozen produce is often picked ripe and keeps well—sometimes it beats sad “fresh” wilting in the drawer.',
      ],
    },
    {
      heading: 'Fats that make food worth eating again',
      paragraphs: [
        'Olive oil, nuts, seeds, avocado, and fatty fish bring flavor and help fat-soluble vitamins absorb. Fear of fat sometimes pushes people toward refined starch snacks that spike and crash energy.',
      ],
    },
    {
      heading: 'Budget, teeth, and dignity',
      paragraphs: [
        'Canned fish, eggs, peanut butter, lentils, cabbage, carrots, and bananas are unsung workhorses. Soft stews respect sore jaws; citrus and herbs brighten lower-sodium cooking so food still tastes like home.',
      ],
    },
    {
      heading: 'Supplements versus food-first habits',
      paragraphs: [
        'Vitamin D, B12, and calcium sometimes show up as supplements for documented gaps—those decisions belong with labs and clinicians. Food-first patterns still cover most people most days without a pill organizer takeover.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do I need expensive superfoods?',
      a: 'Rarely. Consistent ordinary foods beat exotic powders that sit in the pantry because nobody liked the taste.',
    },
    {
      q: 'Is salt always the enemy?',
      a: 'Some people need less for blood pressure; others lose appetite when food tastes flat. Personalize with guidance rather than internet absolutes.',
    },
    {
      q: 'Is red meat bad?',
      a: 'Portions and patterns matter more than moral categories. Lean cuts alongside beans and vegetables fit many tables; ultra-processed meat every day is a different conversation.',
    },
    {
      q: 'What about anti-inflammatory diets?',
      a: 'Olive oil, fish, nuts, vegetables, and whole grains are common themes. The useful version is practical meals you repeat, not a perfect score.',
    },
  ],
  related: [
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
    { title: 'Cooking for Aging Parents: Nutrition That Matters', path: '/nutrition-science/cooking-for-aging-parents-nutrition-that-matters' },
  ],
};

export default function BestFoodsForHealthyAging() {
  return <ScienceArticlePage spec={SPEC} />;
}
