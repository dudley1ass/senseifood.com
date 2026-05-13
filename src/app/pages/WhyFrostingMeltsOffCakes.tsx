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
  "intro": "Melting frosting is a heat and phase problem disguised as decoration skill. The cake is a heat sink; buttercream is a fat-stabilized foam or emulsion that collapses when fat goes fully liquid. American buttercream can weep sugar syrup when warm; cream cheese frostings loosen when protein networks are overheated. This article walks through crumb temperature, butter crystal state, humidity, and filling compatibility so you can stop chasing more powdered sugar as the only fix. For tiered builds, log each stage temperature: crumb coat, chill, final coat, and transport hold. Black car interiors on sunny days can destroy emulsions in minutes even when home kitchen was perfect. If you use cream cheese frosting, note dairy brand protein differences; they shift curd tension. When testing fixes, photograph the slide plane: filling slip versus buttercream shear tells different stories. SenseiFood encourages pairing cake ratio checks with process thermometers because melting is almost always heat-path plus emulsion-state, not a missing teaspoon of sugar.",
  "sections": [
    {
      "heading": "Crumb temperature and thermal mass",
      "paragraphs": [
        "A crumb above roughly 75–80°F can hold enough heat to melt butterfat in adjacent frosting even when the kitchen feels cool. Thick layers and insulated centers release heat for hours.",
        "Freezer flash is not always better: a frozen exterior with a warm core still fails during the slow equalization window.",
        "Simple syrup soak or wet fillings increase thermal conductivity and moisture injection at the interface, accelerating slip."
      ],
      "tip": "Probe the center; aim for true room temp through the whole tier before final coat."
    },
    {
      "heading": "Buttercream type and emulsion stability",
      "paragraphs": [
        "Swiss and Italian buttercreams are water-in-fat emulsions; broken meringue or hot syrup yields greasy separation under shear.",
        "American buttercream is mostly powdered sugar in fat; heat drives fat liquidity and syrup mobility simultaneously.",
        "Cream cheese frostings tighten with acid and cool working; overheated cheese proteins will not rescue with extra sugar."
      ]
    },
    {
      "heading": "Humidity, fructose, and storage",
      "paragraphs": [
        "Humid nights condense water onto chilled cakes, dissolving sugar crusts and lubricating slip planes.",
        "Invert syrups and honey increase hygroscopicity; they taste stable but move water aggressively on the cut surface.",
        "Transport vibration plus soft crumb is a mechanical slide even when temperature is perfect."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cake mode compares fat, sugar, and liquid bands to structural targets. When melting pairs with dense crumb, you have two coupled issues—not only frosting.",
        "Log crumb temp at crumb coat versus final coat; one data point ends many debates."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-frosting-melts-off-cakes\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Frosting Melts Off Cakes under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-frosting-melts-off-cakes.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-frosting-melts-off-cakes, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
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
