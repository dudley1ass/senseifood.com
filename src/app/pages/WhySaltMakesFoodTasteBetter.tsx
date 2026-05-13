import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-salt-makes-food-taste-better',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Why Salt Makes Food Taste Better',
  subtitle:
    'At the right level, salt is less about tasting "salty" and more about turning down background bitterness so sweetness, aroma, and savoriness can step forward.',
  readTime: '8 min read',
  emoji: '🧂',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Salt suppresses bitter notes that otherwise flatten a dish, helps volatile aromas lift into the air where you can smell them, and in baking it steadies yeast and strengthens gluten in bread doughs. Under-salted desserts often read as one-dimensional not because sugar is missing, but because bitterness never got out of the way.',
  intro:
    'Most people reach for salt when food tastes flat. The interesting part is why flat happens: many ingredients carry a little bitterness from plant chemistry, browning, or cocoa. Salt quiets that channel on the tongue so sugar seems brighter and chocolate deeper. In bread, salt tightens gluten and reins in yeast so fermentation stays flavorful instead of racing. In pasta water, salt seasons from within. None of this requires restaurant-sized pinches everywhere—it asks for enough that the other ingredients sound like themselves.',
  sections: [
    {
      heading: 'Bitterness is the volume knob hiding halfway down',
      paragraphs: [
        'A tiny background bitter note can make sweetness feel muted and chocolate taste muddy. Salt lowers that interference so the flavors you meant to highlight actually arrive. That is why a pinch in caramel or brownie batter reads as "more complex" rather than overtly salty.',
      ],
    },
    {
      heading: 'Aroma rides on salt, too',
      paragraphs: [
        'Salt shifts how water holds onto aromatic molecules, which changes what reaches your nose. Since smell is most of what we call taste, the same cookie dough can feel bigger after a modest salt correction even when sugar stayed constant.',
      ],
    },
    {
      heading: 'Texture roles you can feel',
      paragraphs: [
        'In meat and vegetables, salt pulls and rebinds moisture in ways that change bite. In bread dough, it strengthens the gluten network so loaves hold gas more evenly. In cheese sauces, it balances richness so dairy does not coat the tongue as heaviness alone.',
      ],
    },
    {
      heading: 'Crystal size is a measuring story',
      paragraphs: [
        'Table, kosher, and flake salts are still mostly sodium chloride; they differ in density and dissolve speed. A teaspoon of fine salt is not interchangeable by volume with a teaspoon of fluffy kosher salt. When precision matters, grams beat spoons.',
      ],
      tip: 'If a bake tastes sweet but dull, try a very small salt bump before you add more sugar—the first often solves the second.',
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When ratios look sane but flavor feels closed, the debugger often nudges you back to fundamentals—measurement, temperature, and seasoning—before rewriting the whole formula.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does restaurant food taste brighter?',
      a: 'Chefs season in layers throughout cooking, so bitterness is managed early and aromas read clean. It is not only "more salt"—it is salt in the right places.',
    },
    {
      q: 'Can you oversalt baking?',
      a: 'Yes. High salt can slow yeast aggressively and read harsh in delicate sponges. Move in small increments and taste raw batters only when that is safe for your ingredients.',
    },
  ],
  related: [
    { title: 'Why Cookies Taste Bland', path: '/cookie-science/why-cookies-taste-bland' },
    { title: 'Why Cookies Brown', path: '/cookie-science/why-cookies-brown' },
    { title: 'Why Eggs Matter in Baking', path: '/baking-science/why-eggs-matter-in-baking' },
  ],
};

export default function WhySaltMakesFoodTasteBetter() {
  return <ScienceArticlePage spec={SPEC} />;
}
