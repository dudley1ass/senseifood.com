import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-water-chemistry-matters",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Water Chemistry Matters",
  "subtitle": "Your tap water is not invisible: dissolved minerals (hardness), buffering power (alkalinity), and sometimes chlorine hitchhike into the cup and change what \"the same recipe\" tastes like morning to morning.",
  "readTime": "8 min read",
  "level": "Water chemistry",
  "emoji": "💧",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Coffee extraction is not just hot water touching grounds; it is water as a solvent. Magnesium and calcium (the main \"hardness\" actors) pull flavors differently; bicarbonate alkalinity acts like a sponge for acids and can flatten brightness if it is high; chlorine can add a pool-plastic whisper you will blame on beans. When water changes, your effective grind and temperature can feel like they changed too—even if you did not touch them.",
  "intro": "Roughly ninety-eight percent of a brewed cup is water by mass, which makes it odd how often people only tune the two percent. Tap water is a shifting blend of dissolved ions, sometimes disinfectants, and occasionally weird seasonal shifts at the municipal plant. Hardness—mostly calcium and magnesium—changes how readily flavors leave the grounds; alkalinity—often bicarbonate—buffers pH and changes how acids read on your tongue, sometimes rounding harshness and sometimes dulling the sparkle you paid for in a light roast. Even switching from distilled jugs to remineralized reverse-osmosis water can move a dial recipe from \"balanced\" to \"flat\" without a single grind adjustment. Treating water as a controlled variable is how tasting notes stop feeling like astrology.",
  "sections": [
    {
      "heading": "Ion profile versus flavor axes",
      "paragraphs": [
        "Magnesium is often described as a bit more \"expressive\" in how it pulls certain fruit and floral notes; calcium can lean heavier in mouthfeel and behaves differently with scale on kettles and espresso boilers. Total hardness is not one simple knob—ratio of ions matters—but staying in a moderate specialty-coffee band usually avoids both chalky over-mineral cups and flat, under-extracted ones. Sodium and potassium at normal tap levels are rarely the main character unless something unusual is going on, but very high chloride can taste salty and interact badly with roast defects.",
        "The practical home move is boring and effective: read a municipal report if you have one, or at least notice conductivity/TDS trends if you use a handheld meter, then compare to a recipe you can repeat (third-wave mineral packets, jugs with printed mineral content, or a stable filter system). Consistency beats brand mystique."
      ],
      "bullets": [
        {
          "title": "SCA-style targets",
          "text": "Industry cheat sheets often give target ranges for total hardness and alkalinity; treat them as starting lines on a track, then adjust to your roast level and whether you mostly brew filter or espresso."
        },
        {
          "title": "Third-wave packets",
          "text": "Little bottles of mineral concentrate mixed into distilled or reverse-osmosis water give you the same ion recipe every week—useful when tap water swings with seasons or construction."
        }
      ]
    },
    {
      "heading": "Alkalinity, acidity, and perceived brightness",
      "paragraphs": [
        "Bicarbonate is the main buffering player in many taps: it mops up acid, which can tame sharpness on a delicate light roast but also smear away malic and citric clarity if it is excessive. In the cup that reads as \"dull,\" \"flat,\" or \"muddy\" even when your brew technique looks fine on paper. Espresso magnifies the effect because contact time is short and pressure changes how dissolution feels; a water that cups fine as filter can still taste blunt as espresso if alkalinity fights the roast.",
      ],
      "tip": "If your coffee suddenly goes flat when you move apartments, change filters, or visit a friend’s kitchen, suspect alkalinity and overall mineral profile before you chase finer grind—chasing solubility while bicarbonate climbs is a recipe for uneven shots and confused mornings."
    },
    {
      "heading": "Chlorine, chloramine, and off-aromas",
      "paragraphs": [
        "Chlorine and chloramine disinfectants can add medicinal or plastic-like notes, especially when the coffee itself is delicate and low in dissolved solids to hide behind. Carbon filters help, but cartridges expire quietly—change them on a schedule you can actually keep. Chloramine is harder to remove than free chlorine and sometimes needs longer contact time or catalytic carbon; if your glass of water smells like a pool, your brew will too.",
      ]
    },
    {
      "heading": "Equipment life, scale, and maintenance feedback loops",
      "paragraphs": [
        "Hard water drops calcium carbonate scale on heating elements and tiny restrictions, which slowly changes flow and temperature stability—your machine can \"drift\" in taste because its plumbing changed, not because the bag aged overnight. Reverse osmosis with lazy remineralization—or stagnant tank water—can swing TDS in ways your tongue notices before your spreadsheet does. Aim for intentional remineralization to a repeatable target instead of chasing near-zero TDS forever, which often tastes aggressively sharp and unforgiving of small brew errors.",
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is bottled spring water always better than tap?",
      "a": "Not automatically. Spring water varies by quarry and season; some bottles are secretly high in bicarbonate and will steamroll acidity, while others are soft and sweet. Read the label’s mineral panel when you can, or at least taste plain water side by side with your usual—consistency matters more than mountain photography on the label."
    },
    {
      "q": "Can I use a simple pitcher filter?",
      "a": "Pitcher filters are great at removing chloriney smells and some off flavors, but they rarely turn hard, alkaline water into a specialty recipe by themselves. Think of them as a kindness layer for aroma, then add testing or remineralization if you want stable extraction—not a magic wand for total mineral redesign."
    },
    {
      "q": "Why does my RO water taste flat with the same beans?",
      "a": "Very low mineral water extracts coffee differently—sometimes thin, sometimes unexpectedly sharp—and it forgives almost nothing. Add minerals back in measured doses to a balanced target; coffee wants a solvent with personality, not distilled-lab emptiness, unless you are deliberately experimenting."
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
