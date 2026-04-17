import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-water-chemistry-matters",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Water Chemistry Matters",
  "subtitle": "Hardness, alkalinity, and filter solids change extraction efficiency and sensory balance.",
  "readTime": "8 min read",
  "level": "Water chemistry",
  "emoji": "💧",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Magnesium extracts differently than calcium; high bicarbonate buffers acid and dulls brightness; chlorinated tap adds off-notes. Match water to roast or use calibrated packets. Because extraction is an ion-mediated process, changing water changes effective grind and temperature—not just taste in the abstract.",
  "intro": "Coffee is roughly ninety-eight percent water by mass in the cup, yet many baristas tune grind and dose while ignoring the largest ingredient. Tap water is a soup of dissolved cations, anions, and sometimes chlorine or chloramine disinfectants that survive long enough to react in the cup. Hardness (calcium and magnesium) influences how readily soluble coffee solids leave the puck; alkalinity (bicarbonate) buffers pH and determines how acids read on the palate. Even modest shifts—seasonal source changes at the municipal plant, a new building softener, or switching from jugged distilled to remineralized RO—can move a dial recipe from “balanced” to “hollow” without a single change to beans. Treating water as a controlled variable is how professionals make sensory feedback meaningful: you cannot debug extraction if the solvent keeps changing underneath you.",
  "sections": [
    {
      "heading": "Ion profile versus flavor axes",
      "paragraphs": [
        "Magnesium is often associated with extracting more of certain fruit-forward compounds; calcium can contribute to heavier mouthfeel and different scale behavior on equipment. Total hardness is not a single knob—ratio matters—but staying within specialty coffee’s commonly cited acceptable bands avoids both flat under-extraction and chalky over-mineralization.",
        "Sodium and potassium at typical tap levels are minor taste players unless you are near ocean air intrusion or unusual geology, but chloride at high levels can taste salty and interact with roast defects. The practical move is to know your report or measure conductivity and compare to a target recipe."
      ],
      "bullets": [
        {
          "title": "SCA-style targets",
          "text": "Industry references often cite total hardness and alkalinity ranges; use them as starting points, then adjust to your roast and machine."
        },
        {
          "title": "Third-wave packets",
          "text": "Mineral concentrates mixed into distilled or RO water give repeatable ion recipes when municipal water is unstable."
        }
      ]
    },
    {
      "heading": "Alkalinity, acidity, and perceived brightness",
      "paragraphs": [
        "Bicarbonate buffers acids in brewed coffee, which can tame sharpness on light roasts but also flatten desirable malic and citric clarity if alkalinity is excessive. That reads in the cup as “dull” or “muddy” even when extraction metrics look fine.",
        "Espresso magnifies water effects because short contact time and high pressure change dissolution kinetics; a water that cups okay as filter may still taste blunt as espresso if alkalinity is wrong for the roast."
      ],
      "tip": "If acidity disappears when you change buildings or filters, suspect alkalinity before you chase finer grind—chasing solubility with grind while bicarbonate climbs is a recipe for uneven shots."
    },
    {
      "heading": "Chlorine, chloramine, and off-aromas",
      "paragraphs": [
        "Chlorinated disinfectants can create medicinal or plastic-like notes, especially in low-TDS brews where coffee aromatics are exposed. Carbon filtration that is expired or bypassed fails silently—change cartridges on schedule.",
        "Some regions use chloramine, which is harder to remove than free chlorine and may need catalytic carbon or longer contact time. If your water smells like a pool, your coffee will too."
      ]
    },
    {
      "heading": "Equipment life, scale, and maintenance feedback loops",
      "paragraphs": [
        "Hard water precipitates carbonate scale on boilers and restrictors, changing effective temperature and flow over months. A machine that “drifted” in taste may be telling you its physics changed, not that beans aged overnight.",
        "Reverse osmosis systems that dump remineralization cartridges or produce stagnant tank water can swing TDS. Remineralize intentionally to a measured spec rather than chasing zero TDS forever, which often yields flat, aggressive cups that punish extraction errors visibly."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is bottled spring water always better than tap?",
      "a": "Not automatically—spring labels vary by source and season. Read mineral content if printed, or taste and test. Some bottled waters are extremely high in bicarbonate and will dull acidity; others are soft and pleasant. Consistency matters more than branding."
    },
    {
      "q": "Can I use a simple pitcher filter?",
      "a": "Pitcher carbon filters reduce chlorine and some organics but do not fully redefine hardness or alkalinity. They help aroma off-notes more than they fix mineral balance. Pair them with testing if your goal is extraction stability."
    },
    {
      "q": "Why does my RO water taste flat with the same beans?",
      "a": "Near-zero TDS water extracts differently and can taste thin or sharp in unhelpful ways. Add measured minerals back to specialty targets; coffee wants a balanced ionic environment, not laboratory-pure water."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Metallic",
      "path": "/coffee-science/why-coffee-tastes-metallic"
    },
    {
      "title": "Why Coffee Tastes Salty",
      "path": "/coffee-science/why-coffee-tastes-salty"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyCoffeeWaterChemistryMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
