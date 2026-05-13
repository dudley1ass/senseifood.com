import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "spicy-tomato-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Spicy Tomato Sauce: Recipe & Balance Guide",
  "subtitle": "Tomato, chili, and vinegar — three loud voices in the same pan, balanced against fat and a careful pinch of sweet.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🌶️",
  "quickAnswer": "Chili heat (from a molecule called capsaicin, which actually binds to pain receptors on your tongue rather than taste receptors) and vinegar acid stack on top of each other in this sauce — they do not cancel each other out. Balance with fat, a small touch of sweet, and careful salt timing. Add vinegar in small doses you can walk back, because dilution to fix excess acid is slow and expensive.",
  "intro": "Spicy tomato sauces walk a tightrope. Chili adds heat, vinegar adds brightness, and the tomatoes themselves bring acid and body. Fat carries flavor and softens the burn (capsaicin is fat-soluble — it dissolves into oils rather than water, which is why dairy and oil cool spicy heat more effectively than water does). Sugar is sometimes the bridge between sharp and pleasant. The Sauce Sensei wheel keeps you from fixing the wrong axis — more salt will not cure brutal acid if the real issue is unbalanced vinegar, and more sugar will not fix missing savoriness if the umami is thin underneath everything. Layer chiles for flavor depth, not just for Scoville rating (the standard scale of chili heat, which measures only how much capsaicin is in the pepper — not what else is going on flavor-wise). Bloom dried chiles in hot oil, toast spices to wake their volatile aromas, and add the acids late enough to keep their fresh top notes. Resting the sauce overnight often integrates the heat and the acid, but volatile top notes (the lightest aroma molecules that smell freshest) fade in the fridge — plan a fresh herb or citrus finish at service if brightness matters as much as burn. And taste with your protein in mind: heat reads hotter on delicate fish than it does on fatty pork, because the fat dampens the capsaicin signal.",
  "sections": [
    {
      "heading": "Layer heat: flavor burn versus dumb burn",
      "paragraphs": [
        "Bloom dried chiles in oil or cook fresh chiles with the aromatics to develop their full flavor, not just their raw burn. Toasted chile notes read complex, with smoky, fruity, or floral elements depending on the variety. Raw chili powder dumped into a sauce late tastes harsh and one-dimensional, because none of the volatile aroma compounds have had heat or time to develop and the capsaicin is just sitting on top. Both capsaicin heat and acid concentrate as the sauce reduces, so taste often as water leaves — especially if you started with an aggressive vinegar. The same vinegar that was bright at the start of cooking can read like a slap by the time the sauce has reduced by a third."
      ]
    },
    {
      "heading": "Vinegar discipline",
      "paragraphs": [
        "Add vinegar in controlled doses. You can always add more, but dilution is slow and dilutes everything else along with the acid — you cannot subtract sourness without subtracting your other seasoning at the same time. Different vinegars carry different aromatic profiles. Apple cider vinegar is fruity and slightly sweet. Red wine vinegar is sharp and assertive. Sherry vinegar is mellower and almost nutty. Match the vinegar to the cuisine context. If your sauce is already tomato-acid-forward (canned tomatoes have a lot of malic and citric acid built in), your total acid budget is already tight. Adding lemon juice behaves differently from adding vinegar because the dominant acid in lemon is citric, which reads brighter and more floral against the acids already in the tomato."
      ],
      "tip": "If the heat and acid both feel loud, try fat and a small sweet touch before reaching for more salt — fat and sugar mute capsaicin and acid more effectively than salt can."
    },
    {
      "heading": "Tomato product choice",
      "paragraphs": [
        "Canned tomatoes vary wildly in acidity, salt content, and texture. Whole peeled tomatoes are usually the cleanest base — you control the salt yourself and they break down to the consistency you want. Tomato puree starts thicker and reduces faster but can taste slightly cooked already. Crushed tomatoes split the difference. Taste straight out of the can before building your sauce plan around a single brand, because a switch to a different brand can shift everything else you do. Tomato paste browned briefly in fat before liquid joins the pan adds savory depth — the brief sear develops Maillard browning on the paste, which converts the raw tomato note into something deeper and richer. Raw paste dropped into the pan without that step can taste slightly tinny."
      ],
      "bullets": [
        {
          "title": "Sugar",
          "text": "A pinch rounds off harsh acid by giving your tongue something else to read on the sweet receptors — but a tablespoon turns the profile sweet-hot, which is a different sauce entirely. Decide intentionally whether you are building a sweet-and-spicy or a savory-spicy."
        }
      ]
    },
    {
      "heading": "Fat, protein pairing, and service",
      "paragraphs": [
        "Spicy tomato sauces pair naturally with rich proteins, where the fat in the meat moderates the heat and lets the bright acid pop. If the sauce reads too sharp when you taste it on the wheel, fat at the finish — a swirl of good olive oil, a knob of cold butter — or sweetness in tiny increments often lands better than yet another pinch of salt. Serve with cooling contrasts on the plate when the heat is intentionally high: crema, sour cream, queso fresco, fresh herbs. Capsaicin lingers on the tongue long after the bite, and a small cool element acts almost like a reset between mouthfuls."
      ]
    },
    {
      "heading": "Simmer time, body, and finishing",
      "paragraphs": [
        "A long simmer integrates aromatics and concentrates dissolved solids, which is what gives a real sauce its body. A thin sauce plus raw heat reads like hot vinegar — unpleasant, sharp, lacking the rounded structure that makes spice satisfying instead of just punishing. Reduce until the sauce coats the back of a spoon and pools slowly on a plate before making final acid adjustments. Finish delicate herbs at the very end; tougher herbs like oregano can stand more simmer time than tender herbs like basil, which collapse and turn dark green if they sit in hot liquid for more than a minute."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is my spicy tomato sauce more hot than tasty?",
      "a": "Heat without supporting aromatics — you have plenty of capsaicin and not much else for it to ride on. Add toasted whole or ground chiles (the toasting unlocks aromatic compounds), more alliums (onion, garlic, shallot) cooked patiently for depth, and umami carriers in small amounts: a melted anchovy, a splash of fish sauce, a parmesan rind simmered in the pot. Build depth before raising the Scoville rating again, or you end up with a sauce that is increasingly painful and decreasingly delicious."
    },
    {
      "q": "Can I cut acidity without sugar?",
      "a": "Sometimes — fat, dairy, or a small pinch of baking soda can shift acid perception in different ways. Baking soda actually neutralizes some of the acid chemically (it reacts with acids to form salts and water plus carbon dioxide), but it can also flatten the sauce and turn it slightly muddy if you use too much; tiny pinches at a time, tasting after each. Dilution with good stock also helps if the body of the sauce can spare some volume."
    },
    {
      "q": "How do I reheat without losing freshness?",
      "a": "Gently, on the stove rather than in the microwave when you can — the rolling boil from microwave heating volatilizes the lighter aromatics faster than gentle stovetop warming does. Refresh the reheated sauce with a tiny splash of vinegar or a scatter of fresh herbs at the end; the volatile top notes that left during cold storage need to be replaced, not regenerated from inside the sauce."
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
    "sauceId": "tomato-sauce-spicy"
  }
};

export default function SpicyTomatoSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
