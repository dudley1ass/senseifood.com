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
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center. Chocolate and very moist formulas can fool a thermometer, so pair the probe with a spring-back test (press the center gently; if it springs back, it is set) and a clean skewer test. A “done” reading at the top center can still leave wet bands near the bottom of the pan, so check about an inch above the floor on thick layers. Convection and dark pans both speed up the heating, so if your edges race ahead, lower the set temperature by about 25°F (14°C) and extend the time. Let big layers cool to below about 100°F (38°C) internally before slicing—the crumb structure keeps stabilizing as it cools, and slicing too hot guarantees a sticky knife.",
        "Write down your kitchen’s ambient temperature, the oven set point, and the probe reading. Change one input per attempt—flour brand, sugar percentage, fat type, or rack position—and photograph the crumb side-by-side. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F ≈ 93°C (the cake and bread finish zone), 350°F ≈ 177°C (a common cake and cookie air temperature), and 212°F = 100°C (sea-level water boiling). Humidity changes how icings behave when slicing—note the weather when results swing for no obvious reason. Many ovens keep drifting 10–20°F after they beep done preheating, so an extra few minutes of preheat saves a lot of guessing."
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
