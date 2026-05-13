import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-crash-diets-fail',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Crash Diets Fail',
  subtitle:
    'Extreme cuts wake hunger hormones, trim muscle alongside fat, and teach your brain that restraint equals misery—so rebounds are biology meeting a harsh plan. Crash diets sell speed; bodies respond with slower metabolism per pound lost, louder cravings tuned to quick energy, and fatigue that makes movement harder. That is not weakness; it is homeostasis doing its job.',
  readTime: '9 min read',
  emoji: '⚖️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for modest deficits you can keep for months, protein at each meal, resistance training, and enough sleep so fatigue does not hijack appetite. Slow change preserves muscle and sanity better than a dramatic two-week sprint. Medically supervised rapid plans exist for specific cases—self-prescribed extremes are the risky default. Plateaus are normal; adjust one lever at a time with patience.',
  intro:
    "The marketing promise is simple: cut hard, lose fast, feel in control. The lived experience is often hunger, irritability, social isolation, and a rebound that feels like failure when it is mostly predictable physiology.\n\nMuscle loss during aggressive restriction lowers the calories you burn at rest and makes ordinary life feel harder—stairs, groceries, mood. Fiber and protein help many people feel less “white-knuckling” while still changing habits.\n\nThis article is not anti-change; it is anti pretending that cruelty is a strategy. Gentler slopes stick because they still let you live your week.",
  sections: [
    {
      heading: 'What fights back: hormones, muscle, and movement',
      paragraphs: [
        'Leptin and ghrelin shift with weight loss in ways that can increase hunger signals. Non-exercise activity thermogenesis—fidgeting, pacing, standing—often drops when people are depleted, lowering daily burn without you noticing.',
        'Muscle is metabolically active tissue; losing it quietly makes maintenance harder.',
      ],
    },
    {
      heading: 'The psychological cost of all-or-nothing',
      paragraphs: [
        'Rigid rules train brains that restraint equals misery, so the first slip becomes a binge instead of a blip. Flexible plans survive birthdays and bad weeks.',
      ],
    },
    {
      heading: 'What tends to work better for many people',
      paragraphs: [
        'Protein plus fiber, strength training, realistic grocery lists, repeatable breakfasts, and enough sleep so appetite cues are not hijacked by fatigue.',
      ],
      tip: 'Borrow Fix My Recipe’s “one variable at a time” habit: change dinner portions or add a walk after lunch—track how you feel for two weeks before adding the next lever.',
    },
    {
      heading: 'Why “willpower” is the wrong villain',
      paragraphs: [
        'Willpower is a limited resource in a loud food environment. Design beats heroics: keep washed fruit visible, keep protein cooked, keep ultrapalatable snacks a little harder to reach.',
      ],
    },
    {
      heading: 'Medical supervision matters for some paths',
      paragraphs: [
        'Clinicians sometimes use structured rapid programs with monitoring—different from internet extremes. Diabetes medications and other conditions change safety; personalize.',
      ],
    },
    {
      heading: 'Plateaus without panic',
      paragraphs: [
        'Weight change is not linear. Water shifts, menstrual cycles, salt, and stress all move the scale. Zoom out to monthly trends before you slash calories again.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is any fast loss okay?',
      a: 'Medically supervised plans exist for specific cases—self-prescribed extremes are the risky default.',
    },
    {
      q: 'Plateaus?',
      a: 'Normal; adjust one lever at a time with patience rather than panic-cutting.',
    },
    {
      q: 'Intermittent fasting?',
      a: 'Some people thrive; some overcompensate later—honesty about your pattern matters more than trend names.',
    },
    {
      q: 'Ozempic era?',
      a: 'Prescription medications belong to clinicians; nutrition articles cannot replace medical care or pharmacy counseling.',
    },
  ],
  related: [
    { title: 'Why High-Protein Diets Feel Easier', path: '/nutrition-science/why-high-protein-diets-feel-easier' },
    { title: 'Why Fiber Helps With Weight Control', path: '/nutrition-science/why-fiber-helps-with-weight-control' },
  ],
};

export default function WhyCrashDietsFail() {
  return <ScienceArticlePage spec={SPEC} />;
}
