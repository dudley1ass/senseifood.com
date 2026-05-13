import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-is-creamy',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Is Creamy',
  subtitle:
    'Creaminess is the feeling of countless tiny ice crystals, fat, and syrup moving together as one—not the absence of ice, but the absence of ice you can pick out one by one.',
  readTime: '7 min read',
  emoji: '🍨',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Creamy texture comes from keeping ice crystals small, surrounding them with fat and emulsified water, and folding in enough air to interrupt a solid wall of ice. Fast freezing at churn time, enough dairy fat, yolks or emulsifiers, sugar, and a calm hardening step all push the mix toward silky instead of gritty.',
  intro:
    'Your tongue is a texture detective. When ice cream feels creamy, you are mostly not noticing individual crystals—they are smaller than what your mouth resolves as crunch. When it feels icy or sandy, the population shifted toward bigger crystals or harder lactose bits. Creaminess is therefore a story about timing (how quickly water froze), composition (what was in the water’s way), and care afterward (temperature swings that let crystals merge). French custard bases, Philadelphia-style bases, and gelato all solve the puzzle differently, but they share the same goal: keep the ice phase fine enough that flavor and richness can lead.',
  sections: [
    {
      heading: 'Small crystals, smooth mouthfeel',
      paragraphs: [
        'Rapid churning freezes water while the dasher keeps breaking up large crystals that try to form. Slow freezing gives water time to find neighbors and stack neatly into big, toothy plates. That difference is more important than any single “secret ingredient.”',
      ],
    },
    {
      heading: 'Fat as flavor and interruptor',
      paragraphs: [
        'Fat globules sit between crystals and bubbles, slowing crystal growth and carrying dissolved flavor. Higher-fat mixes often read as more luxurious partly because that network is simply harder for heat to collapse quickly.',
      ],
    },
    {
      heading: 'Eggs, lecithin, and emulsified water',
      paragraphs: [
        'Yolks bring lecithin, which helps fat and water stay married instead of separating into greasy and icy layers. Custard-style bases trade a little freshness for a rounded, supple texture that holds well across temperatures.',
      ],
    },
    {
      heading: 'Sugar, syrup, and stabilizers',
      paragraphs: [
        'Sugar ties up water into syrup, so less of it freezes into hard ice at serving temperature. Stabilizers and starches bind free water on longer timelines, which matters for cartons that live in frost-free freezers with tiny warming cycles.',
      ],
      tip: 'If Philadelphia-style reads too icy for you, try a modest yolk bump or a touch of corn syrup in the next batch—not because either is magic, but because both change how water behaves in the cold.',
    },
    {
      heading: 'Serving warmth changes the story',
      paragraphs: [
        'Gelato is often served a few degrees warmer than hard-pack ice cream. That small shift makes fat and sugar feel softer on the tongue even when the underlying crystal work was similar. Temperature is part of texture, not a cheat.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When creaminess fights you, the culprit is usually solids balance or process. Logging grams alongside churn and hardening notes makes the next adjustment obvious instead of mystical.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does more fat always mean creamier?',
      a: 'Mostly, up to a point—fat blocks crystal growth and carries flavor. Past a certain richness, other issues (too much butterfat firmness, sweetness balance) can dominate, so taste as you adjust.',
    },
    {
      q: 'Why did my smooth batch turn grainy later?',
      a: 'Recrystallization: partial thaws let small crystals donate water to larger ones. Storage habits matter as much as the churn day.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
    { title: 'Why Ice Cream Tastes Icy', path: '/ice-cream-science/why-ice-cream-tastes-icy' },
  ],
};

export default function WhyIceCreamIsCreamy() {
  return <ScienceArticlePage spec={SPEC} />;
}
