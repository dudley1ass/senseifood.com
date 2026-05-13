import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-pie-filling-is-runny',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Why Pie Filling Is Runny',
  subtitle:
    'Sliceable filling is mostly starch, heat, and patience: thickeners need a full simmer to gel, and the gel firms as it cools. Cut too early and even a correct batch looks like soup.',
  readTime: '7 min read',
  emoji: '💦',
  fixRecipe: { category: 'pie', problem: 'general' },
  quickAnswer:
    'Runny pies usually mean not enough thickener for the juice at hand, the filling never reached activation temperature long enough, or the pie was cut while hot when starch gel is still loose. Macerate fruit to see how much liquid you are fighting, bump cornstarch modestly for wet fruit, and cool completely before slicing.',
  intro:
    'Fruit pies are honest about juice: ripe berries, thawed frozen fruit, and summer peaches dump more water than a neat recipe paragraph assumes. Your thickener is not psychic—it only handles the liquid you give it, at the temperature you actually held in the oven. Learn to read bubbling and sheen, and the slice test stops embarrassing you at the table.',
  sections: [
    {
      heading: 'How thickeners earn their keep',
      paragraphs: [
        'Starches swell in liquid, burst with enough heat, and release molecules that tangle into a gel. Cornstarch goes glossy near a full simmer; flour needs more heat and reads more opaque; tapioca sets earlier and stays clearer when cold. Underheated starch stays watery; overheated arrowroot can break.',
      ],
    },
    {
      heading: 'Match the thickener to the fruit puddle',
      paragraphs: [
        'Sugar pulls juice from cells—macerating shows the real workload. Frozen-thawed fruit behaves like a fire hose compared with firm apples.',
      ],
      bullets: [
        {
          title: 'Cornstarch',
          text: 'Common default: about two and a half to three tablespoons per four cups of juicy fruit; edge up for very wet bowls.',
        },
        {
          title: 'Instant tapioca',
          text: 'Nice for cherry and mixed berries; tolerates freezing later if you need that.',
        },
        {
          title: 'Flour',
          text: 'Old-school, cloudier, needs a bolder boil to cook out raw taste.',
        },
      ],
    },
    {
      heading: 'Heat and the waiting game',
      paragraphs: [
        'Center bubbling matters: the filling should visibly burp thick syrup, not just shimmer on top. After the bake, starch keeps tightening as temperature falls—two to four hours of rest transforms sliceability.',
      ],
      tip: 'If the top browns before the middle simmers, foil the surface and extend time, or start deeper in the pie with lattice gaps that vent steam without drying the rim instantly.',
    },
  ],
  faqs: [
    {
      q: 'Why did it firm overnight in the fridge?',
      a: 'Starch gels retrograde and tighten when cold. That is normal—not a sign you should have baked longer unless it was still soup when fully chilled.',
    },
    {
      q: 'Can I add starch after baking?',
      a: 'Not cleanly. Make a slurry next time before the bake, or gently reheat filling stovetop for a controlled thicken—pie makeup is fiddly once the shell is set.',
    },
  ],
  related: [
    { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
    { title: 'Why Fruit Pies Leak Juice', path: '/pie-science/why-fruit-pies-leak-juice' },
    { title: 'Why Pie Fillings Taste Bland', path: '/pie-science/why-pie-fillings-taste-bland' },
  ],
};

export default function WhyPieFillingIsRunny() {
  return <ScienceArticlePage spec={SPEC} />;
}
