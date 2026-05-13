import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-loses-air-overrun-collapse',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Loses Air (Overrun Collapse)',
  subtitle:
    'Air folded in during churn is part of the dessert—when bubbles pop or merge on the way to the freezer, the pint feels heavy and scoops without bounce.',
  readTime: '8 min read',
  emoji: '💨',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Bubbles only stay if the mix thickens around them in time. Draw too warm, churn too long, start with a thin base, or let the carton warm on the counter and air slips away during hardening. Match machine cues, rest the base so gums hydrate, pack shallow, and get the pint cold fast.',
  intro:
    'Think of churning as blowing bubbles into syrup. If the syrup is still watery, the films break. If you stop while everything is too warm, bubbles merge on the way to the shelf. If the freezer takes its time, crystals rearrange and the walls between bubbles collapse. Dense gelato is a choice; a sunken, weepy pint is usually an accident. This article separates the two.',
  sections: [
    {
      heading: 'Stop churn at the right body, not the clock',
      paragraphs: [
        'You want soft-serve that holds a curl—not soup, not butter on the dasher. Too early and watery phase lets air escape; too late and friction warms and knocks down what you built.',
      ],
    },
    {
      heading: 'Thicken the story before the machine',
      paragraphs: [
        'Overnight rest lets sugar, protein, and any stabilizers fully hydrate so the base pours like cream, not skim milk. Thin continuous phases cannot hold foam.',
      ],
      tip: 'If the base runs like milk, fix that before you chase longer churn times.',
    },
    {
      heading: 'Hardening is the second half of churn',
      paragraphs: [
        'Moving quickly to a cold, stable spot with little headspace locks small crystals around the bubbles. Slow or uneven freezing lets walls drain and whey puddles appear.',
      ],
    },
    {
      heading: 'Collapse versus “meant to be dense”',
      paragraphs: [
        'Some styles carry less air on purpose and still feel silky. Collapse shows up as a sunk top, watery sheen, or a brick that used to look fluffy. If only boozy or acidic flavors fail, suspect those ingredients moved the freezing curve.',
      ],
    },
    {
      heading: 'Containers and do-overs',
      paragraphs: [
        'Wide shallow tubs freeze faster than skinny towers, preserving bubble distribution. Re-churning melted pints rarely matches the first pass—fresh base is kinder to your guests.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is less air always bad?',
      a: 'No—dense custard styles exist. Fix unintended collapse: sunk surface, whey, or chalky dryness that was not there at draw.',
    },
    {
      q: 'Does bowl freeze matter?',
      a: 'Yes. A soft insert means long churns, warm mix, and sad bubbles. Freeze inserts rock solid.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Is Too Soft', path: '/ice-cream-science/why-ice-cream-is-too-soft' },
    { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
};

export default function WhyIceCreamLosesAirOverrunCollapse() {
  return <ScienceArticlePage spec={SPEC} />;
}
