import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-amber-200/80 text-slate-700 pt-16 pb-6 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-screen-2xl mx-auto space-y-12">

        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-8 lg:gap-12">

          {/* Brand Info */}
          <div className="w-full lg:w-[26%] space-y-4 font-sans shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl lg:text-2xl font-black text-slate-900 tracking-wider">
                MUSCLE <div><span className="text-amber-700">EMPIRE GYM</span></div>
              </span>
            </div>

            <p className="text-xs lg:text-sm text-slate-700 font-normal leading-relaxed">
              An elite high-performance athletic institution providing bespoke mechanical training routines, precision macro-nutrient timing, and commercial-grade physical apparatus.
            </p>

            <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-amber-800 pt-2 font-mono">
              <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
              <span>ISO 9001 Biomechanical Facility</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto space-y-3 text-xs lg:text-sm font-mono shrink-0">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] lg:text-xs text-amber-800">
              Ecosystem
            </span>
            <ul className="space-y-2 lg:space-y-3 font-medium">
              <li><Link to="/workouts" className="text-slate-700 hover:text-amber-700 transition-colors">Workouts</Link></li>
              <li><Link to="/diets" className="text-slate-700 hover:text-amber-700 transition-colors">Diet</Link></li>
              <li><Link to="/equipment" className="text-slate-700 hover:text-amber-700 transition-colors">Equipment</Link></li>
              <li><Link to="/trainers" className="text-slate-700 hover:text-amber-700 transition-colors">Trainers</Link></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="w-full sm:w-auto space-y-3 text-xs lg:text-sm font-mono shrink-0">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] lg:text-xs text-amber-800">
              Governance
            </span>
            <ul className="space-y-2 lg:space-y-3 font-medium">
              <li><Link to="/privacy-policy" className="text-slate-700 hover:text-amber-700 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-access" className="text-slate-700 hover:text-amber-700 transition-colors">Terms of Access</Link></li>
              <li><Link to="/client-nda" className="text-slate-700 hover:text-amber-700 transition-colors">Client NDA</Link></li>
              <li><Link to="/cookie-settings" className="text-slate-700 hover:text-amber-700 transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-[28%] lg:w-[24%] space-y-3 font-sans shrink-0">
            <span className="text-slate-900 font-bold uppercase tracking-widest block text-[10px] lg:text-xs text-amber-800 font-mono">
              {/* Private Dispatch */}
              Contact
            </span>

            {/* <p className="text-xs lg:text-sm text-slate-700 font-normal">
              Receive quarterly physiological performance papers and biomechanical research updates.
            </p> */}

            <div className="pt-0 space-y-1.5 text-xs lg:text-sm text-slate-700 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>9b The Broadway, Woodford Green, Essex IG8 0HL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>+44 20 8500 0000</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="border-t border-amber-200/60 pt-4 pb-0 -mb-4 flex flex-col sm:flex-row items-center justify-center text-[11px] lg:text-sm font-mono font-medium text-slate-600 gap-4">
          <div>
            © {new Date().getFullYear()} ATSEWA GmbH All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}