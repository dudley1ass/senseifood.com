import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "white-gravy-southern",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "White Gravy (Southern Cream Gravy): Recipe & Balance Guide",
  "subtitle": "Roux and milk with aggressive black pepper — a dairy-forward comfort sauce for biscuits and fried chicken that lives or dies on heat control.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🤠",
  "quickAnswer": "Milk proteins scorch fast on a hot pan — keep a gentle bubble rather than a rolling boil. Black pepper is not garnish in white gravy; it is part of the core flavor identity, and the heat from the pepper plays against the cream the way salt plays against sugar.",
  "intro": "White gravy is roux-thickened milk with a pepper-forward personality. It should pour off a spoon like a heavy cream — not a loose béchamel that runs off a biscuit, not a paste so thick you could spread it like butter. The Sauce Sensei wheel works a little differently here than for stock gravies because milk dilutes the perception of salt differently than meat broth does. Lactose (the natural sugar in milk) reads slightly sweet on the tongue and softens how loud the salt feels, while the fat and proteins in dairy coat the tongue and slow down the registration of every other taste. That means seasoning checks happen after the sauce has tightened to its final body, not while it is still loose and flowing. You can salt a thin white gravy that tastes balanced and end up with a tight finished gravy that tastes too salty — the salinity does not change but the sauce around it gets thicker, which changes how the salt reads.",
  "sections": [
    {
      "heading": "Heat discipline",
      "paragraphs": [
        "After cooking the roux to lose the raw-flour flavor — usually a few minutes over gentle heat until the paste smells faintly toasty — add the milk in stages, whisking each addition smooth before the next. A vigorous boil at this stage breaks the emulsion (the suspended fat droplets in milk and butter come apart from the proteins holding them) and scorches dairy on the pan floor, where the bottom of the pan is much hotter than the bulk of the sauce. You want a steady, gentle bubble while the sauce thickens — small bubbles at the perimeter, slow movement at the center, no rolling chaos. Black pepper is traditional and central; add it in layers so the heat from the pepper and the aroma stay balanced with the salt. Too much pepper at once buries the salt; too little leaves the gravy reading sweet and bland."
      ]
    },
    {
      "heading": "What \"done\" feels like",
      "paragraphs": [
        "The finished sauce should coat the back of a spoon and pool slowly on a plate — fast pooling means it is too thin; refusing to spread means it is too thick. If it is runny, keep reducing patiently before adding more fat or flour; reduction tightens the body and concentrates the flavor at the same time. If it is gluey, thin with a splash of warm milk and re-season the salt because dilution lowers it. Open the Sauce Sensei builder for this variant to align your gram weights with the model's style target band for white gravy — that gives you a starting reference point if your gravy keeps landing in the wrong consistency band."
      ]
    },
    {
      "heading": "The role of pork sausage and drippings",
      "paragraphs": [
        "Many Southern cooks start white gravy in the rendered fat left over from frying breakfast sausage — that fat carries flavor that plain butter cannot match, including the smoky, savory, slightly sweet notes from the sausage seasoning and the Maillard browning (the chemistry of proteins and sugars browning under heat) that happened while the sausage cooked. The classic move is to cook the sausage, set it aside, leave a few tablespoons of the rendered fat in the pan, and whisk in the flour for the roux right in those drippings. Crumbled sausage often goes back into the finished gravy at the end. Without sausage, butter is the next-best fat — bacon drippings work too if you have them.",
        "Salt timing in this build depends heavily on whether you used sausage fat. Sausage carries plenty of salt and herbs that find their way into the gravy through the fat, so additional salting should be conservative and tasted carefully. Plain butter contributes much less salt, so you have more room to season at the end."
      ]
    },
    {
      "heading": "Service and reheating",
      "paragraphs": [
        "White gravy thickens further as it cools because milk proteins continue to set and the starch network keeps gelling. A gravy that is perfect at the stove can look tight by the time it reaches a biscuit, so err on the slightly looser side and let the natural cooling tighten it on the plate. Reheating from the fridge usually requires a splash of warm milk and patient whisking, because the gravy will have set into a near-solid in the container — straight microwaving without thinning leads to scorched milk on the bowl walls and a separated mess. Always reheat gently, and re-season at the end if the dilution from the added milk dropped the salt below threshold."
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
    "sauceId": "white-gravy"
  }
};

export default function WhiteGravySouthern() {
  return <ScienceArticlePage spec={SPEC} />;
}
