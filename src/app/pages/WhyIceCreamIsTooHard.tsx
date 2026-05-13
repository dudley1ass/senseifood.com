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
      "heading": "What to log on the next batch",
      "paragraphs": [
        "Ice cream is a contest between sugar, dairy, air, and cold: sugar and alcohol lower the freezing point, fat and milk solids carry flavor and body, and overrun is the air you folded in during churn. Home freezers vary, so the same formula can feel rock-hard in one house and soft in another—note your churn finish, hardening time, and where the pint sat in the box.",
        "Change one lever at a time—base sweetness, milk fat level, churn time, or hardening temp—and taste a spoonful after five minutes on the counter when you compare batches. SenseiFood’s Fix My Recipe ice cream checks help when you need a second opinion on solids and sugar balance."
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
