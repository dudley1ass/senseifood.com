import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-dough-tears-instead-of-stretching",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Dough Tears Instead of Stretching",
  "subtitle": "Under-hydrated gluten, cold fat, or insufficient rest limits extensibility.",
  "readTime": "7 min read",
  "level": "Gluten rheology",
  "emoji": "✂️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Tearing means the gluten network is too tight or too dry for the stretch you demand. Autolyse, warmer rest, or small water additions improve extensibility; do not fight tears with more aggressive pulls. Think of gluten as needing both strength and the time to reorient—when you stretch faster than it can relax, it snaps instead of flows.",
  "intro": "Healthy dough stretches when gluten polymers slide and rearrange under stress; torn dough fails when bonds localize stress until a crack opens. That failure mode is common when hydration is low for the flour, when the dough is cold enough that fat is still solid in chunks, or when you try to sheet or shape immediately after a tight coil without bench rest. Gluten is viscoelastic: it behaves partly like a spring (elastic) and partly like slow honey (viscous). If your motion is quicker than the viscous relaxation, you measure mostly elasticity—and elasticity tears. Professional moves like autolyse, folding, and controlled rest exist to shift the balance toward extensibility without necessarily making the dough wetter in a sloppy way. Understanding tearing as a time-and-temperature problem, not a character flaw of your hands, usually fixes the bench drama faster than adding random oil.",
  "sections": [
    {
      "heading": "Rest time as the hidden variable",
      "paragraphs": [
        "Bench rest is not passive waiting; it is stress relaxation. After division or cold storage, gluten strands are oriented and somewhat “angry.” Ten to twenty minutes covered at room temperature often converts a dough that rips under a rolling pin into one that extends smoothly because polymers have reknitted into a less anisotropic network.",
        "Cold dough tears more because the fat phase is firmer and water mobility is lower, so relaxation is slower. If you must shape straight from the fridge, accept smaller increments: pat, wait, pat again, rather than one maximal stretch."
      ],
      "bullets": [
        {
          "title": "Divide first, relax second",
          "text": "Pre-shaping and a short bench rest before final shaping give gluten a chance to even out tension from rounding."
        },
        {
          "title": "Cover to prevent skinning",
          "text": "A dry surface tears in a different way—like paper—while the interior still wants to flow; keep plastic or a damp towel on resting pieces."
        }
      ]
    },
    {
      "heading": "Hydration, autolyse, and mixing endpoints",
      "paragraphs": [
        "Under-hydrated dough can be strong yet brittle: lots of elastic resistance, little plastic flow. A short autolyse (mixing flour and water alone) lets bran hydrate and gliadin and glutenin begin associating without immediate salt tightening, which often improves extensibility before you finish mixing.",
        "Over-mixed lean dough can also tear because the network is too uniform and tight—less common in home mixers for wet doughs but worth remembering if you chase an ultra-smooth windowpane at any cost."
      ],
      "tip": "If tears appear only at the same hydration that feels perfect after bulk, the issue may be timing: finish mixing, then allow a short covered rest before aggressive handling rather than chasing structure solely with more machine time."
    },
    {
      "heading": "Temperature, fat, and discontinuities",
      "paragraphs": [
        "Laminated or enriched doughs with cold butter layers fail in shear when fat is still platelet-solid: the dough matrix bridges across weak spots. Warmer bench conditions (not melting—just pliable) let layers slide instead of crack. For oil-based enriched doughs, cold is less about discrete chunks but still slows relaxation.",
        "Eggs and sugar tenderize and change gluten development kinetics; very rich doughs sometimes tear when gluten is under-developed relative to fat content. A few more stretch-and-folds during bulk can align development with richness."
      ]
    },
    {
      "heading": "High-hydration workflow: folds before free shaping",
      "paragraphs": [
        "Wet doughs often tear on the bench not from dryness but from gravity: the skin slumps and overstretches locally. Building structure with periodic coil folds in the container creates a dough that holds tension when inverted, reducing rips during later shaping.",
        "If you must stretch in open air, use a wet bench and confident, fewer strokes rather than many timid tugs—repeated micro-tears accumulate into a rough surface that tears even more."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I add oil when dough tears?",
      "a": "Oil lubricates surfaces and can help handling, but it does not fix fundamental under-hydration or skipped rest. Use tiny amounts on the bench for stickiness, not as a substitute for rest or proper development—too much fat can shorten gluten strands unpredictably."
    },
    {
      "q": "Why does my sourdough tear after cold retard?",
      "a": "Cold gluten relaxes slowly and the dough firms. Let it warm until pliable, then pre-shape and bench rest before final shaping. Acid stiffens gluten slightly over time as well, which increases the need for patience."
    },
    {
      "q": "Is tearing always a sign of under-proofing?",
      "a": "Not always. Under-proofed dough can resist extension, but tears also happen from dryness, cold, or aggressive handling. Look for bubbles, jiggle, and dough temperature together—proofing is one variable among several."
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
