import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-tastes-better-after-resting-overnight',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Tastes Better After Resting Overnight',
  subtitle:
    'A night in the fridge lets gums and proteins finish drinking up water, flavors mingle with fat instead of sitting on top of it, and the hardened pint tempers into a calmer bite.',
  readTime: '7 min read',
  emoji: '✨',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Resting the cooked base is mostly patience: powders fully hydrate, the mix thickens evenly, and aromatics settle between water and fat so they arrive together on the tongue. Churning the same day still works, but skipping the rest often means a louder, rougher first scoop. Hardening afterward finishes smoothing the texture cold can hide.',
  intro:
    '“Let it sit overnight” sounds like chef folklore; it is really just slow kitchen work finishing while you sleep. Gums and starches keep thickening in the cold, yolk emulsion steadies, and vanilla stops shouting over the dairy. The warm pot always lies a little about sweetness—cold dulls sugar perception—so the rested, frozen taste is the honest audition. Split a batch once: churn half the day you cook and half after a night in the fridge; same draw, same freezer, and your notes will write themselves.',
  sections: [
    {
      heading: 'Hydration is the unsung hero',
      paragraphs: [
        'Proteins and stabilizers keep soaking after the heat is off. A base that looked smooth hot can still harbor tiny lumps that would become chalk in the pint. Straining after the rest catches those before the dasher does.',
      ],
    },
    {
      heading: 'Flavor knits while the bowl is quiet',
      paragraphs: [
        'Aromas shuffle between fat and water overnight, so the first bite feels rounder instead of peaky. That is why vanilla can read “fine” hot and “complete” cold after a rest.',
      ],
    },
    {
      heading: 'Hardening is part of the flavor story',
      paragraphs: [
        'Fresh off the machine, cold suppresses subtle notes and overrun can temporarily soften sweetness. A proper freeze rounds ice and sugar so the scoop tastes like one dessert, not a stack of parts.',
      ],
      tip: 'Taste for final sugar after the base is cold, not only off the stove—small salt tweaks belong here too.',
    },
    {
      heading: 'When rest will not fix grit',
      paragraphs: [
        'Sandy lactose from too much milk powder is a recipe balance issue, not a timer issue. Rest helps emulsion, not that particular math.',
      ],
    },
    {
      heading: 'Try a simple A/B',
      paragraphs: [
        'Same formula, one churn same-day, one after 24 hours cold, matched draw and harden. Fix My Recipe can keep the grams identical so you are only testing time’s contribution.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Lacks Flavor', path: '/ice-cream-science/why-ice-cream-lacks-flavor' },
    { title: 'Why Ice Cream Gets Sandy', path: '/ice-cream-science/why-ice-cream-gets-sandy' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
  faqs: [
    {
      q: 'How long is too long in the fridge?',
      a: 'Most bases are happy for one to two days. Rich custards can pick up fridge odors after that—keep them covered and away from cut onions.',
    },
    {
      q: 'Does aging fix iciness?',
      a: 'It helps emulsion and smoothness, not big ice crystals from poor freeze or heat shock. Pair rest with churn and storage fixes for that.',
    },
  ],
};

export default function WhyIceCreamTastesBetterAfterRestingOvernight() {
  return <ScienceArticlePage spec={SPEC} />;
}
