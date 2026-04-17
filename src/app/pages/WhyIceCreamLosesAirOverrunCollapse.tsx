import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-loses-air-overrun-collapse",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Loses Air (Overrun Collapse)",
  "subtitle": "Dasher time, viscosity, and cold chain breaks determine how much air stays trapped.",
  "readTime": "8 min read",
  "level": "Process & churn",
  "emoji": "💨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Air whipped in at churn must be imprisoned by partially frozen serum. Warm breaks, thin bases, or stopping churn too early let bubbles coalesce and escape on hardening.",
  "intro": "Commercial ice cream lists overrun because air is a structural ingredient, not a cheat. Home churns create the same physics: the dasher shears air into the base while ice crystals and concentrated serum begin to immobilize the liquid. If that sequence is wrong—too warm, too thin, too short—you freeze a collapsed foam. The pint feels heavy, chalky, or icy in the wrong way, and scoops lack resilience. This article unpacks the churn temperature path, how viscosity and stabilizer hydration set you up before freezing, what happens in hardening, and how storage abuse undoes air retention after the fact.",
  "sections": [
    {
      "heading": "Churn temperature path",
      "paragraphs": [
        "The dasher introduces air while small ice crystals nucleate and the continuous phase thickens. If you stop churn while the mix is still too warm, bubbles are large and fragile; they coalesce during hardening into fewer, coarser pockets or disappear entirely. If you churn far too long past the right draw, excessive heat from friction and shear can begin melting crystal structure you just built, also collapsing structure.",
        "Match machine guidance to base composition: higher fat and solids often firm faster; sorbets and low-fat bases may need colder freezer bowls or slower dasher speeds to avoid overwhipping a still-liquid serum. Listen for the motor labor change and watch body: the goal is a soft-serve consistency that holds a mound, not soup."
      ],
      "bullets": [
        {
          "title": "Warm freezer bowl",
          "text": "An insufficiently frozen insert cannot remove heat quickly enough; you whip longer, warm the mix, and lose fine bubble distribution."
        },
        {
          "title": "Batch size",
          "text": "Overfilling the canister reduces chilling efficiency and extends time-to-draw, which can mean overwhipped, warm foam."
        }
      ]
    },
    {
      "heading": "Viscosity before freeze",
      "paragraphs": [
        "Ageing overnight hydrates milk proteins and lets stabilizers fully disperse; skipping rest yields weepy foam that cannot laminate air into stable films. Sugar and dissolved solids raise viscosity and depress freezing point, changing how early air incorporates and how quickly the matrix sets.",
        "Emulsifiers and stabilizers shift bubble size distribution: too little and serum drains from films; too much and texture can feel gummy if you compensate with excessive churn time. Balance formulation changes with churn observation rather than only fixing numbers on paper."
      ],
      "tip": "If the base pours like skim milk before churn, fix the base first—more air time rarely rescues a structurally thin continuous phase."
    },
    {
      "heading": "Holding cold chain through hardening",
      "paragraphs": [
        "Hardening is not passive waiting; it is where remaining water freezes, crystals grow, and air cells become trapped in a glassy, sugary, fat-stabilized matrix. Slow or uneven freezing produces large crystals and reorganizes serum, which can collapse bubble walls. Pack with minimal headspace, get the pint into the coldest stable part of the freezer quickly, and avoid repeated softening cycles if you care about body.",
        "Thermal abuse shows up as shrinkage, whey separation, or a dense core under a softer rim—each a hint that air and water relocated after draw."
      ]
    },
    {
      "heading": "Diagnosing collapse versus low overrun intent",
      "paragraphs": [
        "Some styles intentionally target lower aeration; gelato tradition often carries less air than industrial ice cream. Collapse is different: you expected lightness and got blockiness, or the surface sank after scooping. Taste for ice and serum separation; look for a uniform color without a wet sheen on refreeze.",
        "If collapse follows only certain flavors, suspect added acids, alcohol, or fruit water skewing freezing curves and foam stability. Adjust solids, pre-infuse, or compensate with a touch of stabilizer after you validate the base behaves in a neutral flavor."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is less air always worse?",
      "a": "No. Some recipes aim for dense, custard-like body. The issue is unintended collapse relative to what your formula and machine normally produce."
    },
    {
      "q": "Can I re-churn melted ice cream to restore air?",
      "a": "You can rechurn after safe handling, but texture rarely matches the first pass; ice crystals and partially destabilized emulsions work against you. Fresh base is more reliable."
    },
    {
      "q": "Does container shape matter?",
      "a": "Wide shallow containers freeze faster and more evenly than deep narrow ones, which can help preserve small bubbles and reduce coarse gradients."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    },
    {
      "title": "Why Ice Cream Is Too Soft",
      "path": "/ice-cream-science/why-ice-cream-is-too-soft"
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

export default function WhyIceCreamLosesAirOverrunCollapse() {
  return <ScienceArticlePage spec={SPEC} />;
}
