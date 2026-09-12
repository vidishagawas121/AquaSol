import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { projects as allProjects } from '../data';

const filters = ['All', 'Rooftop Solar PV', 'Solar Water Heating', 'Solar Street Lighting', 'Commercial Heat Pump'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            Case Studies & Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Completed Projects
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rooftop solar PV systems, heavy-duty solar water heating installations, and heat pumps delivered across Pune and Maharashtra.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
                activeFilter === f
                  ? 'bg-brand-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div className="h-52 sm:h-56 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-slate-400 text-xs font-semibold">Aqua-Sol Project Photo</div>
                  )}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                    {proj.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-2.5 sm:space-y-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{proj.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-brand-amber-500 shrink-0" />
                    <span className="truncate">{proj.location}</span>
                    <span>•</span>
                    <span className="font-semibold text-brand-blue-700 shrink-0">{proj.capacity}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{proj.description}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="w-full block text-center py-2.5 text-xs font-bold text-brand-blue-700 bg-brand-blue-50 hover:bg-brand-blue-100 rounded-xl transition"
                >
                  View Project Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
