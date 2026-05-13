import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-springs-back-when-shaping",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Springs Back When Shaping",
  "subtitle": "When the dough fights the bench knife like a rubber ball, gluten is still storing elastic stress—usually it wants a bench rest, a warmer relax, or more bulk time.",
  "readTime": "7 min read",
  "emoji": "↩️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Spring-back is tight gluten refusing to creep: let divided pieces bench rest 10–20 minutes so proteins relax, or finish bulk if the dough is still immature and fighting you. Cold dough needs more patience than warm dough for the same rest clock.",
  "intro": "Shaping has two classic frustrations: dough that melts slack and dough that springs back like a yoga mat. Spring-back is elastic energy stored in gluten networks—proteins still lined up tight, not ready to take a new shape. Bench rest lets those strands redistribute stress without losing all your gas. Under-fermented dough can also feel springy because fermentation has not softened the matrix yet; in that case, more time in bulk beats heroic wrestling at the table.",
  "sections": [
    {
      "heading": "Bench rest",
      "paragraphs": [
        "After pre-shaping, gluten needs a minute to stop shouting. Shaping immediately after dividing often feels like wrestling a rubber ball; ten to twenty minutes at room temperature lets viscous flow return so you can create tension without tearing."
      ]
    },
    {
      "heading": "Under-fermented dough",
      "paragraphs": [
        "Immature dough stays tight because fermentation has not softened the protein frame yet. If volume is low and the dough feels cold-snappy, bulk probably wanted more time—not a stronger bicep at shaping."
      ]
    },
    {
      "heading": "Cold dough",
      "paragraphs": [
        "Fridge-cold dough feels stiffer and springs faster. Let it warm until your formula allows—sometimes just thirty to sixty minutes on the counter changes the whole shaping story."
      ]
    },
    {
      "heading": "Debug companion",
      "paragraphs": [
        "Spring-back plus dense crumb often points to under-proofing globally. Spring-back plus collapse might mean you are mixing signals—log dough temperature and times, then cross-check ratios in bread mode instead of guessing three fixes at once."
      ]
    },
    {
      "heading": "Relaxation temperature",
      "paragraphs": [
        "Warmer dough relaxes faster; cold dough needs longer bench rest before final shaping. Over-mixing after autolyse can increase elastic memory—gentle handling buys cooperation."
      ]
    },
    {
      "heading": "Divide and conquer",
      "paragraphs": [
        "Pre-shape rounds before long batards: staged alignment reduces fighting at the final pass. Think persuasion, not arm-wrestling."
      ]
    },
    {
      "heading": "Bench rest and temperature in plain numbers",
      "paragraphs": [
        "This guide on why dough springs back when shaping is easier to respect when you treat relaxation as timed, not magical. Warm dough relaxes faster; cold dough from the fridge often needs that 10–20 minute bench rest before final shaping so gluten stops acting like a rubber band. For baking day, internal doneness for many lean loaves still lands near 200–208°F (93–97°C)—spring-back is a shaping-room problem, but the finish line stays familiar.",
        "Celsius users: mid-20s °C on the counter is a different dough than high-teens °C; small room shifts change relaxation speed. Altitude nudges boil-off and crust set more than it changes bench rest physics.",
        "Humidity and flour batch change how extensible dough feels after the same clock time. If spring-back pairs with dense crumb, log bulk time and temperature before you blame the recipe author’s soul."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Springback in pizza stretch?",
      "a": "Same physics—rest between stretches."
    },
    {
      "q": "Whole grain more spring?",
      "a": "Bran cuts strands—often less spring than white."
    }
  ]
};

export default function WhyDoughSpringsBackWhenShaping() {
  return <ScienceArticlePage spec={SPEC} />;
}
