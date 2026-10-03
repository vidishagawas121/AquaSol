import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aquasolenergy.in';
const today = new Date().toISOString().split('T')[0];

// Helper to extract slugs from data files using regex so we don't worry about JSX/asset imports in Node
function extractSlugsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    const slugs = [...new Set(slugMatches.map((m) => m[1]))];
    return slugs;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return [];
  }
}

export function generateSitemap() {
  const dataDir = path.resolve(__dirname, '../src/data');
  const servicesSlugs = extractSlugsFromFile(path.join(dataDir, 'services.js'));
  const productsSlugs = extractSlugsFromFile(path.join(dataDir, 'products.js'));
  const solutionsSlugs = extractSlugsFromFile(path.join(dataDir, 'solutions.js'));
  const projectsSlugs = extractSlugsFromFile(path.join(dataDir, 'projects.js'));
  const blogsSlugs = extractSlugsFromFile(path.join(dataDir, 'blogs.js'));

  const staticUrls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/pm-surya-ghar', priority: '0.95', changefreq: 'weekly' },
    { loc: '/services/solar-tank-repairing', priority: '0.90', changefreq: 'weekly' },
    { loc: '/services/solar-water-heater-servicing', priority: '0.90', changefreq: 'weekly' },
    { loc: '/services/rooftop-solar-pv-installation', priority: '0.90', changefreq: 'weekly' },
    { loc: '/solar-calculator', priority: '0.90', changefreq: 'monthly' },
    { loc: '/book-survey', priority: '0.90', changefreq: 'monthly' },
    { loc: '/solutions', priority: '0.85', changefreq: 'weekly' },
    { loc: '/products', priority: '0.85', changefreq: 'weekly' },
    { loc: '/services', priority: '0.85', changefreq: 'weekly' },
    { loc: '/projects', priority: '0.80', changefreq: 'weekly' },
    { loc: '/about', priority: '0.75', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.80', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.80', changefreq: 'weekly' },
    { loc: '/privacy-policy', priority: '0.30', changefreq: 'yearly' },
    { loc: '/terms-of-service', priority: '0.30', changefreq: 'yearly' },
    { loc: '/disclaimer', priority: '0.30', changefreq: 'yearly' },
  ];

  const allUrls = [];
  const seenLocs = new Set();

  function addUrl(loc, priority, changefreq) {
    if (!seenLocs.has(loc)) {
      seenLocs.add(loc);
      allUrls.push({
        loc: `${SITE_URL}${loc === '/' ? '/' : loc}`,
        priority,
        changefreq,
      });
    }
  }

  // 1. Add static high-priority and standard pages
  staticUrls.forEach((u) => addUrl(u.loc, u.priority, u.changefreq));

  // 2. Add dynamic services
  servicesSlugs.forEach((slug) => {
    addUrl(`/services/${slug}`, '0.85', 'weekly');
  });

  // 3. Add dynamic solutions
  solutionsSlugs.forEach((slug) => {
    addUrl(`/solutions/${slug}`, '0.80', 'monthly');
  });

  // 4. Add dynamic products
  productsSlugs.forEach((slug) => {
    addUrl(`/products/${slug}`, '0.80', 'monthly');
  });

  // 5. Add dynamic projects
  projectsSlugs.forEach((slug) => {
    addUrl(`/projects/${slug}`, '0.75', 'monthly');
  });

  // 6. Add dynamic blogs
  blogsSlugs.forEach((slug) => {
    addUrl(`/blog/${slug}`, '0.80', 'weekly');
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const publicSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xml, 'utf-8');
  console.log(`✅ Sitemap successfully generated with ${allUrls.length} pages at ${publicSitemapPath}`);
}

// Run directly if invoked from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
