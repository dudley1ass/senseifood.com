import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-cookies-puff-up-too-much",
  segment: "cookie-science",
  categoryLabel: "Cookie Science",
  title: "Why Cookies Puff Up Too Much",
  subtitle:
    "Ballooned cookies usually mean trapped steam, aggressive leavening, or a dough that sets like cake before it can spread—here is how to tell which story is yours.",
  readTime: "8 min read",
  emoji: "🎈",
  fixRecipe: {
    category: "cookie",
    problem: "rise-then-fall",
  },
  quickAnswer:
    "Cookies puff when gas and steam expand faster than the dough can flow outward. Common drivers are too much chemical leavening, warm over-creamed butter that holds excess air, under-hydrated flour, or a hot oven that skins the surface before spread starts. Weigh ingredients, chill if the dough is warm, and verify leavening against the recipe's flour mass.",
  intro:
    "A cookie that domes like a muffin top can feel unrelated to spread problems, but in the oven it is the same physics race: set timing versus flow. Puffing is not a moral failure of your mixer; it is a signal that internal pressure is winning over lateral relaxation. This guide separates vapor pressure, chemical gas, mechanical air from creaming, and structural set so you can change one lever at a time instead of guessing. Home bakers often chase one ingredient when the real issue is a timeline: the cookie briefly behaves like a foam before it behaves like a sheet.",
  sections: [
    {
      heading: "Steam pressure and early crust set",
      paragraphs: [
        "Water in butter, eggs, and any milk turns to steam above 212°F and does real mechanical work inside a soft matrix. If the outer cookie sets quickly—hot oven, dark pan, convection blast, or very high sugar—the surface forms a shell while the center is still fluid. The next burst of expansion has nowhere to go but up, so the cookie lifts like a small soufflé.",
        "Sugar and protein browning also stiffen the outer network. That is desirable for chew and color, but an overly fast set turns the cookie into a sealed balloon. Lowering the oven slightly, baking on a lighter pan, or pulling the rack away from the top element buys seconds of flow that change thickness more than intuition suggests.",
        "Humidity in the dough matters too: wetter doughs carry more latent steam per gram. That does not mean you should starve hydration; it means you should pair hydration with enough flour strength and enough time for the surface to dry evenly rather than flash-seal in spots.",
      ],
      bullets: [
        {
          title: "Convection and fan",
          text: "Moving air sets edges first; drop temp or shorten fan time if centers dome while edges fry.",
        },
        {
          title: "Small batch on a big pan",
          text: "Isolated dough balls heat from all sides at once, which can skin faster than a full sheet.",
        },
      ],
      tip: "Try one sheet with −25°F and +1–2 minutes; compare spread and height side by side with your usual profile.",
    },
    {
      heading: "Leavening load versus flour strength",
      paragraphs: [
        "Baking soda and baking powder release CO₂ on their own schedules: soda reacts with acid immediately and again with heat; double-acting powder puffs early and late. When leavening is high relative to flour and acid balance is off, you get a rapid gas spike inside a batter that is still liquid enough to expand volumetrically—classic puff before collapse or a cakey crumb.",
        "Old soda in a humid can loses predictability; a heavy hand with powder adds dry alkalinity that can also blunt flavor and encourage tall, tender crumb. If your cookies puff and taste soapy or metallic, suspect leavening first and convert to grams using the label's density for your brand.",
        "Acid matters for soda: if a recipe leans on baking soda but the dough is not actually acidic enough, you can get uneven reaction timing and odd vertical lift. When in doubt, compare against a trusted baseline formula with similar fat and sugar style before rewriting the whole cookie.",
      ],
    },
    {
      heading: "Creaming, aeration, and cakey structure",
      paragraphs: [
        "Creaming traps air in fat crystals; that air expands with heat. Warm butter creams fluffy fast, which feels productive, but it often over-aerates drop cookies that also carry chemical leaveners. You can end up with a foamy interior that bakes like a mini cake: tall, soft, sometimes dry after cooling.",
        "High liquid relative to flour (extra egg white, splash of milk) or low protein flour in a butter-heavy formula pushes the system toward cake mechanics—starch gelatinization and egg set dominate before spread finishes. Chilling firms fat, slows gas release slightly, and lets edges melt later, which usually reduces doming.",
        "Mixer speed hides information: a minute at high speed can incorporate more air than a recipe written for hand mixing assumes. If puffing started when you upgraded appliances, end creaming earlier or finish folding dry ingredients by hand to knock down excess bubbles.",
      ],
      bullets: [
        {
          title: "Mix to the recipe's intent",
          text: "If the author assumes light and fluffy creaming, follow it; if cookies puff, try ending creaming earlier or using cooler butter.",
        },
        {
          title: "Check flour by weight",
          text: "Packed cups increase structure and dryness; scooped light cups under-flour and can look puffy-then-oily.",
        },
      ],
    },
    {
      heading: "How Fix My Recipe helps",
      paragraphs: [
        "SenseiFood's cookie mode compares your butter, sugar, flour, egg, and leavening bands to common successful profiles. That is useful when puffing is really a ratio symptom—too much leavening for the flour mass, or butter outrunning eggs for structure.",
        "Treat the next bake as a single-variable test: oven temperature, leavening grams, or chill time. Photograph top view and cross-section; puffy cookies often reveal a tight crumb under a glossy dome that a spreadsheet alone will not explain.",
      ],
    },
  ],
  faqs: [
    {
      q: "My cookies puff then fall flat—different fix?",
      a: "Yes: that pattern points to structure failing after the rise. Look at leavening, under-bake, or weak protein set; see the related article on rise-then-fall for a focused checklist.",
    },
    {
      q: "Do altitude adjustments cause puffing?",
      a: "They can: lower air pressure lets bubbles expand more. Reduce leavening slightly and/or increase flour a few percent under guidance, then retest.",
    },
  ],
  related: [
    { title: "Why Cookies Rise Then Fall", path: "/cookie-science/why-cookies-rise-then-fall" },
    { title: "Why Cookies Turn Cakey", path: "/cookie-science/why-cookies-turn-cakey" },
  ],
};

export default function WhyCookiesPuffUpTooMuch() {
  return <ScienceArticlePage spec={SPEC} />;
}
