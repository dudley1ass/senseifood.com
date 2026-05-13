import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crust-is-too-soft",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crust Is Too Soft",
  "subtitle": "A soft crust means the surface never dried and browned enough — or steam stayed trapped around the loaf longer than it should have.",
  "readTime": "7 min read",
  "emoji": "🧽",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Soft crust usually means one of three things: not enough drying in the final stretch of the bake, baking entirely enclosed (like in a Dutch oven) without venting the steam at the right moment, or storing the loaf in a humid environment right after baking. Finish the loaf uncovered until the crust audibly crackles and pings as it cools.",
  "intro": "A crust that feels leathery or spongy lost the race between the interior setting and the surface drying out. Steam is essential during the first part of baking — it keeps the crust flexible while the loaf finishes expanding — but the second half of the bake has a different job: it has to let that crust actually become crust. If you keep steam around the loaf for the entire bake, the surface never dehydrates and browns enough to develop the rigid, slightly hollow texture that defines a great crust. Soft crust often points to insufficient surface dehydration: the internal steam from the dough kept the crust hydrated, or the oven environment stayed humid because vents stayed closed too long. Steam injection in the early bake is great, but it needs venting later for a crackly final crust.",
  "sections": [
    {
      "heading": "Steam too long",
      "paragraphs": [
        "If the loaf stays in a sealed humid environment — under a closed Dutch oven lid, for example, or in a heavily steamed oven — for the entire bake, both browning and crisping stall. The surface stays too wet to undergo the Maillard browning (the reaction between sugars and proteins that creates the deep brown color and toasty flavor of a good crust) and the crisp dehydrated layer never forms. Vent the Dutch oven; remove the lid partway through the bake according to the style of your formula. For most lean breads, the lid comes off after the first 20 to 25 minutes — at that point the loaf has finished its oven spring and now needs dry heat to develop the crust."
      ]
    },
    {
      "heading": "Oven temperature",
      "paragraphs": [
        "Very low oven temperatures dry the surface slowly and can yield pale, soft skins — particularly noticeable on egg-washed rolls, where the surface stays tacky rather than developing a glossy hard finish. Many sweet rolls are intentionally baked at moderate temperatures (around 350°F / 177°C) for tender crusts, but if you want a crisper finish, push the temperature up by 25°F (14°C) for the last few minutes."
      ]
    },
    {
      "heading": "Oil washes and butter brushing",
      "paragraphs": [
        "Brushing fat onto the surface of a loaf — whether right before baking or fresh out of the oven — softens the perceived crunch by sealing in moisture and physically lubricating the crust. That is exactly what you want on dinner rolls, brioche, and milk bread, where softness is the goal. For a crackly baguette or rustic country loaf, skip the post-bake butter and let the crust dry naturally on a cooling rack."
      ]
    },
    {
      "heading": "Systems approach",
      "paragraphs": [
        "Note your lid-off time (when you remove the Dutch oven lid or vent the oven) and whether you used the convection fan for the last 5 to 10 minutes if your oven has one. Convection accelerates surface drying because it actively pushes dry air against the loaf, which is exactly what soft-crust problems usually need. Cross-check the hydration of your recipe: very wet doughs (high hydration percentage) need longer post-steam drying time because there is more water in the dough to drive off, and an under-baked high-hydration loaf often presents as soft crust plus gummy interior."
      ]
    },
    {
      "heading": "Finish dry",
      "paragraphs": [
        "The last 5 to 10 minutes of baking, without steam and ideally with the convection fan on, drives off remaining surface moisture and accelerates caramelization of the surface sugars. By this point in the bake, the internal temperature of the loaf should already be near doneness — typically 195 to 205°F (91 to 96°C) for lean wheat doughs — so the dry-finish phase is mostly about the crust, not the interior. If you brush the surface with oil or butter at the very end, that softens the crust by design; choose whichever finish matches your bread style."
      ]
    },
    {
      "heading": "Humidity and cooling",
      "paragraphs": [
        "Cooling the loaf in a sealed plastic bag traps moisture from the still-warm crumb, and that moisture migrates to the surface and softens the crust within minutes. For breads where you want a crisp crust, cool on an open rack so the moisture escapes into the air. For breads where you want a softer crust (sandwich loaves, rolls), bagging while still slightly warm is a deliberate technique. Either approach is valid — just match the cooling method to the bread style you wanted."
      ]
    },
    {
      "heading": "Reading the loaf before and after the bake",
      "paragraphs": [
        "A good crust gives an audible response when it cools — small crackling sounds, a clear ping when tapped on the bottom. If your loaf comes out silent and pliable, the crust is undercooked or under-dried. Internal temperature still matters: most lean loaves finish around 200 to 208°F (93 to 97°C) at the thickest point. If you reach internal doneness but the crust still feels soft, give the loaf an additional 5 minutes uncovered at the same temperature — that extra dry time is often all the crust needs.",
        "If you bake regularly in a kitchen where humidity changes with the seasons, expect your crust results to shift with the weather. A humid summer day means more moisture in the oven air (even before you add steam), which can soften crusts compared to the same recipe in a dry winter kitchen. Note the conditions in passing and the patterns become obvious instead of mysterious."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "What if I want a soft sandwich crust?",
      "a": "Then soft is the goal, not the problem. Butter-top burger buns, brioche, and milk bread are all supposed to have soft crusts. Use lower oven temperatures, brush with butter or oil after baking, cool partly in a plastic bag, and accept that the same techniques that ruin a baguette make a perfect sandwich roll."
    },
    {
      "q": "Does egg wash always give a soft crust?",
      "a": "Egg wash creates a glossy, slightly firmer surface — the proteins set into a thin film that holds onto sugars and browns evenly. The resulting crust can be soft (on enriched dough at moderate temperature) or quite firm (on lean dough at high heat). If you want a softer crust, omit the egg wash and brush with melted butter after baking instead."
    }
  ]
};

export default function WhyBreadCrustIsTooSoft() {
  return <ScienceArticlePage spec={SPEC} />;
}
