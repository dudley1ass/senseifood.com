import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "one-change-rule-sauce-debugging",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "The One Change Rule for Sauce Debugging",
  "subtitle": "How to stop over-correcting and start making fixes that actually teach you something about your cooking.",
  "readTime": "7 min read",
  "emoji": "🧠",
  "quickAnswer": "Make one adjustment, taste, then decide whether to make the next one. If you panic and pull three levers at once — salt, acid, sugar, fat — the sauce might taste better but you will have no idea which move worked, and you cannot reproduce the success next time.",
  "intro": "Most sauce failures get worse because cooks pile on multiple corrections at once. That hides cause and effect and makes recipes impossible to repeat. The one-change rule is not a discipline for its own sake — it is the way you keep useful information in the kitchen. Professional cooks rely on single-variable iteration (changing one thing at a time) because it compounds knowledge fast and reduces waste. When only one variable changed between this taste and the last one, you know whether it was salt, acid, heat, or body that moved the needle. SenseiFood pairs this habit with the balance wheel mentally: pick one axis, move it a little, taste, note what happened, and only then decide which axis to touch next. Your palate is a noisy instrument — taste fatigue, dish temperature, and what you ate an hour ago all shift your readings — and stacking changes turns that noise into pure chaos.",
  "sections": [
    {
      "heading": "Why one-variable iteration wins",
      "paragraphs": [
        "Changing one thing at a time preserves the quality of the feedback you get from each taste. You can actually identify which action fixed the texture, the balance, or the aroma, because only one thing moved between spoonfuls. If you add salt, vinegar, butter, and sugar all in the same minute, the sauce may genuinely taste better at the end — and you will have learned nothing about your starting point, which means the next time the same problem appears you are guessing all over again. This discipline matters most at the end of cooking, when concentration is high (a small spoon of any seasoning has a big effect on a reduced sauce) and errors are expensive. Late-stage fixes are exactly where most home cooks panic-stir the whole pantry into the pan."
      ]
    },
    {
      "heading": "Operational loop: define, change, taste, record",
      "paragraphs": [
        "Define the problem in plain words: \"thin,\" \"harsh,\" \"flat,\" \"oily,\" not \"weird\" or \"off.\" The more specific the description, the easier it is to pick a matching fix. Choose one correction that maps to that symptom: salt for flat, dilution for harsh, reduction for thin. Taste. If the symptom did not move, treat the change as cancelled — do not stack another fix on top — and try the next hypothesis. Keep a one-line note on stubborn batches: time, heat level, what you added, what happened. Phones make perfectly fine lab notebooks, and voice memos work when your hands are sticky with sauce."
      ],
      "tip": "Make ONE adjustment → taste → repeat."
    },
    {
      "heading": "Order of operations still applies inside the rule",
      "paragraphs": [
        "One change does not mean random order. If the sauce is thin because of hidden water from vegetables that purged moisture into the pan, fix the concentration first or you will chase seasoning through a moving target — every minute of further reduction makes a salt addition feel different. The One Change Rule cooperates with reduction-first logic; it does not replace it. The same principle applies to texture: if an emulsion is broken (oil separated from water), stabilize the structure before tuning the acid. Fixing taste on a split sauce is like tuning a guitar with a loose tuning peg — even when you get the right note in the moment, the underlying problem rebounds and the work was wasted."
      ],
      "bullets": [
        {
          "title": "Thin and weak",
          "text": "Reduce or thicken first, then season — salt reads differently at different dissolved-solids levels, so seasoning a thin sauce sets you up to over-salt as you reduce."
        },
        {
          "title": "Oily surface",
          "text": "Address the emulsion recovery — warm liquid, whisk, gentle heat — before adding more fat to \"fix mouthfeel.\" The mouthfeel problem is broken structure, not low fat."
        }
      ]
    },
    {
      "heading": "Benchmarks that make comparisons fair",
      "paragraphs": [
        "Taste at the temperature the sauce will actually be served at. Hot sauce mutes some acid and salt cues because heat reduces the sensitivity of taste receptors in subtle ways, while cold sauce can read sharper. If you are comparing two trials of the same sauce, match the temperature and the resting time between making it and tasting — otherwise you are judging two different dishes and calling one a winner for the wrong reason. For reheated sauces, reheat the same way each time. A sauce loosened with a splash of stock on the stove tastes different from one nuked in the microwave, because heat distribution, evaporation, and emulsion stability all behave differently."
      ]
    },
    {
      "heading": "When to break the rule (rarely)",
      "paragraphs": [
        "Emergency rescue sometimes needs two moves at once: cutting the heat and adding warm stock to stop a scorching reduction is really one intervention with two hands. Even then, treat it as a single conceptual change — \"stop thermal damage\" — and return to single-variable seasoning the moment the immediate crisis passes. If you are teaching someone else at the same time, narrate the primary lever you are pulling so the lesson lands: \"We are cooling the pan first because heat is the cause; we will reseason after.\" Helpers learn faster when they can trace cause and effect, and the rule is as much a teaching tool as a debugging tool."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I only have time for one fix before service — what should it be?",
      "a": "Pick the fix that addresses the biggest customer-facing flaw. Broken texture comes before micro-balance — no one cares whether a hollandaise has perfect lemon balance if it has visibly split into oil and water. Dangerous bitterness comes before salt nuance — a bitter sauce is unpleasant in a way a slightly under-salted sauce is not. Within that priority, still try to make one coherent intervention rather than a flurry. A small ladle of warm stock to save a split pan is one change, not three."
    },
    {
      "q": "Does the one-change rule apply to baking too?",
      "a": "Yes — the same information-theory principle applies. Change one variable per bake when you are debugging, whether it is flour brand, hydration percentage, fermentation time, or oven temperature. Sauce work is just faster feedback (minutes instead of hours), so the habit is easier to practice there first. Once it is automatic at the stove, it transfers naturally to the oven."
    },
    {
      "q": "My sauce improved but I do not know why — what now?",
      "a": "Reconstruct what happened, in order. List the changes you made between the last problem taste and the success taste, write them down honestly, and look at the sequence. If you genuinely cannot tell, remake a small control batch from your original starting point and change one of the candidate variables deliberately. It is more work now but cheaper than spending months guessing every time the problem comes back."
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
