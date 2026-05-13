import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-frosting-melts-off-cakes",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Frosting Melts Off Cakes",
  "subtitle": "Warm crumb, soft buttercreams, and inverted sugar dynamics destabilize frosting faster than room temperature alone suggests.",
  "readTime": "8 min read",
  "emoji": "🎂",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Frosting slides when the crumb is still warm enough to melt fat crystals in buttercream, when Swiss or Italian meringue buttercream was not fully emulsified, or when high-fructose syrups invert and thin the phase. Chill the cake, tighten emulsion with correct butter temperature, and avoid stacking heavy tiers on soft fillings.",
  "intro": "Melting frosting is mostly heat sneaking through the cake and phase changes in buttercream—not a missing teaspoon of powdered sugar. Warm crumb melts fat crystals in buttercream; broken emulsions in Swiss or Italian meringue buttercream separate under shear; hygroscopic syrups move water on the surface. Humidity and car transport write their own chapters. This article connects crumb cool-down, butter temperature for emulsions, and fillings so you fix the real lever: temperature path and emulsion state, not hope. If you bake tiers, treat \"room temperature\" as something you verify with a probe, not a vibe—thick layers hold heat for hours. Sun through a car window can undo a perfect kitchen day in minutes.",
  "sections": [
    {
      "heading": "Crumb temperature and thermal mass",
      "paragraphs": [
        "A crumb above roughly 75–80°F can hold enough heat to melt butterfat in adjacent frosting even when the kitchen feels cool. Thick layers and insulated centers release heat for hours. Freezer flash is not always better: a frozen exterior with a warm core still fails during the slow equalization window. Simple syrup soak or wet fillings increase thermal conductivity and moisture injection at the interface, accelerating slip."
      ],
      "tip": "Probe the center; aim for true room temp through the whole tier before final coat."
    },
    {
      "heading": "Buttercream type and emulsion stability",
      "paragraphs": [
        "Swiss and Italian buttercreams are water-in-fat emulsions; broken meringue or hot syrup yields greasy separation under shear. American buttercream is mostly powdered sugar in fat; heat drives fat liquidity and syrup mobility simultaneously. Cream cheese frostings tighten with acid and cool working; overheated cheese proteins will not rescue with extra sugar."
      ]
    },
    {
      "heading": "Humidity, fructose, and storage",
      "paragraphs": [
        "Humid nights condense water onto chilled cakes, dissolving sugar crusts and lubricating slip planes. Invert syrups and honey increase hygroscopicity; they taste stable but move water aggressively on the cut surface. Transport vibration plus soft crumb is a mechanical slide even when temperature is perfect."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cake mode compares fat, sugar, and liquid bands to structural targets. When melting pairs with dense crumb, you have two coupled issues—not only frosting. Log crumb temp at crumb coat versus final coat; one data point ends many debates."
      ]
    },
    {
      "heading": "Heat and timing, told simply",
      "paragraphs": [
        "Buttercream is a fat-and-sugar emulsion waiting for an excuse to slide; a warm crumb or a sunny windowsill is enough drama. The story is usually temperature balance, not a missing industrial stabilizer. Note crumb cool-down, room temp, and whether the sun hit the cake—then adjust one of those before you rebake the whole formula from suspicion."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I re-whip melted frosting?",
      "a": "Sometimes if it is only warm-soft; if oil has separated, cool slightly and re-emulsify carefully—often easier to remake a small batch."
    },
    {
      "q": "Does ganache behave the same?",
      "a": "Ganache failures are temper and water-in-fat differentials; see related ganache guides, but heat management is still the spine."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Stick to Themselves When Layering",
      "path": "/cake-science/why-cakes-stick-to-themselves-when-layering"
    },
    {
      "title": "Why Cakes Lose Height After Frosting",
      "path": "/cake-science/why-cakes-lose-height-after-frosting"
    }
  ]
};

export default function WhyFrostingMeltsOffCakes() {
  return <ScienceArticlePage spec={SPEC} />;
}
