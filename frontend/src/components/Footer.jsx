import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sun, ArrowRight, MessageCircle } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import aquaLogo from '../assets/aqua_sol_logo.png';
import msmeLogo from '../assets/msme_logo.png';
import vendorBadge from '../assets/official_vendor_badge.png';

const Footer = () => {
  const { settings } = useSettings();

  const phoneDigits = settings.whatsappNumber?.replace(/[^0-9]/g, '') || '918275067701';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=Hello%20Aqua-Sol%20Energy,%20I%20would%20like%20to%20enquire%20about%20solar%20solutions%20in%20Pune.`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-950 to-slate-900 py-6 sm:py-8 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-slate-800">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/20 text-brand-amber-400 border border-brand-amber-500/30 mb-2">
              <Sun className="w-3.5 h-3.5" /> PM Surya Ghar Authorized Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to Save Up to 90% on Your Electricity Bill?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Claim up to ₹78,000 direct central government subsidy and get free solar power on your Pune rooftop.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solar-calculator"
              className="px-5 py-2.5 bg-brand-amber-500 hover:bg-brand-amber-600 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-amber-500/20 transition duration-200"
            >
              Calculate Solar Savings
            </Link>
            <Link
              to="/book-survey"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition duration-200"
            >
              Book Free Site Survey
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14">
          {/* Column 1: Company Profile & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white px-3.5 py-1.5 rounded-xl shadow-xs hover:shadow-sm transition">
              <img src={aquaLogo} alt="Aqua-Sol Energy" className="h-9 w-auto object-contain" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aqua-Sol Energy is Pune's authorized solar engineering enterprise providing high-efficiency On-Grid Rooftop Solar PV, Solar Water Heaters, Heat Pumps, and specialized Argon welding repairs.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="bg-slate-900/90 hover:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2.5 shadow-sm transition">
                <div className="bg-white px-2 py-0.5 rounded-md flex items-center justify-center shadow-xs">
                  <img src={msmeLogo} alt="Govt. of India MSME Registered" className="h-6 w-auto object-contain" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Govt. of India</span>
                  <span className="text-[11px] font-bold text-slate-200">MSME Registered</span>
                </div>
              </div>

              <div className="bg-slate-900/90 hover:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2 shadow-sm transition">
                <img src={vendorBadge} alt="Official Vendor" className="h-7 w-7 object-contain drop-shadow" />
                <div className="leading-tight">
                  <span className="block text-[9px] font-bold text-brand-amber-400 uppercase tracking-wider">Authorized</span>
                  <span className="text-[11px] font-bold text-slate-200">Official Vendor</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/25 rounded-xl text-xs font-bold transition"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-transparent" />
                <span>WhatsApp Hotline: {settings.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products & Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 border-l-2 border-brand-amber-500 pl-2.5">
              Products & Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/products/solar-water-heater" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Solar Water Heaters (ETC/FPC)
                </Link>
              </li>
              <li>
                <Link to="/products/rooftop-solar-pv-system" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Rooftop Solar PV Systems
                </Link>
              </li>
              <li>
                <Link to="/products/heat-pump-water-heater" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Commercial Heat Pumps
                </Link>
              </li>
              <li>
                <Link to="/products/solar-street-light" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Solar LED Street Lights
                </Link>
              </li>
              <li>
                <Link to="/solutions/residential-rooftop-solar" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Residential Rooftop Solar
                </Link>
              </li>
              <li>
                <Link to="/solutions/commercial-industrial-solar" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-500 shrink-0" />
                  Commercial & Industrial Solar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services & Schemes (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 border-l-2 border-brand-green-500 pl-2.5">
              Services & Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/pm-surya-ghar" className="text-amber-400 hover:text-amber-300 font-semibold transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-amber-400 shrink-0" />
                  PM Surya Ghar (₹78K)
                </Link>
              </li>
              <li>
                <Link to="/services/solar-water-heater-servicing" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Water Heater Servicing
                </Link>
              </li>
              <li>
                <Link to="/services/solar-tank-repairing" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Argon Tank Repairing
                </Link>
              </li>
              <li>
                <Link to="/services/tank-solar-leakage-removal" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Leakage Removal Work
                </Link>
              </li>
              <li>
                <Link to="/services/solar-panel-brush-cleaning" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Panel Brush Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/solar-water-heater-amc" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Annual Maintenance (AMC)
                </Link>
              </li>
              <li>
                <Link to="/solar-calculator" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-green-500 shrink-0" />
                  Solar Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pune Registered Office (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 border-l-2 border-brand-blue-500 pl-2.5">
              Pune Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{settings.officeAddress}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${settings.primaryPhone}`} className="hover:text-white font-semibold text-slate-200 transition">
                    {settings.primaryPhone}
                  </a>
                  <a href={`tel:${settings.secondaryPhone || '+91 7391037702'}`} className="hover:text-white font-semibold text-slate-200 transition">
                    {settings.secondaryPhone || '+91 7391037702'} <span className="text-slate-400 text-[11px] font-normal">(Samarth)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${settings.primaryEmail}`} className="hover:text-white transition">
                  {settings.primaryEmail}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{settings.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-900 mt-5 pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Aqua-Sol Energy. All rights reserved. Clean Solar & Renewable Energy Solutions.</p>
          <div className="flex items-center gap-3.5 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/disclaimer" className="hover:text-slate-300 transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
