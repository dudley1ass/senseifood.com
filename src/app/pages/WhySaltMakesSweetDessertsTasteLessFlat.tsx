import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-salt-makes-sweet-desserts-taste-less-flat',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Food chemistry',
  title: 'Why Salt Makes Sweet Desserts Taste Less Flat',
  subtitle:
    'A pinch of salt suppresses bitterness, lifts volatile aromas, and increases perceived contrast so sugar reads brighter and caramel tastes “deeper” without always needing more sugar.',
  readTime: '8 min read',
  emoji: '🧂',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Sweetness is not one note—it sits next to bitter, sour, and aromatic background. Salt reduces some bitter edges (especially in chocolate and browned butter), helps volatile molecules smell stronger, and sharpens overall flavor balance so the dessert tastes more dimensional. That is chemistry and perception, not “salt equals sweet.”',
  intro:
    'Bakers know salt as “flavor” more than “savory.” This article explains the mechanisms in plain language: suppression of bitter pathways, aroma enhancement, and how our brains integrate contrast. It pairs well with fried-food chemistry (salt + fat + browning) and with the human-appetite series on cravings—because the same sensory rules show up in engineered snacks and in a good tart.',
  sections: [
    {
      heading: 'Bitterness suppression changes the whole chord',
      paragraphs: [
        'Cocoa contains bitter polyphenols; salt can make the bitter band less dominant so fruity and roasty notes read louder. That is why unsalted chocolate desserts can taste oddly flat until a tiny salt correction appears—even when the sugar grams did not change much.',
      ],
    },
    {
      heading: 'Aroma volatility and “smells stronger”',
      paragraphs: [
        'Salt influences how some volatiles partition between food and air; small changes can increase what reaches your nose retro-nasally. Since flavor is smell + taste + touch, aroma lifts read like “more flavor,” not just “more salt.”',
      ],
    },
    {
      heading: 'Contrast and adaptation',
      paragraphs: [
        'Sensory adaptation makes a single loud note boring faster. Salt adds a counterpoint so sweetness peaks feel sharper and less one-dimensional—similar to why a tiny acid squeeze lifts fruit desserts.',
      ],
    },
    {
      heading: 'Practical kitchen guardrails',
      paragraphs: [
        'Add salt in small steps—especially in custards and caramel where concentration spikes as water leaves. If you are reducing sugar for health reasons, salt and acid are honest tools for maintaining interest, but they do not erase calories from butter and cream.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much salt is “a pinch”?',
      a: 'Depends on batch size; taste in stages. If you can taste salt first, you crossed the line for that dessert style.',
    },
    {
      q: 'Does this work for savory food too?',
      a: 'Yes—salt is a general amplifier and balancer; desserts are just a surprising classroom for the same rule.',
    },
  ],
  related: [
    { title: 'Why Fried Food Tastes So Good to Human Brains', path: '/nutrition-science/why-fried-food-tastes-so-good-to-human-brains' },
    { title: 'Brown Sugar vs White Sugar', path: '/cookie-science/brown-sugar-vs-white-sugar' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhySaltMakesSweetDessertsTasteLessFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
