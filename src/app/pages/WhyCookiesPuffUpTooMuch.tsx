import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-cookies-puff-up-too-much",
  segment: "cookie-science",
  categoryLabel: "Cookie Science",
  title: "Why Cookies Puff Up Too Much",
  subtitle:
    "Domed cookies usually mean steam and gas expanded faster than the dough could flow outward—too much leavening, over-aerated butter, a hot oven skinning the top, or a wet dough that carries extra steam per bite.",
  readTime: "8 min read",
  emoji: "🎈",
  fixRecipe: {
    category: "cookie",
    problem: "rise-then-fall",
  },
  quickAnswer:
    "Cookies puff when CO₂, air from creaming, and steam from butter, eggs, and milk expand faster than the matrix can relax sideways. Usual suspects: a heavy hand on baking powder or soda, warm over-creamed butter holding extra air, flour measured light so structure is weak, or an oven that sets a top skin before spread starts. Weigh ingredients, chill if the dough is warm, and check leavening against the flour mass before you blame the chocolate chips.",
  intro:
    "A cookie that domes like a muffin top is still the same physics story as a flat spreader: set timing versus flow. Puffing is not your mixer being dramatic; it is internal pressure winning over sideways relaxation. This guide separates steam pressure, chemical gas, mechanical air from creaming, and structural set so you can change one lever at a time. Home bakers often chase one ingredient when the headline is really a timeline: for a minute in the oven, the dough behaves like a foam before it behaves like a cookie.",
  sections: [
    {
      heading: "Steam pressure and early crust set",
      paragraphs: [
        "Water in butter, eggs, and any milk turns to steam once the dough crosses boiling territory at wet spots, and that steam does real mechanical work inside a soft matrix—think tiny balloons inflating. If the outside sets fast—hot oven, dark pan, convection blasting the surface, or a sugar-heavy formula that skins early—you get a shell while the center is still fluid, so the next expansion goes up instead of out, like a baby soufflé with chocolate chips.",
        "Sugar browning and protein set stiffen the outer network, which is lovely until it happens too fast; then you have sealed balloon behavior instead of gradual spread. Dropping the oven a notch, using a lighter pan, or moving away from aggressive top heat buys a few extra seconds of flow that matter more than they sound.",
        "Wetter dough carries more potential steam per gram, which is not an argument for dehydrating your recipe—just a reminder to pair hydration with enough flour strength and a bake profile that browns evenly instead of flash-sealing random craters.",
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
        "Baking soda and baking powder are not interchangeable personalities: soda reacts with acid right away and again with heat; double-acting powder gives you an early puff from liquid contact and a second puff from oven heat. When leavening is high for the amount of flour—or the acid partner for soda is missing in action—you get a rapid gas spike while the batter is still liquid enough to balloon vertically, then sometimes collapse into a cakey middle.",
        "Old baking soda in a humid kitchen turns into a lottery ticket; too much baking powder adds dry alkalinity that can taste soapy and still dome the cookie. If the flavor whispers \"cleaning supplies,\" weigh leavening in grams for your brand instead of trusting dusty teaspoons.",
        "Soda needs real acidity—brown sugar is not always enough by itself depending on the rest of the formula. If acid is shy, reaction timing goes weird and you can get odd vertical lift. Before you rewrite the cookie from scratch, compare against a trusted baseline with similar fat and sugar style.",
      ],
    },
    {
      heading: "Creaming, aeration, and cakey structure",
      paragraphs: [
        "Creaming traps air in the fat phase; heat expands that air like any gas. Warm butter creams fast and fluffy, which feels efficient, but it is easy to over-aerate drop cookies that also carry chemical leaveners—now you have two air sources racing the clock. The crumb can bake like a mini cake: tall, tender, sometimes oddly dry after cooling.",
        "Extra liquid without matching flour (more egg white, a splash of milk) or very low protein flour in a butter-heavy formula pushes the system toward cake rules—starch and egg set can dominate before spread finishes. Chilling firms fat, slows the early gas burst a touch, and often reduces doming without moralizing about your mixing skills.",
        "Mixer speed is sneaky: sixty seconds on high can beat more air than a vintage recipe assumed. If puffing began the week you got a stronger machine, end creaming earlier or fold the last of the flour by hand to knock down excess bubbles—gentle structure, less balloon.",
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
        "SenseiFood’s cookie mode lines your butter, sugar, flour, egg, and leavening bands up against common successful neighborhoods. That matters when puffing is really a ratio symptom—too much leavening for the flour mass, or butter running the show without enough structural partners.",
        "Bake the next tray like a deliberate experiment: change oven temperature, leavening grams, or chill time—not all three. A top-down photo plus a quick cross-section tells you whether you are looking at trapped gas under a glossy dome versus a simple thickness issue numbers alone will not narrate.",
      ],
    },
  ],
  faqs: [
    {
      q: "My cookies puff then fall flat—different fix?",
      a: "Yes—that is often structure collapsing after a big rise. Look at leavening load, under-baking, or weak protein set; the related rise-then-fall article is basically a checklist for that plot twist.",
    },
    {
      q: "Do altitude adjustments cause puffing?",
      a: "Lower air pressure lets bubbles expand more enthusiastically, so high altitude can absolutely read as extra puff. Trim leavening a little and/or bump flour a few percent under good guidance, then retest instead of guessing wildly.",
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
