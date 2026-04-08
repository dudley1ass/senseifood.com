import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { getFixContextFromPath } from '../diagnostics/pathPresets';
import { trackCTAClick } from '../utils/analytics';

export function ArticleFixRecipeBar() {
  const location = useLocation();
  const ctx = getFixContextFromPath(location.pathname);
  const hide =
    location.pathname.replace(/\/+$/, '') === '/fix-recipe' ||
    location.pathname.replace(/\/+$/, '') === '/' ||
    !ctx;

  useEffect(() => {
    if (hide) {
      document.body.style.paddingBottom = '';
      return;
    }
    const prev = document.body.style.paddingBottom;
    document.body.style.paddingBottom = '5.75rem';
    return () => {
      document.body.style.paddingBottom = prev;
    };
  }, [hide]);

  if (hide) return null;

  const href = `/fix-recipe?category=${ctx.category}&problem=${encodeURIComponent(ctx.problemId)}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t-2 border-purple-200 bg-white/95 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
      role="region"
      aria-label="Fix my recipe prompt"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Fix my recipe</p>
          <p className="text-sm text-foreground/80">
            Having this problem? Open the debugger with this article prefilled—rule-based, no AI required.
          </p>
        </div>
        <Link
          to={href}
          className="shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 shadow-md hover:opacity-95 transition-opacity"
          onClick={() => trackCTAClick('article_sticky_bar', 'fix_my_recipe')}
        >
          Open Fix My Recipe →
        </Link>
      </div>
    </div>
  );
}
