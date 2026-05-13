import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-dry-out-after-one-day",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Dry Out After One Day",
  "subtitle": "Cooked starch rearranges itself overnight and quietly pushes water out, while the rest of the moisture migrates into the air or into the frosting—both of which steal the tenderness you had on day one.",
  "readTime": "8 min read",
  "emoji": "📅",
  "fixRecipe": {
    "category": "cake",
    "problem": "dry"
  },
  "quickAnswer": "Next-day dryness in a cake is mostly staling, not lost water. The cooked starch (specifically a starch molecule called amylopectin) reorganizes itself into more crystalline patterns and squeezes its bound water back out into the crumb, where it then evaporates. The way to slow it down is brushing the layers with simple syrup before assembly, using oil instead of (or alongside) butter, storing the cake airtight, and freezing whole cakes you will not eat soon.",
  "intro": "Cakes do not just “lose moisture”; they reorganize how the water inside the crumb is bound. Once you understand staling, the cake you swore was hopeless on day two becomes just normal physics that you can plan around. Staling is fastest somewhere between roughly 32–50°F (0–10°C)—which is exactly fridge temperature—because the starch is happy to retrograde (the technical word for that recrystallization), and the water still has enough mobility at that temperature to keep moving around the crumb. Down at freezer temperatures, near 0°F (-18°C), both the retrogradation and any microbial growth slow way down. Ice crystals can damage some of the crumb’s cell walls if you thaw it carelessly, though, so wrap things well and thaw slowly.",
  "sections": [
    {
      "heading": "Retrogradation",
      "paragraphs": [
        "After baking, the swollen starch in the crumb is in a sort of jellied, disordered state. Over the next 24 hours it slowly reorders into more crystalline patterns, which makes the crumb feel firmer and more brittle even when the total amount of water in the cake has barely changed. That is what staling is, at a molecular level."
      ]
    },
    {
      "heading": "Storage",
      "paragraphs": [
        "Cut faces of a cake expose the crumb directly to dry air, which is why a half-eaten cake gets dry along the cut edge first. The fridge does cut down on mold growth, but it actually accelerates the staling reaction for most cakes—the cake comes out of the fridge feeling drier than it really should, even when sealed."
      ],
      "tip": "Press plastic wrap directly onto cut surfaces of the cake instead of just covering the plate; keep butter cakes at room temperature when food safety allows (no fresh-cream filling, no fresh fruit)."
    },
    {
      "heading": "Formulation",
      "paragraphs": [
        "Sugar and fat both bind moisture and slow staling at the molecular level. Oil-based cakes generally stay softer on day two than pure butter cakes because oil stays liquid at room temperature; butter is firm and waxy when cool, which makes the same cake feel drier even when the actual moisture is similar."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Pull the cake’s ratio of sugar, fat, and liquid into Fix My Recipe. If you are on the lean side of the typical bands, staling is going to win fast no matter how careful your storage is."
      ]
    },
    {
      "heading": "Time and temperature storage map",
      "paragraphs": [
        "For a butter cake kept under an airtight dome at room temperature (68–72°F / 20–22°C), the texture often beats the fridge version for 1–2 days as long as food safety allows (no fresh-cream filling, no fresh fruit, no eggy custard). High-sugar and high-acid components resist mold longer than dairy-heavy fillings, which is why a lemon curd layer keeps better at room temperature than a fresh whipped cream layer. Brushing the layers with simple syrup (a quick stovetop blend of sugar and water) increases the free moisture on each layer and can mask the firming crumb for a couple of days—this is a classic pastry trick that does not require changing the bake itself."
      ]
    },
    {
      "heading": "Fat type and staling rate",
      "paragraphs": [
        "Liquid oil interferes less with starch crystallization over the long run than solid butter crystals do—so oil cakes often feel softer the next day than butter cakes with otherwise identical ingredients. Commercial cake mixes use food-grade emulsifiers (molecules that help fat and water hang out together) to do the same job at a microscopic scale, which is partly why a box mix can stay tender for several days."
      ]
    },
    {
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center. Chocolate and very moist formulas can fool a thermometer—pair the probe with a spring-back test (press the center gently; if it bounces back, it is set) and a clean skewer test. Edge-to-center heat gradients matter: a reading “done” only at the top center can still leave a wet band near the floor of the pan, so check about an inch above the bottom in thick layers. Convection and dark pans both speed up heating, so if your edges race ahead, lower the set temperature by about 25°F (14°C) and extend the time. Let big layers cool to below about 100°F (38°C) internally before slicing or stacking—the crumb structure keeps stabilizing as it cools.",
        "Write down your kitchen’s ambient temperature, the oven set point, and your probe reading. Change one input per attempt: flour brand, sugar percentage, fat type, chill time, or rack position. Photograph the crumb side-by-side every time. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category, so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F is about 93°C (the cake and bread finish zone), 350°F is about 177°C (a common cake and cookie air temperature), and 212°F is 100°C (where water boils at sea level). Humidity in your kitchen changes how icings dry and how a cake stales overnight—note the weather when results swing for no obvious reason. A chest freezer running near 0°F (−18°C) holds cakes much better than a self-defrosting kitchen freezer, which cycles temperatures up and down and accelerates ice crystal damage."
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
      "q": "Is bread staling the same science as cake staling?",
      "a": "The underlying starch retrogradation is the same theme in both. Cakes have more sugar and fat in them, which slows the curve—so a cake usually stales more gently and stays softer longer than an equivalently-stored loaf of lean bread."
    },
    {
      "q": "Can I microwave a slice to revive it?",
      "a": "Yes, but only briefly. Heat temporarily un-does some of the starch retrogradation and re-softens the crumb, which is great for one slice you are about to eat. The effect is temporary—the slice will firm back up within minutes after cooling—so the microwave is a serving trick, not a storage strategy."
    }
  ]
};

export default function WhyCakesDryOutAfterOneDay() {
  return <ScienceArticlePage spec={SPEC} />;
}
