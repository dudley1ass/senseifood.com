import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-debug-cookie-batch-issues',
  segment: 'cookie-science',
  categoryLabel: 'Cookie Science',
  title: 'How to Debug Cookie Batch Issues',
  subtitle:
    'When the tray comes out wrong—too thin, too thick, uneven, or oddly textured—name the family of symptom first, then let the tool and the deep dives narrow the cause.',
  readTime: '7 min read',
  emoji: '🍪',
  fixRecipe: { category: 'cookie', problem: 'general' },
  quickAnswer:
    'Split failures into spread, structure, browning, and mouthfeel. Note butter temperature, chill, and whether the whole sheet failed the same way. Then open Fix My Recipe on Cookies with the closest problem and add grams if you can.',
  intro:
    'Cookies are honest: they show fat mobility, sugar behavior, and gluten development in one thin disk. Debugging goes faster when you treat the tray like a witness statement instead of a personal insult. If every cookie tells the same story, your process or formula moved. If only one tells a weird story, look at scoop shape, pan hot spots, or a single mis-measured add-in before you rewrite the card.',
  sections: [
    {
      heading: 'Symptom families and what usually moved',
      paragraphs: [
        'These are starting points, not verdicts—always verify scale and oven temperature when the whole sheet agrees.',
      ],
      bullets: [
        {
          title: 'Spreads like a pancake',
          text: 'Warm dough or soft butter, high sugar mobility, or low structure—chill and/or a modest flour adjustment on the next test.',
        },
        {
          title: 'Barely moves / hockey pucks',
          text: 'Low fat versus flour, a heavy cup of flour, or dough too cold to flow before the structure sets.',
        },
        {
          title: 'Edges done, center raw',
          text: 'Pan and oven coupling—try a smaller scoop, a lighter pan, or a longer gentler bake.',
        },
        {
          title: 'Uniform disappointment across the sheet',
          text: 'Measurement or temperature drift, not bad luck. Verify scale, butter band, and oven truth before chasing exotic tweaks.',
        },
      ],
    },
    {
      heading: 'Why grams help here',
      paragraphs: [
        'Enter flour, butter, and total sugars in grams when the recipe allows. The debugger flags low-versus-high fat-to-flour style ratios that often explain spread surprises, then points you at the same rules you would reason through by hand—only faster.',
      ],
    },
    {
      heading: 'After you pick a lever',
      paragraphs: [
        'Change one thing, rebake, write one line. The companion guides in baking science explain why that habit matters; the cookie articles below go symptom by symptom.',
      ],
    },
  ],
  faqs: [
    {
      q: 'One cookie weird or the whole sheet?',
      a: 'Singles point to scoop shape or oven hot spots. Uniform issues point to formula or process temperature.',
    },
    {
      q: 'Do I need a scale?',
      a: "Highly recommended for repeatability. Volume flour is the silent variable between your cookie and the author's.",
    },
  ],
  related: [
    { title: 'Why Cookies Spread', path: '/cookie-science/why-cookies-spread' },
    { title: 'Why Cookies Spread Too Much', path: '/cookie-science/why-cookies-spread-too-much' },
    { title: "Why Cookies Don't Spread", path: '/cookie-science/why-cookies-dont-spread' },
    { title: 'How to Use Fix My Recipe', path: '/baking-science/how-to-use-fix-my-recipe' },
  ],
};

export default function HowToDebugCookieBatchIssues() {
  return <ScienceArticlePage spec={SPEC} />;
}
