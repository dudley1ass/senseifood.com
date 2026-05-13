import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'nutrition-for-busy-families',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Nutrition for Busy Families',
  subtitle:
    'Good enough beats perfect: rotisserie chicken, frozen vegetables, canned beans, and a repeating weekly rhythm feed real schedules without shame. Soccer, shifts, homework, and tiny humans do not care about your Pinterest meal plan. Nutrition for busy families is mostly logistics—fewer decisions at witching hour, more defaults that still include protein and plants.',
  readTime: '9 min read',
  emoji: '⏱️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pick two emergency dinners everyone tolerates, keep washed fruit visible, and let one weekend hour handle washing produce or batching a protein. Consistency beats novelty. Adults and kids can share the same base meal with sauces on the side or deconstructed plates. Takeout can be part of the plan when you add vegetables or fruit at home—label it strategy, not failure.',
  intro:
    "Busy family nutrition is less about superfoods and more about friction: what is in the freezer, whether the sink is clear enough to cook, and whether anyone has the bandwidth to argue.\n\nWhen systems fail, families reach for ultraprocessed speed—not because they are careless, because speed wins tired brains. The counter-move is not moralizing; it is designing defaults that are almost as fast.\n\nThis article respects money and time. Frozen vegetables, canned beans, eggs, and store shortcuts are honorable tools.",
  sections: [
    {
      heading: 'The emergency short list that saves Wednesdays',
      paragraphs: [
        'Breakfast-for-dinner, bean quesadillas, stir-fry kits, soup from the freezer, and sheet-pan sausages with frozen broccoli are meals you can cook on autopilot.',
      ],
    },
    {
      heading: 'One base meal, many plates',
      paragraphs: [
        'Sauce on the side, deconstructed tacos, and a safe food for picky eaters keep peace without short-order cooking four cuisines.',
      ],
    },
    {
      heading: 'Snacks that protect dinner appetite',
      paragraphs: [
        'Structured snacks with protein—cheese, yogurt, peanut butter on apple—beat endless grazing thirty minutes before dinner.',
      ],
      tip: 'Pack car snacks on practice nights so hangry decisions do not happen in a drive-through line alone.',
    },
    {
      heading: 'Frozen, canned, and rotisserie are not cheating',
      paragraphs: [
        'Frozen produce is often more consistent than sad fresh vegetables abandoned in the drawer. Rotisserie chicken is a protein anchor you did not have to roast.',
      ],
    },
    {
      heading: 'Takeout with a plan',
      paragraphs: [
        'Choose vegetable sides, add fruit at home, split large portions, and skip the shame spiral that triggers second rounds of “well I blew it.”',
      ],
    },
    {
      heading: 'Adult sanity is part of the system',
      paragraphs: [
        'If one parent always carries the mental load of food, burnout becomes the bottleneck. Split list-making, batching, and pickup runs when you can.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is frozen worse?',
      a: 'Frozen produce is often excellent—sometimes better than wilted fresh abandoned in the drawer.',
    },
    {
      q: 'Takeout balance?',
      a: 'Choose veg-heavy sides and protein; call it part of the plan, not failure.',
    },
    {
      q: 'Single parent time crunch?',
      a: 'Smaller repertoire, more repetition—kids often like predictability more than variety theater.',
    },
    {
      q: 'Food insecurity?',
      a: 'Use food banks and school programs without shame; advice must flex to access.',
    },
  ],
  related: [
    { title: 'Why Meal Prep Actually Works', path: '/nutrition-science/why-meal-prep-actually-works' },
    { title: 'Why Family Dinners Matter', path: '/nutrition-science/why-family-dinners-matter' },
  ],
};

export default function NutritionForBusyFamilies() {
  return <ScienceArticlePage spec={SPEC} />;
}
