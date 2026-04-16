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
  cardClass: string;
  titleClass: string;
};

const SENSEIS: SenseiRow[] = [
  {
    toolName: 'CookieSensei',
    displayName: 'CookieSensei',
    tagline: 'Cookies, brownies & bars',
    emoji: '🍪',
    href: 'https://cookiesensei.senseifood.com',
    external: true,
    cardClass: 'border-amber-200/90 bg-gradient-to-br from-amber-50/90 to-orange-50/80 hover:border-amber-300',
    titleClass: 'text-amber-950',
  },
  {
    toolName: 'CakeSensei',
    displayName: 'CakeSensei',
    tagline: 'Structure, crumb & rise',
    emoji: '🎂',
    href: 'https://cakesensei.senseifood.com',
    external: true,
    cardClass: 'border-pink-200/90 bg-gradient-to-br from-pink-50/90 to-purple-50/80 hover:border-pink-300',
    titleClass: 'text-purple-950',
  },
  {
    toolName: 'PieSensei',
    displayName: 'PieSensei',
    tagline: 'Crust & filling balance',
    emoji: '🥧',
    href: 'https://piesensei.senseifood.com',
    external: true,
    cardClass: 'border-rose-200/90 bg-gradient-to-br from-rose-50/90 to-orange-50/70 hover:border-rose-300',
    titleClass: 'text-rose-950',
  },
  {
    toolName: 'IceCreamSensei',
    displayName: 'IceCreamSensei',
    tagline: 'Frozen texture & scoop',
    emoji: '🍨',
    href: 'https://icecreamsensei.senseifood.com',
    external: true,
    cardClass: 'border-cyan-200/90 bg-gradient-to-br from-cyan-50/90 to-blue-50/80 hover:border-cyan-300',
    titleClass: 'text-cyan-950',
  },
  {
    toolName: 'BeanSensei',
    displayName: 'BeanSensei',
    tagline: 'Coffee & extraction',
    emoji: '☕',
    href: 'https://beansensei.senseifood.com',
    external: true,
    cardClass: 'border-stone-200/90 bg-gradient-to-br from-stone-50/90 to-amber-50/70 hover:border-stone-300',
    titleClass: 'text-stone-900',
  },
  {
    toolName: 'BreadSensei',
    displayName: 'Bread Sensei',
    tagline: 'Hydration, proof & bake',
    emoji: '🍞',
    href: '/bread-sensei',
    external: false,
    cardClass: 'border-amber-200/80 bg-gradient-to-br from-amber-50/80 to-yellow-50/70 hover:border-amber-300',
    titleClass: 'text-amber-950',
  },
  {
    toolName: 'SauceSensei',
    displayName: 'Sauce Sensei',
    tagline: 'Emulsions, heat & balance',
    emoji: '🥄',
    href: SAUCE_SENSEI_APP_URL,
    external: true,
    cardClass: 'border-orange-200/90 bg-gradient-to-br from-orange-50/90 to-rose-50/70 hover:border-orange-300',
    titleClass: 'text-orange-950',
  },
];

function SenseiCard({ row }: { row: SenseiRow }) {
  const onOpen = () => {
    trackCTAClick('home_sensei_mini_hero', row.toolName, row.href);
    trackToolStart(row.toolName, 'home_sensei_mini_hero');
  };

  const inner = (
    <>
      <span className="text-xl sm:text-2xl leading-none mb-1.5" aria-hidden>
        {row.emoji}
      </span>
      <h3 className={`text-sm sm:text-base font-bold leading-tight mb-0.5 ${row.titleClass}`}>{row.displayName}</h3>
      <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug mb-2 flex-1">{row.tagline}</p>
      <span className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold ${row.titleClass} opacity-90`}>
        Open
        {row.external ? (
          <ExternalLink className="w-3 h-3 shrink-0 opacity-80" aria-hidden />
        ) : (
          <ArrowRight className="w-3 h-3 shrink-0" aria-hidden />
        )}
      </span>
    </>
  );

  const className = `group flex flex-col items-center text-center rounded-xl border px-3 py-3.5 sm:py-4 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 min-h-[108px] sm:min-h-[118px] ${row.cardClass}`;

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
      id="sensei-mini-heroes"
      aria-labelledby="sensei-mini-heroes-heading"
      className="relative px-4 sm:px-6 pt-4 pb-8 md:pt-6 md:pb-10 bg-[#F8F7FF] border-t border-purple-100/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2
            id="sensei-mini-heroes-heading"
            className="text-lg sm:text-xl font-semibold text-purple-950 tracking-tight"
          >
            Pick a Sensei
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl mx-auto">
            Same tools as above—quick links before featured articles.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-5xl mx-auto">
          {SENSEIS.map((row) => (
            <SenseiCard key={row.toolName} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}
