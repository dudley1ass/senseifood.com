import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-is-too-pale",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Is Too Pale",
  "subtitle": "Egg wash, sugar, time, and oven temperature all add up to the final color of a crust—when one of them is missing or shorted, the pie comes out anemic.",
  "readTime": "7 min read",
  "emoji": "🤍",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Pale crusts almost always come from one of three things: the oven temperature was lower than needed for browning, the rim was shielded with foil for too much of the bake, or the dough didn't carry enough wash, sugar, or other browning helpers to develop color in time. Move the pie to a hotter finish, uncover the rim earlier, or brush with egg or milk to give the surface something to react with.",
  "intro": "Double-crust pies in particular hide the rim from direct heat under their own edge, which makes color especially uneven. Color isn't only about looks—it's flavor and textural set, because the same browning chemistry that turns the crust golden also drives Maillard reactions (the browning of proteins and sugars at high heat) and a small amount of caramelization that contribute the toasted, complex notes you expect from a great pie. Maillard browning on pastry needs surface dehydration and a local crust temperature somewhere above about 300°F (149°C); when soggy filling is steaming the underside of the bottom crust, the surface there never quite dries out and the bottom stays pale even though everything else cooks. An egg wash on top brings additional proteins and sugars to the table, which gives the browning reactions more raw material to work with.",
  "sections": [
    {
      "heading": "Heat and time",
      "paragraphs": [
        "The bottom of the crust needs conductive heat from the pan it's sitting on—a hot metal pan or a preheated baking stone—because that's how energy actually gets into the dough from below. The top, by contrast, needs radiant heat from the oven walls and elements. If you bake on a top rack with a glass pan, both heat sources can be working against you at once, and the result is a pale shell on both faces."
      ]
    },
    {
      "heading": "Washes",
      "paragraphs": [
        "Different washes browning rates: egg yolk goes deep golden and shiny because of its proteins and fats, milk softens into a gentle pale-tan, and heavy cream lands somewhere in the middle. Sprinkling sugar on the lid increases caramelization (where sugars break down and brown directly under heat), giving you a crackly, sparkly top. Pick the wash that matches the finish you want and stick with it across a series of test bakes so you can actually compare results."
      ]
    },
    {
      "heading": "Blind bake carryover",
      "paragraphs": [
        "If you parbaked the shell before adding filling, remember that the final assembled bake doesn't restart the browning clock from zero. A shell that's already lightly colored from a blind bake will look pale at the end if the filling bake is too short. Plan the combined thermal budget across both steps, not just the final bake time on the recipe card."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "If you've already added sugar to the dough and the crust still bakes blond, the story isn't about formula anymore—it's about the oven. Walk back through air temperature, rack placement, and shielding. Ratios from Fix My Recipe still help, especially when you're comparing a very butter-heavy crust to a leaner one, because the milk solids in butter are themselves browning agents."
      ]
    },
    {
      "heading": "Bake sequence",
      "paragraphs": [
        "Blind-bake the bottom of the shell until it reaches a real golden color before you add any wet filling, or build in bottom-heat strategies (a preheated stone, a steel sheet pan on the rack below, or a lower rack position). Then brush the top with milk for soft browning, egg wash for deep shine, or coarse sugar for crunch and sparkle—each of those nudges the browning rate in a different direction, and you can stack them when you want a really vivid finish."
      ]
    },
    {
      "heading": "Sugar in dough",
      "paragraphs": [
        "Adding even a single teaspoon of sugar to a basic pie dough noticeably increases browning without adding any sweet taste you'd notice. The sugar is fuel for the Maillard reaction, not flavor in this dose, so it's a small lever for crust color that doesn't change how the dough handles or eats."
      ]
    },
    {
      "heading": "Pie nights get easier with a few steady habits",
      "paragraphs": [
        "Dough is happiest cool—roughly cool-room to refrigerator-cold butter—so it rolls without smearing. For filled pies, think in two heats: get the crust structure and color you want, then make sure the filling actually reaches a lively bubble in the center so thickeners and fruit have done their job without burning the rim.",
        "Jot pan type, rack height, and whether you used a shield; those three explain most lopsided bakes. SenseiFood’s Fix My Recipe pie mode still helps when you suspect the fat-to-flour ratio or hydration is off your target."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Egg washes brown at different rates: whole egg goes moderately, yolk-only goes deep and shiny, milk wash stays gentle—pick one and stick with it for a series of test bakes. Docking and pie weights change how steam escapes during a blind bake; note the weight amount and the minutes you baked weighted. Fruit acidity (pH) affects starch set—very acidic fillings like cherry or rhubarb often need a slightly higher thickener percentage than the generic charts suggest, because acid breaks down starch chains as they're forming."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Burns Before Filling Cooks",
      "path": "/pie-science/why-pie-crust-burns-before-filling-cooks"
    }
  ],
  "faqs": [
    {
      "q": "Why is the bottom so pale in a glass pan?",
      "a": "Glass conducts heat to the dough more slowly than dark metal, so the bottom crust generally needs longer baking, a lower rack position, or both to reach the same golden color you'd get from a dark steel pan. A preheated stone or steel on the rack below also helps the bottom crisp without you having to push the air temperature higher."
    },
    {
      "q": "How do I get color when wet filling keeps blocking browning?",
      "a": "Brush the inside of the parbaked shell with beaten egg or egg white mid-blind-bake (after docking holes have done their job) to create a moisture barrier between the filling and the crust. Be careful with weights afterward—remove them before the wash sets so they don't stick to the seal. That thin layer slows steam migration enough to let the bottom dry out and brown properly."
    }
  ]
};

export default function WhyPieCrustIsTooPale() {
  return <ScienceArticlePage spec={SPEC} />;
}
