import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-puff-instead-of-spread",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Puff Instead of Spread",
  "subtitle": "Cold fat, high flour, strong leavening, and short bake set a dome before flow.",
  "readTime": "7 min read",
  "level": "Spread mechanics",
  "emoji": "☁️",
  "fixRecipe": {
    "category": "cookie",
    "problem": "wont-spread"
  },
  "quickAnswer": "Puff without spread means structure set before viscous flow—cold butter, strong flour, too much baking powder or soda, or an oven that sets the top skin before the dough can flow outward. Warm dough slightly, reduce leavening, or de-gas slightly before baking if the recipe tolerates it. Spread needs time above the fat’s flow temperature while the matrix is still extensible.",
  "intro": "Cookie spread is not guaranteed; it is the outcome of competing rates. Fat must melt and lubricate sugar and flour enough that the mass can flow across the pan. Proteins and gelatinizing starch must not lock a dome before that flow happens. Leavening gas—creamed air, steam, and chemical CO₂—must either escape outward as spread or expand upward as puff depending on viscosity and surface set. When butter stays cold too long, flour is high relative to fat, or chemical leavening peaks after a fast-forming crust, you get tall mounds with minimal footprint. Oven heat matters because radiant top heat can set a skin that traps expanding gases like a small cake, especially on dark pans that pump energy into bottoms unevenly. Fixing puff-without-spread is about aligning temperature, formula balance, and bake profile so flow wins the race for your target cookie.",
  "sections": [
    {
      "heading": "Starting dough temperature and plasticity",
      "paragraphs": [
        "Chilling controls spread in many recipes, but excessive cold can overshoot: the dough enters the oven as discrete cold pellets, outer surfaces set while interiors remain rigid, and spread never links into a disk. Letting scoops temper slightly at room temperature—without melting butter—often restores predictable spread.",
        "Very firm fat also reduces early surface sheen that helps cookies begin flowing; if your room is cold, even “room temperature” butter may be firmer than the recipe author’s kitchen."
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
        "Extra flour—whether from scoop packing or added bench flour—raises structural modulus, resisting outward flow. Strong bread flour can increase elastic snap compared to all-purpose, sometimes yielding taller, less spread-forward cookies unless balanced with fat and invert sugar.",
        "Invert sugar from corn syrup, honey, or molasses increases flow and browning; white sugar–heavy doughs can be crisper and more expansion-dependent on creamed air."
      ],
      "tip": "If spread vanished after a flour brand change, test by weight and consider protein content before changing oven temperature."
    },
    {
      "heading": "Leavening sequence and creaming air",
      "paragraphs": [
        "Double-acting baking powder releases early and late; a late burst after a top crust forms can dome the cookie like a mini-cake. Baking soda needs acid balance; mis-titration changes spread and color unpredictably.",
        "Over-creaming incorporates excess air that expands before melt-flow links the dough into a sheet, producing puffy rounds. Match creaming time to the recipe’s fat and sugar style."
      ]
    },
    {
      "heading": "Oven heat, pans, and top skin formation",
      "paragraphs": [
        "Dark metal and high rack positions increase radiant heat to tops and bottoms, accelerating crust set. If tops skin before edges relax outward, you lock a dome. Lighter pans, middle racks, or slightly lower temperature extend the flow window.",
        "Convection can set surfaces faster; try reducing convection fan speed or temperature when puff replaces spread in fan modes."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Will more butter always increase spread?",
      "a": "Usually, but only if butter can melt and flow in time. Adding fat without adjusting flour or oven can yield greasy puddles or still-tall cookies if structural balance goes wrong. Change one variable at a time."
    },
    {
      "q": "Why did my cookies spread before but not after chilling longer?",
      "a": "Long chill firms fat and fully hydrates flour, changing viscosity and sometimes leavening availability. Temper scoops slightly longer before baking or adjust bake temperature to compensate."
    },
    {
      "q": "Are puffy cookies underbaked?",
      "a": "Not necessarily—puff can be structural from air and set crust. Check internal texture: if centers are doughy, bake longer or lower; if centers are cakey and dry, you baked through but trapped expansion—process issue, not raw dough."
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
