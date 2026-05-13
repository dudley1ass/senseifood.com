import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "mushroom-cream-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Mushroom Cream Sauce: Recipe & Balance Guide",
  "subtitle": "Cream, butter, and mushrooms — an umami-forward cream sauce for pasta and chicken whose success or failure is decided in the mushroom sauté.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍄",
  "quickAnswer": "Brown the mushrooms properly first, before anything else hits the pan. Mushrooms are around 90 percent water, and that water steals heat and flavor from the rest of the sauce until it cooks off. Patience in the sauté step shows up as deep savory body in the finished sauce.",
  "intro": "Mushroom cream sauce succeeds when the mushrooms are cooked to real color and the cream simmers gently around them. Mushrooms are mostly water — their cell walls hold so much that when you crowd them in a pan, they release a watery pool faster than the heat can evaporate it, and they end up steaming in their own juice rather than browning. Steamed mushrooms are pale, soft, and flavorless next to browned mushrooms, where the high dry heat lets Maillard chemistry happen (the same reaction that makes seared meat smell so good — amino acids and sugars on a hot surface rearranging into hundreds of new aroma compounds). That browning is also where the fond — the dark, caramelized residue that sticks to the pan — comes from, and the fond is one of the biggest contributors to the savor of the finished cream sauce. Give the mushrooms space, accept that the first batch in a small pan takes time, and you will taste the difference in every bite.",
  "sections": [
    {
      "heading": "Build savor first",
      "paragraphs": [
        "Spread the mushrooms in a single layer with real space between them — avoid crowding on the first pass even if it means cooking in batches. Let the moisture evaporate, listen for the sound of the pan moving from a wet sizzle to a sharper, drier sizzle, and watch until real golden-brown color builds on the cut faces and a thin layer of fond starts to form on the pan bottom. Only then does the cream have a concentrated base to thicken against. Garlic and butter join later, but be careful: garlic burns easily once the pan is dry and hot, going from sweet to bitter in seconds, and butter goes from glossy nut-brown to acrid brown-black almost as fast. Use the fat phase to gently extract aromatic compounds from the garlic, not to char it."
      ]
    },
    {
      "heading": "Cream behavior",
      "paragraphs": [
        "Heavy cream — the high-fat version, around 36 to 40 percent fat — tolerates simmering much better than lower-fat dairy. The extra fat protects the milk proteins (mostly casein and whey) from clumping when the sauce reduces, because each fat droplet acts as a buffer between proteins and the high temperature of the pan. Lower-fat dairy like half-and-half will curdle and break much more readily under reduction. Even with heavy cream, aggressive boiling still risks splitting — the rough bubble action shears the emulsion apart. Reduce at a gentle bubble until the sauce coats the back of a spoon and pulls a clean line when you drag a finger through it. If you finish with parmesan cheese, expect the sauce to tighten further and the umami to deepen, because parmesan brings free glutamates (the amino acids responsible for the savory taste) that build on top of the mushroom umami already in the pan."
      ]
    },
    {
      "heading": "Building flavor layers and the right moment for liquid",
      "paragraphs": [
        "Once the mushrooms are deeply browned, deglaze the pan with a splash of dry white wine or sherry — the alcohol vaporizes off in seconds while the bright acid in the wine dissolves the fond stuck to the pan bottom. That fond is concentrated flavor, and you want every speck of it in the sauce. Let the wine reduce nearly dry before adding cream, so the sauce does not get watered down by a layer of liquid that has not had time to integrate. Then cream goes in, simmers gently, and reduces to coating consistency. Salt last, after all the reductions have happened — earlier salting on a sauce that you intend to reduce by a third or more leads to an over-salty final result, because the salt does not evaporate but the water does, so concentration climbs.",
        "Fresh herbs — thyme, tarragon, parsley — add green volatile aromas (the kind that quickly evaporate, which is why fresh herbs smell so different from dried ones) and should go in at the end so heat does not flash them off. Dried thyme works fine if you put it in earlier; it has already lost most of its volatile fraction during drying and contributes a steadier woody background note instead. Pick whichever fits the cooking timeline."
      ]
    },
    {
      "heading": "Pairings and finishing",
      "paragraphs": [
        "Mushroom cream sauces pair naturally with chicken, pork, and rich pastas like pappardelle or gnocchi — anything that can stand up to the savory weight without being overpowered. They are less natural with delicate white fish, which gets buried. If the sauce ends up too rich on the plate (everything tasting heavy and slightly numbed after a few bites), a tiny squeeze of lemon at service can cut through the fat and reset the palate. Try a single drop on a spoonful before adding any to the whole pan, since lemon can also tip a cream sauce toward curdling if you add too much too fast."
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
    "sauceId": "cream-sauce-mushroom"
  }
};

export default function MushroomCreamSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
