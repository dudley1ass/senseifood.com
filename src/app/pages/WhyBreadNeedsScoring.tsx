import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-needs-scoring",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Needs Scoring",
  "subtitle": "Cutting a slash or pattern in the top of a loaf tells the bread where to expand, so the crust tears in a controlled, predictable way instead of bursting randomly along weak seams.",
  "readTime": "7 min read",
  "emoji": "✂️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Scoring creates a deliberate weak line in the crust where pressure can escape during the explosive rise that happens in the first minutes of baking (bakers call this oven spring). Without a score, the loaf will burst along the bottom or the seams instead, and the crumb shape suffers. How deep and at what angle you cut depends on how strong the dough is and how much steam you have in the oven.",
  "intro": "The skin on a loaf of bread is not just decorative packaging—it is a stretched, pressurized membrane holding back the gas inside. A score is a relief valve you have built into that membrane. Those beautiful ears (the lifted, crisp lips of crust along a score) you see on artisan loaves are a pretty side effect of doing the physics right, not the main reason the score is there. As the loaf heats up, the trapped gas expands and the steam pressure inside rises—peaking at roughly the equivalent of 15–25 psi of stress in localized pockets—and a score gives you control over where the dough tears open as that pressure rises, so the loaf expands the way you intended instead of blowing out at the weakest seam.",
  "sections": [
    {
      "heading": "Controlled failure",
      "paragraphs": [
        "In materials science there is an idea called a designed failure plane—deliberately weakening one part of a structure so it gives way there instead of somewhere worse. A score on a loaf is exactly that. You are choosing where the dough opens up, which means the rest of the surface stays intact and the loaf keeps the overall shape you want."
      ]
    },
    {
      "heading": "Matching depth to dough strength",
      "paragraphs": [
        "A weak or under-fermented dough cannot take a deep slash without losing its structure—it will tear and slump. A strong, well-fermented dough can accept a confident, deeper score at an angle, and it will reward you with a lifted ear where the crust peels back during the bake. The general rule: weak dough wants shallower scores; strong dough handles deeper, more confident ones."
      ]
    },
    {
      "heading": "Pan bread",
      "paragraphs": [
        "Sandwich loaves baked in a pan sometimes get scored for surface tension relief, and sometimes do not need it at all because the pan edges themselves are guiding the expansion upward. It depends on how tight the surface is when you load it—knowing your particular formula matters more than following a blanket rule."
      ],
      "tip": "Lame blades dull fast; a dull blade drags rather than slices and tears the crust messily. Replace blades often, or strop them on a small ceramic rod so you actually get a clean cut."
    },
    {
      "heading": "Holistic view",
      "paragraphs": [
        "If your scores never seem to open up properly, the blade is probably not the real problem. Suspect a surface that dried out before baking, not enough steam in the oven during oven spring, or a dough that was already over-proofed and too fragile to spring at all. Looking at the ratios in Fix My Recipe helps you tell whether you have a dough problem or a technique problem before you go buying new blades."
      ]
    },
    {
      "heading": "Depth and angle",
      "paragraphs": [
        "A shallow, low-angle slash on a batard (a long, oval-shaped loaf) is what opens up into an ear; the grigne (the French word for the lifted, lip-like edge of crust along a score) forms where the angled flap of crust peels back as the loaf rises. Depth is usually about ¼ to ½ inch, depending on how wet the dough is. A cold, retarded dough (one that has spent its final proof in the fridge) scores much more cleanly than a warm, sticky dough—chill the loaf for 15 minutes if your scores are dragging."
      ]
    },
    {
      "heading": "Pattern and expansion",
      "paragraphs": [
        "On a very wet, high-hydration dough, a few well-placed scores spread the expansion across the surface so no single weak point blows out. On a stiffer dough, a single confident slash is often enough to channel all of the oven spring up through one ear."
      ]
    },
    {
      "heading": "Logging scores so they stop being guesswork",
      "paragraphs": [
        "Scores work best when everything else is steady: same dough temperature going into the oven, same blade, and the cut happening right before loading so the skin does not dry shut again. After three bakes, line up two photos each time—the dough right after the slash, and the loaf at about eight minutes—and ask whether expansion followed your line or blew somewhere random. That pair of pictures teaches faster than memorizing generic temperature tables.",
        "Proof still runs the show: an under-proofed loaf can tear; an over-proofed loaf has little left to lift. Note how the poke test felt alongside your score depth. If the dough tears when you slash, hydration or gluten strength may be the limit, and SenseiFood’s Fix My Recipe bread checks can flag a formula that is unusually wet for the flour you are using."
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
      "q": "Should I score the loaf before or after I load it into the oven?",
      "a": "Score right before the loaf goes into the oven. If you wait too long after scoring, the cut surfaces dry out and stick closed again as the dough relaxes, and you lose the benefit."
    },
    {
      "q": "What is the difference between a lame and a kitchen knife?",
      "a": "A lame is a thin razor blade on a handle, usually curved, which lets you slice at a low angle and lift one flap of crust to create a dramatic ear. A straight knife will cut a loaf open, but the slash tends to be more symmetric and less expressive—it is great for simple straight cuts and crosses on round loaves."
    }
  ]
};

export default function WhyBreadNeedsScoring() {
  return <ScienceArticlePage spec={SPEC} />;
}
