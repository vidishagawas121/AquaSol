import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen, Sparkles, Tag, ChevronRight } from 'lucide-react';
import { blogs } from '../data';
import SectionHeading from './SectionHeading';

const BlogSection = ({ limit = 3, showHeader = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory);

  const displayedBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/15 text-brand-amber-600 border border-brand-amber-500/25 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Solar Knowledge Center</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Guides, Subsidies &amp; Solar Tips
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Expert advice on PM Surya Ghar subsidies, solar water heater descaling, net-metering in Pune, and renewable energy savings.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-blue-600 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 self-start md:self-auto group shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-brand-blue-600 text-white shadow-md shadow-brand-blue-600/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedBlogs.map((blog) => (
          <article
            key={blog.id}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Cover Image */}
              <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                    {blog.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-3 right-3 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-amber-400" />
                  <span>{blog.readTimeMinutes} min read</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 sm:p-6 space-y-2.5">
                <p className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
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

            {/* Card Footer */}
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

      {limit && filteredBlogs.length > limit && (
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue-600 text-white text-xs font-bold shadow-md"
          >
            <span>Explore All {blogs.length} Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
