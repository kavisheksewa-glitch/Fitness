import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Flame, 
  Activity, 
  Zap, 
  ArrowRight, 
  Award,
  ChevronRight
} from 'lucide-react';
import home1 from '../assets/home1.webp';
import home2 from '../assets/home2.webp';
import home3 from '../assets/home3.webp';
import home4 from '../assets/home4.webp';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const workoutPrograms = [
    {
      id: 1,
      category: 'muscle',
      title: 'Hypertrophy & Power Mechanics',
      subtitle: 'Progressive overload protocol for athletic muscle density',
      image: home2,
      tag: 'Gym Strict',
      duration: '45-60 Mins',
      calories: '620 kcal',
      level: 'Advanced'
    },
    {
      id: 2,
      category: 'home',
      title: 'Bodyweight Calisthenics',
      subtitle: 'Zero-equipment body control & explosive conditioning',
      image: home3,
      tag: 'Home / Gear-Free',
      duration: '35 Mins',
      calories: '480 kcal',
      level: 'All Levels'
    },
    {
      id: 3,
      category: 'fatloss',
      title: 'Metabolic Athletic Shred',
      subtitle: 'High-intensity interval protocols for maximum fat oxidation',
      image: home4,
      tag: 'HIIT Conditioning',
      duration: '40 Mins',
      calories: '750 kcal',
      level: 'High Intensity'
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? workoutPrograms 
    : workoutPrograms.filter(p => p.category === activeCategory);

  return (
    <div 
      className="min-h-screen text-stone-900 pb-20 px-4 md:px-8 lg:px-10 pt-6"
      style={{ 
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px"
      }}
    >
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 font-sans">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-green-200 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700">
                Live: 420+ Athletes Training Now
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.1]">
                TRANSFORM YOUR <br />
                <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                  BODY & ATHLETICISM
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-normal leading-relaxed font-sans">
                Scientific biomechanical workouts, precision macro nutrition plans, and direct 1-on-1 coaching designed to unlock your genetic potential.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono">
              <Link
                to="/workouts"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all shadow-md shadow-amber-600/20"
              >
                <Dumbbell className="w-4 h-4" />
                <span>Explore Workouts</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 bg-white/90 border border-amber-200 hover:border-amber-600 text-stone-800 hover:text-amber-700 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all shadow-sm backdrop-blur-md"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Explore Gear</span>
              </Link>
            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 font-mono">
              <div>
                <span className="block text-xl font-bold text-amber-700 font-serif">99.8%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Goal Achievement</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-stone-900 font-serif">15k+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Active Members</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-amber-700 font-serif">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Custom Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 font-sans">
            
            {/* Main Visual Image */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-200 bg-stone-900 shadow-xl group">
              <img
                src={home1}
                alt="Athlete Heavy Lifting"
                className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 font-mono">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    Active Routine
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse text-amber-400" /> Telemetry Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-serif">Barbell Squat & Hypertrophy</h3>
                <p className="text-xs text-stone-300 font-sans">Quadriceps, Core, and Gluteus Power Output</p>
              </div>
            </div>

            {/* Floating Live Heart Rate Card — desktop only */}
            <div className="hidden lg:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-lg items-center gap-3 border-l-4 border-l-amber-600 font-mono">
              <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">Heart Rate</span>
                <span className="text-xs font-bold text-stone-900">158 BPM Peak</span>
              </div>
            </div>

            {/* Floating Calories Burned Card — desktop only */}
            <div className="hidden lg:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-lg items-center gap-3 border-l-4 border-l-yellow-600 font-mono">
              <div className="p-2 bg-yellow-50 rounded-xl text-yellow-700">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">Target Burn</span>
                <span className="text-xs font-bold text-stone-900">680 kcal / hr</span>
              </div>
            </div>

            {/* Mobile: Stats Row below the image — no overlap */}
            <div className="grid grid-cols-2 gap-3 mt-4 lg:hidden font-mono">
              <div className="bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 border-l-4 border-l-amber-600">
                <div className="p-2 bg-amber-50 rounded-xl text-amber-600 shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">Heart Rate</span>
                  <span className="text-xs font-bold text-stone-900">158 BPM Peak</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 border-l-4 border-l-yellow-600">
                <div className="p-2 bg-yellow-50 rounded-xl text-yellow-700 shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">Target Burn</span>
                  <span className="text-xs font-bold text-stone-900">680 kcal / hr</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ================= PROGRAM FILTER SECTION ================= */}
        <section className="space-y-6 pt-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-sans">
            <div className="space-y-1">
              <span className="text-amber-700 text-[10px] font-mono font-bold uppercase tracking-[0.2em] block">
                Target Disciplines
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                SELECT YOUR ROUTINE
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-amber-200 shadow-sm text-xs font-mono font-bold">
              {[
                { id: 'all', label: 'All Routines' },
                { id: 'muscle', label: 'Hypertrophy' },
                { id: 'fatloss', label: 'Fat Shred' },
                { id: 'home', label: 'Home Fitness' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-xl transition-all uppercase tracking-wider text-[10px] cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-amber-50/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Workout Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-3xl overflow-hidden hover:border-amber-500 transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-amber-800 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-amber-200">
                      {program.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg font-bold text-stone-900">
                        {program.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {program.subtitle}
                      </p>
                    </div>

                    {/* Metadata Pills */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-amber-100 text-center text-xs font-mono">
                      <div>
                        <span className="text-stone-400 text-[9px] uppercase block font-bold tracking-wider">Duration</span>
                        <span className="font-bold text-stone-800">{program.duration}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 text-[9px] uppercase block font-bold tracking-wider">Burn</span>
                        <span className="font-bold text-amber-700">{program.calories}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 text-[9px] uppercase block font-bold tracking-wider">Level</span>
                        <span className="font-bold text-stone-800">{program.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-6 pt-0 font-mono">
                  <Link
                    to="/workouts"
                    className="w-full flex items-center justify-center gap-2 bg-stone-50 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white border border-amber-200 text-stone-800 font-bold text-xs uppercase tracking-[0.15em] py-3 rounded-xl transition-all shadow-sm"
                  >
                    <span>Access Protocol</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================= VIP COACHING BANNER ================= */}
        <section className="pt-6">
          <div className="rounded-3xl bg-stone-900 text-white p-8 md:p-12 overflow-hidden shadow-xl border border-amber-500/30 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 font-sans">
                <div className="inline-flex items-center gap-2 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/20">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Certified Master Conditioning Coaches</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  NEED INDIVIDUAL COACHING & FORM ANALYSIS?
                </h2>

                <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-normal leading-relaxed">
                  Get custom macro-nutrient split timing, video posture analysis, and targeted strength programming direct from our master coaches.
                </p>

                <div className="pt-2 font-mono">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all shadow-md shadow-amber-600/30"
                  >
                    <span>Book Private Coaching</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <img
                  src={home1}
                  alt="Personal Trainer Coaching"
                  className="rounded-2xl border border-amber-500/40 shadow-lg object-cover h-56 w-full opacity-90"
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}