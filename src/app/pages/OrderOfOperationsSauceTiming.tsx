import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "order-of-operations-sauce-timing",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Order of Operations: Timing Changes Everything",
  "subtitle": "Same ingredients, different sequence, completely different sauce.",
  "readTime": "8 min read",
  "emoji": "⏱️",
  "quickAnswer": "Finish with fat and acid at the end for cleaner flavor and better texture stability—early acid mutates thickening; late butter at boil splits.",
  "intro": "Sauce building is non-commutative: ingredient A then B is not equal to B then A. Timing controls volatility, texture, and whether emulsions survive service. Acid added early can mute bright top notes and alter how starches gel; acid added late preserves freshness and perceived lift. Butter added at a rolling boil often shears emulsions; butter mounted off heat finishes glossy. SenseiFood treats order as part of the recipe—not a stylistic detail—because it decides which family of fixes you need when something goes wrong. When you teach someone else, narrate the sequence aloud: aromatics, liquid, reduction, thicken, dairy, finish—so their hands learn a repeatable story, not a single lucky stir. If a step feels skipped, pause: shortcuts that work in one pan often fail when volume, burner output, or dairy content changes.",
  "sections": [
    {
      "heading": "Why sequence matters",
      "paragraphs": [
        "Early acid can change how flour and starches hydrate, sometimes thinning unexpectedly or adding a cloudy tang depending on pH. Early wine reductions drive off alcohol and concentrate flavor; late wine can read boozy if not cooked.",
        "Aromatics sweat differently if they hit cold oil versus hot oil; browning order changes the bitter-sweet balance of the foundation."
      ]
    },
    {
      "heading": "Finish stage strategy",
      "paragraphs": [
        "Use finishing fat to round edges and carry aroma compounds. Use finishing acid for brightness and contrast. Taste after each step, because each move changes perception of the next—our palates compare, not absolutize.",
        "This workflow reduces the correction spiral where each fix creates a new problem: too sharp → too sweet → too salty."
      ],
      "tip": "Finish with FAT and ACID at the end."
    },
    {
      "heading": "Thickening and when to commit",
      "paragraphs": [
        "Roux-based sauces tolerate different acid timing than cornstarch-thickened juices. Know your thickener family: pH and heat both matter to clarity and set.",
        "If you plan to reduce hard, avoid locking salt early—concentration will move the goalposts."
      ],
      "bullets": [
        {
          "title": "Dairy",
          "text": "Boiling after dairy often invites graininess—gentle heat once dairy joins is a pattern."
        },
        {
          "title": "Herbs",
          "text": "Woody herbs early; delicate herbs at the last second."
        }
      ]
    },
    {
      "heading": "Emulsions and the order of fat",
      "paragraphs": [
        "Mounting butter means adding cold butter while moving the pan off heat—sequence and temperature together. Dumping fat early without emulsion structure yields oil slicks later.",
        "Blender sauces change order rules: shear forces incorporate differently than pan whisking—still respect volatile ingredients that die under prolonged heat."
      ]
    },
    {
      "heading": "Reheating resets the rules",
      "paragraphs": [
        "A sauce balanced at finish may need a whisper of acid or fresh herbs after refrigeration—volatile compounds fled while you slept.",
        "Reheat gently; re-emulsify if needed before re-tasting—do not assume yesterday’s salt reads the same hot today."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I followed the recipe order and it still broke—why?",
      "a": "Heat control and pan hotspots still matter; order is necessary but not sufficient. Also check whether you substituted ingredients that changed pH or emulsifier load."
    },
    {
      "q": "Can I add lemon at the start for “brightness”?",
      "a": "You can, but you are choosing a different sauce: early citrus cooks into a mellower, less aromatic profile. For top-note brightness, finish is usually better."
    },
    {
      "q": "Does order matter for cold sauces?",
      "a": "Yes—emulsions like vinaigrette still care about stream rate and order of whisking; acid can affect how mustard emulsifiers hydrate."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "The One Change Rule",
      "path": "/sauce-science/one-change-rule-sauce-debugging"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function OrderOfOperationsSauceTiming() {
  return <ScienceArticlePage spec={SPEC} />;
}
