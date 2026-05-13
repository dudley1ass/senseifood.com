import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-stick-to-themselves-when-layering",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Stick to Themselves When Layering",
  "subtitle": "A tacky, sugary cut surface, layers that have not cooled all the way through, and even moderate pressure during stacking can fuse cake faces together.",
  "readTime": "7 min read",
  "level": "Post-bake handling",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Layers fuse to each other when the cut faces are still warm, still slightly steamy, or rich in hygroscopic sugar (sugar that grabs moisture from the air). Chill the layers all the way through, brush stray crumbs away, and apply a thin barrier between layers—either a restrained brush of simple syrup or a piped buttercream dam around the rim—before stacking.",
  "intro": "Stacking a cake is essentially friction welding with frosting as the glue. Freshly cut sponge faces are moist, slightly plastic, and rich in exposed starch and sugar—everything you would design if you wanted two surfaces to stick to each other (and to your bench knife). A warm interior drives steam outward through those cut faces, re-softening the crumb and turning the sugar at the surface syrupy. Then you add jam, ganache, or buttercream, press down even slightly, and you have squeezed all that adhesive deep into the cell structure. Bakers treat chill time, crumb cleanliness, and a thin barrier film as structural steps in the build, not optional extras: cool until the cake is solid enough to handle, remove loose crumbs that would create sticky points, and apply fillings at temperatures that will not re-melt the crumb under them. This guide walks through the thermal sequence, where the moisture is coming from, and how mechanical pressure can turn innocent layers into one fused mass.",
  "sections": [
    {
      "heading": "Cooling sequence before the knife touches it",
      "paragraphs": [
        "Take the layers out of the pan and cool them until the center no longer radiates heat through the bottom of the pan or wire rack—a warm core keeps pumping steam through whatever surfaces you torte (slice horizontally to make thinner layers). If you have to start trimming before the cake is fully cool, return the layers to the fridge in between cuts so the shear actually happens through a firmer matrix. Cold layers fracture much more cleanly; warm layers smear, and the smeared film of starch and sugar is exactly the glue that fuses everything together later."
      ],
      "bullets": [
        {
          "title": "Crumb coat reality",
          "text": "Loose crumbs mixed into the buttercream become gritty little bond sites that drag and lock against the next layer. Sweep or vacuum stray crumbs off the layer before you apply any frosting."
        },
        {
          "title": "Freezer shortcuts",
          "text": "Brief chilling in the freezer firms the surfaces nicely for clean trimming; just do not leave them long enough to freezer-dry the edges, unless your formula and frosting plan tolerate that."
        }
      ]
    },
    {
      "heading": "Holding frostings and fillings",
      "paragraphs": [
        "Warm jam or loose ganache pumps water into the cut face of a cake much faster than buttercream alone—both because the filling is wetter, and because the heat opens up the crumb. Bring fillings to a workable coolness; ganache should be pipeable, not pourable, unless the design intentionally wants the layer to absorb some. Macerated fruit (fruit that has been mixed with sugar to draw out juice) releases more juice under the weight of the stack above—drain it before placing it between interior layers, or accept that you may end up with some lateral slide."
      ]
    },
    {
      "heading": "Pressure and flatness",
      "paragraphs": [
        "Aggressive bench scrapers and palm presses extrude syrup out of the filling and collapse the crumb underneath. Apply each coat with light, even pressure; rotate the cake stand to come at any stubborn spot instead of wrestling one side flat. Overfilled layers squish outward and increase the surface area where layers contact each other, which raises the chance of tack between tiers—keep your filling thickness and level honest."
      ],
      "tip": "If layers feel like they slide around on you at first, then lock together rock-solid in the fridge, you almost certainly had warm-soft interfaces that simply re-firmed in the cold. Chill between operations."
    },
    {
      "heading": "Time between crumb coat and final coat",
      "paragraphs": [
        "The crumb coat exists partly to seal the surfaces so the next, prettier coat does not re-wet the sponge underneath. Rushing the crumb coat skips that benefit: the final pass then drags moisture back into the crumb and can tear surfaces, which then stick to your tools and to each other. Even your hands transfer real heat through gloves; handle chilled cakes briefly, and use a turntable and offset spatula to keep your palms off the cake as much as possible."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does putting parchment between layers help sometimes but not always?",
      "a": "Parchment interrupts the contact while the cake is cold, but when you go to peel it away, soft crumb or tacky frosting can disturb the layer. Chill until the surfaces are firm before you remove any separators."
    },
    {
      "q": "Does simple syrup always make layers stickier?",
      "a": "Only if you over-apply it or brush it onto a still-warm cake. A thin, even brush on a fully cooled layer actually consolidates the cut surface for cleaner icing later—technique matters more than the idea itself."
    },
    {
      "q": "Are chiffon layers harder to work with than butter cake layers?",
      "a": "Chiffon and sponge layers tend to be more delicate and moist, so the same principles apply but with gentler handling and sometimes a firmer chill before you start trimming and stacking."
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
