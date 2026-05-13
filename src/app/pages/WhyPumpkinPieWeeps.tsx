import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pumpkin-pie-weeps",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pumpkin Pie Weeps",
  "subtitle": "When the egg proteins set too tightly, or the surrounding gel shrinks as it cools, the custard squeezes out small beads of water onto the surface—what cooks call syneresis.",
  "readTime": "8 min read",
  "emoji": "🎃",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Pumpkin pie weeps when the eggs are overcooked into a tight protein network that physically squeezes the bound water back out, when the starch in the recipe is under- or over-hydrated for the amount of sugar in the mix, or when a shock-cool in the fridge fractures a fragile gel. Bake gently until the very center still jiggles like thick custard (not loose liquid), and cool slowly on a wire rack with the oven door cracked open—that lets the residual heat finish setting the custard without forcing droplets through a shocked gel.",
  "intro": "A weeping pumpkin pie looks like it cried overnight, but it's actually physics: a stressed gel expressing the water that should have stayed bound inside it. Pumpkin purée adds fiber and solids that shift where the eggs will set; evaporated milk and cream add more protein and fat that change the coagulation (setting) curve. This article separates three different issues that all show up as 'weep' on the morning of the bake—egg curdling, starch syneresis, and surface condensation from the fridge—so you don't blame the cinnamon for a process problem. A useful custard log includes the center temperature when you pulled the pie, how many times the oven door opened, and how fast air was moving through the cooling spot from any vents or fans. If you swap squash species (some kabocha, some butternut, canned versus roasted), record solids content where you can, because the water content of fresh squash varies more from cultivar to cultivar than the color suggests. When you use sweetened condensed milk, note the brand—sweetness varies, and sugar shifts the coagulation temperature. For dairy-free versions, log the hydrocolloid (the gum or starch you used to thicken without dairy), because plant-based gels fail differently from egg-set baselines. Photograph the bead pattern: a uniform sheet of dew suggests condensation from the fridge, while isolated droplets often point to true syneresis from the gel itself. SenseiFood encourages one change per holiday test bake so next year is data-driven rather than superstitious. A weeping custard is the epilogue nobody asked for—proteins squeezing water after baking, or sugar pulling syrup free as the pie cools and contracts. It can look dramatic on the surface while the flavor underneath is genuinely fine. When you connect the weep pattern you see to bake depth, cooldown speed, and dairy substitutions, the next pumpkin season feels less like superstition and more like predictable pastry physics.",
  "sections": [
    {
      "heading": "Egg coagulation and curd tightness",
      "paragraphs": [
        "Eggs set within a narrow temperature band, and once you overshoot it the smooth suspension of proteins converts into granular protein clusters that physically squeeze out the water that was supposed to stay bound between them. Carryover heat—the way a hot dish keeps cooking from its own thermal mass after you pull it from the oven—continues setting the custard even after the door closes behind you, which is why pulling at the exact moment of a thick-custard wobble matters so much for pumpkin pie. A high oven with a long tail of bake time can set the edges to safety while the center finishes itself too hot during the carryover phase, and the morning bead pattern is the receipt."
      ]
    },
    {
      "heading": "Starch hydration and syneresis",
      "paragraphs": [
        "Some pumpkin recipes lean on starch (flour, cornstarch, or arrowroot) to stabilize the water in the purée, and incomplete gelatinization—where the starch granules don't fully swell and bind water during the bake—shows up later as the gel rearranges in the fridge and weeps. The opposite is also a problem: too much starch without enough cook time reads chalky on the tongue and still leaks because the unbound water finds paths around the underdeveloped network. Sugar also competes with starch and protein for water, so shifting the sweetness level even modestly can change how strong the final gel is."
      ]
    },
    {
      "heading": "Cooling, cover, and humidity",
      "paragraphs": [
        "Plastic wrap pressed against a still-hot pie causes water vapor to condense back onto the surface, and that condensation looks identical to weeping at first glance—but it's a totally different problem with a totally different fix. Fridge desiccation, on the other hand, pulls moisture unevenly from the pie, sometimes concentrating beads at the surface as the matrix slowly equilibrates with the dry fridge air. Surface cracks across a pumpkin pie are stress relief from the same underlying gel strain, so cracks and weeping often show up on the same pie."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie and baking modes in Fix My Recipe let you compare the dairy, sugar, and egg ratios in your recipe to known-stable custard bands. Log the center temperature at pull and again at hour one of cooling, then correlate those numbers with the bead count the next day. After two or three holiday cycles you'll have real data about how your oven and your fridge interact, instead of advice copied from a forum thread."
      ]
    },
    {
      "heading": "Weeping as an epilogue you can prevent",
      "paragraphs": [
        "Pumpkin custard weeps when proteins squeeze water after baking, or when sugar pulls syrup free as the pie cools and contracts—and it feels like betrayal on an otherwise pretty surface. Log bake depth, cool speed, and any dairy substitutions you made, because those three choices change how tightly the proteins are willing to hold their water. The pie that looked perfect at sunset and beaded at sunrise is telling you something you can actually fix next time."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is weeping unsafe?",
      "a": "Usually not by itself—it's water movement, not spoilage. Treat the pie the way you'd normally treat any baked dairy custard for food safety: chill within a couple hours of baking and use it within the standard window. The weeping itself isn't a contamination signal."
    },
    {
      "q": "Does cornstarch always fix it?",
      "a": "Only when you fully cook it through. Cornstarch that doesn't reach gelatinization temperature in the filling traps as much chalky raw starch flavor as it solves, and you trade weep for grit. If you're adding starch to a pumpkin pie, make sure the recipe gives the filling enough time at temperature to fully hydrate it, or precook part of the filling on the stovetop to guarantee the starch sets."
    }
  ],
  "related": [
    {
      "title": "Why Custard Pies Crack",
      "path": "/pie-science/why-custard-pies-crack"
    },
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
    }
  ]
};

export default function WhyPumpkinPieWeeps() {
  return <ScienceArticlePage spec={SPEC} />;
}
