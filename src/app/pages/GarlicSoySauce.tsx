import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "garlic-soy-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Garlic Soy Sauce: Recipe & Balance Guide",
  "subtitle": "Soy + garlic + oil — fast umami condiment and finishing drizzle.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🧄",
  "quickAnswer": "Garlic burns faster than most aromatics; sweat gently before adding soy so you do not sear bitterness into the oil. Dilute salty builds with water or stock, then reduce gently—do not only add sugar.",
  "intro": "This build is umami-dominant with a strong salt channel from soy. Fat carries garlic aromatics; acid may be minimal unless you introduce vinegar or citrus intentionally. The Sauce Sensei wheel helps you see how far “left” (salt) you are versus how deep the umami glow reads. Small-volume oil sauces punish high heat: garlic goes from golden to bitter quickly, and soy reduces into harsh salt spikes if the pan runs dry. Think fast infusions and gentle finishes, not long boils unless you are deliberately reducing a measured amount. For noodle bowls, taste against plain starch: soy that works on a spoon can still overwhelm quiet rice or wheat until a splash of water or stock stretches the salinity across the whole bowl. A final scatter of scallion or cilantro adds aroma that soy cannot replace.",
  "sections": [
    {
      "heading": "Aromatics: garlic color is flavor destiny",
      "paragraphs": [
        "Infuse oil with garlic without hard browning unless you want the sharp, almost acrid note of intentionally toasted garlic. For most table sauces, pale-to-light-gold garlic gives sweetness; dark brown garlic in thin oil becomes bitter fast.",
        "Slice versus mince changes burn rate—match cut to heat level. Microplaned garlic burns almost instantly on hot metal."
      ]
    },
    {
      "heading": "Soy timing and heat",
      "paragraphs": [
        "Adding soy to a ripping-hot empty pan can flash harsh, almost burnt-caramel notes from sugars in the sauce. Lower heat before soy hits, or add soy off heat for a fresher profile.",
        "If you want a light glaze, reduce a measured puddle; if you want a loose drizzle, stop before meaningful reduction—nonlinear salt concentration is real."
      ],
      "tip": "Taste soy from the bottle occasionally—brands vary wildly in salinity and sweetness."
    },
    {
      "heading": "Dilution and rebalancing",
      "paragraphs": [
        "If it is too salty for the dish, dilute with water or unsalted stock and re-reduce gently, or balance with a little sweet and fat at service without turning it into candy-soy.",
        "Fat rounds salt perception; sweet bridges harsh edges—but verify salt threshold before stacking sugar."
      ],
      "bullets": [
        {
          "title": "Chili heat",
          "text": "If you add heat, remember capsaicin and salt both read louder together—taste incrementally."
        }
      ]
    },
    {
      "heading": "Optional acid and aroma finishes",
      "paragraphs": [
        "A few drops of rice vinegar or lime can lift without dominating—add after salt makes sense. Sesame oil finishes should be last; heat destroys their top notes.",
        "Scallions, ginger, or citrus zest add volatile aroma that soy alone cannot supply."
      ]
    },
    {
      "heading": "Storage and safety notes",
      "paragraphs": [
        "Garlic in oil at room temperature is a known botulism risk for long holds; refrigerate promptly and treat as short-lived unless following tested preservation methods.",
        "For make-ahead, keep components separate until service when possible."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my garlic soy taste bitter?",
      "a": "Garlic burned in oil or soy reduced too far onto hot metal. Start fresh garlic on gentler heat; add soy to moderate temperature."
    },
    {
      "q": "Can I thicken garlic soy for a clingy glaze?",
      "a": "Cornstarch slurry works for body; reduction also thickens but climbs salt fast—pick one strategy and monitor."
    },
    {
      "q": "Is low-sodium soy always better?",
      "a": "It is lower salt, not automatically better flavor. Adjust other seasonings when you swap brands."
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
    "sauceId": "soy-garlic"
  }
};

export default function GarlicSoySauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
