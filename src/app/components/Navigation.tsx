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
    <nav className="sticky top-0 z-50 bg-[#faf3e8]/95 backdrop-blur border-b border-amber-200/60 shadow-sm shadow-amber-900/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#9a3412] rounded-lg flex items-center justify-center shadow-sm shadow-amber-900/20">
              <span className="text-xl" aria-hidden>
                🧪
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-[#3d2914] tracking-tight">SenseiFood</span>
              <span className="text-[11px] text-[#7a5c44] -mt-0.5">Where Food Meets How-To</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <a
              href="/#home-journeys"
              onClick={(e) => scrollToHash(e, 'home-journeys', 'home-journeys', 'how_to')}
              className="text-[#5c4535] hover:text-[#9a3412] transition-colors font-medium"
            >
              How-to
            </a>
            <a
              href="/#create-food"
              onClick={(e) => scrollToHash(e, 'create-food', 'create-food', 'tools')}
              className="text-[#5c4535] hover:text-[#9a3412] transition-colors font-medium"
            >
              Tools
            </a>
            <Link to="/articles" className="text-stone-700 hover:text-amber-900 transition-colors font-medium">
              Articles
            </Link>
            <a
              href="/#about"
              onClick={(e) => scrollToHash(e, 'about', 'about', 'about')}
              className="text-[#5c4535] hover:text-[#9a3412] transition-colors font-medium"
            >
              About
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[#5c4535]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-1 border-t border-amber-200/60 pt-4">
            <a
              href="/#home-journeys"
              className="text-[#5c4535] hover:text-[#9a3412] py-2.5 font-medium"
              onClick={(e) => scrollToHash(e, 'home-journeys', 'home-journeys', 'how_to')}
            >
              How-to
            </a>
            <a
              href="/#create-food"
              className="text-[#5c4535] hover:text-[#9a3412] py-2.5 font-medium"
              onClick={(e) => scrollToHash(e, 'create-food', 'create-food', 'tools')}
            >
              Tools
            </a>
            <Link
              to="/articles"
              className="text-[#5c4535] hover:text-[#9a3412] py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <a
              href="/#about"
              className="text-[#5c4535] hover:text-[#9a3412] py-2.5 font-medium"
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
