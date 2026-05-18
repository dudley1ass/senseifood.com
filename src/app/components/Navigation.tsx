import { Menu, X } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { trackCTAClick } from '../utils/analytics';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToHash = (e: MouseEvent<HTMLAnchorElement>, hash: string, targetId: string, label: string) => {
    trackCTAClick('nav', label, `/#${hash}`);
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${hash}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur border-b border-stone-200/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-xl" aria-hidden>
                🧪
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-stone-900 tracking-tight">SenseiFood</span>
              <span className="text-[11px] text-stone-500 -mt-0.5">Where food meets how-to</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <a
              href="/#home-journeys"
              onClick={(e) => scrollToHash(e, 'home-journeys', 'home-journeys', 'how_to')}
              className="text-stone-700 hover:text-amber-900 transition-colors font-medium"
            >
              How-to
            </a>
            <a
              href="/#create-food"
              onClick={(e) => scrollToHash(e, 'create-food', 'create-food', 'tools')}
              className="text-stone-700 hover:text-amber-900 transition-colors font-medium"
            >
              Tools
            </a>
            <Link to="/articles" className="text-stone-700 hover:text-amber-900 transition-colors font-medium">
              Articles
            </Link>
            <a
              href="/#about"
              onClick={(e) => scrollToHash(e, 'about', 'about', 'about')}
              className="text-stone-700 hover:text-amber-900 transition-colors font-medium"
            >
              About
            </a>
          </div>

          <button
            className="md:hidden p-2 text-stone-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-1 border-t border-stone-200 pt-4">
            <a
              href="/#home-journeys"
              className="text-stone-800 hover:text-amber-900 py-2.5 font-medium"
              onClick={(e) => scrollToHash(e, 'home-journeys', 'home-journeys', 'how_to')}
            >
              How-to
            </a>
            <a
              href="/#create-food"
              className="text-stone-800 hover:text-amber-900 py-2.5 font-medium"
              onClick={(e) => scrollToHash(e, 'create-food', 'create-food', 'tools')}
            >
              Tools
            </a>
            <Link
              to="/articles"
              className="text-stone-800 hover:text-amber-900 py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <a
              href="/#about"
              className="text-stone-800 hover:text-amber-900 py-2.5 font-medium"
              onClick={(e) => scrollToHash(e, 'about', 'about', 'about')}
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
