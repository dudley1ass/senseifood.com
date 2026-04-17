import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "mornay-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Mornay Sauce: Recipe & Balance Guide",
  "subtitle": "Béchamel + Gruyère + mustard — classic cheese sauce for vegetables and gratins.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🫕",
  "quickAnswer": "Mustard and cheese both bring acid load — add mustard gradually and taste as Gruyère melts in. Finish consistency before chasing salt, because cheese carries its own salinity.",
  "intro": "Mornay is a cheese sauce built on a white sauce backbone. The flour stabilizes and thickens; cheese introduces fat, protein, and savoriness. The Sauce Sensei wheel still applies: salt, acid, fat, sweet, and umami all shift as cheese melts in and as the base tightens. Finish body before you chase seasoning, because cheese carries salinity and mustard adds sharpness that reads louder as the sauce thickens. Your goal is smooth flow without graininess—low, patient heat beats heroic boiling once dairy proteins are in play.",
  "sections": [
    {
      "heading": "Texture first: a smooth béchamel foundation",
      "paragraphs": [
        "Smooth béchamel makes smooth mornay. Cook the roux enough to lose raw flour flavor, hydrate fully, and whisk out lumps before cheese ever arrives. If the base is gritty, cheese cannot fix it—only hide it briefly.",
        "Strain if needed, especially for fine dining finishes or when feeding a crowd where visual uniformity matters. A quick pass catches rogue clumps that would nucleate graininess later."
      ]
    },
    {
      "heading": "Cheese incorporation: heat, motion, and patience",
      "paragraphs": [
        "Add cheese off heat or at gentle heat, stirring until melted. Boiling after cheese is in invites graininess because dairy proteins tighten and can separate. Think of cheese as a sensitive guest: invite it in calmly.",
        "Gruyère melts with body and a nutty savor; pre-grated bags often include anti-caking starch that changes behavior—grate from the block when you care about texture."
      ],
      "tip": "If the sauce tightens too much as cheese goes in, thin with warm milk in small splashes rather than turning the burner up."
    },
    {
      "heading": "Mustard, acid balance, and salt sequencing",
      "paragraphs": [
        "Mustard brightens mornay and cuts richness, but it is an acid load. Add in small increments, taste after each, and remember cheese already brings acid and salt. Dijon behaves differently than dry mustard; start with less than you think.",
        "Salt last in spirit even if you salt the béchamel early: cheese will move the needle. Taste after the full cheese load is incorporated and the sauce has rested a minute."
      ],
      "bullets": [
        {
          "title": "Nutmeg and white pepper",
          "text": "Traditional background notes—tiny amounts; they should read as warmth, not spice rack."
        }
      ]
    },
    {
      "heading": "Holding, skinning, and service recovery",
      "paragraphs": [
        "Cheese sauces skin on top and can stiffen in the steam table. Press parchment or plastic to the surface for short holds, or hold in a narrow bain-marie with gentle stirring. Re-thin with warm milk while whisking; do not blast heat to loosen.",
        "If the sauce breaks on hold, lower heat, add a splash of warm milk, and whisk. Sometimes a teaspoon of cold butter off heat helps re-emulsify the shine—still one change at a time."
      ]
    },
    {
      "heading": "Pairing and portion discipline",
      "paragraphs": [
        "Mornay loves vegetables with structure—cauliflower, broccoli, chard—and starch anchors like gratins. If the dish underneath is wet, your sauce reads thinner and blander because dilution steals impact.",
        "Finish under a broiler only when the sauce layer is even; uneven spots scorch while neighbors look pale."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my mornay turn grainy after I added cheese?",
      "a": "High heat after cheese, acidic shock, or low-quality pre-grated cheese are common culprits. Lower heat, add warm milk gradually, and whisk. Prevention: melt cheese gently and avoid boiling the finished sauce."
    },
    {
      "q": "Can I make mornay without mustard?",
      "a": "Yes—mustard is optional balance, not structural. Replace the acid lift with a smaller amount of lemon or a mild vinegar reduction, or rely on cheese alone if you prefer."
    },
    {
      "q": "How do I thin mornay for a soupier mac-and-cheese style?",
      "a": "Increase warm milk before adding extra cheese; thinning after cheese is possible but changes salt perception. Adjust salt after the final consistency is set."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "cheese-mornay"
  }
};

export default function MornaySauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
