import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-loses-air-overrun-collapse",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Loses Air (Overrun Collapse)",
  "subtitle": "How long you churn, how thick the base is, and whether the carton ever warms in transit decide how much air actually stays put in the finished pint.",
  "readTime": "8 min read",
  "level": "Process & churn",
  "emoji": "💨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "The air whipped into ice cream during churning—what dairy folks call overrun—only stays trapped if a partially frozen, syrupy liquid called the serum locks each bubble in place. If the base is too warm when you stop, too thin to hold films around the bubbles, or it warms up at any point on the way to the freezer, those bubbles either merge with their neighbors and pop or quietly escape during hardening. The finished pint sinks, feels heavy, and scoops without bounce.",
  "intro": "Commercial ice cream labels list overrun because air isn't a cheat—it's a structural ingredient that gives the scoop its lightness and the way flavor releases on the tongue. Your home churn does the same physics in miniature: the dasher (the paddle inside the frozen bowl) shears air into the base while ice crystals start to form and the unfrozen syrup around them thickens enough to lock those bubbles in. If the order of operations gets out of sync—too warm, too thin, or too short—you end up freezing what's basically a deflated foam. The pint feels heavy, oddly chalky, or icy in the wrong way, and scoops without that satisfying spring. This article walks through the temperature path during churning, how the base's thickness (viscosity) and stabilizer hydration prep the foam in advance, what happens during the hardening step in the freezer, and how rough storage can flatten everything you worked for after the fact.",
  "sections": [
    {
      "heading": "Churn temperature path",
      "paragraphs": [
        "Inside the freezing bowl, the dasher is folding in air while tiny ice crystals start to form and the rest of the liquid (the unfrozen serum that surrounds them) thickens up. Stop churning while that mix is still too warm and your air bubbles are large and floppy—they'll either merge into a few big pockets or vanish entirely during hardening. Go the other way and churn long past the right draw, and the friction from the dasher actually starts melting the crystal structure you just built, also collapsing the foam.",
        "Match what the machine is telling you to what's in the bowl. Higher-fat or higher-solids bases usually firm up faster; sorbets and low-fat bases often need a colder bowl or a slower dasher so you don't overwhip a still-liquid base. Listen for the motor pitch change as the mix thickens and watch the body—the goal is a soft-serve consistency that holds a soft mound on the spoon, not a soupy ribbon."
      ],
      "bullets": [
        {
          "title": "Warm freezer bowl",
          "text": "An insufficiently frozen insert cannot remove heat quickly enough; you whip longer, warm the mix, and lose fine bubble distribution."
        },
        {
          "title": "Batch size",
          "text": "Overfilling the canister reduces chilling efficiency and extends time-to-draw, which can mean overwhipped, warm foam."
        }
      ]
    },
    {
      "heading": "Viscosity before freeze",
      "paragraphs": [
        "Letting the base age overnight in the fridge gives milk proteins time to fully hydrate and lets any stabilizers (gums and emulsifiers added to thicken and bind water) completely disperse. Skip the rest and you get a weepy foam that can't form stable films around the air bubbles. Sugar and other dissolved solids both raise the base's viscosity—how thick and slow it pours—and lower its freezing point, which changes how early air can incorporate and how quickly the matrix sets around it. Emulsifiers and stabilizers also shift the size distribution of the bubbles themselves: too little of either and the liquid drains out of the bubble walls, but too much and the texture starts to feel gummy, especially if you try to compensate with extra churn time. Balance any formula change with what you see and hear in the bowl, not just the numbers on the page."
      ],
      "tip": "If the base pours like skim milk before churn, fix the base first—more air time rarely rescues a structurally thin continuous phase."
    },
    {
      "heading": "Holding cold chain through hardening",
      "paragraphs": [
        "Hardening isn't passive waiting—it's the second half of the freezing job. Inside the freezer, the rest of the water in the carton finishes freezing, crystals grow, and the air cells get trapped inside a glassy matrix of sugar, fat, and ice. Slow or uneven freezing builds larger crystals and rearranges the liquid serum, which can collapse the walls between bubbles. Pack the carton with as little headspace as you can manage, get it into the coldest stable spot in the freezer fast, and try not to repeatedly soften and refreeze it if you actually care about the body.",
        "When you see shrinkage, weeping water (called whey separation), or a dense, heavy core under a softer outer rim, that's a sign of thermal abuse—air and water have rearranged themselves inside the carton after you drew it from the machine."
      ]
    },
    {
      "heading": "Diagnosing collapse versus low overrun intent",
      "paragraphs": [
        "Some styles intentionally aim for less air. Gelato, for example, traditionally carries less air than industrial ice cream and is denser by design. Collapse is something different: you expected a light, scoopable pint and got something blocky, or the surface visibly sank between scoops. Taste for a separation of ice and watery serum on the spoon, and look for a uniform color across the surface without a wet sheen showing up after refreeze. If collapse happens with only certain flavors—fruit purées, sorbets with high acid, or anything boozy—suspect that the added acids, alcohol, or fruit water are pulling the freezing curve and the foam stability in directions your neutral base doesn't have to deal with. Adjust solids, pre-infuse the flavor into the base, or add a small dose of stabilizer once you've confirmed the base works in a plain version."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is less air always worse?",
      "a": "No—some recipes actually aim for a dense, custard-like body where the lower air content is the whole point of the style. The problem to fix is unintended collapse: when your pint comes out noticeably less lofty than the same formula and machine usually produce."
    },
    {
      "q": "Can I re-churn melted ice cream to restore air?",
      "a": "You can re-churn after safe handling, but the texture almost never matches the first pass. The ice crystals that formed during the original freeze and the partially destabilized fat globules both work against you. Starting from fresh base is far more reliable than trying to rescue a melted pint."
    },
    {
      "q": "Does container shape matter?",
      "a": "More than people expect. Wide, shallow containers freeze faster and more evenly than deep, narrow ones because heat has a shorter distance to escape. That faster freeze helps preserve small, well-distributed air bubbles and avoids the dense-core, softer-rim gradient that taller containers tend to develop."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    },
    {
      "title": "Why Ice Cream Is Too Soft",
      "path": "/ice-cream-science/why-ice-cream-is-too-soft"
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

export default function WhyIceCreamLosesAirOverrunCollapse() {
  return <ScienceArticlePage spec={SPEC} />;
}
