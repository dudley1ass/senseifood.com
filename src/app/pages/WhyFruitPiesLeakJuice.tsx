import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-fruit-pies-leak-juice",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Fruit Pies Leak Juice",
  "subtitle": "Under-set thickeners, burst cells, and steam pressure push mobile syrup through vents and seams.",
  "readTime": "8 min read",
  "emoji": "🫐",
  "fixRecipe": {
    "category": "pie",
    "problem": "soggy-crust"
  },
  "quickAnswer": "Fruit pies leak when free juice exceeds what starch or pectin can immobilize before the crust sets vents, when filling boils too violently, or when lattice gaps channel syrup outward. Macerate and drain, balance sugar and acid, cook filling to true gel for starch rules, and vent enough—but not so much that boil-over races the lattice.",
  "intro": "Juice is what fruit does when heat collapses cell walls and sugar pulls water around—leaking just means your pie made more mobile syrup than your thickeners and vents could manage before the top set. Thickeners need real time at temperature; vents need to stay open; lattice needs enough gap area before starch glasses the slits shut. You do not need a clipboard every bake—just enough awareness that fruit variety, sugar, acid, and cool-down patience are the usual cast. When those line up, the slice holds on the plate instead of running for the door.",
  "sections": [
    {
      "heading": "Cell rupture and osmotic juice",
      "paragraphs": [
        "Heat collapses cell walls in berries and stone fruit, dumping water, acids, and sugars simultaneously. Sugar pulls additional water osmotically during maceration; skipping drain steps overloads the shell. Frozen fruit adds ice melt variables that skew timing if not accounted for."
      ]
    },
    {
      "heading": "Thickener kinetics and gel temperature",
      "paragraphs": [
        "Cornstarch needs full gelation near boil in the correct acid window; undercooked starch weeps later. Tapioca and modified starches have different clarity and break points; mixing types without testing invites separation. Too little thickener reads as soup; too much reads as pasty pockets if not fully dispersed."
      ]
    },
    {
      "heading": "Steam paths and crust seams",
      "paragraphs": [
        "Steam lifts lids; weak crimps blow out first. Egg wash cannot seal pressure faults. Lattice spacing trades aesthetics for vent area; tight weaves trap more pressure. Par-baking bottoms for wet fruits buys time before saturation."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie mode compares water and sugar loads to structural cues. Log pre-bake filling volume and post-bake set jiggle. Change one thickener or one cook curve per test batch until the slice holds on a warm plate."
      ]
    },
    {
      "heading": "Juice as plot, not accident",
      "paragraphs": [
        "Fruit holds water like a secret; sugar and heat convince it to talk. Leakage usually means the filling never thickened enough, the lattice vented steam unevenly, or the slice was cut before the gel set its lines. Note fruit variety, sugar, thickeners, and cool time in plain sentences—those are the clues the next bake needs."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did it leak after cooling?",
      "a": "Syneresis from under-hydrated starch gels or broken pectin networks can squeeze juice overnight."
    },
    {
      "q": "Is flour okay as thickener?",
      "a": "It clouds and can taste raw if not cooked through; fine for some styles, not for glossy fruit."
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
    },
    {
      "title": "Why Fruit Pies Turn Grainy",
      "path": "/pie-science/why-fruit-pies-turn-grainy"
    }
  ]
};

export default function WhyFruitPiesLeakJuice() {
  return <ScienceArticlePage spec={SPEC} />;
}
