import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-bread-splits-on-the-side",
  segment: "bread-science",
  categoryLabel: "Bread Science",
  title: "Why Bread Splits on the Side",
  subtitle:
    "The big rise in the first minutes of baking (oven spring) builds real pressure inside a loaf, and if the top of the loaf cannot open up cleanly where you planned, the dough will tear at the next weakest spot—usually the side or wherever you sealed the seam during shaping.",
  readTime: "8 min read",
  emoji: "⚡",
  fixRecipe: {
    category: "bread",
    problem: "general",
  },
  quickAnswer:
    "Bread splits on the side when the steam and carbon dioxide pressure inside push harder than what the crust and the outer gluten skin can hold, and when there is no score (or only a shallow one) the side becomes the easiest exit. The fix is a confident score on the top of the loaf, even surface tension after shaping (so no part of the skin is thinner than the rest), a strong final proof, and enough steam in the early minutes of the bake so the crust does not lock up before the loaf finishes expanding.",
  intro:
    "A loaf that bursts wide open on the side looks dramatic, but it is really the same story as a beautiful ear on a baguette—the gas inside found the path of least resistance. A side split usually means the loaf itself was actually structurally fine, but the pressure had nowhere good to vent: the top skin was tight, the bottom seam was glued shut, and one soft panel on the flank was left to do all the tearing. This article walks through how deep to score, how to build even tension when you shape, how to tell when the proof is right, and how to time your crust set, so that you can aim where the loaf opens up instead of fighting it. Once you read side splits as a routing problem (gas needed somewhere to go), the fixes become boringly repeatable.",
  sections: [
    {
      heading: "Pressure relief: scores versus random tears",
      paragraphs: [
        "During oven spring, the yeast goes into a final frenzy of activity until the heat finally kills the cells, and at the same time the water in the dough flashes into steam. The combined pressure inflates the gas bubbles (alveoli) inside the crumb and pushes the whole loaf outward against the crust. A proper score is a designed weak line: the lip of the cut peels back, steam vents out through that gap, and expansion concentrates there. A shallow or hesitant cut, or a score that is not actually on the highest point of the loaf, leaves the crown bonded shut while the sides are still stretching outward—until something has to give and a tear nucleates (starts at one stress point and rips out from there).",
        "Braided loaves, pan breads, and very wet high-hydration loaves with fragile skins are especially sensitive to this routing problem. For batards (long oval loaves), a single long, low-angle slash usually beats a bunch of decorative little nicks if your goal is a controlled bloom rather than a pretty Instagram pattern.",
        "Even how you load the loaf into the oven matters: a clumsy transfer that stretches one side more than another biases where the first tear will start. If you always see the split on the side that was facing your peel (the long-handled paddle bakers use to slide loaves in and out), the issue is almost certainly handling rather than your hydration spreadsheet.",
      ],
      bullets: [
        {
          title: "Score depth",
          text: "If the blade only barely scratches the surface you only get cosmetic lines, not a real pressure-release path. Aim for a confident depth that goes through the outer skin without deflating the loaf.",
        },
        {
          title: "Blade angle",
          text: "An ear (the lifted, flap-like piece of crust along a score) forms when the cut peels back under sideways expansion. A straight, vertical stab usually reseals itself under the loaf’s own surface tension as it springs up.",
        },
      ],
      tip: "Lightly oil or wet the blade so dough does not stick to it, work fast after loading, and only re-score lightly if you clearly missed depth on the first pass—otherwise accept this bake’s result and adjust the next time.",
    },
    {
      heading: "Shaping, seams, and hidden weak panels",
      paragraphs: [
        "Surface tension on a shaped loaf is not just cosmetic—think of it as a stress jacket holding the dough together. When you roll a cylinder, the seam is, by definition, a line where two layers of dough meet. If that seam ends up on the side without being properly closed, or if you crushed the gas out of one face more than the other while shaping, you create a panel that stretches differently under pressure. An under-proofed dough can also blow out because the skin can be tight and rubbery in the wrong spots while the interior is still slack and undeveloped.",
        "Pan loaves often split right at the sides because the top crust sets early while the still-expanding crumb pushes sideways against the pan wall instead of upward. Greasing, lid steam, or a foil tent in the early bake can shift where that first fracture happens.",
        "Over-proofed dough sometimes looks innocently relaxed but actually has a fragile, blown-out gluten network; it can tear unpredictably because the skin no longer distributes stress evenly. Track how much your dough has grown by volume and how it jiggles, not only how many minutes have passed.",
      ],
    },
    {
      heading: "Crust set, steam, and premature drying",
      paragraphs: [
        "Steam keeps the outermost few millimeters of the dough flexible just long enough for the loaf’s expansion to express itself through the score you planned. Without steam, even a thin crust can polymerize (lock into its final, rigid form) while the crumb inside is still actively moving—exactly the classic situation where the loaf bursts wherever it can. Home ovens lose steam fast, so a lidded baking vessel (like a Dutch oven), a tray of lava rocks with boiling water poured on at loading, or repeated misting in the first minutes can all buy you the same effect a commercial steam-injected deck oven provides.",
        "Sugar, milk, and other enrichments make a crust brown faster, which can accelerate when the crust sets compared with a lean dough. If you only get side blowouts on enriched loaves, compare your steam and temperature setup against the lean dough you bake successfully.",
        "Too much top heat—from a broiler element or a rack that is set too high—can set a roof on the loaf while the lower crumb is still its hottest and most active, which pushes that stress sideways and down. Dropping the rack one notch is a surprisingly effective experiment if you cannot figure out where the heat is biased.",
      ],
    },
    {
      heading: "How Fix My Recipe helps",
      paragraphs: [
        "Bread mode in SenseiFood highlights hydration, enrichment, and ratio bands that interact with how the loaf proofs and how the oven behaves. Side splits are rarely a problem of having chosen the wrong flour—they are almost always a combination of process and geometry: how you shaped, how you scored, and what your oven did in the first eight minutes.",
        "For three bakes in a row, log the proof volume, the dough temperature when you shaped, a photo of your score, and your oven setup (Dutch oven? steam pan? rack position?). Patterns jump out of those logs much faster than out of memory, especially as the seasons change and your kitchen warms up or cools down enough to shift fermentation speed.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is a side split always a bad thing?",
      a: "Not aesthetically, if you like a rustic look. But a side split often goes hand-in-hand with uneven crumb right next to the tear, so for sandwich loaves where slices need to look consistent, you really do want a controlled bloom on the top of the loaf instead."
    },
    {
      q: "My sourdough keeps blowing out on the same side every time—why?",
      a: "Check where the seam from shaping ends up sitting in the oven, and whether the imprint from your banneton (the basket the dough proofs in) is leaving one face thinner than the other. Also double-check that you are not loading the loaf upside-down relative to where you actually scored it.",
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
