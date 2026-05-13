import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-spread-in-oven-but-not-before",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Spread in the Oven But Not Before",
  "subtitle": "Room-temperature scoops can look stubborn while butter is still mostly solid fat crystals; the oven is where those crystals melt, sugar dissolves faster, and the dough finally slacks enough to flow.",
  "readTime": "7 min read",
  "emoji": "🧊➡️🔥",
  "fixRecipe": {
    "category": "cookie",
    "problem": "spreads-too-much"
  },
  "quickAnswer": "Cold dough holds its shape because fat is still crystalized and the flour matrix has not fully relaxed—so you see little movement on the sheet. Heat melts butter, frees water that was tied up in the emulsion, and lets sugar pull viscosity down; suddenly spread happens late, all at once. A rest in the fridge also keeps hydrating flour, which changes how fast the cookie sets once heat arrives.",
  "intro": "This pattern breaks beginner intuition because we want dough to \"look right\" before it goes in the oven. Cookies are small heat engines: the same scoop can be stiff at 65°F (18°C) and soupy at 95°F (35°C) because butter crosses a softening range long before it fully liquefies. Spread needs fat to mobilize enough to lubricate sugar and flour, and it needs the protein-starch network not to lock too early. Sugar dissolving into available water also lowers resistance to flow—so chemistry and temperature are holding hands the whole time. Seeing no spread on the counter does not promise no spread in the oven; it usually means you have not crossed the melt-and-slack threshold yet.",
  "sections": [
    {
      "heading": "Fat phase change",
      "paragraphs": [
        "Butter is not a single thing in the dough; it is fat crystals sitting in a water-in-fat emulsion with some free water hiding in the system. Cold keeps crystals firm, so the dough behaves like a paste you can stack. As the cookie warms, crystals melt, fat becomes more mobile, and the whole matrix can flow across the pan. That is why spread can look like an oven-only event: your eyes on the counter were watching the wrong phase of butter’s personality."
      ]
    },
    {
      "heading": "Hydration kinetics",
      "paragraphs": [
        "Flour keeps drinking water during a chill—even when the dough looks \"done mixing.\" That slow hydration changes how quickly the cookie sets versus how far it can move while it is still flexible. A dough that felt stiff at mix time can spread more than you expect later, not because you imagined it, but because starch and protein had more time to take up water and soften the crumb mechanics."
      ]
    },
    {
      "heading": "Leavening timing",
      "paragraphs": [
        "Baking soda reacts with acid and heat; baking powder brings timed CO₂ releases depending on whether it is single- or double-acting. When chemical leavening puffs as the batter softens from melting fat, lift and lateral flow can show up together—your eye reads it as \"it only spread in the oven\" because that is when gas pressure and lowered viscosity lined up. If spread suddenly changed after you swapped leavening brands or acid sources, suspect timing and reaction rate before you blame humidity ghosts."
      ]
    },
    {
      "heading": "Debug spread deliberately",
      "paragraphs": [
        "If oven spread overshoots—one big amoeba instead of discrete cookies—cookie mode in Fix My Recipe is a good ratio sanity check for sugar-and-butter-heavy formulas. On the pan, still change one thing: a few extra grams of flour, a shorter chill, a slightly cooler oven, or a lighter pan. Take the same photo at the same minute mark twice; your camera is less nostalgic than your brain."
      ]
    },
    {
      "heading": "Oven heat transfer",
      "paragraphs": [
        "Edge cookies see hotter metal and more air contact first, so differential spread on one tray is normal, not a personal insult from the universe. Insulated and dark pans change how fast bottoms melt and set; sugar type changes how early dissolved sugar helps the dough slack—brown sugar’s invert sugar and extra moisture often encourage earlier flow than white sugar alone.",
        "Rotating the sheet halfway is not fussy theater; it is acknowledging that most home ovens have personalities. If one corner always races, that is data you can bake around."
      ]
    },
    {
      "heading": "What to tweak first when spread surprises you",
      "paragraphs": [
        "Most drop cookies bake happily somewhere in the wide neighborhood people call \"moderate\" oven heat—often discussed around 325–375°F (163–190°C) depending on thickness, sugar, and how much color you want. Lower temperatures generally extend the spread window before the top skins; higher temperatures set edges faster. Chilling near refrigerator temperature (about 38°F / 3°C) slows early fat flow if you need less spread, while warmer dough and softer butter increase pre-oven movement—both are tools, not sins.",
        "If you are fighting spread, write one line per batch: dough temperature going in, pan type, rack height, and set temperature. You are not building a compliance binder—just enough breadcrumbs to connect \"Tuesday’s puddle\" to \"Tuesday was 10°F hotter\" or \"Tuesday was dark pan day.\"",
        "SenseiFood’s Fix My Recipe debugger is built to pair those observations with ratio checks so the next bake is a step, not a dice roll."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "Why Chilling Cookie Dough Matters",
      "path": "/cookie-science/why-chilling-cookie-dough-matters"
    }
  ],
  "faqs": [
    {
      "q": "What changes if my butter is truly room temperature?",
      "a": "Softer butter means more fat has already mobilized before the oven, so you often see more pre-spread on the sheet and sometimes faster merging in the heat—not automatically bad, just a different timing story than chilled dough."
    },
    {
      "q": "Why does frozen dough sometimes spread less early?",
      "a": "Cold delays fat melting and keeps viscosity high, so a lot of the action waits until the oven thaws the interior. You can get a narrower spread window and thicker cookies depending on scoop size and bake temperature—again, timing, not magic."
    }
  ]
};

export default function WhyCookiesSpreadInOvenButNotBefore() {
  return <ScienceArticlePage spec={SPEC} />;
}
