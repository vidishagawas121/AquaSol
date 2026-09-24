import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';

const categories = [
  'All',
  'Solar Water Heater',
  'Solar PV',
  'Heat Pump',
  'Solar Street Light',
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Solar Water Heaters, Solar Panels & Heat Pumps Catalog Pune"
        description="Browse Aquasol Energy's range of Stainless Steel ETC & FPC Solar Water Heaters, Tier-1 Mono PERC Solar Panels, On-Grid Inverters, and Commercial Heat Pumps in Pune."
        keywords="Solar water heater Pune price, ETC solar water heater Pune, FPC solar heater, Mono PERC solar panel Pune, On grid solar inverters, Heat pump water heater Pune"
        canonical="https://aquasolenergy.in/products"
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Aquasol Hardware & Systems
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solar Products Catalog
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered for high thermal absorption, durable rust-resistance, and maximum electricity savings under Indian weather conditions.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
                activeCategory === cat
                  ? 'bg-brand-blue-600 text-white shadow-md shadow-brand-blue-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="h-60 sm:h-64 bg-slate-950 relative overflow-hidden flex items-center justify-center p-3 group">
                  {item.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative z-10 max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md rounded-lg"
                      />
                    </>
                  ) : (
                    <div className="text-slate-400 text-xs font-semibold">Aquasol Product Image</div>
                  )}
                  <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-sm border border-slate-700">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.shortDescription}
                  </p>

                  {item.capacities?.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase">Available Options:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.capacities.map((c, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded">
                            {c.capacity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                  <span className="text-emerald-700 font-semibold">{item.warranty}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to={`/products/${item.slug}`}
                    className="py-2.5 text-center text-xs font-bold text-brand-blue-700 bg-brand-blue-50 hover:bg-brand-blue-100 rounded-xl transition"
                  >
                    Specifications
                  </Link>
                  <button
                    onClick={() => {
                      setQuoteProduct(item.title);
                      setQuoteOpen(true);
                    }}
                    className="py-2.5 text-center text-xs font-bold text-white bg-brand-amber-500 hover:bg-brand-amber-600 rounded-xl shadow transition"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={quoteProduct}
        source="Product Catalog"
      />
    </div>
  );
};

export default ProductsPage;
