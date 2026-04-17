import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crumb-is-too-tight",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crumb Is Too Tight (Cell Structure Failure)",
  "subtitle": "Under-proofing, heavy degassing, or weak oven spring limit cell expansion.",
  "readTime": "8 min read",
  "level": "Structure mechanics",
  "emoji": "🧽",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Tight crumb means cells never expanded enough before set—often under-proof, aggressive shaping, too much flour on bench, or early crust lock from low steam.",
  "intro": "Crumb tightness is the memory of how far gas cells stretched before the loaf set. In an open crumb, many small bubbles expanded until gluten films thinned and neighboring cells cooperated into an irregular network. In a tight crumb, expansion stopped early: the matrix was too stiff, degassed too hard, or the crust locked while the interior still had little pressure. Fat-enriched doughs and low-hydration formulas trend tighter by nature, but within a style you can still chase even, gentle alveoli. This article connects proofing signals, shaping technique, steam and heat timing, and formula levers that help cells finish inflating before starch gelatinization halts motion.",
  "sections": [
    {
      "heading": "Proofing time versus dough temperature",
      "paragraphs": [
        "The finger-poke test is a timeline check: under-proofed dough springs back immediately because internal pressure has not relaxed the gluten network enough; over-proofed dough may not spring at all. Tight crumb from under-proofing is common when kitchens are cool and recipes assume warmer ambient temps. Track dough temperature, not only clock time.",
        "Cold retardation slows yeast but continues enzymatic activity; bring dough to workable temperature before final proof or you risk under-expanded interiors with a deceptive skin. A smooth, puffy surface can hide a dense center if the core never warmed enough for final rise."
      ],
      "bullets": [
        {
          "title": "Same volume, different density",
          "text": "A loaf can look sized correctly yet feel tight if most expansion happened in one axis—check crumb photos, not only height."
        },
        {
          "title": "Pan versus free-form",
          "text": "Pans support sidewalls; free-form loaves rely more on surface tension and steam. Expect different proof cues."
        }
      ]
    },
    {
      "heading": "Shaping sequence and surface tension",
      "paragraphs": [
        "Tight surface tension helps oven spring, but crushing the interior collapses alveoli you spent bulk fermentation building. Fold to organize gluten; avoid aggressive punching unless the formula demands degassing for an even cell reset. Excessive bench flour seals surfaces and can create dense layers that resist expansion.",
        "Seams should be confident but not railroaded. A dense spiral in a boule often maps to a shaping step that squeezed gas from the center outward unevenly."
      ],
      "tip": "Film your shaping once; you may be applying more downward pressure than you feel."
    },
    {
      "heading": "Oven temperature and the steam phase",
      "paragraphs": [
        "Steam keeps the crust leathery long enough for internal expansion to finish. Without it, the exterior sets early while crumb pressure is still low—classic tight top, slightly open bottom pattern in uneven ovens. Preheat thoroughly so the loaf hits a stable environment; a lukewarm stone or weak upper heat changes set timing.",
        "Scoring depth interacts with expansion: too shallow on a tense skin can redirect gas poorly; too deep can collapse weak dough. Match score to proof state."
      ]
    },
    {
      "heading": "Hydration, fat, and intentional style",
      "paragraphs": [
        "Lower hydration yields smaller, more uniform cells by physics, not only by handling. Adding fat coats gluten and shortens strands, which limits maximum bubble size— desirable for sandwich bread, frustrating if you wanted an artisan open crumb. Pushing hydration without structural technique yields stickiness, not automatic openness; pair higher water with folds and gentle handling.",
        "Whole grains cut gluten and absorb water; they often read tighter unless hydration and autolyse compensate. Adjust expectations when changing flour class, or build structure with preferments and longer bulk."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is tight crumb always a mistake?",
      "a": "No. Some breads aim for fine, even slices. The issue is mismatch between expectation and outcome within the same formula."
    },
    {
      "q": "Can over-proofing look tight?",
      "a": "Yes—collapsed, over-fermented dough can have a gummy or dense crumb with irregular voids. Context matters: check aroma, crumb color, and whether the loaf flattened."
    },
    {
      "q": "Does kneading longer open the crumb?",
      "a": "Only up to a point. Under-kneaded dough may not trap gas; over-kneaded dough can resist expansion. Use windowpane and recipe guidance."
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
