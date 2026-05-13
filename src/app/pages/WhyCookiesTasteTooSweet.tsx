import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-too-sweet",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Too Sweet",
  "subtitle": "Cloying sweetness is often a balance problem—salt, acid, and browning frame sugar so it tastes like dessert instead of syrup, even when the cup measure looks \"normal.\"",
  "readTime": "7 min read",
  "emoji": "🍬",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Perceived sweetness is not the same as sugar grams. A cookie can taste syrupy when sucrose dominates without enough salt, acid, or Maillard browning to give the brain contrast. Trim sugar a little, add salt thoughtfully, chase real oven color, or add a tiny acid note; verify you are not under-baking into pale sugar territory.",
  "intro": "Sweetness is context. A cookie that reads \"too sweet\" on paper may actually be under-salted, shy on browning, or missing the small bitter and caramel notes that make sugar feel finished instead of loud. Serving temperature matters too: very cold buttercream reads less sweet than the same buttercream warm. This guide walks the sensory stack so you adjust the right lever instead of swinging wildly on sugar alone.",
  "sections": [
    {
      "heading": "Salt as a frame",
      "paragraphs": [
        "Salt does not only add savor; it makes sweetness feel intentional by giving your palate another note to chew on. Many home recipes are timid with salt relative to modern palates. Weigh it—volume measures bounce around between table salt, kosher salt, and flaky finishing salt.",
      ]
    },
    {
      "heading": "Browning and bitterness (the good kind)",
      "paragraphs": [
        "Maillard browning (amino acids + sugars reacting under heat) and true caramelization add complexity that balances naked sucrose. Pale, thick white-sugar cookies can taste one-note because the only story is sweet. A slightly longer bake at moderate heat, more brown sugar, or a little milk powder can deepen flavor without simply dumping more sucrose on the problem.",
      ],
      "tip": "Try 5–10% sugar reduction paired with one extra minute of bake for color—often sweeter on paper, less cloying in the mouth."
    },
    {
      "heading": "Acid and dairy",
      "paragraphs": [
        "A touch of acid—cream of tartar in snickerdoodles, a little yogurt, cultured butter—brightens perception the way lemon lifts jam. Fat rounds harsh edges by coating the tongue and carrying aroma. You are not trying to make a sour cookie; you are giving sugar a backdrop.",
      ]
    },
    {
      "heading": "Use Fix My Recipe on the ratio",
      "paragraphs": [
        "Cookie mode compares sugar, flour, fat, and salt bands so you can see when you are living above typical sugar for the texture you want. Use it as a map, then change one ingredient on the next tray so you know what moved.",
      ]
    },
    {
      "heading": "Sugar chemistry and bake color",
      "paragraphs": [
        "Fructose reads sweeter to many palates than sucrose at equal weight, so swapping honey or corn syrup is not a 1:1 sensory swap even when the scale matches. A modest salt band around 0.3–0.5% of flour weight often fixes cloying in test batches—measure grams, not vibes.",
      ]
    },
    {
      "heading": "Chilling and sugar dissolution",
      "paragraphs": [
        "Chilled dough dissolves sugar less before the bake, which changes spread and surface caramelization—sweetness perception rides along with texture and color, not sugar alone.",
      ]
    },
    {
      "heading": "What to change when sweetness feels stuck",
      "paragraphs": [
        "If the cookie is pale and reads syrupy, start with bake color and salt before you slash sugar: Maillard and salt are the cheap contrast tools. If it is dark yet still cloying, look at acid and sugar type—invert syrups and high fructose loads can push perceived sweetness even when brown looks right.",
        "When you test fixes, change one knob per tray—salt percent, sugar percent, or oven temperature—and take the same photo at the same minute mark. Your eye catches color shifts your tongue will later thank you for.",
        "SenseiFood’s Fix My Recipe debugger helps keep those tests honest by comparing your ratios to typical successful bands instead of letting Instagram hydration numbers live rent-free in your head."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Will cutting sugar ruin spread?",
      "a": "A small sugar trim plus a touch more brown sugar or a tiny hydration tweak often preserves spread better than a dramatic sugar chop. Still change one variable at a time so you know what worked.",
    },
    {
      "q": "Do European-style high-fat butters make cookies taste sweeter?",
      "a": "More butterfat changes how sugar and aroma dissolve in the mouth; compare formulas by weight rather than by cultural myth. Sometimes the fix is salt and bake color, not butter nationality."
    },
    {
      "q": "Stevia swap?",
      "a": "Non-sugar sweeteners change bulking, browning, and set—expect texture shifts, not a free lunch. Treat swaps as new recipes with a small test batch.",
    }
  ],
  "related": [
    {
      "title": "Brown Sugar vs White Sugar",
      "path": "/cookie-science/brown-sugar-vs-white-sugar"
    },
    {
      "title": "Why Cookies Taste Bland",
      "path": "/cookie-science/why-cookies-taste-bland"
    }
  ]
};

export default function WhyCookiesTasteTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
