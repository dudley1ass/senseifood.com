import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-separate-on-the-plate",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Separate on the Plate (Holding Failure)",
  "subtitle": "The walk from the stove to the table, the temperature of the plate, and the slow physics of oil and water relaxing back apart all undo what your whisk just did.",
  "readTime": "8 min read",
  "level": "Holding & plating",
  "emoji": "🍽️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "A sauce that separates on the plate is usually a broken emulsion plus the fact that, once the sauce stops moving, fat rises and water sinks. The fix is to thicken the sauce slightly so it has more body, mount it with cold butter right at pickup to refresh the emulsion at the last possible moment, and sauce closer to when the plate leaves the pass—every minute it sits is time for separation to happen.",
  "intro": "A sauce can leave the pan looking glossy and arrive at the table broken, because plating is essentially a second stress test for whatever you built in the pan. The shearing force from your whisk drops to almost zero the moment the sauce hits the plate, and from there gravity has minutes to work on it. A warm piece of protein next to the sauce drives heat into the sauce film, which changes how mobile the fat is. Thin emulsions that survived vigorous whisking can still bleed oil under a static hold, just more slowly. A long walk from the kitchen to the dining room extends the time available for the tiny fat droplets to find each other and merge. This article covers time under gravity, plate and food temperature effects, expo (the pass-window) timing and last-second mounting, and viscosity choices that buy you holding time without turning the sauce pasty.",
  "sections": [
    {
      "heading": "Time under gravity and low shear",
      "paragraphs": [
        "Emulsions are what physicists call kinetic traps, not permanent suspensions—they're stable as long as you keep them moving or as long as their viscosity is high enough to slow down the natural urge of oil and water to part ways. When the whisking stops and the sauce settles into a pool on the plate, droplets can cream upward (rise) while the watery phase synereses downward (the technical term for liquid weeping out of a gel). Even a well-built emulsion will fail on the plate if its viscosity is just too low for the hold window you actually need. A touch more reduction, a restrained starch slurry, or slightly higher solids from a longer simmer all raise the viscosity of the continuous phase and slow down oil breakout—without necessarily changing the flavor much if you balance the acid at the end."
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
        "A scorching-hot plate can flash-separate the fat right at the line where the sauce meets the porcelain, while an ice-cold plate sets the fat into beads before the sauce has a chance to flow into an even film. Aim for warm—roughly the temperature of a cup of hot coffee—not pizza-stone hot, especially when you're working with butter-finished emulsions. Moisture on the plate from stacking or steam also dilutes the sauce film and encourages puddling at the edges as the watery phase migrates away from the fat. Dry plates kept at a consistent temperature in your stack reduce the surprise breaks that come from one cold or wet plate in the middle of service."
      ]
    },
    {
      "heading": "Pick-up timing and last-moment mounting",
      "paragraphs": [
        "Saucing last is classic kitchen advice for a reason: every second the sauce sits on hot protein is time for the fat to mobilize and the water to migrate out from under it. At the pass window, a cold butter mount or a small splash of hot stock added under the whisk can refresh the sheen if the underlying emulsion is still fundamentally sound. If expo holds sauced plates under a heat lamp before service, that's another dehydration and fat-migration cycle stacked on top of everything else. Train the line so saucing happens after proteins are positioned on the plate, unless the sauce is specifically built to tolerate the heat (a tomato-based or stable brown sauce can handle a lot more abuse than a beurre blanc)."
      ],
      "tip": "For finicky beurre montés, calculate pickup so the sauce never sits sauced longer than your test ramekin tolerated."
    },
    {
      "heading": "When the emulsion was never truly stable",
      "paragraphs": [
        "Sometimes the plate is only revealing a problem that was born back in the pan: not enough lecithin from mustard or egg yolk, fat added too fast before the previous addition was incorporated, or a broken stock that wasn't holding together to begin with. If the separation is immediate even on a clean, neutral plate, fix the process upstream before you blame plating. If the separation only appears after several minutes sitting next to hot food, prioritize viscosity and the temperature path of the sauce from stove to table.",
        "Non-emulsion sauces (a tomato sauce, a fruit purée, a pan jus) can still oil out if the fat wasn't fully integrated into a colloidal or properly thickened matrix during cooking. How the sauce behaves on the plate is genuinely diagnostic—immediate separation is one problem, slow weeping over five minutes is another."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a little oil rim on the plate always a failure?",
      "a": "Not always—some styles weep slightly on purpose, like a Mediterranean tomato sauce where a glossy ring of olive oil is part of the visual signature. The real issue is guest perception (does it look like a mistake?) and whether the sauce has broken entirely into visibly distinct phases or is just expressing a thin border of fat as designed."
    },
    {
      "q": "Does making the sauce thicker always fix separation?",
      "a": "A thicker sauce does hold longer because the higher viscosity slows down both droplet merging and gravity-driven separation, but over-thickening creates its own problems: the sauce can gel up, taste starchy, or feel pasty in the mouth. Adjust in small increments—a teaspoon of slurry at a time—and finish with a touch of acid to keep the brightness alive."
    },
    {
      "q": "Why does my sauce hold beautifully in a squeeze bottle but break on the plate?",
      "a": "Inside a closed bottle the sauce stays cooler, isn't exposed to the air much, and gets gentle shear every time you squeeze. None of that is true in a static pool on a warm plate. Test under realistic plating geometry—same plate temperature, same surface area, same sit time—rather than trusting how the sauce looks in storage."
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
