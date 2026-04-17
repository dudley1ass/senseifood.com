import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "nacho-cheese-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Nacho Cheese Sauce: Recipe & Balance Guide",
  "subtitle": "Cheddar + milk + spices — starch-stabilized cheese systems for dip and pour.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🧀",
  "quickAnswer": "Low heat and patient melting beat aggressive boiling — cheese proteins and dairy can break into oily pools. Build on a starch-thickened base; finish spice after salt makes sense.",
  "intro": "Nacho-style cheese sauces are emulsion-like even when starch helps: you want smooth flow without graininess. Acid sources—tomato, pickled jalapeño brine, hot sauce—can tighten proteins or curdle if added at the wrong time or at too high heat. The Sauce Sensei framing still applies: salt, acid, heat, and fat interact with dairy proteins in ways that feel dramatic when they go wrong. Your success metric is stable sheen without free oil; your process metric is gentle heat and staged additions. For party scale, multiply batches instead of one enormous pot—wide surface area and uneven stirring are how grainy queso happens right when guests arrive. Pre-warm the serving bowl so the sauce does not seize on contact with cold ceramic.",
  "sections": [
    {
      "heading": "Process: starch base before cheese load",
      "paragraphs": [
        "Melt cheese into a stabilized base—often roux or slurry-thickened dairy—rather than dumping cheese into plain boiling milk. The starch network helps prevent protein clumping and gives viscosity headroom before cheese tightens the system.",
        "Whisk continuously through the danger zone where milk approaches simmer; scorching the pan invites burnt notes that no spice cover will hide."
      ]
    },
    {
      "heading": "Cheese choice and prep",
      "paragraphs": [
        "Young cheddar melts differently than aged sharp; pre-shredded bags include anti-caking starch that can help or hinder depending on formula—know your ingredient. Grate fresh when possible for predictable behavior.",
        "Evaporated milk or processed cheese products behave differently than natural cheddar-only builds; pick a lane and tune ratios accordingly."
      ],
      "tip": "If oil pools, lower heat immediately—high heat finished the emulsion, not the recipe card."
    },
    {
      "heading": "Acid, tomato, and pickle brine",
      "paragraphs": [
        "Tomato paste or salsa adds acid and water—both move the cheese protein needle. Add acidic components after the matrix is stable and often off the hottest burner moment.",
        "Pickle brine brightens; add in small amounts and taste—salt hides in brine."
      ],
      "bullets": [
        {
          "title": "Spice heat",
          "text": "Capsaicin heat and salt both climb—verify salt before adding more hot sauce."
        }
      ]
    },
    {
      "heading": "Fixes when the sauce breaks",
      "paragraphs": [
        "Lower heat, add a splash of warm milk, whisk vigorously. Sometimes a pinch of additional starch slurry helps if the system is thin; sometimes you need less heat more than more starch.",
        "If grainy beyond repair, strain through fine mesh for service texture, then learn heat for next time—straining is triage, not philosophy."
      ]
    },
    {
      "heading": "Holding, queso service, and reheating",
      "paragraphs": [
        "Steam tables and slow cookers demand gentleness; surface skin forms fast—press film or use a thin layer of neutral oil if holding briefly.",
        "Reheat with milk loosening and patient whisking; microwaves work in bursts if you stir between—uneven superheating breaks dairy."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is my nacho cheese grainy?",
      "a": "High heat after cheese, acidic shock, or incompatible cheese types. Lower heat, add warm dairy gradually, and add acid late."
    },
    {
      "q": "Can I use only real cheddar?",
      "a": "Yes—with careful starch and heat control. Small amounts of processed cheese or sodium citrate (if you use it) change reliability; natural-only is skill-dependent."
    },
    {
      "q": "How thin should queso be?",
      "a": "Thin enough to flow from a spoon but thick enough to cling to chips—target viscosity in the bowl, not on the bag photo."
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
    "sauceId": "cheese-nacho"
  }
};

export default function NachoCheeseSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
