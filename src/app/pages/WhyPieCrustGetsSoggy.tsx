import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-pie-crust-gets-soggy',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Why Pie Crust Gets Soggy',
  subtitle:
    'A wet filling on raw dough is a sponge test you did not mean to take. Set the bottom first, add a barrier, and give the bake enough heat early so starch and protein seal before juice moves in.',
  readTime: '7 min read',
  emoji: '💧',
  fixRecipe: { category: 'pie', problem: 'soggy-crust' },
  quickAnswer:
    'Moisture migrates from filling into unset dough. Blind bake until the wall is set, seal the interior with a quick egg film or fat layer, and start hot enough that the bottom sets before fruit juice puddles. A metal pan on a hot stone or sheet helps bottom heat punch through.',
  intro:
    'The top of the pie can look golden while the base stays pale and gummy—that is the geometry of the dish shielding the crust from dry oven air, plus juice sitting against pastry that has not finished its set. Think of the bottom as needing a head start: structure first, fruit flood second.',
  sections: [
    {
      heading: 'Why the bottom loses first',
      paragraphs: [
        'Filling presses against the floor the whole bake. Steam condenses where the metal is coolest, and the dish insulates compared with the open top. Raw starch eagerly drinks liquid; once gelatinized and browned, it resists much better.',
      ],
    },
    {
      heading: 'Practical fixes, strongest first',
      paragraphs: [
        'Pick the tools that match your pie style.',
      ],
      bullets: [
        {
          title: 'Blind bake',
          text: 'Par- or full-bake with weights sets the shape and begins crust set before wet filling arrives. Custard pies usually need a full blind bake; fruit pies often benefit from a short head start.',
        },
        {
          title: 'Seal the surface',
          text: 'A thin egg wash baked until set, a brush of melted chocolate for cream pies, or a skim of jam under fruit all slow liquid wicking.',
        },
        {
          title: 'Heat early',
          text: 'A hot first blast encourages bottom browning before juices flood out of cut fruit. Watch the rim so it does not scorch—foil the edge if needed.',
        },
        {
          title: 'Pan and placement',
          text: 'Dark metal or a baking steel/sheet under a glass dish improves bottom heat. Moving rack position beats guessing with time alone.',
        },
      ],
    },
    {
      heading: 'Fruit-specific habits',
      paragraphs: [
        'Macerate fruit, drain excess syrup, and match thickener to juiciness—runny filling is both a texture problem and extra water parked on the floor. See the runny filling article for starch behavior.',
      ],
      tip: 'If the lattice looks perfect but the base is wet, you almost always need more bottom heat or an earlier set—not another handful of flour in the dough.',
    },
  ],
  faqs: [
    {
      q: 'Do pie shields help sogginess?',
      a: 'They protect the rim from over-browning; they do not dry the bottom. Address blind bake, heat path, and moisture from filling.',
    },
    {
      q: 'Is cornstarch in the fruit enough?',
      a: 'Thickener helps filling stay put, but a raw bottom can still go gummy. Combine filling control with bottom set and heat.',
    },
  ],
  related: [
    { title: 'Why Pie Filling Is Runny', path: '/pie-science/why-pie-filling-is-runny' },
    { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
    { title: 'Why Pie Crust Shrinks', path: '/pie-science/why-pie-crust-shrinks' },
  ],
};

export default function WhyPieCrustGetsSoggy() {
  return <ScienceArticlePage spec={SPEC} />;
}
