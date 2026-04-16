import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-stick-to-themselves-when-layering",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Stick to Themselves When Layering",
  "subtitle": "Surface tack from sugar glass, incomplete cool-down, and pressure during stacking.",
  "readTime": "7 min read",
  "level": "Post-bake handling",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Layers fuse when cut faces are still warm, steam-soft, or high in hygroscopic sugar. Chill fully, brush crumbs away, and use a thin barrier (simple syrup with restraint, buttercream dam) before stacking.",
  "intro": "Assembly is a second thermal process. Warm crumb is plastic; sugar at the cut surface can hygroscopically glue layers. Professional workflows treat chill time and surface film as structural steps, not optional styling.",
  "sections": [
    {
      "heading": "Cooling sequence before the knife",
      "paragraphs": [
        "Trim and tort while slightly firm, then finish-chill before final stack. Warm centers telegraph outward and re-soften frosting dams."
      ]
    },
    {
      "heading": "Holding frostings and fillings",
      "paragraphs": [
        "Warm jam or ganache releases moisture into the crumb face. Apply cool fillings or set ganache to pipeable thickness first."
      ]
    },
    {
      "heading": "Pressure and flatness",
      "paragraphs": [
        "Over-torquing a scraper when crumb-coating squeezes adhesive sugar syrup between layers. Light touch + chill between coats."
      ]
    },
    {
      "heading": "Time between crumb coat and final coat",
      "paragraphs": [
        "Short rests let buttercream firm so the next layer does not slide-tear. Rushing stacks heat from hands through gloves into surfaces."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Stick to the Pan",
      "path": "/cake-science/why-cakes-stick-to-pan"
    },
    {
      "title": "Why Cakes Crumble When Cut",
      "path": "/cake-science/why-cakes-crumble-when-cut"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    }
  ]
};

export default function WhyCakesStickToThemselvesWhenLayering() {
  return <ScienceArticlePage spec={SPEC} />;
}
