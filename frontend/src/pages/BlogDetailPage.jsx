import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowRight, Share2, Tag, ChevronRight, User, Calendar, BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import { blogs } from '../data';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const blog = blogs.find((b) => b.slug === slug) || blogs[0];
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  const parseInlineStyles = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderFormattedContent = (rawContent) => {
    if (!rawContent) return null;

    const lines = rawContent.split('\n');
    const elements = [];
    let currentList = [];
    let listType = null; // 'ul' or 'ol'

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`ul-${elements.length}`} className="space-y-2.5 my-4 pl-1">
              {currentList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>{parseInlineStyles(item)}</div>
                </li>
              ))}
            </ul>
          );
        } else if (listType === 'ol') {
          elements.push(
            <div key={`ol-${elements.length}`} className="space-y-3 my-5">
              {currentList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue-600 text-white font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </span>
                  <div className="pt-0.5">{parseInlineStyles(item)}</div>
                </div>
              ))}
            </div>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        flushList();
        continue;
      }

      // Heading 3: ### Heading
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3
            key={`h3-${i}`}
            className="text-base sm:text-lg font-extrabold text-slate-900 mt-7 mb-3 flex items-center gap-2.5 border-b border-slate-100 pb-2"
          >
            <span className="w-1.5 h-4.5 bg-brand-amber-500 rounded-full inline-block shrink-0"></span>
            <span>{line.replace('### ', '')}</span>
          </h3>
        );
        continue;
      }

      // Heading 2: ## Heading
      if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2
            key={`h2-${i}`}
            className="text-lg sm:text-xl font-black text-slate-900 mt-8 mb-3"
          >
            {line.replace('## ', '')}
          </h2>
        );
        continue;
      }

      // Bullet item: * text or - text
      if (line.startsWith('* ') || line.startsWith('- ')) {
        if (listType && listType !== 'ul') flushList();
        listType = 'ul';
        currentList.push(line.replace(/^[\*\-]\s+/, ''));
        continue;
      }

      // Numbered item: 1. text
      if (/^\d+\.\s+/.test(line)) {
        if (listType && listType !== 'ol') flushList();
        listType = 'ol';
        currentList.push(line.replace(/^\d+\.\s+/, ''));
        continue;
      }

      // Formula block: $$\text{...}$$
      if (line.startsWith('$$') || line.includes('\\text{')) {
        flushList();
        const formulaText = line.replace(/\$\$/g, '').replace(/\\text\{([^}]+)\}/g, '$1');
        elements.push(
          <div key={`formula-${i}`} className="my-4 p-4 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100 text-brand-blue-900 text-xs sm:text-sm font-semibold text-center shadow-inner">
            {formulaText}
          </div>
        );
        continue;
      }

      // Normal paragraph
      flushList();
      elements.push(
        <p key={`p-${i}`} className="text-xs sm:text-sm text-slate-700 leading-relaxed my-3">
          {parseInlineStyles(line)}
        </p>
      );
    }

    flushList();
    return elements;
  };

  return (
    <div className="space-y-12 pb-16">
      <SEO
        title={`${blog.title} | Aquasol Energy Pune`}
        description={blog.summary}
        keywords={blog.tags?.join(', ') || 'solar blog, Pune solar'}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition">Blog &amp; Guides</Link>
            <span>/</span>
            <span className="text-brand-amber-400 line-clamp-1">{blog.title}</span>
          </div>

          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              {blog.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 flex-wrap">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-amber-400" />
              <span>{blog.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{blog.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{blog.readTimeMinutes} min read</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl space-y-6">
          {/* Cover Image */}
          {blog.coverImage && (
            <div className="rounded-2xl overflow-hidden max-h-[400px] bg-slate-950">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          )}

          {/* Quick Summary Box */}
          <div className="p-4 sm:p-5 bg-brand-blue-50 border-l-4 border-brand-blue-600 rounded-r-2xl text-xs sm:text-sm text-brand-blue-950 font-medium leading-relaxed">
            <p className="font-bold text-brand-blue-900 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-brand-blue-600" />
              <span>Article Overview &amp; Key Takeaways:</span>
            </p>
            <p>{blog.summary}</p>
          </div>

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none">
            {renderFormattedContent(blog.content)}
          </div>

          {/* Tags */}
          {blog.tags?.length > 0 && (
            <div className="pt-6 border-t border-slate-100 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share / Back Link */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-100 text-xs">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-bold text-brand-blue-600 hover:text-brand-blue-800 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </Link>

            <span className="text-slate-400">
              Published by Aquasol Energy Engineering
            </span>
          </div>
        </article>

        {/* CTA Consultation Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have Questions About This Topic?</h4>
            <p className="text-xs text-slate-300">
              Talk with Aquasol Energy’s certified Pune engineers for a customized solution.
            </p>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="px-6 py-3 bg-brand-amber-500 hover:bg-brand-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition shrink-0 cursor-pointer"
          >
            Ask a Solar Expert
          </button>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-bold text-slate-900">
              Related Guides &amp; Articles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {relatedBlogs.map((rel) => (
                <article
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="h-32 bg-slate-100 overflow-hidden">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-brand-blue-600 uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1">
                        <Link to={`/blog/${rel.slug}`} className="hover:text-brand-blue-600">
                          {rel.title}
                        </Link>
                      </h4>
                    </div>

                    <Link
                      to={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-amber-500 hover:text-brand-amber-600 pt-2"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

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
