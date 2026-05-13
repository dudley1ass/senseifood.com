import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crumb-is-too-tight",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crumb Is Too Tight (Cell Structure Failure)",
  "subtitle": "Under-proofing, heavy degassing during shaping, or an early-locked crust limit how far each gas bubble can stretch before it stops growing.",
  "readTime": "8 min read",
  "level": "Structure mechanics",
  "emoji": "🧽",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "A tight crumb means the gas cells inside the bread never expanded enough before the structure set. Common causes: the dough was under-proofed (not enough fermentation time at the right temperature), the shaping was too aggressive and pressed gas out, too much flour got worked in on the bench, or the crust locked early because there was not enough steam to keep it flexible.",
  "intro": "Crumb tightness is the memory of how far gas cells stretched before the loaf set. In an open crumb (irregular, hole-filled, the look you see in artisan ciabatta), many small bubbles expanded until the gluten films between them thinned and merged into a network of large interconnected holes. In a tight crumb, the expansion stopped early: the matrix was too stiff, was degassed too aggressively during shaping, or the crust locked while the inside still had little pressure pushing outward. Fat-enriched doughs (those with butter, eggs, milk) and low-hydration formulas naturally tend toward tighter crumbs because the fat coats gluten strands and limits bubble growth, and lower water means stiffer dough overall. But within any style, you can still chase even, gentle bubbles instead of dense brick-like crumbs. This article connects proofing signals, shaping technique, steam and heat timing, and which formula levers actually help cells finish inflating before starch gelatinization (the process where starch granules swell with water and lock the crumb into its final structure) halts all motion.",
  "sections": [
    {
      "heading": "Proofing time versus dough temperature",
      "paragraphs": [
        "The finger-poke test is really a check of internal pressure: under-proofed dough springs back immediately because the gluten network is still tight and has not relaxed. Over-proofed dough may not spring back at all because the gluten has stretched past its elastic limit. Tight crumb from under-proofing is common when kitchens are cool and recipes assume warmer ambient temperatures — a 70°F kitchen produces noticeably slower fermentation than a 78°F kitchen for the same recipe. Track dough temperature, not only clock time. Most straight doughs do best around 75 to 80°F (24 to 27°C) during bulk fermentation.",
        "Cold retardation in the fridge slows yeast metabolism dramatically but lets enzyme activity continue, which means a long fridge-proofed dough develops flavor through enzymes even while it appears \"not rising.\" Bring cold dough back to workable temperature before final proof and bake — typically a couple of hours on the counter — or you risk an under-expanded interior even though the surface looks proofed. A smooth, puffy outside can hide a dense center where the core never warmed enough to finish rising."
      ],
      "bullets": [
        {
          "title": "Same volume, different density",
          "text": "A loaf can look the right size from the outside and still feel tight inside, if most of the expansion happened in one direction. Look at crumb photos before declaring victory, not just the loaf's height."
        },
        {
          "title": "Pan versus free-form",
          "text": "Loaves baked in pans get sidewall support from the pan, so you can tolerate slacker dough and still get height. Free-form loaves rely on their own surface tension and the steam in the oven for shape — expect different proof cues for each."
        }
      ]
    },
    {
      "heading": "Shaping sequence and surface tension",
      "paragraphs": [
        "Tight surface tension during shaping helps oven spring — that taut outer skin acts like a stretched balloon, encouraging the loaf to expand upward when heated. But aggressive shaping that crushes the interior of the dough collapses the alveoli (the gas cells you spent bulk fermentation carefully building). Fold the dough to organize the gluten without flattening it; avoid aggressive punching down unless the formula specifically calls for degassing to reset the bubble field. Excessive bench flour sticks to the surface, seals it, and can create dense layers along old fold lines that resist further expansion.",
        "Seams should be confident but not railroaded. A dense spiral visible in a sliced boule (a round loaf) often traces back to a shaping step where the cook squeezed gas from the center outward unevenly, leaving a denser zone of compressed gluten where the gas was forced out."
      ],
      "tip": "Film your shaping once on your phone, then watch it back — you may be applying more downward pressure than you feel in your hands, which is a common cause of tight crumb that bakers cannot diagnose by feel alone."
    },
    {
      "heading": "Oven temperature and the steam phase",
      "paragraphs": [
        "Steam in the first minutes of baking keeps the crust leathery and flexible long enough for the inside of the loaf to finish expanding. Without steam, the exterior of the loaf sets early while the crumb pressure inside is still low — you get a classic pattern of tight top and slightly more open bottom in ovens with uneven heat distribution. Preheat the oven thoroughly so the loaf hits a stable hot environment from the moment it goes in; a lukewarm baking stone or a weak upper heat element changes the timing of crust set and the final crumb pattern.",
        "Scoring depth interacts with how the loaf expands. Too shallow a slash on tight, tense dough redirects gas poorly — the loaf may try to burst at the score but not have enough release. Too deep a slash on weak dough can actually collapse the loaf. Match the score to the actual state of the dough, which is something only experience teaches reliably."
      ]
    },
    {
      "heading": "Hydration, fat, and intentional style",
      "paragraphs": [
        "Lower hydration yields smaller, more uniform crumb cells by physics, not just by handling — there is simply less water in the dough to allow large gas pockets to form. Adding fat coats the gluten strands and shortens them, which limits the maximum size each bubble can reach. That is desirable for sandwich bread, where you want a fine even crumb that holds together for slicing, and frustrating if you wanted an open artisan crumb. Pushing the hydration up without also improving your handling technique mostly gives you a sticky, unworkable dough rather than automatic open crumb — high hydration needs more folds, gentler shaping, and longer bulk fermentation to deliver the structure that holds those big bubbles together.",
        "Whole grains cut into the gluten network with sharp bran particles and absorb extra water, so whole-grain doughs often read tighter unless you compensate with longer hydration soaks, more folds, and sometimes a percentage of strong white flour blended in. Adjust your expectations honestly when you change flour class — a 100 percent whole-wheat loaf is not going to look like a high-hydration white sourdough no matter how good your technique gets."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is tight crumb always a mistake?",
      "a": "No. Many bread styles aim for fine, even crumb — sandwich loaves, milk breads, brioche, most enriched breads. The issue is when there is a mismatch between your expectation and the outcome within the same formula. If your sourdough was supposed to look like a typical artisan loaf and came out brick-tight, that is a problem. If your milk bread came out fine and even, that is the goal."
    },
    {
      "q": "Can over-proofing look tight?",
      "a": "Yes. A collapsed over-fermented dough can produce a gummy or dense crumb with irregular voids — it is technically a different failure mode from under-proofing, but the visual result can look similar at a glance. Context matters: check the aroma (over-proofed dough smells alcoholic or sour), the color of the crumb (sometimes grayish), and whether the loaf flattened during the bake. Those clues separate over-proofed collapse from under-proofed tight crumb."
    },
    {
      "q": "Does kneading longer open the crumb?",
      "a": "Only up to a point. Under-kneaded dough has not developed enough gluten to trap gas effectively, so the crumb stays tight no matter how long you proof. Over-kneaded dough has gluten that is too tight to expand well, which can also produce tight crumb. The right amount is style-dependent: use a windowpane test (stretching a small piece of dough until you can see light through it without tearing) plus recipe guidance to find the right development level for what you are baking."
    }
  ],
  "related": [
    {
      "title": "Why Oven Spring Happens",
      "path": "/bread-science/why-oven-spring-happens"
    },
    {
      "title": "Why Bread Needs Steam",
      "path": "/bread-science/why-bread-needs-steam"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadCrumbIsTooTight() {
  return <ScienceArticlePage spec={SPEC} />;
}
