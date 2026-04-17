import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-has-no-flavor",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Has No Flavor (Underdeveloped Fermentation)",
  "subtitle": "Short autolyse, no preferment, and rush to oven starve complexity.",
  "readTime": "8 min read",
  "level": "Flavor development",
  "emoji": "🍞",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Flat bread flavor is usually too little time for enzymes and yeast to generate acids and alcohols, or flour that never hydrated. Extend bulk, add preferment, and salt on schedule—not dead last in a dry corner.",
  "intro": "Lean bread flavor is not a mystery extract hiding in the bag of flour. It is the sum of fermentation byproducts—organic acids, esters, alcohols that flash off in the oven—and Maillard and caramel chemistry in the crust. When bread tastes like warm starch, one or more of those engines never fired: fermentation was too short or too cold for your culture, enzymes had no time to unlock amino and sugar precursors, or salt and hydration were uneven so activity stalled in pockets. Whole-grain intensity aside, even white flour rewards patience. This guide covers time as an ingredient, temperature’s effect on enzyme and yeast balance, salt distribution and timing, and how baking choices amplify or erase the work you did in fermentation.",
  "sections": [
    {
      "heading": "Time is an ingredient",
      "paragraphs": [
        "A twelve- to twenty-four hour cold retard often changes flavor more than any spice you could fold in at the end. Slow fermentation lets heterofermentative bacteria contribute tang, and yeasts produce more complex volatile profiles than a rush job at ninety degrees. Bulk fermentation is not only about volume; it is where complexity accrues.",
        "Preferments—poolish, biga, levain—front-load flavor by giving microbes a running start and by pre-developing acids that modulate gluten and crust color. Even a small percentage shifts the sensory baseline without requiring a complete workflow overhaul."
      ],
      "bullets": [
        {
          "title": "Same-day limits",
          "text": "You can make pleasant same-day bread, but compare it honestly to a cold-proofed sibling before blaming the flour."
        },
        {
          "title": "Overproof risks",
          "text": "Time helps until gluten exhausts; flavor can turn alcoholic or cheesy and structure collapses—time still needs monitoring."
        }
      ]
    },
    {
      "heading": "Temperature and enzyme activity",
      "paragraphs": [
        "Autolyse at cool room temperature favors protease and amylase activity without immediately exploding yeast CO2 production. Warm autolyse accelerates everything; dough can slacken before salt evens the field, and yeast may consume simple sugars you wanted for later oven caramelization. Match autolyse length to temperature: shorter when warm, longer when cool.",
        "Bulk temperature gradients create inconsistent flavor zones—one reason folding and even proofing environments matter for more than height. A dough that ferments faster on one side can taste uneven when sliced."
      ]
    },
    {
      "heading": "Salt timing and even distribution",
      "paragraphs": [
        "Salt controls fermentation rate and tightens gluten. Sprinkled late onto a wet patch, it dissolves unevenly and can create locally slow fermentation next to hyperactive zones—patchy flavor development. Mixing technique that ensures even dispersion pays flavor dividends beyond structure.",
        "Under-salted bread tastes flat even when fermentation is good because salt is a flavor amplifier. If acidity reads strong but everything else feels mute, check salt grams relative to flour, not only time and temperature."
      ],
      "tip": "If you change salt brand or grind size, weigh—volume measures drift and surprise you at scale."
    },
    {
      "heading": "Crust development and flour choice",
      "paragraphs": [
        "Pale, soft crusts deliver fewer roasted notes. Adequate heat, steam management, and sometimes a touch of sugar or diastatic malt in formula influence crust chemistry. A loaf that never browns reads sweet and yeasty without the counterpoint of Maillard products.",
        "Flour freshness and ash content change aromatic potential; aged white flour can taste milder than stone-milled whole grain. If your process is sound and flavor still disappoints, compare batches of flour or try a small percentage of whole grain or heritage wheat for complexity without rewriting your hydration model."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Will more yeast make bread tastier?",
      "a": "Usually no; it speeds rise and can push alcohol tones or an overly yeasty profile. Depth comes more from time, preferments, and temperature than from extra grams of yeast."
    },
    {
      "q": "Why does my sourdough still taste bland?",
      "a": "Starter activity might be weak, fermentation too cold to wake bacteria, or hydration too low for enzyme movement. Evaluate rise times and starter vigor before adding vinegar or other shortcuts."
    },
    {
      "q": "Does oil or butter kill flavor?",
      "a": "Enriched doughs trade some lean tang for tenderness and keeping quality. They are not worse—just a different target. Lean processes will always win the pure fermentation showcase."
    }
  ],
  "related": [
    {
      "title": "Why Dough Rises Too Slow",
      "path": "/bread-science/why-dough-rises-too-slow"
    },
    {
      "title": "Why Hydration Matters in Bread",
      "path": "/bread-science/why-hydration-matters-in-bread"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadHasNoFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
