import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pumpkin-pie-weeps",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pumpkin Pie Weeps",
  "subtitle": "Custard overcoagulation and syneresis push water droplets to the surface after cooling—protein and starch timing matter as much as spices.",
  "readTime": "8 min read",
  "emoji": "🎃",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Pumpkin pie weeps when eggs are overcooked into tight protein matrices that squeeze bound water, when starch is under- or over-hydrated for the sugar load, or when shock-cooling fractures a fragile gel. Gentle bake to just-set center, proper sugar and dairy balance, and slow cooling reduce beads on the surface. Pull when the center still jiggles like thick custard, not like loose liquid; a slow cool on a wire rack with the oven door cracked often finishes setting without forcing beads through a shocked gel.",
  "intro": "Weeping looks like the pie cried overnight, but it is physics: a strained gel expressing free water. Pumpkin puree adds fiber and solids that shift gelation windows; evaporated milk and cream add protein and fat that change coagulation curves. This article separates egg curdling, starch syneresis, and humidity condensation so you do not blame cinnamon for a process issue. Custard logging should include center temperature at pull, oven door openings, and cooling air speed from fans. If you substitute squash species, record solids content because water varies more than color. When using condensed milk, note brand sweetness because sugar shifts coagulation. For dairy-free versions, log hydrocolloid type; gels fail differently than egg-set baselines. Photograph the bead pattern: uniform dew suggests condensation while isolated droplets often signal syneresis. SenseiFood encourages one change per holiday test so next year is data-driven, not superstitious. Weeping custard is the epilogue nobody asked for: proteins squeeze water after baking, or sugar pulls syrup as the pie cools and contracts. It can look dramatic on the surface while the flavor underneath is fine. When you connect weep patterns to bake depth, cool-down speed, and dairy swaps, the next pumpkin season feels less like superstition and more like predictable pastry physics.",
  "sections": [
    {
      "heading": "Egg coagulation and curd tightness",
      "paragraphs": [
        "Eggs set in a narrow band; overshoot converts smooth suspension to granular protein clusters that expel serum. Carryover heat continues cooking after the oven; pulling at the exact wobble matters for custard pies. High oven with long tail can set edges while centers retroactively finish too hot in carryover."
      ]
    },
    {
      "heading": "Starch hydration and syneresis",
      "paragraphs": [
        "Some recipes lean on starch to stabilize puree water; incomplete gelatinization weeps later as the gel rearranges. Too much starch without enough cook reads chalky and still leaks as unbound water finds paths. Sugar competes for water; shifting sweetness changes gel strength."
      ]
    },
    {
      "heading": "Cooling, cover, and humidity",
      "paragraphs": [
        "Tight plastic wrap while hot condenses surface water mistaken for weep. Fridge desiccation pulls moisture unevenly, sometimes concentrating beads at the surface. Cracking tops are stress relief for the same underlying gel strain."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie and baking modes help compare dairy, sugar, and egg ratios to stable custard bands. Log center temperature at pull and at hour one cooling; correlate with bead count next day."
      ]
    },
    {
      "heading": "Weeping as a epilogue you can prevent",
      "paragraphs": [
        "Pumpkin custard weeps when proteins squeeze water after baking or when sugar pulls syrup free as the pie cools; it feels like betrayal on an otherwise pretty surface. Log bake depth, cool speed, and whether you substituted milks—those choices change how tightly the proteins hug their water."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is weeping unsafe?",
      "a": "Usually not—it is water movement, not spoilage by itself; still follow standard dairy handling."
    },
    {
      "q": "Does cornstarch always fix it?",
      "a": "Only when fully cooked through; otherwise you trade weep for grit."
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
