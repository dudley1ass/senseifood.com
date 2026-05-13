import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "mustard-pan-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Mustard Pan Sauce: Recipe & Balance Guide",
  "subtitle": "Dijon, cream, stock, and butter — a creamy pan sauce that uses mustard as an emulsifier and a flavor anchor at the same time.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🟡",
  "quickAnswer": "Mustard quietly helps fat-in-water emulsions stay together — the natural mucilage in mustard seeds acts a bit like a kitchen-friendly emulsifier (a substance that holds oil and water in stable suspension). Still, finish the sauce gently: cream plus acid can curdle if you boil hard, no matter how much mustard you put in.",
  "intro": "Mustard brings two things to a pan sauce in one bottle: it stabilizes emulsions a little, and it carries a sharp, complex sourness that cuts through cream. That double role is why it shows up in so many creamy pan sauces for pork, chicken, and salmon. The cream rounds the heat from the mustard and gives the sauce body, and butter at the very end adds a glossy finish. Sequence is the recipe: cook the aromatics, cook the mustard briefly so it loses any raw bite, reduce the stock, simmer the cream until it coats a spoon, then swirl in cold butter off the heat. Each step prepares the pan for the next. Skipping the mustard cook-in step leaves a slightly raw, harsh edge on the finished sauce; skipping the stock reduction floods the pan with cream before the savory base has had a chance to concentrate.",
  "sections": [
    {
      "heading": "Why this sequence",
      "paragraphs": [
        "Reducing the stock before adding the cream concentrates savory notes from the fond (the browned bits stuck to the pan from searing the protein) without flooding the sauce with dairy volume too early. That way, when the cream goes in, you only need a short reduction to finish — and a short reduction protects the texture, because the longer cream simmers, the more its proteins tighten and risk separation. Adding the cream too early means you simmer dairy for ten minutes, and ten minutes of simmering cream gets thicker and grainier in proportion to how long it cooks. Finishing the butter off heat, swirling it into the warm sauce, keeps the dairy fat in tiny emulsified droplets rather than letting it shear into oily slicks — the residual heat is enough to melt the butter without breaking it."
      ]
    },
    {
      "heading": "Debugging",
      "paragraphs": [
        "If the sauce breaks — oily slick on top, watery layer beneath — lower the heat first, then add a splash of warm stock and whisk steadily. The warm liquid gives you something to whisk new emulsion droplets back into; cold liquid would shock the sauce further. Mustard can mask salt needs in the early stages of cooking because its own sharpness reads loud, so always taste salt after the sauce is smooth and finished, not when it is still wide open from the mustard kick. The same trick applies in reverse — a sauce that tastes flat after dilution might just need salt rather than more mustard."
      ]
    },
    {
      "heading": "Mustard choice and timing",
      "paragraphs": [
        "Dijon mustard — smooth, sharp, made with white wine instead of vinegar — is the default for pan sauces because it has a clean acid profile and a milder pungency than ground brown mustard. Whole-grain Dijon adds texture and a slightly more rustic look; the visible seeds also give the sauce a different mouthfeel. Dry mustard powder works in a pinch but needs a few minutes in hot liquid to develop its flavor and lose any raw chalky note. Add the mustard after the aromatics but before most of the stock — that brief cook-in mellows the raw bite and lets the mustard's flavor compounds disperse evenly through the pan before more liquid arrives.",
        "Heat affects mustard's flavor profile in another way: the volatile compounds responsible for its sharpness — sulfur compounds that form when the seeds are mixed with liquid — break down at high temperatures. A mustard pan sauce simmered hard for too long loses much of its punch. If you want the mustard to lead the finished sauce, hold back a small spoonful and swirl it in at the very end, off heat, so its bright character survives onto the plate."
      ]
    },
    {
      "heading": "Pairings and a cleaner finish",
      "paragraphs": [
        "Mustard pan sauces pair naturally with pork chops, chicken breasts, and salmon — anything where the dish wants a creamy coat with a sharp accent. They struggle with very delicate fish, which gets bullied by the mustard. If you want a brighter, lighter version, replace half the cream with extra stock and lift with a squeeze of lemon at the end; the result is more like a velouté (a French sauce family built on stock thickened with roux or by reduction) with mustard than a true creamy pan sauce, but it eats lighter and works better in warmer weather. Always rest the sauce off heat for a minute before serving — the temperature drops slightly, the flavors integrate, and the texture settles into its final smoothness."
      ]
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "pan-sauce-mustard"
  }
};

export default function MustardPanSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
