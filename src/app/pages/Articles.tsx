import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    // Cookie Science
    {
      title: 'Why Cookies Spread',
      description: 'Discover how butter temperature, sugar ratios, and leavening agents control cookie spread and texture.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-spread'
    },
    {
      title: 'Brown Sugar vs White Sugar',
      description: 'Compare how different sugars affect cookie texture, spread, flavor, and moisture retention.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-orange-500 to-amber-700',
      url: '/cookie-science/brown-sugar-vs-white-sugar'
    },
    {
      title: 'Why Cookies Turn Hard',
      description: 'Learn the science behind hard cookies and how to keep them soft and chewy for days.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/cookie-science/why-cookies-turn-hard'
    },
    {
      title: 'Why Cookies Are Chewy',
      description: 'Discover the perfect balance of moisture, fat, and sugar that creates irresistibly chewy cookies.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-orange-500',
      url: '/cookie-science/why-cookies-are-chewy'
    },
    {
      title: 'Why Cookies Get Crispy',
      description: 'Learn how low moisture content, high sugar, and proper baking create perfectly crispy cookies.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-orange-600 to-amber-600',
      url: '/cookie-science/why-cookies-get-crispy'
    },
    {
      title: 'Why Cookies Flatten',
      description: 'Understand the science behind cookie spreading and how to control thickness and shape.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-400 to-orange-500',
      url: '/cookie-science/why-cookies-flatten'
    },
    {
      title: 'Why Cookies Spread Too Much',
      description: 'Fix over-spreading cookies by understanding butter temperature, flour ratios, and chilling techniques.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-orange-500 to-red-500',
      url: '/cookie-science/why-cookies-spread-too-much'
    },
    {
      title: "Why Cookies Don't Spread",
      description: 'Discover what prevents cookies from spreading and how to achieve the perfect flat, wide cookie.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-800',
      url: '/cookie-science/why-cookies-dont-spread'
    },
    // Bread Science
    {
      title: 'Why Bread Rises',
      description: 'Understand the biological and chemical processes that turn dense dough into light, airy bread.',
      category: 'Bread Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-yellow-600',
      url: '/bread-science/why-bread-rises'
    },
    {
      title: 'How Yeast Works in Baking',
      description: 'Learn about the living microorganisms that transform simple dough into flavorful, risen bread.',
      category: 'Bread Science',
      readTime: '5 min read',
      color: 'from-green-500 to-emerald-600',
      url: '/bread-science/how-yeast-works'
    },
    // Cake Science
    {
      title: 'Why Cakes Dome in the Middle',
      description: 'Understand why cakes rise higher in the center and learn techniques to achieve perfectly flat tops.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-pink-500 to-purple-600',
      url: '/cake-science/why-cakes-dome'
    },
    {
      title: 'Why Cakes Collapse',
      description: 'Understand the science behind cake structure and how to prevent sinking or collapsing.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-500 to-rose-600',
      url: '/cake-science/why-cakes-collapse'
    },
    {
      title: 'Why Cakes Sink in the Middle',
      description: 'Learn the common causes of sinking cakes and how to prevent this frustrating baking problem.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-600 to-red-600',
      url: '/cake-science/why-cakes-sink'
    },
    {
      title: 'Why Cakes Crack on Top',
      description: 'Discover why cakes develop cracks and how to prevent them with proper temperature and moisture control.',
      category: 'Cake Science',
      readTime: '6 min read',
      color: 'from-pink-500 to-rose-500',
      url: '/cake-science/why-cakes-crack-on-top'
    },
    {
      title: 'Why Cakes Are Dense',
      description: 'Learn what causes dense, heavy cakes and how to achieve light, fluffy texture every time.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-rose-500 to-pink-600',
      url: '/cake-science/why-cakes-are-dense'
    },
    {
      title: 'Why Cakes Stick to the Pan',
      description: 'Understand the science of pan preparation and how to release cakes perfectly every time.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-pink-400 to-rose-500',
      url: '/cake-science/why-cakes-stick-to-pan'
    },
    {
      title: 'Why Cakes Dry Out',
      description: 'Master the moisture balance and storage techniques that keep cakes tender and moist for days.',
      category: 'Cake Science',
      readTime: '6 min read',
      color: 'from-rose-600 to-red-500',
      url: '/cake-science/why-cakes-dry-out'
    },
    // Pie Science (NEW!)
    {
      title: 'Why Pie Crust Is Flaky',
      description: 'Discover the science behind creating layers of buttery, flaky pie crust that shatters perfectly.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-orange-500 to-amber-600',
      url: '/pie-science/why-pie-crust-is-flaky'
    },
    {
      title: 'Why Pie Crust Shrinks',
      description: 'Learn what causes pie crust to shrink during baking and how to prevent it with proper technique.',
      category: 'Pie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/pie-science/why-pie-crust-shrinks'
    },
    // Ice Cream Science
    {
      title: 'Why Ice Cream Gets Icy',
      description: 'Learn about ice crystal formation, fat content, and stabilizers that prevent icy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-500 to-blue-600',
      url: '/ice-cream-science/why-ice-cream-gets-icy'
    },
    {
      title: 'Why Ice Cream Melts Fast',
      description: 'Discover the science behind melting rates and how to keep ice cream frozen longer.',
      category: 'Ice Cream Science',
      readTime: '5 min read',
      color: 'from-blue-400 to-cyan-500',
      url: '/ice-cream-science/why-ice-cream-melts-fast'
    },
    {
      title: 'Why Ice Cream Is Creamy',
      description: 'Learn how fat content, air incorporation, and stabilizers create smooth, creamy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-400 to-blue-500',
      url: '/ice-cream-science/why-ice-cream-is-creamy'
    },
    {
      title: 'Why Ice Cream Gets Freezer Burn',
      description: 'Understand freezer burn formation and how to prevent ice crystals from ruining your ice cream.',
      category: 'Ice Cream Science',
      readTime: '5 min read',
      color: 'from-blue-500 to-cyan-600',
      url: '/ice-cream-science/why-ice-cream-gets-freezer-burn'
    },
    // Coffee Science
    {
      title: 'Coffee Extraction Science',
      description: 'Master extraction ratios, water temperature, and grind size for perfect coffee brewing.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-amber-700 to-stone-800',
      url: '/coffee-science/coffee-extraction-science'
    },
    {
      title: 'Why Coffee Tastes Bitter',
      description: 'Understand what causes bitter coffee and how to fix it through better brewing technique.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-stone-600 to-amber-800',
      url: '/coffee-science/why-coffee-tastes-bitter'
    },
    {
      title: 'Why Coffee Tastes Sour',
      description: 'Learn what causes sour coffee and how to fix it through better brewing technique and bean selection.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-yellow-700',
      url: '/coffee-science/why-coffee-tastes-sour'
    },
    {
      title: 'Why Coffee Tastes Weak',
      description: 'Fix weak, watery coffee by mastering brew ratios, extraction time, and water temperature.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-stone-500 to-amber-600',
      url: '/coffee-science/why-coffee-tastes-weak'
    },
    {
      title: 'Why Coffee Tastes Burnt',
      description: 'Learn what causes burnt-tasting coffee and how to prevent it through proper roasting and brewing.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-700 to-amber-900',
      url: '/coffee-science/why-coffee-tastes-burnt'
    },
    {
      title: 'Why Coffee Tastes Watery',
      description: 'Discover how to fix thin, watery coffee with better grind size, brewing time, and coffee-to-water ratios.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-stone-700',
      url: '/coffee-science/why-coffee-tastes-watery'
    }
  ];

  const categories = ['All', 'Cookie Science', 'Bread Science', 'Cake Science', 'Pie Science', 'Ice Cream Science', 'Coffee Science'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const articlesByCategory = categories
    .filter(cat => cat !== 'All')
    .map(category => ({
      category,
      articles: articles.filter(article => article.category === category)
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            Science Library
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Food Science Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Dive deep into the chemistry and physics behind great food. Learn the science that makes your cooking better.
          </p>
        </header>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
        </div>

        {/* Articles Grid (when searching or filtering) */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredArticles.map((article) => (
              <Link
                key={article.title}
                to={article.url}
                className="bg-white border-2 border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-current transition-all group cursor-pointer hover:scale-105 block"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className={`px-4 py-1.5 bg-gradient-to-r ${article.color} text-white rounded-full shadow-md`}>
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className={`text-2xl mb-3 bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        )}

        {/* Articles by Category (default view) */}
        {!searchQuery && selectedCategory === 'All' && (
          <div className="space-y-16">
            {articlesByCategory.map(({ category, articles: categoryArticles }) => (
              <section key={category}>
                <h2 className="text-3xl mb-8 flex items-center gap-3">
                  <span className="text-4xl">
                    {category === 'Cookie Science' && '🍪'}
                    {category === 'Bread Science' && '🍞'}
                    {category === 'Cake Science' && '🎂'}
                    {category === 'Pie Science' && '🥧'}
                    {category === 'Ice Cream Science' && '🍦'}
                    {category === 'Coffee Science' && '☕'}
                  </span>
                  {category}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.map((article) => (
                    <Link
                      key={article.title}
                      to={article.url}
                      className="bg-white border-2 border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-current transition-all group cursor-pointer hover:scale-105 block"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span className={`px-4 py-1.5 bg-gradient-to-r ${article.color} text-white rounded-full shadow-md text-xs`}>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className={`text-2xl mb-3 bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Coming Soon placeholder for categories with few articles */}
                {categoryArticles.length < 3 && (
                  <div className="mt-6 p-6 bg-white/50 rounded-2xl border-2 border-dashed border-gray-300">
                    <p className="text-muted-foreground text-center">
                      📚 More {category} articles coming soon!
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-10 text-white mt-16 shadow-2xl">
          <h3 className="text-3xl mb-4">Want More Food Science?</h3>
          <p className="text-white/90 mb-6 text-lg max-w-2xl">
            We're constantly adding new articles covering cookies, cakes, pies, ice cream, coffee, and more. Bookmark this page and check back regularly!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Back to Home
            </Link>
            <a 
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-white"
            >
              Try Our Tools →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}