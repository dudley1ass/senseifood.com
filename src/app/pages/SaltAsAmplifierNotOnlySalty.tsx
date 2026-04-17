import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "salt-as-amplifier-not-only-salty",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Salt Is an Amplifier, Not Just “Salty”",
  "subtitle": "Why under-salted sauces read flat even when acid and fat are present.",
  "readTime": "8 min read",
  "emoji": "🧂",
  "quickAnswer": "Before adding acid or sugar, verify salt threshold—salt multiplies total flavor expression and can suppress harsh bitterness at culinary doses.",
  "intro": "Salt does more than add saltiness. It can suppress bitterness, increase flavor contrast, and make umami more legible. Many “needs acid” sauces are actually under-salted: the taster reaches for brightness because nothing else is punching through. SenseiFood puts salt early in the debug sequence not because salt fixes everything, but because under-salt masquerades as many other problems. Once salt reaches a sensible threshold, acid moves read cleaner, fat reads rounder, and sweet stops feeling hollow. This article is about perception mechanics, not sodium ideology—adjust to your health context with knowledge of what you trade off. When you compare two trials, dissolve salt the same way each time so crystal size does not confound your conclusions. Even a pinch deserves attention: distribution beats dumping.",
  "sections": [
    {
      "heading": "Salt as a perception multiplier",
      "paragraphs": [
        "At culinary concentrations, salt can increase apparent sweetness and savory depth while reducing harshness. This changes the whole profile, not one axis—like turning up contrast on a photo instead of only saturation.",
        "A sauce can be compositionally balanced on paper yet perceptually muted until salt reaches threshold. Threshold differs by diner and by temperature; cold sauces often need careful salt tasting."
      ]
    },
    {
      "heading": "Debug order: salt before acid spirals",
      "paragraphs": [
        "Taste, add a small dissolved salt increment, taste again. If flavor “wakes up,” keep salt correction as the primary move and avoid over-acidifying to chase brightness.",
        "Dissolve salt in a little water or sauce liquid before adding if you fear hotspots; flakes help in delicate emulsions."
      ],
      "tip": "Before fixing anything—check salt."
    },
    {
      "heading": "Sources beyond the shaker",
      "paragraphs": [
        "Soy, fish sauce, capers, hard cheese, cured meats, and miso all bring salt with other flavors. When you add them, you are moving multiple axes—track net salinity, not ingredient count.",
        "If you are already salty from soy but still flat, see the umami article: you may need savoriness, not more sodium."
      ],
      "bullets": [
        {
          "title": "Finishing salt",
          "text": "Flaky finishes add texture and burst; they do not fix an under-seasoned liquid base alone."
        }
      ]
    },
    {
      "heading": "Salt, reduction, and late-stage risk",
      "paragraphs": [
        "Reducing concentrates salt along with everything else. If you salted aggressively early in a long reduction, finish can land harsh. Under-salting early and finishing late is often safer for demi-style work.",
        "If a sauce tastes salty but still hollow, you are past the salt lever—look to umami, aroma, or dilution."
      ]
    },
    {
      "heading": "Dietary constraints without losing craft",
      "paragraphs": [
        "Lower-sodium cooking can lean on acids, herbs, and umami carriers that add less sodium—but they do not perfectly substitute salt’s contrast effects. Be honest about the trade and compensate with technique: deeper browning, better stocks, and precise finishing.",
        "Measure salt by weight in development batches so you can scale reductions predictably."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I added salt and it still tastes flat—now what?",
      "a": "Check dilution and umami next. Hidden water, weak stock, or missing savory depth can masquerade as salt issues. Also taste at service temperature."
    },
    {
      "q": "Why does my sauce taste salty but bland?",
      "a": "Salt crossed threshold without supporting flavor density—often dilute liquid or missing aromatics. Reduce, build stock quality, or add umami rather than more salt."
    },
    {
      "q": "Kosher versus table salt—does it matter?",
      "a": "Weight matters, not volume. Different crystal shapes pack differently; grams remove guesswork."
    }
  ],
  "related": [
    {
      "title": "Umami: The Fifth Axis",
      "path": "/sauce-science/umami-axis-beyond-salt-acid-fat-sweet"
    },
    {
      "title": "Hidden Water Content",
      "path": "/sauce-science/water-content-hidden-dilution"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function SaltAsAmplifierNotOnlySalty() {
  return <ScienceArticlePage spec={SPEC} />;
}
