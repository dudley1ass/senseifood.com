import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-tastes-bland",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Tastes Bland",
  "subtitle": "Short fermentation, shy salt, and weak browning stack into flat flavor even when the crumb looks fine.",
  "readTime": "8 min read",
  "emoji": "🍞",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Bread tastes bland when fermentation time is too short to generate organic acids and esters, salt is under threshold for flavor amplification, and crust Maillard stays pale because of steam, temperature, or sugar availability. Extend bulk ferment or cold retard, weigh salt, and finish with enough heat and surface dryness for browning.",
  "intro": "Flavor in lean bread is not a secret spice rack; it is time, salt, and browning working on amino acids and sugars already in flour. A loaf can look textbook yet eat like cotton when those axes never got their hours. This guide ranks the usual suspects—yeast schedule, salt grams, dough temperature, steam, and scoring—so you can fix blandness without randomly doubling honey. Your timeline is an ingredient. Tasting protocol matters: compare crumb-only versus crust-only bites at room temperature; cold fridge bread mutes aromatics unfairly. Log pre-ferment percentage, total bulk time, and final internal temperature because under-baked lean bread can taste raw-sweet instead of nutty. If you use enriched dough, note dairy fat because it coats taste receptors differently than lean loaves. When adjusting salt, move in 0.1 percent flour-basis increments and rebake; large jumps hide which threshold mattered. Pair timeline changes with crumb photos so you can correlate openness with flavor depth instead of guessing from volume alone.",
  "sections": [
    {
      "heading": "Fermentation time and organic acids",
      "paragraphs": [
        "Yeast and bacteria produce acids and alcohols that rearrange perception of sweetness and grain notes. A rush job at warm room temperature can fully inflate gas yet leave flavor chemistry thin. Cold retardation slows yeast relative to bacteria in sourdough contexts and often deepens complexity with manageable scheduling. Over-yeasted fast doughs can smell alcoholic yet taste hollow because aromatics blew off during aggressive proof."
      ],
      "tip": "Log dough temperature and bulk volume, not only clock time—same clock at 62°F versus 78°F is not the same flavor path."
    },
    {
      "heading": "Salt as a flavor threshold",
      "paragraphs": [
        "Salt suppresses bitterness and makes subtle caramel and grain notes legible. Under-salted bread reads sweet-flat or cardboard-flat depending on formula. Weigh salt to the gram; teaspoon volume error is a common blandness driver in scaled-down home batches. Toppings like seeds can hide under-salted crumb until you taste the center alone."
      ]
    },
    {
      "heading": "Maillard crust and reducing sugars",
      "paragraphs": [
        "Crust browning is flavor concentration: Strecker aldehydes and melanoidins carry roast and nut notes missing from pale interiors. Excess steam without final dryness can keep crusts chewy-pale; conversely, burning edges with pale shoulders signals uneven heat, not moral failure. Diastatic malt, small honey or malt extract additions, or longer cold proof increase reducing sugar availability for browning when flour alone is shy."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Bread mode highlights hydration and enrichment bands that interact with fermentation speed. Blandness paired with gummy crumb is a different diagnosis than blandness with open alveoli. Change one axis per bake: salt percent, cold retard length, or final bake temperature curve."
      ]
    },
    {
      "heading": "Closing the loop on flavor",
      "paragraphs": [
        "Bland bread is often a time problem dressed as a spice problem: the crumb looks fine because gas showed up to the party, while acids and esters from fermentation were stuck in traffic. Salt and a real crust are the scenes where quiet dough finally speaks. Change one timeline or salt step per bake and describe the loaf in plain language—nutty versus sweet-dough, crust snap versus chew. That story beats a photo checklist when you are chasing taste, not Instagram."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does oil make bread tasteless?",
      "a": "Fat can mute some volatiles but enriched breads should still taste rounded; if they are flat, check salt and fermentation first."
    },
    {
      "q": "Is my flour too old?",
      "a": "Rancid fat in germy flour tastes bitter or cardboard, not merely quiet—but weak wheat can feel dull; try a fresh bag test."
    }
  ],
  "related": [
    {
      "title": "Why Bread Has No Flavor",
      "path": "/bread-science/why-bread-has-no-flavor"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadTastesBland() {
  return <ScienceArticlePage spec={SPEC} />;
}
