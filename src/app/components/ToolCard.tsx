import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { trackCTAClick, trackToolStart } from '../utils/analytics';

interface ToolCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  url: string;
  color: string;
  /** Outcome-first line shown above the product name */
  outcome?: string;
}

export function ToolCard({ name, icon: Icon, description, url, color, outcome }: ToolCardProps) {
  const handleToolLaunch = () => {
    trackCTAClick('home_pick_starting_point', `launch_${name.toLowerCase()}`, url);
    trackToolStart(name, 'home_pick_starting_point');
  };

  const className =
    'group relative bg-white border-2 border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-current transition-all duration-300 overflow-hidden hover:scale-105';
  const style = { color: `color-mix(in srgb, ${color.split(' ')[1].replace('to-', '')} 50%, transparent)` };

  const body = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

      <div className="relative">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {outcome ? (
          <p className={`text-sm font-semibold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {outcome}
          </p>
        ) : null}
        <h3 className="text-2xl mb-3">{name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        <div
          className={`flex items-center gap-2 text-sm group-hover:gap-3 transition-all bg-gradient-to-r ${color} bg-clip-text text-transparent`}
        >
          <span>Launch Tool</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            style={{ color: 'currentColor' }}
          />
        </div>
      </div>
    </>
  );

  if (url.startsWith('http')) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleToolLaunch}
        className={className}
        style={style}
      >
        {body}
      </a>
    );
  }

  return (
    <Link to={url} onClick={handleToolLaunch} className={className} style={style}>
      {body}
    </Link>
  );
}
