import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sun,
  Target,
  Eye,
  Users,
  Building,
  GraduationCap,
  Shield,
  Factory,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import { esteemedClients, brandLegacy } from '../data';
import SectionHeading from '../components/SectionHeading';
import msmeLogo from '../assets/msme_logo.png';
import vendorBadge from '../assets/official_vendor_badge.png';
import familyHero from '../assets/pm_surya_ghar_family.png';

const AboutPage = () => {
  const { settings } = useSettings();

  const getClientIcon = (iconType) => {
    switch (iconType) {
      case 'graduation-cap':
        return <GraduationCap className="w-4 h-4 text-brand-amber-500" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-emerald-500" />;
      case 'factory':
        return <Factory className="w-4 h-4 text-blue-500" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-4 h-4 text-purple-500" />;
      default:
        return <Building className="w-4 h-4 text-brand-amber-500" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
            <Award className="w-3.5 h-3.5 text-brand-amber-400" /> 15 Years of Engineering Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Illuminating a Sustainable Future Since 2009
          </h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {brandLegacy.overview}
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
              A Trusted Leader in Solar Energy Solutions for 15+ Years
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {brandLegacy.reputation}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {brandLegacy.philosophy}
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
                  <p className="text-[11px] text-slate-500">PM Surya Ghar partner</p>
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

      {/* Esteemed Clientele Showcase */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl text-white space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30">
              <Users className="w-3.5 h-3.5" /> Esteemed Partners & Developers
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Proud Partners to Leading Organizations
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Over the past 15 years, our engineering solutions have powered premier real estate builders, educational institutions, industries, and defense facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {esteemedClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 p-3 sm:p-4 rounded-2xl border border-slate-700/80 hover:border-brand-amber-500/50 transition flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  {getClientIcon(client.iconType)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">{client.name}</h4>
                  <span className="text-[10px] font-semibold text-brand-amber-400 block mt-0.5">{client.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-1 sm:pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-amber-400 hover:text-brand-300"
            >
              Explore Our Case Studies & Portfolio →
            </Link>
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
              </a>{' '}
              /{' '}
              <a href={`tel:${settings.secondaryPhone || '+91 7391037702'}`} className="text-brand-amber-400 font-bold hover:underline">
                {settings.secondaryPhone || '+91 7391037702'}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
