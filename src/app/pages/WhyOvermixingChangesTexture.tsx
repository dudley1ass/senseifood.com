import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-overmixing-changes-texture",
  "segment": "baking-science",
  "categoryLabel": "Baking Science",
  "title": "Why Overmixing Changes Texture",
  "subtitle": "Mechanical shear develops gluten, incorporates air, and can warm batters—three texture levers that move differently per bake category.",
  "readTime": "8 min read",
  "emoji": "🌀",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Overmixing after flour hydrates aligns gluten strands and can incorporate excess air that tunnels in cakes or toughens muffins, while in bread doughs more mixing increases strength by design. Match mixing intent to formula: muffin method wants minimal gluten; bread wants windowpane; cookies sit between depending on fat creaming stage.",
  "intro": "“Do not overmix” is not superstition; it is shorthand for controlling gluten development, bubble population, and batter temperature. The same mixer speed is constructive for creaming butter and destructive for finishing delicate cake flour. This article separates stages, names visual cues, and connects overmixing symptoms to fixes without banning your stand mixer. Mixer forensics help: record speed, time after flour add, and bowl scraping frequency. Film top-down once; count revolutions until gluten window appears for bread versus cake. If you use hand mixers, note attachment type because beaters incorporate air differently than paddles. Temperature log the batter surface with an IR gun because friction heat is real. When teaching kids, show the same batter at ten versus sixty seconds after flour to make risk visible. SenseiFood encourages pairing these observations with ratio checks so you do not overcorrect chemistry when process was the bug.",
  "sections": [
    {
      "heading": "Gluten development after hydration",
      "paragraphs": [
        "Once water meets gliadin and glutenin, mechanical work aligns them into elastic networks.",
        "Quick breads and cakes want limited alignment; bread wants extensive alignment.",
        "Fold versus beat choices change crumb openness even when grams are identical."
      ]
    },
    {
      "heading": "Air cell population and tunneling",
      "paragraphs": [
        "Excess air nuclei coalesce into large voids that set as tunnels or peaks crack from uneven expansion.",
        "Mixer introduces finer bubbles than chemical leaveners alone; timing matters for oven spring synergy.",
        "Warm batter from long mixing accelerates chemical leavening prematurely."
      ]
    },
    {
      "heading": "Temperature creep and fat smearing",
      "paragraphs": [
        "Warm friction can smear solid fat in pie dough, killing flake.",
        "In cookies, late-stage over-beating after flour can warm dough and increase spread unpredictably.",
        "Scraping the bowl matters because unmixed pockets hide next to overworked zones."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Baking mode highlights when ratios suggest tender textures but your process overdevelops gluten.",
        "Film a top-down mix once; count seconds after flour add for repeatability."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-overmixing-changes-texture\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Overmixing Changes Texture under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-overmixing-changes-texture.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-overmixing-changes-texture, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is folding the same as mixing?",
      "a": "Folding limits shear while integrating; it is the tool for delicate batters."
    },
    {
      "q": "Does reverse creaming help?",
      "a": "Coating flour in fat first limits gluten hydration early—useful for tender cakes."
    }
  ],
  "related": [
    {
      "title": "Why Gluten Matters and What You Are Replacing",
      "path": "/baking-science/why-gluten-matters-and-what-youre-replacing"
    },
    {
      "title": "Why Eggs Matter in Baking",
      "path": "/baking-science/why-eggs-matter-in-baking"
    }
  ]
};

export default function WhyOvermixingChangesTexture() {
  return <ScienceArticlePage spec={SPEC} />;
}
