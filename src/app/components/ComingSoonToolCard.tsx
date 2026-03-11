import { LucideIcon, Clock } from 'lucide-react';

interface ComingSoonToolCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  examples: string[];
  color: string;
}

export function ComingSoonToolCard({ name, icon: Icon, description, examples, color }: ComingSoonToolCardProps) {
  return (
    <div
      className="group relative bg-white/60 backdrop-blur border-2 border-dashed rounded-2xl p-8 transition-all duration-300 overflow-hidden"
      style={{ borderColor: `color-mix(in srgb, ${color.split(' ')[1].replace('to-', '')} 30%, transparent)` }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5`} />
      
      <div className="relative">
        {/* Coming Soon Badge */}
        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-xs mb-4 shadow-md`}>
          <Clock className="w-3 h-3" />
          <span>Coming Soon</span>
        </div>

        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg opacity-60`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl mb-3 text-foreground/70">{name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* Examples */}
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Examples:
          </p>
          {examples.map((example, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className={`text-sm bg-gradient-to-r ${color} bg-clip-text text-transparent`}>•</span>
              <span>{example}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
