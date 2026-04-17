import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-doesnt-scoop-smoothly",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Doesn't Scoop Smoothly",
  "subtitle": "Hardness is tied to freezing point depression, ice fraction, and temper time—not “bad luck.”",
  "readTime": "7 min read",
  "level": "Freezing & temper",
  "emoji": "🍨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Rock-hard pints usually mean low sugar/alcohol, very low freezer temp, or high water fraction. Let temper 5–10 minutes; if still chippy, adjust solids and freezing curve.",
  "intro": "Scooping is not a strength sport—it is rheology in a narrow temperature window. Ice cream is a partially frozen foam: ice crystals, fat globules, air cells, and unfrozen syrup phase work together so the matrix bends instead of shattering. When the unfrozen phase is too small or the ice fraction too high, the pint reads as brick-hard; when tempering is skipped, you fracture ice lamellae into powdery shards that feel “chippy” even if the formula is fine. Freezer temperature, storage position, overrun, and recipe solids all change the same scoop. Below we separate “too cold” problems from “wrong balance” problems so you know whether to wait five minutes or reformulate.",
  "sections": [
    {
      "heading": "Freezer temperature as part of the recipe",
      "paragraphs": [
        "Home freezers often run colder than people assume, especially near the back wall or in frost-free cycles. A few degrees Fahrenheit can materially change scoop effort because hardness is not linear with temperature in this range.",
        "If you can, store serve tubs in a slightly warmer zone or transfer to the refrigerator door for a short staging before guests arrive. For long storage, accept that you will temper—think of temper time as a required ingredient for service."
      ],
      "bullets": [
        {
          "title": "Measure once",
          "text": "An inexpensive fridge thermometer in the ice cream zone ends debates about whether “it used to scoop easier.”"
        },
        {
          "title": "Pint geometry",
          "text": "Narrow deep pints insulate the center; the surface may temper while the core stays rock hard—stir expectations accordingly."
        }
      ]
    },
    {
      "heading": "Temper sequence before service",
      "paragraphs": [
        "Tempering lets the surface yield so the scoop shears through lubricated, partially melted layers instead of crushing rigid ice. Going straight from deep cold to pressure generates fractures that read as dryness and powder even when fat content is adequate.",
        "Five to ten minutes on the counter is a starting point; humid rooms and warm lights change the rate. For neat spheres, aim for a surface that yields to a thumb press without collapsing the whole pint."
      ],
      "tip": "If you need multiple scoops, work in waves—return the container to the freezer between batches so melt does not progress unevenly."
    },
    {
      "heading": "Solids, sugar, and freezing point depression",
      "paragraphs": [
        "Sugars and alcohol lower the freezing point of the unfrozen phase; dairy solids and other solutes change water availability. A formula that is lean on sugars or total solids can freeze harder than expected, especially if water inputs are high.",
        "If tempering never helps, look at the balance sheet: MSNF, fat, egg yolk, stabilizers, and sweetener profile. Commercial bases also assume a target overrun; a dense, low-air home churn can feel firmer even when the mix is correct on paper."
      ]
    },
    {
      "heading": "Holding after scooping",
      "paragraphs": [
        "Pre-scooped nests in a pan can sublimate and recrystallize at edges, especially uncovered in a cold blast. Cover, minimize airflow, and avoid refreezing partially melted scoops if you care about texture—each heat shock coarsens ice.",
        "For service lines, slightly warmer holding cabinets are a different physics than home freezers; mimic the idea by letting scoops temper briefly before plating rather than fighting a −20°F core."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why was last week’s batch easier to scoop?",
      "a": "Freezer cycling, door openings, and position in the stack change temperature. Also, freshly churned ice cream often has slightly different ice crystal size until it ripens—texture can shift after a few days."
    },
    {
      "q": "Does a hot scoop help?",
      "a": "A warm metal scoop cuts mechanical effort but does not replace tempering; it can over-melt surfaces while the center stays hard, yielding messy shapes."
    },
    {
      "q": "Is hard ice cream “more premium”?",
      "a": "Not inherently. Some gelato-style servings are softer by design; rock-hard pints often indicate storage temperature or water-to-solids balance, not luxury."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Is Too Hard",
      "path": "/ice-cream-science/why-ice-cream-is-too-hard"
    },
    {
      "title": "Why Ice Cream Melts Fast",
      "path": "/ice-cream-science/why-ice-cream-melts-fast"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamDoesntScoopSmoothly() {
  return <ScienceArticlePage spec={SPEC} />;
}
