import React from 'react';
import { Lock, ShieldCheck, Key, Crown } from 'lucide-react';

export default function ClientNDA() {
  return (
    <div 
      className="relative text-stone-700 min-h-screen pt-6 pb-16 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
        fontFamily: "Georgia, 'Times New Roman', Times, serif"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Governance & Legal
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            CLIENT NON-DISCLOSURE AGREEMENT (NDA)
          </h1>

          <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Standard Mutual Protection Protocol | ATSEWA GmbH
          </p>
        </div>

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm font-sans">
          
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2 uppercase">
              <Lock className="w-4 h-4 text-amber-600 shrink-0" /> 1. Proprietary Training Methodologies
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              All proprietary biomechanical equations, proprietary nutrition blueprints, and proprietary physical training software provided by MUSCLE EMPIRE remain the exclusive intellectual property of the institution. Clients agree not to duplicate or distribute these assets publicly.
            </p>
          </div>

          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2 uppercase">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" /> 2. Client Anonymity & Privacy
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              ATSEWA guarantees complete discretion regarding client identities, private schedules, and membership rosters. No media or performance data is published without explicit written consent from the individual.
            </p>
          </div>

          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2 uppercase">
              <Key className="w-4 h-4 text-amber-600 shrink-0" /> 3. Breach and Enforcement
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              Any unauthorized dissemination of internal diagnostic protocols or breach of facility discretion policies will result in immediate termination of membership access and subsequent legal remedies.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}