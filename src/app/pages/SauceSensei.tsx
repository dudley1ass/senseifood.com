import { ArrowRight, ExternalLink, FlaskConical } from 'lucide-react';
import { Link } from 'react-router';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function SauceSensei() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <header className="mb-8">
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
        </header>

        <section className="rounded-2xl border-2 border-rose-200 shadow-lg bg-white p-8 sm:p-12">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              The interactive builder runs on{' '}
              <span className="font-medium text-stone-800">saucesensei.com</span>. It cannot be embedded here (the app
              blocks iframes for security), so open it in your browser using one of the options below.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-3">
              <a
                href={SAUCE_SENSEI_APP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold px-6 py-3.5 text-base shadow-md hover:opacity-95 transition-opacity"
              >
                Open Sauce Sensei
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={SAUCE_SENSEI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-rose-300 bg-white text-rose-900 font-semibold px-6 py-3.5 text-sm hover:bg-rose-50 transition-colors"
              >
                Open in new tab
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
            <Link
              to="/articles?tab=sauces"
              className="inline-flex items-center justify-center gap-2 mt-6 text-sm font-semibold text-rose-800 hover:text-rose-950 hover:underline"
            >
              Read sauce science articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
