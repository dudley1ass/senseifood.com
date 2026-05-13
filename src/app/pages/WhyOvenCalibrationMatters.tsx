import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-oven-calibration-matters",
  "segment": "baking-science",
  "categoryLabel": "Baking Science",
  "title": "Why Oven Calibration Matters",
  "subtitle": "A twenty-five degree error changes set timing, browning, and leavening more than most intuition budgets.",
  "readTime": "8 min read",
  "emoji": "🌡️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Oven calibration matters because stated setpoints rarely equal true cavity temperature, and convection, rack height, and thermal mass shift effective heat flux. Use a good air probe, log center versus wall, preheat fully, and adjust recipes by measured offset rather than by color alone. Log one cookie test at the temperature your thermometer reports—not the dial—and the next holiday bake becomes a story about adjustments you trust instead of hope.",
  "intro": "Your oven dial is a suggestion box to a heating element with hysteresis, venting, and probe placement quirks. Calibration is not ego; it is aligning your timeline with the recipe writer’s timeline. This article covers probe placement, preheat drift, convection fan effects, and why two “350°F” ovens can produce opposite cookies. Thermal maps beat anecdotes: move a probe to four rack positions during preheat and log max delta. Record whether convection fan cycles audibly because intermittent fan behavior changes browning bands. If you bake on stones, weigh stone thickness because heat capacity shifts recovery after door opens. For long bakes, log voltage if you suspect sag during neighborhood dinner hour. When comparing recipes across ovens, normalize by measured air temperature, not dial. Fix My Recipe outcomes get trustworthy only when your heat environment is measured, not assumed. Once you stop trusting the dial as gospel, recipes stop gaslighting you. The story becomes honest: your “350°F” might be a shy 330°F hiding behind a slow probe, or a brave 375°F near the door. A thermometer turns arguments about timing into adjustments anyone can repeat, which is the whole point of calibration—not perfection, just a shared vocabulary with the recipe writer.",
  "sections": [
    {
      "heading": "Setpoint versus cavity reality",
      "paragraphs": [
        "Oven sensors cycle around targets; overshoot is common right after preheat beep. Dark pans absorb radiant differently than light pans at the same air temperature. Stone or steel inserts change thermal ballast and bottom heat."
      ]
    },
    {
      "heading": "Convection, fans, and drying rate",
      "paragraphs": [
        "Moving air sets crust faster and can dry surfaces before centers finish. Reduce temp or time when switching from conventional to convection if edges race. Multi-rack bakes need rotation when airflow is uneven."
      ]
    },
    {
      "heading": "Altitude and voltage quietly move targets",
      "paragraphs": [
        "Boiling point shifts with elevation; steam leavening and moisture loss curves change. Electric elements age; voltage sag during neighborhood peak load changes preheat paths. Gas ovens have moist combustion air that browns differently than dry electric coils."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When ratios look sane but timing never matches, log measured oven temp against recipe assumptions. Pair internal food temps with air temps for cakes and breads."
      ]
    },
    {
      "heading": "How to read your oven like a character in the story",
      "paragraphs": [
        "Recipes assume a cavity that behaves; your dial is only the opening line. When cookies brown on one edge while the center looks underdone, or cakes take fifteen mysterious minutes longer every time, the narrator is usually heat—not your talent. Treat a thermometer and a single sheet-pan test bake as the closing scene: you learn where the hot breath lives, then adjust time or rack with measured temperature in mind. Notes can be human (“back left runs fierce”) instead of equipment inventories."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Where do I place the probe?",
      "a": "Near the rack center at cookie height, away from direct radiant from elements."
    },
    {
      "q": "How often to check?",
      "a": "Seasonally or after any move; bumped probes lie."
    }
  ],
  "related": [
    {
      "title": "Why Recipes Fail",
      "path": "/baking-science/why-recipes-fail"
    },
    {
      "title": "Why Butter Temperature Matters",
      "path": "/baking-science/why-butter-temperature-matters"
    }
  ]
};

export default function WhyOvenCalibrationMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
