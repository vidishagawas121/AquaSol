import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { solutions } from '../data';
import { useSettings } from '../context/SettingsContext';
import QuoteModal from '../components/QuoteModal';

const SolutionDetailPage = () => {
  const { slug } = useParams();
  const { settings } = useSettings();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const solution = solutions.find((s) => s.slug === slug) || solutions[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Breadcrumb & Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-white">Solutions</Link>
            <span>/</span>
            <span className="text-brand-amber-400">{solution.title}</span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            {solution.category} Solution
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {solution.title}
          </h1>
          {solution.subtitle && (
            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {solution.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Detailed Overview & Benefits */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Solution Overview</h3>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {solution.fullDescription}
              </p>
            </div>

            {solution.keyBenefits?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Key Engineering & Financial Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {solution.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {solution.applications?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Recommended Applications</h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {solution.applications.map((app, i) => (
                    <span key={i} className="px-3 py-1.5 bg-brand-blue-50 text-brand-blue-800 text-xs font-semibold rounded-lg">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Lead Box & Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-brand-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-400">
                Direct Engineering Quote
              </span>
              <h4 className="text-xl font-bold text-white">
                Interested in {solution.title}?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our Pune solar engineers for a customized technical estimate, roof shadow analysis, and subsidy computation.
              </p>

              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs rounded-xl shadow transition"
              >
                Request Free Quote for this Solution
              </button>

              <a
                href={`tel:${settings.primaryPhone}`}
                className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-brand-amber-400" />
                Call {settings.primaryPhone}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">Quick Actions</h5>
              <Link
                to="/book-survey"
                className="block p-3 text-xs font-semibold text-brand-blue-700 hover:bg-brand-blue-50 rounded-xl transition"
              >
                📅 Book Free Site Survey in Pune
              </Link>
              <Link
                to="/solar-calculator"
                className="block p-3 text-xs font-semibold text-brand-blue-700 hover:bg-brand-blue-50 rounded-xl transition"
              >
                ⚡ Estimate Solar Generation & Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={solution.title}
        source={`Solution Detail: ${solution.title}`}
      />
    </div>
  );
};

export default SolutionDetailPage;
