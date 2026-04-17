import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-taste-metallic",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Taste Metallic",
  "subtitle": "Reactive pans, long wine reduction, and certain spices release metal ions or perceptions.",
  "readTime": "7 min read",
  "level": "Equipment & reduction",
  "emoji": "🔩",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Metallic taste often traces to unlined copper or aluminum contact with acids, long reduced wine, or iron-rich water. Switch to stainless or enamel, shorten aggressive acid cooks, and filter aggressively reduced liquids. Not every “metal” note is iron—copper and aluminum have distinct sensory signatures and different kitchen fixes.",
  "intro": "Sauces are aqueous, often acidic, often salted, and frequently held hot for long service windows—exactly the conditions that pull trace metals from reactive cookware or concentrate flavors that read as metallic even without large ion concentrations. Tomatoes, wine, and vinegar drop pH enough to dissolve oxides from aluminum over time, while copper exposed to acidic foods can contribute perceptible coppery notes unless properly lined or used only within traditional short-contact roles. Long reductions concentrate not only flavor but also dissolved solids from starting liquids, including minerals from hard water or leached metals from earlier steps. Separating true equipment chemistry from ingredient confusion matters: blood-like notes in meat sauces can be myoglobin chemistry, while tinny edges after overnight storage in the wrong pan are often literal metal pickup. The practical path is to control time, acidity, vessel choice, and holding strategy so the sauce never becomes an electrochemistry experiment.",
  "sections": [
    {
      "heading": "Time, temperature, and acid with reactive pans",
      "paragraphs": [
        "A quick deglaze in an aluminum pan rarely causes trouble; a forty-five minute tomato simmer does. Acid plus heat dissolves the protective oxide layer repeatedly, exposing fresh metal to the sauce. The longer the contact, the more opportunity for ion migration and for off-aromas that people describe as metallic.",
        "Copper is prized for heat control but unlined copper is not a long-simmer vessel for acidic sauces unless you accept traditional short-use patterns. Stainless steel and enameled cast iron are workhorses precisely because they resist this class of reaction."
      ],
      "bullets": [
        {
          "title": "Match vessel to duration",
          "text": "Use reactive metals for quick tasks; switch to neutral pans before long reductions."
        },
        {
          "title": "Scratched nonstick",
          "text": "Damaged coatings can expose underlying aluminum; if metallic notes appear after pan wear, retire the pan for acidic work."
        }
      ]
    },
    {
      "heading": "Wine reduction depth and trace mineral concentration",
      "paragraphs": [
        "Reducing wine drives off ethanol and water but leaves behind acids, salts, and trace metals that were present at low levels in the bottle and in your water. Pushed too far, the concentrate can taste sharp, bitter, and metallic-adjacent even when technique is otherwise sound.",
        "Stopping earlier, straining solids, and finishing with fresh butter or cream can polish harsh edges. If a sauce must be intensely reduced, build acidity with smaller additions across time rather than one heroic boil-down that concentrates everything at once."
      ],
      "tip": "If metallic notes track with how far you reduce wine—but not with pan type—fix reduction strategy before buying new cookware."
    },
    {
      "heading": "Water, brine, and spice misreads",
      "paragraphs": [
        "Iron-rich well water can add subtle metallic background to stocks and pan sauces, especially when reduced. Filtering or blending water for long simmers helps when geography is the culprit.",
        "Certain spices and old herbs taste dusty or bitter and can be mis-labeled as metal. Freshly crack pepper; replace ancient bay and paprika; taste your salt source—though salt rarely adds metal notes, contamination stories exist with impure finishing salts if stored badly."
      ]
    },
    {
      "heading": "Holding, storage, and service metal contact",
      "paragraphs": [
        "Hotel pans, chafers, and cheap metal bains in steam tables can contribute pickup over hours, especially with acidic tomato or wine sauces. Transfer finished sauces to inserts with stable liners or known stainless grades when holds exceed short service.",
        "Overnight storage in reactive metal can continue slow reactions cold—less dramatic than boiling, but not zero. Glass or food-grade plastic for refrigerated storage removes that variable when debugging."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a metallic taste always dangerous?",
      "a": "Not necessarily—many causes are sensory at trace levels, like brief copper contact. Persistent, strong metallic taste with other symptoms is a medical question; in the kitchen context, switch vessels and retry a small batch to see if it follows equipment."
    },
    {
      "q": "Why does my stainless pan still taste metallic?",
      "a": "Pitting, harsh scouring, or cooking highly salted acidic foods for extreme durations can still leach trace nickel or iron in edge cases, but first suspect ingredients—overcooked garlic, burned dairy, or heavy reduction—before blaming quality stainless."
    },
    {
      "q": "Can emulsion breaking cause metallic perception?",
      "a": "Broken fat can expose bitter aqueous compounds and oxidized notes that read harsh; it is not metallic chemistry by default, but confused descriptors happen. Fix the emulsion and taste again before chasing metals."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Metallic",
      "path": "/coffee-science/why-coffee-tastes-metallic"
    },
    {
      "title": "Water Content: Hidden Dilution",
      "path": "/sauce-science/water-content-hidden-dilution"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesTasteMetallic() {
  return <ScienceArticlePage spec={SPEC} />;
}
