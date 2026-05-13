import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-separates",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Separates",
  "subtitle": "Butterfat clumping during churn, a fragile emulsion, and melt-refreeze cycles all break the smooth, even texture that holds ice cream together.",
  "readTime": "8 min read",
  "emoji": "💧",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Separation usually means your emulsion has broken or your fat has actually started turning into butter inside the machine. The usual culprits are overwhipping, a base that warmed up and refroze (called heat shock), acidic fruit added without anything to protect the dairy proteins, or fat globules that clumped together because the recipe didn't have enough emulsifier. The fix is some combination of emulsifiers (egg yolk or commercial blends), a small amount of cornstarch or other stabilizer, and a gentler churn.",
  "intro": "Ice cream is a frozen emulsion (a mix of fat droplets evenly suspended in water) that's also a foam (held open by trapped air). When the fat droplets inside that emulsion clump together for good—what dairy science calls coalescence—you start seeing oily slicks on the surface, a curdled-looking texture, or watery pockets of clear liquid called whey. Heat shock from a partial thaw and refreeze, not enough emulsifier in the base, or fruit acids that curdle the milk proteins are the usual causes. If you build a custard base, pasteurizing gently around 175–180°F (79–82°C) sets the egg proteins safely without pushing them past the boil, which is where they'd start to seize up and break.",
  "sections": [
    {
      "heading": "Churned butter",
      "paragraphs": [
        "If you run the dasher too long, too fast, or in a bowl that's running warm, the fat globules in cream get smashed into each other repeatedly until they actually start to combine into solid butter on the dasher walls and blades. You'll see yellow streaks, greasy patches, or a butter-like coating that won't reincorporate. That's not a flaw in the recipe—it's literally the same physical process you'd use on purpose to make butter, happening inside your ice cream maker."
      ]
    },
    {
      "heading": "Acid and dairy",
      "paragraphs": [
        "Fruit purées and juices carry organic acids (citric in citrus, malic in stone fruit, and so on) that can curdle milk proteins on contact, especially in warm or unstabilized bases. Either fold the fruit in late once the base is already cold and partially set, or use a small amount of cornstarch or another starch to coat the proteins and buffer the acid. Tossing fresh raspberry purée into a warm custard base is a reliable way to watch your ice cream split before it even hits the machine."
      ]
    },
    {
      "heading": "Thaw abuse",
      "paragraphs": [
        "When a pint partially melts—on a counter, during a freezer-door cycle, or in transit from the store—the fat globules float upward and start clumping near the surface as the cold structure relaxes. When you refreeze it, those clumps don't separate back into a smooth emulsion. They get locked in place, and the carton scoops with a grainy, slightly greasy texture from then on."
      ],
      "tip": "Temper mix completely smooth before churn if you heated yolks or chocolate."
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Compare the fat and sugar levels in your recipe against the reference ranges in Fix My Recipe's ice cream mode. Bases at the high or low end of either band stress the emulsion: too much fat with not enough emulsifier means more droplets than the base can keep apart, and too much sugar without enough proteins or stabilizers makes the unfrozen syrup too soupy to support the emulsion through freezing."
      ]
    },
    {
      "heading": "Emulsion science",
      "paragraphs": [
        "An emulsifier is a molecule that has one end that likes fat and one end that likes water—it sits at the boundary between droplets of one and the other and keeps them from clumping. Lecithin, the natural emulsifier in egg yolks (and in smaller amounts in milk), is the home cook's standard tool. Commercial products use mono- and diglycerides, which are basically split-up fats engineered to do the same job. The other big factor is homogenization—the mechanical breaking of fat droplets into very small, even sizes—and even a household blender can partially homogenize a small batch back into a stable emulsion if you act before the base sets. Acidic fruits really do need either a stabilized, starch-thickened base or a careful late incorporation; without that, milk proteins precipitate out and you get a grainy, broken texture."
      ]
    },
    {
      "heading": "Churn and storage",
      "paragraphs": [
        "Pushing the dasher past the proper draw point is the single fastest way to butter the fat in your base. You'll feel it as a heavy, grainy mouthfeel and you'll often see physically separated pieces of fat on the dasher when you pull it out. Stop earlier than you think you should the first time you try a new machine, and you can always finish hardening in the freezer."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "Emulsion work is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on the ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (−18°C); serving slightly warmer—around 6–10°F (−14 to −12°C) for hard-pack—improves scoopability. Pasteurize custard bases gently around 175–180°F (79–82°C) without boiling; boiling will curdle proteins and break your emulsion, which is exactly the problem this article is about. Rapid freezing builds smaller ice crystals; slow freezing and partial thaw cycles grow them and read icy. Total solids (fat + milk solids non-fat + sugar + stabilizers) give the scoop body, while water-only bases freeze harder. Write down ambient kitchen temperature, the freezer set point, and—when relevant—a probe reading or churn time. Change one input per trial: dairy brand, sugar mix, hydration percentage, churn time, or hardening temperature. Photograph the cup side by side after each change. SenseiFood's Fix My Recipe pairs those observations with ratio checks so the next batch is a measured step, not a guess.",
        "If you usually cook in Celsius, tape a few key bands inside a cabinet: 200°F ≈ 93°C (the neighborhood where many cakes and quick breads finish), 350°F ≈ 177°C (a common cake-and-cookie set point), 212°F = 100°C (sea-level boiling water), and—for espresso fans—classic 9-bar shots are often discussed in the 25–35 second range, always adjusted by taste to your machine. Altitude lowers water's boiling point, which shifts both evaporation and extraction; bakers at elevation should trust internal temperature and visual set more than the clock.",
        "Humidity quietly changes how dough skins on the bench, how icing crusts, and how staling feels the next morning—note outdoor weather when results swing for no obvious reason. For oven work, log preheat completion: many home ovens drift another 10–20°F after the beep. For frozen desserts, log the freezer display temperature when available; a deep chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer running auto-defrost cycles. Small environmental logs turn one-off failures into patterns you can actually solve."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Overrun (the air whipped in during churning) changes both how flavors release and how stable the foam feels—home machines vary, so note your churn time and the visual finish (looks like soft-serve, barely holding ribbons) before transferring. Emulsifiers and eggs shift the freezing curve by a few degrees, which can be enough to change scoop feel, so document any brand changes. If you temper before service, track how long the carton sat above 0°F (−18°C); small windows of warm-up change mouthfeel dramatically. Total solids—not just fat—include milk solids non-fat (the lactose-and-protein dry portion of dairy), and a higher MSNF can bind water in its own way and change firmness at the same sugar level. Alcohol and invert syrups both depress the freezing point too; a couple of percent of ethanol can keep a base softer at 0°F than the sugar math alone would suggest."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Gets Freezer Burn",
      "path": "/ice-cream-science/why-ice-cream-gets-freezer-burn"
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
      "q": "Can I rescue a split base before churning?",
      "a": "Sometimes—if the base hasn't fully curdled into hard chunks of protein, blending it smooth, straining through a fine sieve, and rechilling can get you most of the way back to a churnable mix. If you can see solid white flecks of cooked protein, it's gone too far and you're better off starting over."
    },
    {
      "q": "Why do vegan ice creams separate?",
      "a": "Plant-based bases don't have milk proteins or natural lecithin to hold fat and water together, so they rely on other emulsifiers—soy lecithin, gums like xanthan or guar, or oils that have been pre-emulsified during processing. When those aren't dosed correctly, the base splits in the same ways a dairy base would, just for different chemical reasons."
    }
  ]
};

export default function WhyIceCreamSeparates() {
  return <ScienceArticlePage spec={SPEC} />;
}
