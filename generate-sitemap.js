/**
 * SenseiFood.com - Sitemap Generator
 * Generates sitemap.xml with all 29 articles + main pages
 * Run: node generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://senseifood.com';
const OUTPUT_FILE = path.join(__dirname, 'public', 'sitemap.xml');

// Get current date in ISO format
const currentDate = new Date().toISOString().split('T')[0];

// Define all URLs with priority and change frequency
const urls = [
  // Main Pages
  {
    loc: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: currentDate
  },
  {
    loc: '/articles',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  
  // Cookie Science (8 articles)
  {
    loc: '/cookie-science/why-cookies-spread',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/brown-sugar-vs-white-sugar',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-turn-hard',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-are-chewy',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-get-crispy',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-flatten',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-spread-too-much',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cookie-science/why-cookies-dont-spread',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  // Bread Science (2 articles)
  {
    loc: '/bread-science/why-bread-rises',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/bread-science/how-yeast-works',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  // Cake Science (7 articles)
  {
    loc: '/cake-science/why-cakes-dome',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-collapse',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-sink',
    priority: '0.9', // HIGH TRAFFIC
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-crack-on-top',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-are-dense',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-stick-to-pan',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/cake-science/why-cakes-dry-out',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  // Pie Science (2 articles)
  {
    loc: '/pie-science/why-pie-crust-is-flaky',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/pie-science/why-pie-crust-shrinks',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  // Ice Cream Science (4 articles)
  {
    loc: '/ice-cream-science/why-ice-cream-gets-icy',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/ice-cream-science/why-ice-cream-melts-fast',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/ice-cream-science/why-ice-cream-is-creamy',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/ice-cream-science/why-ice-cream-gets-freezer-burn',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  
  // Coffee Science (6 articles)
  {
    loc: '/coffee-science/coffee-extraction-science',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/coffee-science/why-coffee-tastes-bitter',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/coffee-science/why-coffee-tastes-sour',
    priority: '0.9', // HIGH TRAFFIC
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/coffee-science/why-coffee-tastes-weak',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/coffee-science/why-coffee-tastes-burnt',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    loc: '/coffee-science/why-coffee-tastes-watery',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  }
];

// Generate XML
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${OUTPUT_FILE}`);
  console.log(`📊 Total URLs: ${urls.length}`);
  console.log(`🔗 Sitemap URL: ${BASE_URL}/sitemap.xml`);
  console.log('\n📋 Breakdown:');
  console.log('   - Main Pages: 2');
  console.log('   - Cookie Science: 8 articles');
  console.log('   - Cake Science: 7 articles');
  console.log('   - Coffee Science: 6 articles');
  console.log('   - Ice Cream Science: 4 articles');
  console.log('   - Pie Science: 2 articles');
  console.log('   - Bread Science: 2 articles');
  console.log('   -------------------------');
  console.log(`   - TOTAL: ${urls.length} URLs`);
  console.log('\n🚀 Next Steps:');
  console.log('   1. Deploy to production');
  console.log('   2. Submit to Google Search Console: https://search.google.com/search-console');
  console.log('   3. Add sitemap URL: https://senseifood.com/sitemap.xml');
  console.log('   4. Monitor indexing status');
}

// Run the generator
writeSitemap();
