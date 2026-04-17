import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "balsamic-glaze",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Balsamic Glaze: Recipe & Balance Guide",
  "subtitle": "Vinegar-forward reduction — intense, syrupy, easy to overshoot.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍇",
  "quickAnswer": "Reduction concentrates sugar and acid together; the last third moves fastest — taste often, lower heat early, and remember the Sauce Sensei reduction curve is nonlinear.",
  "intro": "Balsamic glaze is a concentration game. As water leaves, sweetness and acidity both rise, and bitter or caramel-bitter notes can appear depending on quality and heat. Cheap “balsamic” behaves differently than traditional aged vinegar; both can glaze, but the margin between glossy and acrid changes with starting material. The Sauce Sensei reduction control exists because this process is not a straight line: late bubbling changes flavor aggressively. Your job is to steer heat and time so the glaze stays pourable, balanced, and useful in tiny amounts—finishing strength, not chuggable syrup. If you need the same flavor impact on a salad as on roasted meat, remember fat and salt on the plate change how sharp the drizzle reads—taste in context, not only from a spoon.",
  "sections": [
    {
      "heading": "Watch the tail of reduction",
      "paragraphs": [
        "Early bubbling removes mostly water; late bubbling changes dissolved solids fast. If the liquid becomes tacky, smells sharp in an unpleasant way, or sticks to the spoon like tar, you have gone too far for a clean finish—dilute carefully with a little water or mild stock and rebuild gently.",
        "Use a wider pan for more even evaporation; a tall narrow pot can hide hot spots that scorch corners."
      ]
    },
    {
      "heading": "Heat discipline and stirring",
      "paragraphs": [
        "Medium-low heat with occasional stirring beats a rolling boil that throws sugars against hot metal. Scraping the pan keeps solids from becoming bitter nodules.",
        "If you add sweetener to assist glazing, add in small pinches and taste—balsamic already carries sugar; duplication is how people land on candy-vinegar."
      ],
      "tip": "When in doubt, pull early; you can always reduce more—you cannot un-burn."
    },
    {
      "heading": "Balance: acid, sweetness, and bitter edge",
      "paragraphs": [
        "Balancing a balsamic glaze is not the same as balancing tomato sauce. You may need a tiny touch of sugar to round harsh acid, or a drop of water to reopen aroma if it feels “closed.” Fat is rarely the hero here; this is vinegar-led.",
        "Salt can help integration in savory applications—a trace makes sweet-sour feel intentional rather than sticky."
      ]
    },
    {
      "heading": "Uses and portioning",
      "paragraphs": [
        "Drizzle finishes reward tiny amounts: caprese, roasted vegetables, grilled meat. Make more than you need only if you enjoy reheating chemistry experiments—each reheat drives further concentration.",
        "Store in a squeeze bottle for controlled plating; wide-mouth jars invite over-pouring."
      ]
    },
    {
      "heading": "Storage, thickness drift, and rescue",
      "paragraphs": [
        "Fridge storage thickens glazes; warm gently before judging flavor. If it becomes candy-hard, warm with a splash of water and stir back to pourable.",
        "If mold or off aromas appear, discard—high sugar does not make a sauce immortal."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I glaze without reducing for an hour?",
      "a": "Yes—buy a decent pre-reduced product or thicken a smaller amount quickly with controlled heat. Quality in equals quality out; reduction cannot fix industrial sourness."
    },
    {
      "q": "Why does my glaze taste bitter?",
      "a": "Over-reduction, scorching, or low-grade vinegar with aggressive caramel color. Dilute, lower heat next time, and consider a different starting bottle."
    },
    {
      "q": "Is balsamic glaze the same as balsamic vinegar?",
      "a": "Glaze is concentrated vinegar (sometimes with added sweetener). Flavor density and sugar-acid balance differ; substitute carefully in vinaigrettes."
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
    "sauceId": "reduction-balsamic"
  }
};

export default function BalsamicGlaze() {
  return <ScienceArticlePage spec={SPEC} />;
}
