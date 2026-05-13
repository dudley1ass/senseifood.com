import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-develops-ice-layers-over-time",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Develops Ice Layers Over Time",
  "subtitle": "Frosty sheets and crusty lids show up when the pint warms a little and refreezes—water vapor migrates to the coldest surface and plates out as extra ice.",
  "readTime": "8 min read",
  "level": "Storage degradation",
  "emoji": "❄️",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "icy"
  },
  "quickAnswer": "Ice layers mean temperature danced: a warm edge refroze while moisture moved to the coldest wall or lid. Press parchment to the surface, minimize headspace, keep the freezer steady, and avoid softening half the pint with a microwave habit unless you like icy rings.",
  "intro": "Ice cream is an uneasy peace between ice, air, fat, and syrup; temperature wobble—even a few degrees—lets water relocate and refreeze as ugly sheets on the lid or sides. Headspace acts like a tiny weather system: more air means more exchange and frosting. Stabilizers buy time but do not repeal thermodynamics. This article names the household habits that cause layers so you can fix the freezer story, not blame vanilla quality.",
  "sections": [
    {
      "heading": "Temperature cycling in plain language",
      "paragraphs": [
        "Each time the pint warms past micro-melting at some crystal surfaces and refreezes, water reorganizes toward larger crystals and colder zones. Repeated small swings hurt more than one deep chill if the average temperature drifts upward. A steadier cold band generally beats a thermostat that oscillates widely around setpoint.",
        "Door openings, frost-free auto-defrost cycles, and putting warm items beside the pint all import heat flux. Locating ice cream away from the door and away from the auto-defrost path reduces cycling stress."
      ],
      "bullets": [
        {
          "title": "Thermometer in freezer",
          "text": "If you troubleshoot seriously, measure air temperature over a day; perceived cold is not numeric."
        },
        {
          "title": "Transport",
          "text": "Insulated bags for grocery trips reduce partial melts that seed layers on refreeze."
        }
      ]
    },
    {
      "heading": "Headspace, surface area, and packaging",
      "paragraphs": [
        "Air above the product exchanges moisture through the headspace; wide surface area increases evaporation–condensation cycles at the top. Fill containers, press parchment or freezer paper to the surface, and avoid tall skinny voids that amplify frost on walls. Factory packaging often minimizes headspace; repacking into wide bowls without surface cover invites top crust and side crystallization."
      ]
    },
    {
      "heading": "Partial serve and refreeze habits",
      "paragraphs": [
        "The softened rim where you scooped refreezes as a distinct ring because that region experienced the largest heat input and the fastest recrystallization front. Smoothing the surface before returning reduces jagged thermal peaks and odd voids that frost preferentially. Microwave-softening corners for quick servings creates extreme local heating relative to the core—another recipe for uneven layers next freeze."
      ],
      "tip": "Temper in the fridge for a few minutes instead of ambient counter when you want softer scoop without melting one face of the pint."
    },
    {
      "heading": "Stabilizers, solids, and realistic expectations",
      "paragraphs": [
        "Stabilizers and emulsifiers slow but do not defeat thermodynamics. Low-solids fruit sorbets and home bases without commercial cryoprotection may show layers sooner than premium pints. Increasing total solids or modest stabilizer use buys time, not infinite immunity. Ice layers differ from uniform iciness from poor churn; layers track interfaces and history, while general iciness often tracks ice crystal size from slow freeze or heat shock. Diagnose which you see before changing churn strategy alone."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is freezer burn the same as ice layers?",
      "a": "Related but not identical. Freezer burn is desiccation and oxidation at surfaces; ice layers can form from moisture redeposition even when burn flavor is absent."
    },
    {
      "q": "Will a deep freezer always fix it?",
      "a": "Colder steady storage helps, but headspace and door traffic still matter. Ultra-cold with huge swings can be worse than moderately cold and stable."
    },
    {
      "q": "Can I scrape layers off and eat the rest?",
      "a": "Often yes for quality; the underlying texture may still be coarser if crystals grew underneath. Safety follows normal frozen dessert rules."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    },
    {
      "title": "Why Ice Cream Gets Freezer Burn",
      "path": "/ice-cream-science/why-ice-cream-gets-freezer-burn"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamDevelopsIceLayersOverTime() {
  return <ScienceArticlePage spec={SPEC} />;
}
