import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-puff-instead-of-spread",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Puff Instead of Spread",
  "subtitle": "Tall mounds with tiny footprints usually mean the cookie set like a little cake before butter could melt, flow, and fuse into a wider disk—cold fat, strong structure, bold leavening, and hot-top skin formation are the usual cast.",
  "readTime": "7 min read",
  "level": "Spread mechanics",
  "emoji": "☁️",
  "fixRecipe": {
    "category": "cookie",
    "problem": "wont-spread"
  },
  "quickAnswer": "Puff without spread is a race you lost on timing: structure locked before the dough could relax outward. Cold butter, extra flour (packed cups count), a heavy hand on baking powder or soda, or an oven that skins the top before the middle softens all push \"up\" instead of \"out.\" Let scoops temper slightly, trim leavening to the recipe’s flour mass, and adjust heat or pan so flow gets a fair head start.",
  "intro": "Spread is not a promise; it is the outcome of a kitchen race. Fat has to melt enough to lubricate sugar and flour so the mass can flow; proteins and gelatinizing starch cannot lock a dome before that happens. Leavening gas—air from creaming, steam from water, CO₂ from chemical leaveners—either escapes outward as spread or expands upward as puff, depending on how viscous the dough is and how fast the surface sets. When butter stays cold too long, flour is high relative to fat, or chemical leavening peaks after a fast-forming crust, you get adorable little domes with tiny footprints. Dark pans and aggressive top heat can set a skin that traps gas like a mini soufflé. Fixing puff-without-spread is about lining up temperature, formula balance, and bake profile so outward flow wins the race you actually want.",
  "sections": [
    {
      "heading": "Starting dough temperature and plasticity",
      "paragraphs": [
        "Chilling is a spread dial for many recipes, but over-chilled dough can overshoot: you put cold pebbles in the oven, the outside sets while the inside is still stiff, and the cookies never marry into a sheet. Letting scoops temper slightly—without melting the butter—often restores predictable spread.",
        "In a cold kitchen, \"room temperature\" butter can still be firmer than the recipe author’s kitchen, which changes creaming, hydration, and how quickly the dough starts to move."
      ],
      "bullets": [
        {
          "title": "Measure cold vs recipe intent",
          "text": "Compare your dough firmness to photos or past successful batches; environmental variance is real."
        },
        {
          "title": "Smash test",
          "text": "For recipes that want thin disks, a fork-press or palm flatten preprograms spread geometry before the oven."
        }
      ]
    },
    {
      "heading": "Flour strength, hydration, and sugar type",
      "paragraphs": [
        "Extra flour—whether from packed cups or heavy bench flour—raises structure and resists outward flow. Bread flour’s higher protein can add elastic snap compared with all-purpose, sometimes yielding taller, less spread-forward cookies unless you balance with fat and invert sugar. Corn syrup, honey, or molasses add invert sugar chemistry that encourages flow and browning; white-sugar-heavy doughs can ride more on trapped air and set faster into puffy rounds.",
      ],
      "tip": "If spread vanished after a flour brand change, test by weight and consider protein content before changing oven temperature."
    },
    {
      "heading": "Leavening sequence and creaming air",
      "paragraphs": [
        "Double-acting baking powder puffs early from liquid contact and again from heat; a late burst after a crust forms can dome the cookie like a cupcake top. Baking soda needs acid partners; mismatch the acid and the timing goes weird, changing both spread and color in ways that feel random. Over-creaming traps extra air that expands before melt-flow links the dough into a disk, producing puffy rounds. Match creaming intensity to the recipe’s fat and sugar style instead of always chasing maximum fluff.",
      ]
    },
    {
      "heading": "Debug spread deliberately",
      "paragraphs": [
        "If the sheet story is \"no spread\" one week and \"puddles\" the next, you want a debugger habit, not superstition. Cookie mode in Fix My Recipe is useful for checking sugar-and-butter-heavy ratios against typical bands—but on the pan, change one thing at a time: a few grams of flour, a shorter chill, a slightly cooler oven, or a lighter pan. Photograph the tray at the same minute mark for two batches and let your eyes argue with your memory."
      ]
    },
    {
      "heading": "Oven heat, pans, and top skin formation",
      "paragraphs": [
        "Dark metal and high racks throw more radiant heat at tops and bottoms, accelerating crust set. If the top skins before the edges relax outward, you lock a dome. Lighter pans, middle racks, or a slightly lower temperature extend the flow window. Convection can set surfaces faster; if puff replaces spread only in fan mode, try gentler fan or a touch less temperature so the cookie gets seconds of slack.",
      ]
    }
  ],
  "faqs": [
    {
      "q": "Will more butter always increase spread?",
      "a": "Usually more fat helps spread, but only if it can melt and flow in time. Dumping in butter without adjusting flour or oven heat can land you in greasy puddles—or still-tall cookies if structure went lopsided. Change one variable, taste-test, then decide the next move."
    },
    {
      "q": "Why did my cookies spread before but not after chilling longer?",
      "a": "Longer chill firms butter and finishes flour hydration, which changes viscosity and sometimes how leavening releases. Let scoops sit a few extra minutes before baking, or adjust oven temperature slightly so the exterior does not set while the center is still a cold rock—your notes from the last good batch are the cheat sheet."
    },
    {
      "q": "Are puffy cookies underbaked?",
      "a": "Not necessarily. Puff can be structural—trapped air and a quick skin—while the center is still tender or even dry-cakey. Poke and look: raw dough means more bake or gentler heat; cakey dryness with a tall dome is often process and timing, not \"underbaked.\""
    }
  ],
  "related": [
    {
      "title": "Why Cookies Don't Spread",
      "path": "/cookie-science/why-cookies-dont-spread"
    },
    {
      "title": "Why Cookies Spread in the Oven But Not Before",
      "path": "/cookie-science/why-cookies-spread-in-oven-but-not-before"
    },
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    }
  ]
};

export default function WhyCookiesPuffInsteadOfSpread() {
  return <ScienceArticlePage spec={SPEC} />;
}
