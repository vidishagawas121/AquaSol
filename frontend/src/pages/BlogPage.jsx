import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data';

const BlogPage = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Solar Guides & Scheme Updates
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Knowledge Center & Resources
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Helpful insights on PM Surya Ghar subsidies, solar water heater maintenance, net metering, and energy conservation.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 font-bold uppercase text-[10px]">
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTimeMinutes || 4} min read
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  <Link to={`/blog/${blog.slug}`} className="hover:text-brand-blue-600 transition">
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {blog.summary}
                </p>
              </div>

              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">By {blog.author}</span>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
                >
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
