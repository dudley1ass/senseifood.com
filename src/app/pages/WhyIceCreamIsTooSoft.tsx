import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-is-too-soft",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Is Too Soft",
  "subtitle": "Too much sugar, too much booze, a warm or overworked freezer, or a base that left the machine before it was actually frozen all conspire to keep the carton soupy.",
  "readTime": "7 min read",
  "emoji": "🍦",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "melts-fast"
  },
  "quickAnswer": "Ice cream that's soft straight out of the freezer usually means one of a few things: the recipe has too much sugar or alcohol depressing the freezing point, the base didn't get cold enough during churning, or your freezer is running warm. Check how cold the dasher (the paddle that scrapes the freezing bowl) was when you drew the mix, give the carton a proper hardening step, and look at how the recipe is balanced before blaming the machine.",
  "intro": "Soft can be wonderful—or it can be a sign the base never finished setting. The first thing to do is figure out which one you've got: ice cream that melts quickly on the spoon, or ice cream that simply never firmed up. Soft-serve texture inside a hard-pack freezer often means the mix came out of the machine too warm (above roughly 21°F / −6°C for many bases) or that there's so much sugar or alcohol in the recipe that the freezing point sits below your freezer's actual temperature. A pint that feels dense and soft—heavy, not pillowy—is a different problem and usually points to poor air incorporation during churning.",
  "sections": [
    {
      "heading": "Solids and alcohol",
      "paragraphs": [
        "Sugars and alcohol both lower the temperature at which the base actually freezes, a behavior called freezing-point depression. A generous pour of cordial, liqueur, or simple syrup can drop the freezing point so far that your home freezer—which usually runs near 0°F (−18°C)—simply isn't cold enough to set the mix. The result is a soupy carton that never firms up no matter how long you wait."
      ]
    },
    {
      "heading": "Machine draw temperature",
      "paragraphs": [
        "If you pull the mix out of the machine before it's actually frozen, more water still has to freeze later inside the carton with no agitation, which leads to uneven set—soft on one side, firmer on the other. Run the machine until the texture looks like soft-serve barely holding ribbons, then transfer to the coldest part of the freezer for a proper hardening step before serving."
      ]
    },
    {
      "heading": "Thermal abuse",
      "paragraphs": [
        "Every time you open the freezer door, warm kitchen air swaps in and pushes the interior temperature up by a few degrees before the compressor catches up. Repeated cycling over days—what dairy textbooks call thermal abuse or heat shock—means the carton spends real time partially melted, never fully hardening, and feeling soft to the touch even though the freezer 'looks' cold."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Ice cream mode in Fix My Recipe flags formulas that are heavy on sugar or alcohol relative to the rest of the mix—the most common reason a homemade base refuses to firm up. Pair that with a quick thermometer check inside your freezer; the math only helps when you know the actual temperature the carton is sitting at."
      ]
    },
    {
      "heading": "Freezer and churn",
      "paragraphs": [
        "Home ice cream machines rarely incorporate as much air as a commercial freezer, so your texture will legitimately be softer and denser than a parlor scoop made from the same recipe—that's not a flaw, that's the equipment. After churning, transfer the carton to the coldest spot in your freezer and let it cure undisturbed for at least four hours before serving; this hardening step is what locks in firm, scoopable structure."
      ]
    },
    {
      "heading": "Recipe balance",
      "paragraphs": [
        "Heavy doses of corn syrup or invert sugar (a syrup made by splitting sucrose into its simpler glucose and fructose parts—stickier and more freeze-resistant than ordinary sugar) can keep a base permanently soft because they hold so much water in liquid form at freezer temperatures. Check the ratio of corn syrup or invert to plain sugar against a trusted reference recipe; the fix is often to swap some of it back to plain sucrose so the base actually sets."
      ]
    },
    {
      "heading": "What to log on the next batch",
      "paragraphs": [
        "Ice cream is a contest between sugar, dairy, air, and cold: sugar and alcohol lower the freezing point, fat and milk solids carry flavor and body, and overrun is the air you folded in during churn. Home freezers vary, so the same formula can feel rock-hard in one house and soft in another—note your churn finish, hardening time, and where the pint sat in the box.",
        "Change one lever at a time—base sweetness, milk fat level, churn time, or hardening temp—and taste a spoonful after five minutes on the counter when you compare batches. SenseiFood’s Fix My Recipe ice cream checks help when you need a second opinion on solids and sugar balance."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Overrun (the air whipped into the base during churning) changes both how flavors release and how soft a pint reads in the hand—home machines vary, so note churn time and the visual finish (looks like soft-serve, barely holding ribbons) before transferring. Emulsifiers and eggs shift the freezing curve by a few degrees, which can be enough to change scoop feel, so document any brand changes. If you temper before service, track how long the carton spent above 0°F (−18°C); even small windows of warm-up change mouthfeel dramatically. Solids—not just fat—include milk solids non-fat (the lactose-and-protein dry portion of dairy), and a higher MSNF can bind water in its own way and change scoop firmness at the same sugar level. Alcohol and invert syrups both depress freezing point; even a couple of percent of ethanol can keep a base softer at 0°F than the sugar math alone would predict."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Melts Fast",
      "path": "/ice-cream-science/why-ice-cream-melts-fast"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    }
  ],
  "faqs": [
    {
      "q": "Why does it feel softer after sitting in the freezer a week?",
      "a": "Repeated freezer-door cycling lets the carton partially melt and refreeze in slow motion over days, growing ice crystals and gradually shifting the unfrozen liquid around. The texture suffers because each thaw-refreeze pass concentrates dissolved solids in shrinking liquid pockets and softens the overall structure."
    },
    {
      "q": "Is gelato supposed to be softer?",
      "a": "Yes—gelato is intentionally formulated to scoop and eat at warmer temperatures than American hard-pack ice cream (think roughly 10–15°F / −12 to −9°C), and it's also churned with less air. That softer mouthfeel is the entire point of the style, not a defect."
    }
  ]
};

export default function WhyIceCreamIsTooSoft() {
  return <ScienceArticlePage spec={SPEC} />;
}
