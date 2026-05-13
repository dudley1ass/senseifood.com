import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-lacks-flavor',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Lacks Flavor',
  subtitle:
    'Cold dulls aroma and sweetness on the tongue, cream wraps flavors in a heavy coat, and every cup of milk dilutes what you stirred in—so a base that sings in the pot can whisper in the pint.',
  readTime: '7 min read',
  emoji: '😐',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Build flavor louder than you think you need while the base is warm, then taste cold. Salt, a squeeze of lemon, concentrated coffee or cocoa, and good vanilla all give sugar something to lean on. If the warm base tastes merely “pleasant,” the frozen scoop will taste shy.',
  intro:
    'Eating ice cream is a cold, quiet room for your nose. Aromas that jumped out of a warm pot barely rise from a frozen spoon, and your brain registers less sweetness at the same sugar level. Fat carries rich notes beautifully but can blanket delicate ones unless you add contrast. Air from churning stretches the mix so there is literally less flavor material per bite. None of that means you failed—it means frozen dessert always asks for a little theater in the pot so the freezer does not steal the show.',
  sections: [
    {
      heading: 'Why the pot lies to you—kindly',
      paragraphs: [
        'Warm tasting is still useful for catching scorch or salt spikes, but it will overpromise on how loud the flavor will read at zero degrees. Taste cool, too: chill a spoonful in the fridge before you commit.',
      ],
    },
    {
      heading: 'Dilution is the quiet thief',
      paragraphs: [
        'Cream, milk, water from fruit, and the air folded in during churn all spread the main character thin. Steep teas and coffees stronger than you would drink, reduce fruit to a paste with less free water, or bump cacao and vanilla where those carry the story.',
      ],
    },
    {
      heading: 'Salt, acid, and bitter notes as frame',
      paragraphs: [
        'A small pinch of salt wakes sweetness without making dessert savory. A little citrus or coffee gives sugar an edge to push against. Chocolate bases often need more cocoa than instinct suggests because cold mutes roast notes.',
      ],
      tip: 'Let a scoop warm on the spoon for a few seconds before judging—you will often “find” flavor that was there all along.',
    },
    {
      heading: 'Fat level changes the spotlight',
      paragraphs: [
        'Very heavy cream coats the tongue and slows aroma release. For delicate flavors like herbs or tea, a slightly lighter dairy line can paradoxically taste more vivid once frozen.',
      ],
    },
    {
      heading: 'Using Fix My Recipe as a second set of eyes',
      paragraphs: [
        'When sugar and fat look textbook but the pint still tastes anonymous, the tool can highlight that flavor carriers are thin relative to dairy volume—nudging you toward concentrate before you chase another teaspoon of extract.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Tastes Too Sweet', path: '/ice-cream-science/why-ice-cream-tastes-too-sweet' },
    { title: 'Why Ice Cream Tastes Better After Resting Overnight', path: '/ice-cream-science/why-ice-cream-tastes-better-after-resting-overnight' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
  faqs: [
    {
      q: 'Does more vanilla fix everything?',
      a: 'Only if vanilla was the missing piece. Often the answer is salt, concentration, or a complementary flavor—not a higher bill for the same note.',
    },
    {
      q: 'Why does my ice cream taste like the freezer?',
      a: 'Fat picks up odors. Use airtight containers, film on the surface, and do not store next to fish night leftovers.',
    },
  ],
};

export default function WhyIceCreamLacksFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
