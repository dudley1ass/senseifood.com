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
  "intro": "Layering is friction welding with frosting. Fresh-cut sponge faces are moist, slightly plastic, and rich in exposed starch and sugar—perfect for sticking to each other and to your bench knife. Warm interiors drive steam outward through those faces, re-softening crumb and turning sugar syrupy. Add jam, ganache, or buttercream under pressure and you squeeze adhesive into the cell structure. Bakers treat chill time, crumb cleanliness, and barrier films as structural steps: cool until the mass is handleable, remove loose crumbs that nucleate tack, and apply fillings at temperatures that do not re-melt the crumb. This guide walks through the thermal sequence, moisture sources, and mechanical pressure that turn innocent layers into a fused stack.",
  "sections": [
    {
      "heading": "Cooling sequence before the knife",
      "paragraphs": [
        "Depan and cool until the center no longer radiates heat through the bottom—warm centers continue to steam through trimmed faces during torting. If you must trim early, return layers to the fridge between cuts so shear happens in a firmer matrix.",
        "Cold layers fracture more cleanly; warm layers smear, leaving smeared starch-sugar films that glue."
      ],
      "bullets": [
        {
          "title": "Crumb coat reality",
          "text": "Loose crumbs mixed into buttercream become gritty bond sites—brush or vacuum crumbs first."
        },
        {
          "title": "Freezer shortcuts",
          "text": "Brief chilling firms surfaces for trimming; avoid freeze-drying edges unless your formula tolerates it."
        }
      ]
    },
    {
      "heading": "Holding frostings and fillings",
      "paragraphs": [
        "Warm jam or loose ganache pumps water into the cut face faster than buttercream alone. Bring fillings to workable coolness; ganache should be pipeable, not pourable, unless the design expects absorption.",
        "Fruit macerations release juice under weight—drain before interior layers or accept slide risk."
      ]
    },
    {
      "heading": "Pressure and flatness",
      "paragraphs": [
        "Aggressive bench scrapers and palm presses extrude syrup from filling and collapse crumb. Use light, even pressure when applying coats; rotate the stand rather than wrestling one stuck side.",
        "Overfilled layers squish outward, increasing contact area and tack between tiers—level and thickness matter."
      ],
      "tip": "If layers skate but then lock solid in the fridge, you likely had warm-soft interfaces that refirmed—chill between operations."
    },
    {
      "heading": "Time between crumb coat and final coat",
      "paragraphs": [
        "Crumb coats exist partly to seal faces so the next coat does not re-wet the sponge. Rushing skips that benefit: the final pass drags moisture back into the crumb and can tear surfaces that then stick to tools and neighbors.",
        "Hands transfer heat even through gloves; handle chilled cakes briefly or use a turntable and offset spatula to minimize palm contact."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does parchment between layers help sometimes but not always?",
      "a": "It interrupts contact while cold, but peels can disturb soft crumb if the cake is warm or the frosting is tacky—chill until sets are firm before removing separators."
    },
    {
      "q": "Does simple syrup always make sticking worse?",
      "a": "Only if over-applied or brushed onto warm cake. Thin, even syrup on cool layers can actually consolidate surfaces for clean icing—technique matters more than the idea."
    },
    {
      "q": "Are chiffon layers worse than butter cake?",
      "a": "Often more delicate and moist—same principles, gentler handling, and sometimes firmer chill thresholds."
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
