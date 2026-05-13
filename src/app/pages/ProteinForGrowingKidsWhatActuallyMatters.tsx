import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'protein-for-growing-kids-what-actually-matters',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Protein for Growing Kids: What Actually Matters',
  subtitle:
    'In many wealthy countries, total protein grams look fine on paper while real life still wobbles: kids skip breakfast, graze on low-protein snacks, or fill up on ultraprocessed foods that vanish before fullness arrives. Parents worry about powders; kids care whether food tastes good and whether they are actually hungry for the next meal.',
  readTime: '9 min read',
  emoji: '🥛',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Spread protein through meals and snacks—milk, yogurt, eggs, beans, tofu, chicken, peanut butter—rather than dumping everything into dinner. Whole foods bring chewing, micronutrients, and steadier energy that powders can miss. Teen athletes and kids with allergies may need individualized targets from a pediatrician or dietitian; this article is the plain-language background, not a prescription.',
  intro:
    "Protein builds tissue, supports immune work, and helps meals feel satisfying. Growing bodies rebuild constantly between playground scrapes, growth spurts, and learning days that burn more fuel than adults remember.\n\nMost families do not need a spreadsheet. They need patterns: a real breakfast, snacks that include protein instead of only crackers, and dinners that are not mostly refined starch with a garnish of meat.\n\nVegetarian and vegan kids can thrive with legumes, soy, dairy if included, nuts where safe, and grains paired across the day. The story is sufficiency and variety, not one mythical “complete protein” bite at every second.",
  sections: [
    {
      heading: 'What growing bodies use protein for',
      paragraphs: [
        'Beyond muscles, protein supplies amino acids for enzymes, hormones, skin repair, and immune cells. That is why appetite can spike during growth spurts—your kid is not “broken,” they are building.',
      ],
    },
    {
      heading: 'Distribution beats one giant dinner',
      paragraphs: [
        'A huge steak at night cannot fully make up for toast-only mornings if overall intake is low or uneven. Breakfast and lunch anchors help school focus and after-school sports.',
      ],
      tip: 'If your child is “always hungry,” look at whether snacks are mostly air and starch—see the companion article on constant hunger.',
    },
    {
      heading: 'Practical snacks that count without measuring',
      paragraphs: [
        'Cheese sticks, hummus with crackers, edamame, yogurt with fruit, nut butter on apple slices, bean quesadillas, and leftover chicken pieces all stack grams quietly.',
      ],
    },
    {
      heading: 'Powders: when they help and when they distract',
      paragraphs: [
        'Shakes can help selective eaters, travel weeks, or very high needs, but they rarely replace the habit training of chewing real food. If a powder becomes the only strategy, ask why meals feel hard—not just how many grams fit in a scoop.',
      ],
    },
    {
      heading: 'Vegetarian patterns that work in real kitchens',
      paragraphs: [
        'Soy milk with cereal, lentil soup, tofu stir-fry, peanut butter sandwiches, and bean tacos all contribute. Combine legumes and grains across the day rather than obsessing about one magical pairing per bite.',
      ],
    },
    {
      heading: 'When to ask for professional numbers',
      paragraphs: [
        'Failure to thrive, heavy sports schedules, eating disorders, multiple allergies, or vegan diets in young children deserve individualized plans. Bring growth charts and a typical week of meals, not guilt.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Powder for athletes?',
      a: 'Food first; teen athletes with very high needs may use supplements with pediatric guidance—not social media stacks.',
    },
    {
      q: 'How much is enough?',
      a: 'Age bands exist in guidelines; your clinician can translate them for your child’s growth curve and appetite.',
    },
    {
      q: 'My kid hates meat.',
      a: 'Eggs, dairy, fish, soy, and beans can cover needs when portions are adequate.',
    },
    {
      q: 'Is too much protein dangerous?',
      a: 'Very high intakes are uncommon from food alone; medical conditions change the conversation—ask your pediatrician if you were told to restrict protein.',
    },
  ],
  related: [
    { title: 'Why Some Kids Are Always Hungry', path: '/nutrition-science/why-some-kids-are-always-hungry' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function ProteinForGrowingKidsWhatActuallyMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
