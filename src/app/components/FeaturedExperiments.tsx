import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function FeaturedExperiments() {
  const experiments = [
    {
      title: 'Why Cookies Spread',
      description: 'Discover how butter temperature, sugar ratios, and leavening agents control cookie spread and texture.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-spread'
    },
    {
      title: 'Why Bread Rises',
      description: 'Understand the biological and chemical processes that turn dense dough into light, airy bread.',
      category: 'Bread Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-yellow-600',
      url: '/bread-science/why-bread-rises'
    },
    {
      title: 'Why Ice Cream Gets Icy',
      description: 'Learn about ice crystal formation, fat content, and stabilizers that prevent icy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-500 to-blue-600',
      url: '/ice-cream-science/why-ice-cream-gets-icy'
    }
  ];

  return (
    <section id="experiments" className="py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Learn the Science</span>
          </div>
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Featured Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the chemistry and physics behind great food
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <Link
              key={experiment.title}
              to={experiment.url}
              className="bg-white border-2 border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-current transition-all group cursor-pointer hover:scale-105 block"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className={`px-4 py-1.5 bg-gradient-to-r ${experiment.color} text-white rounded-full shadow-md`}>
                  {experiment.category}
                </span>
                <span>•</span>
                <span>{experiment.readTime}</span>
              </div>

              <h3 className={`text-2xl mb-3 bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}>
                {experiment.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {experiment.description}
              </p>

              <div className={`flex items-center gap-2 text-sm group-hover:gap-3 transition-all bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}>
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <BookOpen className="w-5 h-5" />
            See All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            29 articles covering cookies, cakes, bread, pies, ice cream & coffee science
          </p>
        </div>
      </div>
    </section>
  );
}