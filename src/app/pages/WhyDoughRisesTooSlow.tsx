import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-rises-too-slow",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Rises Too Slow",
  "subtitle": "Slow can be patient flavor-building—or it can be a cold room, sleepy yeast, a salt slip, or a rich dough that always needs more time than your brain scheduled.",
  "readTime": "7 min read",
  "emoji": "🐢",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Before you panic, separate cozy-cold from broken: a chilly bulk can crawl for hours and still be fine, while dead yeast or double salt masquerades as \"slow.\" Warm the dough gently, bloom yeast if you doubt it, weigh salt like you mean it, and remember brioche-style doughs crawl by design.",
  "intro": "Impatience makes every minute feel like failure, but slow is not automatically wrong. Healthy slow gives acids and esters time to develop; broken slow ruins dinner because nothing is alive. Below about 65°F (18°C), many straight dough timelines stretch—sometimes past six hours—without being \"incorrect,\" especially for cold sourdough schedules. Dead yeast, too much salt, or icy water are the usual impersonators. Many lean doughs feel predictable in the mid-70s°F (about 24–26°C) bulk range when other variables behave.",
  "sections": [
    {
      "heading": "Temperature floor",
      "paragraphs": [
        "Below roughly 50°F (10°C), many commercial yeast strains barely tick; the dough looks lazy because chemistry is genuinely slow. A proofer, an oven with only the light on (know your model), or simply accepting a longer timeline are all valid. If you need speed, warmth has to be real, not symbolic."
      ]
    },
    {
      "heading": "Yeast and salt",
      "paragraphs": [
        "Old yeast and mis-weighed salt are the classic comedy duo: one too weak to party, the other canceling the party. When in doubt, bloom active dry yeast in pleasantly warm water with a pinch of sugar—foam in ten minutes or buy fresh. Salt should be weighed; volume teaspoons lie."
      ]
    },
    {
      "heading": "Heavy enrichments",
      "paragraphs": [
        "Eggs, butter, and sugar change both structure and osmotic pressure—fermentation crawls because yeast and bacteria are working inside a richer soup. That is often expected, not a sign to dump extra yeast mid-bulk without thinking through the next rise window.",
      ],
      "tip": "Preferment or autolyse can wake sluggish doughs without turning the yeast knob to eleven."
    },
    {
      "heading": "Sanity check ratios",
      "paragraphs": [
        "Bread mode in Fix My Recipe will yell politely if salt is wild or yeast is vanishingly small for the style. Use that screen before you double yeast and create a rocket you cannot steer."
      ]
    },
    {
      "heading": "Vitality checks",
      "paragraphs": [
        "Bloom yeast in 100–110°F (38–43°C) water with a pinch of sugar—foam in about ten minutes or replace the packet. Sourdough starters should double on a predictable schedule at room temperature; if yours lies flat after eight hours, refresh and simplify flour before blaming the recipe."
      ]
    },
    {
      "heading": "Inhibition",
      "paragraphs": [
        "Heavy spice loads—lots of cinnamon or clove—can slow fermentation alongside salt effects. If a holiday loaf suddenly crawls, check weights, not vibes."
      ]
    },
    {
      "heading": "Warmth checks when the dough will not wake up",
      "paragraphs": [
        "This guide on why dough rises too slow is easier to act on when you separate \"cold\" from \"dead.\" Below roughly 50°F (10°C), many yeast schedules crawl; a proofer, a slightly warmed oven with the light on, or simply more time are legitimate answers. For finished lean bread, internal doneness still often lands near 200–208°F (93–97°C) when bake day finally arrives—slow bulk does not change that finish target.",
        "If you use Celsius day to day, tape a few anchors inside a cabinet: 24–26°C is a common comfortable bulk zone for many straight doughs; 38–43°C is a typical yeast bloom water range when you doubt vitality. Altitude mainly nudges boil-off and crust behavior; it does not excuse salt mis-measures.",
        "Humidity changes how flour hydrates from the bag; dry winter flour can feel slower or faster depending on absorption. Preheat drift still matters—put a thermometer in the oven and ignore the chirp as gospel."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Cold water shock?",
      "a": "Fridge-cold mix slows hours—use lukewarm liquids in winter."
    },
    {
      "q": "Old flour?",
      "a": "Rancid fat can inhibit—smell flour bag."
    }
  ]
};

export default function WhyDoughRisesTooSlow() {
  return <ScienceArticlePage spec={SPEC} />;
}
