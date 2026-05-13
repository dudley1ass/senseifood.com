import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "emulsion-vs-non-emulsion-sauces",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Emulsion vs Non-Emulsion: Two Sauce Worlds",
  "subtitle": "How to tell oily separation from normal concentration — they look similar in the pan but need opposite fixes.",
  "readTime": "9 min read",
  "emoji": "🧈",
  "quickAnswer": "If the sauce looks oily and visibly split into two layers, treat it as a broken emulsion: lower the heat, whisk in a little warm liquid, and rebuild the smooth coating from the inside. If the sauce is just getting too intense as it cooks down, that is normal concentration, not splitting — different problem, different fix.",
  "intro": "Sauces are not all built on the same physics, and pretending they are is how people pour heroic amounts of butter into a sauce that did not actually need any. Emulsified sauces are built around tiny droplets of fat suspended evenly in a watery liquid (or sometimes the other way around), held in place by emulsifiers — molecules like the lecithin in egg yolks, the proteins in dairy, or the gums in mustard, which coat each oil droplet and keep them from merging back into a single greasy pool. When that fragile arrangement fails, you see oily slicks, pools of free butterfat, and a watery thin layer underneath. Non-emulsified sauces — most reductions, thin glazes, soy-based pan sauces — do not really \"split\" in the same sense. They concentrate as water leaves and they intensify, sometimes too far. Calling the right one matters: whisking warm liquid into a broken butter sauce makes total sense; doing the same to a perfectly good soy reduction just dilutes the dinner you spent twenty minutes building. SenseiFood wants you to look at the pan with engineering eyes — is this a stable dispersion that came apart, or is it a simple solution that just got too dense? If you are not sure, let a spoonful rest on a cool plate for thirty seconds. Oil rings forming at the edges as it cools suggest broken emulsion; steady glossy sheen with no separation suggests you just over-concentrated.",
  "sections": [
    {
      "heading": "What breaks and what concentrates",
      "paragraphs": [
        "Pan sauces finished with cold butter (a technique called monter au beurre — mounting butter — where you swirl in cold butter off the heat to thicken and gloss the sauce), mayonnaise-family builds like hollandaise, and many cheese sauces all depend on small fat droplets staying spread out in the liquid. When the emulsifiers fail, or when heat shears those droplets so they merge, you see distinct oil and water layers. The sauce can taste fine but look ruined, and the texture goes from velvet to slick almost instantly. Reductions and soy-forward glazes mostly have water with dissolved salts, sugars, and acids — there is little to no oil dispersed in them. They do not break in the classical emulsion sense; their failures are more about harshness, salt that climbed too high, or a burnt note from contact with hot pan walls. Different chemistry, different repair kit."
      ]
    },
    {
      "heading": "Visual triage at the spoon",
      "paragraphs": [
        "Glossy cohesion almost always means stable structure — when you tilt the spoon, light reflects in one smooth sheet across the surface. Persistent oil pools that re-form within a few seconds after you stir suggest a broken emulsion or free fat that was never actually incorporated. A finishing sheen from a swirl of butter at the end is not the same thing as an oil slick: butter-finish gloss should melt into the sauce when stirred and stay there. If oil rings keep reappearing in the same spots, the emulsion underneath is gone and you are looking at separated fat sitting on top of a thin, watery layer."
      ],
      "tip": "If it looks oily and stays separated after resting, you are almost certainly looking at an emulsion problem — reductions tighten and darken but should not form distinct oil lenses unless someone added fat without working it in."
    },
    {
      "heading": "Fixing broken emulsions",
      "paragraphs": [
        "Lower the heat first. Thermal stress is the most common trigger of a broken emulsion — once a fat-and-water mix gets too hot, the emulsifiers (molecules holding the two phases together) lose their grip and the fat droplets coalesce into bigger pools. Take the pan off the burner or move it to a cool spot, add a small amount of warm liquid — water, stock, or warm cream depending on what the sauce is built around — and whisk steadily to rebuild the tiny droplets. For some classic sauces like hollandaise, dropping in a fresh egg yolk or a small spoon of Dijon mustard gives you new emulsifier molecules to coat new droplets — that is how a rescue from scratch works. Patience matters: re-emulsifying is iterative, not one heroic stir. Thin slightly, whisk, re-tighten with gentle warmth, repeat."
      ]
    },
    {
      "heading": "When not to emulsion-fix",
      "paragraphs": [
        "If the sauce just tastes too salty or too reduced, the problem is concentration, not structure — and the right move is to add liquid and re-balance, not to try to whisk a new emulsion. Label the problem correctly before reaching for tools. And if there is intentional fat floating on top — a thin layer of red chili oil on a chili crisp build, the fat cap on a slow-simmered chili — that is not a broken emulsion. That is the design. Skim it back into the sauce only if you want a more unified mouthfeel; otherwise leave it alone and let it be the layered visual cue it was meant to be."
      ]
    },
    {
      "heading": "Hybrid sauces: cheese plus reduction",
      "paragraphs": [
        "Real-world sauces often blend the two paradigms. A pink vodka sauce starts with a tomato reduction and finishes with cream — concentration first, emulsion second. A peppercorn pan sauce reduces wine and brandy hard, then finishes with cream — same pattern. Debug whichever failure mode is dominant for that build. If dairy is involved, emulsion stability tends to be the more delicate variable; if you are doing a long reduction with only a final cream finish, the curve of concentration matters more in the early stages. Sequence is everything: get your volume right while the sauce is still water-based, then add fat off heat or at the lowest simmer once the structure is settled."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My pan sauce looks oily — was the butter bad?",
      "a": "Almost always heat or order, not the butter. Old or off butter smells rancid and slightly cheesy; you would notice on a sniff before the sauce ever broke. A broken emulsion can look oily but smell completely fine — the fat is the same fat, it just stopped being suspended in tiny droplets. Lower the heat, add a splash of warm liquid, and whisk patiently to rebuild the structure."
    },
    {
      "q": "Does a blender fix everything?",
      "a": "Blenders can power through temporary splits — the high shear forces re-disperse fat droplets so finely that the emulsion looks rescued. But blenders also over-aerate (whip air bubbles into the sauce, lightening color and changing texture) and can heat the sauce from blade friction, which is the original cause for many breaks. For service-critical sauces, whisking by hand with controlled heat teaches you to read the pan, which a blender hides."
    },
    {
      "q": "Why does my cheese sauce separate but my soy glaze never does?",
      "a": "Because they are completely different kinds of sauce, even though they both live in a pan. A cheese sauce is an emulsion-like system: proteins, fats, and water held together by milk proteins and emulsifying salts. A soy glaze is essentially dissolved seasoning in water — there is no significant oil suspended in it, so there is nothing to separate out. The cheese sauce's stability has to be actively maintained; the soy glaze just sits there being water with stuff dissolved in it."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Reduction Curve",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function EmulsionVsNonEmulsionSauces() {
  return <ScienceArticlePage spec={SPEC} />;
}
