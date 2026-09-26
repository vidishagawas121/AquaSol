import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Search, Sparkles, Tag, ChevronRight, Calculator, PhoneCall } from 'lucide-react';
import { blogs } from '../data';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs[0];

  return (
    <div className="space-y-12 pb-16">
      <SEO
        title="Solar Energy Blogs, Subsidies & Maintenance Guides Pune | Aquasol Energy"
        description="Read comprehensive guides on PM Surya Ghar subsidies, solar water heater descaling, MSEDCL net-metering, commercial rooftop solar ROI, and energy savings in Pune."
        keywords="solar blog Pune, PM Surya Ghar subsidy guide, solar water heater servicing tips, net metering MSEDCL Pune, rooftop solar cost Pune"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 sm:py-18 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Solar Knowledge Center &amp; Guides</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solar Insights, Subsidies &amp; Energy Tips
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Clear, practical guides written by Pune's trusted solar and renewable water heating engineers.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search topics (e.g. Subsidy, Descaling, Net-Metering)..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-brand-amber-400 focus:bg-slate-900/80 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Pills */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-blue-600 text-white shadow-md shadow-brand-blue-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Hero Blog Post (Shown if no filter active) */}
        {selectedCategory === 'All' && !searchTerm && featuredBlog && (
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] overflow-hidden bg-slate-900">
              <img
                src={featuredBlog.coverImage}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-brand-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wide shadow-md">
                  Featured Guide
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-700 font-bold uppercase text-[10px]">
                    {featuredBlog.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {featuredBlog.readTimeMinutes} min read
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-brand-blue-600 transition-colors leading-tight">
                  <Link to={`/blog/${featuredBlog.slug}`}>
                    {featuredBlog.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featuredBlog.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{featuredBlog.date}</span>
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold transition shadow-sm"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              {searchTerm ? `Search Results (${filteredBlogs.length})` : 'All Solar Articles & Guides'}
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredBlogs.length} articles
            </span>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 space-y-3">
              <p className="text-base font-bold text-slate-700">No matching articles found</p>
              <p className="text-xs text-slate-500">Try searching for other keywords like "Subsidy", "Water Heater", or "MSEDCL".</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                className="mt-2 px-4 py-2 rounded-xl bg-brand-blue-600 text-white text-xs font-bold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-amber-400" />
                        <span>{blog.readTimeMinutes} min read</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2.5">
                      <p className="text-[11px] font-semibold text-slate-400">
                        {blog.date} • {blog.author}
                      </p>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue-600 transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between mt-2">
                    <span className="text-[11px] font-medium text-slate-500">
                      Pune &amp; Maharashtra
                    </span>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-700 group-hover:text-brand-amber-500 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-gradient-to-r from-brand-blue-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Claim Your ₹78,000 PM Surya Ghar Subsidy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Calculate your solar system requirements or schedule a free Pune rooftop technical feasibility survey today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/solar-calculator"
              className="px-5 py-2.5 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>Solar Calculator</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Engineers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
