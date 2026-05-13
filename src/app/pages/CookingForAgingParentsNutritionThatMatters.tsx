import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'cooking-for-aging-parents-nutrition-that-matters',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Cooking for Aging Parents: Nutrition That Matters',
  subtitle:
    'Prioritize protein they will actually eat, fluids that taste good, textures that respect dental pain, and joy—food is care, not only grams. Aging shifts taste, thirst, chewing, and sometimes interest in cooking. The goal is steady nourishment without turning dinner into a lecture or making loved ones feel managed instead of fed.',
  readTime: '9 min read',
  emoji: '👵',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve smaller portions more often if appetite is low; fortify soups with lentils or shredded chicken; keep hydration visible with cups they like and flavors they enjoy. Involve parents in choices so meals feel dignified—this bowl or that soup, lunch now or in an hour. Unintentional weight loss or swallowing trouble needs medical evaluation, not only kitchen tweaks.',
  intro:
    "Cooking for parents is emotionally loaded. You want them safe, strong, and happy; they want autonomy, familiar flavors, and not to be treated like a child. Nutrition advice that ignores dignity gets ignored at the table.\n\nPractically, independence often lives in muscle, hydration, and bone health—supported by protein, fluids, vitamin D and calcium patterns your clinician may already be tracking, and meals that do not hurt to chew.\n\nSmall upgrades—softer cuts, brighter seasoning within sodium guidance, favorite bowls—often beat “healthier” swaps nobody eats.",
  sections: [
    {
      heading: 'Protein and strength: the quiet independence nutrient',
      paragraphs: [
        'Muscle protects stairs, recovery from illness, and blood sugar steadiness. If steak is tiring, fish, eggs, tofu, yogurt, and bean soups that reheat well still move the needle.',
      ],
    },
    {
      heading: 'Hydration as a routine, not a lecture',
      paragraphs: [
        'Pill schedules are natural water anchors. Broth, fruit, tea, and milk count—especially when plain water feels boring. Thirst cues can soften with age, so cups where parents sit matter.',
      ],
    },
    {
      heading: 'Texture, dental pain, and dignity',
      paragraphs: [
        'Ground meats, stews, flaky fish, and saucy dishes respect sore jaws better than dry cuts. Dentures and oral health belong in the plan—pain quietly removes vegetables.',
      ],
      tip: 'If salt must be limited, citrus, herbs, and garlic build flavor without making food taste like punishment.',
    },
    {
      heading: 'Medications that change taste or appetite',
      paragraphs: [
        'Dry mouth, metallic tastes, and nausea can all shrink intake. Pharmacists and clinicians sometimes adjust timing or alternatives—worth asking when food suddenly changed.',
      ],
    },
    {
      heading: 'Swallowing safety is not stubbornness',
      paragraphs: [
        'Coughing with liquids, pocketing food, or fear of choking needs speech therapy evaluation. Texture modifications are safety tools, not insults.',
      ],
    },
    {
      heading: 'When weight loss is a red flag',
      paragraphs: [
        'Unintentional loss deserves medical evaluation—do not “just add cream” without understanding causes like malabsorption, thyroid shifts, depression, or undiagnosed illness.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Swallowing trouble?',
      a: 'Speech therapists evaluate dysphagia—texture changes are safety issues, not stubbornness.',
    },
    {
      q: 'Weight loss?',
      a: 'Unintentional loss needs medical evaluation—do not treat it as only a food quantity problem.',
    },
    {
      q: 'They only want sweets.',
      a: 'Sweet preference rises when smell dulls; still offer protein anchors and hydrate—clinicians can help sort causes.',
    },
    {
      q: 'Supplement drinks?',
      a: 'Useful bridges for some; food culture and chewing still matter for long-term quality of life.',
    },
  ],
  related: [
    { title: 'Easy High-Protein Meals for Older Adults', path: '/nutrition-science/easy-high-protein-meals-for-older-adults' },
    { title: 'Why Hydration Gets Harder With Age', path: '/nutrition-science/why-hydration-gets-harder-with-age' },
  ],
};

export default function CookingForAgingParentsNutritionThatMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
