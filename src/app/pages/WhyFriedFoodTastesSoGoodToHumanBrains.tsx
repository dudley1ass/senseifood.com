import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-fried-food-tastes-so-good-to-human-brains',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Food chemistry',
  title: 'Why Fried Food Tastes So Good to Human Brains',
  subtitle:
    'Hot oil drives Maillard browning, rapid dehydration at the surface, and a crispy–moist contrast while fat carries aroma compounds straight to your nose before you even finish chewing.',
  readTime: '9 min read',
  emoji: '🍟',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Frying is a bundle of pleasures: high heat creates roasty, nutty, savory notes; the crust fractures in your mouth while the interior stays steamy; fat dissolves and releases fat-soluble flavor molecules; salt amplifies everything. Your brain reads that combo as high-value calories with low delay—exactly the signal ancient environments rewarded.',
  intro:
    'This is not a sermon against fries. It is a chemistry-and-perception tour: Maillard pathways vs caramelization, why acoustics of crunch matter for liking, how salt suppresses bitterness and lifts aroma volatility, and why “just one” is a predictable fight when contrast + aroma + calorie density line up. If you understand the levers, you can also appreciate why oven-baked “fries” can be delicious but rarely identical without engineering the heat and surface water story.',
  sections: [
    {
      heading: 'Maillard browning: new flavor from heat',
      paragraphs: [
        'Amino acids and reducing sugars rearrange and fragment under high dry heat, producing hundreds of aroma-active molecules—many savory, roasty, and meaty even in plant foods. Frying accelerates surface dehydration so those reactions happen fast while the interior can stay moist, giving you a two-texture bite that plain boiling rarely matches.',
      ],
    },
    {
      heading: 'Fat is a flavor bus and a mouthfeel engine',
      paragraphs: [
        'Many aroma compounds are fat-soluble; hot oil strips them from the surface and carries them retro-nasally (nose-from-the-back-of-your-throat), which reads as “more flavor.” Fat also lubricates, coats the tongue, and changes how quickly flavor peaks and fades—often making each bite feel rich and complete.',
      ],
    },
    {
      heading: 'Crunch is not vanity—it is a timing cue',
      paragraphs: [
        'Humans like predictable fracture sounds; crispness signals freshness in some foods and adds sensory contrast right before a soft interior. That contrast is a neat trick for liking even before you talk about salt.',
      ],
    },
    {
      heading: 'Salt, umami boosters, and the “can’t stop” loop',
      paragraphs: [
        'Salt amplifies volatile aromas, suppresses bitterness, and increases perceived intensity—so fries rarely feel “flat.” In packaged snacks, salt–fat–starch synergy is tuned aggressively. Home frying can be gentler, but the physics still explains why it is a birthday-treat magnet.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is air-frying “the same”?',
      a: 'Air fryers can create crispness with less oil by blasting hot air, but heat transfer and oil contact differ—similar family, not identical chemistry.',
    },
    {
      q: 'Does this mean frying is “bad”?',
      a: 'Nutrition context matters for you—this article explains liking mechanisms, not moral labels.',
    },
  ],
  related: [
    { title: 'Why Salt Makes Sweet Desserts Taste Less Flat', path: '/nutrition-science/why-salt-makes-sweet-desserts-taste-less-flat' },
    { title: 'Why Humans Crave Junk Food More Than Vegetables', path: '/nutrition-science/why-humans-crave-junk-food-more-than-vegetables' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhyFriedFoodTastesSoGoodToHumanBrains() {
  return <ScienceArticlePage spec={SPEC} />;
}
