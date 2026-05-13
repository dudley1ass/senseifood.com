import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-tastes-icy",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Tastes Icy",
  "subtitle": "Big ice crystals and pockets of water that never bound up properly read as crunch and a cold-water rush on the tongue—your taste buds can feel crystal size directly.",
  "readTime": "8 min read",
  "emoji": "🧊👅",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "icy"
  },
  "quickAnswer": "An icy mouthfeel almost always means the ice crystals in your pint are too big, or there's too much free water in the base that wasn't bound up by sugar, fat, or stabilizers. The usual causes are slow freezing in the machine, partial melting and refreezing during storage (called heat shock), or a base that's too lean on total solids. Freeze faster, keep the carton out of warming cycles, and balance your sugar and milk solids non-fat.",
  "intro": "This article is the sensory companion to articles about storage physics in ice cream—here we focus on what your tongue is actually feeling. Your palate is sensitive enough to detect ice crystal size directly: crystals smaller than about 50 microns read as smooth, while crystals bigger than that start to feel grainy, sandy, or out-and-out crunchy. Icy texture usually means crystals that grew too large—commonly from slow freezing, a partial thaw and refreeze cycle, or simply a base too low in total solids. Commercial parlors rely on blast freezers that can chill mix down to about −10°F (−23°C) very quickly, which is what builds the small, even crystals you want. Home freezers can't match that speed, and crystals keep growing slowly over time, especially each time the temperature swings.",
  "sections": [
    {
      "heading": "Crystal growth",
      "paragraphs": [
        "Small ice crystals feel smooth and creamy because each one is too small for your tongue to detect individually. Once crystals get larger—the textbook threshold is around 50 microns—they start to feel sandy or crunchy. Heat shock (when the carton partially melts and then refreezes) takes a population of small crystals and merges them into fewer, larger ones, because the small ones melt first and the water they release rejoins the bigger ones during refreeze. This is called Ostwald ripening, and it's why ice cream that started smooth on day one can taste icy by day fourteen."
      ]
    },
    {
      "heading": "Formulation",
      "paragraphs": [
        "Sugars like dextrose and corn syrup, along with milk solids non-fat (the lactose and proteins in dairy that aren't fat), physically interrupt the continuous network of ice in the base. Each dissolved molecule is something an ice crystal has to grow around, which slows and limits its size. A base that's too lean—not enough sugar, not enough milk solids, not enough fat—has very little to get in the way of crystals fusing together, so it freezes icy almost no matter what you do."
      ]
    },
    {
      "heading": "Process",
      "paragraphs": [
        "Hardening after churn—transferring the soft, drawn ice cream into the coldest part of the freezer for several hours of undisturbed freezing—locks the microstructure in place at small crystal sizes. Skipping that step and letting the carton sit in the door of the freezer means the remaining water in the base freezes slowly and unevenly, which is exactly the condition that grows big crystals."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "Fix My Recipe's icy pathway pairs your actual grams against typical sugar-to-dairy ratios, so a lean base shows up clearly when you enter the numbers. The tool isn't a substitute for tasting, but it tells you whether you're working against the chemistry or with it before you commit to another batch."
      ]
    },
    {
      "heading": "Heat shock",
      "paragraphs": [
        "Even a partial thaw on the trip home from the grocery store—or in the freezer door during a long fridge raid—starts coarsening the texture. The carton doesn't have to fully melt; it just has to warm above the temperature where the smallest crystals start melting, which is well below 32°F (0°C) in a high-solids mix. Emulsifiers (like the lecithin in egg yolks) and stabilizers (cornstarch, gums) slow the rate at which crystals can grow, but home-cook substitutes do this only partially compared to commercial blends."
      ]
    },
    {
      "heading": "Water activity",
      "paragraphs": [
        "Recipes that lean high on water and low on fat or sugar freeze noticeably icier because there's more free water and less material in the way to limit crystal size. The fix is rarely to add more cream alone—it's to rebalance total solids (fat, milk solids non-fat, sugar, stabilizers) so the freezing system has structure on every side."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This is easier to act on when you anchor numbers instead of vibes. Ice cream texture depends on the ice phase fraction, sugar depression of freezing point, the fat network, and air (overrun). Typical home freezers sit near 0°F (−18°C); serving slightly warmer—around 6–10°F (−14 to −12°C) for hard-pack—improves scoopability without warming so much that you trigger heat shock on refreeze. Pasteurize custard bases gently around 175–180°F (79–82°C) without boiling; boiling will curdle proteins and break the emulsion. Rapid freezing builds smaller ice crystals; slow freezing and partial thaw cycles grow them and read icy. Total solids (fat + milk solids non-fat + sugar + stabilizers) give the scoop body—water-only bases freeze harder and icier. Write down ambient kitchen temperature, the freezer or machine set point, and—when relevant—a probe reading or churn time. Change one input per trial: dairy brand, sugar mix, hydration percentage, churn time, or hardening temperature. Photograph the cup side by side after each change. SenseiFood's Fix My Recipe pairs those notes with category ratio checks so the next batch is a measured step, not a guess.",
        "If you usually cook in Celsius, copy a few key bands inside a cabinet: 200°F ≈ 93°C (the neighborhood where many cakes and breads finish), 350°F ≈ 177°C (a common cake-and-cookie set point), 212°F = 100°C (sea-level boiling water), and—for espresso fans—classic 9-bar shots are usually discussed in the 25–35 second range, always adjusted by taste. Altitude matters: at higher elevations water boils lower, which shifts evaporation and extraction; bakers at elevation should trust internal temperature and visual set over the clock.",
        "Humidity quietly changes how dough skins on the bench, how icing behaves, and how staling feels the next morning—jot down outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion: many home ovens drift another 10–20°F after the beep. For frozen desserts, log the freezer display temperature when available; a deep chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer running auto-defrost cycles. Small environmental logs turn one-off failures into patterns you can actually solve."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Overrun (the air whipped into the base during churning) changes both how flavors release and how icy a pint reads—home machines vary widely, so note your churn time and the visual finish (looks like soft-serve, barely holding ribbons) right before transferring. Emulsifiers and eggs shift the freezing curve by a few degrees, which can be enough to change scoop feel, so document any brand changes. If you temper for service, track how long the carton spent above 0°F (−18°C); small windows of warm-up dramatically change crystal size on refreeze. Total solids—not just fat—include milk solids non-fat (the lactose-and-protein dry portion of dairy), and a higher MSNF can bind water in its own way, changing scoop firmness at the same sugar level. Alcohol and invert syrups both depress freezing point too; a couple of percent of ethanol can keep bases softer at 0°F than the sugar math alone would predict."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
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
      "q": "Does alcohol make ice cream feel icy?",
      "a": "Alcohol actually does the opposite—it lowers the freezing point of the base and keeps more of the water in a liquid state, so a boozy pint feels softer rather than icy. The mouthfeel is different from water ice; instead of crunching, the base reads as slick and slightly slow to set."
    },
    {
      "q": "Why does sorbet always feel a little icy?",
      "a": "Sorbet doesn't have fat or milk proteins to physically interrupt the ice network, so it's expected to read slightly icier than dairy ice cream. The sugar and the natural pectin in the fruit are what's keeping the texture in check, and a well-balanced sorbet leans on both to stay scoopable instead of granita-like."
    }
  ]
};

export default function WhyIceCreamTastesIcy() {
  return <ScienceArticlePage spec={SPEC} />;
}
