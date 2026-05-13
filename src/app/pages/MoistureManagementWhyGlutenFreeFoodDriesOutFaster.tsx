import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'moisture-management-why-gluten-free-food-dries-out-faster',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Moisture Management: Why Gluten-Free Food Dries Out Faster',
  subtitle:
    'Day-one softness falling to day-two sand is usually moisture walking away plus starch tightening—not a personal failure of your oven mitts.',
  readTime: '8 min read',
  emoji: '??',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Without a strong gluten web, water moves more freely and starch retrogrades faster, so gluten-free bakes often feel drier sooner. Humectants (honey, invert sugar), balanced fat, eggs, binders, full cool-down before slicing, and airtight storage all slow the slide. Fridges often hurt starchy sweets; freezing slices frequently treats them kinder.',
  intro:
    'Moisture and structure talk to each other. Gluten-heavy crumbs trap water in a protein net; many gluten-free systems lean harder on starch gels that tighten as they age. Combine that with a loosely wrapped loaf and you get the classic arc: lovely at night, chalky by lunch. Managing moisture is less about “add water until soft” and more about pairing water with ingredients that hold it through bake, cool, and storage.',
  sections: [
    {
      heading: 'Why the crumb feels different on day two',
      paragraphs: [
        'Starch molecules reorder after baking in a process that firms texture even if no water left the bag yet. Gluten-light or gluten-free structures feel that change sooner because there is less elastic protein to mask it.',
      ],
    },
    {
      heading: 'Humectants and fat, used with intent',
      paragraphs: [
        'Honey, syrups, and modest extra yolk keep more water in a dissolved or emulsified place where it helps tenderness instead of puddling. Fat slows moisture loss and changes mouthfeel, but it cannot fix a wildly over-baked base.',
      ],
    },
    {
      heading: 'Binders and gentle endpoints',
      paragraphs: [
        'Gums and psyllium bind free water so it is less eager to leave for the air pocket in your wrap. Pulling the bake when the center is just set—not bone dry—leaves moisture you can keep with good storage.',
      ],
      tip: 'Cool completely before slicing; warm starch is fragile and releases water to steam and the cutting board.',
    },
    {
      heading: 'Storage that matches the bake',
      paragraphs: [
        'Airtight at room temperature works for short windows. For longer holds, pre-slice, wrap portions, and freeze; thaw or warm gently to soften starch again. Refrigeration often speeds staling for lean cakes and muffins.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When dryness shows up alongside ratio hints in the debugger, you get a nudge toward hydration or fat before you blame the flour brand alone.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why is my loaf moist but crumbly?',
      a: 'Water is present but cohesion is weak—look to binders, bake set, and cooling time before you simply add liquid.',
    },
    {
      q: 'Is freezing really better than the fridge?',
      a: 'For many starch-forward sweets, yes—freezing slows both moisture migration and retrogradation compared with cold-but-not-frozen storage.',
    },
  ],
  related: [
    { title: 'Why Gluten Matters (and What You Are Replacing)', path: '/baking-science/why-gluten-matters-and-what-youre-replacing' },
    { title: 'Hydrocolloids: Xanthan and Guar Gum', path: '/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum' },
    { title: 'Leavening Without Gluten', path: '/baking-science/leavening-without-gluten-why-rise-is-harder' },
  ],
};

export default function MoistureManagementWhyGlutenFreeFoodDriesOutFaster() {
  return <ScienceArticlePage spec={SPEC} />;
}
