import React, { useState } from 'react';

import { gymWorkouts, homeWorkouts, strictWorkouts } from '../data/workoutsData';

import VideoPlayer from '../components/VideoPlayer';

import {
  Crown,
  Dumbbell,
  Home,
  Zap,
  Clock,
  Target,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Sparkles,
  Eye,
  EyeOff,
  ChevronDown
} from 'lucide-react';

import workout1 from '../assets/workout1.mp4';
import workout2 from '../assets/workout2.mp4';

export default function Workouts() {
  const [activeTab, setActiveTab] = useState('all');

  // Phase 1 (Gym) aur Phase 3 (Strict) default me band (collapsed) rahenge
  const [gymOpen, setGymOpen] = useState(false);
  const [strictOpen, setStrictOpen] = useState(false);

  // Home video routines: pehle sirf 4 dikhenge, "View All Videos" par sab 10 khulenge
  const [showAllVideos, setShowAllVideos] = useState(false);

  const localVideos = [workout1, workout2];

  // Jab tak asli data me 10 videos na ho, dono existing local videos ko cycle karke
  // 10 workout cards bana rahe hain
  const TOTAL_VIDEOS = 10;

  const extendedHomeWorkouts = Array.from(
    { length: TOTAL_VIDEOS },
    (_, i) => {
      const base = homeWorkouts[i % homeWorkouts.length];

      return {
        ...base,
        id: `${base.id}-${i}`,
        _videoIndex: i,
      };
    }
  );

  const visibleHomeWorkouts = showAllVideos
    ? extendedHomeWorkouts
    : extendedHomeWorkouts.slice(0, 4);

  const tabs = [
    {
      id: 'all',
      label: 'All Routines',
      icon: <Layers className="w-4 h-4 lg:w-5 lg:h-5" />,
    },
    {
      id: 'gym',
      label: 'Gym Workouts',
      icon: <Dumbbell className="w-4 h-4 lg:w-5 lg:h-5" />,
    },
    {
      id: 'home',
      label: 'Home Video Routines',
      icon: <Home className="w-4 h-4 lg:w-5 lg:h-5" />,
    },
    {
      id: 'strict',
      label: 'Strict Protocols',
      icon: <Zap className="w-4 h-4 lg:w-5 lg:h-5" />,
    },
  ];

  // Reusable View toggle button
  const ViewToggleButton = ({ isOpen, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl transition-all duration-300 border shadow-sm shrink-0 ${
        isOpen
          ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-amber-600/20'
          : 'bg-white/90 text-stone-600 border-amber-200 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50/50'
      }`}
    >
      {isOpen ? (
        <EyeOff className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
      ) : (
        <Eye className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
      )}

      <span>{isOpen ? 'Hide' : 'View'}</span>

      <ChevronDown
        className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );

  return (
    <div
      className="relative text-stone-700 min-h-screen pt-10 pb-20 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{
        backgroundColor: '#F7F5F0',
        backgroundImage:
          'radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)',
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto space-y-4">

          <div className="inline-flex items-center gap-2 border border-amber-300/80 bg-white/80 backdrop-blur-md px-4 py-1.5 lg:px-5 lg:py-2 rounded-full shadow-sm">
            <Crown className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />

            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-amber-800 font-serif">
              High Performance Workouts Hub
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            TRAINING PROTOCOLS
          </h1>

          {/* Desktop word spacing fixed only */}
          <p className="text-stone-600 text-xs md:text-sm lg:text-base font-normal leading-relaxed max-w-2xl lg:max-w-3xl mx-auto tracking-normal lg:[word-spacing:0.12em]">
            From precision gym hypertrophy and video-guided home bodyweight routines to strict, high-intensity time-gated performance protocols.
          </p>

          {/* Tab Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-3 pt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 text-xs lg:text-sm font-bold uppercase tracking-wider px-5 py-3 lg:px-6 lg:py-3.5 rounded-xl transition-all duration-300 border shadow-sm ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-amber-600/20'
                    : 'bg-white/90 text-stone-600 border-amber-200 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ================= SECTION 1: GYM WORKOUTS ================= */}
        {(activeTab === 'all' || activeTab === 'gym') && (
          <section className="space-y-6">

            <div className="border-b border-amber-200/80 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

              <div>
                <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold block">
                  Phase 01
                </span>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900 flex items-center gap-2.5 font-serif">
                  <Dumbbell className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />
                  Gym Hypertrophy & Power
                </h2>
              </div>

              <div className="flex items-center gap-3 flex-wrap">

                <span className="text-xs lg:text-sm font-mono text-stone-500 uppercase tracking-widest">
                  {gymWorkouts.length} Curated Workouts
                </span>

                <ViewToggleButton
                  isOpen={gymOpen}
                  onClick={() => setGymOpen((prev) => !prev)}
                />

              </div>
            </div>

            {gymOpen && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                {gymWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 lg:p-7 space-y-5 hover:border-amber-400 transition-colors shadow-sm"
                  >

                    {/* Card Header */}
                    <div className="space-y-3">

                      <div className="flex flex-wrap items-center justify-between gap-2">

                        <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full">
                          {workout.level}
                        </span>

                        <div className="flex items-center gap-2 text-xs lg:text-sm text-stone-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />
                            {workout.duration}
                          </span>
                        </div>

                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-serif">
                        {workout.title}
                      </h3>

                      <p className="text-xs lg:text-sm text-stone-600 font-normal leading-relaxed tracking-normal lg:[word-spacing:0.12em]">
                        {workout.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs lg:text-sm font-mono text-stone-500">
                        <Target className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600 shrink-0" />

                        <span>
                          Target:{' '}
                          <strong className="text-stone-900">
                            {workout.targetGroup}
                          </strong>
                        </span>
                      </div>

                    </div>

                    {/* Exercises Table */}
                    <div className="border border-amber-200/60 rounded-2xl overflow-hidden bg-stone-50/50">

                      <div className="grid grid-cols-12 bg-amber-50/80 p-3 lg:p-3.5 text-[10px] lg:text-xs font-mono uppercase tracking-widest text-amber-900 font-bold border-b border-amber-200/60">
                        <div className="col-span-6">Exercise</div>
                        <div className="col-span-2 text-center">Sets</div>
                        <div className="col-span-2 text-center">Reps</div>
                        <div className="col-span-2 text-center">Rest</div>
                      </div>

                      <div className="divide-y divide-amber-100 text-xs lg:text-sm">

                        {workout.exercises.map((ex, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 lg:p-4 hover:bg-amber-50/30 transition-colors"
                          >

                            <div className="grid grid-cols-12 items-center font-medium">

                              <div className="col-span-6 text-stone-900 font-semibold">
                                {ex.name}
                              </div>

                              <div className="col-span-2 text-center font-mono text-amber-700 font-bold">
                                {ex.sets}
                              </div>

                              <div className="col-span-2 text-center font-mono text-stone-700">
                                {ex.reps}
                              </div>

                              <div className="col-span-2 text-center font-mono text-stone-500">
                                {ex.rest}
                              </div>

                            </div>

                            {ex.note && (
                              <p className="text-[11px] lg:text-xs text-stone-500 font-normal mt-1.5 pl-2.5 border-l-2 border-amber-400 tracking-normal lg:[word-spacing:0.12em]">
                                {ex.note}
                              </p>
                            )}

                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}

          </section>
        )}

        {/* ================= SECTION 2: HOME VIDEO ROUTINES ================= */}
        {(activeTab === 'all' || activeTab === 'home') && (
          <section className="space-y-6 pt-4">

            <div className="border-b border-amber-200/80 pb-3 flex items-center justify-between">

              <div>
                <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold block">
                  Phase 02
                </span>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900 flex items-center gap-2.5 font-serif">
                  <Home className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />
                  Home Video Demonstrations
                </h2>
              </div>

              <span className="hidden sm:inline-block text-xs lg:text-sm font-mono text-stone-500 uppercase tracking-widest">
                Bodyweight & Calisthenics
              </span>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {visibleHomeWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden p-6 lg:p-7 space-y-5 flex flex-col justify-between shadow-sm hover:border-amber-400 transition-colors"
                >

                  {/* Embedded Custom Video Player */}
                  <VideoPlayer
                    videoUrl={
                      localVideos[
                        workout._videoIndex % localVideos.length
                      ]
                    }
                    posterUrl={workout.posterUrl}
                    title={workout.title}
                    category={workout.category}
                    duration={workout.duration}
                  />

                  {/* Workout Info & Step-by-Step Instructions */}
                  <div className="space-y-4">

                    <p className="text-xs lg:text-sm text-stone-600 font-normal leading-relaxed tracking-normal lg:[word-spacing:0.12em]">
                      {workout.description}
                    </p>

                    <div className="bg-stone-50/80 border border-amber-200/60 rounded-2xl p-4 lg:p-5 space-y-2.5">

                      <h4 className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-amber-800 font-bold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />
                        Key Execution Steps
                      </h4>

                      <ul className="space-y-1.5 text-xs lg:text-sm text-stone-700 font-normal">

                        {workout.instructions.map((step, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5"
                          >
                            <span className="text-amber-600 font-mono font-bold text-[10px] lg:text-xs pt-0.5">
                              {idx + 1}.
                            </span>

                            <span className="tracking-normal lg:[word-spacing:0.12em]">
                              {step}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* View All Videos Toggle */}
            {extendedHomeWorkouts.length > 4 && (
              <div className="flex justify-center pt-2">

                <button
                  onClick={() => setShowAllVideos((prev) => !prev)}
                  className={`flex items-center gap-2 text-xs lg:text-sm font-bold uppercase tracking-wider px-6 py-3 lg:px-7 lg:py-3.5 rounded-xl transition-all duration-300 border shadow-sm ${
                    showAllVideos
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-amber-600/20'
                      : 'bg-white/90 text-stone-600 border-amber-200 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50/50'
                  }`}
                >

                  {showAllVideos ? (
                    <EyeOff className="w-4 h-4 lg:w-5 lg:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                  )}

                  <span>
                    {showAllVideos
                      ? 'Show Less'
                      : `View All Videos (${extendedHomeWorkouts.length})`}
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${
                      showAllVideos ? 'rotate-180' : ''
                    }`}
                  />

                </button>

              </div>
            )}

          </section>
        )}

        {/* ================= SECTION 3: STRICT PROTOCOLS ================= */}
        {(activeTab === 'all' || activeTab === 'strict') && (
          <section className="space-y-6 pt-4">

            <div className="border-b border-amber-200/80 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

              <div>
                <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold block">
                  Phase 03
                </span>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900 flex items-center gap-2.5 font-serif">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />
                  Strict Performance Protocols
                </h2>
              </div>

              <div className="flex items-center gap-3 flex-wrap">

                <span className="text-xs lg:text-sm font-mono text-stone-500 uppercase tracking-widest">
                  Max RPE & Time-Gated
                </span>

                <ViewToggleButton
                  isOpen={strictOpen}
                  onClick={() => setStrictOpen((prev) => !prev)}
                />

              </div>

            </div>

            {strictOpen && (
              <div className="space-y-6 lg:space-y-8">

                {strictWorkouts.map((strict) => (
                  <div
                    key={strict.id}
                    className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm hover:border-amber-400 transition-colors"
                  >

                    {/* Warning Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-5">

                      <div className="space-y-1.5">

                        <div className="flex items-center gap-1.5 text-amber-700 text-xs lg:text-sm font-bold uppercase tracking-widest">
                          <AlertTriangle className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
                          <span>{strict.intensityLevel}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900 font-serif">
                          {strict.protocolTitle}
                        </h3>

                      </div>

                      <div className="flex flex-wrap gap-3 font-mono text-xs lg:text-sm">

                        <div className="bg-stone-50/80 border border-amber-200/60 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl">
                          <span className="text-stone-400 block text-[9px] lg:text-[11px] uppercase">
                            Rest Interval
                          </span>

                          <span className="text-amber-700 font-bold">
                            {strict.restInterval}
                          </span>
                        </div>

                        <div className="bg-stone-50/80 border border-amber-200/60 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl">
                          <span className="text-stone-400 block text-[9px] lg:text-[11px] uppercase">
                            Required Tempo
                          </span>

                          <span className="text-amber-700 font-bold">
                            {strict.tempo}
                          </span>
                        </div>

                      </div>

                    </div>

                    {/* Rules Box */}
                    <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-5 lg:p-6 space-y-3">

                      <h4 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-amber-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
                        Mandatory Protocol Rules
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs lg:text-sm text-stone-700 font-normal">

                        {strict.protocolRules.map((rule, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 bg-white p-3.5 lg:p-4 rounded-xl border border-amber-200/60 shadow-sm"
                          >
                            <span className="text-amber-600 font-mono font-bold">
                              •
                            </span>

                            <span className="tracking-normal lg:[word-spacing:0.12em]">
                              {rule}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>

                    {/* Protocol Breakdown Table */}
                    <div className="border border-amber-200/60 rounded-2xl overflow-hidden bg-stone-50/50">

                      <div className="grid grid-cols-12 bg-amber-50/80 p-3 lg:p-3.5 text-[10px] lg:text-xs font-mono uppercase tracking-widest text-amber-900 font-bold border-b border-amber-200/60">
                        <div className="col-span-5">Exercise Target</div>
                        <div className="col-span-2 text-center">Sets</div>
                        <div className="col-span-2 text-center">Reps</div>
                        <div className="col-span-3 text-center">
                          Target RPE / Tempo
                        </div>
                      </div>

                      <div className="divide-y divide-amber-100 text-xs lg:text-sm">

                        {strict.breakdown.map((item, idx) => (
                          <div
                            key={idx}
                            className="grid grid-cols-12 p-3.5 lg:p-4 items-center font-medium hover:bg-amber-50/30 transition-colors"
                          >

                            <div className="col-span-5 text-stone-900 font-bold">
                              {item.exercise}
                            </div>

                            <div className="col-span-2 text-center font-mono text-amber-700 font-bold">
                              {item.sets}
                            </div>

                            <div className="col-span-2 text-center font-mono text-stone-700">
                              {item.reps}
                            </div>

                            <div className="col-span-3 text-center font-mono text-stone-500">
                              <span className="text-amber-700 font-bold">
                                {item.targetRPE}
                              </span>{' '}
                              ({item.tempo})
                            </div>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </section>
        )}

      </div>
    </div>
  );
}