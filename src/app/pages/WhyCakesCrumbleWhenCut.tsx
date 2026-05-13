import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-crumble-when-cut",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Crumble When Cut",
  "subtitle": "A crumb that has lost too much moisture, was built with too little fat or egg to hold itself together, or is being attacked by the wrong knife will shred apart instead of slicing cleanly.",
  "readTime": "7 min read",
  "emoji": "🧩",
  "fixRecipe": {
    "category": "cake",
    "problem": "dry"
  },
  "quickAnswer": "Crumbling is a cohesion problem—the crumbs do not want to hold onto each other. The three usual causes are an over-baked, dry crumb; a recipe with too little fat or egg to bind everything; or you sliced a cold cake with a dull or non-serrated knife that crushed it from above. Use a serrated knife with a gentle sawing motion, let the cake come up to room temperature first, and address the moisture story in the recipe.",
  "intro": "Cohesion in a cake comes from two things working together. Moisture plasticizes the starches—meaning it keeps them soft and flexible enough to give a little—and the protein network from the eggs and flour physically holds the crumbs together. When either of those drops too low, the crumb fails under shear (sideways force from the blade): the bonds between the starch gel and the protein network simply are not strong enough, and slices fracture. Lean sponges tend to crumble below about 12–15% free moisture, while enriched cakes with butter, oil, and egg yolks tolerate a wider range because the fat acts as both glue and tenderizer. A butter cake that has been refrigerated also feels crumbly when cold—the butterfat is rock-hard at fridge temperatures, and the starch is firmer—even when the cake is perfectly moist inside.",
  "sections": [
    {
      "heading": "Moisture",
      "paragraphs": [
        "An over-baked cake or a recipe that is low on fat sheds its free water (the moisture that was holding the crumbs flexible), and you see crumbs separating cleanly even before you cut. The fix is usually pulling the cake earlier or bumping the fat or egg yolk up slightly so the matrix has more glue."
      ]
    },
    {
      "heading": "Gluten and structure",
      "paragraphs": [
        "Too little protein structure for the height of the cake makes it fragile and short-breaking; too much can oddly chunk apart in big chunks instead of slicing cleanly. Different styles have different expectations: a genoise (a foam-based European sponge) wants a particular delicate structure, while a Bundt or pound cake wants a tighter, sturdier one. Aim for the structural target your style is supposed to hit."
      ]
    },
    {
      "heading": "Cutting physics",
      "paragraphs": [
        "Use a serrated knife with a gentle, long sawing motion and almost no downward pressure—you are slicing the cake, not pressing it into the cutting board. Wipe the blade clean between slices, especially when the cake has soft filling, so the next slice does not drag yesterday’s crumbs across today’s frosting."
      ]
    },
    {
      "heading": "Systems",
      "paragraphs": [
        "Fix My Recipe flags recipes that sit on the dry side of typical ratios so you know whether to adjust the fat, the egg, or the bake time. Pair those flags with internal temperature logs—an over-baked cake is the single most common reason an otherwise correct recipe crumbles."
      ]
    },
    {
      "heading": "Temperature when you slice",
      "paragraphs": [
        "A buttercream cake slices much cleaner at 65–70°F (18–21°C) than straight out of the fridge at 38°F (3°C), where the fat is rock-hard and the starch is firm. For a naked cake (one with little or no frosting on the sides), letting it sit out for 30–60 minutes before slicing makes a real difference. Layers that were frozen and then thawed can be extra fragile, because the ice crystals damaged some of the cell walls when they grew—a crumb coat (a thin first layer of frosting just to seal in stray crumbs) catches the debris and gives you a clean final coat."
      ]
    },
    {
      "heading": "Structural balance",
      "paragraphs": [
        "Too little egg or fat for the amount of flour gives you a short, sandy break—great for shortbread, wrong for a genoise. Too much chemical leavening (baking powder or baking soda) leaves big voids in the crumb, which collapse into crumbly chunks as soon as you put pressure on the slice."
      ]
    },
    {
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center. Chocolate and very moist formulas can fool a thermometer, so pair the probe with a spring-back test (press the center gently; if it springs back, it is set) and a clean skewer test. Edge-to-center gradients matter—a “done” reading at the top center can still leave a wet band near the floor of the pan, so check about an inch above the bottom in thick layers. Convection and dark pans both speed up heating, so if your edges race ahead, lower the set temperature by about 25°F (14°C) and extend the time. Let big layers cool to below about 100°F (38°C) internally before slicing—the crumb structure keeps stabilizing as it cools, and slicing too hot guarantees a messy, sticky cut.",
        "Write down your kitchen’s ambient temperature, the oven set point, and your probe reading. Change one input per attempt: flour brand, sugar percentage, chill time, pan color, or rack position. Photograph the crumb side-by-side each time. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category, so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F is about 93°C (the cake and bread finish zone), 350°F is about 177°C (a common cake and cookie air temperature), and 212°F is 100°C (where water boils at sea level). Humidity changes how icings behave and how a cake stales overnight—jot down the weather when results swing for no obvious reason. Many ovens keep drifting 10–20°F after they beep done preheating, so an extra few minutes of preheat helps."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Dry Out",
      "path": "/cake-science/why-cakes-dry-out"
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
      "q": "Should I use a serrated knife or a chef’s knife?",
      "a": "Serrated is the safer choice for most cakes—the teeth saw through the crumb with very little downward pressure, so the slice does not get crushed. A long, thin chef’s knife works on cold, dense cakes if you warm the blade in hot water first and wipe it dry between slices."
    },
    {
      "q": "Why bother with a crumb coat?",
      "a": "A crumb coat is a thin first layer of frosting whose only job is to glue stray crumbs onto the cake. Once it sets, you frost the final coat onto a clean surface so the finish stays smooth—and it also cuts down on crumbs all over your cutting board when you slice."
    }
  ]
};

export default function WhyCakesCrumbleWhenCut() {
  return <ScienceArticlePage spec={SPEC} />;
}
