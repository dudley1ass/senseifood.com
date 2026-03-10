import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-purple-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🧪</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SenseiFood</span>
              <span className="text-xs text-muted-foreground -mt-1">Food Science Tools</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tools" className="text-foreground/80 hover:text-purple-600 transition-colors">
              Tools
            </a>
            <a href="#experiments" className="text-foreground/80 hover:text-purple-600 transition-colors">
              Food Science
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-purple-600 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-foreground/80 hover:text-purple-600 transition-colors">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a 
              href="#tools" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </a>
            <a 
              href="#experiments" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Food Science
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}