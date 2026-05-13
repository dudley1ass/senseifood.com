import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-are-too-sweet",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Are Too Sweet",
  "subtitle": "Sweetness stacks across layers, so a frosting piled on a sweet crumb adds up fast; salt and acidity make the same amount of sugar read as less sweet.",
  "readTime": "7 min read",
  "emoji": "🍯",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Pull a little sugar out of either the crumb or the frosting—just one at a time, so you can taste the difference—and add a pinch of salt, a hit of bitterness (coffee, cocoa), or a touch of acidity (citrus, yogurt, sour cream). Also make sure the cake actually browned enough to develop complex flavor; a pale cake reads sweeter because there is nothing else going on.",
  "intro": "Sweetness adds up across every layer of a finished cake. A perfectly balanced sponge sitting under cloying buttercream still reads as “too sweet,” because your tongue is summing the whole stack, not grading the crumb on its own. So when you debug a too-sweet dessert, look at the entire build: simple syrup brushed on the layers, fillings, frosting, glaze, and any garnish. Your perception of sweetness actually drops when bitter, salty, or sour receptors on your tongue light up at the same time—this is a well-studied taste interaction, not a vibe. A cake at 20% sugar by baker’s percentage (where 100% is the weight of flour) can taste much sweeter sitting next to unsweetened whipped cream than it does next to an espresso-laced buttercream, because the context changes how your brain integrates the bites, not just the gram count of sugar.",
  "sections": [
    {
      "heading": "Layer accounting",
      "paragraphs": [
        "Before you blame the cake itself, write down the sugar from every component: the granulated sugar in the batter, plus any simple syrup brush, plus the filling, plus the frosting. A modest crumb with three layers of sweet frosting and a sugar glaze is going to taste like a sugar bomb no matter what tweaks you make to the sponge."
      ]
    },
    {
      "heading": "Contrast as a cheaper fix than removing sugar",
      "paragraphs": [
        "Salt is the cheapest, fastest flavor fix in the kitchen—a small pinch in frosting alone often does more than cutting 10% of the sugar. Acidity from a fruit curd, a yogurt-based filling, or a citrus zest in the buttercream cuts the perceived sweetness without changing the structure of the cake at all."
      ]
    },
    {
      "heading": "Style goals",
      "paragraphs": [
        "American buttercream is essentially powdered sugar held together with butter, and it is sucrose-forward by design (sucrose is the chemical name for table sugar). If you want something less cloying, look at meringue-based buttercreams—Swiss meringue or Italian meringue buttercream both whip up cooked egg whites with sugar before adding butter, which gives you a much lower sweetness perception even at similar gram totals."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "If you are testing half batches, enter the crumb, filling, and frosting separately—Fix My Recipe will keep your sugar changes within ranges that still bake and frost cleanly, so you can drop sweetness without accidentally dropping the structure too."
      ]
    },
    {
      "heading": "Solids, dissolved sugar, and where the sweetness really hits",
      "paragraphs": [
        "A simple syrup brush adds dissolved sucrose directly onto the surfaces of the crumb, where your tongue contacts it immediately—that delivers a much higher perceived sweetness per gram than the same sugar baked into the cake’s structure. Brushing warm layers drives syrup deeper into the crumb than brushing cool layers. Chilling the cake slows your perception of sweetness slightly because cold mutes the aroma molecules that ride alongside, but it does not actually remove any sugar. Frostings tasted near room temperature (65–72°F / 18–22°C) read as sweeter than the same frosting straight out of the fridge—volatiles move faster when warm, so aroma layers in and the brain registers more flavor. Temperature is a hidden variable any time you do a tasting."
      ]
    },
    {
      "heading": "What happens to texture when you cut sugar",
      "paragraphs": [
        "Sugar is not just sweetness; it is structure. Sugar holds moisture and interferes with gluten formation (the elastic protein network that forms when wheat flour meets water), which is part of what makes a cake tender. If you cut sugar aggressively in the batter, you can suddenly find yourself with a tough, dry crumb. Reduce the frosting first—much more forgiving—or swap part of the granulated sugar for glucose or trimoline (an invert sugar syrup that is roughly equal parts glucose and fructose), both of which give you sweetness with slightly different perception and slightly different effects on texture."
      ]
    },
    {
      "heading": "What to try on the next bake",
      "paragraphs": [
        "Most layer-cake headaches get clearer when you treat the oven and the cool-down as part of the recipe, not background noise. Many butter cakes finish somewhere near 200–210°F (93–99°C) in the center, but chocolate and very wet batters can lie to a probe—pair numbers with spring-back and a skewer, and check an inch above the pan floor on thick layers so you do not get a dry top hiding a damp belt.",
        "Change one variable at a time—rack height, pan color, convection on or off, or the temperature curve—and photograph the crumb after the cake is fully cool. SenseiFood’s Fix My Recipe cake mode still helps when you suspect sugar, fat, or flour ratios have drifted from what the writer assumed."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Taste Dry",
      "path": "/cake-science/why-cakes-taste-dry"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Are Dense",
      "path": "/cake-science/why-cakes-are-dense"
    }
  ],
  "faqs": [
    {
      "q": "Why does my cake taste sweeter on the second day?",
      "a": "Moisture redistributes through the crumb and the aromas have time to meld, so the dryness that distracted your tongue on day one fades and the sweetness suddenly stands out more. Storing the cake airtight slows this, but does not stop it entirely."
    },
    {
      "q": "How much coffee should I put in a chocolate cake to balance the sweetness?",
      "a": "Even a single teaspoon of instant coffee or espresso powder per batch deepens the bitter and roasted notes enough to balance the sweetness for most palates, without making the cake taste like coffee. Start there and scale up if you want a more pronounced edge."
    }
  ]
};

export default function WhyCakesAreTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
