import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "one-change-rule-sauce-debugging",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "The One Change Rule for Sauce Debugging",
  "subtitle": "How to stop over-correcting and make repeatable improvements.",
  "readTime": "7 min read",
  "emoji": "🧠",
  "quickAnswer": "Make one adjustment, taste, then repeat. Multivariable panic destroys signal—you cannot learn which lever fixed the sauce if you pull three at once.",
  "intro": "Most sauce failures get worse because cooks apply multiple corrections at once. That hides causality and makes recipes impossible to replicate. The one-change rule is not dogma for its own sake; it is how you preserve information. Professional kitchens rely on single-variable iteration because it compounds knowledge fast and reduces waste: you know whether salt, acid, heat, or body moved the needle. SenseiFood pairs this habit with the balance wheel mentally—pick one axis, move it a little, taste, log what happened, then decide the next axis. Your palate is a noisy instrument; stacking changes turns noise into chaos.",
  "sections": [
    {
      "heading": "Why one-variable iteration wins",
      "paragraphs": [
        "Single-step adjustments preserve feedback quality. You can identify which action fixed texture, balance, or aroma when only one thing changed between spoonfuls. If you add salt, vinegar, butter, and sugar in the same minute, the sauce may taste better—and you will have learned nothing about your starting point.",
        "This discipline matters most at the end of cooking, when concentration is high and errors are expensive. Late-stage fixes are where people panic-stir the whole pantry into the pan."
      ]
    },
    {
      "heading": "Operational loop: define, change, taste, record",
      "paragraphs": [
        "Define one problem in plain language: “thin,” “harsh,” “flat,” “oily,” not “weird.” Choose one correction that maps to that symptom. Taste. If you did not move the symptom, undo mentally—do not stack—and try the next hypothesis.",
        "Keep a one-line note when you are chasing a stubborn batch: time, heat level, what you added, and result. Phones make fine lab notebooks; voice memos work when hands are sticky."
      ],
      "tip": "Make ONE adjustment → taste → repeat."
    },
    {
      "heading": "Order of operations still applies inside the rule",
      "paragraphs": [
        "One change does not mean random order. If the sauce is thin because of hidden water from vegetables, fix concentration before you fix salt, or you will chase seasoning through a moving target. The One Change Rule cooperates with reduction-first logic—it does not replace it.",
        "Similarly, if an emulsion is broken, stabilize structure before you tune acid. Fixing taste on a split sauce is like tuning a guitar with a loose tuning peg."
      ],
      "bullets": [
        {
          "title": "Thin and weak",
          "text": "Reduce or thicken first, then season—salt reads differently at different solids levels."
        },
        {
          "title": "Oily surface",
          "text": "Address emulsion recovery (warm liquid, whisk, gentle heat) before adding fat to “fix mouthfeel.”"
        }
      ]
    },
    {
      "heading": "Benchmarks that make comparisons fair",
      "paragraphs": [
        "Taste at service temperature when possible. Hot sauce hides some acids; cold sauce can read sharper. If you compare two trials, match temperature and resting time—otherwise you are judging two different dishes.",
        "For reheated sauces, reheat the same way between trials. Microwave bursts and gentle stovetop recovery change emulsion and volatile perception."
      ]
    },
    {
      "heading": "When to break the rule (rarely)",
      "paragraphs": [
        "Emergency rescue sometimes needs two moves: for example, cutting heat and adding warm stock to stop a scorching reduction. Even then, treat it as one intervention—“stop thermal damage”—then return to single-variable seasoning.",
        "If you are teaching someone, still narrate one primary lever so the lesson lands. Helpers learn faster when they can trace cause."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I only have time for one fix before service—what should it be?",
      "a": "Pick the fix that addresses the biggest customer-facing flaw: broken texture before micro-balance, dangerous bitterness before salt nuance. Within that priority, still do one move if you can—half a ladle of stock to save a split pan is one coherent intervention."
    },
    {
      "q": "Does the one-change rule apply to baking too?",
      "a": "The same information theory applies: change one variable per bake when you are debugging. Sauce work is just faster feedback, so the habit is easier to practice there first."
    },
    {
      "q": "My sauce improved but I do not know why—what now?",
      "a": "Reconstruct: list what you changed since the last taste in order. If you truly cannot tell, remake a small control batch and change one variable deliberately to confirm."
    }
  ],
  "related": [
    {
      "title": "Order of Operations",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    },
    {
      "title": "Reduction Curve",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "recipes-fail"
  }
};

export default function OneChangeRuleSauceDebugging() {
  return <ScienceArticlePage spec={SPEC} />;
}
