import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-liquid-calories-dont-feel-filling',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: "Why Liquid Calories Don't Feel Filling",
  subtitle:
    'Drinks slip past chewing, stomach stretch cues, and the time your brain expects for a meal—so the same calories can vanish while hunger knocks again soon. Juice, soda, and creamy coffee count as energy even when they do not feel like eating. That mismatch is not moral failure; it is how satiety signals evolved for solid food and slower meals.',
  readTime: '9 min read',
  emoji: '🥤',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pour caloric drinks into visible glasses, add protein and oats to smoothies, and treat fancy coffee like dessert in your head. Chew something—even an apple—alongside sweet tea so oral processing time exists. Alcohol lowers inhibitions around seconds and blurs memory of nibbling; plan portions earlier if that pattern shows up.',
  intro:
    "Liquid calories are sneaky because they do not always trigger the same fullness orchestra: chewing, stomach distension timing, and the social pace of a plate meal.\n\nBlenders and coffee shops also sell sizes that would look enormous if you tried to eat them as food. Your eyes stop being a reliable calorie gauge when the cup is tall and dark.\n\nThis article offers practical swaps without banning joy—visibility, smaller cups, and smoothies built like meals instead of juice.",
  sections: [
    {
      heading: 'Chewing matters to the brain’s meal clock',
      paragraphs: [
        'Oral processing time helps your brain register that eating happened. Liquids clear the stomach faster and often skip the long chew track, so the “I ate” memo arrives quietly.',
      ],
    },
    {
      heading: 'Gastric stretch and the difference between gulp and bite',
      paragraphs: [
        'Solid food plus fiber holds volume longer in many cases; thin liquids leave quickly. That is why soup with beans and vegetables can feel more like dinner than the same calories as soda.',
      ],
    },
    {
      heading: 'Practical swaps that keep flavor',
      paragraphs: [
        'Sparkling water with citrus, smaller drink sizes, splitting shakes, or diluting juice can reduce silent stacking. Pouring into a short wide glass sometimes makes portions feel more honest than a tall skinny cup.',
      ],
      tip: 'If you love smoothies, add yogurt, nut butter, oats, or tofu so they behave more like meals than juice with a banana.',
    },
    {
      heading: 'Coffee shop desserts wearing a hat',
      paragraphs: [
        'Whipped cream, flavored syrups, and drizzles add up fast. Treating them as dessert helps expectations match calories.',
      ],
    },
    {
      heading: 'Alcohol’s double bill',
      paragraphs: [
        'Alcohol carries calories and often increases appetite while lowering inhibitions—another reason “liquid calories” can show up on the scale without feeling like meals.',
      ],
    },
    {
      heading: 'Sports drinks and true dehydration',
      paragraphs: [
        'Heavy sweating may justify sugar-electrolyte drinks sometimes; everyday sipping is a different category than a two-hour summer practice.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Are smoothies bad?',
      a: 'No—build them with protein, fiber, and enough volume to chew time if you can; sip slowly.',
    },
    {
      q: 'Diet soda?',
      a: 'Zero calories behave differently; some people drink more water overall, some find sweetness affects cravings—personal pattern matters.',
    },
    {
      q: 'Meal replacement shakes?',
      a: 'Useful bridges for some; chewing real food still trains long-term habits for most people.',
    },
    {
      q: 'Hydration powders?',
      a: 'Read labels for sugar; some are basically sports drinks.',
    },
  ],
  related: [
    { title: 'Why Portion Sizes Have Changed So Much', path: '/nutrition-science/why-portion-sizes-have-changed-so-much' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhyLiquidCaloriesDontFeelFilling() {
  return <ScienceArticlePage spec={SPEC} />;
}
