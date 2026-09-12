import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { solutions as allSolutions } from '../data';
import QuoteModal from '../components/QuoteModal';

const SolutionsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  const filteredSolutions = activeCategory === 'All'
    ? allSolutions
    : allSolutions.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Energy Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Renewable Energy Solutions
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tailored engineering systems for residential bungalows, housing societies, commercial complexes, and industrial sites across Pune.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          {['All', 'Residential', 'Commercial', 'Universal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-brand-blue-600 text-white shadow-md shadow-brand-blue-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat} Solutions
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredSolutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber-600">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.shortDescription}</p>

                {item.keyBenefits?.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-bold text-slate-700 uppercase">Key Advantages:</p>
                    {item.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/solutions/${item.slug}`}
                  className="text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => {
                    setQuoteProduct(item.title);
                    setQuoteOpen(true);
                  }}
                  className="text-xs font-bold text-brand-amber-600 hover:text-brand-amber-700"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={quoteProduct}
        source="Solutions Page"
      />
    </div>
  );
};

export default SolutionsPage;
