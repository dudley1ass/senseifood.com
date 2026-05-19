import { Github, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { ContactFormModal } from './ContactFormModal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer
        id="about"
        className="bg-gradient-to-br from-[#3d2914] via-[#5c3d2e] to-[#7c2d12] text-[#faf3e8] py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#faf3e8]/15 border border-[#faf3e8]/25 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧪</span>
                </div>
                <span className="text-xl">SenseiFood</span>
              </div>
              <p className="text-sm text-[#faf3e8]/85 leading-relaxed">
                Where Food Meets How-To—science articles and free Sensei tools for the kitchen.
              </p>
            </div>

            {/* Tools */}
            <div>
              <h4 className="mb-4 text-[#f5e8d6]/95 font-semibold text-sm tracking-wide uppercase">Tools</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    CookieSensei
                  </a>
                </li>
                <li>
                  <a href="https://cakesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    CakeSensei
                  </a>
                </li>
                <li>
                  <a href="https://piesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    PieSensei
                  </a>
                </li>
                <li>
                  <a href="https://icecreamsensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    IceCreamSensei
                  </a>
                </li>
                <li>
                  <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    BeanSensei
                  </a>
                </li>
                <li>
                  <Link to="/bread-sensei" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    Bread Sensei
                  </Link>
                </li>
                <li>
                  <a
                    href={SAUCE_SENSEI_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors"
                  >
                    Sauce Sensei
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="mb-4 text-[#f5e8d6]/95 font-semibold text-sm tracking-wide uppercase">Learn</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#experiments" className="text-sm text-[#faf3e8]/80 hover:text-[#faf3e8] transition-colors">
                    Featured Articles
                  </a>
                </li>
                <li>
                  <Link to="/articles" className="text-sm text-[#faf3e8]/80 hover:text-[#faf3e8] transition-colors">
                    Science library
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-[#faf3e8]/80 hover:text-[#faf3e8] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#pick-starting-point" className="text-sm text-[#faf3e8]/80 hover:text-[#faf3e8] transition-colors">
                    Our Tools
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="mb-4 text-[#f5e8d6]/95 font-semibold text-sm tracking-wide uppercase">Connect</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="#about" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link to="/articles" className="text-sm text-[#faf3e8]/75 hover:text-[#faf3e8] transition-colors">
                    Articles
                  </Link>
                </li>
              </ul>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.tiktok.com/@food_sensei1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#faf3e8]/15 hover:bg-[#faf3e8]/25 rounded-lg flex items-center justify-center transition-colors backdrop-blur"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#faf3e8]/15 hover:bg-[#faf3e8]/25 rounded-lg flex items-center justify-center transition-colors backdrop-blur"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#faf3e8]/15 hover:bg-[#faf3e8]/25 rounded-lg flex items-center justify-center transition-colors backdrop-blur"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContactModalOpen(true);
                  }}
                  className="w-10 h-10 bg-[#faf3e8]/15 hover:bg-[#faf3e8]/25 rounded-lg flex items-center justify-center transition-colors backdrop-blur"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/20 text-center text-sm text-[#faf3e8]/75">
            <p>© {currentYear} SenseiFood. All rights reserved. Built for food science enthusiasts.</p>
          </div>
        </div>
      </footer>

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}