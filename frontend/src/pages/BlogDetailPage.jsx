import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { blogs } from '../data';
import QuoteModal from '../components/QuoteModal';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-brand-amber-400 line-clamp-1">{blog.title}</span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            {blog.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
            <span>By {blog.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTimeMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-md space-y-6">
          <div className="p-4 bg-brand-blue-50 border-l-4 border-brand-blue-600 rounded-r-xl text-xs sm:text-sm text-brand-blue-900 font-medium leading-relaxed">
            {blog.summary}
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-700">
            {blog.content}
          </div>

          {blog.tags?.length > 0 && (
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold">Have Questions About This Topic?</h4>
            <p className="text-xs text-slate-400 mt-1">Talk with Aqua-Sol Energy’s Pune technical engineers directly.</p>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="px-6 py-3 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs rounded-xl shadow transition shrink-0"
          >
            Ask a Solar Expert
          </button>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct="General Consultation"
        source={`Blog Guide: ${blog.title}`}
      />
    </div>
  );
};

export default BlogDetailPage;
