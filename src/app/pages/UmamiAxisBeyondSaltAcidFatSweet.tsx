import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "umami-axis-beyond-salt-acid-fat-sweet",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Umami: The Missing Fifth Axis",
  "subtitle": "Balanced sauces can still feel empty without savory depth compounds.",
  "readTime": "8 min read",
  "emoji": "🍄",
  "quickAnswer": "If a sauce is balanced but hollow, add umami sources—soy, mushroom, parmesan, tomato paste, Worcestershire—in small doses and retaste. Depth is not the same as saltiness.",
  "intro": "Salt, acid, fat, and sweet explain a lot, but not everything. Umami adds persistent savory depth that makes sauces taste complete rather than merely balanced. You can tick every box on a flavor wheel and still feel unsatisfied if glutamates and nucleotides are thin: the sauce reads clean, polite, and forgettable. SenseiFood treats umami as its own axis because the fixes differ from “more salt” or “more butter.” Umami lengthens flavor, supports aroma, and helps bridge acid and sweet so neither reads sharp or cloying. When in doubt, add one umami source, taste, then decide whether salt still needs to move.",
  "sections": [
    {
      "heading": "Why balanced can still feel empty",
      "paragraphs": [
        "A sauce can hit structural balance yet lack glutamate- and nucleotide-driven savoriness. The result is clean but unsatisfying flavor—like a well-lit room with no furniture.",
        "Umami sources increase perceived depth and length without necessarily increasing acidity or sweetness. That matters when you are out of safe moves on the other axes."
      ]
    },
    {
      "heading": "Practical umami additions (and discipline)",
      "paragraphs": [
        "Use small doses and retaste: soy sauce, mushroom concentrates, parmesan rind simmered and removed, tomato paste browned briefly, anchovy melted into aromatics, Worcestershire, fish sauce in unexpected places. Each brings a different vector—fermented depth, roasted depth, marine depth.",
        "Layer rather than dump. Umami can read muddy if you add every pantry bottle; pick a story and commit."
      ],
      "tip": "Still missing something? Add UMAMI—after salt threshold is plausible."
    },
    {
      "heading": "Umami versus salt: related but not identical",
      "paragraphs": [
        "Soy sauce adds both; parmesan adds both. If you fix hollow flavor only with salty umami carriers, you may overshoot salinity. Sometimes mushroom tea or a splash of glutamate-rich stock increases savoriness with less sodium load than another shake of soy.",
        "Taste for salt and umami as separate questions: “Is it loud?” versus “Does it linger and feel mouth-filling?”"
      ],
      "bullets": [
        {
          "title": "Tomato paste",
          "text": "Brown it in fat briefly to shift raw-acid character toward roasted savoriness before liquids join."
        },
        {
          "title": "Mushroom",
          "text": "Dried mushrooms, rehydrated with the soaking liquid strained, add both body and nucleotides."
        }
      ]
    },
    {
      "heading": "Pairing umami with fat and acid",
      "paragraphs": [
        "Fat carries aroma; umami adds mid-palate weight. Without acid, rich umami sauces can feel heavy—lemon, vinegar, or tomato acid still matter for lift.",
        "Sweet can round ferocious edges—think tamarind or a pinch of sugar with soy—but sweet alone cannot replace savoriness."
      ]
    },
    {
      "heading": "When not to chase umami",
      "paragraphs": [
        "Delicate butter sauces and some seafood builds want restraint; heavy umami can dominate subtle aromas. Match intensity to the protein and garnish.",
        "If the dish already includes aged cheese, cured meat, or long-roasted stocks, the hollow feeling may be texture or temperature—not missing glutamate."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is MSG cheating?",
      "a": "It is a tool like salt—use thoughtfully in tiny amounts if you choose. Many natural ingredients are rich in glutamate. Label comfort varies by kitchen; technique does not."
    },
    {
      "q": "Why does my vegan sauce still feel flat with plenty of salt?",
      "a": "Salt amplifies what is there; if savory nucleotides are low, you get loud salt without depth. Add mushroom, tomato, koji, miso, or nutritional yeast in measured doses."
    },
    {
      "q": "Can you have too much umami?",
      "a": "Yes—muddy, monotonic savoriness is real. Dilute, brighten with acid, or reduce the heaviest contributor and rebuild."
    }
  ],
  "related": [
    {
      "title": "Salt Is an Amplifier",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    },
    {
      "title": "Emulsion vs Non-Emulsion",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function UmamiAxisBeyondSaltAcidFatSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
