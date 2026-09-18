import React, { useState } from 'react';
import { trainersData } from '../data/trainersData';
import { Sparkles, CheckCircle2, Quote, Calendar, X, Send } from 'lucide-react';

export default function Trainers() {
  const [bookingTrainer, setBookingTrainer] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setBookingTrainer(null);
    }, 2500);
  };

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
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 lg:px-5 lg:py-2 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
              Master Coaching Staff
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            WORLD-CLASS FACULTY
          </h1>

          <p className="text-stone-600 text-xs md:text-sm lg:text-base font-normal leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
            Direct 1-on-1 guidance from certified strength specialists and nutritionists dedicated to your physical evolution.
          </p>
        </div>

        {/* ================= TRAINERS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 font-sans">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-4">
                
                {/* Hero Portrait */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-stone-100 border-b border-amber-200/80">
                  <img
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 border border-amber-200 text-amber-800 text-[10px] lg:text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1 lg:px-4 lg:py-1.5 rounded-full backdrop-blur-md shadow-sm">
                      {trainer.experience} Exp
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 space-y-0.5">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white uppercase">
                      {trainer.name}
                    </h2>
                    <span className="text-xs lg:text-sm font-mono text-amber-200 font-medium block">
                      {trainer.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 md:px-6 lg:px-7 space-y-4">
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {trainer.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] lg:text-xs font-mono bg-stone-50 border border-amber-200/80 text-stone-700 px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-lg shadow-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-xs lg:text-sm text-stone-600 font-normal leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Quote */}
                  <div className="relative bg-amber-50/60 border border-amber-200/80 rounded-2xl p-3.5 lg:p-4">
                    <Quote className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400/50 absolute top-3 right-3" />
                    <p className="text-xs lg:text-sm text-stone-900 italic font-serif leading-relaxed pr-5">
                      "{trainer.quote}"
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-amber-100 font-mono text-center">
                    <div>
                      <span className="block text-base lg:text-lg font-bold text-amber-700">{trainer.stats.clientTransformations}</span>
                      <span className="text-[9px] lg:text-[11px] uppercase tracking-wider text-stone-500 block">Transformations</span>
                    </div>
                    <div>
                      <span className="block text-base lg:text-lg font-bold text-stone-900">{trainer.stats.proAthletesCoached}</span>
                      <span className="text-[9px] lg:text-[11px] uppercase tracking-wider text-stone-500 block">Pro Athletes</span>
                    </div>
                    <div>
                      <span className="block text-base lg:text-lg font-bold text-amber-700">{trainer.stats.satisfactionRate}</span>
                      <span className="text-[9px] lg:text-[11px] uppercase tracking-wider text-stone-500 block">Satisfaction</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action CTA */}
              <div className="p-5 md:p-6 lg:p-7 pt-4">
                <button
                  onClick={() => setBookingTrainer(trainer)}
                  className="w-full flex items-center justify-center gap-2 border border-amber-200 bg-white/80 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white hover:border-amber-600 text-amber-700 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] py-3 lg:py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Request Private Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= RESERVATION MODAL ================= */}
        {bookingTrainer && (
          <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-md flex items-center justify-center p-4 font-sans">
            <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl max-w-lg lg:max-w-xl w-full p-6 lg:p-8 space-y-5 relative shadow-xl">
              
              <button
                onClick={() => setBookingTrainer(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 p-2 lg:p-2.5 rounded-full border border-amber-200 hover:border-amber-400 bg-stone-50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold">
                  Private Coaching
                </span>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-stone-900">
                  BOOK WITH {bookingTrainer.name.toUpperCase()}
                </h3>
              </div>

              {formSubmitted ? (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 lg:p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-amber-600 mx-auto" />
                  <h4 className="text-base lg:text-lg font-serif font-bold text-stone-900">REQUEST RECEIVED</h4>
                  <p className="text-xs lg:text-sm text-stone-600 font-normal">
                    Our team will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} className="space-y-3.5 lg:space-y-4 text-xs lg:text-sm font-mono">
                  <div>
                    <label className="block text-stone-500 uppercase tracking-wider text-[10px] lg:text-xs mb-1 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-500 uppercase tracking-wider text-[10px] lg:text-xs mb-1 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-500 uppercase tracking-wider text-[10px] lg:text-xs mb-1 font-bold">
                      Primary Objective *
                    </label>
                    <select className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors">
                      <option>Hypertrophy & Muscle Growth</option>
                      <option>Body Recomposition & Fat Loss</option>
                      <option>Rehabilitation & Biomechanics</option>
                      <option>Pro Athlete Conditioning</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-xs lg:text-sm uppercase tracking-[0.2em] py-3.5 lg:py-4 rounded-xl transition-all shadow-md shadow-amber-600/25 cursor-pointer"
                  >
                    <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>Confirm Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}