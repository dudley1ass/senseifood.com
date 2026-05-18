import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { trackCTAClick, trackToolStart } from '../utils/analytics';

type SenseiRow = {
  toolName: string;
  displayName: string;
  tagline: string;
  emoji: string;
  href: string;
  external: boolean;
};

const SENSEIS: SenseiRow[] = [
  {
    toolName: 'CookieSensei',
    displayName: 'CookieSensei',
    tagline: 'Cookies, brownies & bars',
    emoji: '🍪',
    href: 'https://cookiesensei.senseifood.com',
    external: true,
  },
  {
    toolName: 'CakeSensei',
    displayName: 'CakeSensei',
    tagline: 'Structure, crumb & rise',
    emoji: '🎂',
    href: 'https://cakesensei.senseifood.com',
    external: true,
  },
  {
    toolName: 'PieSensei',
    displayName: 'PieSensei',
    tagline: 'Crust & filling balance',
    emoji: '🥧',
    href: 'https://piesensei.senseifood.com',
    external: true,
  },
  {
    toolName: 'IceCreamSensei',
    displayName: 'IceCreamSensei',
    tagline: 'Frozen texture & scoop',
    emoji: '🍨',
    href: 'https://icecreamsensei.senseifood.com',
    external: true,
  },
  {
    toolName: 'BeanSensei',
    displayName: 'BeanSensei',
    tagline: 'Coffee & extraction',
    emoji: '☕',
    href: 'https://beansensei.senseifood.com',
    external: true,
  },
  {
    toolName: 'BreadSensei',
    displayName: 'Bread Sensei',
    tagline: 'Hydration, proof & bake',
    emoji: '🍞',
    href: '/bread-sensei',
    external: false,
  },
  {
    toolName: 'SauceSensei',
    displayName: 'Sauce Sensei',
    tagline: 'Emulsions, heat & balance',
    emoji: '🥄',
    href: SAUCE_SENSEI_APP_URL,
    external: true,
  },
];

function SenseiCard({ row }: { row: SenseiRow }) {
  const onOpen = () => {
    trackCTAClick('home_create_food', row.toolName, row.href);
    trackToolStart(row.toolName, 'home_create_food');
  };

  const inner = (
    <>
      <span className="text-xl sm:text-2xl leading-none mb-2" aria-hidden>
        {row.emoji}
      </span>
      <h3 className="text-sm sm:text-base font-bold leading-tight text-[#3d2914] mb-0.5">{row.displayName}</h3>
      <p className="text-[11px] sm:text-xs text-[#5c4535] leading-snug mb-2 flex-1">{row.tagline}</p>
      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#9a3412]">
        Open
        {row.external ? (
          <ExternalLink className="w-3 h-3 shrink-0 opacity-80" aria-hidden />
        ) : (
          <ArrowRight className="w-3 h-3 shrink-0" aria-hidden />
        )}
      </span>
    </>
  );

  const className =
    'group flex flex-col items-center text-center rounded-xl border border-amber-200/70 bg-[#fff7ed] px-3 py-4 shadow-sm shadow-amber-900/5 transition-all hover:shadow-md hover:border-amber-300/80 hover:bg-[#ffedd5]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a3412] min-h-[112px]';

  if (row.external) {
    return (
      <a href={row.href} target="_blank" rel="noopener noreferrer" onClick={onOpen} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={row.href} onClick={onOpen} className={className}>
      {inner}
    </Link>
  );
}

export function SenseiMiniHeroes() {
  return (
    <section
      id="create-food"
      aria-labelledby="create-food-heading"
      className="scroll-mt-24 border-t border-amber-200/50 bg-[#faf3e8] px-4 sm:px-6 py-14 md:py-16"
    >
      {/* Legacy anchor for older links */}
      <span id="pick-starting-point" className="sr-only scroll-mt-24" aria-hidden />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#9a3412]/90 mb-3">
            Free builders
          </p>
          <h2
            id="create-food-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d2914] tracking-tight"
          >
            Create your own food
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5c4535] leading-relaxed">
            Real controls—hydration, ratios, extraction, emulsions—not static recipe pages. Pick a Sensei and dial it
            in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {SENSEIS.map((row) => (
            <SenseiCard key={row.toolName} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}
