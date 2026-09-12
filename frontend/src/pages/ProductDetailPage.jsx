import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Check } from 'lucide-react';
import { products } from '../data';
import { useSettings } from '../context/SettingsContext';
import QuoteModal from '../components/QuoteModal';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { settings } = useSettings();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const product = products.find((p) => p.slug === slug) || products[0];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappMsg = `Hello Aqua-Sol Energy, I am interested in ${product.title}. Please share specifications, pricing, and installation timeline in Pune.`;
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="space-y-16 pb-16">
      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-brand-amber-400">{product.title}</span>
          </div>

          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            {product.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Product Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              ) : (
                <div className="text-slate-400 text-sm font-semibold p-12">Aqua-Sol Product Image</div>
              )}
            </div>

            {/* Warranty Protection */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <p className="text-xs font-bold text-emerald-900">Warranty Protection</p>
                <p className="text-xs text-emerald-700">{product.warranty}</p>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-slate-900">{product.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{product.shortDescription}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-amber-500/25 transition"
              >
                Enquire Now
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-lg shadow-green-500/20 transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                WhatsApp Enquiry
              </a>
            </div>

            {/* Features List */}
            {product.features?.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Key Features</h4>
                <div className="space-y-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sizing & Capacities */}
            {product.capacities?.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Capacity & Sizing Options</h4>
                <div className="divide-y divide-slate-100 text-xs">
                  {product.capacities.map((c, i) => (
                    <div key={i} className="py-2 flex items-center justify-between">
                      <span className="font-bold text-brand-blue-700">{c.capacity}</span>
                      <span className="text-slate-500">{c.idealFor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Full Description & Specifications Table */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Technical Product Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Specifications</h3>
            {product.specifications?.length > 0 ? (
              <div className="divide-y divide-slate-100 text-xs">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-slate-500">{spec.label}</span>
                    <span className="font-bold text-slate-800 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400">Standard manufacturer specifications apply.</p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.slug}`}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 p-1">
                    {rel.image && (
                      <img src={rel.image} alt={rel.title} className="max-h-full max-w-full object-contain" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-1">{rel.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">{rel.category}</p>
                    <span className="text-[11px] text-brand-blue-600 font-semibold mt-1 inline-block">View specs →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={product.title}
        source={`Product Detail: ${product.title}`}
      />
    </div>
  );
};

export default ProductDetailPage;
