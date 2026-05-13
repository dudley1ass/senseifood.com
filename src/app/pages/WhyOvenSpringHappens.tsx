import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-oven-spring-happens',
  segment: 'bread-science',
  categoryLabel: 'Bread Science',
  title: 'Why Oven Spring Happens',
  subtitle:
    'That first-minute puff in the oven is mostly hot gas and steam stretching the dough while the crust is still soft—yeast gives one last push, then heat sets the shape before the loaf can change its mind.',
  readTime: '8 min read',
  emoji: '🎈',
  fixRecipe: {
    category: 'bread',
    problem: 'wont-rise',
  },
  quickAnswer:
    'Oven spring is the loaf’s early surge: bubbles of air and CO₂ from fermentation expand when they get hot, water turns to steam and adds pressure, and yeast works a little faster until the inside gets hot enough to shut the yeast down. If gluten is strong enough and the crust stays flexible for the first few minutes—steam helps—you see a visible jump before the crumb “locks.”',
  intro:
    'Home bakers call it oven spring; physicists would say you are watching a wet foam inflate under heat while the outer shell is still stretchy. In plain terms, the loaf is allowed to grow in the one window when the inside is racing ahead and the outside has not hardened into a lid yet. This piece walks through what is actually stretching (gas laws, steam, gluten), where yeast still matters, and why proofing and scoring decide whether spring looks glorious or turns into random rips. You do not need a degree—just a mental picture of pressure meeting a soft crust, then a firm one.',
  sections: [
    {
      heading: 'Hot air and steam do the heavy lifting',
      paragraphs: [
        'When dough hits a hot oven, the gas already trapped in little pockets warms up fast. Warm gas takes up more space—that is the intuitive part everyone remembers from school. Water in the dough also starts turning to steam inside those pockets, which adds extra outward push. Thousands of tiny pockets doing that at once look like the whole loaf swelled overnight, but it is really many small balloons inflating together inside a stretchy gluten net.',
        'That net has to be elastic enough to grow without tearing. Under-mixed or very weak dough can still rise a bit, then rip in odd places because the “bag material” was never uniform. Strong dough with even gluten development gives you a smoother, more predictable spring.',
      ],
    },
    {
      heading: 'Yeast’s last busy minutes',
      paragraphs: [
        'Yeast does not instantly die the second the oven turns on. For a short overlap, warmer dough means faster fermentation—more CO₂—until the interior climbs past the range where yeast is comfortable. Think of it as a final sprint, not the whole marathon. After that, expansion is mostly heat and steam, not new yeast burps.',
        'If the dough was already exhausted from sitting too long at room temperature, there is little sprint left. That is why over-proofed loaves often look sad in the oven: the bubbles were already big and fragile before heat arrived, so the loaf cannot hold a dramatic spring.',
      ],
    },
    {
      heading: 'When the loaf “sets” and spring stops',
      paragraphs: [
        'Spring ends when the crumb structure firms up enough to hold its shape. Starch absorbs water and swells with heat; proteins in gluten tighten and eventually lock. Once that happens, the loaf might still brown, but it is not going to balloon much more—outer layers turn into crust instead of stretchy skin.',
        'Under-proofed dough can spring hard, then tear if pressure builds faster than the gluten can stretch. Over-proofed dough barely springs. The sweet spot feels alive when you poke it: some give, some spring-back, not a floppy pillow and not a tight rubber ball.',
      ],
    },
    {
      heading: 'Steam, scores, and where expansion goes',
      paragraphs: [
        'A little surface moisture early in the bake keeps the outer dough flexible so expansion can show up as height and ear instead of early cracking. When the surface dries and firms, expansion slows and browning picks up—that is the handoff from “grow” to “color.”',
        'A score is a planned weak line. Without one, pressure still finds a way out, often as a blowout on the side or a ragged crack. With a good score, you choose where the loaf opens, which also changes how tall versus wide the spring reads on the counter.',
      ],
    },
    {
      heading: 'Heat transfer: why the first minutes feel make-or-break',
      paragraphs: [
        'Stone, steel, Dutch oven, or a hot deck all change how fast heat reaches the bottom and sides of the loaf. A cold oven or a loaf loaded before the oven truly recovers can delay spring and let the crust set early on one face—then the loaf grows unevenly or tears where you did not plan.',
        'If spring is inconsistent batch to batch, suspect oven recovery and loading order before rewriting the recipe. The first five to ten minutes are when the silhouette is decided; the rest of the bake is mostly finish, color, and drying the crumb to a pleasant chew.',
      ],
    },
    {
      heading: 'What to watch on your next bake',
      paragraphs: [
        'You learn oven spring faster from a few honest notes than from chasing perfect numbers: room temperature, dough temperature when you shaped, how much volume changed during proof, how the poke test felt, whether you used steam and for how long, and a quick photo at two minutes and again at eight minutes in the oven.',
        'Change one thing at a time—proof time, steam method, score depth, or rack height—and compare photos. SenseiFood’s Fix My Recipe bread checks still help with ratios, but spring is where timing and heat meet dough state; your eyes on the first minutes beat any single thermometer reading.',
      ],
    },
  ],
  related: [
    { title: 'Why Bread Rises', path: '/bread-science/why-bread-rises' },
    { title: 'Why Bread Needs Scoring', path: '/bread-science/why-bread-needs-scoring' },
  ],
  faqs: [
    {
      q: 'My sourdough barely springs—what should I check first?',
      a: 'Proof state and steam are the usual kings. An over-proofed dough has little structural snap left; a dry oven sets the crust before expansion can show. Fix those before you rearrange hydration.',
    },
    {
      q: 'Does pizza “spring” the same way?',
      a: 'Same idea on a faster clock: a very hot surface sets the bottom while the top can still bubble. Heat, hydration, and gluten strength still decide how much lift you see before the crumb sets.',
    },
  ],
};

export default function WhyOvenSpringHappens() {
  return <ScienceArticlePage spec={SPEC} />;
}
