import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-makes-crema',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Makes Crema',
  subtitle:
    'Crema is an emulsion of gas, oils, and brewed coffee stabilized under pressure—pretty on espresso, nearly absent on paper-filter brews, and not by itself proof of quality.',
  readTime: '6 min read',
  emoji: '🫧',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Pressurized espresso forces CO2 and very fine solids into tiny bubbles; polar lipids help foam persist. Fresh beans make more crema; ultrafine grinds and roast level change color from tiger stripe to pale. Thin blond crema alone does not mean a bad shot.',
  intro:
    'Crema is the tan cap that makes espresso photographs iconic. It is chemistry theater: gases escaping fresh roast, oils surfacing, and melanoidins coloring the foam. Learn what it signals—freshness, grind, roast—without treating it as a scoreboard.',
  sections: [
    {
      heading: 'What is in the foam',
      paragraphs: [
        'Bubbles of carbon dioxide caught in liquid with emulsified oils and colloidal material from the puck. Pressure makes it; paper filters in drip coffee remove the oils that would stabilize similar foam.',
      ],
    },
    {
      heading: 'Why freshness changes crema volume',
      paragraphs: [
        'Whole beans hold CO2 from roasting. Early days off roast, lots of gas; very old coffee can look thin on top because the gas left already.',
      ],
    },
    {
      heading: 'Color, stripes, and tiger flecks',
      paragraphs: [
        'Darker roasts often make darker crema; uneven extraction can mottle light and dark patches. Judge taste and balance—body, sweetness, finish—not foam Instagramability alone.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should I skim crema?',
      a: 'Some tasters find crema bitter and skim for cupping-style evaluation; for enjoyment, try both and decide. It changes mouthfeel more than myth suggests.',
    },
    {
      q: 'No crema on my moka pot—broken?',
      a: 'Moka is low pressure; a thin foam ring may appear but it is not espresso crema. Different physics.',
    },
  ],
  related: [
    { title: 'Why Espresso Channels', path: '/coffee-science/why-espresso-channels' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Coffee Gets Oily', path: '/coffee-science/why-coffee-gets-oily' },
  ],
};

export default function WhyCoffeeMakesCrema() {
  return <ScienceArticlePage spec={SPEC} />;
}
