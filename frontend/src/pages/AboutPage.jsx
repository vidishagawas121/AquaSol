import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, MapPin, Phone, Mail, CheckCircle2, Sun, Target, Eye, Users } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SectionHeading from '../components/SectionHeading';
import msmeLogo from '../assets/msme_logo.png';
import vendorBadge from '../assets/official_vendor_badge.png';
import familyHero from '../assets/pm_surya_ghar_family.png';

const AboutPage = () => {
  const { settings } = useSettings();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            About Aqua-Sol Energy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Solar Excellence in Pune
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Registered MSME enterprise dedicated to advancing clean solar photovoltaic energy, energy-efficient solar water heating, and prompt local engineering support across Maharashtra.
          </p>
        </div>
      </section>

      {/* Overview & Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-600">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              A Trusted Local Renewable Energy Partner Based in Chandan Nagar, Pune
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Aqua-Sol Energy operates with a clear mission: to make solar energy accessible, financially rewarding, and hassle-free for residential homeowners, housing societies, commercial establishments, and institutions.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike generic sales brokers, we possess in-house technical capabilities for precision solar engineering, MSEDCL net-metering approvals, argon stainless steel tank welding, chemical-free tube descaling, and comprehensive Annual Maintenance Contracts (AMC).
            </p>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                <img src={msmeLogo} alt="MSME Logo" className="h-9 w-auto" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">MSME Registered</h4>
                  <p className="text-[11px] text-slate-500">Government recognized enterprise</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                <img src={vendorBadge} alt="Vendor Badge" className="h-9 w-auto" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Official Vendor</h4>
                  <p className="text-[11px] text-slate-500">PM Surya Ghar liaison</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img src={familyHero} alt="Aqua-Sol Pune Team & Installation" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower every household and enterprise in Pune to generate their own clean electricity and hot water with zero emissions, substantial financial savings, and dependable long-term engineering support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-amber-50 text-brand-amber-600 flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be Maharashtra’s most trustworthy renewable-energy engineering solutions provider, recognized for uncompromising component quality, honest transparent advice, and lifecycle technical service.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Service Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <SectionHeading
            badge="Local Footprint"
            title="Service Areas Across Pune & PCMC"
            subtitle="Our Pune-based field engineers and rapid repair vans operate across all major regions:"
            className="text-white"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-xs">
            {[
              'Chandan Nagar',
              'Kharadi',
              'Viman Nagar',
              'Wagholi',
              'Hadapsar',
              'Magarpatta',
              'Kalyani Nagar',
              'Koregaon Park',
              'Shivajinagar',
              'Kothrud',
              'Baner & Balewadi',
              'Wakad & Hinjewadi',
              'Pimpri-Chinchwad',
              'Bhosari & Chakan',
              'Katraj & Kondhwa',
              'Undri & Pisoli',
              'Aundh & Pashan',
              'Shikrapur & Shirur',
            ].map((area) => (
              <div key={area} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 font-semibold text-slate-200">
                {area}
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-slate-400">
              Need site survey or repair in your locality? Call directly:{' '}
              <a href={`tel:${settings.primaryPhone}`} className="text-brand-amber-400 font-bold hover:underline">
                {settings.primaryPhone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
