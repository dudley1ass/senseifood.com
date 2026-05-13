import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-beans-expand-when-roasted',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Beans Expand When Roasted',
  subtitle:
    'Heat drives water out, gases form, cells pop, and beans swell—first crack is that pressure relief valve moment you hear through the roaster or popcorn popper.',
  readTime: '6 min read',
  emoji: '🎈',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Roasting vaporizes moisture, generates CO2 and other gases, and weakens cell walls until beans roughly double in size while losing density. Expansion tracks with roast degree and how much gas is still inside when you brew.',
  intro:
    'Green coffee is dense seed; roasted coffee is a puffed snack with a labyrinth of cracks inside. Understanding expansion helps you respect bloom, grinder pop-corning, and why dark roasts feel more brittle.',
  sections: [
    {
      heading: 'The physical sequence',
      paragraphs: [
        'Early roast drives off free water; later stages pyrolyze cell material, creating gases trapped under pressure. First crack is a series of fractures as pressure exceeds strength; second crack in darker roasts involves oil migration and more cell collapse.',
      ],
    },
    {
      heading: 'Density and brewing',
      paragraphs: [
        'Larger, lighter beans by volume can change scoop-based dosing unless you weigh. Brittleness increases fines in the grind—another reason scales beat scoops.',
      ],
    },
    {
      heading: 'Degassing and bloom',
      paragraphs: [
        'Fresh roast holds CO2 that repels water during extraction—bloom steps exist to purge gas so extraction evens out.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do beans shrink again after roasting?',
      a: 'They can lose a little volume as gas escapes over days, but not back to green density.',
    },
    {
      q: 'Why does my popcorn popper jump beans?',
      a: 'Steam pressure and cracks move beans physically—same family of forces, smaller stage.',
    },
  ],
  related: [
    { title: 'Why Coffee Makes Crema', path: '/coffee-science/why-coffee-makes-crema' },
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeBeansExpandWhenRoasted() {
  return <ScienceArticlePage spec={SPEC} />;
}
