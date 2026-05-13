import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-build-healthier-kids-meals-without-food-fights',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Build Healthier Kids Meals Without Food Fights',
  subtitle:
    'Calm structure beats showdowns: adults decide what is on the table and when; kids decide how much from what is offered. That division sounds simple because it is—predictable meals, kind boundaries, and trust that bodies can sense fullness when adults stop negotiating every bite like a contract negotiation.',
  readTime: '9 min read',
  emoji: '🍽️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve a safe food alongside a small portion of something newer. Turn screens off, sit together when you can, and avoid dessert-as-bribe loops that teach sweets are trophies for surviving vegetables. Short-order cooking four different dinners trains everyone to expect chaos; one base meal with sauces on the side often lowers heat. Growth concerns belong to your pediatrician with a chart, not to internet comment sections.',
  intro:
    "Food fights train everyone to dig in harder. Kids learn that the table is a battleground; adults learn to yell louder. Over time, nutrition becomes a control issue instead of a shared rhythm.\n\nHealthier meals, in the real world, are less about kale purity and more about repeatability: enough protein for growth, enough fiber for steady energy, enough joy that the pattern survives Friday pizza night.\n\nThis article borrows from feeding therapy ideas without pretending one paragraph replaces a clinician. Think environment: chairs, timing, portion sizes, and whether grown-ups are eating the same foods—not lectures about “good” and “bad” foods.",
  sections: [
    {
      heading: 'Plate design that lowers stakes',
      paragraphs: [
        'Include something your child usually accepts next to a thumb-sized taste of something newer. Large unfamiliar piles read as threats; small portions read as invitations.',
        'Hunger at predictable meal times is a fine teacher when snacks are not endless grazing thirty minutes before dinner.',
      ],
    },
    {
      heading: 'Environment beats lectures',
      paragraphs: [
        'Kids copy calm more than slogans. When adults eat vegetables without commentary, exposure happens quietly. When phones disappear, attention returns to chewing and fullness cues.',
        'Chairs that fit, cups that do not tip constantly, and reasonable meal lengths respect nervous systems. Twenty minutes can be enough for many young kids.',
      ],
      tip: 'If dessert exists, consider serving a small portion with the meal sometimes so it stops being forbidden treasure at the end of a performance.',
    },
    {
      heading: 'Language that does not moralize food',
      paragraphs: [
        'Call foods by their names—broccoli, bread, chicken—instead of “clean” or “junk.” Moral language trains shame loops that often boomerang into sneaking and chaotic eating later.',
      ],
    },
    {
      heading: 'Snacks: the silent architect of dinner',
      paragraphs: [
        'Liquid calories and constant crackers can flatten real hunger. Structured snacks with protein and fruit often make dinner calmer than “no snacks ever” or “open pantry all afternoon.”',
      ],
    },
    {
      heading: 'Special cases: athletes, neurodivergence, anxiety',
      paragraphs: [
        'Some kids need more predictability, different textures, or more calories than parents expect. Individualized help is not failure—it is matching the plan to the kid.',
      ],
    },
    {
      heading: 'Adult sanity is part of the system',
      paragraphs: [
        'You do not owe the internet a perfect family table. Aim for enough peace that most people eat most days. Leftovers for breakfast and cereal-for-dinner nights still count as structure if the tone stays kind.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Dessert if they finish vegetables?',
      a: 'It often teaches that sweets are morally superior to vegetables. Neutral dessert timing or dessert-with-meal strategies work better for many families.',
    },
    {
      q: 'Growth worries?',
      a: 'Bring concerns early to your pediatrician with a simple food log—not to prove you are a good parent, to give data.',
    },
    {
      q: 'My kid only eats five foods.',
      a: 'That can be a phase or a signal—get support if the list is shrinking or mealtimes are traumatic.',
    },
    {
      q: 'Should kids eat the same dinner as adults?',
      a: 'Often yes, with tweaks: deconstructed tacos, sauce on the side, milder spice. Separate adult “diet culture” meals can accidentally teach kids that normal food is “kid food.”',
    },
  ],
  related: [
    { title: 'Why Kids Reject Vegetables', path: '/nutrition-science/why-kids-reject-vegetables' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function HowToBuildHealthierKidsMealsWithoutFoodFights() {
  return <ScienceArticlePage spec={SPEC} />;
}
