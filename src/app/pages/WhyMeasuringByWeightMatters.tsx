import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-measuring-by-weight-matters",
  "segment": "baking-science",
  "categoryLabel": "Baking Science",
  "title": "Why Measuring by Weight Matters",
  "subtitle": "A cup of flour isn't a stable unit—it's a snowball of how you scooped, how packed your jar was, and how humid the air felt that morning. Grams are the same everywhere, which means flour, sugar, and water actually stay in honest proportion when you scale or share a recipe.",
  "readTime": "8 min read",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Measuring by weight quietly removes the hidden error in volume cups—especially for flour, where 'one cup' can swing by 20% or more depending on whether you spooned, scooped, or sifted first. Weight also makes scaling easy: doubling a batch just means doubling the grams, with none of the packing inconsistencies that compound when you measure every ingredient twice. A few percentage points of flour error moves cookies and cakes more than most ovens drift in a week, which is why a cheap kitchen scale tends to pay for itself in the first month.",
  "intro": "Baking is ratio chemistry executed on a clock. Cups are a lossy way to record those ratios—the same scoop can vary by a surprising margin depending on whether you spooned the flour in, dipped the cup, tapped it down, or sifted first. This article explains why flour is by far the worst offender (lightweight, fluffy, and easy to compress without realizing), why sticky liquids and water also behave better in grams, and why digital scales are the cheapest insurance policy you can buy for chocolate, butter, and your own sanity. Beyond flour, weighing water for bread and weighing honey or molasses both beat fighting a measuring cup that never fully empties no matter how hard you scrape. The SenseiFood Fix My Recipe tool assumes you're working in grams, and the sooner you adopt a scale, the faster the debugging articles around the site pay off in your own bakes. Grams turn baking from a game of telephone into a straight line: the flour that arrived in the bowl is the flour the formula assumed. That matters because small errors stack across eggs, cocoa, and leaveners until the crumb tells a story you didn't mean to write. A scale is less about precision theater than about quietly removing a whole class of silent variables.",
  "sections": [
    {
      "heading": "Flour density and structural ratios",
      "paragraphs": [
        "Spread, chew, and rise all key off how much actual flour you paired with fat, sugar, and water. The gluten network—those stretchy protein webs that give baked goods their structure—doesn't know what your intentions were, only what arrived in the bowl. A stirred cup, a spooned cup, and a dipped-and-leveled cup are functionally different recipes wearing the same name on the card. Whole-grain flours and humid days both change how tightly flour settles, which is why 'my cup method' doesn't travel the way grams do—what worked for the recipe writer's flour in Brooklyn last winter may not match what's in your jar in Phoenix this July."
      ]
    },
    {
      "heading": "Leavening, salt, and small-but-mighty ingredients",
      "paragraphs": [
        "Errors in baking powder and baking soda are tiny in grams but loud in chemistry, because both are chemical leaveners (acid-base reactions that produce CO₂ gas to lift the crumb). You can taste a mismeasure as either a soapy off-flavor or a flat, dense interior almost immediately. Salt is both a flavor knob and a fermentation brake for yeast doughs—and volume teaspoons lie about salt because crystal size changes how much actually fits in the spoon, even when the mass would have been the same on a scale. Yeast also doesn't respond in a straight line to temperature; grams keep your doubling and halving sane instead of fuzzy."
      ]
    },
    {
      "heading": "Scaling, collaboration, and debugging",
      "paragraphs": [
        "Scaling by volume multiplies whatever measurement error you started with; scaling by weight preserves the proportions exactly because the underlying math stays proportional. Sharing recipes in grams is the closest thing baking has to open-source collaboration—everyone is working on the same formula in the same units rather than five different cup interpretations of it. The Fix My Recipe debugger and SenseiFood's recipe distance checks both assume grams under the hood, which lets the tool give you a meaningful answer instead of guessing which cup culture the original author was raised in."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Enter your weights once and Fix My Recipe will compare your recipe against reference bands for the category, instead of you having to guess whether the author scoops or spoons. When something goes wrong, a short gram-by-gram log turns 'I had a weird Tuesday' into a repeatable story: same weights, one intentional change next time, and a real answer instead of a shrug."
      ]
    },
    {
      "heading": "Why the scale is a storyteller, not just a gadget",
      "paragraphs": [
        "Volume cups quietly turn baking into a game of telephone—a packed cup of flour is a totally different character than a sifted one, and the crumb knows the difference even if your eye doesn't. Grams keep the cast consistent across batches, so when something goes wrong you're arguing about process and temperature, not about whether the flour was shy in the cup. When you compare two attempts, the plot is 'same weights, one variable changed'—not a roundup of equipment serial numbers. A short note about kitchen humidity or how long you creamed the butter is enough for future-you to recognize what actually shifted between the good batch and the bad one."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I still need cups?",
      "a": "Plenty of bakers still use cups for liquids out of habit, and that's fine, but weighing water and milk works just as well and means one fewer set of dishes plus one fewer place for conversion mistakes to sneak in. If your scale is already out for the flour, you might as well finish the recipe on it."
    },
    {
      "q": "What precision do I need?",
      "a": "One-gram resolution is more than enough for almost all home baking—cookies, cakes, breads, and pies all respond to a few grams of swing without falling apart. Tenth-of-a-gram scales become useful for coffee dosing and for measuring very small amounts of stabilizers or yeast, but don't let the search for the perfect scale stop you from buying a perfectly good one today."
    }
  ],
  "related": [
    {
      "title": "Fix Recipes One Variable at a Time",
      "path": "/baking-science/fix-recipes-one-variable-at-a-time"
    },
    {
      "title": "How to Use Fix My Recipe",
      "path": "/baking-science/how-to-use-fix-my-recipe"
    }
  ]
};

export default function WhyMeasuringByWeightMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
