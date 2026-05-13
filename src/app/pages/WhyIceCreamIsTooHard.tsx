import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-is-too-hard",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Is Too Hard",
  "subtitle": "When a scoop bends the spoon, it usually means there isn't enough sugar, alcohol, or milk solids in the base to keep some water liquid at freezer temperature—or your freezer is just running far colder than the parlor case it was modeled on.",
  "readTime": "7 min read",
  "emoji": "🧊",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Rock-hard ice cream almost always points to two things: not enough freezing-point depression (the way sugars, milk solids, and a splash of alcohol keep some water from freezing) or storage that's far below scoopable temperature. Most home freezers sit near 0°F (−18°C), but ice cream parlors serve at 6–10°F (−14 to −12°C). Rebalance your solids, work a little corn syrup or a controlled splash of alcohol into the mix, store closer to 0°F instead of −20°F, and let the carton temper for a few minutes before you serve it.",
  "intro": "How easy your ice cream is to scoop comes down to a mix of physics and microstructure. Sugar isn't only there for flavor—it acts as antifreeze inside the base, lowering the temperature at which water would otherwise freeze solid. Ignore that and a homemade pint turns into something closer to a brick. Hardness depends on the ice phase volume (the fraction of the water that actually freezes), how much sugar is depressing that freezing point, and how much air you whipped in during churning, called overrun. In a typical home freezer at 0°F (−18°C), a lean, low-sugar base will fight the spoon; parlor cabinets sit several degrees warmer—around 6–10°F (−14 to −12°C)—because that's where commercial recipes scoop cleanly without melting on the plate.",
  "sections": [
    {
      "heading": "Freezing point depression",
      "paragraphs": [
        "Sugars and salts dissolved in water lower the temperature at which water freezes—a phenomenon called freezing-point depression. Because they get in the way of water molecules locking into ice crystals, more water stays liquid as the temperature drops, leaving a softer, scoopable phase even in a cold freezer."
      ]
    },
    {
      "heading": "Air and fat",
      "paragraphs": [
        "Overrun (the air you whip in during churning) and the network of fat globules in the mix both break up the continuous wall of ice. That interruption is what lets your scoop dent and shear instead of behaving like a solid block of ice."
      ]
    },
    {
      "heading": "Storage",
      "paragraphs": [
        "Most home chest freezers run colder than the temperature ice cream is actually meant to be served at. Pull the carton out and let it temper on the counter for a few minutes before you scoop—those few degrees of warming move you from 'snapping the spoon' to 'rolling a clean ball.'"
      ]
    },
    {
      "heading": "Ice cream mode",
      "paragraphs": [
        "Fix My Recipe's ice cream mode compares the sugar and dairy-solids ranges in your recipe against trusted reference patterns. Bases that are too lean—not enough sugar, not enough fat or milk solids—jump out clearly, which is usually exactly why a pint won't scoop."
      ]
    },
    {
      "heading": "Sugar, alcohol, and solids",
      "paragraphs": [
        "More sugar drops the freezing point further, which makes the ice cream softer at freezer temp but can also make it melt faster on the spoon. Fat and milk solids non-fat (MSNF, the dry, non-fat portion of dairy that contains lactose and proteins) add body and chew. A modest splash of neutral spirits or liqueur depresses the freezing point further still—useful in small amounts but easy to overdo, at which point the base never sets at all."
      ]
    },
    {
      "heading": "Home freezer cycling",
      "paragraphs": [
        "Frost-free home freezers run brief auto-defrost cycles that warm the inside by a few degrees on a schedule. Over weeks, those gentle thaw-refreeze swings let ice crystals grow larger and the carton actually feels harder when you go to scoop it—even if the recipe never changed."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide is easier to act on when you anchor real numbers instead of vibes. Ice cream hardness lives at the intersection of four things: the fraction of water that actually freezes, how much sugar is depressing that freezing point, the fat network in the base, and the air you whipped in (overrun). Typical home freezers sit near 0°F (−18°C); a hard-pack parlor case serves a few degrees warmer, around 6–10°F (−14 to −12°C), which is the sweet spot for scoopability. When you build a custard base, pasteurize gently at roughly 175–180°F (79–82°C); boiling the mix outright will curdle proteins and break your emulsion. Fast freezing builds smaller ice crystals; slow freezing and any kind of partial thaw cycle grows them larger and reads icy on the tongue. Total solids—fat plus milk solids non-fat plus sugar plus any stabilizers—give the scoop body, which is why a water-rich, low-solids base freezes harder than a richer one. When you run a trial, write down ambient kitchen temperature, the set point on your freezer or machine, and any probe readings or churn times. Change one input per batch: dairy brand, sugar mix, hydration percentage, churn time, or hardening temperature. Photograph the cup side by side after each change. SenseiFood's Fix My Recipe pairs those notes with category ratio checks so your next batch is a measured step instead of a guess.",
        "If you usually cook in Celsius, copy a few key bands onto a cabinet card so you don't have to convert on the fly: 200°F is roughly 93°C (the neighborhood where many cakes and quick breads finish), 350°F is about 177°C (a common cake and cookie set point), and 212°F equals 100°C (sea-level boiling water). For espresso, classic 9-bar shots are often discussed in the 25–35 second range, always adjusted by taste to your specific machine. Altitude matters too: at higher elevations water boils at a lower temperature, which shifts how evaporation, candy-making, and espresso extraction all behave. Bakers in the mountains should trust internal temperature and visual set more than the clock.",
        "Humidity quietly changes how dough skins on the bench, how icing crusts, and how staling feels the next morning—jot down outdoor weather when results swing for no obvious reason. For anything oven-based, log when preheat actually finishes: many home ovens overshoot the set point by 10–20°F after the beep. For frozen desserts, log the freezer display temperature if you have one; a deep chest freezer hovering around −10°F (−23°C) holds texture differently than a frost-free kitchen freezer running auto-defrost cycles. Small environmental logs are what turn a baffling one-off failure into a pattern you can actually solve."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Overrun (the air whipped in during churning) changes both how flavors release on the tongue and how hardness reads in the hand—home machines vary widely, so note churn time and the visual finish (looks like soft-serve, just barely holding ribbons) right before you transfer to harden. Emulsifiers and eggs shift freezing curves by a few degrees, which can be enough to change scoop feel, so document any brand changes you make. If you temper before service, track how long the carton spent above 0°F (−18°C); even small windows of warm-up dramatically change mouthfeel. Total solids matter more than fat alone—milk solids non-fat (MSNF, the lactose-and-protein portion of milk that isn't fat) bind water in their own way, and a base with the same fat but more MSNF can feel firmer at the same sugar level. Alcohol and invert syrups both depress freezing point too; a couple of percent of ethanol or a partial swap of sucrose for invert can keep bases softer at 0°F than sugar math alone would predict."
      ]
    }
  ],
  "related": [
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
      "q": "Does letting it sit for five minutes really help?",
      "a": "Yes—pulling the carton out and letting it temper on the counter for a few minutes raises the surface temperature into the parlor scooping range without actually melting anything. It's a legitimate, professional technique, not a workaround."
    },
    {
      "q": "What about glycerin?",
      "a": "Glycerin and similar commercial stabilizer tricks belong to industrial freezing-point strategies that count on tight temperature control and specific dosing. Home recipes work differently, and you can usually fix hardness with sugar balance, a touch of alcohol, and smarter storage instead of reaching for industrial humectants."
    }
  ]
};

export default function WhyIceCreamIsTooHard() {
  return <ScienceArticlePage spec={SPEC} />;
}
