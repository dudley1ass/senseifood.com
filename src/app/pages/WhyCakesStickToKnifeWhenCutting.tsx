import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-stick-to-knife-when-cutting",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Stick to the Knife When Cutting",
  "subtitle": "A gummy crumb, a still-warm slice, or a sticky buttercream all grab onto the blade and drag the cut.",
  "readTime": "6 min read",
  "emoji": "🔪",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "When the knife grabs the cake, the cause is usually a too-moist or under-baked crumb, a cake that has not cooled all the way, or a frosting that is acting like glue. Cool the cake completely, wipe the blade between every slice, warm the blade slightly in hot water for dense fudgy layers, and if the crumb itself is tacky, the right fix is finishing the bake more thoroughly next time.",
  "intro": "For a clean slice, the blade needs to fracture the crumb cleanly rather than push and smear it. Anything that is rubbery or thermally soft (warm enough to bend instead of break) will smear instead of cutting. Sticking is a combination of two things: friction (the blade dragging through the cake) and adhesion (the cake actively grabbing the metal). Tacky starch above about 180°F (82°C) interior temperature smears onto a blade; a chilled ganache near 60°F (16°C) fractures cleanly, while a buttercream near 70°F (21°C) is soft and adhesive and will smear. Every layer of a stacked cake is rheologically different (different stiffness, different stretch), so the knife sees a different material at each level, not one uniform texture.",
  "sections": [
    {
      "heading": "Thermal state",
      "paragraphs": [
        "A warm cake is softer all the way through, so it deforms under the blade instead of cleanly parting. Ganache and buttercream re-melt against hot metal—even briefly contact warmth from your hand on the blade can be enough."
      ]
    },
    {
      "heading": "Crumb set",
      "paragraphs": [
        "A gummy or under-baked interior will smear no matter what knife you use—verify the bake itself, especially in very moist or humid batters where moisture has trouble escaping during baking."
      ]
    },
    {
      "heading": "Technique",
      "paragraphs": [
        "Wipe the blade clean between every slice. Dip a thin blade in hot water and wipe it dry for fudgy or ganache layers. Use long, full-length strokes rather than short sawing motions, which compress the crumb and drag frosting sideways."
      ]
    },
    {
      "heading": "Debug",
      "paragraphs": [
        "If knife stickiness is chronic across many bakes, cake mode helps you compare your recipe’s hydration and sugar levels to the baselines of recipes you have baked cleanly in the past—often a small ratio drift is at the root."
      ]
    },
    {
      "heading": "Heat the blade, not the cake",
      "paragraphs": [
        "Dip a thin blade into hot (not boiling) water, wipe it dry, and slice in one long, smooth draw. The brief heat melts a paper-thin contact zone of chocolate or buttercream so the blade glides cleanly without melting the wedge as a whole. Repeat between every slice for show-quality portions. For a genuinely gummy under-baked center, though, no knife technique will fix incomplete set—reassess the bake until the probe temperatures match what your formula style actually wants."
      ]
    },
    {
      "heading": "Humidity and hygroscopic sugar",
      "paragraphs": [
        "On a humid day, frostings are tackier on the surface because the sugar is hygroscopic (it pulls moisture out of the air). Dusting the bench with cornstarch or running the air conditioning cooler during assembly helps. Fondant has its own special trick: it sweats when you move it from cold storage into a warm room, which is a moisture-on-the-surface problem rather than a true stickiness in the fondant itself."
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
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
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
      "q": "Does a cheese knife with holes help with cake?",
      "a": "The holes reduce the surface contact between the blade and a soft material like cheese, which cuts drag. For cake, a thin blade dipped in hot water and wiped dry almost always wins—the cake is more sensitive to thermal state than to blade geometry."
    },
    {
      "q": "Why does my knife collect frosting buildup so quickly?",
      "a": "Wipe the blade between every pass. The buildup is adhesive frosting re-depositing back onto the cake from the blade, not really the crumb itself. A clean blade going in means a clean slice coming out, every single time."
    }
  ]
};

export default function WhyCakesStickToKnifeWhenCutting() {
  return <ScienceArticlePage spec={SPEC} />;
}
