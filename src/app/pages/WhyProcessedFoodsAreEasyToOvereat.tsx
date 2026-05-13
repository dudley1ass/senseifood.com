import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-processed-foods-are-easy-to-overeat",
  "segment": "nutrition-science",
  "categoryLabel": "Nutrition",
  "title": "Why Processed Foods Are Easy to Overeat",
  "subtitle": "Energy density, vanishing caloric density, and engineered texture-speed combinations bypass normal satiety brakes.",
  "readTime": "8 min read",
  "emoji": "🍟",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Ultra-processed foods combine refined carbs, fat, and salt with rapid oral processing and low fiber, so you ingest many calories before stretch receptors and hormones catch up. They are not evil chemistry; they are optimized for palatability and shelf life, which predictably raises ad libitum intake for many people.",
  "intro": "Overeating here is not a moral failure; it is an expected response to foods engineered to disappear quickly on the tongue while lighting up reward pathways. This article unpacks energy density, emulsions that melt fast, crunch-salt-fat loops, and why soda is a different satiety category than beans. The goal is clarity for meal planning, not fear. Intake awareness improves with environment design: pre-portion snacks into labeled containers and log package grams consumed, not just opened bags. Record eating context—screens, car, social—because attention splits intake. When comparing similar calories, note fiber and protein on labels; low values predict faster return hunger for many people. If you cook often, compare ad libitum intake of home meals versus takeout nights with identical rough calories. SenseiFood encourages curiosity about engineering without shame because understanding reduces accidental overconsumption.",
  "sections": [
    {
      "heading": "Vanishing caloric density and texture speed",
      "paragraphs": [
        "Foods that melt or dissolve quickly reduce oral exposure time, lowering early satiety cues per calorie.",
        "Air-puffed snacks deliver salt and starch with little mechanical work.",
        "Smooth emulsions coat the mouth evenly, increasing perceived pleasure per bite."
      ]
    },
    {
      "heading": "Salt, sugar, and umami synergy",
      "paragraphs": [
        "Bliss point formulations balance salt, sugar, and fat where liking peaks without quick sensory fatigue.",
        "Umami amplifiers extend savory persistence.",
        "Sweet-fat combinations rarely exist at that intensity in whole foods."
      ]
    },
    {
      "heading": "Low fiber and low protein defaults",
      "paragraphs": [
        "Many packaged snacks are low in protein and fiber relative to calories, weakening ileal brake signals.",
        "Liquid calories skip chewing cues entirely.",
        "Large packages and wide variety increase passive intake."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cooking from measured bases increases awareness even when you still enjoy treats.",
        "Pair nutrition reads with practical plate templates from other SenseiFood articles."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-processed-foods-are-easy-to-overeat\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Processed Foods Are Easy to Overeat under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-processed-foods-are-easy-to-overeat.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-processed-foods-are-easy-to-overeat, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are all processed foods bad?",
      "a": "No—freezing, canning, and fermenting are processing too; the discussion targets energy-dense hyper-palatable mixes."
    },
    {
      "q": "What is one practical swap?",
      "a": "Add protein and fiber to the same meal pattern before banning categories outright."
    }
  ],
  "related": [
    {
      "title": "Why You Are Still Hungry (Science of Satiety)",
      "path": "/nutrition-science/why-youre-still-hungry-science-of-satiety"
    },
    {
      "title": "Balanced Plates Without Counting Calories",
      "path": "/nutrition-science/balanced-plates-without-counting-calories"
    }
  ]
};

export default function WhyProcessedFoodsAreEasyToOvereat() {
  return <ScienceArticlePage spec={SPEC} />;
}
