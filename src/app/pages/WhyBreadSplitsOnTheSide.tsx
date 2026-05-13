import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-bread-splits-on-the-side",
  segment: "bread-science",
  categoryLabel: "Bread Science",
  title: "Why Bread Splits on the Side",
  subtitle:
    "Oven spring creates real pressure; if the top cannot open where you planned, the loaf will tear at the next weakest seam—usually the side or the seam you closed during shaping.",
  readTime: "8 min read",
  emoji: "⚡",
  fixRecipe: {
    category: "bread",
    problem: "general",
  },
  quickAnswer:
    "Bread splits on the side when internal steam and CO₂ pressure exceed what the crust and gluten skin can contain, and no score (or a shallow score) gives a weaker exit than the lateral wall. Fix it with a decisive score, even surface tension after shaping, strong final proof, and enough steam early so the crust does not lock before expansion finishes.",
  intro:
    "A blowout on the flank looks dramatic, but it is the same story as an ear on a baguette—gas found the path of least resistance. Side splits often mean the loaf was structurally fine but the pressure relief geometry was wrong: tight skin on top, glued seam on the bottom, and one soft panel left to tear. This article walks through scoring depth, shaping tension, proof state, and crust timing so you can aim expansion instead of fighting it. Once you read side splits as a routing problem, fixes become boringly repeatable.",
  sections: [
    {
      heading: "Pressure relief: scores versus random tears",
      paragraphs: [
        "During oven spring, yeast activity spikes until heat inactivates cells, while water flashes to vapor. The combined pressure inflates alveoli and pushes the loaf outward. A proper score is a designed weak line: the lip opens, steam vents, and expansion localizes there. A shallow or hesitant cut, or a score placed off the true high point, leaves the crown bonded while the sides still stretch—until something rips.",
        "Braids, pans, and high-hydration loaves with fragile surface skins are especially sensitive. For batards, a single long slash at a shallow angle beats many decorative nicks if your goal is controlled bloom rather than Instagram lattice.",
        "Even loading technique matters: a gentle transfer that stretches one face more than another biases where the first tear nucleates. If you always see the rip on the side facing your peel, suspect handling before you rewrite hydration.",
      ],
      bullets: [
        {
          title: "Score depth",
          text: "If the blade only tickles the surface, you get cosmetic lines; aim for confident depth relative to dough skin thickness without degassing the loaf.",
        },
        {
          title: "Blade angle",
          text: "A flap (ear) forms when the cut peels under lateral expansion; a vertical stab often reseals under surface tension.",
        },
      ],
      tip: "Oil or wet the blade, work fast after loading, and re-score lightly only if you clearly missed depth—otherwise accept the bake and adjust next time.",
    },
    {
      heading: "Shaping, seams, and hidden weak panels",
      paragraphs: [
        "Surface tension is not cosmetic; it is a stress jacket. When you roll a cylinder, the seam is inherently a line where layers meet. If the seam sits on the side without good closure—or if you degas heavily on one face—you create a panel that stretches differently under pressure. Under-proved dough can also blow because the skin is rubbery-tight in the wrong places while the interior is still slack.",
        "Pan breads split at the sides when top crust sets early and the still-expanding crumb pushes sideways against the pan wall. Greasing, lid steam, or tenting can change where the first fracture appears.",
        "Over-proofed dough sometimes looks relaxed but has a fragile gluten network; it can still tear unpredictably because the skin cannot distribute stress evenly. Track volume and jiggle, not only clock time.",
      ],
    },
    {
      heading: "Crust set, steam, and premature drying",
      paragraphs: [
        "Steam keeps the outer few millimeters flexible long enough for expansion to express through the score. Without it, a thin crust can polymerize and lock while the crumb is still moving—classic burst where it can. Home ovens lose steam fast; a lidded vessel, lava rocks, or repeated misting in the first minutes buys the same physics commercial decks provide.",
        "Sugar, milk, and enrichments brown faster; they can accelerate crust set relative to lean doughs. If you see side blowouts on enriched loaves only, compare steam and temperature with your lean baseline.",
        "Top heat from a broiler element or a rack too high can set a roof while the lower crumb is hottest and most active, which pushes stress downward and outward. Dropping the rack one notch is a surprisingly effective experiment.",
      ],
    },
    {
      heading: "How Fix My Recipe helps",
      paragraphs: [
        "Bread mode on SenseiFood highlights hydration, enrichment, and ratio bands that interact with proof time and oven behavior. Side splits are rarely wrong flour alone; they are usually process plus geometry.",
        "Log proof volume, dough temperature, score photo, and oven setup for three bakes. Patterns jump out faster than memory—especially when seasonal kitchen temperature shifts fermentation speed.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is a side split always bad?",
      a: "Not aesthetically if you like rustic bloom, but it can signal uneven crumb next to the tear. For sandwich slices, aim for controlled top bloom.",
    },
    {
      q: "My sourdough always blows one side",
      a: "Check seam placement and whether your banneton imprint makes one face thinner; also verify you are not loading upside-down relative to your intended score.",
    },
  ],
  related: [
    { title: "Why Bread Needs Scoring", path: "/bread-science/why-bread-needs-scoring" },
    { title: "Why Oven Spring Happens", path: "/bread-science/why-oven-spring-happens" },
  ],
};

export default function WhyBreadSplitsOnTheSide() {
  return <ScienceArticlePage spec={SPEC} />;
}
