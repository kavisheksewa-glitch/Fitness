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

import home4 from '../assets/home4.webp';
import home2 from '../assets/home2.webp';
import home3 from '../assets/home3.webp';
import home1 from '../assets/home1.webp';
import Trainer3Img from '../assets/Trainner3.webp';
export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  // NOTE: duration / burn / level values are estimates, adjust to your real programs.
  const workoutPrograms = [
    {
      id: 1,
      category: 'hypertrophy',
      title: 'Dumbbell Row & Hinge Hypertrophy',
      subtitle: 'Heavy dumbbell rows and hinges for back and hamstring muscle density',
      image: home2,
      tag: 'Gym Strict',
      duration: '45-60 Mins',
      calories: '520 kcal',
      level: 'Intermediate'
    },
    {
      id: 2,
      category: 'strength',
      title: 'Barbell Deadlift & Posterior Chain Power',
      subtitle: 'Heavy barbell pulls for hamstring, glute and lower-back strength',
      image: home3,
      tag: 'Barbell Power',
      duration: '40 Mins',
      calories: '480 kcal',
      level: 'Advanced'
    },
    {
      id: 3,
      category: 'back',
      title: 'Lat Pulldown & Back Width Builder',
      subtitle: 'Wide-grip cable pulldowns for a broader, thicker back',
      image: home4,
      tag: 'Machine Training',
      duration: '40 Mins',
      calories: '450 kcal',
      level: 'Intermediate'
    }
  ];

  const filteredPrograms =
    activeCategory === 'all'
      ? workoutPrograms
      : workoutPrograms.filter((p) => p.category === activeCategory);

  return (
    <div
      className="min-h-screen text-stone-900 pb-10 px-4 md:px-8 lg:px-10 pt-6"
      style={{
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: '#F7F5F0',
        backgroundImage:
          'radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)',
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px'
      }}
    >
      <div className="max-w-[1400px] mx-auto space-y-16">

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 font-sans">

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-green-200 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-rose-600"></span>
              </span>

              <span className="text-[10px] lg:text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                Live: 420+ Athletes Training Now
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1]">
                TRANSFORM YOUR
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                  BODY & ATHLETICISM
                </span>
              </h1>

              {/* Scientific Paragraph */}
              <p className="text-xs sm:text-sm lg:text-base text-stone-600 max-w-xl lg:max-w-2xl font-normal leading-relaxed font-sans tracking-normal lg:[word-spacing:0.12em]">
                Scientific biomechanical workouts, precision macro nutrition plans, and direct 1-on-1 coaching designed to unlock your genetic potential.
              </p>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-2 font-mono">

              <Link
                to="/workouts"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white text-xs lg:text-sm font-bold uppercase tracking-[0.2em] px-6 py-3.5 lg:px-7 lg:py-4 rounded-xl transition-all shadow-md shadow-amber-600/20"
              >
                <Dumbbell className="w-4 h-4 lg:w-5 lg:h-5" />

                <span>Explore Workouts</span>

                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 bg-white/90 border border-amber-200 hover:border-amber-600 text-stone-800 hover:text-amber-700 text-xs lg:text-sm font-bold uppercase tracking-[0.2em] px-6 py-3.5 lg:px-7 lg:py-4 rounded-xl transition-all shadow-sm backdrop-blur-md"
              >
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
                <span>Explore Gear</span>
              </Link>

            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 font-mono">

              <div>
                <span className="block text-xl lg:text-3xl font-bold text-amber-700 font-serif">
                  99.8%
                </span>

                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-stone-500">
                  Goal Achievement
                </span>
              </div>

              <div>
                <span className="block text-xl lg:text-3xl font-bold text-stone-900 font-serif">
                  15k+
                </span>

                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-stone-500">
                  Active Members
                </span>
              </div>

              <div>
                <span className="block text-xl lg:text-3xl font-bold text-amber-700 font-serif">
                  100%
                </span>

                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-stone-500">
                  Custom Guidance
                </span>
              </div>

            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 font-sans">

            {/* Main Visual Image */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-200 bg-stone-900 shadow-xl group">

              <img
                src={home4}
                alt="Athlete performing lat pulldown"
                className="w-full h-[360px] lg:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 font-mono">

                <div className="flex items-center justify-between">

                  <span className="bg-amber-600 text-white text-[9px] lg:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full shadow">
                    Active Routine
                  </span>

                  <span className="text-[10px] lg:text-xs font-bold tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 lg:w-4 lg:h-4 animate-pulse text-amber-400" />
                    Telemetry Active
                  </span>

                </div>

                <h3 className="text-lg lg:text-xl font-bold text-white font-serif">
                  Lat Pulldown & Back Hypertrophy
                </h3>

                <p className="text-xs lg:text-sm text-stone-300 font-sans">
                  Lats, Upper Back, and Biceps Power Output
                </p>

              </div>
            </div>

            {/* Floating Live Heart Rate Card */}
            <div className="hidden lg:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 xl:p-4 shadow-lg items-center gap-3 border-l-4 border-l-amber-600 font-mono">

              <div className="p-2 xl:p-2.5 bg-amber-50 rounded-xl text-amber-600">
                <Activity className="w-4 h-4 xl:w-5 xl:h-5 animate-pulse" />
              </div>

              <div>
                <span className="text-[9px] xl:text-[11px] text-stone-500 uppercase block font-bold tracking-wider">
                  Heart Rate
                </span>

                <span className="text-xs xl:text-sm font-bold text-stone-900">
                  158 BPM Peak
                </span>
              </div>

            </div>

            {/* Floating Calories Burned Card */}
            <div className="hidden lg:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 xl:p-4 shadow-lg items-center gap-3 border-l-4 border-l-yellow-600 font-mono">

              <div className="p-2 xl:p-2.5 bg-yellow-50 rounded-xl text-yellow-700">
                <Flame className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>

              <div>
                <span className="text-[9px] xl:text-[11px] text-stone-500 uppercase block font-bold tracking-wider">
                  Target Burn
                </span>

                <span className="text-xs xl:text-sm font-bold text-stone-900">
                  450 kcal / hr
                </span>
              </div>

            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4 lg:hidden font-mono">

              <div className="bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 border-l-4 border-l-amber-600">

                <div className="p-2 bg-amber-50 rounded-xl text-amber-600 shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>

                <div>
                  <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">
                    Heart Rate
                  </span>

                  <span className="text-xs font-bold text-stone-900">
                    158 BPM Peak
                  </span>
                </div>

              </div>

              <div className="bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 border-l-4 border-l-yellow-600">

                <div className="p-2 bg-yellow-50 rounded-xl text-yellow-700 shrink-0">
                  <Flame className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[9px] text-stone-500 uppercase block font-bold tracking-wider">
                    Target Burn
                  </span>

                  <span className="text-xs font-bold text-stone-900">
                    450 kcal / hr
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= PROGRAM FILTER SECTION ================= */}
        <section className="space-y-6 pt-0">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-sans ">

            <div className="space-y-1">

              <span className="text-amber-700 text-[10px] lg:text-xs font-mono font-bold uppercase tracking-[0.2em] block">
                Target Disciplines
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
                SELECT YOUR ROUTINE
              </h2>

            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 lg:gap-1.5 bg-white/80 backdrop-blur-md p-1.5 lg:p-2 rounded-2xl border border-amber-200 shadow-sm text-xs font-mono font-bold">

              {[
                { id: 'all', label: 'All Routines' },
                { id: 'hypertrophy', label: 'Hypertrophy' },
                { id: 'strength', label: 'Strength' },
                { id: 'back', label: 'Back Training' }
              ].map((tab) => (

                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-xl transition-all uppercase tracking-wider text-[10px] lg:text-xs cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 font-sans">

            {filteredPrograms.map((program) => (

              <div
                key={program.id}
                className="bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-3xl overflow-hidden hover:border-amber-500 transition-all duration-300 flex flex-col justify-between shadow-md"
              >

                <div>

                  {/* Image Header */}
                  <div className="relative h-52 lg:h-60 overflow-hidden bg-stone-900">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-amber-800 text-[10px] lg:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full shadow-sm border border-amber-200">
                      {program.tag}
                    </div>

                  </div>

                  {/* Body Content */}
                  <div className="p-6 lg:p-7 space-y-4">

                    <div className="space-y-1.5">

                      <h3 className="font-serif text-lg lg:text-xl font-bold text-stone-900">
                        {program.title}
                      </h3>

                      <p className="text-xs lg:text-sm text-stone-600 leading-relaxed">
                        {program.subtitle}
                      </p>

                    </div>

                    {/* Metadata Pills */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-amber-100 text-center text-xs lg:text-sm font-mono">

                      <div>
                        <span className="text-stone-400 text-[9px] lg:text-[11px] uppercase block font-bold tracking-wider">
                          Duration
                        </span>

                        <span className="font-bold text-stone-800">
                          {program.duration}
                        </span>
                      </div>

                      <div>
                        <span className="text-stone-400 text-[9px] lg:text-[11px] uppercase block font-bold tracking-wider">
                          Burn
                        </span>

                        <span className="font-bold text-amber-700">
                          {program.calories}
                        </span>
                      </div>

                      <div>
                        <span className="text-stone-400 text-[9px] lg:text-[11px] uppercase block font-bold tracking-wider">
                          Level
                        </span>

                        <span className="font-bold text-stone-800">
                          {program.level}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Action Link */}
                <div className="p-6 lg:p-7 pt-4 font-mono">

                  <Link
                    to="/workouts"
                    className="w-full flex items-center justify-center gap-2 bg-stone-50 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white border border-amber-200 text-stone-800 font-bold text-xs lg:text-sm uppercase tracking-[0.15em] py-3 lg:py-3.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>For Details</span>

                    <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= VIP COACHING BANNER ================= */}
        <section className="pt-0">

          <div className="rounded-3xl bg-stone-900 text-white p-8 md:p-12 lg:p-14 overflow-hidden shadow-xl border border-amber-500/30 relative">

            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-8 space-y-4 font-sans">

                <div className="inline-flex items-center gap-2 text-amber-300 text-[10px] lg:text-xs font-mono font-bold uppercase tracking-[0.2em] bg-amber-500/10 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full border border-amber-400/20">

                  <Award className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-400" />

                  <span>Certified Master Conditioning Coaches</span>

                </div>

                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  NEED INDIVIDUAL COACHING & FORM ANALYSIS?
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-stone-300 max-w-xl lg:max-w-2xl font-normal leading-relaxed">
                  Get custom macro-nutrient split timing, video posture analysis, and targeted strength programming direct from our master coaches.
                </p>

                <div className="pt-2 font-mono">

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white text-xs lg:text-sm font-bold uppercase tracking-[0.2em] px-6 py-3.5 lg:px-7 lg:py-4 rounded-xl transition-all shadow-md shadow-amber-600/30"
                  >
                    <span>Book Private Coaching</span>

                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </Link>

                </div>

              </div>

              <div className="lg:col-span-4 flex justify-center">

                {/* object-top keeps the trainer's face in frame; opacity removed so the photo is not dull */}
                <img
                  src={Trainer3Img}
                  alt="Certified personal trainer with arms crossed"
                  className="rounded-2xl border border-amber-500/40 shadow-lg object-cover object-top w-full h-72 lg:h-80"
                />

              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}