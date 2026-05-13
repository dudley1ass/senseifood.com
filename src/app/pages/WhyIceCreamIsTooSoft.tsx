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
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide is easier to act on when you anchor real numbers instead of vibes. Ice cream firmness lives at the intersection of four things: the fraction of water that freezes, how much sugar is depressing that freezing point, the fat network, and how much air you incorporated during churning (overrun). Typical home freezers sit near 0°F (−18°C); a parlor hard-pack case serves a few degrees warmer, around 6–10°F (−14 to −12°C), and that's the scoopability sweet spot. When you build a custard base, pasteurize gently around 175–180°F (79–82°C) without boiling—boiling will curdle proteins and break your emulsion. Rapid freezing builds smaller ice crystals; slow freezing or partial thaw cycles grow them and start to read icy. Total solids (fat, milk solids non-fat, sugar, stabilizers) give the scoop body, which is why water-rich bases freeze harder while alcohol-heavy bases never set. When you run a trial, write down ambient kitchen temperature, the freezer set point, and—when relevant—a probe reading or churn time. Change one input per batch: dairy brand, sugar mix, hydration percentage, churn time, or hardening temperature. Photograph the cup side by side after each change. SenseiFood's Fix My Recipe pairs those notes with category ratio checks so the next attempt is a measured step instead of a guess.",
        "If you usually cook in Celsius, copy a few key bands onto a card inside your cabinet: 200°F ≈ 93°C (the neighborhood where many cakes and breads finish), 350°F ≈ 177°C (a common cake-and-cookie set point), 212°F = 100°C (sea-level boiling water), and—for espresso fans—classic 9-bar shots are often discussed in the 25–35 second range, always adjusted by taste. Altitude matters: at higher elevations water boils lower, which shifts evaporation, candy-making, and extraction times. Bakers in the mountains should trust internal temperature and visual set over the clock.",
        "Humidity quietly changes how dough skins on the bench, how icing crusts, and how staling feels the next day—write down outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion: many home ovens drift another 10–20°F after the beep. For frozen desserts, log the freezer display temperature if available; a deep chest freezer holding near −10°F (−23°C) behaves differently than a frost-free kitchen freezer running auto-defrost cycles. Small environmental logs are how a baffling one-off failure becomes a pattern you can actually solve."
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
