import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-amber-200/80 text-slate-700 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
                A
              </div>
              <span className="font-serif text-xl font-black text-slate-900 tracking-wider">
                MUSCLE EMPIRE<span className="text-amber-700">GYM</span>
              </span>
            </div>

            <p className="text-xs text-slate-700 font-normal leading-relaxed max-w-sm">
              An elite high-performance athletic institution providing bespoke mechanical training routines, precision macro-nutrient timing, and commercial-grade physical apparatus.
            </p>
             <div className="flex items-center gap-6">
            <span>Park Ave, NY</span>
            <span>•</span>
            <span>Mayfair, London</span>
            <span>•</span>
            <span>Ginza, Tokyo</span>
          </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 pt-2 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>ISO 9001 Biomechanical Facility</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3 text-xs font-mono">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] text-amber-800">
              Ecosystem
            </span>
            <ul className="space-y-2 font-medium">
              <li><Link to="/workouts" className="text-slate-700 hover:text-amber-700 transition-colors">Workouts</Link></li>
              <li><Link to="/diets" className="text-slate-700 hover:text-amber-700 transition-colors">Diet</Link></li>
              <li><Link to="/equipment" className="text-slate-700 hover:text-amber-700 transition-colors">Equipment</Link></li>
              <li><Link to="/trainers" className="text-slate-700 hover:text-amber-700 transition-colors">Trainers</Link></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="md:col-span-2 space-y-3 text-xs font-mono">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] text-amber-800">
              Governance
            </span>
            <ul className="space-y-2 font-medium">
              <li><Link to="/privacy-policy" className="text-slate-700 hover:text-amber-700 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-access" className="text-slate-700 hover:text-amber-700 transition-colors">Terms of Access</Link></li>
              <li><Link to="/client-nda" className="text-slate-700 hover:text-amber-700 transition-colors">Client NDA</Link></li>
              <li><Link to="/cookie-settings" className="text-slate-700 hover:text-amber-700 transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>

          {/* Newsletter / Direct Inquiry */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] text-amber-800 font-mono">
              Private Dispatch
            </span>
            <p className="text-xs text-slate-700 font-normal">
              Receive quarterly physiological performance papers and biomechanical research updates.
            </p>

            <div className="flex items-center gap-2 pt-1 font-mono">
              <input
                type="email"
                placeholder="executive@domain.com"
                className="bg-white border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 w-full shadow-sm"
              />
              <button
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white p-2.5 rounded-xl transition-colors shrink-0 shadow-md shadow-amber-600/20"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="border-t border-amber-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono font-medium text-slate-600 gap-4">
          <div>
            © {new Date().getFullYear()} ATSEWA GmbH All Rights Reserved.
          </div>
        
        </div>

      </div>
    </footer>
  );
}