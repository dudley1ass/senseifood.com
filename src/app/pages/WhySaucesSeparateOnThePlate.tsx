import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-separate-on-the-plate",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Separate on the Plate (Holding Failure)",
  "subtitle": "Carry time, plate heat, and oil-water relaxation undo what the pan achieved.",
  "readTime": "8 min read",
  "level": "Holding & plating",
  "emoji": "🍽️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Separation on the plate is usually broken emulsion plus low sheer stress: sauce sits, fat rises, water sinks. Thicken slightly, mount with cold butter at pickup, and sauce closer to pass.",
  "intro": "A sauce can leave the pan glossy and arrive at the table broken because plating is a second stress test. Shear drops to nearly zero on the plate; gravity has minutes to work. Warm protein drives heat into the sauce film, changing fat mobility. Thin emulsions that survived vigorous whisking may still bleed oil under static hold. Long walks from kitchen to dining room extend time for droplets to coalesce. This article covers time under gravity, plate and food temperature effects, expo timing and last-second mounting, and viscosity choices that buy holding time without turning the sauce pasty.",
  "sections": [
    {
      "heading": "Time under gravity and low shear",
      "paragraphs": [
        "Emulsions are kinetic traps, not permanent suspensions. When whisking stops and the sauce pools, droplets can cream upward and aqueous phases can synerese downward. Even competent emulsions fail on the plate if viscosity is too low for the hold window you need.",
        "A touch more reduction, a restrained starch slurry, or slightly higher solids from longer simmer increases continuous-phase viscosity and slows oil breakout—without necessarily changing flavor if you balance acid at the end."
      ],
      "bullets": [
        {
          "title": "Hold test",
          "text": "Before service, let a spoon of sauce sit in a ramekin as long as your longest ticket time; if it bleeds, the pass will too."
        },
        {
          "title": "Shear on pickup",
          "text": "Whisking or blending refreshes droplet size temporarily; plan pickup after that refresh, not ten minutes later."
        }
      ]
    },
    {
      "heading": "Plate temperature and thermal shock",
      "paragraphs": [
        "Scorching plates can flash-separate fat at the contact line; ice-cold plates can set fat into beads before the sauce flows. Aim for warm, not pizza-stone hot—especially for butter-finished emulsions.",
        "Moisture on plates from stacking or steam also dilutes the film and encourages puddling at edges. Dry plates and consistent stacking temperature reduce surprise breaks."
      ]
    },
    {
      "heading": "Pick-up timing and last-moment mounting",
      "paragraphs": [
        "Sauce last is classic for a reason: every second on hot protein is time for fat to mobilize and water to migrate. At the window, a cold butter mount or a splash of hot stock under whisk can restore sheen if the base emulsion is still fundamentally sound.",
        "If expo holds sauced plates under a heat lamp, you add another dehydration and fat-migration cycle. Train pickup so saucing happens after proteins are positioned unless the sauce is built to tolerate heat."
      ],
      "tip": "For finicky beurre montés, calculate pickup so the sauce never sits sauced longer than your test ramekin tolerated."
    },
    {
      "heading": "When the emulsion was never truly stable",
      "paragraphs": [
        "Sometimes the plate only reveals a problem born in the pan: insufficient lecithin from mustard or egg, fat added too fast, or broken stock glue. If separation is immediate even on a neutral plate, fix process upstream. If separation appears only after several minutes beside hot food, prioritize viscosity and temperature path.",
        "Non-emulsion sauces can still oil out if fat was not fully integrated into a colloidal or thickened matrix—plate behavior helps you classify which failure mode you have."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a little oil rim on the plate always failure?",
      "a": "Not always—some styles weep slightly. The issue is guest perception and whether the sauce broke entirely into distinct phases."
    },
    {
      "q": "Does a thicker sauce always fix it?",
      "a": "Thicker helps hold, but over-thickened sauces can gel or taste starchy; adjust with small increments and acid finish."
    },
    {
      "q": "Why does it hold in a squeeze bottle but not on the plate?",
      "a": "Bottles keep shear and cooling different from a static pool; test under realistic plating geometry."
    }
  ],
  "related": [
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    },
    {
      "title": "One-Change Rule for Sauce Debugging",
      "path": "/sauce-science/one-change-rule-sauce-debugging"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesSeparateOnThePlate() {
  return <ScienceArticlePage spec={SPEC} />;
}
