import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Sun,
  ShieldAlert,
  Calculator,
  Flame,
  Zap,
  Wrench,
  Award,
  Sparkles,
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import aquaLogo from '../assets/aqua_sol_logo.png';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const { settings } = useSettings();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-slate-900 text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="w-full flex items-center justify-between gap-2">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-3 sm:gap-4 text-slate-300 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${settings.primaryPhone}`}
                  className="flex items-center gap-1.5 hover:text-brand-amber-400 transition text-[11px] sm:text-xs shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{settings.primaryPhone}</span>
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href={`tel:${settings.secondaryPhone || '+91 7391037702'}`}
                  className="flex items-center gap-1 hover:text-brand-amber-400 transition text-[11px] sm:text-xs shrink-0"
                >
                  <span className="font-semibold text-white">{settings.secondaryPhone || '+91 7391037702'}</span>
                </a>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>
              <a
                href={`mailto:${settings.primaryEmail}`}
                className="hidden md:flex items-center gap-1.5 hover:text-white transition text-xs truncate"
              >
                <Mail className="w-3.5 h-3.5 text-brand-blue-400 shrink-0" />
                <span className="truncate">{settings.primaryEmail}</span>
              </a>
              <span className="hidden lg:inline text-slate-600">|</span>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>05 Laxmikunj, Chandan Nagar, Pune</span>
              </span>
            </div>

            {/* Right: PM Surya Ghar Highlight */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/pm-surya-ghar"
                className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-brand-amber-500/20 text-brand-amber-300 border border-brand-amber-500/30 hover:bg-brand-amber-500/30 transition text-[10px] sm:text-[11px] font-semibold"
              >
                <Sun className="w-3 h-3 text-brand-amber-400 animate-spin shrink-0" style={{ animationDuration: '8s' }} />
                <span className="hidden xs:inline sm:inline">PM Surya Ghar: Up to ₹78,000 Subsidy</span>
                <span className="xs:hidden sm:hidden">₹78K Subsidy</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full bg-white transition-all duration-300 ${
            isScrolled ? 'shadow-md py-2 sm:py-2.5' : 'shadow-sm py-2.5 sm:py-3.5'
          }`}
        >
          <div className="w-full px-3 sm:px-6 lg:px-10 flex items-center justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <img
                src={aquaLogo}
                alt="Aquasol Energy Pune"
                className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-2 2xl:gap-3 text-[14px] font-semibold text-slate-700">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/') ? 'text-brand-blue-600 bg-brand-blue-50' : 'hover:text-brand-blue-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/about') ? 'text-brand-blue-600 bg-brand-blue-50' : 'hover:text-brand-blue-600 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    location.pathname.startsWith('/solutions')
                      ? 'text-brand-blue-600 bg-brand-blue-50'
                      : 'hover:text-brand-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
                </Link>

                {solutionsOpen && (
                  <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                    <Link
                      to="/solutions/residential-rooftop-solar"
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue-50 transition"
                    >
                      <Sun className="w-5 h-5 text-brand-amber-500 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Residential Rooftop Solar</p>
                        <p className="text-[11px] text-slate-500 font-normal">PM Surya Ghar up to ₹78K subsidy</p>
                      </div>
                    </Link>
                    <Link
                      to="/solutions/commercial-industrial-solar"
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue-50 transition"
                    >
                      <Zap className="w-5 h-5 text-brand-blue-600 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Commercial & Industrial Solar</p>
                        <p className="text-[11px] text-slate-500 font-normal">Tax depreciation & cost reduction</p>
                      </div>
                    </Link>
                    <Link
                      to="/solutions/solar-water-heating-solutions"
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue-50 transition"
                    >
                      <Flame className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Solar Water Heating</p>
                        <p className="text-[11px] text-slate-500 font-normal">100 to 10,000+ LPD capacity</p>
                      </div>
                    </Link>
                    <Link
                      to="/solutions/heat-pump-solutions"
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue-50 transition"
                    >
                      <Sparkles className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Heat Pump Solutions</p>
                        <p className="text-[11px] text-slate-500 font-normal">24x7 thermodynamic water heating</p>
                      </div>
                    </Link>
                    <Link
                      to="/solutions/solar-street-lighting"
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-brand-blue-50 transition"
                    >
                      <Sun className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Solar Street Lighting</p>
                        <p className="text-[11px] text-slate-500 font-normal">Autonomous LED infrastructure</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    location.pathname.startsWith('/products')
                      ? 'text-brand-blue-600 bg-brand-blue-50'
                      : 'hover:text-brand-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
                </Link>

                {productsOpen && (
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                    <Link
                      to="/products/solar-water-heater"
                      className="block p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition"
                    >
                      Solar Water Heaters (ETC/FPC)
                    </Link>
                    <Link
                      to="/products/rooftop-solar-pv-system"
                      className="block p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition"
                    >
                      Rooftop Solar PV Systems
                    </Link>
                    <Link
                      to="/products/heat-pump-water-heater"
                      className="block p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition"
                    >
                      Commercial & Villa Heat Pumps
                    </Link>
                    <Link
                      to="/products/solar-street-light"
                      className="block p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition"
                    >
                      All-In-One Solar Street Lights
                    </Link>
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        to="/products"
                        className="block p-2 text-xs font-bold text-brand-blue-700 hover:bg-brand-blue-50 rounded-lg text-center"
                      >
                        View Full Catalog →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    location.pathname.startsWith('/services')
                      ? 'text-brand-blue-600 bg-brand-blue-50'
                      : 'hover:text-brand-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
                </Link>

                {servicesOpen && (
                  <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn space-y-1">
                    <Link
                      to="/services"
                      className="flex items-center gap-2.5 p-2.5 text-xs font-bold text-brand-blue-800 bg-brand-blue-50/80 hover:bg-brand-blue-100/80 rounded-lg transition border border-brand-blue-100/60"
                    >
                      <Sparkles className="w-4 h-4 text-brand-amber-500 shrink-0" />
                      <span>Solar Servicing, Repairs & Maintenance</span>
                    </Link>
                    <div className="border-t border-slate-100 my-1 pt-1 space-y-0.5">
                      <Link
                        to="/services/solar-water-heater-servicing"
                        className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50 rounded-lg transition"
                      >
                        <Wrench className="w-4 h-4 text-brand-amber-500 shrink-0" />
                        <span>Solar Water Heater Servicing</span>
                      </Link>
                      <Link
                        to="/services/solar-tank-repairing"
                        className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50 rounded-lg transition"
                      >
                        <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Solar Tank Repairing (Argon Welding)</span>
                      </Link>
                      <Link
                        to="/services/tank-solar-leakage-removal"
                        className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50 rounded-lg transition"
                      >
                        <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Leakage Removal Work</span>
                      </Link>
                      <Link
                        to="/services/solar-panel-brush-cleaning"
                        className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50 rounded-lg transition"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Solar Panel Brush Cleaning</span>
                      </Link>
                      <Link
                        to="/services/solar-water-heater-amc"
                        className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-brand-blue-600 hover:bg-slate-50 rounded-lg transition"
                      >
                        <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Annual Maintenance Contract (AMC)</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* PM Surya Ghar Link */}
              <Link
                to="/pm-surya-ghar"
                className={`relative px-3 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  isActive('/pm-surya-ghar')
                    ? 'text-amber-700 bg-amber-50 border border-amber-200'
                    : 'text-amber-600 hover:bg-amber-50'
                }`}
              >
                <Sun className="w-4 h-4 text-brand-amber-500 fill-brand-amber-500" />
                <span>PM Surya Ghar</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] uppercase font-extrabold bg-brand-amber-500 text-white">
                  ₹78K
                </span>
              </Link>

              {/* Solar Calculator */}
              <Link
                to="/solar-calculator"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  isActive('/solar-calculator')
                    ? 'text-brand-blue-600 bg-brand-blue-50'
                    : 'hover:text-brand-blue-600 hover:bg-slate-50'
                }`}
              >
                <Calculator className="w-4 h-4 text-brand-green-600" />
                <span>Calculator</span>
              </Link>

              <Link
                to="/projects"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/projects') ? 'text-brand-blue-600 bg-brand-blue-50' : 'hover:text-brand-blue-600 hover:bg-slate-50'
                }`}
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/contact') ? 'text-brand-blue-600 bg-brand-blue-50' : 'hover:text-brand-blue-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to="/book-survey"
                className="px-4 py-2.5 text-xs font-bold text-brand-blue-700 bg-brand-blue-50 hover:bg-brand-blue-100 rounded-xl transition border border-brand-blue-200 whitespace-nowrap shrink-0 flex items-center justify-center leading-normal"
              >
                Book Site Survey
              </Link>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 rounded-xl shadow-md shadow-brand-amber-500/20 transition active:scale-95 whitespace-nowrap shrink-0 flex items-center justify-center leading-normal"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-brand-blue-600 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-2xl px-4 py-5 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5 text-sm font-semibold text-slate-700">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between">
                <span>Home</span>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                About Us
              </Link>
              <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Solar & Heating Solutions
              </Link>
              <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Products Catalog
              </Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Solar Servicing, Repairs & Maintenance
              </Link>
              <Link
                to="/pm-surya-ghar"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-brand-amber-500/10 text-brand-amber-800 border border-brand-amber-500/20 font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-brand-amber-600" />
                  <span>PM Surya Ghar Muft Bijli</span>
                </div>
                <span className="text-xs bg-brand-amber-500 text-white px-2 py-0.5 rounded-md font-extrabold">₹78K</span>
              </Link>
              <Link to="/solar-calculator" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Solar Savings Calculator</span>
              </Link>
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Projects & Case Studies
              </Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Solar Guides & News
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-slate-50">
                Contact Pune Office
              </Link>

              <div className="border-t border-slate-100 pt-3 mt-2 flex flex-col gap-2">
                <Link
                  to="/book-survey"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-bold text-brand-blue-700 bg-brand-blue-50 rounded-xl"
                >
                  Book Free Site Survey
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 rounded-xl shadow active:scale-95 transition"
                >
                  Request a Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Global Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

export default Navbar;
