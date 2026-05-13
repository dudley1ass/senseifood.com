import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "stock-reduction-demi",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Stock Reduction (Demi-Style): Recipe & Balance Guide",
  "subtitle": "A long-simmered stock cooked down until glossy — a foundation sauce that rewards patience and punishes shortcuts.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🥘",
  "quickAnswer": "Skim, strain, and reduce patiently — solids that burn onto the pot walls during reduction become bitter notes in the final glossy sauce, and there is no way to take them back out. Season late, because salt concentrates faster than you would expect once most of the water is gone.",
  "intro": "A serious stock reduction is kitchen time converted into flavor density. As water leaves, the gelatin (the protein extracted from bones that gives a stock its mouthfeel and ability to set when cold), salts, and aromatic compounds all concentrate — and so do any impurities you carried along, like the bitter compounds from old vegetables or the metallic taste from poor-quality starting stock. The Sauce Sensei pulls toward salt and acid both climb steeply as reduction progresses, which is why a large-batch reduction is seasoned at the end and tasted constantly throughout. Demi-style gloss is not only about viscosity (how thick the sauce is) — it is about integrated savoriness that clings to a piece of meat without tasting harsh on the tongue. Respect the pot edges: thin protein films and caramelized specks that look harmless at the start can teach bitterness to the whole batch once they have time to char. When you taste, ask three questions in order. Is the body right for how the sauce will cling to food? Is the savoriness deep without harsh salt or burnt edges? Does the finish linger cleanly instead of grabbing the back of your throat? Writing a one-line answer after a good batch teaches your eye for the next reduction curve. And if the surface looks still but steam is rising steadily, you are still reducing — do not confuse a quiet liquid with finished flavor.",
  "sections": [
    {
      "heading": "Clarity, skimming, and patience",
      "paragraphs": [
        "Impurities concentrate along with everything else. Skim the foam and excess fat thoughtfully — some fat helps protect the surface of the stock from violent evaporation, but too much hides what is happening underneath and makes it hard to read the bubbling behavior. Restaurant demi often chases visual clarity and a polished sheen, while a rustic home jus can tolerate more texture without complaint. Match your skimming to your goal. Gentle simmering — small lazy bubbles rather than a rolling boil — reduces the harsh volatile notes that violent boiling can produce, because aggressive boiling throws solids against hot metal where they scorch. The flavor difference between a gently simmered reduction and a hard-boiled one is dramatic, even if the volumes match."
      ]
    },
    {
      "heading": "Straining and clean equipment",
      "paragraphs": [
        "If the surface looks muddy or you can see specks sticking and darkening on the pot walls, strain the stock through a fine mesh sieve and continue reducing in clean gear. One scorched corner can dominate a small remaining volume — the bitter compounds from charred protein scale per spoon of sauce, not per pot of starting stock. Fine mesh strainers work for service-grade finishes; cheesecloth (or a cheesecloth-lined fine sieve) catches even smaller particles when you want a truly polished sauce. Doing this once partway through a long reduction is normal practice in professional kitchens; treat it as part of the process, not as a failure."
      ]
    },
    {
      "heading": "Body: gelatin, reduction, and mouthfeel",
      "paragraphs": [
        "Gelatin extracted from bones during the initial long simmer is what gives a real reduction its richness — it coats the tongue and gives the sauce that distinctive clingy, almost lip-sticking mouthfeel that no amount of butter can fake. If your reduction is thick but tastes thin, the underlying stock quality (low gelatin, weak flavor base) is probably the problem, not the amount you have reduced. Watch the nonlinear curve: late reduction jumps in intensity faster than early reduction, because the same per-minute evaporation rate removes a larger fraction of what is left. Taste much more often as the remaining volume shrinks — the window between perfect and over-reduced shortens dramatically near the end."
      ],
      "tip": "If the edge film darkens, wipe down the rim with a damp cloth and reduce the heat slightly — prevention beats rescue, and you cannot un-burn a fond ring."
    },
    {
      "heading": "Finishing mounts and liaison choices",
      "paragraphs": [
        "Optional finishing mounts of butter or cream change the emulsion structure and the sheen of the finished sauce. Add them once the base is volumetrically where you want it; mounting can mask slight harshness with rich fat but it will not fix burnt notes — the bitterness sits underneath the cream like a stain you can no longer see. Different thickeners give different results: arrowroot gives a clear gloss and softens easily, cornstarch holds shape longer but reads slightly more starchy, and pure reduction (no added thickener) gives a cleaner flavor but takes much longer to reach the body you want. Pick the right tool based on what kind of service you are running and how long the sauce needs to hold."
      ]
    },
    {
      "heading": "Storage, gel set, and reuse",
      "paragraphs": [
        "Gelatin-rich reductions set firmly in the fridge — a good demi can come out almost like rubber, jiggling on the spoon. That is a sign of quality, not a problem. Reheat gently to avoid breaking the fat emulsion, and slice off the solid fat cap if you want a leaner sauce profile in the reheated batch. Label every container with the date — reduced stocks are not immortal. Even with the natural preservative effect of high gelatin concentration, off aromas (sour, cheesy, or sharply acrid) mean discard. A good reduction stored properly keeps for several days in the fridge or several months in the freezer."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my reduced stock taste bitter at the end?",
      "a": "Over-reduction past the point where the natural sugars and proteins start to scorch is the most common cause. Scorched solids on the pot walls (you can usually see the dark ring at the edge of the liquid) are another. Or the starting stock had bitter vegetable notes baked in — overcooked brassicas like cabbage, broccoli, or bitter greens leave compounds that survive the reduction and concentrate. Dilute the current batch, strain it, and rebuild on lower heat. Fix the pot, not just the liquid."
    },
    {
      "q": "Can I reduce straight from cloudy stock?",
      "a": "You can, but cloudiness usually concentrates along with everything else. For a pristine, restaurant-quality sauce, clarify the stock earlier — a cold filter through cheesecloth, or a more aggressive raft clarification with egg whites — or accept a rustic flavor with a humbler presentation. Cloudy reductions can taste wonderful, but they will not look like the magazine photos."
    },
    {
      "q": "How salty should the stock be before reduction?",
      "a": "Lightly seasoned or completely unsalted is the safe default — unless you are using salt for a specific extraction purpose (drawing flavor out of an ingredient through osmosis, as in some traditional methods). If you do salt early, account for it mathematically: if you are reducing by half, the salt concentration doubles, so target half the final salinity you want and add a small finishing pinch at the very end."
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
    "sauceId": "reduction-stock"
  }
};

export default function StockReductionDemi() {
  return <ScienceArticlePage spec={SPEC} />;
}
