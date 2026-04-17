import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "teriyaki-glaze",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Teriyaki Glaze: Recipe & Balance Guide",
  "subtitle": "Soy + sugar + mirin — high-umami, sweet-salt glaze.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍯",
  "quickAnswer": "Sugar caramelizes as water leaves — pull the pan before blackening; bitter is one step past glossy. Keep the pan moving on uneven burners.",
  "intro": "Teriyaki-style glazes combine soy umami, sweeteners, and often mirin’s gentle acid and aroma. The Sauce Sensei wheel helps separate salt pull from umami depth—they stack, but they are not the same fix. You are building a sticky, sheen-forward sauce that must survive high heat without turning into tar. That means respecting reduction rate, managing sugar heat, and finishing with small acid moves after salt makes sense. Home cooks often win on flavor and lose on timing; this guide foregrounds heat behavior so the glaze stays in the glossy band. A cold spoon test helps: if it sets hard on metal in seconds, you are closer to candy than glaze.",
  "sections": [
    {
      "heading": "Heat and sheen: staying in the glossy band",
      "paragraphs": [
        "You want a glaze that flows—not a brittle candy shell. Overheated sugar moves from caramel to acrid quickly, especially in thin layers on hot metal. Keep the pan moving or control burner output; watch color and smell as much as clock time.",
        "If you reduce too dry, soy proteins and sugar can scorch in spots. A splash of water buys forgiveness; rebuild sheen with gentle heat."
      ]
    },
    {
      "heading": "Balance: salt, sweet, umami, and late acid",
      "paragraphs": [
        "If it tastes flat, verify salt threshold before chasing sweetness—soy brings both salt and umami, and duplicate soy is not always the answer. If it tastes cloying, a measured acid touch after the salt is plausible can lift without reading sour.",
        "Rice vinegar or citrus can work; add in drops and taste. Acid before salt often misleads the tongue in soy-led builds."
      ],
      "tip": "If it tastes flat, consider a tiny acid touch after salt threshold is correct — not before."
    },
    {
      "heading": "Mirin, sake, and alcohol handling",
      "paragraphs": [
        "Mirin contributes sweetness and aroma; different grades vary in sugar and salt. Taste your bottle before scaling blindly. Briefly boiling off harsh alcohol heat matters when you want clean aroma in a fast glaze.",
        "If you substitute honey or brown sugar, expect faster browning—lower heat accordingly."
      ]
    },
    {
      "heading": "Protein glazing technique",
      "paragraphs": [
        "Pat proteins dry so the glaze sticks instead of washing off into the pan. Build layers: glaze, flip, reduce pan sauce, repeat, rather than one flood that never adheres.",
        "Cornstarch slurries change behavior—thicker cling, different shine. Match thickness to how you want the sauce to ride on the food."
      ]
    },
    {
      "heading": "Storage and reheating",
      "paragraphs": [
        "Sugar-heavy glazes crystallize or tighten in the fridge. Reheat gently with a splash of water; whisk to restore shine. Microwave in bursts if you must; even heat reduces scorch risk.",
        "If the stored glaze tastes flat, refresh with a tiny fresh soy or aromatics at reheat—not more sugar by default."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is my teriyaki bitter?",
      "a": "Sugar was pushed past caramel into burnt territory, or soy reduced onto dry pan hotspots. Dilute, clean the pan film if needed, and rebuild on gentler heat."
    },
    {
      "q": "Can I thicken teriyaki without long reduction?",
      "a": "Yes—a small cornstarch slurry after flavor balance gives body faster. Slurry does not replace flavor development from modest reduction, but it helps cling."
    },
    {
      "q": "Is teriyaki always gluten-free?",
      "a": "Traditional soy sauce contains wheat unless labeled otherwise. Use tamari or certified GF soy for strict needs; mirin grades vary—read labels."
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
    "sauceId": "soy-teriyaki"
  }
};

export default function TeriyakiGlaze() {
  return <ScienceArticlePage spec={SPEC} />;
}
