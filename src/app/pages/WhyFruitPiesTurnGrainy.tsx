import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-fruit-pies-turn-grainy",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Fruit Pies Turn Grainy",
  "subtitle": "Grainy filling usually means starch, pectin, or sugar went past their happy window—overcooked fruit, clumpy starch, or crystals forming on cool-down.",
  "readTime": "7 min read",
  "level": "Heat & starch",
  "emoji": "🌫️",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Grit often comes from overcooked pectin networks, starch that never fully dispersed before acid hit, or sucrose crystallizing as the filling cools. Control peak boil, hydrate starch slurries, and cool gently—your tongue cannot tell which failure mode it is, but the fix order is still knowable.",
  "intro": "Silky fruit filling is a truce between heat, acid, sugar, and thickeners; graininess is what you feel when one of those partners overshoots. Pectin from fruit can break down into mealy textures if you boil like you are reducing stock; starch can clump if acid tightens granules before they swell; sugar can come out of solution as fine sand if the filling cools too fast in places. Your tongue just says \"grit\"—this article helps you decide whether you chased color too long, added lemon too early, or shocked the pan.",
  "sections": [
    {
      "heading": "Temperature ceilings for fruit",
      "paragraphs": [
        "Fruit fillings are not “boil until brave.” Extended time at a full rolling boil can break pectin and hemicellulose in ways that feel sandy or mealy after cooling, especially with berries and stone fruit that already had fragile cell structure. You may also drive off water unevenly so the matrix overshoots set, then syneresis appears as the gel rearranges—reheating slices can feel especially gritty.",
        "Treat time-at-temperature as a logged variable: note when bubbles change character, when foam subsides, and when the mixture starts to drag on the spoon. If your recipe has a second boil after adding starch, respect the shorter window; the first cook already did a lot of extraction work."
      ],
      "bullets": [
        {
          "title": "Thermometer beats eyeball",
          "text": "A few degrees past your usual endpoint can be the difference between tender set and a filling that tightens aggressively as it cools."
        },
        {
          "title": "Stirring pattern",
          "text": "Scrape the pan bottom—starch can locally over-thicken where heat concentrates, then break into flecks when whisked back in."
        }
      ]
    },
    {
      "heading": "Sequence: starch before acid extremes",
      "paragraphs": [
        "Acid tightens starch granules and changes swelling kinetics. If you dump lemon juice or a very acidic fruit purée in before starch has fully hydrated and cleared, you can get clumps that never fully disperse; those clumps read as grain after bake and chill. Slurry starch into warm liquid with steady agitation, bring to full viscosity, then introduce sharper acid loads—or add acid in a controlled stream while watching shear. Cornstarch, tapioca, and modified starches tolerate acid differently; if you swap thickeners, revisit order and hydration, not just gram weight."
      ],
      "tip": "If you see translucent gel lumps while the filling is still hot, fix them now—cooling locks that texture in."
    },
    {
      "heading": "Cooling curve and sugar",
      "paragraphs": [
        "High sucrose concentration lowers water activity and can encourage crystallization on cooling, especially if the filling cools very quickly from the edges inward. The result can feel like faint sugar sand even when starch and pectin behaved. Invert sugar, glucose syrup, or a modest amount of another monosaccharide source changes how sucrose behaves on cooling and can smooth perception, but balance against sweetness targets. Gentle cooling (stirring occasionally, avoiding ice-shock) also reduces odd gradients that nucleate crystals at the surface first."
      ]
    },
    {
      "heading": "Reheats and storage",
      "paragraphs": [
        "Grain can show up only after the fridge: starch retrogradation and moisture migration make a filling that seemed glossy yesterday feel sandy today. Gentle rewarm with a splash of liquid can help some formulas, but if the grit is from broken pectin or crystallized sugar, you are often masking, not reversing. For service pieces, consider finishing with a little extra fruit zest or a thin jam gloss to distract the palate from minor texture flaws while you adjust the cook next time."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is graininess always from starch?",
      "a": "No. Overcooked fruit solids, broken pectin, and sugar crystallization can feel similar. Starch grit often pairs with a slightly pasty mouth-coating; sugar feels more sparkly; mealy fruit can feel fibrous or sandy depending on species and cook time."
    },
    {
      "q": "Does the top crust bake matter?",
      "a": "Indirectly. A long uncovered bake to brown heavily can over-thicken the upper inch of filling while the center lags, which changes how you stir and judge doneness—sometimes pushing an extra boil you did not intend."
    },
    {
      "q": "Can I rescue a grainy filling?",
      "a": "Sometimes partially: blending and passing through a fine sieve removes fibrous bits but will not fix true starch clumps or sugar crystals. If the batch is for family and not competition, fold in a little warm fruit puree or a thin fluid gel to smooth perception."
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Tough",
      "path": "/pie-science/why-pie-crust-gets-tough"
    },
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ]
};

export default function WhyFruitPiesTurnGrainy() {
  return <ScienceArticlePage spec={SPEC} />;
}
