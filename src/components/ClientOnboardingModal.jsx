import React from 'react';
import { useClient } from '../context/ClientContext';
import { Crown, Sparkles, ArrowRight, X, ShieldCheck } from 'lucide-react';

export default function ClientOnboardingModal() {
  const { showWelcomeModal, acknowledgeWelcome } = useClient();

  if (!showWelcomeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      {/* Container Card */}
      <div className="max-w-lg w-full bg-zinc-950 border border-amber-500/30 rounded-xl p-8 md:p-10 shadow-[0_0_60px_rgba(245,158,11,0.12)] relative overflow-hidden text-center">
        
        {/* Background Ambient Gold Radial Glow */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Optional Top Close Button */}
        <button 
          onClick={acknowledgeWelcome}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="relative p-4 bg-amber-500/10 rounded-full border border-amber-500/30 shadow-inner">
            <Crown className="w-8 h-8 text-amber-400" />
            <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>

        {/* Badge */}
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 border border-amber-500/20 bg-amber-500/5 px-3 py-1 rounded-full mb-3">
          Private Access Recognized
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 tracking-tight">
          WELCOME TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            MUSCLE EMPIRE CLUB
          </span>
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-light">
          You are entering an elite performance ecosystem. Gain complimentary preliminary access to tailored workout routines, precision macro diets, and master trainers.
        </p>

        {/* Benefits Checklist */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-4 mb-8 text-left space-y-2.5">
          <div className="flex items-center gap-3 text-xs text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Bespoke high-intensity & home training blueprints</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Targeted macro-nutrient and performance meal plans</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct booking with world-class fitness specialists</span>
          </div>
        </div>

        {/* Primary CTA */}
        <button
          onClick={acknowledgeWelcome}
          className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-bold text-xs uppercase tracking-[0.2em] py-4 px-6 rounded-md shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.98] transition-all duration-300"
        >
          <span>Claim VIP Experience</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Footer Note */}
        <p className="text-[10px] text-zinc-600 mt-4 tracking-wider uppercase">
          Status saved automatically via secure client browser cookies
        </p>

      </div>
    </div>
  );
}