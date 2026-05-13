import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-build-balanced-family-meals',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Build Balanced Family Meals',
  subtitle:
    'Balanced eating is not aesthetic Instagram bowls; it is steady energy, enough fiber that digestion stays friendly, and enough protein so people are not prowling the kitchen an hour later. A simple plate scaffold—plants, protein, starch, fat you enjoy—survives busy weeks because it bends to your culture and your grocery store, not the other way around.',
  readTime: '9 min read',
  emoji: '🍽️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Start with protein and produce, then add a whole grain or potatoes. Serve family style when you can so seconds are a choice, not autopilot. Let kids choose portions from what you serve—same base meal, sauces on the side for picky eaters. Swap labels for what your table actually eats: rice, tortillas, dal, noodles, and stew all fit the same scaffolding.',
  intro:
    "Families fight less when the system is clear: here is tonight’s meal; here is the one safe side for nervous eaters; here is the water pitcher. Chaos grows when adults improvise four separate dinners while hangry kids orbit.\n\nBalance also means emotional balance—meals worth sitting down for. Fat carries flavor; starch carries tradition; vegetables carry fiber and color. None of those roles require shame.\n\nThis article keeps portions human. You are not running a restaurant; you are feeding people who have homework, jobs, and feelings about cilantro.",
  sections: [
    {
      heading: 'A template you can repeat without boredom',
      paragraphs: [
        'Sheet-pan protein plus two vegetables plus one starch feeds different appetites without five separate menus. Think halves and quarters visually: roughly half plants, a quarter protein, a quarter starch, plus a satisfying fat.',
      ],
    },
    {
      heading: 'Cultural foods count as “balanced”',
      paragraphs: [
        'The plate method is a shape, not a mandate for broccoli specifically. Beans and rice, noodle soups, tagines, and curries already bundle protein, plants, and starch—sometimes you are just naming what you already do.',
      ],
      tip: 'If one family member needs more calories—teen athletes—add rice, bread, or a second protein portion rather than inventing a second cuisine.',
    },
    {
      heading: 'Picky eaters and the “safe food” rule',
      paragraphs: [
        'Include something each person usually eats while still serving the family meal. Exposure without pressure beats short-order cooking that trains kids to hold out.',
      ],
    },
    {
      heading: 'Budget levers that still feel like dinner',
      paragraphs: [
        'Eggs, canned beans, lentils, frozen vegetables, canned fish, and cabbage stretch plates without a lecture. Spices and citrus make low-sodium food still taste alive.',
      ],
    },
    {
      heading: 'Timing: the forgotten ingredient',
      paragraphs: [
        'Regular-ish meal times help kids notice hunger and fullness. Grazing all afternoon can flatten dinner appetite and spark fights nobody wanted.',
      ],
    },
    {
      heading: 'When “balanced” becomes obsessive',
      paragraphs: [
        'If tracking macros steals joy or spikes anxiety, loosen the system. Sustainable family meals are kinder than perfect ones that collapse by Thursday.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Picky eaters?',
      a: 'Include a safe food every night; exposure without pressure beats short-order cooking.',
    },
    {
      q: 'Budget?',
      a: 'Beans, eggs, frozen vegetables, and canned fish stretch plates without shame.',
    },
    {
      q: 'One vegetarian in the house?',
      a: 'Build the base around shared sides; add protein options that fit everyone without two full separate meals when possible.',
    },
    {
      q: 'Do kids need different meals?',
      a: 'Usually not—deconstruct, mild spice, sauces on the side. Special medical diets are the exception.',
    },
  ],
  related: [
    { title: 'Why Meal Prep Actually Works', path: '/nutrition-science/why-meal-prep-actually-works' },
    { title: 'Why Family Dinners Matter', path: '/nutrition-science/why-family-dinners-matter' },
  ],
};

export default function HowToBuildBalancedFamilyMeals() {
  return <ScienceArticlePage spec={SPEC} />;
}
