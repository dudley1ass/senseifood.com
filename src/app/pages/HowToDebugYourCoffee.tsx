import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-debug-your-coffee',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'How to Debug Your Coffee',
  subtitle:
    'Bitter, sour, weak, and hollow cups usually come from a small set of extraction and strength mistakes. Here is how to name what you taste and which lever to move first.',
  readTime: '7 min read',
  emoji: '☕',
  fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
  quickAnswer:
    'Classify the cup: bitter or dry usually means you pushed extraction too hard; sour or thin often means not enough; weak is dose versus water. Change one brew lever per session—grind, time, temperature, or ratio—and log it. Coffee mode in Fix My Recipe matches those buckets to starter moves.',
  intro:
    'Espresso, pour-over, and immersion share the same vocabulary: how strong the cup is versus how much you extracted from the grounds. You do not need lab gear to debug; taste already points left or right on those axes. This page is a tasting map plus a reminder to move one variable at a time so the next cup teaches you something.',
  sections: [
    {
      heading: 'What you taste and what to try first',
      paragraphs: [
        'Think of these as compass directions, not laws—beans, water, and gear still matter—but they stop the spiral of random knob turning.',
      ],
      bullets: [
        {
          title: 'Harsh bitter or dry finish',
          text: 'Often over-extraction or too fine a grind. Coarsen slightly or shorten contact before you change dose and grind together.',
        },
        {
          title: 'Sour, sharp, or salty acidity',
          text: 'Often under-extraction. Finer grind or longer brew within reason—still one lever per session.',
        },
        {
          title: 'Weak or tea-like',
          text: 'Low strength. More dose or less water before you chase grind extremes.',
        },
        {
          title: 'Flat or cardboard',
          text: 'Staling or water issues sit beside pure extraction. Fresh grind, check bypass, and taste your filter water.',
        },
      ],
    },
    {
      heading: 'Fix My Recipe as a tasting translator',
      paragraphs: [
        'Choose Coffee and the problem that matches your vocabulary. The findings restate the same physics the extraction articles cover—use them when you want a checklist instead of scrolling every long read at once.',
      ],
      tip: 'Changing grind and dose in the same session hides cause and effect. Move grind or dose, taste, log it, then compose deliberately once you know each lever’s signature.',
    },
    {
      heading: 'When the machine limits you',
      paragraphs: [
        'On espresso, yield and time remain levers; on manual brew, bloom and pour rate still move one axis at a time. Locked recipes still reward the same discipline.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Change grind and dose together—bad idea?',
      a: 'For debugging, yes. Move grind or dose, taste, log it, then combine later once you know what each did.',
    },
    {
      q: 'My machine is locked in—what then?',
      a: 'Use yield and time on espresso; bloom and pour rate on manual brew—still one variable at a time.',
    },
  ],
  related: [
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Coffee Tastes Bitter', path: '/coffee-science/why-coffee-tastes-bitter' },
    { title: 'Why Coffee Tastes Sour', path: '/coffee-science/why-coffee-tastes-sour' },
    { title: 'Why Coffee Tastes Weak', path: '/coffee-science/why-coffee-tastes-weak' },
    { title: 'How to Use Fix My Recipe', path: '/baking-science/how-to-use-fix-my-recipe' },
  ],
};

export default function HowToDebugYourCoffee() {
  return <ScienceArticlePage spec={SPEC} />;
}
