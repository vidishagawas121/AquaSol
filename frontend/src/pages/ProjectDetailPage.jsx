import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { projects } from '../data';
import QuoteModal from '../components/QuoteModal';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const project = projects.find((p) => p.slug === slug) || projects[0];

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-brand-amber-400">{project.title}</span>
          </div>

          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-amber-400" /> {project.location}</span>
            <span>•</span>
            <span className="font-bold text-brand-amber-400">{project.capacity}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Project Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="text-xs font-bold uppercase text-emerald-900 mb-1">Estimated Annual Savings</h4>
              <p className="text-sm font-bold text-emerald-800">{project.annualSavings}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="text-xs font-bold uppercase text-blue-900 mb-1">CO2 Offset</h4>
              <p className="text-sm font-bold text-blue-800">{project.co2OffsetTons}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Need a Similar Solar Installation?</h4>
            <p className="text-xs text-slate-400 mt-1">Get custom engineering designs and subsidy advice for your property.</p>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="px-6 py-3.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs rounded-xl shadow transition shrink-0"
          >
            Request Similar Solution Quote
          </button>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={`Similar Project: ${project.title}`}
        source={`Project Case Study: ${project.title}`}
      />
    </div>
  );
};

export default ProjectDetailPage;
