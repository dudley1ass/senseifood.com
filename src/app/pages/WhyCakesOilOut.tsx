import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-oil-out",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Oil Out (Fat Separation in Batter)",
  "subtitle": "Emulsion timing, fat temperature, and mixing sequence decide whether oil beads later weep from the crumb.",
  "readTime": "8 min read",
  "level": "Process & temperature",
  "emoji": "🛢️",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Oil on the surface or greasy streaks usually mean the fat–water emulsion broke during mixing or got too warm before structure set. Match fat softness to method, add eggs gradually, and avoid long holds at room temp before baking.",
  "intro": "Cake batter is a temporary emulsion: fat droplets stay suspended in watery phases because proteins and emulsifiers (especially eggs) coat interfaces. When that balance fails—wrong temperature path, reversed sequence, or sitting too long—fat coalesces and migrates. The symptom shows up as shine, pools, or “sweating” slices. Oil-out is not always visible in the bowl; sometimes it emerges during baking or cooling when the matrix never fully captured fat droplets. Fixing it is less about “mix less” as a mantra and more about aligning temperature, order of addition, and hold conditions so surfactants meet fat in thin, stable films. SenseiFood treats this as interface physics: restore the conditions where droplets stay small and separated.",
  "sections": [
    {
      "heading": "Temperature path through creaming and eggs",
      "paragraphs": [
        "Butter that is too warm creams faster but creates larger, less stable fat droplets. Cold eggs shock warm fat and encourage splitting. Aim for cool-room butter and eggs that are neither fridge-cold nor warm; the old “same temperature” advice is really about avoiding shock at the oil–water boundary.",
        "If the bowl heats from a long mix, pause and scrape; surface heat is a silent emulsion killer. In warm kitchens, a slightly cooler fat starting point or a brief chill mid-process can save a borderline batter."
      ]
    },
    {
      "heading": "Sequence: water and fat meet on your schedule",
      "paragraphs": [
        "Dumping liquid before the fat phase is properly aerated and coated can wash out structure. Alternate dry and wet in stages so surfactants from yolk encounter fat in thin films, not floods. The goal is repeated small contacts, not one heroic pour.",
        "Reverse-creaming and other methods change where gluten develops; pick a method and commit. Halfway hybrid technique is a common way to split emulsions because the fat phase never got the treatment it assumed."
      ],
      "bullets": [
        {
          "title": "Egg addition",
          "text": "Add eggs in portions, beating until each addition disappears before the next. Racing this step is how beginners create a curdled-looking batter that still bakes—but poorly."
        }
      ]
    },
    {
      "heading": "Holding phase before the oven",
      "paragraphs": [
        "Batters held hot (near a stove or in sun) can partially melt fat microstructure. If you must hold, keep covered and cool; rebalance by slightly chilling the pan before loading. Time is not neutral: emulsions age.",
        "Pouring into a hot metal pan that sat on a warm burner can reliquefy fat at the contact layer. Use a trivet and a room-temperature pan when possible."
      ]
    },
    {
      "heading": "Bake set locks fat in place",
      "paragraphs": [
        "Until starch gelatinizes and proteins denature, fat can still move. Under-baked centers often release more free fat as they cool because the network never fully imprisoned droplets. If your crumb is oily but wet, finish concerns may overlap with emulsion concerns—address doneness honestly.",
        "Over-baking can also squeeze fat from damaged protein networks, so the fix is not always “more time.” Look for the intersection of set structure and retained moisture your formula intends."
      ],
      "tip": "If you see oil pooling on raw batter, remix is rarely safe—portion into a fresh bowl, slightly warm yolk with a splash of milk, and whisk back in off heat, or restart that stage."
    },
    {
      "heading": "Oil after cooling: storage and slicing",
      "paragraphs": [
        "Sometimes fat blooms on the surface after refrigeration because saturated fractions migrate and recrystallize. That can look like oil-out even when the batter was fine—taste and texture will differ from true separation.",
        "If slices are greasy only when cold, warm a piece slightly and compare. True emulsion failure tends to show consistently across temperatures."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My batter looks curdled but the recipe says it will come together—will it?",
      "a": "Sometimes yes with continued mixing at the right temperature; sometimes no if fat is too warm or liquid was added too fast. If it stays broken after patient mixing, restart the fat–egg stage rather than baking hope."
    },
    {
      "q": "Does oil-out mean I should reduce fat?",
      "a": "Not automatically. Reducing fat changes tenderness and volume. First stabilize the emulsion and match process to the fat level you chose. Only adjust formula after process is sound."
    },
    {
      "q": "Can oil-free or vegan batters oil out?",
      "a": "They can still show separation-like symptoms—pooled oil from nut butters, split aquafaba emulsions, or melted coconut oil layers. The interface idea is the same: control temperature and gradual incorporation."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    },
    {
      "title": "Why Cakes Have a Wet Layer at the Bottom",
      "path": "/cake-science/why-cakes-have-a-wet-layer-at-the-bottom"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Taste Flat",
      "path": "/cake-science/why-cakes-taste-flat"
    }
  ]
};

export default function WhyCakesOilOut() {
  return <ScienceArticlePage spec={SPEC} />;
}
