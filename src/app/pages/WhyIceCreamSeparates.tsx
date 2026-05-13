import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-separates',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Separates',
  subtitle:
    'Separated ice cream looks like wet pockets, oily streaks, or curd—usually fat and water stopped holding hands because something whipped them apart, shocked them with acid, or let them melt and refreeze out of step.',
  readTime: '8 min read',
  emoji: '💧',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Separation is almost always a broken emulsion: fat globules clumped into butter, acid cooked milk proteins into grains, or a thaw-refreeze cycle let fat float and freeze in layers. Yolks, a little starch, gentle heat, and stopping the churn before the mix turns grainy are the home fixes.',
  intro:
    'Ice cream is fat droplets suspended in sweetened water, with air folded in for good measure. While everything stays finely divided, the spoon feels smooth. When fat starts to stick to itself—literally turning toward butter—or acid makes milk proteins seize, you see the split: whey puddles, greasy smears, or a curdled look before you even freeze. Heat shock after churning does similar damage more slowly. The good news is these failures usually point to a clear habit change, not a mystery curse.',
  sections: [
    {
      heading: 'When the machine accidentally makes butter',
      paragraphs: [
        'Over-churning or churning in a warm bowl smashes fat globules together until they behave like butter on the dasher. You will see yellow streaks or a greasy film that will not stir back in. Stop when the body looks like thick soft-serve; let the freezer finish the job.',
      ],
    },
    {
      heading: 'Acid and fruit need manners',
      paragraphs: [
        'Bright purées can curdle a hot yolk base the same way lemon does to milk. Add acidic fruit cooler, in smaller amounts, or thicken the base lightly with starch so proteins meet acid more gently. Chocolate and wine reductions count as acid players too.',
      ],
      tip: 'If the base looks split but not burned, a careful strain and a buzz with the blender sometimes saves the batch before churn—taste after, not before.',
    },
    {
      heading: 'Thaw and refreeze tells on you',
      paragraphs: [
        'A pint that softened in the car and went back into the freezer rarely returns to the same silk. Fat rises, water sinks, and the next scoop carries that story in streaky layers.',
      ],
    },
    {
      heading: 'Emulsifiers in plain language',
      paragraphs: [
        'Egg yolk lecithin is the home cook’s bridge between fat and water. Some recipes lean on a spoon of starch or a tiny amount of gum for the same handshake. Without enough bridge, high-fat mixes are more likely to break under shear.',
      ],
    },
    {
      heading: 'Custard heat without drama',
      paragraphs: [
        'Cook yolk bases gently until they coat a spoon, keep scraping the corners, and move the pan off heat early—heavy metal keeps cooking after the burner stops. A double boiler is a friend on fierce stoves.',
      ],
    },
    {
      heading: 'What Fix My Recipe is looking at',
      paragraphs: [
        'Ice cream mode compares fat, sugar, and water bands to reference shapes. Wildly high fat with little emulsifier support, or very loose sugar relative to solids, often lines up with split textures—grams make that conversation concrete.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Base Curdles Before Churning', path: '/ice-cream-science/why-ice-cream-base-curdles-before-churning' },
    { title: 'Why Ice Cream Loses Air (Overrun Collapse)', path: '/ice-cream-science/why-ice-cream-loses-air-overrun-collapse' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
  faqs: [
    {
      q: 'Can I blend a split base and rechurn?',
      a: 'Sometimes, if nothing tastes burned and proteins are not rubbery. Strain, chill completely, and accept that texture may be humbler than a perfect first pass.',
    },
    {
      q: 'Why do plant bases split differently?',
      a: 'They lack milk’s natural protein-and-lecithin toolkit, so gums and chosen fats have to carry the emulsion. Wrong doses show up the same way—oil on top, water below.',
    },
  ],
};

export default function WhyIceCreamSeparates() {
  return <ScienceArticlePage spec={SPEC} />;
}
