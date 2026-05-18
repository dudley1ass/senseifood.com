import { ArrowRight, ChefHat, IceCream, Salad, Wrench } from 'lucide-react';
import { Link } from 'react-router';
import { articlesIndexHref } from '../constants/articleLibraryNav';
import { trackCTAClick, trackClicksToFixRecipe } from '../utils/analytics';

const ICE_CREAM_URL = 'https://icecreamsensei.senseifood.com';

type JourneyLink = {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type Journey = {
  title: string;
  description: string;
  icon: typeof Wrench;
  links: JourneyLink[];
};

const JOURNEYS: Journey[] = [
  {
    title: 'Fix what went wrong',
    description:
      'Spread, sink, dense crumb, sour coffee—rule-based debugging and fix-it articles when something fails in the kitchen.',
    icon: Wrench,
    links: [
      {
        label: 'Open Fix My Recipe',
        href: '/fix-recipe',
        onClick: () => {
          trackClicksToFixRecipe('home_journey_fix');
          trackCTAClick('home_journey', 'fix_recipe', '/fix-recipe');
        },
      },
      {
        label: 'Fix-it articles',
        href: articlesIndexHref('fix-it'),
        onClick: () => trackCTAClick('home_journey', 'fix_it_articles', articlesIndexHref('fix-it')),
      },
    ],
  },
  {
    title: 'Bake & build',
    description:
      'Bread that rises, cookies with the right chew, cakes that hold structure—articles plus Sensei builders for real ratios.',
    icon: ChefHat,
    links: [
      {
        label: 'Bread Sensei',
        href: '/bread-sensei',
        onClick: () => trackCTAClick('home_journey', 'bread_sensei', '/bread-sensei'),
      },
      {
        label: 'Bread & baking articles',
        href: articlesIndexHref('bread'),
        onClick: () => trackCTAClick('home_journey', 'bake_articles', articlesIndexHref('bread')),
      },
    ],
  },
  {
    title: 'Ice cream & frozen',
    description:
      'Scoopable texture, less iciness, overrun and fat balance—science reads and a dedicated frozen-dessert builder.',
    icon: IceCream,
    links: [
      {
        label: 'Open IceCreamSensei',
        href: ICE_CREAM_URL,
        external: true,
        onClick: () => trackCTAClick('home_journey', 'ice_cream_sensei', ICE_CREAM_URL),
      },
      {
        label: 'Ice cream articles',
        href: articlesIndexHref('ice-cream'),
        onClick: () => trackCTAClick('home_journey', 'ice_cream_articles', articlesIndexHref('ice-cream')),
      },
    ],
  },
  {
    title: 'Eat well & balance',
    description:
      'Protein, fiber, family meals, and appetite science—practical nutrition essays without hype or calorie obsession.',
    icon: Salad,
    links: [
      {
        label: 'Nutrition library',
        href: articlesIndexHref('nutrition'),
        onClick: () => trackCTAClick('home_journey', 'nutrition', articlesIndexHref('nutrition')),
      },
      {
        label: 'Brain & eating',
        href: articlesIndexHref('human-brain'),
        onClick: () => trackCTAClick('home_journey', 'human_brain', articlesIndexHref('human-brain')),
      },
    ],
  },
];

function JourneyLinkRow({ link }: { link: JourneyLink }) {
  const className =
    'inline-flex items-center gap-1 text-sm font-semibold text-[#9a3412] hover:text-[#7c2d12] underline-offset-2 hover:underline';

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={link.onClick} className={className}>
        {link.label}
        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </a>
    );
  }

  return (
    <Link to={link.href} onClick={link.onClick} className={className}>
      {link.label}
      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
    </Link>
  );
}

export function HomeJourneys() {
  return (
    <section
      id="home-journeys"
      aria-labelledby="home-journeys-heading"
      className="scroll-mt-24 border-t border-amber-200/50 bg-[#f0e4d4] px-4 sm:px-6 py-14 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#9a3412]/90 mb-3">
            What you can do here
          </p>
          <h2
            id="home-journeys-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2914] tracking-tight"
          >
            Pick a path, then go deeper
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5c4535] leading-relaxed">
            Each journey links to articles and free tools you already have—fix failures, bake better, nail frozen
            texture, or eat with more clarity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.title}
                className="flex flex-col rounded-2xl border border-amber-200/70 bg-[#faf3e8] p-5 sm:p-6 shadow-sm shadow-amber-900/5 hover:shadow-md hover:border-amber-300/80 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9a3412]/12 text-[#9a3412]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3d2914] leading-snug pt-0.5">
                    {journey.title}
                  </h3>
                </div>
                <p className="text-sm text-[#5c4535] leading-relaxed mb-4 flex-1">{journey.description}</p>
                <div className="flex flex-col gap-2 pt-3 border-t border-amber-200/60">
                  {journey.links.map((link) => (
                    <JourneyLinkRow key={link.label} link={link} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
