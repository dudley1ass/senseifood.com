import { ExternalLink, FlaskConical } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const SAUCE_SENSEI_APP_URL = 'https://saucesensei.senseifood.com';

export default function SauceSensei() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <header className="mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-4">
            <FlaskConical className="w-4 h-4" />
            Sauce Science Tool
          </div>
          <h1 className="text-4xl sm:text-5xl bg-gradient-to-r from-rose-700 to-orange-600 bg-clip-text text-transparent mb-3">
            Sauce Sensei
          </h1>
          <p className="text-sm sm:text-base text-stone-700 max-w-3xl leading-relaxed">
            Build sauce formulas, tune balance, and troubleshoot texture with a practical kitchen-science workflow.
            Pair this with the sauce-science article series for indexed, SEO-ready deep dives.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={SAUCE_SENSEI_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold px-5 py-2.5 text-sm"
            >
              Open in new tab
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/articles?tab=sauces"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-rose-300 bg-white text-rose-900 font-semibold px-5 py-2.5 text-sm hover:bg-rose-50 transition-colors"
            >
              Read sauce science articles
            </Link>
          </div>
        </header>

        <section className="rounded-2xl border-2 border-rose-200 shadow-lg overflow-hidden bg-white">
          <iframe
            title="Sauce Sensei"
            src={SAUCE_SENSEI_APP_URL}
            className="w-full h-[78vh] min-h-[700px] border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
