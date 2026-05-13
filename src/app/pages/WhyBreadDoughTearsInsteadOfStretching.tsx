import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-dough-tears-instead-of-stretching",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Dough Tears Instead of Stretching",
  "subtitle": "Under-hydrated gluten, cold-firm fat, or a rushed bench rest all leave the dough too tense to extend without ripping.",
  "readTime": "7 min read",
  "level": "Gluten rheology",
  "emoji": "✂️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Tearing means the gluten network is too tight or too dry for the stretch you are demanding from it. The fixes are usually patience-based: a longer autolyse (a rest where flour and water sit together to fully hydrate before active mixing), a warmer dough that is more pliable, or a short bench rest that lets the gluten relax. Do not fight tears with more aggressive pulls — when you stretch faster than the gluten can flow, it snaps instead of stretching.",
  "intro": "Healthy bread dough stretches because the gluten polymers — long protein chains formed when flour proteins glutenin and gliadin combine with water — slide and rearrange under stress. Torn dough fails because the bonds locked up: instead of distributing stress across the whole sheet, the strain concentrated in one spot until a crack opened. That failure mode is common when the hydration is low for the flour you are using, when the dough is cold enough that any fat in it is still solid in small chunks, or when you try to sheet or shape dough right after a tight rounding without a bench rest. Gluten is viscoelastic, a fancy word for \"behaves partly like a spring and partly like slow honey.\" The spring-like part (elasticity) gives the dough its bounce-back; the honey-like part (viscosity, or slow flow under stress) is what lets it actually stretch instead of snapping. If your motion is faster than the slow-flow part can keep up, you measure mostly the elastic spring, and elastic things tear when pushed too far. Professional techniques like autolyse, folding, and controlled rest exist specifically to shift the balance toward extensibility (the dough's willingness to stretch) without making the dough wetter in a sloppy, hard-to-handle way. Understanding tearing as a time-and-temperature problem, rather than as a character flaw in your hands, usually fixes the drama at the bench much faster than adding random oil.",
  "sections": [
    {
      "heading": "Rest time as the hidden variable",
      "paragraphs": [
        "Bench rest is not passive waiting; it is stress relaxation in action. After you divide the dough or pull it from cold storage, the gluten strands are oriented in tight lines and somewhat \"angry\" — they want to spring back when stretched. Ten to twenty minutes of rest under a covered surface at room temperature often converts a dough that ripped under a rolling pin into one that extends smoothly, because the polymers have rearranged into a less directional network during the rest.",
        "Cold dough tears more readily because the fat phase (if any) is firmer and the water inside the dough is less mobile, so stress relaxation happens more slowly. If you must shape dough straight from the fridge, work in smaller increments: pat, wait, pat again, instead of one maximal stretch. The dough still needs to relax, just in smaller doses."
      ],
      "bullets": [
        {
          "title": "Divide first, relax second",
          "text": "Pre-shape the dough into rough shapes first, let everything rest under a cover for a short bench rest, and only then do the final shaping. The pre-shape distributes tension; the rest lets the gluten relax from the rounding; the final shape builds the actual surface tension you want."
        },
        {
          "title": "Cover to prevent skinning",
          "text": "A dry exposed surface tears in a different way than the interior — it acts almost like paper, splitting brittly while the inside still wants to flow. Keep plastic, a damp towel, or a covered container over resting dough."
        }
      ]
    },
    {
      "heading": "Hydration, autolyse, and mixing endpoints",
      "paragraphs": [
        "Under-hydrated dough can be very strong and at the same time very brittle — lots of elastic resistance, very little plastic flow. A short autolyse, mixing only flour and water together and letting them rest before adding salt and yeast, lets the bran absorb water and the gluten-forming proteins begin associating without the immediate tightening effect of salt. Salt tightens gluten by interacting with the protein structure, and adding it too early can lock the gluten in before it has a chance to fully hydrate. The result of a good autolyse is often a noticeably more extensible dough, even at the same final hydration percentage. Over-mixed lean dough can also tear, because the network becomes too uniform and tight — though this is less common in home mixers and more of a concern when chasing an ultra-smooth windowpane (the test where you stretch a small piece of dough until light passes through it without tearing)."
      ],
      "tip": "If tears appear only at the hydration that feels perfect after bulk fermentation, the problem is probably timing, not water. Finish mixing, then give the dough a short covered rest before aggressive handling, rather than chasing more structure with longer machine time."
    },
    {
      "heading": "Temperature, fat, and discontinuities",
      "paragraphs": [
        "Laminated or enriched doughs with cold butter layers fail in shear (mechanical strain pulling along a flat surface) when the fat is still solid in small platelets. The dough matrix bridges across those weak fat spots and rips along the boundaries. Warmer bench conditions — not melting, but just pliable — let the layers slide instead of crack. For oil-based enriched doughs, where the fat is liquid throughout rather than in solid layers, cold matters less for discrete chunks but still slows the gluten's stress relaxation.",
        "Eggs and sugar both tenderize gluten and change how it develops under heat. Very rich doughs sometimes tear when the gluten is under-developed relative to how much fat and egg are in the recipe. A few additional stretch-and-folds during the bulk fermentation can align gluten development with the richness of the formula."
      ]
    },
    {
      "heading": "High-hydration workflow: folds before free shaping",
      "paragraphs": [
        "Very wet doughs (high hydration) often tear on the bench not because they are dry but because of gravity: the skin slumps and overstretches locally as the soft mass tries to find its own level. Building structure with periodic coil folds (a folding technique where you lift the dough from underneath and let it fold back on itself in the container) creates a dough that holds tension when inverted, which reduces tearing during later shaping. If you must stretch wet dough in open air, use a wet bench (water on the work surface so the dough does not stick) and confident, fewer strokes rather than many timid tugs. Repeated micro-tears accumulate into a rough surface that tears more easily — the damage builds on itself."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I add oil when dough tears?",
      "a": "Oil lubricates surfaces and can help handling on a sticky bench, but it does not fix the fundamental problem of under-hydration or a skipped rest. Use small amounts of oil on the bench for stickiness, not as a substitute for proper development time or a real rest. Too much oil added to the dough itself can shorten gluten strands unpredictably and weaken structure."
    },
    {
      "q": "Why does my sourdough tear after a cold retard?",
      "a": "Cold gluten relaxes slowly and the dough firms up in the fridge. Let it warm until it is pliable to the touch, then pre-shape and bench rest before final shaping. The natural acids from sourdough fermentation also stiffen gluten slightly over time, which increases the need for patience — a long-fermented sourdough simply does not stretch like a quick-mixed white loaf."
    },
    {
      "q": "Is tearing always a sign of under-proofing?",
      "a": "Not always. Under-proofed dough can resist extension because the gluten has not had enough time to relax, but tearing also happens because of dryness, cold, or aggressive handling. Look at bubbles in the dough (signs of fermentation), the dough's jiggle when tapped (over- or under-proofed), and the dough's temperature together. Proofing is one variable in a small cluster, not the only candidate."
    }
  ],
  "related": [
    {
      "title": "Why Dough Springs Back When Shaping",
      "path": "/bread-science/why-dough-springs-back-when-shaping"
    },
    {
      "title": "Why Dough Is Too Sticky",
      "path": "/bread-science/why-dough-is-too-sticky"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadDoughTearsInsteadOfStretching() {
  return <ScienceArticlePage spec={SPEC} />;
}
