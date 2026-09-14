import React from 'react';
import { FileText, ShieldAlert, Scale, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export default function TermAccess() {
  return (
    <div 
      className="relative text-stone-700 min-h-screen pt-6 pb-16 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Legal & Facility Access
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            TERMS & ACCESS PROTOCOLS
          </h1>

          <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Review our strict facility operational guidelines, membership conduct rules, and digital platform access terms.
          </p>
        </div>

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm font-sans">
          
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600 shrink-0" /> 1. Membership & Facility Access
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              Access to ATSEWA PVT.LTD infrastructure and digital training ecosystems requires strict adherence to our security credentials. Unauthorized sharing of VIP access tokens or digital keys will result in immediate termination of contract.
            </p>
          </div>

          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" /> 2. Liability & Performance Risk
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              High-performance training, advanced hypertrophy protocols, and max-RPE testing carry inherent physical risks. Clients acknowledge they have cleared medical evaluations and assume full responsibility for physiological exertion limits.
            </p>
          </div>

          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600 shrink-0" /> 3. Intellectual Property
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              All proprietary workout programs, dietary frameworks, video demonstrations, and telemetry software provided by ATSEWA are protected under intellectual property law. Redistribution or commercial use is strictly prohibited.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}