import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-fiber-helps-with-weight-control',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Fiber Helps With Weight Control',
  subtitle:
    'Weight is not only calories in versus out; it is also how full you feel per calorie and how steady your energy is between meals. Fiber raises the fullness dividend—especially with protein—because it slows digestion, adds chew time, and feeds gut microbes that participate in appetite signaling. Not a magic pill, but a steady everyday brake on graziness for many people.',
  readTime: '9 min read',
  emoji: '🌾',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Build plates around beans, lentils, oats, vegetables, fruit with skins, and whole grains. Increase fiber gradually with enough fluids so digestion stays comfortable. Whole foods bring micronutrients and chewing; supplements are a patch, not the foundation. Pair fiber upgrades with protein anchors so Tuesday afternoon stops feeling like a vending machine emergency.',
  intro:
    "Fiber is the quiet mechanic of many “I feel better on this plan” stories. It thickens the stomach contents, slows starch reaching enzymes, and often softens glucose swings that can trigger rebound hunger.\n\nFiber-rich foods also tend to take more bites—oral processing time gives your brain a chance to notice fullness before you have overshot.\n\nThis article stays practical: beans in soup, an extra vegetable at dinner, berries with yogurt. Ramp slowly so your gut adjusts kindly.",
  sections: [
    {
      heading: 'Viscous fiber and slower glucose curves',
      paragraphs: [
        'Soluble fibers dissolve into gels that increase chyme viscosity—scientist words for “the stomach mix gets thicker.” That often means gentler rises in blood glucose after meals for many people, especially when paired with protein and fat.',
      ],
    },
    {
      heading: 'Volume, chewing, and the clock in your head',
      paragraphs: [
        'High-fiber meals often require more chewing, which stretches meal duration and gives satiety signals time to arrive. That is why the same calories can feel different wrapped in salad and beans versus swallowed quickly as crackers.',
      ],
    },
    {
      heading: 'Colonic fermentation is part of the appetite story',
      paragraphs: [
        'Some fiber feeds bacteria that produce short-chain fatty acids—small molecules researchers study for how they talk to appetite and inflammation networks. The kitchen takeaway is simpler: whole plants behave differently than purified sugar.',
      ],
      tip: 'Raise fiber slowly and drink fluids; sudden jumps surprise your gut with gas and bloating.',
    },
    {
      heading: 'Fiber plus protein: the practical pair',
      paragraphs: [
        'Either alone helps; together they often feel steadier for busy afternoons than either alone. Think lentil soup with chicken, beans with eggs, oats with yogurt.',
      ],
    },
    {
      heading: 'Supplements versus food patterns',
      paragraphs: [
        'Psyllium and similar products can help some people, but they do not recreate the full cast of whole plants—polyphenols, minerals, and chewing time still matter for long-term habits.',
      ],
    },
    {
      heading: 'Medical conditions that change fiber advice',
      paragraphs: [
        'IBD flares, strictures, and some GI surgeries change what fiber is safe. Personalize with clinicians rather than pushing through pain to hit a gram target.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Supplements instead of food?',
      a: 'Whole foods bring micronutrients and chewing; supplements are a patch, not the foundation.',
    },
    {
      q: 'Gas when increasing fiber?',
      a: 'Ramp slowly and drink fluids—smaller bean portions, longer cooking, rinsing canned beans can help.',
    },
    {
      q: 'Juice with pulp?',
      a: 'Still usually faster than whole fruit for many people—chewing and cell walls matter.',
    },
    {
      q: 'Keto and fiber?',
      a: 'Low-carb plans still include some fiber from vegetables and nuts; goals differ—follow your care plan.',
    },
  ],
  related: [
    { title: 'Why Fiber Matters for Blood Sugar', path: '/nutrition-science/why-fiber-matters-for-blood-sugar' },
    { title: 'Why High-Protein Diets Feel Easier', path: '/nutrition-science/why-high-protein-diets-feel-easier' },
  ],
};

export default function WhyFiberHelpsWithWeightControl() {
  return <ScienceArticlePage spec={SPEC} />;
}
